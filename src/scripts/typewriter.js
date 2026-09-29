// Máquina de escribir: se dispara cada vez que una carpeta aparece en pantalla.
import { scroller } from './nav.js';

function typeEl(el, speed){
  const full = el.dataset.full;
  el.textContent = '';
  el.style.visibility = 'visible';
  let i = 0;
  (function step(){
    if (i <= full.length){
      el.textContent = full.slice(0, i);
      i++;
      setTimeout(step, speed);
    }
  })();
}

function startSectionTyping(section){
  const els = section.querySelectorAll('.tw');
  els.forEach((el, idx) => {
    setTimeout(() => typeEl(el, 22), idx * 140);
  });
}

// Preparamos todos los textos "tw": guardamos su texto real y los ocultamos.
document.querySelectorAll('.tw').forEach(el => {
  el.dataset.full = el.textContent;
  el.style.visibility = 'hidden';
});

// La portada tipea apenas se abre la página.
startSectionTyping(document.getElementById('s0'));

// El resto de las carpetas tipean cada vez que aparecen en pantalla.
const typeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      startSectionTyping(entry.target);
    }
  });
}, { root: scroller, threshold: 0.5 });

['s1', 's2', 's3', 's4'].forEach(id => typeObserver.observe(document.getElementById(id)));
