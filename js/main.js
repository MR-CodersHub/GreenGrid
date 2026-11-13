/**
 * GreenGrid Solar Energy — Main Entry Point (main.js)
 * Initialises all shared JS modules on DOMContentLoaded.
 * Page-specific JS files (home1.js, etc.) are loaded separately.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* ── Staggered transition delay for reveal grid items ── */
    var staggerSelectors = [
      '.grid-3 > .reveal',
      '.grid-2 > .reveal',
      '.grid-4 > .reveal',
      '.grid-auto > .reveal',
      '.solutions-grid > .solution-card',
      '.why-features-grid > .why-feature',
      '.impact-stats > .impact-stat'
    ].join(', ');

    document.querySelectorAll(staggerSelectors).forEach(function (el, i) {
      /* Only stagger within same parent group */
      if (!el.style.transitionDelay) {
        el.style.transitionDelay = (i * 0.08) + 's';
      }
    });

    /* ── Smooth scroll for in-page anchor links ── */
    var navbar = document.getElementById('navbar');

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var id     = anchor.getAttribute('href');
        if (id === '#') return;
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          var offset = (navbar ? navbar.offsetHeight : 72) + 16;
          var y      = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      });
    });

    /* ── Add loaded class to body (enables CSS transitions) ── */
    document.body.classList.add('js-loaded');

    /* ── Lazy-load images with data-src ── */
    if ('IntersectionObserver' in window) {
      var lazyImages = document.querySelectorAll('img[data-src]');
      if (lazyImages.length) {
        var imgObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var img = entry.target;
              img.src = img.getAttribute('data-src');
              img.removeAttribute('data-src');
              img.classList.add('loaded');
              imgObserver.unobserve(img);
            }
          });
        }, { rootMargin: '200px' });

        lazyImages.forEach(function (img) { imgObserver.observe(img); });
      }
    }

    /* ── Expose version info ── */
    window.GreenGrid = window.GreenGrid || {};
    window.GreenGrid.version = '1.0.0';
    window.GreenGrid.site    = 'GreenGrid Solar Energy';

  });
})();
