function randomChannel() {
    return Math.floor(Math.random() * 256);
}

function toHex(value) {
    return value.toString(16).padStart(2, '0');
}

function changeColor() {
    const r = randomChannel();
    const g = randomChannel();
    const b = randomChannel();

    const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.getElementById('hex-value').textContent = hex;

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    const textColor = luminance < 0.5 ? '#ffffff' : '#000000';
    document.querySelectorAll('h1, p, button').forEach(el => {
        el.style.color = textColor;
        el.style.borderColor = textColor;
    });
}