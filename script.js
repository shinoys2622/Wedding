// Initialize countdown structure
function initializeCountdown() {
  const countdownHTML = `
    <div class="countdown-container">
      <div class="countdown-item">
        <span class="number" data-value="days">00</span>
        <span class="label">days</span>
      </div>
      <div class="countdown-item">
        <span class="number" data-value="hours">00</span>
        <span class="label">hours</span>
      </div>
      <div class="countdown-item">
        <span class="number" data-value="minutes">00</span>
        <span class="label">mins</span>
      </div>
      <div class="countdown-item">
        <span class="number" data-value="seconds">00</span>
        <span class="label">secs</span>
      </div>
    </div>
  `;
  document.querySelector('.countdown').innerHTML = countdownHTML;
}

// Update countdown values
function updateCountdown() {
  const weddingDate = new Date('2025-09-08T11:30:00+05:30'); // IST time
  const now = new Date();
  const diff = weddingDate - now;

  if (diff < 0) {
    document.querySelector('.countdown').innerHTML = '<div class="married">Just Married! ❤️</div>';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Update only the number values
  document.querySelector('[data-value="days"]').textContent = days;
  document.querySelector('[data-value="hours"]').textContent = hours.toString().padStart(2, '0');
  document.querySelector('[data-value="minutes"]').textContent = minutes.toString().padStart(2, '0');
  document.querySelector('[data-value="seconds"]').textContent = seconds.toString().padStart(2, '0');
}

// Initialize and start countdown
document.addEventListener('DOMContentLoaded', () => {
  initializeCountdown();
  updateCountdown(); // Initial update
  setInterval(updateCountdown, 1000); // Update every second
});

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
