// ===== DATA STORAGE CONTROLLER =====

// Extend the DataScienceCourse class with storage methods
DataScienceCourse.prototype.initializeStorage = function() {
    this.storageKeys = {
        progress: 'ds_course_progress',
        detailedProgress: 'ds_course_detailed_progress',
        notes: 'ds_course_notes',
        bookmarks: 'ds_course_bookmarks',
        settings: 'ds_course_settings',
        userProfile: 'ds_course_user_profile'
    };
    
    this.setupStorageEventListeners();
    this.checkStorageQuota();
    this.setupDataBackup();
};

DataScienceCourse.prototype.setupStorageEventListeners = function() {
    // Listen for storage events (when data changes in another tab)
    window.addEventListener('storage', (e) => {
        if (Object.values(this.storageKeys).includes(e.key)) {
            this.handleStorageChange(e);
        }
    });
    
    // Auto-save on visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            this.saveAllData();
        }
    });
    
    // Save before page unload
    window.addEventListener('beforeunload', () => {
        this.saveAllData();
    });
};

DataScienceCourse.prototype.handleStorageChange = function(event) {
    switch(event.key) {
        case this.storageKeys.progress:
            this.loadUserData();
            this.updateProgressDisplay();
            break;
        case this.storageKeys.notes:
            this.loadNotes();
            break;
        case this.storageKeys.settings:
            this.loadSettings();
            this.applySettings();
            break;
    }
};

DataScienceCourse.prototype.saveAllData = function() {
    try {
        this.saveUserData();
        this.saveProgressData();
        this.saveNotes();
        this.saveBookmarks();
        this.saveSettings();
        this.saveUserProfile();
        
        // Update last save timestamp
        localStorage.setItem('ds_course_last_save', Date.now().toString());
        
        return true;
    } catch (error) {
        console.error('Error saving data:', error);
        this.handleStorageError(error);
        return false;
    }
};

DataScienceCourse.prototype.loadAllData = function() {
    try {
        this.loadUserData();
        this.loadProgressData();
        this.loadNotes();
        this.loadBookmarks();
        this.loadSettings();
        this.loadUserProfile();
        
        return true;
    } catch (error) {
        console.error('Error loading data:', error);
        this.handleStorageError(error);
        return false;
    }
};

DataScienceCourse.prototype.saveNotes = function() {
    const notesTextarea = document.getElementById('notes-textarea');
    if (notesTextarea) {
        this.userNotes = notesTextarea.value;
    }
    
    localStorage.setItem(this.storageKeys.notes, this.userNotes);
};

DataScienceCourse.prototype.loadNotes = function() {
    const savedNotes = localStorage.getItem(this.storageKeys.notes);
    if (savedNotes !== null) {
        this.userNotes = savedNotes;
        const notesTextarea = document.getElementById('notes-textarea');
        if (notesTextarea) {
            notesTextarea.value = savedNotes;
        }
    }
};

DataScienceCourse.prototype.saveBookmarks = function() {
    localStorage.setItem(this.storageKeys.bookmarks, JSON.stringify(this.bookmarks));
};

DataScienceCourse.prototype.loadBookmarks = function() {
    const savedBookmarks = localStorage.getItem(this.storageKeys.bookmarks);
    if (savedBookmarks) {
        this.bookmarks = JSON.parse(savedBookmarks);
    }
};

DataScienceCourse.prototype.saveSettings = function() {
    localStorage.setItem(this.storageKeys.settings, JSON.stringify(this.settings));
};

DataScienceCourse.prototype.loadSettings = function() {
    const savedSettings = localStorage.getItem(this.storageKeys.settings);
    if (savedSettings) {
        this.settings = { ...this.settings, ...JSON.parse(savedSettings) };
    }
};

DataScienceCourse.prototype.saveUserProfile = function() {
    const profile = {
        name: this.userProfile?.name || '',
        email: this.userProfile?.email || '',
        preferences: this.userProfile?.preferences || {},
        createdAt: this.userProfile?.createdAt || Date.now(),
        lastUpdated: Date.now()
    };
    
    localStorage.setItem(this.storageKeys.userProfile, JSON.stringify(profile));
};

DataScienceCourse.prototype.loadUserProfile = function() {
    const savedProfile = localStorage.getItem(this.storageKeys.userProfile);
    if (savedProfile) {
        this.userProfile = JSON.parse(savedProfile);
    } else {
        this.userProfile = {
            name: '',
            email: '',
            preferences: {},
            createdAt: Date.now(),
            lastUpdated: Date.now()
        };
    }
};

DataScienceCourse.prototype.addBookmark = function(moduleId, sectionId, title, description) {
    const bookmark = {
        id: Date.now().toString(),
        moduleId: moduleId,
        sectionId: sectionId,
        title: title,
        description: description,
        createdAt: Date.now()
    };
    
    this.bookmarks.push(bookmark);
    this.saveBookmarks();
    
    this.showNotification('Bookmark added successfully!', 'success');
    return bookmark;
};

DataScienceCourse.prototype.removeBookmark = function(bookmarkId) {
    this.bookmarks = this.bookmarks.filter(b => b.id !== bookmarkId);
    this.saveBookmarks();
    
    this.showNotification('Bookmark removed', 'info');
};

DataScienceCourse.prototype.getBookmarks = function() {
    return this.bookmarks.sort((a, b) => b.createdAt - a.createdAt);
};

DataScienceCourse.prototype.checkStorageQuota = function() {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
        navigator.storage.estimate().then(estimate => {
            const usedMB = (estimate.usage / (1024 * 1024)).toFixed(2);
            const quotaMB = (estimate.quota / (1024 * 1024)).toFixed(2);
            const usagePercent = ((estimate.usage / estimate.quota) * 100).toFixed(1);
            
            console.log(`Storage used: ${usedMB} MB of ${quotaMB} MB (${usagePercent}%)`);
            
            // Warn if storage is getting full
            if (usagePercent > 80) {
                this.showNotification('Storage space is running low. Consider exporting your data.', 'warning');
            }
        });
    }
};

