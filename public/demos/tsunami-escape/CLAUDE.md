# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Tsunami Escape App** - a life-saving Progressive Web App for tsunami evacuation in Hawaii and US West Coast. The app helps users identify tsunami risk zones and find evacuation routes, working offline during emergencies.

## Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript ES6+ (no frameworks for simplicity and reliability)
- **PWA**: Service Workers + Web Manifest for offline functionality
- **Maps**: OpenStreetMap with Leaflet.js library
- **Storage**: IndexedDB for map tiles and offline data, localStorage for user preferences
- **Deployment**: GitHub Pages (staging and production)

## Project Structure

```
tsunami-escape/
├── index.html              # Main PWA entry point
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker for offline functionality
├── css/
│   ├── styles.css          # Main styles with mobile-first responsive design
│   └── themes.css          # Color themes for tsunami risk levels
├── js/
│   ├── app.js              # Main application logic
│   ├── maps.js             # Map and routing functionality with Leaflet.js
│   ├── location.js         # GPS and address handling
│   ├── offline.js          # Offline data management with IndexedDB
│   ├── languages.js        # Multi-language support system
│   └── alerts.js           # Emergency alert handling (NOAA integration)
├── data/
│   ├── tsunami-zones.json  # Evacuation zone data from NOAA
│   ├── safe-locations.json # Emergency shelter locations
│   └── languages/          # Translation files for 6+ languages
└── assets/
    ├── icons/              # PWA icons, tsunami-themed graphics
    ├── audio/              # Alert sounds, voice guidance
    └── images/             # UI graphics with wave motifs
```

## Core Development Principles

### Emergency-First Design
- **Offline-first architecture**: All critical functionality must work without internet
- **Accessibility**: Usable by elderly and children under extreme stress
- **One-handed operation**: Operable while moving/evacuating
- **High contrast**: Readable in bright sunlight with minimum 44px touch targets

### Code Standards
- Use semantic HTML5 elements for accessibility
- CSS custom properties for theming (tsunami risk color zones)
- Vanilla JavaScript with async/await for reliability
- Progressive enhancement approach
- Mobile-first responsive design

### Color Psychology System
- **Blue (#1e40af)**: Calm, trustworthy baseline
- **Green (#10b981)**: Safe zones, positive actions
- **Yellow (#f59e0b)**: Caution, moderate risk
- **Red (#ef4444)**: Immediate danger (use sparingly)

## Key Features to Implement

### Critical Path Features
1. **Location Services**: HTML5 Geolocation API with manual address fallback
2. **Tsunami Zone Assessment**: Real-time risk display with NOAA data integration
3. **Evacuation Routing**: Turn-by-turn directions with offline calculation
4. **Offline Map Tiles**: Progressive download and IndexedDB storage
5. **Multi-language Support**: English, Spanish, Chinese (Simplified/Traditional), Vietnamese, Tagalog

### Technical Requirements
- Service worker caching for complete offline functionality
- IndexedDB for map tiles and evacuation data storage
- HTTPS deployment required for PWA features
- WCAG 2.1 AA accessibility compliance
- Performance targets: <2s first paint, <5s full load on 3G

## Development Workflow

### Testing Approach
- Test offline functionality regularly by disabling network
- Simulate emergency conditions and user stress scenarios
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile device testing prioritizing iOS Safari and Android Chrome
- Accessibility testing with screen readers

### Data Integration
- **NOAA Tsunami Warning Centers**: Real-time alert feeds
- **Emergency Management Agencies**: Official evacuation routes
- **OpenStreetMap**: Base map tiles with free tier usage limits
- **Official Safety Data**: Shelter locations, safe zones

## Deployment Notes

- **Development**: Local server with HTTPS for PWA testing
- **Staging**: GitHub Pages branch deployment
- **Production**: GitHub Pages main branch
- No package.json - this is a vanilla JavaScript PWA project
- Static file deployment only - no build process required

## Emergency Context

This application could literally save lives. Every code decision should prioritize:
1. User safety and clear emergency guidance
2. Reliability under network failure conditions
3. Accessibility for all users under extreme stress
4. Performance on low-end devices with poor connectivity

The app must function flawlessly when cellular/WiFi networks are down during actual tsunami emergencies.