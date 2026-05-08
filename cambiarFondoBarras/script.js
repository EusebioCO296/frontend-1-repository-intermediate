const redSlider   = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider  = document.getElementById('blue');
const hexValue    = document.getElementById('hex-value');

function toHex(value) {
  return parseInt(value).toString(16).padStart(2, '0');
}

function update() {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;

  document.getElementById('red-val').textContent   = r;
  document.getElementById('green-val').textContent = g;
  document.getElementById('blue-val').textContent  = b;

  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  hexValue.textContent = hex;

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  const textColor = luminance < 0.5 ? '#ffffff' : '#000000';
  document.querySelectorAll('label, span, p').forEach(el => {
    el.style.color = textColor;
  });
}

redSlider.addEventListener('input', update);
greenSlider.addEventListener('input', update);
blueSlider.addEventListener('input', update);