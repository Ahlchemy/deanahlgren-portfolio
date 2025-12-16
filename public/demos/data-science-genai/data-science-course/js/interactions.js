// ===== INTERACTIVE ELEMENTS CONTROLLER =====

// Extend the DataScienceCourse class with interaction methods
DataScienceCourse.prototype.showTimelineDetail = function(timelineItem) {
    const era = timelineItem.dataset.era;
    const details = this.getTimelineDetails(era);
    
    // Remove active class from all timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.classList.remove('timeline-active');
    });
    
    // Add active class to clicked item
    timelineItem.classList.add('timeline-active');
    
    // Show detail modal or update detail panel
    this.showDetailModal(details);
};

DataScienceCourse.prototype.getTimelineDetails = function(era) {
    const details = {
        ancient: {
            title: "Ancient Civilizations (3000 BCE - 500 CE)",
            description: "The foundation of data-driven decision making",
            keyPoints: [
                "Astronomical observations for calendar systems",
                "Agricultural data collection for crop planning",
                "Trade record keeping and inventory management",
                "Population census for resource allocation"
            ],
            innovations: [
                "Cuneiform tablets for data recording",
                "Abacus for calculations",
                "Sundials and water clocks for time measurement",
                "Maps and navigation tools"
            ],
            impact: "Established the fundamental principle that decisions should be based on observed data and patterns."
        },
        medieval: {
            title: "Medieval Period (500 - 1500 CE)",
            description: "Systematic record keeping and early mathematics",
            keyPoints: [
                "Double-entry bookkeeping systems",
                "Guild production records",
                "Tax collection and administration",
                "Trade route optimization"
            ],
            innovations: [
                "Arabic numerals adoption",
                "Algebra and advanced mathematics",
                "Mechanical clocks",
                "Improved navigation instruments"
            ],
            impact: "Introduced systematic approaches to data collection and mathematical analysis."
        },
        renaissance: {
            title: "Renaissance & Scientific Revolution (1500 - 1700 CE)",
            description: "Birth of scientific method and systematic experimentation",
            keyPoints: [
                "Controlled experiments and hypothesis testing",
                "Systematic observation and measurement",
                "Mathematical modeling of natural phenomena",
                "Early probability theory development"
            ],
            innovations: [
                "Scientific method formalization",
                "Telescope and microscope",
                "Mechanical calculators",
                "Probability theory foundations"
            ],
            impact: "Established rigorous methods for data collection, analysis, and inference."
        },
        industrial: {
            title: "Industrial Revolution (1700 - 1900 CE)",
            description: "Mass production and quality control",
            keyPoints: [
                "Statistical quality control in manufacturing",
                "Economic data collection and analysis",
                "Population statistics and demographics",
                "Transportation and logistics optimization"
            ],
            innovations: [
                "Statistical methods development",
                "Telegraph for data transmission",
                "Mechanical tabulating machines",
                "Standard measurement systems"
            ],
            impact: "Scaled data analysis to industrial levels and developed modern statistical methods."
        },
        modern: {
            title: "Modern Era (1900 - Present)",
            description: "Computer revolution and artificial intelligence",
            keyPoints: [
                "Electronic computers and data processing",
                "Machine learning and artificial intelligence",
                "Big data and real-time analytics",
                "Internet and global data sharing"
            ],
            innovations: [
                "Electronic computers",
                "Internet and World Wide Web",
                "Machine learning algorithms",
                "Cloud computing and big data platforms"
            ],
            impact: "Revolutionized data processing capabilities and enabled AI-powered decision making."
        }
    };
    
    return details[era] || {};
};

DataScienceCourse.prototype.showDetailModal = function(details) {
    // Create and show a modal with timeline details
    const modal = document.createElement('div');
    modal.className = 'modal-overlay timeline-detail-modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${details.title}</h3>
                <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p class="detail-description">${details.description}</p>
                
                <div class="detail-section">
                    <h4>Key Developments</h4>
                    <ul>
                        ${details.keyPoints?.map(point => `<li>${point}</li>`).join('') || ''}
                    </ul>
                </div>
                
                <div class="detail-section">
                    <h4>Major Innovations</h4>
                    <ul>
                        ${details.innovations?.map(innovation => `<li>${innovation}</li>`).join('') || ''}
                    </ul>
                </div>
                
                <div class="detail-section">
                    <h4>Historical Impact</h4>
                    <p>${details.impact}</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add click outside to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
};

