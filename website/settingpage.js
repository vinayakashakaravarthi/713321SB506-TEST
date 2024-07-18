document.getElementById('logout-button').addEventListener('click', function() {
    // Perform logout actions, e.g., clearing session, redirecting to login page, etc.
    console.log('Logout button clicked');
    alert('You have been logged out.');
    // Redirect to login page (assuming login.html is the login page)
    window.location.href = 'login.html';
});