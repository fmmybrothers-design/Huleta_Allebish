// Achievement & Badge System - Gamification
class AchievementSystem {
    constructor() {
        this.achievements = [
            { id: 1, name: '100 Days of Code', icon: 'fire', earned: true, rarity: 'rare' },
            { id: 2, name: 'Open Source Contributor', icon: 'code-branch', earned: true, rarity: 'epic' },
            { id: 3, name: 'Bug Hunter', icon: 'bug', earned: true, rarity: 'common' },
            { id: 4, name: 'Stack Overflow Hero', icon: 'stack-overflow', earned: false, rarity: 'legendary' },
            { id: 5, name: 'Night Owl Coder', icon: 'moon', earned: true, rarity: 'rare' },
            { id: 6, name: 'Coffee Addict', icon: 'coffee', earned: true, rarity: 'common' },
            { id: 7, name: 'Git Master', icon: 'git-alt', earned: true, rarity: 'epic' },
            { id: 8, name: 'Full-Stack Wizard', icon: 'hat-wizard', earned: true, rarity: 'legendary' }
        ];
        
        this.init();
    }
    
    init() {
        this.createAchievementButton();
        this.createAchievementPanel();
    }
    
    createAchievementButton() {
        const btn = document.createElement('button');
        btn.className = 'achievement-btn';
        btn.innerHTML = `
            <i class="fas fa-trophy"></i>
            <span class="achievement-count">${this.achievements.filter(a => a.earned).length}</span>
        `;
        btn.title = 'View Achievements';
        btn.addEventListener('click', () => this.togglePanel());
        document.body.appendChild(btn);
    }
    
    createAchievementPanel() {
        const panel = document.createElement('div');
        panel.className = 'achievement-panel hidden';
        panel.innerHTML = `
            <div class="achievement-header">
                <h3><i class="fas fa-trophy"></i> Achievements</h3>
                <button class="panel-close"><i class="fas fa-times"></i></button>
            </div>
            <div class="achievement-stats">
                <div class="stat-box">
                    <div class="stat-value">${this.achievements.filter(a => a.earned).length}/${this.achievements.length}</div>
                    <div class="stat-label">Unlocked</div>
                </div>
                <div class="stat-box">
                    <div class="stat-value">${Math.round((this.achievements.filter(a => a.earned).length / this.achievements.length) * 100)}%</div>
                    <div class="stat-label">Complete</div>
                </div>
            </div>
            <div class="achievements-grid">
                ${this.achievements.map(achievement => `
                    <div class="achievement-card ${achievement.earned ? 'earned' : 'locked'} rarity-${achievement.rarity}">
                        <div class="achievement-icon">
                            <i class="fas fa-${achievement.icon}"></i>
                        </div>
                        <div class="achievement-name">${achievement.name}</div>
                        <div class="achievement-rarity">${achievement.rarity}</div>
                        ${achievement.earned ? '<div class="earned-badge"><i class="fas fa-check"></i></div>' : '<div class="locked-badge"><i class="fas fa-lock"></i></div>'}
                    </div>
                `).join('')}
            </div>
        `;
        
        document.body.appendChild(panel);
        this.panel = panel;
        
        panel.querySelector('.panel-close').addEventListener('click', () => this.togglePanel());
    }
    
    togglePanel() {
        this.panel.classList.toggle('hidden');
        this.panel.classList.toggle('panel-open');
    }
}

// Visitor Counter with Analytics
class VisitorAnalytics {
    constructor() {
        this.visitors = this.getVisitorCount();
        this.createCounter();
    }
    
    getVisitorCount() {
        let count = localStorage.getItem('visitorCount') || 0;
        count = parseInt(count) + 1;
        localStorage.setItem('visitorCount', count);
        return count;
    }
    
    createCounter() {
        const counter = document.createElement('div');
        counter.className = 'visitor-counter';
        counter.innerHTML = `
            <div class="counter-icon">
                <i class="fas fa-eye"></i>
            </div>
            <div class="counter-content">
                <div class="counter-label">Profile Views</div>
                <div class="counter-value">${this.formatNumber(1247 + this.visitors)}</div>
            </div>
        `;
        
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.appendChild(counter);
        }
    }
    
    formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }
}

// Status Widget - Currently Working On
class StatusWidget {
    constructor() {
        this.status = {
            available: true,
            currentProject: 'AI-Powered Internship Platform',
            mood: 'productive',
            activity: 'Building amazing things'
        };
        this.createWidget();
    }
    
    createWidget() {
        const widget = document.createElement('div');
        widget.className = 'status-widget';
        widget.innerHTML = `
            <div class="status-header">
                <span class="status-dot ${this.status.available ? 'online' : 'offline'}"></span>
                <span class="status-text">${this.status.available ? 'Available for work' : 'Busy'}</span>
            </div>
            <div class="status-content">
                <div class="status-item">
                    <i class="fas fa-code"></i>
                    <span>Currently: ${this.status.currentProject}</span>
                </div>
                <div class="status-item">
                    <i class="fas fa-smile"></i>
                    <span>Mood: ${this.status.mood}</span>
                </div>
            </div>
        `;
        
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.appendChild(widget);
        }
    }
}

// Initialize all systems
document.addEventListener('DOMContentLoaded', () => {
    // Achievement button shows on all pages
    setTimeout(() => {
        new AchievementSystem();
    }, 500);
    
    // Sidebar widgets only on non-home pages
    const isHomePage = window.location.pathname.includes('home.html') || 
                       window.location.pathname === '/' ||
                       window.location.pathname.endsWith('/');
    
    if (!isHomePage) {
        setTimeout(() => {
            new VisitorAnalytics();
            new StatusWidget();
        }, 500);
    }
});
