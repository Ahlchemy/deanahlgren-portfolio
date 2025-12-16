// Tsunami Escape App - Location Service
// Handles GPS detection, geocoding, and location-based features

class LocationService {
  constructor() {
    this.currentLocation = null;
    this.watchId = null;
    this.locationCallback = null;
    this.isWatching = false;
    
    // Geolocation options optimized for emergency situations
    this.geoOptions = {
      enableHighAccuracy: true,
      timeout: 10000, // 10 seconds timeout
      maximumAge: 60000 // Accept 1-minute cached location
    };
  }
  
  // Initialize location service with callback
  init(callback) {
    console.log('[LOCATION] Initializing location service...');
    this.locationCallback = callback;
    
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      console.error('[LOCATION] Geolocation not supported');
      this.showLocationError('Location services not supported by your device');
      return;
    }
    
    // Try to get location immediately
    this.getCurrentLocation();
  }
  
  // Get current location once
  async getCurrentLocation() {
    return new Promise((resolve, reject) => {
      console.log('[LOCATION] Getting current location...');
      
      this.updateLocationStatus('Getting your location...');
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('[LOCATION] Location obtained:', position);
          this.handleLocationSuccess(position);
          resolve(position);
        },
        (error) => {
          console.error('[LOCATION] Location error:', error);
          this.handleLocationError(error);
          reject(error);
        },
        this.geoOptions
      );
    });
  }
  
  // Start watching location changes
  startWatching() {
    if (this.isWatching) {
      console.log('[LOCATION] Already watching location');
      return;
    }
    
    if (!navigator.geolocation) {
      console.error('[LOCATION] Geolocation not supported');
      return;
    }
    
    console.log('[LOCATION] Starting location watch...');
    this.isWatching = true;
    
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        console.log('[LOCATION] Location updated:', position);
        this.handleLocationSuccess(position);
      },
      (error) => {
        console.error('[LOCATION] Location watch error:', error);
        this.handleLocationError(error);
      },
      {
        ...this.geoOptions,
        maximumAge: 30000 // More frequent updates when watching
      }
    );
  }
  
  // Stop watching location changes
  stopWatching() {
    if (this.watchId !== null) {
      console.log('[LOCATION] Stopping location watch...');
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;
      this.isWatching = false;
    }
  }
  
  // Handle successful location detection
  async handleLocationSuccess(position) {
    const { latitude, longitude, accuracy } = position.coords;
    
    console.log(`[LOCATION] Position: ${latitude}, ${longitude} (±${accuracy}m)`);
    
    try {
      // Reverse geocode to get address
      const address = await this.reverseGeocode(latitude, longitude);
      
      const locationData = {
        lat: latitude,
        lng: longitude,
        accuracy: accuracy,
        address: address,
        timestamp: Date.now()
      };
      
      this.currentLocation = locationData;
      
      // Update UI
      this.hideLocationStatus();
      
      // Call callback if provided
      if (this.locationCallback) {
        this.locationCallback(locationData);
      }
      
      // Store location for offline use
      this.storeLocation(locationData);
      
    } catch (error) {
      console.error('[LOCATION] Reverse geocoding failed:', error);
      
      // Still provide coordinates even if address lookup fails
      const locationData = {
        lat: latitude,
        lng: longitude,
        accuracy: accuracy,
        address: 'Address lookup failed',
        timestamp: Date.now()
      };
      
      this.currentLocation = locationData;
      this.hideLocationStatus();
      
      if (this.locationCallback) {
        this.locationCallback(locationData);
      }
    }
  }
  
  // Handle location detection errors
  handleLocationError(error) {
    let errorMessage = 'Location detection failed';
    
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = 'Location access denied. Please enable location services and refresh.';
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = 'Location information unavailable. Please try manual address entry.';
        break;
      case error.TIMEOUT:
        errorMessage = 'Location request timed out. Please try again.';
        break;
      default:
        errorMessage = `Location error: ${error.message}`;
        break;
    }
    
    console.error('[LOCATION]', errorMessage);
    this.showLocationError(errorMessage);
    this.showManualInput();
  }
  
  // Reverse geocode coordinates to address
  async reverseGeocode(lat, lng) {
    try {
      // Use a free geocoding service (Nominatim)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1`,
        {
          headers: {
            'User-Agent': 'TsunamiEscape/1.0.0'
          }
        }
      );
      
      if (!response.ok) {
        throw new Error(`Geocoding failed: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data && data.display_name) {
        return this.formatAddress(data);
      } else {
        throw new Error('No address found');
      }
      
    } catch (error) {
      console.error('[LOCATION] Reverse geocoding error:', error);
      
      // Try offline/cached data or fallback
      return this.getLocationDescription(lat, lng);
    }
  }
  
  // Format address from geocoding response
  formatAddress(geocodeData) {
    const address = geocodeData.address || {};
    const parts = [];
    
    // Build address from most specific to general
    if (address.house_number && address.road) {
      parts.push(`${address.house_number} ${address.road}`);
    } else if (address.road) {
      parts.push(address.road);
    }
    
    if (address.neighbourhood || address.suburb) {
      parts.push(address.neighbourhood || address.suburb);
    }
    
    if (address.city || address.town) {
      parts.push(address.city || address.town);
    }
    
    if (address.state) {
      parts.push(address.state);
    }
    
    return parts.length > 0 ? parts.join(', ') : geocodeData.display_name;
  }
  
  // Get location description for coordinates (offline fallback)
  getLocationDescription(lat, lng) {
    // Simple geographic region detection for tsunami-prone areas
    
    // Hawaii
    if (lat >= 18.9 && lat <= 22.2 && lng >= -160.3 && lng <= -154.8) {
      return 'Hawaii, United States';
    }
    
    // California Coast
    if (lat >= 32.5 && lat <= 42.0 && lng >= -124.5 && lng <= -117.1) {
      return 'California Coast, United States';
    }
    
    // Oregon Coast
    if (lat >= 42.0 && lat <= 46.3 && lng >= -124.6 && lng <= -116.5) {
      return 'Oregon Coast, United States';
    }
    
    // Washington Coast
    if (lat >= 46.3 && lat <= 49.0 && lng >= -124.8 && lng <= -116.9) {
      return 'Washington Coast, United States';
    }
    
    // Alaska (partial)
    if (lat >= 54.0 && lat <= 71.5 && lng >= -180.0 && lng <= -129.0) {
      return 'Alaska, United States';
    }
    
    return `Location: ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
  }
  
  // Geocode address to coordinates
  async geocodeAddress(address) {
    try {
      console.log('[LOCATION] Geocoding address:', address);
      this.updateLocationStatus('Finding address...');
      
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1&addressdetails=1`,
        {
          headers: {
            'User-Agent': 'TsunamiEscape/1.0.0'
          }
        }
      );
      
      if (!response.ok) {
        throw new Error(`Geocoding failed: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data && data.length > 0) {
        const result = data[0];
        const lat = parseFloat(result.lat);
        const lng = parseFloat(result.lon);
        
        const locationData = {
          lat: lat,
          lng: lng,
          accuracy: null, // No accuracy for geocoded addresses
          address: this.formatAddress(result),
          timestamp: Date.now(),
          source: 'geocoded'
        };
        
        this.currentLocation = locationData;
        this.hideLocationStatus();
        
        if (this.locationCallback) {
          this.locationCallback(locationData);
        }
        
        this.storeLocation(locationData);
        
        return locationData;
      } else {
        throw new Error('Address not found');
      }
      
    } catch (error) {
      console.error('[LOCATION] Geocoding error:', error);
      this.showLocationError('Address not found. Please try a different address.');
      throw error;
    }
  }
  
  // Store location data for offline use
  storeLocation(locationData) {
    try {
      localStorage.setItem('tsunami-last-location', JSON.stringify(locationData));
      console.log('[LOCATION] Location stored for offline use');
    } catch (error) {
      console.warn('[LOCATION] Failed to store location:', error);
    }
  }
  
  // Get stored location data
  getStoredLocation() {
    try {
      const stored = localStorage.getItem('tsunami-last-location');
      if (stored) {
        const locationData = JSON.parse(stored);
        console.log('[LOCATION] Retrieved stored location:', locationData);
        return locationData;
      }
    } catch (error) {
      console.warn('[LOCATION] Failed to retrieve stored location:', error);
    }
    return null;
  }
  
  // Calculate distance between two points (Haversine formula)
  calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = this.degToRad(lat2 - lat1);
    const dLng = this.degToRad(lng2 - lng1);
    
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(this.degToRad(lat1)) * Math.cos(this.degToRad(lat2)) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    
    return distance; // Distance in kilometers
  }
  
  degToRad(deg) {
    return deg * (Math.PI / 180);
  }
  
  // Check if location is in a tsunami-prone area
  isTsunamiProneArea(lat, lng) {
    // Define tsunami-prone coastal areas
    const tsunamiAreas = [
      // Hawaii
      { minLat: 18.9, maxLat: 22.2, minLng: -160.3, maxLng: -154.8 },
      // US West Coast
      { minLat: 32.5, maxLat: 49.0, minLng: -124.8, maxLng: -117.1 },
      // Alaska (simplified)
      { minLat: 54.0, maxLat: 71.5, minLng: -180.0, maxLng: -129.0 }
    ];
    
    return tsunamiAreas.some(area => 
      lat >= area.minLat && lat <= area.maxLat &&
      lng >= area.minLng && lng <= area.maxLng
    );
  }
  
  // UI update methods
  updateLocationStatus(message) {
    const statusMessage = document.querySelector('.location-status .status-message');
    const spinner = document.getElementById('location-spinner');
    
    if (statusMessage) {
      statusMessage.textContent = message;
    }
    
    if (spinner) {
      spinner.style.display = 'block';
    }
  }
  
  hideLocationStatus() {
    const locationStatus = document.getElementById('location-status');
    if (locationStatus) {
      locationStatus.hidden = true;
    }
  }
  
  showLocationError(message) {
    const statusMessage = document.querySelector('.location-status .status-message');
    const spinner = document.getElementById('location-spinner');
    
    if (statusMessage) {
      statusMessage.textContent = `❌ ${message}`;
    }
    
    if (spinner) {
      spinner.style.display = 'none';
    }
  }
  
  showManualInput() {
    const locationManual = document.getElementById('location-manual');
    if (locationManual) {
      locationManual.hidden = false;
    }
  }
  
  // Get current location data
  getCurrentLocationData() {
    return this.currentLocation;
  }
  
  // Check location permissions
  async checkLocationPermission() {
    if ('permissions' in navigator) {
      try {
        const permission = await navigator.permissions.query({ name: 'geolocation' });
        return permission.state; // 'granted', 'denied', or 'prompt'
      } catch (error) {
        console.warn('[LOCATION] Permission check failed:', error);
        return 'unknown';
      }
    }
    return 'unknown';
  }
  
  // Request location permission
  async requestLocationPermission() {
    const permission = await this.checkLocationPermission();
    
    if (permission === 'denied') {
      throw new Error('Location permission denied. Please enable in browser settings.');
    }
    
    if (permission === 'prompt') {
      // Will prompt when getCurrentPosition is called
      return this.getCurrentLocation();
    }
    
    return this.getCurrentLocation();
  }
}

// Create global instance
window.LocationService = new LocationService();