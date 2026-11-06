// Multi-Theme Switcher with All Basic Colors
class ThemeSwitcher {
    constructor() {
        this.themes = {
            dark: {
                name: 'Dark',
                icon: 'fa-moon',
                colors: {
                    '--bg-primary': '#0d1117',
                    '--bg-secondary': '#161b22',
                    '--bg-tertiary': '#1c2128',
                    '--text-primary': '#e6edf3',
                    '--text-secondary': '#8b949e',
                    '--text-muted': '#6e7681',
                    '--border-color': '#30363d',
                    '--accent-blue': '#58a6ff',
                    '--accent-purple': '#bc8cff',
                    '--accent-green': '#56d364',
                    '--accent-orange': '#f89a5e',
                    '--accent-pink': '#f778ba',
                    '--hover-bg': '#21262d'
                }
            },
            light: {
                name: 'Light',
                icon: 'fa-sun',
                colors: {
                    '--bg-primary': '#ffffff',
                    '--bg-secondary': '#f6f8fa',
                    '--bg-tertiary': '#ffffff',
                    '--text-primary': '#1f2328',
                    '--text-secondary': '#57606a',
                    '--text-muted': '#6e7681',
                    '--border-color': '#d0d7de',
                    '--accent-blue': '#0969da',
                    '--accent-purple': '#8250df',
                    '--accent-green': '#1a7f37',
                    '--accent-orange': '#bc4c00',
                    '--accent-pink': '#bf3989',
                    '--hover-bg': '#f3f4f6'
                }
            },
            red: {
                name: 'Red',
                icon: 'fa-fire',
                colors: {
                    '--bg-primary': '#1a0505',
                    '--bg-secondary': '#2d0a0a',
                    '--bg-tertiary': '#3d1010',
                    '--text-primary': '#ffe6e6',
                    '--text-secondary': '#ffb3b3',
                    '--text-muted': '#cc8888',
                    '--border-color': '#4d1a1a',
                    '--accent-blue': '#ff6b6b',
                    '--accent-purple': '#ff4d4d',
                    '--accent-green': '#ff8585',
                    '--accent-orange': '#ff3333',
                    '--accent-pink': '#ff0000',
                    '--hover-bg': '#331010'
                }
            },
            orange: {
                name: 'Orange',
                icon: 'fa-basketball-ball',
                colors: {
                    '--bg-primary': '#1a0f05',
                    '--bg-secondary': '#2d1a0a',
                    '--bg-tertiary': '#3d2610',
                    '--text-primary': '#fff0e6',
                    '--text-secondary': '#ffc799',
                    '--text-muted': '#cc9966',
                    '--border-color': '#4d3320',
                    '--accent-blue': '#ff9f4d',
                    '--accent-purple': '#ffb366',
                    '--accent-green': '#ffa500',
                    '--accent-orange': '#ff8c1a',
                    '--accent-pink': '#ff7700',
                    '--hover-bg': '#332210'
                }
            },
            yellow: {
                name: 'Yellow',
                icon: 'fa-lightbulb',
                colors: {
                    '--bg-primary': '#1a1a05',
                    '--bg-secondary': '#2d2d0a',
                    '--bg-tertiary': '#3d3d10',
                    '--text-primary': '#ffffcc',
                    '--text-secondary': '#ffff99',
                    '--text-muted': '#cccc66',
                    '--border-color': '#4d4d20',
                    '--accent-blue': '#ffeb3b',
                    '--accent-purple': '#ffd700',
                    '--accent-green': '#ffff00',
                    '--accent-orange': '#ffe500',
                    '--accent-pink': '#ffcc00',
                    '--hover-bg': '#333310'
                }
            },
            green: {
                name: 'Green',
                icon: 'fa-leaf',
                colors: {
                    '--bg-primary': '#051a05',
                    '--bg-secondary': '#0a2d0a',
                    '--bg-tertiary': '#103d10',
                    '--text-primary': '#e6ffe6',
                    '--text-secondary': '#99ff99',
                    '--text-muted': '#66cc66',
                    '--border-color': '#204d20',
                    '--accent-blue': '#4dff4d',
                    '--accent-purple': '#66ff66',
                    '--accent-green': '#00ff00',
                    '--accent-orange': '#33ff33',
                    '--accent-pink': '#00cc00',
                    '--hover-bg': '#103310'
                }
            },
            blue: {
                name: 'Blue',
                icon: 'fa-water',
                colors: {
                    '--bg-primary': '#05101a',
                    '--bg-secondary': '#0a1a2d',
                    '--bg-tertiary': '#10263d',
                    '--text-primary': '#e6f0ff',
                    '--text-secondary': '#99c7ff',
                    '--text-muted': '#6699cc',
                    '--border-color': '#20334d',
                    '--accent-blue': '#4d9fff',
                    '--accent-purple': '#66b3ff',
                    '--accent-green': '#00a8ff',
                    '--accent-orange': '#3399ff',
                    '--accent-pink': '#0088cc',
                    '--hover-bg': '#102233'
                }
            },
            indigo: {
                name: 'Indigo',
                icon: 'fa-star',
                colors: {
                    '--bg-primary': '#0a051a',
                    '--bg-secondary': '#14102d',
                    '--bg-tertiary': '#1e1a3d',
                    '--text-primary': '#e6e6ff',
                    '--text-secondary': '#9999ff',
                    '--text-muted': '#6666cc',
                    '--border-color': '#2d204d',
                    '--accent-blue': '#6666ff',
                    '--accent-purple': '#4d4dff',
                    '--accent-green': '#5555ff',
                    '--accent-orange': '#3333ff',
                    '--accent-pink': '#7777ff',
                    '--hover-bg': '#1a1033'
                }
            },
            violet: {
                name: 'Violet',
                icon: 'fa-gem',
                colors: {
                    '--bg-primary': '#1a0a1a',
                    '--bg-secondary': '#2d142d',
                    '--bg-tertiary': '#3d1e3d',
                    '--text-primary': '#ffe6ff',
                    '--text-secondary': '#ff99ff',
                    '--text-muted': '#cc66cc',
                    '--border-color': '#4d2d4d',
                    '--accent-blue': '#ff4dff',
                    '--accent-purple': '#ee82ee',
                    '--accent-green': '#da70d6',
                    '--accent-orange': '#ff33ff',
                    '--accent-pink': '#ff00ff',
                    '--hover-bg': '#331a33'
                }
            },
            github: {
                name: 'GitHub Pro',
                icon: 'fa-github',
                colors: {
                    '--bg-primary': '#0d1117',
                    '--bg-secondary': '#161b22',
                    '--bg-tertiary': '#21262d',
                    '--text-primary': '#c9d1d9',
                    '--text-secondary': '#8b949e',
                    '--text-muted': '#6e7681',
                    '--border-color': '#30363d',
                    '--accent-blue': '#58a6ff',
                    '--accent-purple': '#a371f7',
                    '--accent-green': '#3fb950',
                    '--accent-orange': '#d29922',
                    '--accent-pink': '#f778ba',
                    '--hover-bg': '#161b22'
                }
            },
            vscode: {
                name: 'VS Code',
                icon: 'fa-code',
                colors: {
                    '--bg-primary': '#1e1e1e',
                    '--bg-secondary': '#252526',
                    '--bg-tertiary': '#2d2d30',
                    '--text-primary': '#d4d4d4',
                    '--text-secondary': '#9cdcfe',
                    '--text-muted': '#808080',
                    '--border-color': '#3e3e42',
                    '--accent-blue': '#569cd6',
                    '--accent-purple': '#c586c0',
                    '--accent-green': '#4ec9b0',
                    '--accent-orange': '#ce9178',
                    '--accent-pink': '#d16d9e',
                    '--hover-bg': '#2a2d2e'
                }
            },
            dracula: {
                name: 'Dracula',
                icon: 'fa-vampire',
                colors: {
                    '--bg-primary': '#282a36',
                    '--bg-secondary': '#21222c',
                    '--bg-tertiary': '#343746',
                    '--text-primary': '#f8f8f2',
                    '--text-secondary': '#6272a4',
                    '--text-muted': '#44475a',
                    '--border-color': '#44475a',
                    '--accent-blue': '#8be9fd',
                    '--accent-purple': '#bd93f9',
                    '--accent-green': '#50fa7b',
                    '--accent-orange': '#ffb86c',
                    '--accent-pink': '#ff79c6',
                    '--hover-bg': '#343746'
                }
            },
            nord: {
                name: 'Nord',
                icon: 'fa-snowflake',
                colors: {
                    '--bg-primary': '#2e3440',
                    '--bg-secondary': '#3b4252',
                    '--bg-tertiary': '#434c5e',
                    '--text-primary': '#eceff4',
                    '--text-secondary': '#d8dee9',
                    '--text-muted': '#4c566a',
                    '--border-color': '#4c566a',
                    '--accent-blue': '#88c0d0',
                    '--accent-purple': '#b48ead',
                    '--accent-green': '#a3be8c',
                    '--accent-orange': '#d08770',
                    '--accent-pink': '#bf616a',
                    '--hover-bg': '#434c5e'
                }
            },
            monokai: {
                name: 'Monokai',
                icon: 'fa-terminal',
                colors: {
                    '--bg-primary': '#272822',
                    '--bg-secondary': '#1e1f1c',
                    '--bg-tertiary': '#383830',
                    '--text-primary': '#f8f8f2',
                    '--text-secondary': '#75715e',
                    '--text-muted': '#49483e',
                    '--border-color': '#49483e',
                    '--accent-blue': '#66d9ef',
                    '--accent-purple': '#ae81ff',
                    '--accent-green': '#a6e22e',
                    '--accent-orange': '#fd971f',
                    '--accent-pink': '#f92672',
                    '--hover-bg': '#383830'
                }
            }
        };

        this.currentTheme = this.getStoredTheme() || 'dark';
        this.init();
    }

