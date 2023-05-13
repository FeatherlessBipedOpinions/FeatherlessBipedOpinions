// Open Sign Up Modal
function openSignUpModal() {
    document.getElementById("signup-modal").style.display = "block";
  }
  
  // Close Sign Up Modal
  function closeSignUpModal() {
    document.getElementById("signup-modal").style.display = "none";
  }
  
  // Open Login Modal
  function openLoginModal() {
    document.getElementById("login-modal").style.display = "block";
  }
  
  // Close Login Modal
  function closeLoginModal() {
    document.getElementById("login-modal").style.display = "none";
  }
  
  // Sign Up
  function signUp() {
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
  
    // Save user credentials to localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  
    alert("Sign up successful!");
  
    // Automatically open the login modal after sign up
    closeSignUpModal();
    openLoginModal();
  }
  
  // Login
  function login() {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;
  
    // Retrieve user credentials from localStorage
    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");
  
    if (email === storedEmail && password === storedPassword) {
      alert("Login successful!");
      // Perform additional actions after successful login
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }
  