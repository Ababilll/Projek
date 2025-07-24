const scene = document.getElementById('scene');

window.addEventListener('scroll', () => {
  const x = window.scrollX;
  const y = window.scrollY;

  // Rotasi tergantung scroll
  const rotateX = y / 30; // semakin scroll ke bawah, semakin miring
  const rotateY = x / 30;

  scene.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
