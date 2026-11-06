// Advanced Pixelated Digital Display System
class PixelatedDisplay {
    constructor() {
        this.init();
    }

    init() {
        // All displays disabled per user request
    }

    // Retro Digital Clock Display - DISABLED
    createPixelatedClock() {
        // Disabled
    }

    updatePixelClock() {
        // Disabled
    }

    // Matrix Rain Effect - DISABLED
    createMatrixRain() {
        // Disabled
    }

    // Live Code Statistics - DISABLED
    createCodeStats() {
        // Disabled
    }

    animateStats() {
        // Disabled
    }

    // Live Activity Feed - DISABLED
    createLiveActivityFeed() {
        // Live activity feed removed per user request
    }

    startActivityFeed() {
        // Live activity feed disabled
    }
}

// Advanced 3D Card Hover Effects
class Advanced3DEffects {
    constructor() {
        this.init();
    }

    init() {
        this.setup3DCards();
        this.setupMagneticButtons();
        // Cursor glow effect removed - user doesn't want it
    }

    setup3DCards() {
        const cards = document.querySelectorAll('.card, .quick-link-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Small, noticeable but calm movement
                const rotateX = (y - centerY) / 80;
                const rotateY = (centerX - x) / 80;
                
                card.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.005, 1.005, 1.005)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(2000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    }

    setupMagneticButtons() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-icon');
        
        buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });
    }

    setupGlowEffect() {
        // Cursor glow effect disabled per user request
    }
}

// Real-time Typing Code Simulator - DISABLED
class LiveCodeSimulator {
    constructor() {
        // Code simulator disabled per user request
    }

    init() {
        // Disabled
    }

    createCodeWindow() {
        // Disabled
    }

    startSimulation() {
        // Disabled
    }
}

// Initialize all advanced features
document.addEventListener('DOMContentLoaded', () => {
    // Add slight delay for smooth loading
    setTimeout(() => {
        new PixelatedDisplay();
        new Advanced3DEffects();
        // LiveCodeSimulator removed per user request
    }, 500);
});
