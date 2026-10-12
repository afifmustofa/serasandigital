(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  var hamburgerIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  var closeIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>';
  function setNavOpen(open) {
    nav.setAttribute("data-open", String(open));
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Tutup menu navigasi" : "Buka menu navigasi");
    toggle.innerHTML = open ? closeIcon : hamburgerIcon;
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNavOpen(nav.getAttribute("data-open") !== "true");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setNavOpen(false);
      });
    });
  }

  // Portfolio filter
  var filterButtons = document.querySelectorAll(".filter-btn");
  var items = document.querySelectorAll(".portfolio-card");
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var filter = btn.getAttribute("data-filter");
      filterButtons.forEach(function (b) {
        b.setAttribute("aria-pressed", String(b === btn));
      });
      items.forEach(function (item) {
        var match = filter === "all" || item.getAttribute("data-cat") === filter;
        item.classList.toggle("is-hidden", !match);
      });
    });
  });

  // Scale live-preview iframes to fit their card
  var frames = document.querySelectorAll(".portfolio-card__frame");
  function scaleFrames() {
    frames.forEach(function (f) {
      var w = f.clientWidth;
      if (w) f.style.setProperty("--frame-scale", String(w / 1280));
    });
  }
  scaleFrames();
  window.addEventListener("resize", scaleFrames);
  window.addEventListener("load", scaleFrames);

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Single orchestrated hero reveal
  var revealEls = document.querySelectorAll("[data-reveal]");
  requestAnimationFrame(function () {
    setTimeout(function () {
      revealEls.forEach(function (el) {
        el.setAttribute("data-revealed", "true");
      });
    }, 60);
  });
})();
