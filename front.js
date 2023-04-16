document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "username" && password === "password") {
      
      window.location.href = "voice-sample.html";
    } else {
      document.getElementById("error-msg").textContent = "Invalid username or password";
    }
  });
  