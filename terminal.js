// Interactive Terminal Feature - Professional Developer Touch
class InteractiveTerminal {
    constructor() {
        this.commands = {
            help: 'Available commands: help, about, skills, projects, contact, clear, date, whoami, github, linkedin, download-cv, hire-me, theme',
            about: 'Software Engineer passionate about architecting intelligent solutions and engineering impactful digital experiences. I specialize in designing, developing, and delivering software solutions that address real-world challenges through thoughtful engineering, modern technologies, and innovative problem-solving.\n\nMission: To engineer intelligent, scalable, and innovative software solutions that bridge the gap between complex challenges and meaningful technological possibilities.',
            skills: 'React.js • Node.js • Python • AI/ML • PostgreSQL • MongoDB • AWS • Docker • TypeScript',
            projects: 'Loading projects... Check the Projects page for detailed portfolio.',
            contact: 'Email: debikodha@gmail.com | Phone: +251 91 234 5678',
            clear: 'clear',
            date: new Date().toLocaleString(),
            whoami: 'Debela Kebede Bekele - Software Engineer | Architecting Intelligent Solutions',
            github: 'Opening GitHub profile...',
            linkedin: 'Opening LinkedIn profile...',
            'download-cv': 'Downloading CV...',
            'hire-me': '💼 Let\'s work together! Navigate to Contact page or email debikodha@gmail.com',
            theme: 'Theme options: dark (current), matrix, ocean, sunset - Type: theme <name>'
        };
        
        this.commandHistory = [];
        this.historyIndex = -1;
        this.isOpen = false;
        
        this.init();
    }
    
    init() {
        this.createTerminal();
        this.setupKeyboardShortcut();
    }
    
    createTerminal() {
        const terminal = document.createElement('div');
        terminal.className = 'interactive-terminal hidden';
        terminal.innerHTML = `
            <div class="terminal-header">
                <div class="terminal-controls">
                    <span class="terminal-dot red"></span>
                    <span class="terminal-dot yellow"></span>
                    <span class="terminal-dot green"></span>
                </div>
                <div class="terminal-title">
                    <i class="fas fa-terminal"></i> 
                    <span>debela@portfolio:~$</span>
                </div>
                <button class="terminal-close"><i class="fas fa-times"></i></button>
            </div>
            <div class="terminal-body">
                <div class="terminal-output">
                    <div class="terminal-line">Welcome to Debela's Portfolio Terminal v2.0</div>
                    <div class="terminal-line">Type 'help' for available commands.</div>
                    <div class="terminal-line">Press Ctrl+K to close terminal.</div>
                    <div class="terminal-line terminal-prompt"></div>
                </div>
                <div class="terminal-input-line">
                    <span class="terminal-prompt-symbol">$</span>
                    <input type="text" class="terminal-input" placeholder="Type a command..." autocomplete="off">
                </div>
            </div>
        `;
        
        document.body.appendChild(terminal);
        this.terminal = terminal;
        this.output = terminal.querySelector('.terminal-output');
        this.input = terminal.querySelector('.terminal-input');
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Close button
        this.terminal.querySelector('.terminal-close').addEventListener('click', () => {
            this.close();
        });
        
        // Input handling
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.executeCommand(this.input.value.trim());
                this.input.value = '';
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateHistory('up');
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateHistory('down');
            }
        });
        
        // Auto-complete on Tab
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                this.autoComplete();
            }
        });
    }
    
    setupKeyboardShortcut() {
        document.addEventListener('keydown', (e) => {
            // Ctrl+K to toggle terminal
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                this.toggle();
            }
            // Escape to close
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
    }
    
    executeCommand(cmd) {
        if (!cmd) return;
        
        // Add to history
        this.commandHistory.push(cmd);
        this.historyIndex = this.commandHistory.length;
        
        // Display command
        this.addLine(`$ ${cmd}`, 'terminal-command');
        
        // Parse command
        const [command, ...args] = cmd.toLowerCase().split(' ');
        
        // Handle theme command
        if (command === 'theme' && args.length > 0) {
            this.changeTheme(args[0]);
            return;
        }
        
        // Execute command
        if (command === 'clear') {
            this.clearOutput();
        } else if (this.commands[command]) {
            if (command === 'github') {
                this.addLine(this.commands[command], 'terminal-success');
                window.open('https://github.com/Debela-Kebede', '_blank');
            } else if (command === 'linkedin') {
                this.addLine(this.commands[command], 'terminal-success');
                window.open('https://www.linkedin.com/in/debela-kebede-52084b399/', '_blank');
            } else if (command === 'download-cv') {
                this.addLine(this.commands[command], 'terminal-success');
                this.addLine('CV download feature coming soon!', 'terminal-info');
            } else {
                this.addLine(this.commands[command], 'terminal-success');
            }
        } else {
            this.addLine(`Command not found: ${command}. Type 'help' for available commands.`, 'terminal-error');
        }
        
        this.scrollToBottom();
    }
    
    changeTheme(theme) {
        const themes = {
            dark: { primary: '#0d1117', accent: '#58a6ff' },
            matrix: { primary: '#0d0208', accent: '#00ff41' },
            ocean: { primary: '#001f3f', accent: '#39CCCC' },
            sunset: { primary: '#1a0a0a', accent: '#ff6b6b' }
        };
        
        if (themes[theme]) {
            document.documentElement.style.setProperty('--bg-primary', themes[theme].primary);
            document.documentElement.style.setProperty('--accent-blue', themes[theme].accent);
            this.addLine(`Theme changed to: ${theme}`, 'terminal-success');
        } else {
            this.addLine(`Theme '${theme}' not found. Available: dark, matrix, ocean, sunset`, 'terminal-error');
        }
    }
    
    addLine(text, className = '') {
        const line = document.createElement('div');
        line.className = `terminal-line ${className}`;
        line.textContent = text;
        this.output.appendChild(line);
    }
    
    clearOutput() {
        this.output.innerHTML = '<div class="terminal-line terminal-prompt"></div>';
    }
    
    navigateHistory(direction) {
        if (direction === 'up' && this.historyIndex > 0) {
            this.historyIndex--;
            this.input.value = this.commandHistory[this.historyIndex];
        } else if (direction === 'down' && this.historyIndex < this.commandHistory.length - 1) {
            this.historyIndex++;
            this.input.value = this.commandHistory[this.historyIndex];
        } else if (direction === 'down') {
            this.historyIndex = this.commandHistory.length;
            this.input.value = '';
        }
    }
    
    autoComplete() {
        const value = this.input.value.toLowerCase();
        const matches = Object.keys(this.commands).filter(cmd => cmd.startsWith(value));
        
        if (matches.length === 1) {
            this.input.value = matches[0];
        } else if (matches.length > 1) {
            this.addLine('Available: ' + matches.join(', '), 'terminal-info');
            this.scrollToBottom();
        }
    }
    
    scrollToBottom() {
        this.output.scrollTop = this.output.scrollHeight;
    }
    
    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }
    
    open() {
        this.terminal.classList.remove('hidden');
        this.terminal.classList.add('terminal-open');
        this.isOpen = true;
        setTimeout(() => this.input.focus(), 300);
    }
    
    close() {
        this.terminal.classList.add('hidden');
        this.terminal.classList.remove('terminal-open');
        this.isOpen = false;
    }
}

// Initialize terminal
document.addEventListener('DOMContentLoaded', () => {
    new InteractiveTerminal();
});
