// Tutukids · interacciones básicas + tracking de clics hacia Amazon y WhatsApp
document.addEventListener('DOMContentLoaded', () => {
  // Año dinámico en footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Tracking de clics en los botones "Comprar en Amazon"
  document.querySelectorAll('.btn-amazon').forEach(btn => {
    btn.addEventListener('click', () => {
      const product = btn.getAttribute('data-product') || 'desconocido';
      // gtag si está disponible
      if (typeof gtag === 'function') {
        gtag('event', 'click_amazon', {
          'event_category': 'salidas',
          'event_label': product
        });
      }
      // Fallback: consola
      console.log('[Tutukids] Click Amazon:', product);
    });
  });

  // Tracking clic en WhatsApp flotante
  const wbtn = document.querySelector('.whatsapp-float');
  if (wbtn){
    wbtn.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'click_whatsapp', {
          'event_category': 'salidas',
          'event_label': 'whatsapp_floating'
        });
      }
      console.log('[Tutukids] Click WhatsApp flotante');
    });
  }
});
