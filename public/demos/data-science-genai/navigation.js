// ===== NAVIGATION CONTROLLER =====

// Extend the DataScienceCourse class with navigation methods
DataScienceCourse.prototype.initializeNavigation = function() {
    this.setupKeyboardNavigation();
    this.setupTouchNavigation();
    this.setupBreadcrumbs();
    this.setupQuickNavigation();
};

DataScienceCourse.prototype.setupKeyboardNavigation = function() {
    document.addEventListener('keydown', (e) => {
        // Don't interfere with input fields
        if (e.target.matches('input, textarea, select')) {
            return;
        }
        
        switch(e.key) {
            case 'ArrowRight':
            case 'Space':
                e.preventDefault();
                this.navigateNext();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                this.navigatePrevious();
                break;
            case 'Home':
                e.preventDefault();
                this.navigateToStart();
                break;
            case 'End':
                e.preventDefault();
                this.navigateToEnd();
                break;
            case 'Escape':
                this.closeAllModals();
                break;
        }
    });
};

DataScienceCourse.prototype.setupTouchNavigation = function() {
    let touchStartX = 0;
    let touchEndX = 0;
    
    const mainContent = document.getElementById('main-content');
    
    mainContent.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    mainContent.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
    });
    
    this.handleSwipe = () => {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe right - go to previous
                this.navigatePrevious();
            } else {
                // Swipe left - go to next
                this.navigateNext();
            }
        }
    };
};

DataScienceCourse.prototype.navigateNext = function() {
    const module = this.modules[this.currentModule];
    if (!module) return;
    
    if (this.currentSection < module.sections.length - 1) {
        this.nextSection();
    } else if (this.currentModule < 6) {
        // Move to next module
        this.loadModule(this.currentModule + 1);
    } else {
        // Course completed
        this.showCourseCompletion();
    }
};

DataScienceCourse.prototype.navigatePrevious = function() {
    if (this.currentSection > 0) {
        this.prevSection();
    } else if (this.currentModule > 1) {
        // Move to previous module, last section
        const prevModule = this.currentModule - 1;
        this.loadModule(prevModule);
        const prevModuleData = this.modules[prevModule];
        this.currentSection = prevModuleData.sections.length - 1;
        this.updateSectionView();
    }
};

DataScienceCourse.prototype.navigateToStart = function() {
    this.loadModule(1);
    this.currentSection = 0;
    this.updateSectionView();
};

DataScienceCourse.prototype.navigateToEnd = function() {
    // Find the last accessible module
    let lastModule = 1;
    for (let i = 1; i <= 6; i++) {
        if (this.isModuleAccessible(i)) {
            lastModule = i;
        }
    }
    
    this.loadModule(lastModule);
    const moduleData = this.modules[lastModule];
    this.currentSection = moduleData.sections.length - 1;
    this.updateSectionView();
};

DataScienceCourse.prototype.isModuleAccessible = function(moduleId) {
    // Module 1 is always accessible
    if (moduleId === 1) return true;
    
    // Other modules are accessible if previous module is completed
    const prevModule = this.modules[moduleId - 1];
    return prevModule && prevModule.completed;
};

DataScienceCourse.prototype.setupBreadcrumbs = function() {
    const breadcrumbContainer = document.createElement('div');
    breadcrumbContainer.className = 'breadcrumb-container';
    breadcrumbContainer.innerHTML = `
        <nav class="breadcrumb">
            <span class="breadcrumb-item" id="breadcrumb-course">Data Science Evolution</span>
            <span class="breadcrumb-separator">></span>
            <span class="breadcrumb-item" id="breadcrumb-module">Module 1</span>
            <span class="breadcrumb-separator">></span>
            <span class="breadcrumb-item" id="breadcrumb-section">Section 1</span>
        </nav>
    `;
    
    const mainContent = document.getElementById('main-content');
    mainContent.insertBefore(breadcrumbContainer, mainContent.firstChild);
    
    this.updateBreadcrumbs();
};

DataScienceCourse.prototype.updateBreadcrumbs = function() {
    const moduleElement = document.getElementById('breadcrumb-module');
    const sectionElement = document.getElementById('breadcrumb-section');
    
    if (moduleElement && this.currentModule) {
        const module = this.modules[this.currentModule];
        moduleElement.textContent = `Module ${this.currentModule}: ${module.title}`;
    }
    
    if (sectionElement && this.currentModule && this.currentSection !== null) {
        const module = this.modules[this.currentModule];
        const sectionTitle = module.sections[this.currentSection];
        sectionElement.textContent = `${sectionTitle}`;
    }
};

