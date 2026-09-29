// Envuelve cada letra del nombre en un <span> para animarlas
// individualmente (ver el keyframe "colorWave" en Cover.astro).
const nombre = document.getElementById('nombre');
const text = nombre.textContent;
nombre.innerHTML = '';

[...text].forEach((ch, i) => {
  const span = document.createElement('span');
  span.className = 'letter';
  span.textContent = ch === ' ' ? '\u00A0' : ch;
  span.style.animationDelay = (i * 0.08) + 's';
  nombre.appendChild(span);
});
