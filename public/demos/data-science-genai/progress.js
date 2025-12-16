// ===== PROGRESS TRACKING CONTROLLER =====

// Extend the DataScienceCourse class with progress tracking methods
DataScienceCourse.prototype.initializeProgressTracking = function() {
    this.progressData = {
        startTime: Date.now(),
        totalTimeSpent: 0,
        moduleProgress: {},
        sectionProgress: {},
        quizScores: {},
        achievements: [],
        lastActivity: Date.now()
    };
    
    this.loadProgressData();
    this.setupProgressTracking();
    this.setupAchievements();
};

DataScienceCourse.prototype.loadProgressData = function() {
    const savedProgress = localStorage.getItem('ds_course_detailed_progress');
    if (savedProgress) {
        this.progressData = { ...this.progressData, ...JSON.parse(savedProgress) };
    }
};

DataScienceCourse.prototype.saveProgressData = function() {
    this.progressData.lastActivity = Date.now();
    localStorage.setItem('ds_course_detailed_progress', JSON.stringify(this.progressData));
};

DataScienceCourse.prototype.setupProgressTracking = function() {
    // Track time spent
    this.startSessionTime = Date.now();
    
    // Update time spent every minute
    this.timeTrackingInterval = setInterval(() => {
        this.updateTimeSpent();
    }, 60000); // Every minute
    
    // Track when user leaves/returns
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            this.updateTimeSpent();
        } else {
            this.startSessionTime = Date.now();
        }
    });
    
    // Track before page unload
    window.addEventListener('beforeunload', () => {
        this.updateTimeSpent();
        this.saveProgressData();
    });
};

DataScienceCourse.prototype.updateTimeSpent = function() {
    if (this.startSessionTime) {
        const sessionTime = Date.now() - this.startSessionTime;
        this.progressData.totalTimeSpent += sessionTime;
        this.startSessionTime = Date.now();
        this.saveProgressData();
    }
};

DataScienceCourse.prototype.trackModuleProgress = function(moduleId, progress) {
    this.progressData.moduleProgress[moduleId] = {
        progress: progress,
        completedAt: progress === 100 ? Date.now() : null,
        timeSpent: this.progressData.moduleProgress[moduleId]?.timeSpent || 0
    };
    
    this.saveProgressData();
    this.checkAchievements();
    this.updateProgressDisplay();
};

DataScienceCourse.prototype.trackSectionProgress = function(moduleId, sectionId) {
    const key = `${moduleId}-${sectionId}`;
    this.progressData.sectionProgress[key] = {
        completedAt: Date.now(),
        attempts: (this.progressData.sectionProgress[key]?.attempts || 0) + 1
    };
    
    this.saveProgressData();
};

DataScienceCourse.prototype.trackQuizScore = function(moduleId, sectionId, score, totalQuestions) {
    const key = `${moduleId}-${sectionId}`;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    if (!this.progressData.quizScores[key]) {
        this.progressData.quizScores[key] = [];
    }
    
    this.progressData.quizScores[key].push({
        score: score,
        total: totalQuestions,
        percentage: percentage,
        completedAt: Date.now()
    });
    
    this.saveProgressData();
    this.checkAchievements();
};

DataScienceCourse.prototype.setupAchievements = function() {
    this.achievements = {
        'first_module': {
            name: 'Getting Started',
            description: 'Complete your first module',
            icon: 'fas fa-play',
            condition: () => Object.keys(this.progressData.moduleProgress).length >= 1
        },
        'half_course': {
            name: 'Halfway There',
            description: 'Complete 3 modules',
            icon: 'fas fa-medal',
            condition: () => {
                const completed = Object.values(this.progressData.moduleProgress)
                    .filter(p => p.progress === 100).length;
                return completed >= 3;
            }
        },
        'course_complete': {
            name: 'Data Science Expert',
            description: 'Complete all 6 modules',
            icon: 'fas fa-trophy',
            condition: () => {
                const completed = Object.values(this.progressData.moduleProgress)
                    .filter(p => p.progress === 100).length;
                return completed === 6;
            }
        },
        'quiz_master': {
            name: 'Quiz Master',
            description: 'Score 100% on 5 quizzes',
            icon: 'fas fa-brain',
            condition: () => {
                const perfectScores = Object.values(this.progressData.quizScores)
                    .flat()
                    .filter(quiz => quiz.percentage === 100).length;
                return perfectScores >= 5;
            }
        },
        'speed_learner': {
            name: 'Speed Learner',
            description: 'Complete a module in under 30 minutes',
            icon: 'fas fa-rocket',
            condition: () => {
                return Object.values(this.progressData.moduleProgress)
                    .some(p => p.timeSpent < 30 * 60 * 1000 && p.progress === 100);
            }
        },
        'dedicated_learner': {
            name: 'Dedicated Learner',
            description: 'Spend over 2 hours learning',
            icon: 'fas fa-clock',
            condition: () => this.progressData.totalTimeSpent > 2 * 60 * 60 * 1000
        }
    };
};

