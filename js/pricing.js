/* ============================================================
   PRICING PAGE SCRIPT — js/pricing.js
   GreenGrid Solar Energy
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {
  const showResidentialBtn = document.getElementById('showResidential');
  const showCommercialBtn = document.getElementById('showCommercial');
  const residentialSection = document.getElementById('residential-packages');
  const commercialSection = document.getElementById('commercial-packages');

  function setToggle(activeType) {
    if (activeType === 'residential') {
      showResidentialBtn.classList.add('active');
      showResidentialBtn.setAttribute('aria-pressed', 'true');
      showCommercialBtn.classList.remove('active');
      showCommercialBtn.setAttribute('aria-pressed', 'false');

      if (residentialSection) residentialSection.style.display = 'block';
      if (commercialSection) commercialSection.style.display = 'none';
    } else {
      showCommercialBtn.classList.add('active');
      showCommercialBtn.setAttribute('aria-pressed', 'true');
      showResidentialBtn.classList.remove('active');
      showResidentialBtn.setAttribute('aria-pressed', 'false');

      if (residentialSection) residentialSection.style.display = 'none';
      if (commercialSection) commercialSection.style.display = 'block';
    }
  }

  if (showResidentialBtn && showCommercialBtn) {
    showResidentialBtn.addEventListener('click', function() {
      setToggle('residential');
    });

    showCommercialBtn.addEventListener('click', function() {
      setToggle('commercial');
    });

    // Initial state: show residential, hide commercial
    setToggle('residential');
  }

  // Interactive card selection
  const pricingCards = document.querySelectorAll('.pricing-card');
  pricingCards.forEach(function(card) {
    card.addEventListener('click', function(e) {
      if (e.target.tagName.toLowerCase() === 'a') return;
      pricingCards.forEach(function(c) { c.classList.remove('selected'); });
      card.classList.add('selected');
    });
  });
});

