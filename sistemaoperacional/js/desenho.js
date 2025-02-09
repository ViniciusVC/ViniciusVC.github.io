const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
let drawing = false;
let currentColor = "#000000";
let currentSize = 3;

// Atualiza a cor do pincel
document.getElementById("colorPicker").addEventListener("input", (e) => {
    currentColor = e.target.value;
});

// Atualiza o tamanho do pincel
document.getElementById("sizePicker").addEventListener("input", (e) => {
    currentSize = e.target.value;
});

// Função para começar a desenhar
canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mouseleave", () => drawing = false);

// Função para desenhar
canvas.addEventListener("mousemove", (event) => {
    if (!drawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ctx.fillStyle = currentColor;
    ctx.beginPath();
    ctx.arc(x, y, currentSize / 2, 0, Math.PI * 2);
    ctx.fill();
});

// Função para limpar o canvas
document.getElementById("clearButton").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});