DataScienceCourse.prototype.handleStorageError = function(error) {
    if (error.name === 'QuotaExceededError') {
        this.showNotification('Storage quota exceeded. Please clear some data or export your progress.', 'error');
        this.showStorageManagementDialog();
    } else {
        this.showNotification('Error saving data. Your progress may not be saved.', 'error');
    }
};

DataScienceCourse.prototype.showStorageManagementDialog = function() {
    const dialog = document.createElement('div');
    dialog.className = 'modal-overlay storage-management-modal active';
    dialog.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Storage Management</h3>
                <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p>Your browser's storage is full. Choose an option to continue:</p>
                <div class="storage-options">
                    <button class="btn primary" onclick="courseApp.exportAllData()">
                        <i class="fas fa-download"></i>
                        Export All Data
                    </button>
                    <button class="btn secondary" onclick="courseApp.clearOldData()">
                        <i class="fas fa-trash"></i>
                        Clear Old Data
                    </button>
                    <button class="btn secondary" onclick="courseApp.resetCourse()">
                        <i class="fas fa-refresh"></i>
                        Reset Course
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(dialog);
};

DataScienceCourse.prototype.exportAllData = function() {
    const allData = {
        progress: this.progress,
        detailedProgress: this.progressData,
        notes: this.userNotes,
        bookmarks: this.bookmarks,
        settings: this.settings,
        userProfile: this.userProfile,
        exportDate: new Date().toISOString(),
        courseVersion: '1.0'
    };
    
    const dataStr = JSON.stringify(allData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `data-science-course-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    this.showNotification('Data exported successfully!', 'success');
};

DataScienceCourse.prototype.importData = function(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            
            // Validate data structure
            if (this.validateImportData(data)) {
                this.restoreFromBackup(data);
                this.showNotification('Data imported successfully!', 'success');
            } else {
                this.showNotification('Invalid backup file format.', 'error');
            }
        } catch (error) {
            this.showNotification('Error reading backup file.', 'error');
        }
    };
    reader.readAsText(file);
};

DataScienceCourse.prototype.validateImportData = function(data) {
    const requiredFields = ['progress', 'detailedProgress', 'notes', 'bookmarks', 'settings'];
    return requiredFields.every(field => field in data);
};

DataScienceCourse.prototype.restoreFromBackup = function(data) {
    this.progress = data.progress || {};
    this.progressData = data.detailedProgress || {};
    this.userNotes = data.notes || '';
    this.bookmarks = data.bookmarks || [];
    this.settings = data.settings || {};
    this.userProfile = data.userProfile || {};
    
    this.saveAllData();
    this.updateProgressDisplay();
    this.loadNotes();
};

DataScienceCourse.prototype.clearOldData = function() {
    // Clear data older than 30 days
    const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
    
    // Clear old quiz attempts
    Object.keys(this.progressData.quizScores).forEach(key => {
        this.progressData.quizScores[key] = this.progressData.quizScores[key]
            .filter(quiz => quiz.completedAt > thirtyDaysAgo);
    });
    
    // Clear old bookmarks
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.createdAt > thirtyDaysAgo);
    
    this.saveAllData();
    this.showNotification('Old data cleared successfully!', 'success');
};

DataScienceCourse.prototype.resetCourse = function() {
    if (confirm('Are you sure you want to reset all course progress? This action cannot be undone.')) {
        // Clear all localStorage data
        Object.values(this.storageKeys).forEach(key => {
            localStorage.removeItem(key);
        });
        
        // Reset application state
        this.progress = { modules: {}, overall: 0 };
        this.progressData = {
            startTime: Date.now(),
            totalTimeSpent: 0,
            moduleProgress: {},
            sectionProgress: {},
            quizScores: {},
            achievements: [],
            lastActivity: Date.now()
        };
        this.userNotes = '';
        this.bookmarks = [];
        this.currentModule = null;
        this.currentSection = 0;
        
        // Reload the page
        window.location.reload();
    }
};

DataScienceCourse.prototype.setupDataBackup = function() {
    // Auto-backup every hour
    setInterval(() => {
        this.createAutoBackup();
    }, 60 * 60 * 1000); // 1 hour
};

DataScienceCourse.prototype.createAutoBackup = function() {
    const backupData = {
        progress: this.progress,
        detailedProgress: this.progressData,
        notes: this.userNotes,
        bookmarks: this.bookmarks,
        settings: this.settings,
        timestamp: Date.now()
    };
    
    // Store in a separate key for auto-backup
    try {
        localStorage.setItem('ds_course_auto_backup', JSON.stringify(backupData));
    } catch (error) {
        console.warn('Auto-backup failed:', error);
    }
};

DataScienceCourse.prototype.restoreFromAutoBackup = function() {
    const autoBackup = localStorage.getItem('ds_course_auto_backup');
    if (autoBackup) {
        try {
            const data = JSON.parse(autoBackup);
            const backupAge = Date.now() - data.timestamp;
            
            // Only restore if backup is less than 24 hours old
            if (backupAge < 24 * 60 * 60 * 1000) {
                this.restoreFromBackup(data);
                this.showNotification('Restored from auto-backup', 'info');
                return true;
            }
        } catch (error) {
            console.error('Error restoring from auto-backup:', error);
        }
    }
    return false;
};

// Initialize storage system
DataScienceCourse.prototype.initializeAllStorage = function() {
    this.initializeStorage();
};

