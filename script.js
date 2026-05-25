(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Scroll reveal (IntersectionObserver, no scroll listeners) ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else { reveals.forEach(function (el) { el.classList.add('in'); }); }

  /* ---- Hero typewriter ---- */
  var typed = document.getElementById('typed'), cursor = document.getElementById('cursor');
  if (typed) {
    if (reduce) { typed.textContent = 'end to end'; if (cursor) cursor.style.display = 'none'; }
    else {
      var phrase = 'end to end', i = 0;
      setTimeout(function () {
        (function tick() {
          if (i <= phrase.length) { typed.textContent = phrase.slice(0, i); i++; setTimeout(tick, 95); }
        })();
      }, 650);
    }
  }

  /* ---- Headline: split leading text into words, reveal them rising in sequence ---- */
  var lead = document.getElementById('h1lead');
  var h1 = lead ? lead.closest('h1') : null;
  if (lead && h1 && !reduce) {
    var words = lead.textContent.trim().split(/\s+/);
    lead.innerHTML = words.map(function (w) {
      return '<span class="word"><span>' + w + '</span></span>';
    }).join(' ') + ' ';
    lead.querySelectorAll('.word > span').forEach(function (s, k) {
      s.style.transitionDelay = (k * 0.075) + 's';
    });
    setTimeout(function () { h1.classList.add('words-in'); }, 120);
  }

  /* ---- Colophon rows: staggered fade-in ---- */
  var colRows = document.querySelectorAll('#colophon .colophon__row');
  if (!reduce) {
    colRows.forEach(function (r, k) { r.style.animationDelay = (0.5 + k * 0.09) + 's'; });
  } else {
    colRows.forEach(function (r) { r.style.opacity = 1; });
  }

  /* ---- Section title rules: draw in when the head scrolls into view ---- */
  var heads = document.querySelectorAll('.sec__head');
  if ('IntersectionObserver' in window && !reduce) {
    var rio = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('ruled'); obs.unobserve(e.target); } });
    }, { threshold: 0.5 });
    heads.forEach(function (el) { rio.observe(el); });
  } else { heads.forEach(function (el) { el.classList.add('ruled'); }); }

  /* ---- Project images: develop in from their frame on scroll ---- */
  var shots = document.querySelectorAll('.proj');
  if ('IntersectionObserver' in window && !reduce) {
    var sio = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('shot-in'); obs.unobserve(e.target); } });
    }, { threshold: 0.25 });
    shots.forEach(function (el) { sio.observe(el); });
  } else { shots.forEach(function (el) { el.classList.add('shot-in'); }); }

  /* ---- Stat count-up ---- */
  function countUp(el) {
    var target = parseInt(el.getAttribute('data-count'), 10), suffix = el.getAttribute('data-suffix') || '';
    if (reduce) { el.innerHTML = target + '<span>' + suffix + '</span>'; return; }
    var start = null, dur = 1100;
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
      el.innerHTML = Math.round(target * eased) + '<span>' + suffix + '</span>';
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); obs.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else { counters.forEach(countUp); }

  /* ---- Nav: hide on scroll-down, show on scroll-up (rAF-throttled) ---- */
  var nav = document.getElementById('nav');
  var links = document.getElementById('navLinks');
  var lastY = window.scrollY, ticking = false;
  function onScroll() {
    var y = window.scrollY;
    // don't hide the bar while the mobile menu is open
    if (links && links.classList.contains('open')) { nav.style.transform = 'translateY(0)'; lastY = y; ticking = false; return; }
    nav.style.transform = (y > lastY && y > 200) ? 'translateY(-110%)' : 'translateY(0)';
    lastY = y; ticking = false;
  }
  window.addEventListener('scroll', function () { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });

  /* ---- Mobile menu: real toggle ---- */
  var menuBtn = document.getElementById('menuBtn');
  function closeMenu() { if (links) { links.classList.remove('open'); } if (menuBtn) { menuBtn.setAttribute('aria-expanded', 'false'); } }
  if (menuBtn && links) {
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // close when a link is tapped
    links.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
    // close if the viewport grows back to desktop
    window.matchMedia('(min-width: 721px)').addEventListener('change', function (e) { if (e.matches) closeMenu(); });
  }
})();
