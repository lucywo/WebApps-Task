function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password-input");
    var toggleButton = document.getElementById("toggle-button");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.textContent = "Hide Password";
    } else {
      passwordInput.type = "password";
      toggleButton.textContent = "Show Password";
    }
  }
  