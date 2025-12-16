# 🌊 Tsunami Escape - Emergency Evacuation App

A life-saving Progressive Web App for tsunami evacuation in Hawaii and the US West Coast. Helps users identify tsunami risk zones and find evacuation routes, working offline during emergencies when cellular/WiFi may be unavailable.

## 🚨 Emergency First Design

This app is designed for **life-safety situations**. Every feature prioritizes:
- **Offline functionality** - Works without internet during emergencies
- **Accessibility** - Usable by all age groups under extreme stress  
- **Simplicity** - Clear, large buttons and minimal navigation
- **Speed** - Fast loading and immediate access to critical information

## 🎯 Key Features

### Core Functionality
- **📍 Location Detection** - GPS with manual address fallback
- **🗺️ Tsunami Risk Assessment** - Real-time zone classification (Safe/Low/Moderate/High/Extreme)
- **🏃 Evacuation Routes** - Turn-by-turn directions to safety zones
- **📱 Offline Maps** - Pre-download map tiles for emergency use
- **🌐 Multi-Language Support** - English, Spanish, Chinese, Vietnamese, Tagalog

### Emergency Features
- **⚠️ Real-time Alerts** - Integration with NOAA tsunami warnings
- **🏢 Safe Zone Locations** - Emergency shelters and high-ground areas
- **🎯 Practice Mode** - Evacuation route drills and familiarization
- **📞 Emergency Contacts** - Quick access to critical phone numbers

## 🏗️ Technical Architecture

### Technology Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **PWA**: Service Workers + Web Manifest
- **Maps**: OpenStreetMap with Leaflet.js
- **Storage**: IndexedDB for offline data, localStorage for preferences
- **Deployment**: GitHub Pages (HTTPS required for PWA features)

### File Structure
```
tsunami-escape/
├── index.html              # Main PWA entry point
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker for offline functionality
├── CLAUDE.md              # Development guidance for Claude Code
├── css/
│   ├── styles.css          # Main styles with tsunami color system
│   └── themes.css          # Risk zone color themes
├── js/
│   ├── app.js              # Main application logic
│   ├── location.js         # GPS and geocoding services
│   └── [planned modules]   # maps.js, offline.js, languages.js, alerts.js
├── data/
│   ├── tsunami-zones.json  # Risk zone data
│   ├── safe-locations.json # Emergency shelter locations
│   └── languages/          # Translation files
└── assets/
    ├── icons/              # PWA icons (various sizes)
    ├── audio/              # Alert sounds, voice guidance
    └── images/             # UI graphics with wave motifs
```

## 🎨 Design System

### Tsunami Color Psychology
- **🔵 Blue (#1e40af)** - Calm, trustworthy baseline
- **🟢 Green (#10b981)** - Safe zones, positive actions
- **🟡 Yellow (#f59e0b)** - Caution, moderate risk
- **🔴 Red (#ef4444)** - Immediate danger (used sparingly)

### Accessibility Standards
- **WCAG 2.1 AA Compliance** - Screen reader compatible
- **44px+ Touch Targets** - Easy interaction under stress
- **High Contrast Mode** - Readable in bright sunlight
- **One-Handed Operation** - Usable while moving/evacuating

## 🚀 Getting Started

### Development Setup
1. **Clone/Download** this repository
2. **Serve over HTTPS** (required for PWA and location services):
   ```bash
   # Option 1: Live-server (recommended for development)
   npx live-server --port=8000 --https
   
   # Option 2: Simple HTTP server
   npx http-server -p 8000
   
   # Option 3: Python (basic)
   python3 -m http.server 8000
   
   # Using PHP
   php -S localhost:8000
   ```
3. **Access via HTTPS** - Use `https://localhost:8000` or deploy to HTTPS hosting

### PWA Installation
1. Open the app in a modern browser (Chrome, Firefox, Safari, Edge)
2. Look for "Install App" prompt or use browser's "Install" option
3. App will work offline once installed

### Testing Offline Functionality
1. Install the PWA
2. Disconnect from internet
3. Verify core features still work (location, zone assessment, cached maps)

## 🧪 Development Testing

### Core Functionality Tests
- [ ] Location detection works (GPS + manual address)
- [ ] Tsunami zone assessment displays correctly
- [ ] Offline maps download and cache
- [ ] PWA installs properly
- [ ] Service worker caches critical files
- [ ] App works completely offline

### Accessibility Testing
- [ ] Screen reader compatibility
- [ ] High contrast mode support
- [ ] Keyboard navigation
- [ ] Touch target sizes (minimum 44px)
- [ ] Color blind friendly design

### Emergency Scenario Testing
- [ ] Network failure resilience
- [ ] Battery optimization
- [ ] Stress testing with poor connectivity
- [ ] Multi-device compatibility

## 📊 Data Sources

### Official Tsunami Data
- **NOAA Tsunami Warning Centers** - Real-time alerts and zone data
- **Hawaii Emergency Management Agency** - State-specific information
- **Local Emergency Management** - County/city evacuation routes

### Geographic Data
- **OpenStreetMap** - Base map tiles (respecting usage limits)
- **Nominatim** - Address geocoding service
- **Official Evacuation Routes** - Government-provided safety data

## 🌍 Multi-Language Support

Priority languages for tsunami-prone areas:
1. **English** (default) - Primary interface
2. **Spanish** - Largest minority language in US
3. **Chinese** (Simplified/Traditional) - Significant West Coast population
4. **Vietnamese** - Large California communities
5. **Tagalog** - Filipino communities in Hawaii/California

## 🚨 Emergency Context

**This application could literally save lives.** Every development decision prioritizes:

1. **User Safety** - Clear emergency guidance
2. **Reliability** - Functions under network failure
3. **Accessibility** - Usable by all under extreme stress
4. **Performance** - Works on low-end devices with poor connectivity

## 📱 Browser Support

- **Chrome/Chromium** 60+ (full PWA support)
- **Firefox** 55+ (good PWA support)
- **Safari** 11.1+ (iOS PWA support)
- **Edge** 17+ (full PWA support)

## 🤝 Contributing

This is a life-safety application. Contributions should focus on:
- Improving accessibility and usability
- Enhancing offline functionality
- Adding official data sources
- Supporting additional languages
- Performance optimizations

## 📄 License

Open source for community safety and transparency.

## 🆘 Emergency Contacts

**Always call 911 first in emergencies!**

- **Pacific Tsunami Warning Center**: (808) 725-8830
- **Hawaii Emergency Management**: (808) 733-4300  
- **American Red Cross**: 1-800-RED-CROSS

---

**Remember**: This app provides guidance, but always follow official evacuation orders and emergency broadcasts. When in doubt, move to higher ground immediately.