// Contact Form with Backend Integration
class ContactFormHandler {
    constructor() {
        this.form = document.getElementById('contactForm');
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.addRealTimeValidation();
    }

    async handleSubmit(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name')?.value,
            email: document.getElementById('email')?.value,
            subject: document.getElementById('subject')?.value,
            message: document.getElementById('message')?.value,
            timestamp: new Date().toISOString()
        };

        // Show loading state
        this.setLoadingState(true);

        try {
            // Option 1: Use FormSpree (free, no backend needed)
            const response = await this.sendViaFormSpree(formData);
            
            // Option 2: Use your own backend (uncomment when ready)
            // const response = await this.sendViaBackend(formData);

            if (response.success) {
                this.showSuccess();
                this.form.reset();
            } else {
                this.showError('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            this.showError('An error occurred. Please try emailing directly.');
        } finally {
            this.setLoadingState(false);
        }
    }

    async sendViaFormSpree(data) {
        // Free service - just create an account at formspree.io
        const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID'; // Replace with your ID
        
        try {
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            return { success: response.ok };
        } catch (error) {
            // Fallback: mailto link
            window.location.href = `mailto:debikodha@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.message)}`;
            return { success: true };
        }
    }

    async sendViaBackend(data) {
        // For when you build your own backend
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await response.json();
    }

    addRealTimeValidation() {
        const inputs = this.form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let error = '';

        if (field.hasAttribute('required') && !value) {
            error = 'This field is required';
        } else if (field.type === 'email' && !this.isValidEmail(value)) {
            error = 'Please enter a valid email address';
        }

        if (error) {
            this.showFieldError(field, error);
            return false;
        }

        return true;
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    showFieldError(field, message) {
        this.clearError(field);
        
        const error = document.createElement('span');
        error.className = 'field-error';
        error.textContent = message;
        field.parentNode.appendChild(error);
        field.classList.add('field-invalid');
    }

    clearError(field) {
        const error = field.parentNode.querySelector('.field-error');
        if (error) error.remove();
        field.classList.remove('field-invalid');
    }

    setLoadingState(loading) {
        const submitBtn = this.form.querySelector('button[type="submit"]');
        if (loading) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        } else {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        }
    }

    showSuccess() {
        const message = document.createElement('div');
        message.className = 'form-message success-message';
        message.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p><strong>Message sent successfully!</strong></p>
            <p>I'll get back to you within 24-48 hours.</p>
        `;
        this.form.insertAdjacentElement('beforebegin', message);
        
        setTimeout(() => message.remove(), 5000);
    }

    showError(errorMessage) {
        const message = document.createElement('div');
        message.className = 'form-message error-message';
        message.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <p><strong>Error:</strong> ${errorMessage}</p>
        `;
        this.form.insertAdjacentElement('beforebegin', message);
        
        setTimeout(() => message.remove(), 5000);
    }
}

// Initialize contact form
document.addEventListener('DOMContentLoaded', () => {
    new ContactFormHandler();
});
