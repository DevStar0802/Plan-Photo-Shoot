export async function logoutFunction() {
    try {
        // Send a logout request to the backend
        await fetch('/api/user/logout', {
            method: 'POST',
            credentials: 'include', // Include credentials to allow the server to clear the session
        });

        // Clear the session and user from local storage
        localStorage.removeItem('session');
        localStorage.removeItem('user');

        // Redirect the user to the login page 
        return "/login";
    } catch (error) {
        console.error('Logout failed', error);
    }

}


