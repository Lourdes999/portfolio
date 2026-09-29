# Portfolio — Lourdes Melo

Proyecto en Astro. Migrado desde el prototipo HTML a componentes reutilizables.

## Cómo correrlo

1. Instalar dependencias:
   ```
   npm install
   ```
2. Levantar el servidor de desarrollo:
   ```
   npm run dev
   ```
3. Abrir en el navegador: http://localhost:4321

## Estructura del proyecto

```
src/
  layouts/
    Layout.astro       → Molde general del sitio (head, fuentes, scripts)
  components/
    Cover.astro         → Portada (nombre, subtítulo, pestañas de acceso)
    Folder.astro         → Carpeta reutilizable (una instancia por categoría)
  pages/
    index.astro          → Une el Layout + Cover + las 4 carpetas con su contenido
  styles/
    tokens.css           → Paleta de colores (variables CSS) — único lugar donde cambiarla
    global.css           → Reset, scroll-snap, estilos base compartidos (.tab, .navdots)
  scripts/
    nav.js               → Navegación (scroll a cada sección + puntitos)
    typewriter.js         → Efecto máquina de escribir por carpeta
    nameWave.js           → Ola de color letra por letra en el nombre
```

## Por qué está organizado así

- **Los colores viven en un solo lugar** (`tokens.css`) para no repetir códigos hex
  por todos lados.
- **Cada carpeta es el mismo componente** (`Folder.astro`) con distintas props
  (`bulletItems`, `scriptWord`, `description`, etc.) — así no hay HTML duplicado
  cuatro veces.
- **Los estilos de cada componente están junto a su HTML** (dentro del mismo
  `.astro`), que es la convención de Astro — evita mezclar todo en un CSS gigante
  y mantiene cada pieza independiente.
- **El JavaScript está separado por responsabilidad**: uno para navegación,
  uno para el efecto de tipeo, uno para la animación del nombre.

## Para agregar contenido real

Editar las props que se le pasan a cada `<Folder />` en `src/pages/index.astro`
(bulletItems, scriptWord, description, photoPlaceholder).
