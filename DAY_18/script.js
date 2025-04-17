const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const livesEl = document.getElementById('lives');

let score = 0;
let lives = 3;

document.getElementById('startBtn').onclick = () => {
  score = 0;
  lives = 3;
  updateUI();
  startGame();
};

document.getElementById('pauseBtn').onclick = togglePause;
document.getElementById('soundBtn').onclick = toggleSound;

function updateUI() {
  scoreEl.textContent = score;
  livesEl.textContent = lives;
}

function startGame() {
  // Game loop placeholder
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.fillText("Game Started!", 280, 300);
}

function togglePause() {
  alert("Pause/Resume logic here");
}

function toggleSound() {
  alert("Sound on/off logic here");
}
