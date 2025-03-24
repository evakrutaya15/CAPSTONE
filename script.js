// Get DOM elements
const registrationForm = document.getElementById('registration-form');
const loginForm = document.getElementById('login-form');
const registrationFormContainer = document.getElementById('registration-form-container');
const loginFormContainer = document.getElementById('login-form-container');

// Event listeners for form switching
document.getElementById('show-login-form').addEventListener('click', () => {
    registrationFormContainer.style.display = 'none';
    loginFormContainer.style.display = 'block';
});

document.getElementById('show-registration-form').addEventListener('click', () => {
    loginFormContainer.style.display = 'none';
    registrationFormContainer.style.display = 'block';
});

// Handle registration form submission
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (password.length < 6) {
        alert('Password should be at least 6 characters long');
        return;
    }

    // Store the user data in localStorage for now (as a mock database)
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));

    alert('Registration successful!');
    loginFormContainer.style.display = 'block'; // Show login form after registration
    registrationFormContainer.style.display = 'none'; // Hide registration form
});

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
        alert('Invalid credentials');
        return;
    }

    alert('Login successful!');
    window.location.href = 'quiz.html'; // Redirect to quiz page
});
