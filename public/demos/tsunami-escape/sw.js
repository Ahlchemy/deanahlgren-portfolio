// Tsunami Escape App - Service Worker
// Provides offline functionality for emergency situations

const CACHE_NAME = 'tsunami-escape-v1.0.0';
const STATIC_CACHE = 'tsunami-static-v1.0.0';
const DYNAMIC_CACHE = 'tsunami-dynamic-v1.0.0';
const MAP_CACHE = 'tsunami-maps-v1.0.0';

// Core files that must be cached for offline functionality
const CORE_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/css/styles.css',
  '/css/themes.css',
  '/js/app.js',
  '/js/location.js'
];

// Extended files for enhanced offline experience
const STATIC_FILES = [
  '/assets/icons/icon-192x192.png',
  '/assets/icons/icon-512x512.png'
];

// Install event - Cache core files immediately
self.addEventListener('install', event => {
  console.log('[SW] Installing service worker...');
  
  event.waitUntil(
    Promise.all([
      // Cache core application files
      caches.open(STATIC_CACHE).then(cache => {
        console.log('[SW] Caching core files');
        return cache.addAll(CORE_FILES);
      }),
      
      // Cache static assets
      caches.open(STATIC_CACHE).then(cache => {
        console.log('[SW] Caching static files');
        return cache.addAll(STATIC_FILES).catch(err => {
          // Non-critical files - don't fail installation
          console.warn('[SW] Failed to cache some static files:', err);
        });
      })
    ]).then(() => {
      console.log('[SW] Installation complete');
      // Skip waiting to activate immediately
      return self.skipWaiting();
    })
  );
});

// Activate event - Clean up old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating service worker...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Delete old cache versions
          if (cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE && 
              cacheName !== MAP_CACHE) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW] Activation complete');
      // Take control of all pages immediately
      return self.clients.claim();
    })
  );
});

// Fetch event - Handle all network requests
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Handle different types of requests
  if (request.method === 'GET') {
    if (isCoreFile(request.url)) {
      // Core files: Cache first, network fallback
      event.respondWith(cacheFirst(request));
    } else if (isMapTile(request.url)) {
      // Map tiles: Cache first with long-term storage
      event.respondWith(cacheMapTile(request));
    } else if (isAPI(request.url)) {
      // API requests: Network first, cache fallback
      event.respondWith(networkFirst(request));
    } else if (isStaticAsset(request.url)) {
      // Static assets: Cache first
      event.respondWith(cacheFirst(request));
    } else {
      // Other requests: Network first
      event.respondWith(networkFirst(request));
    }
  }
});

// Cache-first strategy (for core files and static assets)
async function cacheFirst(request) {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      console.log('[SW] Serving from cache:', request.url);
      return cachedResponse;
    }
    
    // Not in cache, fetch from network
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful responses
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('[SW] Cache-first failed:', error);
    
    // Return offline fallback for HTML requests
    if (request.destination === 'document') {
      const cache = await caches.open(STATIC_CACHE);
      return cache.match('/index.html');
    }
    
    throw error;
  }
}

// Network-first strategy (for dynamic content and APIs)
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful responses for offline access
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url);
    
    // Network failed, try cache
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // No cache available, return offline response
    if (request.destination === 'document') {
      const staticCache = await caches.open(STATIC_CACHE);
      return staticCache.match('/index.html');
    }
    
    throw error;
  }
}

// Specialized caching for map tiles
async function cacheMapTile(request) {
  try {
    const cache = await caches.open(MAP_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      console.log('[SW] Serving map tile from cache');
      return cachedResponse;
    }
    
    // Fetch from network
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache map tiles with size management
      await manageMapCacheSize(cache);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('[SW] Map tile request failed:', error);
    
    // Return placeholder or cached tile if available
    const cache = await caches.open(MAP_CACHE);
    const fallback = await cache.match(request);
    
    if (fallback) {
      return fallback;
    }
    
    throw error;
  }
}

