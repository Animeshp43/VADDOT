document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email === "user@example.com" && password === "password") {
      window.location.href = "voice.html";
    } else {
      document.getElementById("error-msg").textContent = "Invalid email or password";
    }
  });
  
  