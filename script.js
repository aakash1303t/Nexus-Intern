function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    clearMessages();
}

function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
    clearMessages();
}

function clearMessages() {
    document.getElementById('login-error-message').textContent = '';
    document.getElementById('signup-error-message').textContent = '';
    document.getElementById('success-message').textContent = '';
}

function loginUser() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
    var errorMessage = document.getElementById('login-error-message');
    var successMessage = document.getElementById('success-message');

    if (username === '' || password === '') {
        errorMessage.textContent = 'All fields are required.';
        return false;
    }

    errorMessage.textContent = '';
    successMessage.textContent = 'Logged in successfully!';
    return false; // Prevent form submission for demonstration purposes
}

function signupUser() {
    var username = document.getElementById('signup-username').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    var confirmPassword = document.getElementById('signup-confirm-password').value;
    var errorMessage = document.getElementById('signup-error-message');
    var successMessage = document.getElementById('success-message');

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'All fields are required.';
        return false;
    }
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return false;
    }

    errorMessage.textContent = '';
    successMessage.textContent = 'Signed up successfully!';
    return false; // Prevent form submission for demonstration purposes
}
