/**
 * Business Application Module Navigation
 * Handles navigation between module pages and interactive elements
 */

document.addEventListener('DOMContentLoaded', function() {
  // Set up page transition effects
  document.body.classList.add('fade-in');
  
  // Get current module number from URL or data attribute
  const currentModule = getCurrentModule();
  
  // Highlight active navigation button
  highlightActiveNavButton(currentModule);
  
  // Set up interactive chart elements if they exist
  setupInteractiveCharts();
  
  // Add hover effects to cards
  setupCardAnimations();

  // Inject branded footer content
  setupFooterBranding();

  // Update course title across pages
  setupCourseTitle();
});

/**
 * Determines which module is currently active
 * @returns {number} The current module number
 */
function getCurrentModule() {
  // Get module number from the data attribute on body
  const moduleAttr = document.body.getAttribute('data-module');
  if (moduleAttr) {
    return parseInt(moduleAttr, 10);
  }
  
  // Fallback: try to get from URL
  const path = window.location.pathname;
  const moduleMatch = path.match(/module-(\d+)/);
  if (moduleMatch && moduleMatch[1]) {
    return parseInt(moduleMatch[1], 10);
  }
  
  // Default to module 1 if nothing found
  return 1;
}

/**
 * Highlights the active navigation button
 * @param {number} moduleNumber - The current module number
 */
function highlightActiveNavButton(moduleNumber) {
  const navButtons = document.querySelectorAll('.nav-button');
  navButtons.forEach(button => {
    button.classList.remove('active');
    if (parseInt(button.getAttribute('data-module'), 10) === moduleNumber) {
      button.classList.add('active');
    }
  });
}

/**
 * Sets up interactive chart elements
 * This is a placeholder function that would be expanded with actual chart implementations
 */
function setupInteractiveCharts() {
  // Example: Bar chart setup
  const barChartElement = document.getElementById('adoption-chart');
  if (barChartElement) {
    // This would be replaced with actual chart library code
    barChartElement.innerHTML = '<div class="chart-placeholder">Interactive Bar Chart: AI Adoption Across Business Functions</div>';
    
    // Add toggle functionality if it exists
    const chartToggle = document.getElementById('chart-toggle');
    if (chartToggle) {
      chartToggle.addEventListener('click', function() {
        const currentView = this.getAttribute('data-view');
        const newView = currentView === 'adoption' ? 'boardroom' : 'adoption';
        
        this.setAttribute('data-view', newView);
        this.textContent = newView === 'adoption' ? 'View Boardroom Presence' : 'View Adoption Rate';
        
        // Update chart (placeholder)
        barChartElement.innerHTML = `<div class="chart-placeholder">Interactive Chart: ${newView === 'adoption' ? 'AI Adoption Across Business Functions' : 'AI Boardroom Presence'}</div>`;
      });
    }
  }
  
  // Example: Neural network visualization
  const neuralNetworkElement = document.getElementById('neural-network-viz');
  if (neuralNetworkElement) {
    neuralNetworkElement.innerHTML = '<div class="chart-placeholder">Interactive Neural Network Visualization</div>';
    
    // Add train button functionality
    const trainButton = document.getElementById('train-network');
    if (trainButton) {
      trainButton.addEventListener('click', function() {
        neuralNetworkElement.innerHTML = '<div class="chart-placeholder">Neural Network Training Animation</div>';
        setTimeout(() => {
          neuralNetworkElement.innerHTML = '<div class="chart-placeholder">Updated Neural Network After Training</div>';
        }, 2000);
      });
    }
  }
}

/**
 * Sets up animations for cards and interactive elements
 */
function setupCardAnimations() {
  // Add staggered animation to cards
  const cards = document.querySelectorAll('.card, .example-card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add('fade-in');
  });
  
  // Add hover effect to prompt items
  const promptItems = document.querySelectorAll('.prompt-item');
  promptItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.backgroundColor = 'rgba(147, 197, 253, 0.2)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.backgroundColor = 'rgba(147, 197, 253, 0.1)';
    });
  });
}

/**
 * Page transition effect when navigating between modules
 * @param {string} url - The URL to navigate to
 */
function navigateWithTransition(url) {
  document.body.classList.remove('fade-in');
  document.body.classList.add('fade-out');
  
  setTimeout(() => {
    window.location.href = url;
  }, 300);
}

/**
 * Replaces the page footer with branded content
 */
function setupFooterBranding() {
  const footer = document.querySelector('footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="container">
      <p class="footer-brand">Built by AI-empowered human — Dean Ahlgren</p>
      <p class="footer-tagline">Shipping learning solutions that work since 2000</p>
      <div class="footer-contact">
        <span>📧 <a href="mailto:dean@deanahlgren.com">dean@deanahlgren.com</a></span>
        <span>🌴 Honolulu, Hawaii (Working Globally)</span>
        <span>🔗 <a href="https://linkedin.com/in/dean-ahlgren" target="_blank" rel="noopener">LinkedIn</a></span>
      </div>
    </div>
  `;
}

/**
 * Updates the visible course title and document title
 */
function setupCourseTitle() {
  const NEW_TITLE = 'AI in Action: Building Business Value Through Machine Learning';

  // Change header display title
  const titleElement = document.querySelector('.course-title');
  if (titleElement) {
    titleElement.textContent = NEW_TITLE;
  }

  // Prepend course title to the browser tab title if not already present
  if (!document.title.includes(NEW_TITLE)) {
    document.title = `${NEW_TITLE} | ${document.title}`;
  }
}
