// Live Code Editor & Preview Feature
class CodeShowcase {
    constructor() {
        this.isOpen = false;
        this.init();
    }
    
    init() {
        this.createShowcase();
        this.setupButton();
    }
    
    createShowcase() {
        const showcase = document.createElement('div');
        showcase.className = 'code-showcase hidden';
        showcase.innerHTML = `
            <div class="showcase-header">
                <h3><i class="fas fa-code"></i> Live Code Preview</h3>
                <button class="showcase-close"><i class="fas fa-times"></i></button>
            </div>
            <div class="showcase-content">
                <div class="code-editor">
                    <div class="editor-tabs">
                        <button class="tab-btn active" data-lang="html">HTML</button>
                        <button class="tab-btn" data-lang="css">CSS</button>
                        <button class="tab-btn" data-lang="js">JavaScript</button>
                    </div>
                    <div class="editor-pane">
                        <textarea class="code-input html-input" spellcheck="false"><!-- Try editing this HTML -->
<div class="demo-card">
  <h2>Hello World!</h2>
  <p>This is a live preview.</p>
  <button onclick="alert('Interactive!')">Click Me</button>
</div></textarea>
                        <textarea class="code-input css-input hidden" spellcheck="false">/* Customize the styles */
.demo-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  border-radius: 15px;
  color: white;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.demo-card h2 {
  margin: 0 0 10px 0;
  font-size: 28px;
}

.demo-card button {
  margin-top: 15px;
  padding: 10px 20px;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s;
}

.demo-card button:hover {
  transform: scale(1.05);
}</textarea>
                        <textarea class="code-input js-input hidden" spellcheck="false">// Add your JavaScript
console.log('Code editor is ready!');

// Example: Change background on click
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    console.log('Button clicked!');
  }
});</textarea>
                    </div>
                </div>
                <div class="code-preview">
                    <div class="preview-header">
                        <span><i class="fas fa-eye"></i> Live Preview</span>
                        <button class="btn-refresh" title="Refresh Preview">
                            <i class="fas fa-sync-alt"></i>
                        </button>
                    </div>
                    <iframe class="preview-frame" sandbox="allow-scripts"></iframe>
                </div>
            </div>
        `;
        
        document.body.appendChild(showcase);
        this.showcase = showcase;
        this.setupEventListeners();
    }
    
    setupButton() {
        // Add floating button to open showcase
        const btn = document.createElement('button');
        btn.className = 'floating-code-btn';
        btn.innerHTML = '<i class="fas fa-code"></i>';
        btn.title = 'Try Live Code Editor';
        btn.addEventListener('click', () => this.toggle());
        document.body.appendChild(btn);
    }
    
    setupEventListeners() {
        // Close button
        this.showcase.querySelector('.showcase-close').addEventListener('click', () => {
            this.close();
        });
        
        // Tab switching
        this.showcase.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.switchTab(btn.dataset.lang);
            });
        });
        
        // Live preview update
        const inputs = this.showcase.querySelectorAll('.code-input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                this.updatePreview();
            });
        });
        
        // Refresh button
        this.showcase.querySelector('.btn-refresh').addEventListener('click', () => {
            this.updatePreview();
        });
        
        // Initial preview
        this.updatePreview();
    }
    
    switchTab(lang) {
        // Update active tab
        this.showcase.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // Show corresponding input
        this.showcase.querySelectorAll('.code-input').forEach(input => {
            input.classList.toggle('hidden', !input.classList.contains(`${lang}-input`));
        });
    }
    
    updatePreview() {
        const html = this.showcase.querySelector('.html-input').value;
        const css = this.showcase.querySelector('.css-input').value;
        const js = this.showcase.querySelector('.js-input').value;
        
        const frame = this.showcase.querySelector('.preview-frame');
        const doc = frame.contentDocument || frame.contentWindow.document;
        
        const content = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {
                        margin: 0;
                        padding: 20px;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                        background: #0d1117;
                        color: #e6edf3;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        min-height: 100vh;
                    }
                    ${css}
                </style>
            </head>
            <body>
                ${html}
                <script>${js}<\/script>
            </body>
            </html>
        `;
        
        doc.open();
        doc.write(content);
        doc.close();
    }
    
    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }
    
    open() {
        this.showcase.classList.remove('hidden');
        this.showcase.classList.add('showcase-open');
        this.isOpen = true;
    }
    
    close() {
        this.showcase.classList.add('hidden');
        this.showcase.classList.remove('showcase-open');
        this.isOpen = false;
    }
}

// Initialize code showcase
document.addEventListener('DOMContentLoaded', () => {
    new CodeShowcase();
});
