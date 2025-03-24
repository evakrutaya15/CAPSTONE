// Switching between Login and Registration
document.getElementById('show-registration-form').addEventListener('click', function () {
    document.getElementById('login-form-container').style.display = 'none';
    document.getElementById('registration-form-container').style.display = 'block';
});

document.getElementById('show-login-form').addEventListener('click', function () {
    document.getElementById('registration-form-container').style.display = 'none';
    document.getElementById('login-form-container').style.display = 'block';
});

// Login Button Functionality
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting
    
    // Add login logic here (e.g., validate credentials, check user data)
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        // If login is successful, enable Start Quiz button
        document.getElementById('login-message').innerText = "Login successful! You can now start the quiz.";
        document.getElementById('start-quiz-btn').disabled = false; // Enable Start Quiz button
    } else {
        document.getElementById('login-message').innerText = "Please enter both email and password!";
    }
});

// Registration Form Submit Logic
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting
    
    // Add registration logic here (e.g., validate and store user data)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        document.getElementById('login-message').innerText = "Registration successful! Please log in.";
        document.getElementById('registration-form-container').style.display = 'none';
        document.getElementById('login-form-container').style.display = 'block'; // Show login form
    } else {
        document.getElementById('login-message').innerText = "Please fill all fields!";
    }
});
