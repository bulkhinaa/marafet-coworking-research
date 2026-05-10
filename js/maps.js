/* ============================================
   Инициализация карт Leaflet
   ============================================ */

(function () {
  'use strict';

  if (typeof L === 'undefined') {
    console.error('Leaflet not loaded');
    return;
  }

  const cities = window.CITIES_DATA || {};
  const colors = window.NETWORK_COLORS || {};

  const networkSlug = (n) => {
    const map = {
      'SoloSalon': 'solosalon',
      'INDI': 'indi',
      'Glow': 'glow',
      'CUTEAM': 'cuteam',
      'IQ Beauty': 'iqbeauty',
      'Vibe': 'vibe',
      'Brush': 'brush',
      'Nordic': 'nordic',
      'Artel': 'artel',
      'ARTCRAFT': 'artcraft',
      'SVOBODA ART': 'svoboda'
    };
    return map[n] || 'default';
  };

  const tilesUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const tilesAttr =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

  const createMap = (containerId, cityKey) => {
    const city = cities[cityKey];
    if (!city) return;

    const map = L.map(containerId, {
      center: city.center,
      zoom: city.zoom,
      scrollWheelZoom: false,
      zoomControl: true
    });

    // Активируем колесо мыши после клика по карте (чтобы не «угонять» скролл)
    map.on('click', () => map.scrollWheelZoom.enable());
    map.on('mouseout', () => map.scrollWheelZoom.disable());

    L.tileLayer(tilesUrl, {
      maxZoom: 19,
      attribution: tilesAttr
    }).addTo(map);

    // Слой кругов 1 км — рисуем первым, чтобы маркеры были поверх
    const circlesLayer = L.layerGroup().addTo(map);
    city.coworkings.forEach((cw) => {
      L.circle(cw.coords, {
        radius: 1000,
        color: '#7A54FF',
        weight: 0.5,
        opacity: 0.35,
        fillColor: '#7A54FF',
        fillOpacity: 0.12
      }).addTo(circlesLayer);
    });

    // Слой маркеров
    const markersLayer = L.layerGroup().addTo(map);
    city.coworkings.forEach((cw) => {
      const slug = networkSlug(cw.network);
      const icon = L.divIcon({
        className: '',
        html: `<div class="cw-marker cw-marker--${slug}"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      });
      const marker = L.marker(cw.coords, { icon }).addTo(markersLayer);
      const popupHtml = `
        <strong>${escapeHtml(cw.name)}</strong>
        <span class="popup-network">${escapeHtml(cw.network || 'одиночка')}</span>
      `;
      marker.bindPopup(popupHtml);
    });

    return map;
  };

  function escapeHtml(s) {
    if (!s) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Инициализация всех карт
  const cityMap = {
    'map-moscow': 'moscow',
    'map-spb': 'spb',
    'map-ekb': 'ekaterinburg',
    'map-krd': 'krasnodar',
    'map-kazan': 'kazan'
  };

  Object.keys(cityMap).forEach((containerId) => {
    const el = document.getElementById(containerId);
    if (el) createMap(containerId, cityMap[containerId]);
  });

  // Обновим счётчики
  const counts = {
    'count-moscow': cities.moscow?.coworkings.length || 0,
    'count-spb': cities.spb?.coworkings.length || 0,
    'count-ekb': cities.ekaterinburg?.coworkings.length || 0,
    'count-krd': cities.krasnodar?.coworkings.length || 0,
    'count-kazan': cities.kazan?.coworkings.length || 0
  };
  Object.keys(counts).forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = counts[id] + ' точек';
  });
})();
