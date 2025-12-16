# Tsunami Escape App - Project Specification

## Project Overview
A life-saving Progressive Web App (PWA) that helps users in Hawaii and the US West Coast identify their tsunami risk zone and find evacuation routes. The app works offline during emergencies when cellular/WiFi may be unavailable.

## Core Mission
**Save lives through simple, accessible tsunami preparedness and emergency response.**

## Target Users
- Residents of Hawaii and US West Coast
- Tourists and visitors to coastal areas
- All age groups (design for elderly and children)
- Multi-language speakers (English, Spanish, Chinese, Vietnamese, Tagalog)

## Technical Stack
- **Platform**: Progressive Web App (PWA)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Maps**: OpenStreetMap with Leaflet.js
- **Offline Storage**: Service Workers + IndexedDB for map tiles
- **Deployment**: GitHub Pages initially
- **Future**: App Store/Google Play via PWA packaging

## Core Features (MVP)

### 1. Location & Authentication
- Simple signup/login system
- Location detection (GPS) or manual address entry
- Privacy-focused (minimal data collection)

### 2. Tsunami Zone Assessment
- Display current tsunami risk level (Red/Yellow/Green zones)
- Clear visual indicators using color psychology:
  - **Blue**: Calm, safe, trustworthy baseline
  - **Green**: Safe zones, nature, security
  - **Yellow**: Caution, moderate risk
  - **Red**: Immediate danger, urgency, evacuation needed

### 3. Evacuation Routes
- Display nearest safe zones (schools, designated evacuation areas)
- Turn-by-turn directions with offline capability
- Multiple route options when available
- Clear distance and estimated time displays

### 4. Offline Map Download
- Pre-download map tiles for specific areas
- Works without internet/cellular connection
- User can select coverage areas (home, work, travel destinations)

### 5. Practice Mode
- Safe drill simulation of evacuation routes
- Timer-based practice sessions
- Route familiarity building

### 6. Multi-Language Support
Languages in priority order:
1. **English** (default)
2. **Spanish** (largest minority language)
3. **Chinese** (Simplified/Traditional)
4. **Vietnamese** (significant West Coast population)
5. **Tagalog** (large Filipino communities in Hawaii/California)

## Design Principles

### User Experience
- **Extreme Simplicity**: Large buttons, minimal options
- **Accessibility**: Elderly and children can use under stress
- **Emergency-First**: Assumes users may be panicking
- **One-Handed Operation**: Usable while moving/evacuating

### Visual Design
- **Wave Motif**: Subtle wave patterns in UI
- **Color Psychology**: 
  - Calm blue base creates trust
  - Green for safety/escape routes
  - Red for warnings (sparingly, only when necessary)
- **High Contrast**: Readable in bright sunlight
- **Large Touch Targets**: Minimum 44px for accessibility

### Performance
- **Fast Loading**: Critical data loads in <2 seconds
- **Offline First**: Core functionality works without internet
- **Low Bandwidth**: Optimized for poor cellular conditions

## Data Sources

### Official Tsunami Data
- NOAA Tsunami Warning Centers
- Hawaii Emergency Management Agency
- State/local emergency management agencies
- Official evacuation zone maps

### Map Data
- OpenStreetMap for base layers
- Official evacuation route data
- Public safety facility locations

### Real-Time Alerts
- NOAA tsunami warning feeds
- Emergency Alert System integration
- Local emergency broadcasts

## Development Phases

### Phase 1: MVP (Month 1-2)
- Basic location detection
- Static tsunami zone display
- Simple evacuation routes
- Offline map download for one test area
- English only

### Phase 2: Enhanced Features (Month 3)
- Real-time alert integration
- Practice mode
- Multi-language support (Spanish, Chinese)
- Expanded coverage areas

### Phase 3: Advanced Features (Month 4+)
- Community features (check-in, family location)
- Integration with local emergency services
- Advanced route optimization
- Voice guidance
- Apple/Google store submission

## File Structure
```
tsunami-escape/
├── index.html              # Main PWA entry point
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker for offline functionality
├── css/
│   ├── styles.css          # Main styles
│   └── themes.css          # Color themes for risk levels
├── js/
│   ├── app.js              # Main application logic
│   ├── maps.js             # Map and routing functionality
│   ├── location.js         # GPS and address handling
│   ├── offline.js          # Offline data management
│   ├── languages.js        # Multi-language support
│   └── alerts.js           # Emergency alert handling
├── data/
│   ├── tsunami-zones.json  # Evacuation zone data
│   ├── safe-locations.json # Emergency shelter locations
│   └── languages/          # Translation files
├── assets/
│   ├── icons/              # PWA icons, tsunami-themed
│   ├── audio/              # Alert sounds
│   └── images/             # UI graphics, wave motifs
└── README.md
```

## Key Technical Requirements

### PWA Requirements
- Service worker for offline functionality
- Web manifest for app-like installation
- HTTPS deployment
- Responsive design for all screen sizes

### Offline Functionality
- Map tiles cached locally using IndexedDB
- Evacuation data stored locally
- Works completely offline once initial download complete

### Performance Targets
- First meaningful paint: <2 seconds
- Full app load: <5 seconds on 3G
- Offline mode activation: <1 second

### Accessibility (WCAG 2.1 AA)
- High contrast color schemes
- Large touch targets (minimum 44px)
- Screen reader compatibility
- Voice guidance for visually impaired

## Security & Privacy
- Minimal data collection
- Location data stored locally only
- No user tracking
- Optional anonymous usage analytics for improvement

## Testing Strategy
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile device testing (iOS Safari, Android Chrome)
- Offline mode testing
- Stress testing under emergency scenarios
- Accessibility testing with screen readers

## Deployment
- **Development**: Local development server
- **Staging**: GitHub Pages branch
- **Production**: GitHub Pages main branch
- **Future**: CDN deployment for performance

## Success Metrics
- App install rate in target regions
- Offline usage during actual tsunami warnings
- Practice mode completion rates
- Multi-language adoption
- Emergency response time improvement

## Compliance & Legal
- Americans with Disabilities Act (ADA) compliance
- Emergency alert system compatibility
- Data privacy regulations (CCPA, etc.)
- Open source licensing for transparency

## Community & Updates
- GitHub repository for community contributions
- Regular updates based on emergency management feedback
- Community-driven translation improvements
- Integration with local emergency training programs

---

## Development Notes for Claude Code

### Code Style Preferences
- Use semantic HTML5 elements
- CSS custom properties for theming
- Vanilla JavaScript (no frameworks for simplicity)
- Progressive enhancement approach
- Mobile-first responsive design

### Common Patterns
- Use async/await for asynchronous operations
- Implement service worker caching strategies
- Use IndexedDB for offline data storage
- Implement graceful degradation for older browsers

### Testing Approach
- Test-driven development for critical functions
- Manual testing for user experience
- Simulate offline conditions regularly
- Test with actual GPS coordinates in tsunami zones

### Performance Optimization
- Lazy load non-critical assets
- Compress images and optimize for web
- Minimize JavaScript bundle size
- Use efficient map tile caching strategies

Remember: This app could literally save lives. Every decision should prioritize user safety, accessibility, and reliability under emergency conditions.