// Mālama i ka Hale: Workplace Safety Training Module
// Modern JavaScript Implementation with Smooth Animations

class TrainingModule {
    constructor() {
        this.currentScreen = 0;
        this.totalScreens = 8;
        this.completedScreens = new Set();
        this.selectedAnswer = null;
        this.showFeedback = false;
        
        // Screen data
        this.screens = [
            {
                id: 'title',
                type: 'title',
                title: 'Mālama i ka Hale',
                subtitle: 'A Guide to Workplace Safety',
                description: 'Module 1: Our Foundation for Safety'
            },
            {
                id: 'objectives',
                type: 'objectives',
                title: 'What You Will Learn in This Module',
                description: 'Welcome to the first step in our commitment to workplace safety. This foundational module explains the "why" behind our safety protocols. By the end of this section, you will be able to:',
                objectives: [
                    'Explain the company\'s philosophy on safety as a shared kuleana (responsibility)',
                    'Define the roles of both the employer and the employee under Hawaiʻi law',
                    'Identify the "General Duty Clause" as the core of HIOSH compliance',
                    'Recognize how these principles apply to your daily work'
                ]
            },
            {
                id: 'leadership',
                type: 'leadership',
                title: 'Our Commitment Starts at the Top',
                content: `Aloha Team,

At the heart of our work is mālama—the care we show for our clients, our tenants, and the properties we manage. But our most important kuleana is to each other.

This training is about ensuring that every member of our ʻohana goes home safe at the end of the day. It's not just about compliance; it's about building a culture of awareness and mutual protection. Your work is essential, and doing it safely is paramount.

As you go through this material, I want you to think of it not as a requirement, but as a tool. It is a guide to help us all uphold our most important responsibility: looking out for one another.

Thank you for your commitment.`,
                signature: 'Leadership Team'
            },
            {
                id: 'hiosh-intro',
                type: 'content',
                title: 'The Legal Framework for Our Safety',
                content: `To ensure a safe workplace for everyone, our company operations are guided by the standards set by the Hawaiʻi Occupational Safety and Health division, or HIOSH. Established under the Hawaiʻi Revised Statutes, Chapter 396, this state-run program creates the legal framework for workplace safety.

While these regulations set the minimum standard, our goal is to exceed them. Understanding the basics of HIOSH is essential, as it defines the specific, legally-mandated duties for both our company and for you as an employee. Let's look at those duties now.`,
                icon: 'file-text'
            },
            {
                id: 'shared-duties',
                type: 'duties',
                title: 'A Partnership in Safety',
                description: 'HIOSH law is built on a partnership. It outlines distinct but complementary responsibilities. Think of it as a shared kuleana—the company provides the safe environment and tools, and employees use them correctly and responsibly.',
                employerDuties: [
                    'Provide a workplace free from recognized hazards (General Duty Clause, §396-6(a))',
                    'Comply with all HIOSH rules and standards',
                    'Provide and pay for necessary Personal Protective Equipment (PPE)',
                    'Provide effective safety training'
                ],
                employeeDuties: [
                    'Comply with all HIOSH rules applicable to your own actions (§396-6(b))',
                    'Follow all lawful employer safety and health rules',
                    'Report hazardous conditions to your supervisor',
                    'Report job-related injuries or illnesses promptly'
                ]
            },
            {
                id: 'general-duty',
                type: 'content',
                title: 'The Most Important Rule',
                content: `While HIOSH has many specific rules for things like ladders or electrical safety, the single most important concept is the General Duty Clause (§396-6(a)).

This clause states that every employer must provide a workplace "free from recognized hazards that are causing or are likely to cause death or serious physical harm."

What this means in practice: We are legally required to address any serious hazard we know about, even if there isn't a specific regulation for it. This is why your role in identifying and reporting issues is so critical. You are our eyes and ears on the properties. Your awareness turns this legal requirement into a life-saving practice.`,
                icon: 'alert-triangle'
            },
            {
                id: 'summary',
                type: 'summary',
                title: 'Module 1 Summary',
                description: 'We\'ve now established the foundation for our safety culture. Let\'s review the key takeaways from this module:',
                takeaways: [
                    'Safety is a Core Value: Our approach to safety is rooted in mālama and our kuleana to protect our company ʻohana',
                    'HIOSH Sets the Standard: Our safety program is built to meet and exceed the legal requirements of Hawaiʻi Revised Statutes, Chapter 396',
                    'It\'s a Partnership: Both the company and employees have specific, legally-defined duties to maintain a safe workplace',
                    'The General Duty Clause is Key: We must always address known hazards, making your awareness and reporting essential'
                ],
                nextModule: 'In the next module, we will build on this foundation and learn how to actively identify common hazards you may encounter in your daily work.'
            },
            {
                id: 'quiz',
                type: 'quiz',
                title: 'Knowledge Check',
                question: 'According to HIOSH\'s General Duty Clause, if a property manager spots a potential hazard that isn\'t covered by a specific safety rule, what is the correct approach?',
                options: [
                    'Ignore it, since there is no specific rule',
                    'Wait for a tenant to report it before taking action',
                    'Recognize it as a potential hazard and report it according to company procedure, because the employer is responsible for known hazards',
                    'Fix it only if it\'s cheap and easy to do so'
                ],
                correctAnswer: 2,
                feedback: {
                    correct: 'That\'s right. Safety is our shared kuleana, and that includes addressing all recognized hazards.',
                    incorrect: 'Not quite. Under the General Duty Clause, employers have a responsibility to address all recognized hazards, even if there isn\'t a specific rule. Reporting is the first critical step.'
                }
            }
        ];
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.updateProgress();
        this.createScreenIndicators();
        this.renderCurrentScreen();
        this.hideLoading();
    }
    