DataScienceCourse.prototype.checkAchievements = function() {
    Object.entries(this.achievements).forEach(([id, achievement]) => {
        if (!this.progressData.achievements.includes(id) && achievement.condition()) {
            this.unlockAchievement(id, achievement);
        }
    });
};

DataScienceCourse.prototype.unlockAchievement = function(id, achievement) {
    this.progressData.achievements.push(id);
    this.saveProgressData();
    
    // Show achievement notification
    this.showAchievementNotification(achievement);
};

DataScienceCourse.prototype.showAchievementNotification = function(achievement) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="achievement-content">
            <div class="achievement-icon">
                <i class="${achievement.icon}"></i>
            </div>
            <div class="achievement-text">
                <h4>Achievement Unlocked!</h4>
                <h5>${achievement.name}</h5>
                <p>${achievement.description}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 500);
    }, 5000);
};

DataScienceCourse.prototype.updateProgressDisplay = function() {
    // Update overall progress
    const completedModules = Object.values(this.progressData.moduleProgress)
        .filter(p => p.progress === 100).length;
    const overallProgress = Math.round((completedModules / 6) * 100);
    
    const progressFill = document.getElementById('overall-progress');
    const progressText = document.getElementById('progress-text');
    
    if (progressFill) {
        progressFill.style.width = `${overallProgress}%`;
        if (this.settings.animations) {
            progressFill.classList.add('animate-progress');
        }
    }
    
    if (progressText) {
        progressText.textContent = `${overallProgress}% Complete`;
    }
    
    // Update module progress indicators
    this.updateModuleProgressIndicators();
    
    // Update statistics
    this.updateProgressStatistics();
};

DataScienceCourse.prototype.updateModuleProgressIndicators = function() {
    document.querySelectorAll('.module-item').forEach(item => {
        const moduleId = parseInt(item.dataset.module);
        const progressData = this.progressData.moduleProgress[moduleId];
        const progressBar = item.querySelector('.progress-fill');
        const progressText = item.querySelector('.module-progress span');
        
        if (progressData) {
            const progress = progressData.progress || 0;
            if (progressBar) {
                progressBar.style.width = `${progress}%`;
            }
            
            if (progressText) {
                const module = this.modules[moduleId];
                const completedSections = Math.floor((progress / 100) * module.sections.length);
                progressText.textContent = `${completedSections}/${module.sections.length} sections`;
            }
            
            if (progress === 100) {
                item.classList.add('completed');
            }
        }
    });
};

DataScienceCourse.prototype.updateProgressStatistics = function() {
    const stats = this.calculateProgressStatistics();
    
    // Update stats display if it exists
    const statsContainer = document.querySelector('.progress-statistics');
    if (statsContainer) {
        statsContainer.innerHTML = `
            <div class="stat-item">
                <span class="stat-number">${stats.completedModules}</span>
                <span class="stat-label">Modules Completed</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${stats.totalQuizzes}</span>
                <span class="stat-label">Quizzes Taken</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${stats.averageScore}%</span>
                <span class="stat-label">Average Quiz Score</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${stats.timeSpentFormatted}</span>
                <span class="stat-label">Time Spent</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${stats.achievements}</span>
                <span class="stat-label">Achievements</span>
            </div>
        `;
    }
};

DataScienceCourse.prototype.calculateProgressStatistics = function() {
    const completedModules = Object.values(this.progressData.moduleProgress)
        .filter(p => p.progress === 100).length;
    
    const allQuizzes = Object.values(this.progressData.quizScores).flat();
    const totalQuizzes = allQuizzes.length;
    const averageScore = totalQuizzes > 0 ? 
        Math.round(allQuizzes.reduce((sum, quiz) => sum + quiz.percentage, 0) / totalQuizzes) : 0;
    
    const timeSpentHours = Math.floor(this.progressData.totalTimeSpent / (1000 * 60 * 60));
    const timeSpentMinutes = Math.floor((this.progressData.totalTimeSpent % (1000 * 60 * 60)) / (1000 * 60));
    const timeSpentFormatted = `${timeSpentHours}h ${timeSpentMinutes}m`;
    
    return {
        completedModules,
        totalQuizzes,
        averageScore,
        timeSpentFormatted,
        achievements: this.progressData.achievements.length
    };
};

