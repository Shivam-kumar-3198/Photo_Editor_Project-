
let imageChange = document.getElementById("imageChange");
let inputFile = document.getElementById("input-file");


inputFile.onchange = function() {
  imageChange.src = URL.createObjectURL(inputFile.files[0]);
  resetImageStyles(); // Optional: Reset styles for new image
};

// Blur
let blurRange = document.querySelector(".blur input[type='range']");
blurRange.oninput = function() {
  imageChange.style.filter = `blur(${this.value}px)`;
};

// Border Radius
let borderRadiusRange = document.querySelector(".Border-Radius input[type='range']");
borderRadiusRange.oninput = function() {
  imageChange.style.borderRadius = `${this.value}px`;
};

// Border Width
let borderWidthRange = document.querySelector(".Border-Width input[type='range']");
borderWidthRange.oninput = function() {
  imageChange.style.borderWidth = `${this.value}px`;
};

// Border Color
let borderColorRange = document.querySelector(".Border-color input[type='range']");
let colorPicker = document.createElement("input"); // Optional color picker

// Color picker setup (optional)
colorPicker.type = "color";
colorPicker.value = "#000000"; // Initial color
document.querySelector(".Border-color").appendChild(colorPicker);

borderColorRange.oninput = function() {
  // Update border color based on range value (transparency can be included)
  imageChange.style.borderColor = `rgba(0, 0, 0, ${this.value / 100})`;
};

colorPicker.onchange = function() {
  imageChange.style.borderColor = this.value;
};

// Style (Sepia example)
let styleRange = document.querySelector(".Style input[type='range']");
styleRange.oninput = function() {
  imageChange.style.filter = `sepia(${this.value}%)`;
};

// Greycycle
let greycycleRange = document.querySelector(".Greycycle input[type='range']");
greycycleRange.oninput = function() {
  const value = this.value / 100;
  imageChange.style.filter = `grayscale(${value * 100}%)`;
  imageChange.style.mixBlendMode = `hue(${value * 360}deg)`;
};

// Brightness
let brightnessRange = document.querySelector(".Brightness input[type='range']");
brightnessRange.oninput = function() {
  const value = this.value / 100;
  imageChange.style.filter = `brightness(${value})`;
};

// Hue-rotate
let hueRotateRange = document.querySelector(".Hue-rotate input[type='range']");
hueRotateRange.oninput = function() {
  const value = this.value / 100;
  imageChange.style.filter = `hue-rotate(${value * 360}deg)`;
};

// Contrast
let contrastRange = document.querySelector(".Contrast input[type='range']");
contrastRange.oninput = function() {
  const value = this.value / 100;
  imageChange.style.filter = `contrast(${1 + value})`;
};