    bindEvents() {
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');
        
        prevButton.addEventListener('click', () => this.previousScreen());
        nextButton.addEventListener('click', () => this.nextScreen());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' && !prevButton.disabled) {
                this.previousScreen();
            } else if (e.key === 'ArrowRight' && !nextButton.disabled) {
                this.nextScreen();
            }
        });
    }
    
    showLoading() {
        const overlay = document.getElementById('loading-overlay');
        overlay.classList.add('active');
    }
    
    hideLoading() {
        const overlay = document.getElementById('loading-overlay');
        setTimeout(() => {
            overlay.classList.remove('active');
        }, 500);
    }
    
    updateProgress() {
        const currentScreenElement = document.getElementById('current-screen');
        const totalScreensElement = document.getElementById('total-screens');
        const progressFill = document.getElementById('progress-fill');
        
        currentScreenElement.textContent = this.currentScreen + 1;
        totalScreensElement.textContent = this.totalScreens;
        
        const progress = ((this.currentScreen + 1) / this.totalScreens) * 100;
        progressFill.style.width = `${progress}%`;
    }
    
    createScreenIndicators() {
        const container = document.getElementById('screen-indicators');
        container.innerHTML = '';
        
        for (let i = 0; i < this.totalScreens; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            indicator.addEventListener('click', () => this.goToScreen(i));
            container.appendChild(indicator);
        }
        
        this.updateScreenIndicators();
    }
    
    updateScreenIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        
        indicators.forEach((indicator, index) => {
            indicator.className = 'indicator';
            
            if (index < this.currentScreen) {
                indicator.classList.add('completed');
            } else if (index === this.currentScreen) {
                indicator.classList.add('current');
            } else {
                indicator.classList.add('upcoming');
            }
        });
    }
    
    updateNavigationButtons() {
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');
        const nextText = document.getElementById('next-text');
        
        prevButton.disabled = this.currentScreen === 0;
        
        const currentScreenData = this.screens[this.currentScreen];
        const isQuizScreen = currentScreenData.type === 'quiz';
        const isLastScreen = this.currentScreen === this.totalScreens - 1;
        
        if (isQuizScreen && !this.showFeedback) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
        
        nextText.textContent = isLastScreen ? 'Complete' : 'Next';
    }
    
    renderCurrentScreen() {
        const wrapper = document.getElementById('screen-wrapper');
        const screen = this.screens[this.currentScreen];
        
        // Add exit animation to current content
        const currentContent = wrapper.querySelector('.screen');
        if (currentContent) {
            currentContent.classList.add('exiting');
            setTimeout(() => {
                this.renderScreen(screen);
            }, 150);
        } else {
            this.renderScreen(screen);
        }
    }
    
    renderScreen(screen) {
        const wrapper = document.getElementById('screen-wrapper');
        
        let html = '';
        
        switch (screen.type) {
            case 'title':
                html = this.renderTitleScreen(screen);
                break;
            case 'objectives':
                html = this.renderObjectivesScreen(screen);
                break;
            case 'leadership':
                html = this.renderLeadershipScreen(screen);
                break;
            case 'content':
                html = this.renderContentScreen(screen);
                break;
            case 'duties':
                html = this.renderDutiesScreen(screen);
                break;
            case 'summary':
                html = this.renderSummaryScreen(screen);
                break;
            case 'quiz':
                html = this.renderQuizScreen(screen);
                break;
        }
        
        wrapper.innerHTML = `<div class="screen">${html}</div>`;
        
        // Trigger entrance animation
        setTimeout(() => {
            const newScreen = wrapper.querySelector('.screen');
            newScreen.classList.add('active');
        }, 50);
        
        this.updateNavigationButtons();
        this.updateScreenIndicators();
        this.updateProgress();
        
        // Bind quiz events if needed
        if (screen.type === 'quiz') {
            this.bindQuizEvents();
        }
    }
    
    renderTitleScreen(screen) {
        return `
            <div class="text-center" style="padding: 2rem 0;">
                <div style="margin-bottom: 3rem;">
                    <h1 style="font-size: 4rem; font-weight: 700; color: var(--primary-blue); margin-bottom: 1rem;">${screen.title}</h1>
                    <h2 style="font-size: 2rem; color: var(--primary-blue-light); margin-bottom: 2rem;">${screen.subtitle}</h2>
                    <div style="background: linear-gradient(135deg, var(--gray-50) 0%, var(--gray-100) 100%); padding: 2rem; border-radius: var(--radius-xl); border: 1px solid var(--gray-200);">
                        <h3 style="font-size: 1.5rem; font-weight: 600; color: var(--primary-blue);">${screen.description}</h3>
                    </div>
                </div>
                <div style="display: flex; justify-content: center;">
                    <div style="width: 100%; max-width: 600px; height: 300px; background: linear-gradient(135deg, var(--gray-100) 0%, var(--gray-200) 100%); border-radius: var(--radius-xl); display: flex; align-items: center; justify-content: center; border: 1px solid var(--gray-300);">
                        <div style="text-align: center;">
                            <div style="width: 80px; height: 80px; background: var(--gradient-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                                ${this.getIcon('shield', 40, 'var(--white)')}
                            </div>
                            <p style="color: var(--primary-blue); font-weight: 600; font-size: 1.125rem;">Professional Property Management</p>
                            <p style="color: var(--gray-600); font-size: 1rem;">Honolulu, Hawaiʻi</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    renderObjectivesScreen(screen) {
        const objectivesList = screen.objectives.map((objective, index) => `
            <div class="objective-item" style="animation-delay: ${index * 0.1}s;">
                ${this.getIcon('check-circle', 24, 'var(--success)')}
                <span>${objective}</span>
            </div>
        `).join('');
        
        return `
            <div>
                <h2>${screen.title}</h2>
                <p style="font-size: 1.125rem; line-height: 1.7; margin-bottom: 2rem;">${screen.description}</p>
                <div class="objective-list">
                    ${objectivesList}
                </div>
            </div>
        `;
    }
    
    renderLeadershipScreen(screen) {
        return `
            <div>
                <h2>${screen.title}</h2>
                <div class="leadership-message">
                    <div style="display: flex; align-items: flex-start; gap: 2rem;">
                        <div style="width: 80px; height: 80px; background: var(--gray-200); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            ${this.getIcon('users', 32, 'var(--primary-blue)')}
                        </div>
                        <div style="flex: 1;">
                            <div class="leadership-content">${screen.content}</div>
                            <div class="leadership-signature">${screen.signature}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    renderContentScreen(screen) {
        const iconHtml = screen.icon ? this.getIcon(screen.icon, 32, 'var(--primary-blue)') : '';
        
        return `
            <div>
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                    ${iconHtml}
                    <h2 style="margin-bottom: 0;">${screen.title}</h2>
                </div>
                <div style="background: var(--white); padding: 2rem; border-radius: var(--radius-xl); border: 1px solid var(--gray-200); line-height: 1.8;">
                    <p style="white-space: pre-line; margin-bottom: 0;">${screen.content}</p>
                </div>
            </div>
        `;
    }
    
    renderDutiesScreen(screen) {
        const employerDuties = screen.employerDuties.map(duty => `
            <div class="duty-item">
                ${this.getIcon('check-circle', 20, 'var(--success)')}
                <span>${duty}</span>
            </div>
        `).join('');
        
        const employeeDuties = screen.employeeDuties.map(duty => `
            <div class="duty-item">
                ${this.getIcon('check-circle', 20, 'var(--success)')}
                <span>${duty}</span>
            </div>
        `).join('');
        
        return `
            <div>
                <h2>${screen.title}</h2>
                <p style="font-size: 1.125rem; line-height: 1.7; margin-bottom: 2rem;">${screen.description}</p>
                <div class="duties-grid">
                    <div class="card">
                        <div class="card-header" style="background: var(--gray-50);">
                            <div class="card-title" style="color: var(--primary-blue);">
                                ${this.getIcon('shield', 20, 'var(--primary-blue)')}
                                <span>Employer Duties (Our Promise to You)</span>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="duty-list">
                                ${employerDuties}
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" style="background: var(--success-light);">
                            <div class="card-title" style="color: var(--accent-green);">
                                ${this.getIcon('users', 20, 'var(--accent-green)')}
                                <span>Employee Duties (Your Responsibility)</span>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="duty-list">
                                ${employeeDuties}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    renderSummaryScreen(screen) {
        const takeawaysList = screen.takeaways.map((takeaway, index) => `
            <div class="objective-item" style="background: var(--success-light); border-left-color: var(--success); animation-delay: ${index * 0.1}s;">
                ${this.getIcon('check-circle', 24, 'var(--success)')}
                <span>${takeaway}</span>
            </div>
        `).join('');
        
        return `
            <div>
                <h2>${screen.title}</h2>
                <p style="font-size: 1.125rem; line-height: 1.7; margin-bottom: 2rem;">${screen.description}</p>
                <div class="objective-list">
                    ${takeawaysList}
                </div>
                <div class="next-module-preview">
                    <p>${screen.nextModule}</p>
                </div>
            </div>
        `;
    }
    
    renderQuizScreen(screen) {
        const options = screen.options.map((option, index) => `
            <button class="quiz-option" data-answer="${index}">
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <span>${option}</span>
            </button>
        `).join('');
        
        return `
            <div>
                <h2>${screen.title}</h2>
                <div class="quiz-container">
                    <div class="card-header">
                        <div class="card-title" style="color: var(--primary-blue);">Let's confirm our understanding</div>
                    </div>
                    <div class="card-content">
                        <div class="quiz-question">${screen.question}</div>
                        <div class="quiz-options">
                            ${options}
                        </div>
                        <div id="quiz-feedback" class="quiz-feedback" style="display: none;"></div>
                    </div>
                </div>
            </div>
        `;
    }
    
    bindQuizEvents() {
        const options = document.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                const answerIndex = parseInt(e.currentTarget.dataset.answer);
                this.handleAnswerSelect(answerIndex);
            });
        });
    }
    
    handleAnswerSelect(answerIndex) {
        if (this.showFeedback) return;
        
        this.selectedAnswer = answerIndex;
        this.showFeedback = true;
        
        const screen = this.screens[this.currentScreen];
        const options = document.querySelectorAll('.quiz-option');
        const feedbackElement = document.getElementById('quiz-feedback');
        
        // Disable all options
        options.forEach((option, index) => {
            option.disabled = true;
            
            if (index === answerIndex) {
                if (index === screen.correctAnswer) {
                    option.classList.add('correct');
                } else {
                    option.classList.add('incorrect');
                }
            }
        });
        
        // Show feedback
        const isCorrect = answerIndex === screen.correctAnswer;
        const feedbackText = isCorrect ? screen.feedback.correct : screen.feedback.incorrect;
        
        feedbackElement.textContent = feedbackText;
        feedbackElement.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        feedbackElement.style.display = 'block';
        
        this.updateNavigationButtons();
    }
    
    nextScreen() {
        if (this.currentScreen < this.totalScreens - 1) {
            this.completedScreens.add(this.currentScreen);
            this.currentScreen++;
            this.selectedAnswer = null;
            this.showFeedback = false;
            this.renderCurrentScreen();
        } else {
            // Training complete
            this.showCompletionMessage();
        }
    }
    
    previousScreen() {
        if (this.currentScreen > 0) {
            this.currentScreen--;
            this.selectedAnswer = null;
            this.showFeedback = false;
            this.renderCurrentScreen();
        }
    }
    
    goToScreen(screenIndex) {
        if (screenIndex >= 0 && screenIndex < this.totalScreens) {
            // Mark previous screens as completed if going forward
            if (screenIndex > this.currentScreen) {
                for (let i = this.currentScreen; i < screenIndex; i++) {
                    this.completedScreens.add(i);
                }
            }
            
            this.currentScreen = screenIndex;
            this.selectedAnswer = null;
            this.showFeedback = false;
            this.renderCurrentScreen();
        }
    }
    
    showCompletionMessage() {
        const wrapper = document.getElementById('screen-wrapper');
        
        const completionHtml = `
            <div class="screen active" style="text-align: center; padding: 3rem 0;">
                <div style="width: 120px; height: 120px; background: var(--gradient-accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem;">
                    ${this.getIcon('check-circle', 60, 'var(--white)')}
                </div>
                <h1 style="color: var(--success); margin-bottom: 1rem;">Training Complete!</h1>
                <p style="font-size: 1.25rem; color: var(--gray-700); margin-bottom: 2rem;">
                    Congratulations! You have successfully completed Module 1 of the Mālama i ka Hale workplace safety training.
                </p>
                <div style="background: var(--success-light); padding: 2rem; border-radius: var(--radius-xl); border-left: 6px solid var(--success); margin-bottom: 2rem;">
                    <h3 style="color: var(--success); margin-bottom: 1rem;">What's Next?</h3>
                    <p style="color: var(--gray-700); margin-bottom: 0;">
                        Your completion has been recorded. Please proceed to Module 2 to continue your safety training journey, 
                        where we'll explore hazard identification specific to Hawaii properties.
                    </p>
                </div>
                <button onclick="window.print()" style="background: var(--gradient-primary); color: var(--white); border: none; padding: 1rem 2rem; border-radius: var(--radius-lg); font-weight: 600; cursor: pointer; box-shadow: var(--shadow-md);">
                    Print Certificate
                </button>
            </div>
        `;
        
        wrapper.innerHTML = completionHtml;
        
        // Update navigation
        const nextButton = document.getElementById('next-button');
        nextButton.style.display = 'none';
        
        // Mark all screens as completed
        for (let i = 0; i < this.totalScreens; i++) {
            this.completedScreens.add(i);
        }
        this.updateScreenIndicators();
    }
    
    getIcon(name, size = 24, color = 'currentColor') {
        const icons = {
            'shield': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>`,
            'check-circle': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="9,11 12,14 22,4"/></svg>`,
            'users': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
            'file-text': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>`,
            'alert-triangle': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
        };
        
        return icons[name] || '';
    }
}

// Initialize the training module when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TrainingModule();
});

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add focus management for accessibility
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            const focusable = Array.from(document.querySelectorAll(focusableElements));
            const index = focusable.indexOf(document.activeElement);
            
            if (e.shiftKey) {
                const prevIndex = index > 0 ? index - 1 : focusable.length - 1;
                focusable[prevIndex]?.focus();
            } else {
                const nextIndex = index < focusable.length - 1 ? index + 1 : 0;
                focusable[nextIndex]?.focus();
            }
        }
    });
});