DataScienceCourse.prototype.toggleParadigmView = function(option) {
    const paradigm = option.dataset.paradigm;
    
    // Update toggle buttons
    document.querySelectorAll('.toggle-option').forEach(btn => {
        btn.classList.remove('active');
    });
    option.classList.add('active');
    
    // Update paradigm cards visibility
    const inferentialCard = document.querySelector('.paradigm-card.inferential');
    const computationalCard = document.querySelector('.paradigm-card.computational');
    
    switch(paradigm) {
        case 'inferential':
            inferentialCard.style.display = 'block';
            computationalCard.style.display = 'none';
            break;
        case 'computational':
            inferentialCard.style.display = 'none';
            computationalCard.style.display = 'block';
            break;
        case 'both':
        default:
            inferentialCard.style.display = 'block';
            computationalCard.style.display = 'block';
            break;
    }
    
    // Add animation
    if (this.settings.animations) {
        const visibleCards = document.querySelectorAll('.paradigm-card[style*="block"], .paradigm-card:not([style*="none"])');
        visibleCards.forEach(card => {
            card.classList.add('animate-fade-in');
            setTimeout(() => card.classList.remove('animate-fade-in'), 600);
        });
    }
};

DataScienceCourse.prototype.selectQuizOption = function(option) {
    const question = option.closest('.quiz-question');
    const options = question.querySelectorAll('.quiz-option');
    const feedback = question.querySelector('.quiz-feedback');
    const isCorrect = option.dataset.answer === 'correct';
    
    // Remove previous selections
    options.forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Mark selected option
    option.classList.add('selected');
    
    // Show correct/incorrect styling
    if (isCorrect) {
        option.classList.add('correct');
        if (this.settings.animations) {
            option.classList.add('animate-correct');
        }
    } else {
        option.classList.add('incorrect');
        // Also highlight the correct answer
        const correctOption = question.querySelector('[data-answer="correct"]');
        if (correctOption) {
            correctOption.classList.add('correct');
        }
        if (this.settings.animations) {
            option.classList.add('animate-incorrect');
        }
    }
    
    // Show feedback
    if (feedback) {
        feedback.classList.add('show');
        feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
    }
    
    // Update progress if correct
    if (isCorrect) {
        this.updateQuizProgress(question);
    }
    
    // Clean up animation classes
    setTimeout(() => {
        option.classList.remove('animate-correct', 'animate-incorrect');
    }, 1000);
};

DataScienceCourse.prototype.updateQuizProgress = function(question) {
    // Mark question as completed
    question.classList.add('completed');
    
    // Check if all quizzes in current section are completed
    const currentSection = document.querySelector('.section.active');
    const allQuizzes = currentSection.querySelectorAll('.quiz-question');
    const completedQuizzes = currentSection.querySelectorAll('.quiz-question.completed');
    
    if (allQuizzes.length === completedQuizzes.length) {
        // All quizzes completed, enable next section
        const nextBtn = document.querySelector('.btn[data-action="next-section"]');
        if (nextBtn) {
            nextBtn.disabled = false;
            nextBtn.classList.add('animate-glow');
        }
    }
};

DataScienceCourse.prototype.showVennDetail = function(circle) {
    const tech = circle.dataset.tech;
    const detailCards = document.querySelectorAll('.detail-card');
    
    // Hide all detail cards
    detailCards.forEach(card => {
        card.style.display = 'none';
    });
    
    // Show selected detail card
    const selectedCard = document.querySelector(`[data-tech="${tech}"]`);
    if (selectedCard) {
        selectedCard.style.display = 'block';
        if (this.settings.animations) {
            selectedCard.classList.add('animate-fade-in-up');
            setTimeout(() => selectedCard.classList.remove('animate-fade-in-up'), 600);
        }
    }
    
    // Update circle styling
    document.querySelectorAll('.venn-circle').forEach(c => {
        c.classList.remove('active');
    });
    circle.classList.add('active');
};

// Interactive demonstration handlers
DataScienceCourse.prototype.initializeInteractiveDemos = function() {
    // Supervised learning demo
    const supervisedDemo = document.querySelector('.supervised-demo');
    if (supervisedDemo) {
        const unknownPoint = supervisedDemo.querySelector('.unknown');
        if (unknownPoint) {
            unknownPoint.addEventListener('click', () => {
                this.demonstrateSupervised(unknownPoint);
            });
        }
    }
    
    // Unsupervised learning demo
    const unsupervisedDemo = document.querySelector('.unsupervised-demo');
    if (unsupervisedDemo) {
        unsupervisedDemo.addEventListener('click', () => {
            this.demonstrateUnsupervised(unsupervisedDemo);
        });
    }
};

DataScienceCourse.prototype.demonstrateSupervised = function(unknownPoint) {
    // Simulate prediction
    const isPositive = Math.random() > 0.5;
    unknownPoint.textContent = isPositive ? '+' : '-';
    unknownPoint.className = `point ${isPositive ? 'positive' : 'negative'}`;
    
    // Add animation
    if (this.settings.animations) {
        unknownPoint.classList.add('animate-bounce');
        setTimeout(() => unknownPoint.classList.remove('animate-bounce'), 1000);
    }
    
    // Show explanation
    this.showNotification(
        `Prediction: ${isPositive ? 'Positive' : 'Negative'} class based on nearby labeled examples!`,
        'info'
    );
};

