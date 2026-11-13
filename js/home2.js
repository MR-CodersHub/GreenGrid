/**
 * home2.js — Solar Savings Calculator Logic
 * GreenGrid Solar Energy
 */

(function () {
  'use strict';

  // ── SYSTEM SIZE CONFIG ──────────────────────────────────────────
  // efficiency_factor: fraction of bill offset by solar per year
  // costRange: estimated installed cost range [min, max] in USD
  // paybackRange: estimated payback period range [min, max] in years
  const SYSTEM_CONFIG = {
    3:  { efficiency: 0.75, costMin: 8000,  costMax: 14000, paybackMin: 5, paybackMax: 7 },
    5:  { efficiency: 0.80, costMin: 10000, costMax: 16000, paybackMin: 6, paybackMax: 8 },
    8:  { efficiency: 0.85, costMin: 16000, costMax: 24000, paybackMin: 7, paybackMax: 10 },
    10: { efficiency: 0.88, costMin: 20000, costMax: 30000, paybackMin: 7, paybackMax: 11 },
  };

  // ── DOM REFS ────────────────────────────────────────────────────
  const slider       = document.getElementById('monthlyBill');
  const billDisplay  = document.getElementById('billDisplay');
  const annualEl     = document.getElementById('annualSavings');
  const costEl       = document.getElementById('systemCost');
  const paybackEl    = document.getElementById('paybackPeriod');

  if (!slider || !billDisplay || !annualEl || !costEl || !paybackEl) return;

  // ── HELPERS ─────────────────────────────────────────────────────
  function formatCurrency(value) {
    return '$' + Math.round(value).toLocaleString('en-US');
  }

  function getSelectedSize() {
    const checked = document.querySelector('input[name="systemSize"]:checked');
    return checked ? parseInt(checked.value, 10) : 5;
  }

  // ── CALCULATION ─────────────────────────────────────────────────
  /**
   * Annual savings = monthlyBill * 12 * 0.85 * efficiency_factor
   * (0.85 = base reduction factor common to all sizes)
   */
  function calculate() {
    const monthlyBill = parseInt(slider.value, 10);
    const size        = getSelectedSize();
    const cfg         = SYSTEM_CONFIG[size] || SYSTEM_CONFIG[5];

    const annualSavings = monthlyBill * 12 * 0.85 * cfg.efficiency;

    // Cost range display
    const costText = formatCurrency(cfg.costMin) + '–' + formatCurrency(cfg.costMax);

    // Payback = midpoint system cost / annual savings (clamped to config range)
    const midCost = (cfg.costMin + cfg.costMax) / 2;
    const rawPayback = annualSavings > 0 ? midCost / annualSavings : 0;

    // Clamp payback to the configured range
    const paybackLow  = Math.max(cfg.paybackMin, Math.floor(rawPayback * 0.9));
    const paybackHigh = Math.max(cfg.paybackMax, Math.ceil(rawPayback * 1.1));
    const paybackText = paybackLow + '–' + paybackHigh + ' years';

    // ── UPDATE DOM ──
    billDisplay.textContent = monthlyBill;

    // Animate numbers
    animateValue(annualEl, formatCurrency(annualSavings));
    costEl.textContent    = costText;
    paybackEl.textContent = paybackText;

    // Update slider track fill (visual feedback)
    updateSliderFill(slider);

    // Update aria-valuenow
    slider.setAttribute('aria-valuenow', monthlyBill);
  }

  // ── SLIDER TRACK FILL ────────────────────────────────────────────
  function updateSliderFill(input) {
    const min  = parseFloat(input.min)  || 0;
    const max  = parseFloat(input.max)  || 100;
    const val  = parseFloat(input.value) || 0;
    const pct  = ((val - min) / (max - min)) * 100;
    input.style.background =
      `linear-gradient(to right, var(--color-forest-green) ${pct}%, var(--color-fresh-mint) ${pct}%)`;
  }

  // ── ANIMATED VALUE UPDATE ────────────────────────────────────────
  function animateValue(el, newText) {
    el.style.transform = 'scale(1.08)';
    el.style.transition = 'transform 0.15s ease';
    el.textContent = newText;
    setTimeout(() => {
      el.style.transform = 'scale(1)';
    }, 150);
  }

  // ── EVENT LISTENERS ─────────────────────────────────────────────
  slider.addEventListener('input', calculate);

  document.querySelectorAll('input[name="systemSize"]').forEach(function (radio) {
    radio.addEventListener('change', calculate);
  });

  // ── SCROLL TO CALCULATOR (from CTA button) ───────────────────────
  document.querySelectorAll('a[href="#calculator"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.getElementById('calculator');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Brief focus for accessibility
        const firstInput = target.querySelector('input, button');
        if (firstInput) setTimeout(function () { firstInput.focus(); }, 600);
      }
    });
  });

  // ── INIT ─────────────────────────────────────────────────────────
  updateSliderFill(slider);
  calculate();

})();