DataScienceCourse.prototype.generateProgressReport = function() {
    const stats = this.calculateProgressStatistics();
    const startDate = new Date(this.progressData.startTime);
    const lastActivity = new Date(this.progressData.lastActivity);
    
    const report = {
        courseTitle: 'Data Science Evolution: From Ancient Decisions to Generative AI',
        studentProgress: {
            overallCompletion: Math.round((stats.completedModules / 6) * 100),
            modulesCompleted: stats.completedModules,
            totalModules: 6,
            timeSpent: stats.timeSpentFormatted,
            averageQuizScore: stats.averageScore,
            achievementsEarned: stats.achievements
        },
        moduleDetails: Object.entries(this.progressData.moduleProgress).map(([moduleId, data]) => ({
            moduleId: parseInt(moduleId),
            moduleName: this.modules[moduleId]?.title || `Module ${moduleId}`,
            progress: data.progress,
            completedAt: data.completedAt ? new Date(data.completedAt) : null,
            timeSpent: this.formatTime(data.timeSpent)
        })),
        quizPerformance: Object.entries(this.progressData.quizScores).map(([key, scores]) => {
            const [moduleId, sectionId] = key.split('-');
            const latestScore = scores[scores.length - 1];
            return {
                module: parseInt(moduleId),
                section: parseInt(sectionId),
                attempts: scores.length,
                bestScore: Math.max(...scores.map(s => s.percentage)),
                latestScore: latestScore.percentage,
                lastAttempt: new Date(latestScore.completedAt)
            };
        }),
        achievements: this.progressData.achievements.map(id => ({
            id,
            name: this.achievements[id]?.name || id,
            description: this.achievements[id]?.description || ''
        })),
        timeline: {
            started: startDate,
            lastActivity: lastActivity,
            daysActive: Math.ceil((lastActivity - startDate) / (1000 * 60 * 60 * 24))
        }
    };
    
    return report;
};

DataScienceCourse.prototype.exportProgressReport = function() {
    const report = this.generateProgressReport();
    const reportText = this.formatProgressReportAsText(report);
    
    const blob = new Blob([reportText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `data-science-course-progress-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
};

DataScienceCourse.prototype.formatProgressReportAsText = function(report) {
    return `
DATA SCIENCE EVOLUTION COURSE - PROGRESS REPORT
Generated: ${new Date().toLocaleDateString()}

OVERALL PROGRESS
================
Course Completion: ${report.studentProgress.overallCompletion}%
Modules Completed: ${report.studentProgress.modulesCompleted}/${report.studentProgress.totalModules}
Total Time Spent: ${report.studentProgress.timeSpent}
Average Quiz Score: ${report.studentProgress.averageQuizScore}%
Achievements Earned: ${report.studentProgress.achievementsEarned}

MODULE DETAILS
==============
${report.moduleDetails.map(module => `
Module ${module.moduleId}: ${module.moduleName}
Progress: ${module.progress}%
${module.completedAt ? `Completed: ${module.completedAt.toLocaleDateString()}` : 'In Progress'}
Time Spent: ${module.timeSpent}
`).join('')}

QUIZ PERFORMANCE
================
${report.quizPerformance.map(quiz => `
Module ${quiz.module}, Section ${quiz.section}
Attempts: ${quiz.attempts}
Best Score: ${quiz.bestScore}%
Latest Score: ${quiz.latestScore}%
Last Attempt: ${quiz.lastAttempt.toLocaleDateString()}
`).join('')}

ACHIEVEMENTS
============
${report.achievements.map(achievement => `
✓ ${achievement.name}
  ${achievement.description}
`).join('')}

LEARNING TIMELINE
=================
Course Started: ${report.timeline.started.toLocaleDateString()}
Last Activity: ${report.timeline.lastActivity.toLocaleDateString()}
Days Active: ${report.timeline.daysActive}
    `.trim();
};

DataScienceCourse.prototype.formatTime = function(milliseconds) {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
};

// Initialize progress tracking
DataScienceCourse.prototype.initializeAllProgress = function() {
    this.initializeProgressTracking();
};