DataScienceCourse.prototype.demonstrateUnsupervised = function(demo) {
    // Animate clustering
    const clusters = demo.querySelectorAll('.cluster');
    clusters.forEach((cluster, index) => {
        setTimeout(() => {
            cluster.style.transform = `scale(1.1)`;
            cluster.style.backgroundColor = index === 0 ? 'rgba(59, 130, 246, 0.2)' : 'rgba(16, 185, 129, 0.2)';
            
            setTimeout(() => {
                cluster.style.transform = 'scale(1)';
            }, 300);
        }, index * 200);
    });
    
    this.showNotification('Clustering algorithm discovered 2 natural groups in the data!', 'info');
};

// Paradigm comparison interactions
DataScienceCourse.prototype.initializeParadigmComparison = function() {
    const toggleOptions = document.querySelectorAll('.comparison-toggle .toggle-option');
    toggleOptions.forEach(option => {
        option.addEventListener('click', () => {
            this.toggleParadigmView(option);
        });
    });
};

// AI comparison interactions
DataScienceCourse.prototype.initializeAIComparison = function() {
    const toggleOptions = document.querySelectorAll('.ai-comparison .toggle-option');
    toggleOptions.forEach(option => {
        option.addEventListener('click', () => {
            this.toggleAIView(option);
        });
    });
};

DataScienceCourse.prototype.toggleAIView = function(option) {
    const view = option.dataset.view;
    
    // Update toggle buttons
    document.querySelectorAll('.ai-comparison .toggle-option').forEach(btn => {
        btn.classList.remove('active');
    });
    option.classList.add('active');
    
    // Update AI cards visibility
    const generativeCard = document.querySelector('.ai-card.generative');
    const discriminativeCard = document.querySelector('.ai-card.discriminative');
    
    switch(view) {
        case 'generative':
            generativeCard.style.display = 'block';
            discriminativeCard.style.display = 'none';
            break;
        case 'discriminative':
            generativeCard.style.display = 'none';
            discriminativeCard.style.display = 'block';
            break;
        case 'both':
        default:
            generativeCard.style.display = 'block';
            discriminativeCard.style.display = 'block';
            break;
    }
    
    // Add animation
    if (this.settings.animations) {
        const visibleCards = document.querySelectorAll('.ai-card[style*="block"], .ai-card:not([style*="none"])');
        visibleCards.forEach(card => {
            card.classList.add('animate-scale-in');
            setTimeout(() => card.classList.remove('animate-scale-in'), 400);
        });
    }
};

// Technology detail interactions for Venn diagram
DataScienceCourse.prototype.initializeVennDiagram = function() {
    const vennCircles = document.querySelectorAll('.venn-circle');
    vennCircles.forEach(circle => {
        circle.addEventListener('click', () => {
            this.showVennDetail(circle);
        });
        
        // Add hover effects
        circle.addEventListener('mouseenter', () => {
            if (this.settings.animations) {
                circle.style.transform = 'scale(1.05)';
            }
        });
        
        circle.addEventListener('mouseleave', () => {
            circle.style.transform = 'scale(1)';
        });
    });
};

// Learning type comparison interactions
DataScienceCourse.prototype.initializeLearningComparison = function() {
    const learningCards = document.querySelectorAll('.learning-card');
    learningCards.forEach(card => {
        card.addEventListener('click', () => {
            this.highlightLearningType(card);
        });
    });
};

DataScienceCourse.prototype.highlightLearningType = function(card) {
    // Remove highlight from all cards
    document.querySelectorAll('.learning-card').forEach(c => {
        c.classList.remove('highlighted');
    });
    
    // Highlight selected card
    card.classList.add('highlighted');
    
    // Show additional information
    const type = card.classList.contains('supervised') ? 'supervised' : 'unsupervised';
    const info = this.getLearningTypeInfo(type);
    
    this.showNotification(info, 'info');
};

DataScienceCourse.prototype.getLearningTypeInfo = function(type) {
    const info = {
        supervised: "Supervised learning is like learning with a teacher - you have examples with correct answers to guide the learning process.",
        unsupervised: "Unsupervised learning is like exploring on your own - you discover patterns and structures without being told what to look for."
    };
    
    return info[type] || '';
};

// Initialize all interactions when module content is loaded
DataScienceCourse.prototype.initializeModuleInteractions = function() {
    // Initialize based on current module
    this.initializeInteractiveDemos();
    this.initializeParadigmComparison();
    this.initializeAIComparison();
    this.initializeVennDiagram();
    this.initializeLearningComparison();
    
    // Add scroll animations
    this.initializeScrollAnimations();
};

DataScienceCourse.prototype.initializeScrollAnimations = function() {
    const animatedElements = document.querySelectorAll('.content-card, .timeline-item, .paradigm-card, .ai-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
};

