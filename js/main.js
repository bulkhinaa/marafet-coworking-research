/* ============================================
   MARAFET RESEARCH — interactivity
   ============================================ */

(function () {
  'use strict';

  // ============================================
  // Прогресс-бар скролла
  // ============================================
  const progressBar = document.getElementById('scrollProgress');
  const nav = document.getElementById('nav');

  const updateScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    if (progressBar) progressBar.style.width = progress + '%';

    if (nav) {
      if (scrollTop > 20) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();

  // ============================================
  // Мобильное меню
  // ============================================
  const navMenuBtn = document.getElementById('navMenuBtn');
  if (navMenuBtn && nav) {
    navMenuBtn.addEventListener('click', () => {
      nav.classList.toggle('is-menu-open');
    });

    nav.querySelectorAll('.nav__menu a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-menu-open');
      });
    });
  }

  // ============================================
  // Reveal-анимации при скролле
  // ============================================
  const revealItems = document.querySelectorAll('[data-reveal]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  // Сразу показываем элементы, которые уже в viewport на момент загрузки
  // (приход по якорю, refresh не на самом верху и т. д.)
  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  };

  revealItems.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add('is-revealed');
    } else {
      observer.observe(el);
    }
  });

  // ============================================
  // Анимация счётчиков в hero
  // ============================================
  const counters = document.querySelectorAll('[data-counter]');

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.counter);
    const duration = 1600;
    const startTime = Date.now();

    const formatVal = (current) => {
      if (target >= 1000) return Math.round(current).toLocaleString('ru-RU');
      if (Number.isInteger(target)) return Math.round(current).toString();
      return current.toFixed(1).replace('.', ',');
    };

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = formatVal(target * eased);
      if (progress >= 1) clearInterval(interval);
    }, 16);
  };

  // Все hero-счётчики стартуют сразу при загрузке — они в первом экране
  counters.forEach((el) => animateCounter(el));

  // ============================================
  // Заполнение таблицы игроков
  // ============================================
  const playersData = window.PLAYERS_DATA || [];
  const playersTable = document.getElementById('playersTable');

  if (playersTable && playersData.length) {
    const tbody = playersTable.querySelector('tbody');
    playersData.forEach((p, i) => {
      const tr = document.createElement('tr');
      tr.dataset.type = p.type;
      tr.innerHTML = `
        <td class="num">${i + 1}</td>
        <td>
          <span class="player-name">${escapeHtml(p.name)}</span>
          ${p.leader ? '<span class="player-tag player-tag--leader">лидер</span>' : ''}
          ${
            p.type === 'franchise'
              ? '<span class="player-tag">франшиза</span>'
              : ''
          }
        </td>
        <td class="geo">${escapeHtml(p.geo)}</td>
        <td class="ta-c"><span class="player-points">${escapeHtml(p.points)}</span></td>
        <td class="model">${escapeHtml(p.model)}</td>
        <td class="tariff">${escapeHtml(p.tariff)}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  // ============================================
  // Фильтры таблицы игроков
  // ============================================
  const filterButtons = document.querySelectorAll('.players-filter__btn');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const rows = playersTable
        ? playersTable.querySelectorAll('tbody tr')
        : [];

      rows.forEach((row) => {
        if (filter === 'all') {
          row.style.display = '';
        } else if (filter === 'network' && row.dataset.type === 'network') {
          row.style.display = '';
        } else if (filter === 'single' && row.dataset.type === 'single') {
          row.style.display = '';
        } else if (
          filter === 'franchise' &&
          row.dataset.type === 'franchise'
        ) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });

  // ============================================
  // Подсветка активного раздела в навигации
  // ============================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__menu a');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('is-active');
            } else {
              link.classList.remove('is-active');
            }
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
  );

  sections.forEach((s) => sectionObserver.observe(s));

  // ============================================
  // Утилиты
  // ============================================
  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ============================================
  // Параллакс для orb в hero
  // ============================================
  const orbs = document.querySelectorAll('.orb');
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  const animateOrbs = () => {
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;

    orbs.forEach((orb, i) => {
      const intensity = (i + 1) * 8;
      orb.style.transform = `translate(${currentX * intensity}px, ${currentY * intensity}px)`;
    });

    requestAnimationFrame(animateOrbs);
  };

  if (orbs.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (typeof requestAnimationFrame === 'function') {
      try {
        animateOrbs();
      } catch (e) {
        // в headless preview rAF может зависнуть — игнорируем
      }
    }
  }
})();
