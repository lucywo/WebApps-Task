function updateColor() {
    const redValue = document.getElementById("red").value;
    const greenValue = document.getElementById("green").value;
    const blueValue = document.getElementById("blue").value;
    const colorDiv = document.getElementById("color");
    const color = `#${rgbToHex(redValue)}${rgbToHex(greenValue)}${rgbToHex(blueValue)}`;
    colorDiv.textContent = `Color: ${color}`;
    document.body.style.backgroundColor = color;
  }
  
  function rgbToHex(value) {
    const hex = Number(value).toString(16).padStart(2, "0");
    return hex;
  }
  
  const redSlider = document.getElementById("red");
  redSlider.addEventListener("input", updateColor);
  
  const greenSlider = document.getElementById("green");
  greenSlider.addEventListener("input", updateColor);
  
  const blueSlider = document.getElementById("blue");
  blueSlider.addEventListener("input", updateColor);
  
  updateColor(); // Call the function initially to set the default color
  
  