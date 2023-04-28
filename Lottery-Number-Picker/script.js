// Initialisiere Variablen
const display = document.getElementById("number-display");
const pickNumberBtn = document.getElementById("pick-number-btn");
const resetBtn = document.getElementById("reset-btn");

let pickedNumbers = [];

// Funktion zum Zufallsauswählen von Zahlen
function pickNumber() {
  if (pickedNumbers.length === 6) {
    return;
  }
  let number = Math.floor(Math.random() * 49) + 1;
  if (pickedNumbers.includes(number)) {
    pickNumber();
  } else {
    pickedNumbers.push(number);
    pickedNumbers.sort((a, b) => a - b);
    display.innerHTML = pickedNumbers.map(num => `<div class="number-block">${num}</div>`).join("");
    if (pickedNumbers.length === 6) {
      pickNumberBtn.disabled = true;
      resetBtn.disabled = false;
    }
  }
}

// Event-Listener für den "Pick random number" Button
pickNumberBtn.addEventListener("click", pickNumber);

// Event-Listener für den "Reset" Button
resetBtn.addEventListener("click", () => {
  pickedNumbers = [];
  display.innerHTML = "";
  pickNumberBtn.disabled = false;
  resetBtn.disabled = true;
});

// Überprüfe, ob es gespeicherte Nummern gibt und lade sie
if (localStorage.getItem("pickedNumbers")) {
  pickedNumbers = JSON.parse(localStorage.getItem("pickedNumbers"));
  display.innerHTML = pickedNumbers.map(num => `<div class="number-block">${num}</div>`).join("");
  if (pickedNumbers.length === 6) {
    pickNumberBtn.disabled = true;
    resetBtn.disabled = false;
  }
}

// Speichere die gewählten Zahlen im Local Storage
window.addEventListener("beforeunload", () => {
  localStorage.setItem("pickedNumbers", JSON.stringify(pickedNumbers));
});