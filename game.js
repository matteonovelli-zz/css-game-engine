let lastUpdate = performance.now();
const canvas = document.getElementById('game-canvas');
const player = document.getElementById('player');
let left = 2;
setInterval(() => {
  const now = performance.now();
  const dt = (now - lastUpdate) / 1000;
  if (dt > 1) {
    lastUpdate = now;
    left += 2;
    player.style.left = `calc(${left}vh + 1px)`;
  }
}, 0);