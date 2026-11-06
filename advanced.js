// Advanced Portfolio Interactions

// Smooth Scroll with Easing (only for hash links on same page)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only prevent default for hash links, not for .html files
        if (href && href !== '#' && !href.includes('.html')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Advanced Cursor Effect - DISABLED
class AdvancedCursor {
    constructor() {
        // Cursor effect disabled per user request
    }
    
    init() {
        // No cursor effect
    }
    
    animate() {
        // No animation
    }
}

// Scroll-based animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .stat-box, .quick-link-card, .project-showcase-card, .certificate-card').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});

// Typing Effect for Hero Title
class TypingEffect {
    constructor(element, words, typeSpeed = 100, deleteSpeed = 50, delayBetweenWords = 2000) {
        this.element = element;
        this.words = words;
        this.typeSpeed = typeSpeed;
        this.deleteSpeed = deleteSpeed;
        this.delayBetweenWords = delayBetweenWords;
        this.wordIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        
        if (this.element) {
            this.type();
        }
    }
    
    type() {
        const currentWord = this.words[this.wordIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentWord.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentWord.substring(0, this.charIndex + 1);
            this.charIndex++;
        }
        
        let timeout = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
        
        if (!this.isDeleting && this.charIndex === currentWord.length) {
            timeout = this.delayBetweenWords;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.wordIndex = (this.wordIndex + 1) % this.words.length;
        }
        
        setTimeout(() => this.type(), timeout);
    }
}

// Initialize typing effect
const typingElement = document.querySelector('.typing-text');
if (typingElement) {
    new TypingEffect(typingElement, [
        'Full-Stack Developer',
        'AI Engineer',
        'Problem Solver',
        'Tech Innovator'
    ]);
}

// Parallax Effect on Scroll
let ticking = false;
let scrollPos = 0;

function updateParallax() {
    const parallaxElements = document.querySelectorAll('.hero-visual, .code-window');
    parallaxElements.forEach(el => {
        const speed = 0.5;
        const yPos = -(scrollPos * speed);
        el.style.transform = `translateY(${yPos}px)`;
    });
    ticking = false;
}

window.addEventListener('scroll', () => {
    scrollPos = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// 3D Tilt Effect for Cards
class TiltEffect {
    constructor(elements) {
        this.elements = elements;
        this.init();
    }
    
    init() {
        this.elements.forEach(el => {
            el.addEventListener('mousemove', (e) => this.handleMouseMove(e, el));
            el.addEventListener('mouseleave', (e) => this.handleMouseLeave(e, el));
        });
    }
    
    handleMouseMove(e, el) {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 80;
        const rotateY = (centerX - x) / 80;
        
        el.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.005, 1.005, 1.005)`;
    }
    
    handleMouseLeave(e, el) {
        el.style.transform = 'perspective(2000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }
}

// Apply tilt effect to ALL card types across the portfolio
const tiltCards = document.querySelectorAll('.card, .stat-box, .project-showcase-card, .quick-link-card, .certificate-card, .project-card, .tech-category-card, .social-link-card, .response-card, .about-me-card, .award-item, .skill-badge-item, .tech-item-detail, .approach-item, .expertise-item, .contact-detail-item');
new TiltEffect(tiltCards);

// Skill bars animation on scroll
const skillBars = document.querySelectorAll('.skill-bar-fill');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// Advanced Loading Screen
class LoadingScreen {
    constructor() {
        this.createLoadingScreen();
    }
    
    createLoadingScreen() {
        const loader = document.createElement('div');
        loader.className = 'loading-screen';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-logo">DKB</div>
                <div class="loader-bar">
                    <div class="loader-progress"></div>
                </div>
                <div class="loader-text">Loading Portfolio...</div>
            </div>
        `;
        document.body.appendChild(loader);
        
        // Simulate loading progress
        const progress = loader.querySelector('.loader-progress');
        let width = 0;
        const interval = setInterval(() => {
            width += Math.random() * 10;
            if (width >= 100) {
                width = 100;
                clearInterval(interval);
                setTimeout(() => {
                    loader.style.opacity = '0';
                    setTimeout(() => loader.remove(), 500);
                }, 300);
            }
            progress.style.width = width + '%';
        }, 100);
    }
}

// Initialize advanced features
document.addEventListener('DOMContentLoaded', () => {
    // new LoadingScreen(); // Uncomment for loading screen
    if (window.innerWidth > 768) {
        new AdvancedCursor();
    }
    
    // Glitch effect on hover for name
    const nameElement = document.querySelector('.hero-name, .profile h3');
    if (nameElement) {
        nameElement.addEventListener('mouseenter', function() {
            this.classList.add('glitch');
        });
        nameElement.addEventListener('mouseleave', function() {
            this.classList.remove('glitch');
        });
    }
});

// Magnetic buttons effect
const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(0, 0)';
    });
});

// Text reveal animation
const revealText = document.querySelectorAll('h1, h2, h3');
revealText.forEach((text, index) => {
    text.style.opacity = '0';
    text.style.transform = 'translateY(30px)';
    setTimeout(() => {
        text.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
        text.style.opacity = '1';
        text.style.transform = 'translateY(0)';
    }, index * 100);
});

console.log('🚀 Advanced portfolio features loaded!');