DataScienceCourse.prototype.setupQuickNavigation = function() {
    // Create quick navigation panel
    const quickNav = document.createElement('div');
    quickNav.className = 'quick-nav';
    quickNav.innerHTML = `
        <div class="quick-nav-header">
            <h4>Quick Navigation</h4>
            <button class="quick-nav-toggle" id="quick-nav-toggle">
                <i class="fas fa-chevron-up"></i>
            </button>
        </div>
        <div class="quick-nav-content" id="quick-nav-content">
            <div class="quick-nav-modules">
                ${Object.entries(this.modules).map(([id, module]) => `
                    <div class="quick-nav-module" data-module="${id}">
                        <div class="module-number">${id}</div>
                        <div class="module-title">${module.title}</div>
                        <div class="module-sections">
                            ${module.sections.map((section, index) => `
                                <div class="section-dot" data-module="${id}" data-section="${index}" title="${section}"></div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    document.body.appendChild(quickNav);
    
    // Setup quick nav interactions
    this.setupQuickNavInteractions();
};

DataScienceCourse.prototype.setupQuickNavInteractions = function() {
    const quickNavToggle = document.getElementById('quick-nav-toggle');
    const quickNavContent = document.getElementById('quick-nav-content');
    
    quickNavToggle.addEventListener('click', () => {
        quickNavContent.classList.toggle('collapsed');
        const icon = quickNavToggle.querySelector('i');
        icon.className = quickNavContent.classList.contains('collapsed') ? 
            'fas fa-chevron-down' : 'fas fa-chevron-up';
    });
    
    // Module navigation
    document.querySelectorAll('.quick-nav-module').forEach(moduleEl => {
        moduleEl.addEventListener('click', (e) => {
            if (!e.target.classList.contains('section-dot')) {
                const moduleId = parseInt(moduleEl.dataset.module);
                if (this.isModuleAccessible(moduleId)) {
                    this.loadModule(moduleId);
                }
            }
        });
    });
    
    // Section navigation
    document.querySelectorAll('.section-dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            const moduleId = parseInt(dot.dataset.module);
            const sectionId = parseInt(dot.dataset.section);
            
            if (this.isModuleAccessible(moduleId)) {
                this.loadModule(moduleId);
                this.currentSection = sectionId;
                this.updateSectionView();
            }
        });
    });
};

DataScienceCourse.prototype.updateQuickNavigation = function() {
    // Update quick navigation to reflect current progress
    document.querySelectorAll('.quick-nav-module').forEach(moduleEl => {
        const moduleId = parseInt(moduleEl.dataset.module);
        const module = this.modules[moduleId];
        
        moduleEl.classList.remove('current', 'completed', 'locked');
        
        if (moduleId === this.currentModule) {
            moduleEl.classList.add('current');
        } else if (module.completed) {
            moduleEl.classList.add('completed');
        } else if (!this.isModuleAccessible(moduleId)) {
            moduleEl.classList.add('locked');
        }
    });
    
    // Update section dots
    document.querySelectorAll('.section-dot').forEach(dot => {
        const moduleId = parseInt(dot.dataset.module);
        const sectionId = parseInt(dot.dataset.section);
        
        dot.classList.remove('current', 'completed');
        
        if (moduleId === this.currentModule) {
            if (sectionId === this.currentSection) {
                dot.classList.add('current');
            } else if (sectionId < this.currentSection) {
                dot.classList.add('completed');
            }
        } else if (this.modules[moduleId].completed) {
            dot.classList.add('completed');
        }
    });
};

DataScienceCourse.prototype.closeAllModals = function() {
    document.querySelectorAll('.modal-overlay.active').forEach(modal => {
        modal.classList.remove('active');
    });
};

// Navigation history management
DataScienceCourse.prototype.initializeHistory = function() {
    this.navigationHistory = [];
    this.historyIndex = -1;
    
    // Listen for navigation changes
    this.addToHistory = (moduleId, sectionId) => {
        const entry = { module: moduleId, section: sectionId, timestamp: Date.now() };
        
        // Remove any entries after current index (when navigating back then forward)
        this.navigationHistory = this.navigationHistory.slice(0, this.historyIndex + 1);
        
        // Add new entry
        this.navigationHistory.push(entry);
        this.historyIndex = this.navigationHistory.length - 1;
        
        // Limit history size
        if (this.navigationHistory.length > 50) {
            this.navigationHistory.shift();
            this.historyIndex--;
        }
    };
    
    this.goBack = () => {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            const entry = this.navigationHistory[this.historyIndex];
            this.loadModule(entry.module);
            this.currentSection = entry.section;
            this.updateSectionView();
        }
    };
    
    this.goForward = () => {
        if (this.historyIndex < this.navigationHistory.length - 1) {
            this.historyIndex++;
            const entry = this.navigationHistory[this.historyIndex];
            this.loadModule(entry.module);
            this.currentSection = entry.section;
            this.updateSectionView();
        }
    };
};

// Accessibility navigation
DataScienceCourse.prototype.setupAccessibilityNavigation = function() {
    // Skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Focus management
    this.manageFocus = () => {
        const activeSection = document.querySelector('.section.active');
        if (activeSection) {
            const firstFocusable = activeSection.querySelector('button, a, input, textarea, [tabindex]:not([tabindex="-1"])');
            if (firstFocusable) {
                firstFocusable.focus();
            }
        }
    };
    
    // Announce navigation changes to screen readers
    this.announceNavigation = (message) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    };
};

// Initialize all navigation features
DataScienceCourse.prototype.initializeAllNavigation = function() {
    this.initializeNavigation();
    this.initializeHistory();
    this.setupAccessibilityNavigation();
};

