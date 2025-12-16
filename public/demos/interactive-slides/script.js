document.addEventListener('DOMContentLoaded', function() {
    // Use courseData from external courseData.js file
    if (typeof courseData === 'undefined') {
        console.error('courseData not loaded! Make sure courseData.js is included before script.js');
        return;
    }

    // DOM elements
    const moduleList = document.getElementById('module-list');
    const pageTitle = document.getElementById('page-title');
    const pageContent = document.getElementById('page-content');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    // Track current position
    let currentModuleIndex = 0;
    let currentPageIndex = 0;
    let totalPages = 0;
    let completedPages = 0;

    // Calculate total pages
    courseData.modules.forEach(module => {
        totalPages += module.pages.length;
    });

    // Initialize the module navigation
    function initializeNavigation() {
        // Clear existing list
        moduleList.innerHTML = '';

        // Create module list items
        courseData.modules.forEach((module, moduleIndex) => {
            const moduleItem = document.createElement('li');
            
            // Create module title
            const moduleTitle = document.createElement('div');
            moduleTitle.className = 'module-title';
            moduleTitle.textContent = module.title;
            moduleTitle.addEventListener('click', function() {
                toggleModule(this);
                loadModule(moduleIndex, 0);
            });
            
            // Create page navigation list
            const pageNavList = document.createElement('ul');
            pageNavList.className = 'page-nav-list';
            
            // Create page navigation items
            module.pages.forEach((page, pageIndex) => {
                const pageItem = document.createElement('li');
                const pageLink = document.createElement('div');
                pageLink.className = 'page-link';
                pageLink.textContent = page.title;
                pageLink.addEventListener('click', function() {
                    loadModule(moduleIndex, pageIndex);
                });
                
                pageItem.appendChild(pageLink);
                pageNavList.appendChild(pageItem);
            });
            
            moduleItem.appendChild(moduleTitle);
            moduleItem.appendChild(pageNavList);
            moduleList.appendChild(moduleItem);
        });
    }

    // Toggle module expansion
    function toggleModule(moduleTitle) {
        // Remove active class from all modules
        document.querySelectorAll('.module-title').forEach(title => {
            title.classList.remove('active-module');
        });
        
        // Add active class to clicked module
        moduleTitle.classList.add('active-module');
        
        // Collapse all page lists
        document.querySelectorAll('.page-nav-list').forEach(list => {
            list.style.maxHeight = null;
        });
        
        // Expand the clicked module's page list
        const pageList = moduleTitle.nextElementSibling;
        pageList.style.maxHeight = pageList.scrollHeight + 'px';
    }

    // Load a specific module and page
    function loadModule(moduleIndex, pageIndex) {
        if (moduleIndex < 0 || moduleIndex >= courseData.modules.length) return;
        
        const module = courseData.modules[moduleIndex];
        if (pageIndex < 0 || pageIndex >= module.pages.length) return;
        
        const page = module.pages[pageIndex];
        
        // Update current indices
        currentModuleIndex = moduleIndex;
        currentPageIndex = pageIndex;
        
        // Update page content
        pageTitle.textContent = page.title;
        pageContent.innerHTML = page.content;
        
        // Update navigation buttons
        updateNavigationButtons();
        
        // Update active states in navigation
        updateActiveNavigation();
        
        // Update progress
        updateProgress();
        
        // Mark this page as viewed (for progress tracking)
        markPageAsViewed(moduleIndex, pageIndex);
    }

    // Update navigation buttons
    function updateNavigationButtons() {
        // Check if there's a previous page
        if (currentModuleIndex > 0 || currentPageIndex > 0) {
            prevBtn.disabled = false;
        } else {
            prevBtn.disabled = true;
        }
        
        // Check if there's a next page
        if (currentModuleIndex < courseData.modules.length - 1 || 
            currentPageIndex < courseData.modules[currentModuleIndex].pages.length - 1) {
            nextBtn.disabled = false;
        } else {
            nextBtn.disabled = true;
        }
    }

    // Update active states in navigation
    function updateActiveNavigation() {
        // Remove all active states
        document.querySelectorAll('.module-title').forEach(title => {
            title.classList.remove('active-module');
        });
        
        document.querySelectorAll('.page-link').forEach(link => {
            link.classList.remove('active-page');
        });
        
        // Add active state to current module
        const moduleTitles = document.querySelectorAll('.module-title');
        if (moduleTitles[currentModuleIndex]) {
            moduleTitles[currentModuleIndex].classList.add('active-module');
            
            // Expand the current module
            const pageList = moduleTitles[currentModuleIndex].nextElementSibling;
            pageList.style.maxHeight = pageList.scrollHeight + 'px';
            
            // Add active state to current page
            const pageLinks = pageList.querySelectorAll('.page-link');
            if (pageLinks[currentPageIndex]) {
                pageLinks[currentPageIndex].classList.add('active-page');
            }
        }
    }

    // Track viewed pages
    let viewedPages = {};

    // Mark a page as viewed
    function markPageAsViewed(moduleIndex, pageIndex) {
        const pageKey = `${moduleIndex}-${pageIndex}`;
        if (!viewedPages[pageKey]) {
            viewedPages[pageKey] = true;
            completedPages++;
            updateProgress();
        }
    }

    // Update progress indicators
    function updateProgress() {
        const progressPercentage = Math.round((completedPages / totalPages) * 100);
        progressBar.style.width = progressPercentage + '%';
        progressText.textContent = progressPercentage + '% Complete';
    }

    // Navigate to previous page
    function navigatePrev() {
        if (currentPageIndex > 0) {
            // Previous page in same module
            loadModule(currentModuleIndex, currentPageIndex - 1);
        } else if (currentModuleIndex > 0) {
            // Last page of previous module
            const prevModule = courseData.modules[currentModuleIndex - 1];
            loadModule(currentModuleIndex - 1, prevModule.pages.length - 1);
        }
    }

    // Navigate to next page
    function navigateNext() {
        const currentModule = courseData.modules[currentModuleIndex];
        if (currentPageIndex < currentModule.pages.length - 1) {
            // Next page in same module
            loadModule(currentModuleIndex, currentPageIndex + 1);
        } else if (currentModuleIndex < courseData.modules.length - 1) {
            // First page of next module
            loadModule(currentModuleIndex + 1, 0);
        }
    }

    // Add event listeners
    prevBtn.addEventListener('click', navigatePrev);
    nextBtn.addEventListener('click', navigateNext);

    // Initialize the course
    initializeNavigation();
    loadModule(0, 0); // Start with first module, first page
});