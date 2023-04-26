function togglePasswordVisibility() { // Eine Funktion namens "togglePasswordVisibility" wird definiert.
  var passwordInput = document.getElementById("password-input"); // Das HTML-Element mit der ID "password-input" wird der Variablen "passwordInput" zugewiesen.
  var toggleButton = document.getElementById("toggle-button"); // Das HTML-Element mit der ID "toggle-button" wird der Variablen "toggleButton" zugewiesen.
  if (passwordInput.type === "password") { // Wenn das Eingabefeld für das Passwort vom Typ "password" ist, führe die folgenden Schritte aus:
    passwordInput.type = "text"; // Ändere den Typ des Eingabefelds für das Passwort zu "text".
    toggleButton.textContent = "Hide Password"; // Ändere den Text des "toggle-button" zu "Hide Password".
  } else { // Wenn das Eingabefeld für das Passwort nicht vom Typ "password" ist, führe die folgenden Schritte aus:
    passwordInput.type = "password"; // Ändere den Typ des Eingabefelds für das Passwort zu "password".
    toggleButton.textContent = "Show Password"; // Ändere den Text des "toggle-button" zu "Show Password".
  }
}