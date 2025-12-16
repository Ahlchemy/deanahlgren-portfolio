/**
 * Computer Vision Course - Interactive E-Learning Module
 * Navigation and Progress Tracking
 */

class CourseModule {
    constructor() {
        // DOM Elements
        this.slides = document.querySelectorAll('.slide');
        this.navItems = document.querySelectorAll('.nav-item');
        this.sectionHeaders = document.querySelectorAll('.section-header');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.currentSlideEl = document.querySelector('.current-slide');
        this.totalSlidesEl = document.querySelector('.total-slides');
        this.progressFill = document.querySelector('.progress-fill');
        this.progressText = document.querySelector('.progress-text');
        this.sidebar = document.querySelector('.sidebar');
        this.menuToggle = document.querySelector('.menu-toggle');
        this.floatingMenuBtn = document.querySelector('.floating-menu-btn');
        this.contentArea = document.querySelector('.content-area');

        // State
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.visitedSlides = new Set([0]);
        this.sidebarOpen = true;

        // Initialize
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateUI();
        this.setupKeyboardNav();
        this.loadProgress();
    }

    setupEventListeners() {
        // Navigation buttons
        this.prevBtn.addEventListener('click', () => this.navigate(-1));
        this.nextBtn.addEventListener('click', () => this.navigate(1));

        // Sidebar navigation items
        this.navItems.forEach(item => {
            item.addEventListener('click', () => {
                const slideIndex = parseInt(item.dataset.slide);
                this.goToSlide(slideIndex);
            });
        });

        // Section header collapse/expand
        this.sectionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                header.classList.toggle('collapsed');
            });
        });

        // Menu toggle (hamburger button)
        if (this.menuToggle) {
            this.menuToggle.addEventListener('click', () => this.toggleSidebar());
        }

        // Floating menu button (visible when sidebar is collapsed)
        if (this.floatingMenuBtn) {
            this.floatingMenuBtn.addEventListener('click', () => this.toggleSidebar());
        }

        // Touch swipe support
        this.setupTouchNavigation();
    }

    toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen;

        if (this.sidebarOpen) {
            this.sidebar.classList.remove('collapsed');
            this.contentArea.classList.remove('sidebar-collapsed');
            this.floatingMenuBtn.classList.remove('visible');
        } else {
            this.sidebar.classList.add('collapsed');
            this.contentArea.classList.add('sidebar-collapsed');
            this.floatingMenuBtn.classList.add('visible');
        }
    }

    setupKeyboardNav() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                this.navigate(1);
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                this.navigate(-1);
            } else if (e.key === 'Home') {
                this.goToSlide(0);
            } else if (e.key === 'End') {
                this.goToSlide(this.totalSlides - 1);
            }
        });
    }

    setupTouchNavigation() {
        let touchStartX = 0;
        let touchEndX = 0;
        const contentArea = document.querySelector('.content-area');

        contentArea.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        contentArea.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });

        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    this.navigate(1); // Swipe left = next
                } else {
                    this.navigate(-1); // Swipe right = prev
                }
            }
        };

        this.handleSwipe = handleSwipe;
    }

    navigate(direction) {
        const newSlide = this.currentSlide + direction;
        if (newSlide >= 0 && newSlide < this.totalSlides) {
            this.goToSlide(newSlide);
        }
    }

    goToSlide(index) {
        if (index < 0 || index >= this.totalSlides || index === this.currentSlide) {
            return;
        }

        // Hide current slide
        this.slides[this.currentSlide].classList.remove('active');
        this.navItems[this.currentSlide].classList.remove('active');

        // Mark current slide as completed
        this.visitedSlides.add(this.currentSlide);
        this.navItems[this.currentSlide].classList.add('completed');

        // Show new slide
        this.currentSlide = index;
        this.slides[this.currentSlide].classList.add('active');
        this.navItems[this.currentSlide].classList.add('active');

        // Add to visited
        this.visitedSlides.add(index);

        // Update UI
        this.updateUI();
        this.saveProgress();

        // Scroll content to top
        const slideContent = this.slides[this.currentSlide].querySelector('.slide-content');
        if (slideContent) {
            slideContent.scrollTop = 0;
        }

        // Scroll sidebar nav item into view
        this.navItems[this.currentSlide].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }

    updateUI() {
        // Update slide indicator
        this.currentSlideEl.textContent = this.currentSlide + 1;
        this.totalSlidesEl.textContent = this.totalSlides;

        // Update navigation buttons
        this.prevBtn.disabled = this.currentSlide === 0;
        this.nextBtn.disabled = this.currentSlide === this.totalSlides - 1;

        // Update progress
        this.updateProgress();
    }

    updateProgress() {
        const progress = Math.round((this.visitedSlides.size / this.totalSlides) * 100);
        this.progressFill.style.width = `${progress}%`;
        this.progressText.textContent = `${progress}% COMPLETE`;
    }

    saveProgress() {
        const progressData = {
            currentSlide: this.currentSlide,
            visitedSlides: Array.from(this.visitedSlides)
        };
        localStorage.setItem('cv-course-progress', JSON.stringify(progressData));
    }

    loadProgress() {
        const saved = localStorage.getItem('cv-course-progress');
        if (saved) {
            try {
                const data = JSON.parse(saved);

                // Restore visited slides
                if (data.visitedSlides && Array.isArray(data.visitedSlides)) {
                    data.visitedSlides.forEach(index => {
                        this.visitedSlides.add(index);
                        if (this.navItems[index]) {
                            this.navItems[index].classList.add('completed');
                        }
                    });
                }

                // Restore position
                if (typeof data.currentSlide === 'number' && data.currentSlide < this.totalSlides) {
                    // Remove active from default first slide
                    this.slides[0].classList.remove('active');
                    this.navItems[0].classList.remove('active');

                    // Set saved slide as active
                    this.currentSlide = data.currentSlide;
                    this.slides[this.currentSlide].classList.add('active');
                    this.navItems[this.currentSlide].classList.add('active');
                }

                this.updateUI();
            } catch (e) {
                console.warn('Could not load saved progress:', e);
            }
        }
    }

    resetProgress() {
        localStorage.removeItem('cv-course-progress');
        this.visitedSlides = new Set([0]);
        this.navItems.forEach(item => item.classList.remove('completed'));
        this.goToSlide(0);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.courseModule = new CourseModule();
});

// Expose reset function for debugging/testing
window.resetCourseProgress = () => {
    if (window.courseModule) {
        window.courseModule.resetProgress();
    }
};
