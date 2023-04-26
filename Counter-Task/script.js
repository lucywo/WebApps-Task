const counter = document.getElementById('counter');
const resetButton = document.getElementById('reset-button');
let count = 0;

document.addEventListener('click', incrementCounter);
document.addEventListener('keydown', handleKeyPress);
resetButton.addEventListener('click', resetCounter);

function incrementCounter() {
  count++;
  counter.textContent = count;

  const backgroundShade = Math.floor(count / 100 * 255);
  document.body.style.backgroundColor = `rgb(${backgroundShade}, ${backgroundShade}, ${backgroundShade})`;

  if (count % 100 === 0) {
    resetBackground();
  }
}

function handleKeyPress(event) {
  if (event.code === 'Enter' || event.code === 'Space') {
    incrementCounter();
  }
}

function resetCounter() {
  count = 0;
  counter.textContent = count;
  resetBackground();
}

function resetBackground() {
  document.body.style.backgroundColor = '#f6f6f6';
}

