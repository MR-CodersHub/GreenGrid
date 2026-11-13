/**
 * GreenGrid Solar Energy — Theme & Direction Toggle (theme.js)
 * Handles: dark/light mode + RTL/LTR toggle + LocalStorage persistence
 * Runs immediately (before DOMContentLoaded) to avoid FOUC
 */
(function () {
  'use strict';

  var THEME_KEY = 'gg-theme';
  var DIR_KEY   = 'gg-dir';
  var html       = document.documentElement;

  /* ── Apply saved preferences immediately ── */
  var savedTheme = localStorage.getItem(THEME_KEY) || 'light';
  var savedDir   = localStorage.getItem(DIR_KEY)   || 'ltr';

  html.setAttribute('data-theme', savedTheme);
  html.setAttribute('dir',        savedDir);

  /* ── Wire up controls after DOM is ready ── */
  document.addEventListener('DOMContentLoaded', function () {
    var themeBtn = document.getElementById('themeToggle');
    var rtlBtn   = document.getElementById('rtlToggle');

    /* ---- Dark / Light toggle ---- */
    if (themeBtn) {
      /* Sync ARIA label to current state */
      themeBtn.setAttribute(
        'aria-label',
        savedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      );

      themeBtn.addEventListener('click', function () {
        var current = html.getAttribute('data-theme');
        var next    = current === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', next);
        localStorage.setItem(THEME_KEY, next);

        themeBtn.setAttribute(
          'aria-label',
          next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
        );

        /* Toast feedback (needs GreenGrid.showToast from components.js) */
        if (window.GreenGrid && window.GreenGrid.showToast) {
          window.GreenGrid.showToast(
            next === 'dark' ? '🌙 Dark mode enabled' : '☀️ Light mode enabled',
            'info'
          );
        }
      });
    }

    /* ---- RTL / LTR toggle ---- */
    if (rtlBtn) {
      var rtlLabel = rtlBtn.querySelector('.rtl-toggle-text');

      function updateRtlToggle() {
        var current = html.getAttribute('dir');
        var next    = current === 'rtl' ? 'ltr' : 'rtl';
        var label   = 'Switch to ' + next.toUpperCase() + ' layout';

        if (rtlLabel) {
          rtlLabel.textContent = next.toUpperCase();
        } else {
          rtlBtn.textContent = next.toUpperCase();
        }
        rtlBtn.setAttribute('aria-label', label);
        rtlBtn.setAttribute('title', label);
      }

      updateRtlToggle();

      rtlBtn.addEventListener('click', function () {
        var current = html.getAttribute('dir');
        var next    = current === 'rtl' ? 'ltr' : 'rtl';

        html.setAttribute('dir', next);
        localStorage.setItem(DIR_KEY, next);
        updateRtlToggle();

        if (window.GreenGrid && window.GreenGrid.showToast) {
          window.GreenGrid.showToast(
            next === 'rtl' ? '→ RTL layout enabled' : '← LTR layout enabled',
            'info'
          );
        }
      });
    }
  });
})();
