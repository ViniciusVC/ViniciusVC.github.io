const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let score = 0;
let gameOver = false;

const pacman = {
 x: canvas.width / 2,
 y: canvas.height / 2,
 size: 20,
 speed: 4,
 direction: 'right',
 draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();
 },
};

const labyrinth = [
 [0, 0, 0, 0, 0,1],
 [0, 1, 1, 1, 0,1],
 [0, 1, 0, 0, 0,1],
 [0, 1, 1, 1, 0,1],
 [0, 0, 0, 0, 0,1],
];

function updateGame() {
 if (gameOver) {
    return;
 }

 ctx.clearRect(0, 0, canvas.width, canvas.height);

 drawLabyrinth();
 pacman.draw();

 const tileSize = canvas.width / labyrinth[0].length;
 const pacmanCenterX = pacman.x + pacman.size;
 const pacmanCenterY = pacman.y + pacman.size;
 const tileX = Math.floor(pacmanCenterX / tileSize);
 const tileY = Math.floor(pacmanCenterY / tileSize);

 switch (pacman.direction) {
    case 'right':
      if (labyrinth[tileY][tileX + 1] !== 1) {
        pacman.x += pacman.speed;
      }
      break;
    case 'left':
      if (labyrinth[tileY][tileX - 1] !== 1) {
        pacman.x -= pacman.speed;
      }
      break;
    case 'up':
      if (labyrinth[tileY - 1][tileX] !== 1) {
        pacman.y -= pacman.speed;
      }
      break;
    case 'down':
      if (labyrinth[tileY + 1][tileX] !== 1) {
        pacman.y += pacman.speed;
      }
      break;
 }

 requestAnimationFrame(updateGame);
}

function drawLabyrinth() {
 const tileSize = canvas.width / labyrinth[0].length;

 for (let i = 0; i < labyrinth.length; i++) {
    for (let j = 0; j < labyrinth[i].length; j++) {
      if (labyrinth[i][j] === 1) {
        ctx.fillStyle = 'black';
        ctx.fillRect(j * tileSize, i * tileSize, tileSize, tileSize);
      }
    }
 }
}

updateGame();

document.addEventListener('keydown', (event) => {
 switch (event.key) {
    case 'ArrowUp':
      pacman.direction = 'up';
      break;
    case 'ArrowDown':
      pacman.direction = 'down';
      break;
    case 'ArrowLeft':
      pacman.direction = 'left';
      break;
    case 'ArrowRight':
      pacman.direction = 'right';
      break;
 }
});