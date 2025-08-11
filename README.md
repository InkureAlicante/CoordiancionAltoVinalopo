# Tutukids · prototipo estático

Catálogo sin carrito con botones **“Comprar en Amazon”** (con UTM), botón flotante de **WhatsApp** y estructura lista para medir clics en **GA4**.

## Estructura
- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/img/` (ilustraciones SVG simples)

## ¿Cómo usar?
1. Abre `index.html` en el navegador.
2. Sustituye los enlaces de Amazon por tus URL reales (mantén las UTM).
3. Cambia el número de WhatsApp en `index.html` (dos sitios: botón flotante y tarjeta de contacto).
4. (Opcional) Activa Google Analytics:
   - Sustituye `G-XXXXXXX` por tu ID en `index.html`.
   - Los eventos personalizados se envían como `click_amazon` y `click_whatsapp`.

## Personalización rápida
- Colores en `styles.css` (`:root`).
- Productos: duplica un `<article class="card">` en la sección **Catálogo** del `index.html`.
- Tipografía: Google Fonts (Poppins).

---

© Tutukids, 2025
