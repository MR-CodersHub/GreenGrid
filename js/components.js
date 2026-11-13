/**
 * GreenGrid Solar Energy — UI Components (components.js)
 * Handles: back-to-top, scroll reveal, toast notifications,
 *          image lightbox, FAQ accordion, form validation, counter animation
 */
(function () {
  'use strict';

  /* Namespace */
  window.GreenGrid = window.GreenGrid || {};

  /* ════════════════════════════════════════════
     BACK TO TOP
  ════════════════════════════════════════════ */
  function initBackToTop() {
    var btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ════════════════════════════════════════════
     SCROLL REVEAL  (IntersectionObserver)
  ════════════════════════════════════════════ */
  function initScrollReveal() {
    var elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      /* Fallback: show everything immediately */
      elements.forEach(function (el) { el.classList.add('revealed'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(function (el) { observer.observe(el); });
  }

  /* ════════════════════════════════════════════
     TOAST NOTIFICATIONS
  ════════════════════════════════════════════ */
  function showToast(message, type, duration) {
    type     = type     || 'info';
    duration = duration || 3500;

    var container = document.getElementById('toastContainer');
    if (!container) return;

    var icons = {
      success: '<svg class="emoji-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
      error:   '<svg class="emoji-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
      info:    '<svg class="emoji-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
      warning: '<svg class="emoji-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'
    };

    var toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.setAttribute('role', 'alert');
    toast.innerHTML =
      '<span class="toast-icon">' + (icons[type] || icons.info) + '</span>' +
      '<span class="toast-message">' + message + '</span>';

    container.appendChild(toast);

    /* Auto-dismiss */
    setTimeout(function () {
      toast.style.opacity    = '0';
      toast.style.transform  = 'translateX(calc(100% + 2rem))';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 320);
    }, duration);
  }
  window.GreenGrid.showToast = showToast;

  /* ════════════════════════════════════════════
     IMAGE LIGHTBOX
  ════════════════════════════════════════════ */
  function initLightbox() {
    var overlay  = document.getElementById('lightbox');
    var img      = document.getElementById('lightboxImg');
    var closeBtn = document.getElementById('lightboxClose');
    if (!overlay || !img) return;

    function openLightbox(src, alt) {
      img.src = src;
      img.alt = alt || '';
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    }

    function closeLightbox() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      /* Delay clearing src so fade-out is smooth */
      setTimeout(function () { img.src = ''; }, 300);
    }

    /* Trigger on any [data-lightbox] element */
    document.querySelectorAll('[data-lightbox]').forEach(function (el) {
      el.style.cursor = 'zoom-in';
      el.setAttribute('tabindex', el.getAttribute('tabindex') || '0');

      function triggerOpen() {
        var src = el.getAttribute('data-lightbox') || el.getAttribute('src') || el.getAttribute('href') || '';
        var alt = el.getAttribute('alt') || el.getAttribute('data-alt') || '';
        openLightbox(src, alt);
      }

      el.addEventListener('click', function (e) { e.preventDefault(); triggerOpen(); });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); triggerOpen(); }
      });
    });

    /* Close triggers */
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('active')) closeLightbox();
    });
  }
  window.GreenGrid.openLightbox = function (src, alt) {
    var overlay  = document.getElementById('lightbox');
    var img      = document.getElementById('lightboxImg');
    if (!overlay || !img) return;
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  /* ════════════════════════════════════════════
     FAQ ACCORDION
  ════════════════════════════════════════════ */
  function initFAQ() {
    var questions = document.querySelectorAll('.faq-question');
    if (!questions.length) return;

    questions.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item     = btn.closest('.faq-item');
        var isActive = item.classList.contains('active');

        /* Close all open items */
        document.querySelectorAll('.faq-item.active').forEach(function (open) {
          open.classList.remove('active');
          var ans = open.querySelector('.faq-answer');
          if (ans) ans.style.maxHeight = '';
          var openBtn = open.querySelector('.faq-question');
          if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
        });

        /* Open clicked item if it was closed */
        if (!isActive) {
          item.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
          var answer = item.querySelector('.faq-answer');
          if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });

      /* Keyboard support */
      btn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });
  }

  /* ════════════════════════════════════════════
     FORM VALIDATION
  ════════════════════════════════════════════ */
  function validateField(field) {
    var value    = field.value.trim();
    var type     = field.type;
    var required = field.hasAttribute('required');
    var error    = '';

    if (required && !value) {
      error = 'This field is required.';
    } else if (type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Please enter a valid email address.';
    } else if (type === 'tel' && value && !/^[\+]?[\d\s\-\(\)]{7,15}$/.test(value)) {
      error = 'Please enter a valid phone number.';
    } else if (field.hasAttribute('minlength')) {
      var min = parseInt(field.getAttribute('minlength'), 10);
      if (value.length < min) {
        error = 'Must be at least ' + min + ' characters.';
      }
    }

    var parent  = field.parentElement;
    var errorEl = parent ? parent.querySelector('.form-error') : null;

    field.classList.toggle('error',   !!error);
    field.classList.toggle('success', !error && !!value);

    if (errorEl) errorEl.textContent = error;

    return !error;
  }

  function validateForm(form) {
    var fields = form.querySelectorAll('input, textarea, select');
    var valid  = true;
    fields.forEach(function (field) {
      if (!validateField(field)) valid = false;
    });
    return valid;
  }

  /* Live validation on blur */
  function initFormValidation() {
    document.querySelectorAll('.validated-form').forEach(function (form) {
      form.querySelectorAll('input, textarea, select').forEach(function (field) {
        field.addEventListener('blur', function () { validateField(field); });
        field.addEventListener('input', function () {
          if (field.classList.contains('error')) validateField(field);
        });
      });

      form.addEventListener('submit', function (e) {
        if (!validateForm(form)) {
          e.preventDefault();
          /* Focus first error */
          var firstError = form.querySelector('.error');
          if (firstError) firstError.focus();
        }
      });
    });
  }

  window.GreenGrid.validateField = validateField;
  window.GreenGrid.validateForm  = validateForm;

  /* ════════════════════════════════════════════
     COUNTER ANIMATION
  ════════════════════════════════════════════ */
  function animateCounter(el) {
    var raw     = el.getAttribute('data-target') || el.textContent.replace(/[^\d.]/g, '');
    var target  = parseFloat(raw) || 0;
    var suffix  = el.getAttribute('data-suffix') || '';
    var prefix  = el.getAttribute('data-prefix') || '';
    var dur     = parseInt(el.getAttribute('data-duration') || '2000', 10);
    var isFloat = target !== Math.floor(target);
    var start   = performance.now();

    /* Store original text in case of re-trigger */
    el.setAttribute('data-target', target);

    function update(now) {
      var elapsed  = now - start;
      var progress = Math.min(elapsed / dur, 1);
      /* Cubic ease-out */
      var eased    = 1 - Math.pow(1 - progress, 3);
      var current  = target * eased;
      el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.round(current)) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  function initCounters() {
    var counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      counters.forEach(animateCounter);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  window.GreenGrid.animateCounter = animateCounter;

  /* ════════════════════════════════════════════
     UNIVERSAL FORM SUBMIT HANDLER
     Handles all forms (newsletter, subscribe, quote, consultation, search, notify, etc.)
     Prevents full page reload, validates fields, resets only input columns, and shows success toast.
  ════════════════════════════════════════════ */
  function initUniversalForms() {
    var forms = document.querySelectorAll('form');
    forms.forEach(function (form) {
      if (form.getAttribute('data-universal-handled')) return;
      form.setAttribute('data-universal-handled', 'true');

      // Strip legacy inline onsubmit to let this clean handler manage it
      if (form.hasAttribute('onsubmit')) {
        form.removeAttribute('onsubmit');
      }

      form.addEventListener('submit', function (e) {
        // ALWAYS prevent default full page reload
        e.preventDefault();

        // If it's a contact, login or register form with its own dedicated controller, don't duplicate
        if (form.id === 'contactForm' || form.id === 'loginForm' || form.id === 'registerForm') {
          return;
        }

        var inputs = form.querySelectorAll('input:not([type="hidden"]):not([type="submit"]):not([type="button"]), textarea, select');
        var isValid = true;
        var firstInvalid = null;
        var errorMessage = '';

        inputs.forEach(function (input) {
          var val = input.value.trim();
          var isEmail = input.type === 'email';
          var isReq = input.hasAttribute('required') || form.classList.contains('footer-subscribe-group') || form.id === 'newsletterForm';

          if (isReq && !val) {
            isValid = false;
            input.classList.add('error');
            if (!firstInvalid) {
              firstInvalid = input;
              errorMessage = isEmail ? 'Please enter your email address.' : 'Please fill in this required field.';
            }
          } else if (isEmail && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
            isValid = false;
            input.classList.add('error');
            if (!firstInvalid) {
              firstInvalid = input;
              errorMessage = 'Please enter a valid email address (e.g. name@example.com).';
            }
          } else {
            input.classList.remove('error');
          }
        });

        if (!isValid) {
          if (firstInvalid) {
            firstInvalid.focus();
          }
          showToast(errorMessage || 'Please fill in all required fields.', 'error', 4000);
          return;
        }

        // Determine customized success message based on form type
        var msg = 'Thank you! Your submission was successful.';
        var formClass = form.className || '';
        var formId = form.id || '';

        if (formId === 'newsletterForm' || formClass.indexOf('newsletter') !== -1) {
          msg = '🎉 Thank you for subscribing! Your monthly solar newsletter is confirmed.';
        } else if (formClass.indexOf('subscribe') !== -1 || formClass.indexOf('footer-subscribe') !== -1) {
          msg = '🎉 Thank you for subscribing to GreenGrid updates!';
        } else if (formClass.indexOf('cs-form') !== -1) {
          msg = '🔔 Thank you! You will be notified on launch day.';
        } else if (formClass.indexOf('search') !== -1 || form.getAttribute('role') === 'search') {
          msg = '🔍 Showing matching results for your search query.';
        } else if (formClass.indexOf('quote') !== -1) {
          msg = '✅ Your quote request has been received! An engineer will contact you shortly.';
        } else {
          msg = '✅ Thank you! Your information has been received.';
        }

        // Clear/refresh ONLY the input columns of this form (does NOT reload the page)
        form.reset();

        // Clear any error or touched styling
        inputs.forEach(function (input) {
          input.classList.remove('error');
          input.classList.remove('success');
        });

        // Display success toast notification
        showToast(msg, 'success', 5000);
      });
    });
  }

  window.GreenGrid.initUniversalForms = initUniversalForms;

  /* ════════════════════════════════════════════
     INITIALISE ALL
  ════════════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', function () {
    initBackToTop();
    initScrollReveal();
    initLightbox();
    initFAQ();
    initCounters();
    initFormValidation();
    initUniversalForms();
  });
})();
