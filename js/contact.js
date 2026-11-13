(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    // Real-time field validation
    form.querySelectorAll('input, select, textarea').forEach(function(field) {
      field.addEventListener('blur', function() {
        if (window.GreenGrid && window.GreenGrid.validateField) {
          window.GreenGrid.validateField(field);
        } else {
          // Fallback inline validation
          validateFieldFallback(field);
        }
      });
    });

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var isValid;
      if (window.GreenGrid && window.GreenGrid.validateForm) {
        isValid = window.GreenGrid.validateForm(form);
      } else {
        isValid = validateFormFallback(form);
      }

      if (isValid) {
        var submitBtn = form.querySelector('[type="submit"]');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        setTimeout(function() {
          if (window.GreenGrid && window.GreenGrid.showToast) {
            window.GreenGrid.showToast('Your enquiry has been submitted! We\'ll contact you within 1 business day.', 'success', 5000);
          } else {
            showToastFallback('Your enquiry has been submitted! We\'ll contact you within 1 business day.', 'success');
          }
          form.reset();
          // Clear error states
          form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(function(f) {
            f.classList.remove('error');
          });
          form.querySelectorAll('.form-error').forEach(function(el) {
            el.textContent = '';
          });
          submitBtn.textContent = 'Submit Enquiry';
          submitBtn.disabled = false;
        }, 1200);
      } else {
        if (window.GreenGrid && window.GreenGrid.showToast) {
          window.GreenGrid.showToast('Please fill in all required fields correctly.', 'error');
        } else {
          showToastFallback('Please fill in all required fields correctly.', 'error');
        }
        // Scroll to first error
        var firstError = form.querySelector('.form-input.error, .form-select.error, .form-textarea.error');
        if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });

    // Fallback validation functions (used if GreenGrid helpers not available)
    function validateFieldFallback(field) {
      var errEl = document.getElementById(field.id + '-error');
      if (!field.required) return true;
      var val = field.value.trim();
      if (!val) {
        field.classList.add('error');
        if (errEl) errEl.textContent = 'This field is required.';
        return false;
      }
      if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        field.classList.add('error');
        if (errEl) errEl.textContent = 'Please enter a valid email address.';
        return false;
      }
      field.classList.remove('error');
      if (errEl) errEl.textContent = '';
      return true;
    }

    function validateFormFallback(form) {
      var valid = true;
      form.querySelectorAll('input, select, textarea').forEach(function(field) {
        if (!validateFieldFallback(field)) valid = false;
      });
      return valid;
    }

    function showToastFallback(msg, type) {
      var container = document.getElementById('toastContainer');
      if (!container) return;
      var toast = document.createElement('div');
      toast.className = 'toast toast-' + (type || 'info');
      toast.setAttribute('role', 'alert');
      toast.textContent = msg;
      toast.style.cssText = 'background:' + (type === 'success' ? '#2D6A4F' : '#c0392b') + ';color:#fff;padding:1rem 1.5rem;border-radius:8px;margin-top:0.5rem;font-size:0.95rem;box-shadow:0 4px 16px rgba(0,0,0,0.15);';
      container.appendChild(toast);
      setTimeout(function() {
        toast.remove();
      }, type === 'success' ? 5000 : 4000);
    }
  });
})();
