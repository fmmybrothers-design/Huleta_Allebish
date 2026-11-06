// Navigation links - Let browser handle page navigation
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Don't prevent default - allow normal navigation
        // Remove active class from all links
        document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
    });
});

// Quick Command functionality
document.querySelector('.quick-command').addEventListener('click', function() {
    alert('Quick Command feature - This would open a command palette');
});

// View CV button functionality
document.querySelectorAll('.btn-primary, .view-cv-bottom .btn-secondary').forEach(btn => {
    if (btn.textContent.includes('View CV')) {
        btn.addEventListener('click', function() {
            alert('View CV functionality - This would open or display your CV');
        });
    }
});

// Download button functionality
document.querySelectorAll('.btn-secondary').forEach(btn => {
    if (btn.textContent.includes('Download')) {
        btn.addEventListener('click', function() {
            alert('Download functionality - This would download your CV/Resume');
        });
    }
});

// Footer navigation buttons
const prevBtn = document.querySelector('.content-footer .btn-nav:first-child');
const nextBtn = document.querySelector('.content-footer .btn-nav:last-child');

if (prevBtn) {
    prevBtn.addEventListener('click', function() {
        alert('Previous page functionality');
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', function() {
        alert('Next page functionality');
    });
}

// Add keyboard shortcut for Quick Command (Cmd/Ctrl + K)
document.addEventListener('keydown', function(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        document.querySelector('.quick-command').click();
    }
});

// Smooth scroll reveal animation on page load
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
});

// Add hover effects for experience items
document.querySelectorAll('.experience-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Add click functionality to tech badges
document.querySelectorAll('.tech-badge').forEach(badge => {
    badge.addEventListener('click', function() {
        const tech = this.textContent;
        console.log(`Clicked on: ${tech}`);
        // Could add modal or filter functionality here
    });
});

console.log('Portfolio loaded successfully!');
