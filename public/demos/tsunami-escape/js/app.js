// Tsunami Escape App - Main Application
// Handles PWA functionality, UI interactions, and emergency state management

class TsunamiEscapeApp {
  constructor() {
    this.isOnline = navigator.onLine;
    this.currentLocation = null;
    this.tsunamiZone = null;
    this.serviceWorkerRegistration = null;
    this.deferredPrompt = null;
    
    // Initialize app when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.init());
    } else {
      this.init();
    }
  }
  
  async init() {
    console.log('[APP] Initializing Tsunami Escape App...');
    
    try {
      // Initialize core systems
      await this.registerServiceWorker();
      this.setupEventListeners();
      this.updateConnectionStatus();
      this.setupPWAInstallPrompt();
      this.checkForUpdates();
      
      // Initialize location detection
      if (window.LocationService) {
        window.LocationService.init((location) => {
          this.handleLocationUpdate(location);
        });
      }
      
      console.log('[APP] App initialization complete');
    } catch (error) {
      console.error('[APP] Initialization failed:', error);
      this.showError('Failed to initialize app. Please refresh the page.');
    }
  }
  
  // Register service worker for offline functionality
  async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        console.log('[APP] Registering service worker...');
        
        this.serviceWorkerRegistration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/'
        });
        
        console.log('[APP] Service worker registered:', this.serviceWorkerRegistration.scope);
        
        // Listen for service worker updates
        this.serviceWorkerRegistration.addEventListener('updatefound', () => {
          console.log('[APP] Service worker update found');
          this.handleServiceWorkerUpdate();
        });
        
        // Listen for messages from service worker
        navigator.serviceWorker.addEventListener('message', event => {
          this.handleServiceWorkerMessage(event.data);
        });
        
      } catch (error) {
        console.error('[APP] Service worker registration failed:', error);
      }
    } else {
      console.warn('[APP] Service workers not supported');
      this.showWarning('Offline functionality not available in this browser');
    }
  }
  
  // Set up all event listeners
  setupEventListeners() {
    // Connection status
    window.addEventListener('online', () => this.handleConnectionChange(true));
    window.addEventListener('offline', () => this.handleConnectionChange(false));
    
    // Location actions
    const updateLocationBtn = document.getElementById('update-location');
    const findAddressBtn = document.getElementById('find-address');
    const addressInput = document.getElementById('address-input');
    
    if (updateLocationBtn) {
      updateLocationBtn.addEventListener('click', () => this.requestLocation());
    }
    
    if (findAddressBtn) {
      findAddressBtn.addEventListener('click', () => this.findAddress());
    }
    
    if (addressInput) {
      addressInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.findAddress();
        }
      });
    }
    
    // Zone actions
    const findEvacuationBtn = document.getElementById('find-evacuation');
    const downloadMapsBtn = document.getElementById('download-maps');
    
    if (findEvacuationBtn) {
      findEvacuationBtn.addEventListener('click', () => this.findEvacuationRoute());
    }
    
    if (downloadMapsBtn) {
      downloadMapsBtn.addEventListener('click', () => this.downloadOfflineMaps());
    }
    
    // Quick actions
    this.setupQuickActions();
    
    // Install banner
    const installBtn = document.getElementById('install-button');
    const dismissInstallBtn = document.getElementById('dismiss-install');
    
    if (installBtn) {
      installBtn.addEventListener('click', () => this.installApp());
    }
    
    if (dismissInstallBtn) {
      dismissInstallBtn.addEventListener('click', () => this.dismissInstallPrompt());
    }
  }
  
  // Set up quick action buttons
  setupQuickActions() {
    const actions = {
      'practice-mode': () => this.startPracticeMode(),
      'emergency-contacts': () => this.showEmergencyContacts(),
      'offline-maps': () => this.showOfflineMapManager(),
      'settings': () => this.showSettings()
    };
    
    Object.entries(actions).forEach(([id, handler]) => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('click', handler);
      }
    });
  }
  
  // Handle connection status changes
  handleConnectionChange(isOnline) {
    console.log(`[APP] Connection status: ${isOnline ? 'online' : 'offline'}`);
    this.isOnline = isOnline;
    this.updateConnectionStatus();
    
    if (isOnline) {
      // Sync data when connection is restored
      this.syncData();
    }
  }
  
  // Update connection status indicator
  updateConnectionStatus() {
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    
    if (statusDot && statusText) {
      if (this.isOnline) {
        statusDot.className = 'status-dot online';
        statusText.textContent = 'Online';
      } else {
        statusDot.className = 'status-dot offline';
        statusText.textContent = 'Offline';
      }
    }
  }
  
  // Handle location updates
  handleLocationUpdate(location) {
    console.log('[APP] Location updated:', location);
    this.currentLocation = location;
    this.displayLocation(location);
    this.assessTsunamiZone(location);
  }
  
  // Display current location
  displayLocation(location) {
    const locationStatus = document.getElementById('location-status');
    const locationDisplay = document.getElementById('location-display');
    const locationAddress = document.getElementById('location-address');
    const locationCoords = document.getElementById('location-coords');
    
    if (locationStatus) locationStatus.hidden = true;
    if (locationDisplay) locationDisplay.hidden = false;
    
    if (locationAddress) {
      locationAddress.textContent = location.address || 'Current Location';
    }
    
    if (locationCoords) {
      locationCoords.textContent = `${location.lat.toFixed(6)}, ${location.lng.toFixed(6)}`;
    }
  }
  
  // Assess tsunami risk zone for location
  async assessTsunamiZone(location) {
    try {
      console.log('[APP] Assessing tsunami zone for location...');
      
      // This would typically call a real tsunami zone API
      const zone = await this.getTsunamiZone(location);
      this.tsunamiZone = zone;
      this.displayTsunamiZone(zone);
      
    } catch (error) {
      console.error('[APP] Failed to assess tsunami zone:', error);
      this.showZoneError();
    }
  }
  
  // Get tsunami zone data (mock implementation)
  async getTsunamiZone(location) {
    // Mock tsunami zone assessment based on coastal proximity
    // In production, this would query NOAA tsunami zone APIs
    
    const { lat, lng } = location;
    
    // Simple coastal proximity check (this is a simplified example)
    const isCoastal = this.isCoastalLocation(lat, lng);
    const elevation = await this.getElevation(lat, lng);
    
    let riskLevel = 'safe';
    let description = 'You are in a safe zone';
    
    if (isCoastal) {
      if (elevation < 10) {
        riskLevel = 'extreme';
        description = 'EVACUATION ZONE - Move to higher ground immediately if tsunami warning is issued';
      } else if (elevation < 30) {
        riskLevel = 'high';
        description = 'High risk zone - Be prepared to evacuate quickly';
      } else if (elevation < 50) {
        riskLevel = 'moderate';
        description = 'Moderate risk zone - Stay alert for tsunami warnings';
      } else {
        riskLevel = 'low';
        description = 'Low risk zone - Monitor emergency alerts';
      }
    }
    
    return {
      level: riskLevel,
      description,
      elevation,
      isCoastal,
      evacuationRequired: riskLevel === 'extreme' || riskLevel === 'high'
    };
  }
  
  // Simple coastal detection (enhanced version would use real geographic data)
  isCoastalLocation(lat, lng) {
    // Hawaii coordinates
    if (lat >= 18.9 && lat <= 22.2 && lng >= -160.3 && lng <= -154.8) {
      return true;
    }
    
    // US West Coast coordinates (simplified)
    if (lat >= 32.5 && lat <= 48.4 && lng >= -124.8 && lng <= -117.1) {
      return true;
    }
    
    return false;
  }
  
  // Mock elevation service
  async getElevation(lat, lng) {
    // In production, use a real elevation API
    return Math.random() * 100; // Random elevation for demo
  }
  
  // Display tsunami zone assessment
  displayTsunamiZone(zone) {
    const zoneCard = document.getElementById('zone-card');
    const zoneLevel = document.getElementById('zone-level');
    const zoneDescription = document.getElementById('zone-description');
    const zoneActions = document.getElementById('zone-actions');
    
    if (!zoneCard || !zoneLevel || !zoneDescription) return;
    
    // Update zone level text
    zoneLevel.textContent = zone.level.toUpperCase();
    zoneDescription.textContent = zone.description;
    
    // Update zone card class for styling
    zoneCard.className = `zone-card zone-${zone.level}`;
    
    // Show/hide actions based on risk level
    if (zoneActions) {
      if (zone.evacuationRequired || zone.level !== 'safe') {
        zoneActions.hidden = false;
      } else {
        zoneActions.hidden = true;
      }
    }
    
    // Show emergency alert if in evacuation zone
    if (zone.level === 'extreme') {
      this.showEmergencyAlert();
    }
  }
  
  // Show zone assessment error
  showZoneError() {
    const zoneLevel = document.getElementById('zone-level');
    const zoneDescription = document.getElementById('zone-description');
    
    if (zoneLevel) zoneLevel.textContent = 'UNKNOWN';
    if (zoneDescription) {
      zoneDescription.textContent = 'Unable to determine risk level. Please check your connection.';
    }
  }
  
  // Show emergency alert banner
  showEmergencyAlert() {
    const alertSection = document.getElementById('alert-section');
    if (alertSection) {
      alertSection.hidden = false;
      
      // Scroll to alert
      alertSection.scrollIntoView({ behavior: 'smooth' });
      
      // Set up alert action
      const viewEvacuationBtn = document.getElementById('view-evacuation');
      if (viewEvacuationBtn) {
        viewEvacuationBtn.addEventListener('click', () => this.findEvacuationRoute());
      }
    }
  }
  
  // Request user location
  async requestLocation() {
    if (window.LocationService) {
      this.showLoading('Getting your location...');
      try {
        await window.LocationService.getCurrentLocation();
      } catch (error) {
        this.hideLoading();
        this.showError('Failed to get location. Please try manual address entry.');
        this.showManualLocationInput();
      }
      this.hideLoading();
    }
  }
  
  // Find address manually
  async findAddress() {
    const addressInput = document.getElementById('address-input');
    if (!addressInput || !addressInput.value.trim()) {
      this.showError('Please enter an address');
      return;
    }
    
    const address = addressInput.value.trim();
    this.showLoading('Finding address...');
    
    try {
      if (window.LocationService) {
        await window.LocationService.geocodeAddress(address);
      }
    } catch (error) {
      this.showError('Address not found. Please try a different address.');
    }
    
    this.hideLoading();
  }
  
  // Show manual location input
  showManualLocationInput() {
    const locationManual = document.getElementById('location-manual');
    if (locationManual) {
      locationManual.hidden = false;
    }
  }
  
  // Find evacuation route
  async findEvacuationRoute() {
    if (!this.currentLocation) {
      this.showError('Location needed to find evacuation routes');
      return;
    }
    
    this.showLoading('Finding evacuation routes...');
    
    try {
      // This would integrate with a real routing service
      console.log('[APP] Finding evacuation routes for:', this.currentLocation);
      
      // Mock evacuation route finding
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      this.showInfo('Evacuation route found! Navigate to the nearest high ground or designated shelter.');
      
    } catch (error) {
      this.showError('Failed to find evacuation routes. Please move to higher ground.');
    }
    
    this.hideLoading();
  }
  
  // Download offline maps
  async downloadOfflineMaps() {
    if (!this.currentLocation) {
      this.showError('Location needed to download maps');
      return;
    }
    
    this.showLoading('Downloading offline maps...');
    
    try {
      // Send message to service worker to cache map area
      if (navigator.serviceWorker && navigator.serviceWorker.controller) {
        const mapArea = {
          bounds: this.getMapBounds(this.currentLocation),
          zoomLevels: [10, 11, 12, 13, 14, 15] // Focus on useful zoom levels
        };
        
        navigator.serviceWorker.controller.postMessage({
          type: 'CACHE_MAP_AREA',
          data: mapArea
        });
        
        // Wait for download to complete (mock timing)
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        this.showSuccess('Offline maps downloaded successfully!');
      } else {
        throw new Error('Service worker not available');
      }
    } catch (error) {
      this.showError('Failed to download offline maps');
    }
    
    this.hideLoading();
  }
  
  // Get map bounds around location
  getMapBounds(location) {
    const offset = 0.05; // ~5km radius
    return {
      north: location.lat + offset,
      south: location.lat - offset,
      east: location.lng + offset,
      west: location.lng - offset
    };
  }
  
  // Start practice mode
  startPracticeMode() {
    if (!this.currentLocation || !this.tsunamiZone) {
      this.showError('Location and zone assessment needed for practice mode');
      return;
    }
    
    this.showInfo('Practice mode: This would start a simulated evacuation drill');
    console.log('[APP] Starting practice mode');
  }
  
  // Show emergency contacts
  showEmergencyContacts() {
    const contacts = `
      🚨 EMERGENCY CONTACTS 🚨
      
      • 911 - Emergency Services
      • Pacific Tsunami Warning Center: (808) 725-8830
      • Hawaii Emergency Management: (808) 733-4300
      • American Red Cross: 1-800-RED-CROSS
      
      Always call 911 first in emergencies!
    `;
    
    this.showInfo(contacts);
  }
  
  // Show offline map manager
  showOfflineMapManager() {
    this.showInfo('Offline Maps Manager: Configure which areas to download for offline access');
  }
  
  // Show settings
  showSettings() {
    this.showInfo('Settings: Language, notifications, and app preferences');
  }
  
  // PWA install prompt handling
  setupPWAInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('[APP] Install prompt available');
      e.preventDefault();
      this.deferredPrompt = e;
      this.showInstallBanner();
    });
    
    window.addEventListener('appinstalled', () => {
      console.log('[APP] App installed');
      this.hideInstallBanner();
      this.deferredPrompt = null;
    });
  }
  
  // Show install banner
  showInstallBanner() {
    const installBanner = document.getElementById('install-banner');
    if (installBanner) {
      installBanner.hidden = false;
    }
  }
  
  // Hide install banner
  hideInstallBanner() {
    const installBanner = document.getElementById('install-banner');
    if (installBanner) {
      installBanner.hidden = true;
    }
  }
  
  // Install app
  async installApp() {
    if (!this.deferredPrompt) {
      console.log('[APP] No install prompt available');
      return;
    }
    
    this.deferredPrompt.prompt();
    
    const { outcome } = await this.deferredPrompt.userChoice;
    console.log(`[APP] Install prompt outcome: ${outcome}`);
    
    this.deferredPrompt = null;
    this.hideInstallBanner();
  }
  
  // Dismiss install prompt
  dismissInstallPrompt() {
    this.hideInstallBanner();
    this.deferredPrompt = null;
  }
  
  // Handle service worker updates
  handleServiceWorkerUpdate() {
    const installingWorker = this.serviceWorkerRegistration.installing;
    
    if (installingWorker) {
      installingWorker.addEventListener('statechange', () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // New update available
            this.showUpdateAvailable();
          }
        }
      });
    }
  }
  
  // Show update available notification
  showUpdateAvailable() {
    if (confirm('A new version of the app is available. Update now?')) {
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
      }
      window.location.reload();
    }
  }
  
  // Handle messages from service worker
  handleServiceWorkerMessage(data) {
    console.log('[APP] Message from service worker:', data);
    
    switch (data.type) {
      case 'TSUNAMI_ALERT':
        this.handleTsunamiAlert(data.data);
        break;
      case 'CACHE_SIZE':
        console.log('[APP] Cache size:', data.size);
        break;
    }
  }
  
  // Handle tsunami alert from service worker
  handleTsunamiAlert(alertData) {
    console.log('[APP] Tsunami alert received:', alertData);
    
    if (alertData.active && alertData.active.length > 0) {
      this.showEmergencyAlert();
      
      // Update alert message
      const alertMessage = document.getElementById('alert-message');
      if (alertMessage) {
        alertMessage.textContent = alertData.active[0].message || 'Tsunami warning active in your area';
      }
    }
  }
  
  // Check for app updates
  async checkForUpdates() {
    if (this.serviceWorkerRegistration) {
      try {
        await this.serviceWorkerRegistration.update();
        console.log('[APP] Checked for updates');
      } catch (error) {
        console.error('[APP] Update check failed:', error);
      }
    }
  }
  
  // Sync data when online
  async syncData() {
    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      // Trigger background sync for critical data
      if ('sync' in window.ServiceWorkerRegistration.prototype) {
        try {
          await this.serviceWorkerRegistration.sync.register('tsunami-alerts');
          await this.serviceWorkerRegistration.sync.register('location-data');
          console.log('[APP] Background sync registered');
        } catch (error) {
          console.error('[APP] Background sync registration failed:', error);
        }
      }
    }
  }
  
  // UI utility methods
  showLoading(message = 'Loading...') {
    const overlay = document.getElementById('loading-overlay');
    const text = document.getElementById('loading-text');
    
    if (overlay) overlay.hidden = false;
    if (text) text.textContent = message;
  }
  
  hideLoading() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) overlay.hidden = true;
  }
  
  showError(message) {
    console.error('[APP] Error:', message);
    alert(`❌ Error: ${message}`);
  }
  
  showWarning(message) {
    console.warn('[APP] Warning:', message);
    alert(`⚠️ Warning: ${message}`);
  }
  
  showSuccess(message) {
    console.log('[APP] Success:', message);
    alert(`✅ ${message}`);
  }
  
  showInfo(message) {
    console.log('[APP] Info:', message);
    alert(`ℹ️ ${message}`);
  }
}

// Initialize app when script loads
const app = new TsunamiEscapeApp();