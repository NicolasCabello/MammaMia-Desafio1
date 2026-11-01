# Pizzería Mamma Mia

Página de inicio de la pizzería Mamma Mia, hecha con React y Vite. Muestra un encabezado, una barra de navegación y tres pizzas con sus ingredientes y precio.

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

La app queda disponible en `http://localhost:5173`.

Otros comandos:

| Comando | Qué hace |
| --- | --- |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Sirve esa versión para probarla en local |
| `npm run lint` | Revisa el código con Oxlint |

## Qué incluye

- Barra de navegación con inicio, login y registro, y el total del carrito.
- Encabezado de la pizzería.
- Tres tarjetas de pizza: Napolitana, Española y Pepperoni.
- Precios formateados en pesos chilenos (por ejemplo, `$5.950`).
- Pie de página.

## Estructura

```text
src/
  components/
    Navbar.jsx      Barra de navegación
    Header.jsx      Encabezado
    Home.jsx        Página principal y listado de pizzas
    CardPizza.jsx   Tarjeta de una pizza
    Footer.jsx      Pie de página
  utils/
    formatPrice.js  Formato de precios
  App.jsx
  main.jsx
```

## Tecnologías

- React 19
- Vite
- Bootstrap 5
