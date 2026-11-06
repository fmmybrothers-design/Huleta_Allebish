// Real GitHub API Integration
class RealGitHubStats {
    constructor(username) {
        this.username = username;
        this.apiBase = 'https://api.github.com';
        this.init();
    }

    async init() {
        await this.displayGitHubStats();
        // Live activity removed per user request
    }

    async fetchGitHubData(endpoint) {
        try {
            const response = await fetch(`${this.apiBase}${endpoint}`);
            if (!response.ok) throw new Error('GitHub API request failed');
            return await response.json();
        } catch (error) {
            console.error('GitHub API Error:', error);
            return null;
        }
    }

    async displayGitHubStats() {
        const user = await this.fetchGitHubData(`/users/${this.username}`);
        const repos = await this.fetchGitHubData(`/users/${this.username}/repos?per_page=100`);
        
        if (!user || !repos) return;

        // Calculate total stars
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        
        // Calculate total commits (approximation)
        let totalCommits = 0;
        for (const repo of repos.slice(0, 10)) { // Check top 10 repos
            const commits = await this.fetchGitHubData(`/repos/${this.username}/${repo.name}/commits?per_page=1`);
            if (commits) totalCommits += 100; // Approximate
        }

        // Update stats on page
        this.updateStatsDisplay({
            repos: user.public_repos,
            followers: user.followers,
            stars: totalStars,
            commits: totalCommits
        });
    }

    updateStatsDisplay(stats) {
        const statsContainer = document.getElementById('github-real-stats');
        if (statsContainer) {
            statsContainer.innerHTML = `
                <div class="real-stat-item">
                    <i class="fas fa-code-branch"></i>
                    <span class="stat-value">${stats.repos}</span>
                    <span class="stat-label">Repositories</span>
                </div>
                <div class="real-stat-item">
                    <i class="fas fa-star"></i>
                    <span class="stat-value">${stats.stars}</span>
                    <span class="stat-label">Total Stars</span>
                </div>
                <div class="real-stat-item">
                    <i class="fas fa-users"></i>
                    <span class="stat-value">${stats.followers}</span>
                    <span class="stat-label">Followers</span>
                </div>
                <div class="real-stat-item">
                    <i class="fas fa-code-commit"></i>
                    <span class="stat-value">${stats.commits}+</span>
                    <span class="stat-label">Contributions</span>
                </div>
            `;
        }
    }

    // Recent Activity - DISABLED
    async displayRecentActivity() {
        // Live activity removed per user request
    }

    getEventIcon(type) {
        // Disabled
    }

    getEventMessage(event) {
        // Disabled
    }

    getRelativeTime(dateString) {
        // Disabled
    }
}

// Initialize with your GitHub username
document.addEventListener('DOMContentLoaded', () => {
    new RealGitHubStats('Debela-Kebede');
});
