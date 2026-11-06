// Authentication Check - Protects all portfolio pages
(function() {
    // Check if user is authenticated
    const isAuthenticated = sessionStorage.getItem('authenticated');
    
    // Get current page
    const currentPage = window.location.pathname.split('/').pop();
    
    // Don't redirect if already on login page
    if (currentPage === 'login.html') {
        return;
    }
    
    // If not authenticated, redirect to login
    if (!isAuthenticated || isAuthenticated !== 'true') {
        window.location.href = 'login.html';
    }
})();

// Add logout functionality
function logout() {
    sessionStorage.removeItem('authenticated');
    window.location.href = 'login.html';
}

// Optional: Add logout button to page if needed
document.addEventListener('DOMContentLoaded', function() {
    // You can add a logout button to the sidebar if you want
    console.log('Portfolio is protected');
});
