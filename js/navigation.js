/**
 * GreenGrid Solar Energy — Navigation (navigation.js)
 * Handles: sticky navbar scroll state, hamburger menu, active link highlighting
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var navbar    = document.getElementById('navbar');
    var hamburger = document.getElementById('hamburger');
    var menu      = document.getElementById('navbarMenu');

    /* ════════════════════════════════════════════
       Sticky scroll — add .scrolled class
    ════════════════════════════════════════════ */
    var SCROLL_THRESHOLD = 20;

    function handleScroll() {
      if (!navbar) return;
      if (window.scrollY > SCROLL_THRESHOLD) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run once immediately

    /* ════════════════════════════════════════════
       Hamburger / Mobile Menu
    ════════════════════════════════════════════ */
    function openMenu() {
      if (!hamburger || !menu) return;
      hamburger.setAttribute('aria-expanded', 'true');
      menu.classList.add('open');
      document.body.style.overflow = '';  // don't lock scroll for menu
    }

    function closeMenu() {
      if (!hamburger || !menu) return;
      hamburger.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
    }

    if (hamburger && menu) {
      hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        var expanded = hamburger.getAttribute('aria-expanded') === 'true';
        if (expanded) {
          closeMenu();
        } else {
          openMenu();
        }
      });

      /* Close on click outside navbar */
      document.addEventListener('click', function (e) {
        if (navbar && !navbar.contains(e.target)) {
          closeMenu();
        }
      });

      /* Close on Escape key */
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeMenu();
          hamburger.focus();
        }
      });

      /* Close when a nav link is clicked (mobile UX) */
      menu.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
          closeMenu();
        });
      });
    }

    /* ════════════════════════════════════════════
       Active Link Highlighting
    ════════════════════════════════════════════ */
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-link').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;

      /* Strip any query/hash for comparison */
      var hrefPage = href.split('?')[0].split('#')[0];

      if (
        hrefPage === currentPage ||
        (currentPage === '' && hrefPage === 'index.html') ||
        (currentPage === '/' && hrefPage === 'index.html')
      ) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });

    /* ════════════════════════════════════════════
       Smooth scroll for in-page anchor links
       (also handled in main.js — kept here for
        early initialization on nav anchor clicks)
    ════════════════════════════════════════════ */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var id     = anchor.getAttribute('href');
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          var offset = (navbar ? navbar.offsetHeight : 72) + 16;
          var y      = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      });
    });
  });
})();
