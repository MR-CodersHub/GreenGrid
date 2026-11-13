/**
 * GreenGrid Solar Energy — Home 1 Page Scripts (home1.js)
 * Handles: hero parallax, counter animations, section-specific interactions
 */
(function () {
  'use strict';

  /* ════════════════════════════════════════════
     HERO PARALLAX
     Subtle parallax on the hero image on scroll
  ════════════════════════════════════════════ */
  function initHeroParallax() {
    var heroImg  = document.querySelector('.hero-img-wrap img');
    var heroSect = document.querySelector('.hero-section');
    if (!heroImg || !heroSect) return;

    /* Only on non-reduced-motion + non-mobile */
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var isMobile       = window.matchMedia('(max-width: 1024px)').matches;
    if (prefersReduced || isMobile) return;

    var ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var scrollY   = window.scrollY;
          var heroH     = heroSect.offsetHeight;
          if (scrollY > heroH) { ticking = false; return; }

          var progress  = scrollY / heroH;          /* 0 → 1 as hero scrolls out */
          var translateY = progress * 40;            /* max 40px drift */
          heroImg.style.transform = 'scale(1.06) translateY(' + translateY + 'px)';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ════════════════════════════════════════════
     HERO STAT COUNTERS
     Animate the 4 stats in the hero section
  ════════════════════════════════════════════ */
  function initHeroCounters() {
    var stats = document.querySelectorAll('.hero-stat-value[data-target]');
    if (!stats.length) return;

    if (!('IntersectionObserver' in window)) {
      stats.forEach(function (el) {
        if (window.GreenGrid && window.GreenGrid.animateCounter) {
          window.GreenGrid.animateCounter(el);
        }
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (window.GreenGrid && window.GreenGrid.animateCounter) {
            window.GreenGrid.animateCounter(entry.target);
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    stats.forEach(function (el) { observer.observe(el); });
  }

  /* ════════════════════════════════════════════
     IMPACT SECTION COUNTERS
     Animate the large stat blocks in section 5
  ════════════════════════════════════════════ */
  function initImpactCounters() {
    var counters = document.querySelectorAll('.impact-stat-value[data-target]');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      counters.forEach(function (el) {
        if (window.GreenGrid && window.GreenGrid.animateCounter) {
          window.GreenGrid.animateCounter(el);
        }
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (window.GreenGrid && window.GreenGrid.animateCounter) {
            window.GreenGrid.animateCounter(entry.target);
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  /* ════════════════════════════════════════════
     PROCESS STEPS — PROGRESS ANIMATION
     Animate each step in sequence when in view
  ════════════════════════════════════════════ */
  function initProcessAnimation() {
    var steps = document.querySelectorAll('.process-step');
    if (!steps.length || !('IntersectionObserver' in window)) return;

    var triggered = false;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          steps.forEach(function (step, i) {
            setTimeout(function () {
              step.classList.add('revealed');
            }, i * 150);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    var wrap = document.querySelector('.process-steps-wrap');
    if (wrap) observer.observe(wrap);
  }

  /* ════════════════════════════════════════════
     CTA SECTION — floating particle dots SVG
  ════════════════════════════════════════════ */
  function renderDots(container) {
    if (!container) return;
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '80');
    svg.setAttribute('height', '80');
    svg.setAttribute('viewBox', '0 0 80 80');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('aria-hidden', 'true');

    var cols = 4, rows = 4, gap = 20, r = 2.5;
    for (var c = 0; c < cols; c++) {
      for (var row = 0; row < rows; row++) {
        var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', String(c * gap + 10));
        circle.setAttribute('cy', String(row * gap + 10));
        circle.setAttribute('r',  String(r));
        circle.setAttribute('fill', 'currentColor');
        svg.appendChild(circle);
      }
    }
    container.appendChild(svg);
  }

  function initCtaDots() {
    renderDots(document.querySelector('.cta-dots'));
    renderDots(document.querySelector('.cta-dots-right'));
  }

  /* ════════════════════════════════════════════
     SOLUTION CARDS — tilt on mouse move
  ════════════════════════════════════════════ */
  function initCardTilt() {
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    document.querySelectorAll('.solution-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect    = card.getBoundingClientRect();
        var centerX = rect.left + rect.width  / 2;
        var centerY = rect.top  + rect.height / 2;
        var rotX    = ((e.clientY - centerY) / (rect.height / 2)) * -4;
        var rotY    = ((e.clientX - centerX) / (rect.width  / 2)) *  4;
        card.style.transform = 'translateY(-6px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg)';
        card.style.transition = 'transform 0.1s ease';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform  = '';
        card.style.transition = '';
      });
    });
  }

  /* ════════════════════════════════════════════
     INIT
  ════════════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', function () {
    initHeroParallax();
    initHeroCounters();
    initImpactCounters();
    initProcessAnimation();
    initCtaDots();

    /* Slight delay so card tilt doesn't fire on page load animations */
    setTimeout(initCardTilt, 500);
  });
})();