// Manage map cache size to prevent storage overflow
async function manageMapCacheSize(cache) {
  const MAX_MAP_CACHE_ITEMS = 1000; // Approximately 50MB of map tiles
  
  try {
    const requests = await cache.keys();
    
    if (requests.length >= MAX_MAP_CACHE_ITEMS) {
      // Remove oldest 20% of cached tiles
      const itemsToDelete = Math.floor(requests.length * 0.2);
      const deletePromises = requests
        .slice(0, itemsToDelete)
        .map(request => cache.delete(request));
      
      await Promise.all(deletePromises);
      console.log(`[SW] Cleaned up ${itemsToDelete} old map tiles`);
    }
  } catch (error) {
    console.error('[SW] Map cache cleanup failed:', error);
  }
}

// Helper functions to identify request types
function isCoreFile(url) {
  return CORE_FILES.some(file => url.endsWith(file)) ||
         url.includes('/css/') ||
         url.includes('/js/');
}

function isMapTile(url) {
  return url.includes('tile') ||
         url.includes('osm') ||
         url.includes('openstreetmap') ||
         url.match(/\/\d+\/\d+\/\d+\.(png|jpg|jpeg)$/);
}

function isAPI(url) {
  return url.includes('/api/') ||
         url.includes('tsunami') ||
         url.includes('noaa') ||
         url.includes('geocode');
}

function isStaticAsset(url) {
  return url.includes('/assets/') ||
         url.includes('/data/') ||
         url.match(/\.(png|jpg|jpeg|gif|svg|ico|json)$/);
}

// Background sync for critical data updates
self.addEventListener('sync', event => {
  console.log('[SW] Background sync triggered:', event.tag);
  
  if (event.tag === 'tsunami-alerts') {
    event.waitUntil(syncTsunamiAlerts());
  } else if (event.tag === 'location-data') {
    event.waitUntil(syncLocationData());
  }
});

// Sync tsunami alert data when network is available
async function syncTsunamiAlerts() {
  try {
    console.log('[SW] Syncing tsunami alerts...');
    
    // This would typically fetch from NOAA or emergency services
    const response = await fetch('/api/tsunami-alerts');
    
    if (response.ok) {
      const alerts = await response.json();
      
      // Store in cache for offline access
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put('/api/tsunami-alerts', new Response(JSON.stringify(alerts)));
      
      // Notify active clients of new alerts
      if (alerts.active && alerts.active.length > 0) {
        const clients = await self.clients.matchAll();
        clients.forEach(client => {
          client.postMessage({
            type: 'TSUNAMI_ALERT',
            data: alerts
          });
        });
      }
      
      console.log('[SW] Tsunami alerts synced successfully');
    }
  } catch (error) {
    console.error('[SW] Failed to sync tsunami alerts:', error);
  }
}

// Sync location-specific evacuation data
async function syncLocationData() {
  try {
    console.log('[SW] Syncing location data...');
    
    // Get stored location data
    const cache = await caches.open(DYNAMIC_CACHE);
    const locationResponse = await cache.match('/api/user-location');
    
    if (locationResponse) {
      const location = await locationResponse.json();
      
      // Fetch updated evacuation routes for this location
      const routesResponse = await fetch(`/api/evacuation-routes?lat=${location.lat}&lng=${location.lng}`);
      
      if (routesResponse.ok) {
        cache.put(`/api/evacuation-routes?lat=${location.lat}&lng=${location.lng}`, 
                  routesResponse.clone());
        console.log('[SW] Location data synced successfully');
      }
    }
  } catch (error) {
    console.error('[SW] Failed to sync location data:', error);
  }
}

