// Confetti and falling berries animation for celebration
function createConfetti() {
  for (let i = 0; i < 20; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = 2 + Math.random() * 2 + 's';
    confetti.style.background = ['#b44b77', '#e94f7a', '#fff', '#e0d6eb'][Math.floor(Math.random()*4)];
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}

function createFallingBerries() {
  const container = document.querySelector('.falling-berries');
  if (!container) return;
  for (let i = 0; i < 8; i++) {
    const berry = document.createElement('div');
    berry.className = 'berry';
    berry.style.left = Math.random() * 100 + 'vw';
    berry.style.background = ['#b44b77', '#e94f7a', '#fff'][Math.floor(Math.random()*3)];
    berry.style.width = berry.style.height = 12 + Math.random()*10 + 'px';
    berry.style.animationDuration = 2.5 + Math.random()*2 + 's';
    container.appendChild(berry);
    setTimeout(() => berry.remove(), 3500);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  setInterval(createConfetti, 3500);
  setInterval(createFallingBerries, 2000);
});
