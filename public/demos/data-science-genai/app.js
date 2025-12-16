// ===== MAIN APPLICATION CONTROLLER =====
class DataScienceCourse {
    constructor() {
        this.currentModule = null;
        this.currentSection = 0;
        this.progress = {
            modules: {},
            overall: 0
        };
        this.userNotes = '';
        this.bookmarks = [];
        this.settings = {
            animations: true,
            autoSave: true,
            theme: 'default'
        };
        
        this.init();
    }
    
    init() {
        this.loadUserData();
        this.setupEventListeners();
        this.initializeModules();
        this.hideLoadingScreen();
        this.setupIntersectionObserver();
    }
    
    loadUserData() {
        // Load progress from localStorage
        const savedProgress = localStorage.getItem('ds_course_progress');
        if (savedProgress) {
            this.progress = JSON.parse(savedProgress);
        }
        
        // Load notes
        const savedNotes = localStorage.getItem('ds_course_notes');
        if (savedNotes) {
            this.userNotes = savedNotes;
            document.getElementById('notes-textarea').value = savedNotes;
        }
        
        // Load bookmarks
        const savedBookmarks = localStorage.getItem('ds_course_bookmarks');
        if (savedBookmarks) {
            this.bookmarks = JSON.parse(savedBookmarks);
        }
        
        // Load settings
        const savedSettings = localStorage.getItem('ds_course_settings');
        if (savedSettings) {
            this.settings = { ...this.settings, ...JSON.parse(savedSettings) };
        }
    }
    
    saveUserData() {
        localStorage.setItem('ds_course_progress', JSON.stringify(this.progress));
        localStorage.setItem('ds_course_notes', this.userNotes);
        localStorage.setItem('ds_course_bookmarks', JSON.stringify(this.bookmarks));
        localStorage.setItem('ds_course_settings', JSON.stringify(this.settings));
    }
    
