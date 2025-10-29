// app.js - basic interactivity and security-minded handling
'use strict';

function sanitize(text) {
  // Very small sanitizer: escape < and >
  return text.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

document.addEventListener('DOMContentLoaded', function() {
  const tipForm = document.getElementById('tipForm');
  const userTip = document.getElementById('userTip');
  const tipsList = document.getElementById('tipsList');
  const msg = document.getElementById('msg');

  tipForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const raw = userTip.value.trim();
    if (!raw) {
      msg.textContent = 'Ingrese un tip válido.';
      return;
    }
    if (raw.length > 200) {
      msg.textContent = 'El tip es demasiado largo.';
      return;
    }
    const safe = sanitize(raw);
    const li = document.createElement('li');
    li.textContent = safe;
    tipsList.prepend(li);
    userTip.value = '';
    msg.textContent = 'Gracias — tu tip fue añadido (modo local).';
    setTimeout(()=> msg.textContent = '', 3000);
  });

  // Demo search handler: does not call real API to avoid exposing keys.
  const searchBtn = document.getElementById('searchBtn');
  const q = document.getElementById('q');
  const results = document.getElementById('results');

  searchBtn.addEventListener('click', function() {
    results.innerHTML = '';
    const query = q.value.trim();
    if (!query) {
      const li = document.createElement('li');
      li.textContent = 'Ingresa una ubicación para buscar (demo).';
      results.appendChild(li);
      return;
    }
    // Example of how to call an external API (replace URL and add key for production)
    const example = [
      {name: 'Centro Reciclaje Central', address: query + ' - Calle Falsa 123'},
      {name: 'EcoPunto', address: query + ' - Av. Verde 45'}
    ];
    example.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.name + ' — ' + item.address;
      results.appendChild(li);
    });
  });
});
