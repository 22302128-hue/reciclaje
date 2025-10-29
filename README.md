# ReciclaApp (Proyecto sencillo - HTML)

## Resumen del proyecto
ReciclaApp es una aplicación web móvil (single-page, HTML/CSS/JS) educativa que muestra información, métodos y tips de reciclaje. Está diseñada como un prototipo simple que puede desplegarse en servicios estáticos (GitHub Pages, Netlify, Firebase Hosting).

---

## Contenido del repositorio
- `index.html` - Página principal responsive.
- `styles.css` - Estilos.
- `app.js` - Lógica de cliente, sanitización básica y demo de integración API.
- `tests/` - Esquema de pruebas y ejemplos.
- `docs/` - Documentación: metodología ágil, arquitectura, seguridad, APIs, despliegue.
- `LICENSE` - MIT (opcional)

---

## Caso de estudio / Metodología Ágil (resumen)
**Objetivo:** crear un prototipo funcional de una app educativa sobre reciclaje.
**Stakeholders:** usuarios finales, autoridades locales, equipo de desarrollo (2-3 devs).
**Productos entregables:** prototipo responsive, documentación técnica, plan de despliegue.

**User stories (ejemplos):**
1. Como usuario, quiero ver tips rápidos para reciclar, para aprender buenas prácticas.
2. Como usuario, quiero buscar centros de reciclaje en mi ciudad, para llevar mis materiales.
3. Como administrador, quiero aprobar tips antes de publicarlos públicamente.

**Sprints propuestos (2 sprints de 1 semana):**
- Sprint 1: Diseño UI básico, estructura HTML/CSS, listado de métodos y tips.
- Sprint 2: Integración API demo, sanitización inputs, pruebas y despliegue.

---

## Arquitectura y patrones de diseño
- **Arquitectura:** Cliente ligero (SPA estático) + APIs externas. Ideal para un backend pequeño (Node/Express) si se necesita persistencia.
- **Patrones:** Módulo (IIFE / módulos ES), Separación de preocupaciones (HTML/CSS/JS), Progressive Enhancement.
- **Diagrama (texto):**
```
[Browser SPA] <--> [APIs externas (recycling lookup, maps, auth)] 
       |
       +--> [Static Hosting (GitHub Pages / Netlify / Firebase Hosting)]
```

---

## Frameworks y bibliotecas
- UI: Bootstrap (CDN) para maquetado responsive rápido.
- JS: Vanilla ES6+ (sin frameworks pesados para mantener simple).
- Tests: Se propone Jest (Node) o QUnit para pruebas unitarias del front-end.

---

## Mecanismos de seguridad (implementados / recomendados)
- **CSP (Content-Security-Policy)** meta en `index.html`.
- **Sanitización** básica de inputs en `app.js`. Para producción, usar librerías robustas y validar en servidor.
- **HTTPS**: usar hosting que provea HTTPS (GitHub Pages, Netlify).
- **Gestión de claves/API keys**: nunca guardarlas en el cliente; usar servidor o funciones serverless para proxy.
- **Autenticación / Autorización** (opcional): OAuth2 / Firebase Auth si hay cuentas.

---

## APIs de terceros (ejemplos y cómo integrarlas)
- **Buscar centros**: Google Places API / OpenStreetMap Nominatim / HERE Maps — requiere registro y key. Ejemplo: llamar desde servidor a `https://maps.googleapis.com/maps/api/place/textsearch/json?query=centros+reciclaje+{city}&key=YOUR_API_KEY`.
- **Mapas**: Leaflet + OpenStreetMap para mapas libres.
- **Contenido**: servicios de CMS (Contentful, Netlify CMS) para aprobar tips.

> En `app.js` hay un ejemplo demo que simula resultados. Sustituye por llamadas reales en producción.

---

## Servicios en la nube y despliegue
- **Staging / Hosting estático:** GitHub Pages / Netlify / Vercel.
- **Funciones / Backend:** Firebase Functions / Netlify Functions / AWS Lambda para llamadas seguras a APIs.
- **Base de datos (si se necesita):** Firestore (servidorless), PostgreSQL en Heroku/AWS RDS.

**Pasos para desplegar (GitHub Pages):**
1. `git init` en el proyecto.
2. `git add . && git commit -m "Init"`.
3. Crear repo en GitHub y `git remote add origin <url>` y `git push -u origin main`.
4. Activar GitHub Pages en Settings -> Pages -> branch `main`.

---

## Esquema de pruebas (propuesto)
- **Unit tests (JS):** probar funciones puras (e.g., `sanitize`).
- **Integration tests:** endpoints de la API de búsqueda.
- **E2E (opcional):** Cypress para flujos como "buscar centro" o "enviar tip".
- **Checklist manual:** revisar CSP, inputs, responsive en tamaños móviles.

---

## Repositorio en funcionamiento
No puedo crear y alojar un repositorio público por ti directamente desde esta sesión, pero aquí tienes instrucciones para hacerlo y un `git` template:

```
git init
git add .
git commit -m "Initial commit - ReciclaApp"
# Create repo on GitHub then:
git remote add origin https://github.com/YOURUSER/reciclaapp.git
git push -u origin main
```

Si quieres, puedo generar el contenido para subir por ti (ya lo hice en el zip abajo). Si me das un repo URL, puedo preparar un `README` con pasos exactos para CI/CD.

---

## Notas sobre privacidad y datos
- No almacenar keys en el cliente.
- Para contenido de usuarios, usar moderación y/o revisión manual.

---

## Licencia
MIT.

