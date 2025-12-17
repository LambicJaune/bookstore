// ---------------- Ripple Effect on Buttons ----------------
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('a.btn-like, a.logout, button, a.btn-login');

  buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    this.appendChild(ripple);

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
    ripple.style.top = e.clientY - rect.top - size / 2 + 'px';

    setTimeout(() => {
        ripple.remove();
    }, 600);
    });
  });

  // ---------------- Image Zoom on Hover ----------------
  const images = document.querySelectorAll('.container img');
  images.forEach(img => {
    img.style.transition = 'transform 0.3s ease';
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.1)';
    });
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });
});