// Handle push notifications for emergency alerts
self.addEventListener('push', event => {
  console.log('[SW] Push notification received');
  
  let notificationData = {
    title: 'Tsunami Escape Alert',
    body: 'Check the app for important updates',
    icon: '/assets/icons/icon-192x192.png',
    badge: '/assets/icons/icon-192x192.png',
    tag: 'tsunami-alert',
    requireInteraction: true,
    actions: [
      {
        action: 'view',
        title: 'View Details'
      },
      {
        action: 'dismiss',
        title: 'Dismiss'
      }
    ]
  };
  
  if (event.data) {
    try {
      const pushData = event.data.json();
      notificationData = { ...notificationData, ...pushData };
    } catch (error) {
      console.error('[SW] Failed to parse push data:', error);
    }
  }
  
  event.waitUntil(
    self.registration.showNotification(notificationData.title, notificationData)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  console.log('[SW] Notification clicked:', event.action);
  
  event.notification.close();
  
  if (event.action === 'view') {
    // Open the app to the relevant section
    event.waitUntil(
      clients.matchAll().then(clientList => {
        // Focus existing window if available
        for (const client of clientList) {
          if (client.url.includes('/') && 'focus' in client) {
            return client.focus();
          }
        }
        
        // Open new window if no existing one
        if (clients.openWindow) {
          return clients.openWindow('/');
        }
      })
    );
  }
});

// Message handling for communication with main app
self.addEventListener('message', event => {
  console.log('[SW] Message received:', event.data);
  
  const { type, data } = event.data;
  
  switch (type) {
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;
      
    case 'CACHE_MAP_AREA':
      event.waitUntil(cacheMapArea(data));
      break;
      
    case 'CLEAR_CACHE':
      event.waitUntil(clearCache(data.cacheType));
      break;
      
    case 'GET_CACHE_SIZE':
      event.waitUntil(getCacheSize().then(size => {
        event.ports[0].postMessage({ type: 'CACHE_SIZE', size });
      }));
      break;
  }
});

// Cache map tiles for a specific geographic area
async function cacheMapArea(area) {
  try {
    console.log('[SW] Caching map area:', area);
    
    const { bounds, zoomLevels } = area;
    const cache = await caches.open(MAP_CACHE);
    
    // Generate tile URLs for the specified area and zoom levels
    const tileUrls = generateTileUrls(bounds, zoomLevels);
    
    // Cache tiles in batches to avoid overwhelming the server
    const BATCH_SIZE = 10;
    for (let i = 0; i < tileUrls.length; i += BATCH_SIZE) {
      const batch = tileUrls.slice(i, i + BATCH_SIZE);
      
      const promises = batch.map(async url => {
        try {
          const response = await fetch(url);
          if (response.ok) {
            await cache.put(url, response);
          }
        } catch (error) {
          console.warn('[SW] Failed to cache tile:', url, error);
        }
      });
      
      await Promise.all(promises);
      
      // Add delay between batches to be respectful to tile servers
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    console.log(`[SW] Cached ${tileUrls.length} map tiles`);
  } catch (error) {
    console.error('[SW] Failed to cache map area:', error);
  }
}

// Generate tile URLs for a geographic bounding box
function generateTileUrls(bounds, zoomLevels) {
  const urls = [];
  const tileServer = 'https://tile.openstreetmap.org';
  
  zoomLevels.forEach(zoom => {
    const minTile = deg2tile(bounds.north, bounds.west, zoom);
    const maxTile = deg2tile(bounds.south, bounds.east, zoom);
    
    for (let x = minTile.x; x <= maxTile.x; x++) {
      for (let y = minTile.y; y <= maxTile.y; y++) {
        urls.push(`${tileServer}/${zoom}/${x}/${y}.png`);
      }
    }
  });
  
  return urls;
}

// Convert degrees to tile coordinates
function deg2tile(lat, lon, zoom) {
  const latRad = lat * Math.PI / 180;
  const n = Math.pow(2, zoom);
  
  return {
    x: Math.floor((lon + 180) / 360 * n),
    y: Math.floor((1 - Math.asinh(Math.tan(latRad)) / Math.PI) / 2 * n)
  };
}

// Clear specific cache types
async function clearCache(cacheType) {
  try {
    let cacheName;
    
    switch (cacheType) {
      case 'maps':
        cacheName = MAP_CACHE;
        break;
      case 'dynamic':
        cacheName = DYNAMIC_CACHE;
        break;
      case 'all':
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(name => caches.delete(name)));
        console.log('[SW] All caches cleared');
        return;
      default:
        console.warn('[SW] Unknown cache type:', cacheType);
        return;
    }
    
    await caches.delete(cacheName);
    console.log(`[SW] ${cacheType} cache cleared`);
  } catch (error) {
    console.error('[SW] Failed to clear cache:', error);
  }
}

// Get total cache size
async function getCacheSize() {
  try {
    let totalSize = 0;
    const cacheNames = await caches.keys();
    
    for (const cacheName of cacheNames) {
      const cache = await caches.open(cacheName);
      const requests = await cache.keys();
      
      for (const request of requests) {
        const response = await cache.match(request);
        if (response) {
          const blob = await response.blob();
          totalSize += blob.size;
        }
      }
    }
    
    return totalSize;
  } catch (error) {
    console.error('[SW] Failed to calculate cache size:', error);
    return 0;
  }
}