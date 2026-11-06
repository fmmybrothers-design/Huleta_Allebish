// Contact Form Functionality

// Character counter for message textarea
const messageTextarea = document.getElementById('message');
const characterCount = document.querySelector('.character-count');

if (messageTextarea && characterCount) {
    messageTextarea.addEventListener('input', function() {
        const length = this.value.length;
        characterCount.textContent = `${length} / 500`;
        
        if (length > 500) {
            characterCount.style.color = '#ff7b72';
        } else {
            characterCount.style.color = 'var(--text-muted)';
        }
    });
}

// Form submission handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            company: document.getElementById('company').value,
            message: document.getElementById('message').value,
            newsletter: document.getElementById('newsletter').checked
        };
        
        // Validate message length
        if (formData.message.length > 500) {
            alert('Message is too long. Please keep it under 500 characters.');
            return;
        }
        
        // Show success message (In production, send to backend)
        alert(`Thank you, ${formData.name}! Your message has been sent successfully.\n\nI'll get back to you at ${formData.email} within 24-48 hours.`);
        
        // Log form data (In production, send to server)
        console.log('Form submitted:', formData);
        
        // Reset form
        contactForm.reset();
        characterCount.textContent = '0 / 500';
    });
}

// Form reset handler
const resetButton = contactForm?.querySelector('button[type="reset"]');

if (resetButton) {
    resetButton.addEventListener('click', function() {
        setTimeout(() => {
            characterCount.textContent = '0 / 500';
            characterCount.style.color = 'var(--text-muted)';
        }, 10);
    });
}

// Social links hover effects
document.querySelectorAll('.social-link-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Contact detail items animation
document.querySelectorAll('.contact-detail-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        item.style.transition = 'all 0.5s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    }, index * 100);
});

console.log('Contact page loaded successfully!');
