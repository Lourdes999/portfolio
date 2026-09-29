// Navegación entre carpetas: scroll suave + puntitos indicadores.
export const scroller = document.getElementById('scroller');

const ids = ['s0', 's1', 's2', 's3', 's4'];

export function jump(id){
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
// Se expone en window porque los botones usan onclick="jump('sX')" en el HTML.
window.jump = jump;

// Armamos los puntitos de navegación de la derecha
const dotsWrap = document.getElementById('dots');
ids.forEach(id => {
  const b = document.createElement('button');
  b.onclick = () => jump(id);
  b.dataset.target = id;
  dotsWrap.appendChild(b);
});

const dotsObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('#dots button').forEach(b => {
        b.classList.toggle('active', b.dataset.target === e.target.id);
      });
    }
  });
}, { root: scroller, threshold: 0.6 });

ids.forEach(id => dotsObserver.observe(document.getElementById(id)));
