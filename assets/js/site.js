(function () {
  'use strict';
  var root = document.documentElement;

  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  /* ── language ───────────────────────────────── */
  var langBtn = document.querySelector('[data-lang-toggle]');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-lang') === 'en' ? 'ko' : 'en';
      root.setAttribute('data-lang', next);
      root.setAttribute('lang', next);
      save('lang', next);
      if (window.renderFlows) window.renderFlows();
    });
  }

  /* ── theme ──────────────────────────────────── */
  var themeBtn = document.querySelector('[data-theme-toggle]');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var cur = root.getAttribute('data-theme');
      if (!cur) {
        // 아직 수동 선택 전이면 시스템 설정의 반대로 전환
        var darkNow = window.matchMedia('(prefers-color-scheme: dark)').matches;
        cur = darkNow ? 'dark' : 'light';
      }
      var next = cur === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      save('theme', next);
      if (window.renderFlows) window.renderFlows();
    });
  }

  /* ── lightbox ───────────────────────────────── */
  var lb = document.getElementById('lb');
  if (!lb) return;
  var lbImg = lb.querySelector('img');
  var lbCap = lb.querySelector('.lb-cap');
  var lastFocus = null;

  function open(img, cap) {
    lastFocus = document.activeElement;
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt || '';
    lbCap.textContent = cap;
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    lb.querySelector('.lb-close').focus();
  }

  function close() {
    lb.hidden = true;
    lbImg.src = '';
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  document.querySelectorAll('.fig img').forEach(function (img) {
    img.addEventListener('click', function () {
      var fc = img.closest('figure').querySelector('figcaption');
      // 현재 언어에 해당하는 캡션만 읽는다
      var visible = fc && fc.querySelector('[lang="' + root.getAttribute('data-lang') + '"]');
      open(img, visible ? visible.textContent : (fc ? fc.textContent.trim() : ''));
    });
  });

  lb.addEventListener('click', function (e) {
    if (e.target === lb || e.target.classList.contains('lb-close')) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lb.hidden) close();
  });
})();