    setupEventListeners() {
        // Start course button
        document.getElementById('start-course-btn').addEventListener('click', () => {
            this.startCourse();
        });
        
        // Navigation buttons
        document.getElementById('sidebar-toggle').addEventListener('click', () => {
            this.toggleSidebar();
        });
        
        // Modal controls
        document.getElementById('notes-btn').addEventListener('click', () => {
            this.openModal('notes-modal');
        });
        
        document.getElementById('search-btn').addEventListener('click', () => {
            this.openModal('search-modal');
        });
        
        // Modal close buttons
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.closeModal(e.target.dataset.modal);
            });
        });
        
        // Modal overlay clicks
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    this.closeModal(overlay.id);
                }
            });
        });
        
        // Notes functionality
        document.getElementById('save-notes').addEventListener('click', () => {
            this.saveNotes();
        });
        
        document.getElementById('export-notes').addEventListener('click', () => {
            this.exportNotes();
        });
        
        // Search functionality
        document.getElementById('search-input').addEventListener('input', (e) => {
            this.performSearch(e.target.value);
        });
        
        // Module navigation
        document.querySelectorAll('.module-item').forEach(item => {
            item.addEventListener('click', () => {
                const moduleId = parseInt(item.dataset.module);
                this.loadModule(moduleId);
            });
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardShortcuts(e);
        });
        
        // Auto-save notes
        document.getElementById('notes-textarea').addEventListener('input', (e) => {
            if (this.settings.autoSave) {
                clearTimeout(this.autoSaveTimeout);
                this.autoSaveTimeout = setTimeout(() => {
                    this.userNotes = e.target.value;
                    this.saveUserData();
                }, 1000);
            }
        });
    }
    
    initializeModules() {
        // Initialize module data
        this.modules = {
            1: {
                title: "Foundation of Data-Driven Decisions",
                sections: [
                    "Ancient Decision Making",
                    "Historical Context",
                    "Modern Parallels",
                    "Evolution Overview"
                ],
                completed: false
            },
            2: {
                title: "Two Paradigms of Data Science",
                sections: [
                    "Paradigm Introduction",
                    "Inferential Approach",
                    "Computational Approach"
                ],
                completed: false
            },
            3: {
                title: "AI Fundamentals and Relationships",
                sections: [
                    "AI Definitions",
                    "ML vs DL",
                    "Generative vs Discriminative"
                ],
                completed: false
            },
            4: {
                title: "Evolution Timeline (1940s-Present)",
                sections: [
                    "Early Computing Era",
                    "Statistical Revolution",
                    "Modern AI Boom"
                ],
                completed: false
            },
            5: {
                title: "Large Language Models Deep Dive",
                sections: [
                    "LLM Architecture",
                    "Behavior Analysis",
                    "Practical Applications"
                ],
                completed: false
            },
            6: {
                title: "Real-World Applications and Future",
                sections: [
                    "Industry Applications",
                    "Case Studies",
                    "Future Implications"
                ],
                completed: false
            }
        };
        
        this.updateModuleProgress();
    }
    
    hideLoadingScreen() {
        setTimeout(() => {
            document.getElementById('loading-screen').classList.add('hidden');
        }, 1500);
    }
    
    startCourse() {
        document.getElementById('welcome-screen').classList.remove('active');
        this.loadModule(1);
        this.updateProgress();
    }
    
    loadModule(moduleId) {
        if (this.currentModule) {
            document.querySelector('.module-container.active')?.classList.remove('active');
        }
        
        this.currentModule = moduleId;
        this.currentSection = 0;
        
        // Update sidebar
        document.querySelectorAll('.module-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-module="${moduleId}"]`).classList.add('active');
        
        // Load module content
        this.renderModuleContent(moduleId);
        
        // Update progress
        this.updateProgress();
        
        // Save progress
        this.saveUserData();
    }
    
    renderModuleContent(moduleId) {
        const container = document.getElementById('module-container');
        container.innerHTML = this.getModuleHTML(moduleId);
        container.classList.add('active');
        
        // Setup module-specific event listeners
        this.setupModuleEventListeners(moduleId);
        
        // Animate content in
        if (this.settings.animations) {
            container.classList.add('animate-fade-in-up');
        }
    }
    
    getModuleHTML(moduleId) {
        const module = this.modules[moduleId];
        
        switch(moduleId) {
            case 1:
                return this.getModule1HTML();
            case 2:
                return this.getModule2HTML();
            case 3:
                return this.getModule3HTML();
            case 4:
                return this.getModule4HTML();
            case 5:
                return this.getModule5HTML();
            case 6:
                return this.getModule6HTML();
            default:
                return '<div>Module not found</div>';
        }
    }
    
    setupModuleEventListeners(moduleId) {
        // Section navigation
        document.querySelectorAll('.btn[data-action="next-section"]').forEach(btn => {
            btn.addEventListener('click', () => this.nextSection());
        });
        
        document.querySelectorAll('.btn[data-action="prev-section"]').forEach(btn => {
            btn.addEventListener('click', () => this.prevSection());
        });
        
        // Interactive elements
        this.setupInteractiveElements(moduleId);
    }
    
    setupInteractiveElements(moduleId) {
        // Timeline interactions
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.addEventListener('click', () => {
                this.showTimelineDetail(item);
            });
        });
        
        // Paradigm comparison toggle
        document.querySelectorAll('.toggle-option').forEach(option => {
            option.addEventListener('click', () => {
                this.toggleParadigmView(option);
            });
        });
        
        // Quiz interactions
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', () => {
                this.selectQuizOption(option);
            });
        });
        
        // Venn diagram interactions
        document.querySelectorAll('.venn-circle').forEach(circle => {
            circle.addEventListener('click', () => {
                this.showVennDetail(circle);
            });
        });
    }
    
    nextSection() {
        const module = this.modules[this.currentModule];
        if (this.currentSection < module.sections.length - 1) {
            this.currentSection++;
            this.updateSectionView();
            this.updateProgress();
        } else {
            // Module completed
            this.completeModule();
        }
    }
    
    prevSection() {
        if (this.currentSection > 0) {
            this.currentSection--;
            this.updateSectionView();
        }
    }
    
    updateSectionView() {
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show current section
        const currentSection = document.querySelector(`[data-section="${this.currentSection}"]`);
        if (currentSection) {
            currentSection.classList.add('active');
        }
        
        // Update section indicators
        document.querySelectorAll('.section-dot').forEach((dot, index) => {
            dot.classList.remove('active', 'completed');
            if (index === this.currentSection) {
                dot.classList.add('active');
            } else if (index < this.currentSection) {
                dot.classList.add('completed');
            }
        });
        
        // Update navigation buttons
        const prevBtn = document.querySelector('.btn[data-action="prev-section"]');
        const nextBtn = document.querySelector('.btn[data-action="next-section"]');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentSection === 0;
        }
        
        if (nextBtn) {
            const module = this.modules[this.currentModule];
            nextBtn.textContent = this.currentSection === module.sections.length - 1 ? 
                'Complete Module' : 'Next Section';
        }
    }
    
    completeModule() {
        this.modules[this.currentModule].completed = true;
        this.progress.modules[this.currentModule] = 100;
        
        // Update UI
        const moduleItem = document.querySelector(`[data-module="${this.currentModule}"]`);
        moduleItem.classList.add('completed');
        
        // Show completion animation
        this.showModuleCompletion();
        
        // Auto-advance to next module or show course completion
        setTimeout(() => {
            if (this.currentModule < 6) {
                this.loadModule(this.currentModule + 1);
            } else {
                this.showCourseCompletion();
            }
        }, 2000);
        
        this.updateProgress();
        this.saveUserData();
    }
    
    updateProgress() {
        // Calculate overall progress
        const completedModules = Object.values(this.modules).filter(m => m.completed).length;
        const totalModules = Object.keys(this.modules).length;
        this.progress.overall = Math.round((completedModules / totalModules) * 100);
        
        // Update progress bar
        const progressFill = document.getElementById('overall-progress');
        const progressText = document.getElementById('progress-text');
        
        if (progressFill && progressText) {
            progressFill.style.width = `${this.progress.overall}%`;
            progressText.textContent = `${this.progress.overall}% Complete`;
        }
        
        // Update module progress indicators
        this.updateModuleProgress();
    }
    
    updateModuleProgress() {
        document.querySelectorAll('.module-item').forEach(item => {
            const moduleId = parseInt(item.dataset.module);
            const module = this.modules[moduleId];
            const progressBar = item.querySelector('.progress-fill');
            const progressText = item.querySelector('.module-progress span');
            
            if (module.completed) {
                progressBar.style.width = '100%';
                progressText.textContent = `${module.sections.length}/${module.sections.length} sections`;
                item.classList.add('completed');
            } else if (moduleId === this.currentModule) {
                const sectionProgress = Math.round((this.currentSection / module.sections.length) * 100);
                progressBar.style.width = `${sectionProgress}%`;
                progressText.textContent = `${this.currentSection}/${module.sections.length} sections`;
            }
        });
    }
    
    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('main-content');
        
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('sidebar-collapsed');
    }
    
    openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.add('active');
        
        // Focus management
        if (modalId === 'search-modal') {
            setTimeout(() => {
                document.getElementById('search-input').focus();
            }, 100);
        }
    }
    
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('active');
    }
    
    saveNotes() {
        this.userNotes = document.getElementById('notes-textarea').value;
        this.saveUserData();
        this.showNotification('Notes saved successfully!', 'success');
    }
    
    exportNotes() {
        const blob = new Blob([this.userNotes], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data-science-course-notes.txt';
        a.click();
        URL.revokeObjectURL(url);
    }
    
    performSearch(query) {
        if (query.length < 2) {
            document.getElementById('search-results').innerHTML = '';
            return;
        }
        
        // Simple search implementation
        const results = this.searchContent(query);
        this.displaySearchResults(results);
    }
    
    searchContent(query) {
        const results = [];
        const searchTerms = query.toLowerCase().split(' ');
        
        // Search through module content (simplified)
        Object.entries(this.modules).forEach(([moduleId, module]) => {
            if (module.title.toLowerCase().includes(query.toLowerCase())) {
                results.push({
                    type: 'module',
                    id: moduleId,
                    title: module.title,
                    snippet: `Module ${moduleId}: ${module.title}`
                });
            }
        });
        
        return results;
    }
    
    displaySearchResults(results) {
        const container = document.getElementById('search-results');
        
        if (results.length === 0) {
            container.innerHTML = '<div class="search-result">No results found</div>';
            return;
        }
        
        container.innerHTML = results.map(result => `
            <div class="search-result" data-type="${result.type}" data-id="${result.id}">
                <div class="result-title">${result.title}</div>
                <div class="result-snippet">${result.snippet}</div>
            </div>
        `).join('');
        
        // Add click handlers
        container.querySelectorAll('.search-result').forEach(result => {
            result.addEventListener('click', () => {
                if (result.dataset.type === 'module') {
                    this.loadModule(parseInt(result.dataset.id));
                    this.closeModal('search-modal');
                }
            });
        });
    }
    
    handleKeyboardShortcuts(e) {
        // Ctrl/Cmd + S: Save notes
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            this.saveNotes();
        }
        
        // Ctrl/Cmd + F: Open search
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            this.openModal('search-modal');
        }
        
        // Escape: Close modals
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.active').forEach(modal => {
                this.closeModal(modal.id);
            });
        }
        
        // Arrow keys: Navigate sections
        if (e.key === 'ArrowRight' && !e.target.matches('input, textarea')) {
            this.nextSection();
        }
        
        if (e.key === 'ArrowLeft' && !e.target.matches('input, textarea')) {
            this.prevSection();
        }
    }
    
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe elements with animation classes
        document.querySelectorAll('.fade-in-on-scroll, .slide-in-left-on-scroll, .slide-in-right-on-scroll, .scale-in-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => notification.classList.add('show'), 100);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    showModuleCompletion() {
        this.showNotification(`Module ${this.currentModule} completed! 🎉`, 'success');
    }
    
    showCourseCompletion() {
        // Show course completion screen
        const container = document.getElementById('module-container');
        container.innerHTML = `
            <div class="completion-screen">
                <div class="completion-content">
                    <h1>🎓 Congratulations!</h1>
                    <h2>You've completed the Data Science Evolution course!</h2>
                    <p>You've successfully journeyed through the fascinating history of data science, from ancient decision-making to cutting-edge generative AI.</p>
                    <div class="completion-stats">
                        <div class="stat">
                            <span class="number">6</span>
                            <span class="label">Modules Completed</span>
                        </div>
                        <div class="stat">
                            <span class="number">100%</span>
                            <span class="label">Course Progress</span>
                        </div>
                    </div>
                    <button class="btn primary" onclick="window.print()">
                        <i class="fas fa-certificate"></i>
                        Print Certificate
                    </button>
                </div>
            </div>
        `;
    }
    
    getModuleHTML(moduleId) {
        // This function connects to the module content defined in modules.js
        switch(moduleId) {
            case 1:
                return this.getModule1HTML();
            case 2:
                return this.getModule2HTML();
            case 3:
                return this.getModule3HTML();
            case 4:
                return this.getModule4HTML();
            case 5:
                return this.getModule5HTML();
            case 6:
                return this.getModule6HTML();
            default:
                return '<div class="error-message">Module not found</div>';
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.courseApp = new DataScienceCourse();
});

