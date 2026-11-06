// GitHub Contribution Graph - Real-time Activity Display
class GitHubActivity {
    constructor() {
        this.contributions = this.generateMockData();
        this.init();
    }
    
    init() {
        this.createWidget();
    }
    
    generateMockData() {
        const data = [];
        const today = new Date();
        
        // Generate 365 days of contribution data
        for (let i = 364; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            
            // Random contribution count (0-15)
            const count = Math.floor(Math.random() * 16);
            
            data.push({
                date: date.toISOString().split('T')[0],
                count: count,
                level: this.getLevel(count)
            });
        }
        
        return data;
    }
    
    getLevel(count) {
        if (count === 0) return 0;
        if (count < 4) return 1;
        if (count < 8) return 2;
        if (count < 12) return 3;
        return 4;
    }
    
    createWidget() {
        const widget = document.createElement('div');
        widget.className = 'github-activity-widget';
        widget.innerHTML = `
            <div class="github-widget-header">
                <h4><i class="fab fa-github"></i> GitHub Activity</h4>
                <span class="activity-count">500+ contributions this year</span>
            </div>
            <div class="github-graph">
                ${this.renderGraph()}
            </div>
            <div class="github-legend">
                <span>Less</span>
                <div class="legend-squares">
                    <span class="legend-square level-0"></span>
                    <span class="legend-square level-1"></span>
                    <span class="legend-square level-2"></span>
                    <span class="legend-square level-3"></span>
                    <span class="legend-square level-4"></span>
                </div>
                <span>More</span>
            </div>
        `;
        
        // Add to sidebar or main content
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.appendChild(widget);
        }
    }
    
    renderGraph() {
        const weeks = [];
        let week = [];
        
        this.contributions.forEach((day, index) => {
            const date = new Date(day.date);
            const dayOfWeek = date.getDay();
            
            week.push(day);
            
            if (dayOfWeek === 6 || index === this.contributions.length - 1) {
                weeks.push([...week]);
                week = [];
            }
        });
        
        return weeks.map(week => `
            <div class="github-week">
                ${week.map(day => `
                    <div class="github-day level-${day.level}" 
                         data-date="${day.date}" 
                         data-count="${day.count}"
                         title="${day.count} contributions on ${day.date}">
                    </div>
                `).join('')}
            </div>
        `).join('');
    }
}

// Skill Progress Tracker with Animations
class SkillTracker {
    constructor() {
        this.skills = [
            { name: 'React', level: 92, trend: 'up' },
            { name: 'Node.js', level: 88, trend: 'up' },
            { name: 'Python', level: 85, trend: 'stable' },
            { name: 'AI/ML', level: 78, trend: 'up' },
            { name: 'AWS', level: 75, trend: 'up' }
        ];
        this.createTracker();
    }
    
    createTracker() {
        const tracker = document.createElement('div');
        tracker.className = 'skill-tracker-widget';
        tracker.innerHTML = `
            <div class="widget-header">
                <h4><i class="fas fa-chart-line"></i> Skill Progression</h4>
            </div>
            <div class="skills-list">
                ${this.skills.map(skill => `
                    <div class="skill-track-item">
                        <div class="skill-track-header">
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-level">${skill.level}%</span>
                            <span class="skill-trend trend-${skill.trend}">
                                <i class="fas fa-arrow-${skill.trend === 'up' ? 'up' : 'right'}"></i>
                            </span>
                        </div>
                        <div class="skill-track-bar">
                            <div class="skill-track-fill" style="width: ${skill.level}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.appendChild(tracker);
        }
    }
}

// Initialize - Only on non-home pages
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're NOT on home page
    const isHomePage = window.location.pathname.includes('home.html') || 
                       window.location.pathname === '/' ||
                       window.location.pathname.endsWith('/');
    
    if (!isHomePage) {
        setTimeout(() => {
            new GitHubActivity();
            new SkillTracker();
        }, 1000);
    }
});
