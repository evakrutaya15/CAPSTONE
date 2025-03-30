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
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Check if user data is stored in localStorage
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
        const userData = JSON.parse(storedUserData);

        // Validate login credentials
        if (email === userData.email && password === userData.password) {
            document.getElementById('login-message').innerText = "Login successful! You can now start the quiz.";
            document.getElementById('start-quiz-btn').disabled = false; // Enable Start Quiz button
        } else {
            document.getElementById('login-message').innerText = "Incorrect email or password!";
        }
    } else {
        document.getElementById('login-message').innerText = "No registered users found!";
    }
});

// Registration Form Submit Logic
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if all fields are filled
    if (name && email && password) {
        // Store user data in localStorage
        const userData = {
            name: name,
            email: email,
            password: password
        };
        
        localStorage.setItem('userData', JSON.stringify(userData)); // Save user data to localStorage
        
        document.getElementById('login-message').innerText = "Registration successful! Please log in.";
        document.getElementById('registration-form-container').style.display = 'none';
        document.getElementById('login-form-container').style.display = 'block'; // Show login form
    } else {
        document.getElementById('login-message').innerText = "Please fill all fields!";
    }
});
