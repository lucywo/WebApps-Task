const counter = document.querySelector("#counter");
const resetButton = document.querySelector("#reset-button");
let count = 0;

// Funktion zum Zählen und Ändern der Hintergrundfarbe
function incrementCount() {
  count++;
  counter.textContent = count;

  // Ändert die Hintergrundfarbe, wenn die Zählung kleiner als 150 ist
  if (count <= 150) {
    const percentage = count / 150 * 100;
    let color;
    if (count <= 100) {
      color = `linear-gradient(to right, salmon ${percentage}%, #fff ${percentage}%)`;
    } else {
      color = `linear-gradient(to right, #87CEFA ${percentage}%, #fff ${percentage}%)`;
    }
    counter.style.background = color;
  }

  // Setzt die Zählung und die Hintergrundfarbe zurück, wenn die Zählung größer oder gleich 150 ist
  if (count >= 150) {
    count = 0;
    counter.textContent = count;
    counter.style.background = "#87CEFA";
  }
}

// Funktion zum Zurücksetzen des Zählers
function resetCount() {
  count = 0;
  counter.textContent = count;
  counter.style.background = "#fff";
}

// Zähler erhöhen, wenn auf die Webseite geklickt wird
document.addEventListener("click", incrementCount);

// Zähler erhöhen, wenn die Eingabetaste oder Leertaste gedrückt wird
document.addEventListener("keydown", function (event) {
  if (event.code === "Space" || event.code === "Enter") {
    incrementCount();
  }
});

// Zähler zurücksetzen, wenn der Zurücksetzen-Button gedrückt wird
resetButton.addEventListener("click", resetCount);