    init() {
        this.createThemeToggle();
        this.applyTheme(this.currentTheme);
    }

    createThemeToggle() {
        const toggle = document.createElement('div');
        toggle.className = 'theme-toggle-container';
        toggle.innerHTML = `
            <button class="theme-toggle-btn" id="themeToggle" aria-label="Change theme">
                <i class="fas fa-palette"></i>
            </button>
            <div class="theme-menu" id="themeMenu">
                <div class="theme-menu-header">Choose Theme</div>
                ${Object.keys(this.themes).map(key => `
                    <button class="theme-option" data-theme="${key}">
                        <i class="fas ${this.themes[key].icon}"></i>
                        <span>${this.themes[key].name}</span>
                        <span class="theme-check"><i class="fas fa-check"></i></span>
                    </button>
                `).join('')}
            </div>
        `;
        document.body.appendChild(toggle);

        const btn = document.getElementById('themeToggle');
        const menu = document.getElementById('themeMenu');

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('show');
        });

        document.addEventListener('click', () => {
            menu.classList.remove('show');
        });

        menu.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        document.querySelectorAll('.theme-option').forEach(option => {
            option.addEventListener('click', () => {
                const theme = option.dataset.theme;
                this.setTheme(theme);
                menu.classList.remove('show');
            });
        });

        this.updateActiveTheme();
    }

    setTheme(theme) {
        this.currentTheme = theme;
        this.applyTheme(theme);
        this.storeTheme(theme);
        this.updateActiveTheme();
    }

    applyTheme(theme) {
        const themeColors = this.themes[theme]?.colors || this.themes.dark.colors;
        
        Object.keys(themeColors).forEach(property => {
            document.documentElement.style.setProperty(property, themeColors[property]);
        });

        document.documentElement.setAttribute('data-theme', theme);
    }

    updateActiveTheme() {
        document.querySelectorAll('.theme-option').forEach(option => {
            if (option.dataset.theme === this.currentTheme) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }

    storeTheme(theme) {
        localStorage.setItem('preferred-theme', theme);
    }

    getStoredTheme() {
        return localStorage.getItem('preferred-theme');
    }
}

// Initialize theme switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeSwitcher();
});
