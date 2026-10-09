// Shared, progressively enhanced behavior for the light Octobo website.
(function () {
  document.documentElement.classList.remove("no-js");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const nav = document.querySelector(".nav");
  const toggle = nav?.querySelector(".menu-toggle");

  function closeMenu(returnFocus = false) {
    nav?.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
    if (returnFocus) toggle?.focus();
  }

  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav?.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav?.classList.contains("open")) closeMenu(true);
  });
  document.addEventListener("click", (event) => {
    if (nav?.classList.contains("open") && !nav.contains(event.target)) closeMenu();
  });
  window.matchMedia("(min-width: 961px)").addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });

  // The pack ticker can be paused, and does not animate with reduced motion.
  const strip = document.querySelector(".strip");
  const motionToggle = strip?.querySelector(".marquee-toggle");
  function updateMotionLabel() {
    if (!motionToggle) return;
    const paused = strip.classList.contains("paused");
    const key = paused ? "packs.motion.resume" : "packs.motion.pause";
    motionToggle.dataset.i18nLabel = key;
    const strings = window.OCTOBO_STRINGS || {};
    const language = document.documentElement.lang;
    motionToggle.setAttribute("aria-label", strings[language]?.[key] || strings.en?.[key] || key);
    motionToggle.setAttribute("aria-pressed", String(paused));
    motionToggle.hidden = reduceMotion.matches;
  }
  motionToggle?.addEventListener("click", () => {
    strip.classList.toggle("paused");
    updateMotionLabel();
  });
  reduceMotion.addEventListener("change", updateMotionLabel);
  document.addEventListener("octobo:lang", updateMotionLabel);
  updateMotionLabel();

  // The welcome keeps its floating bubbles; only visible scenes animate.
  const hero = document.querySelector(".hero-frame");
  const bubbles = hero?.querySelector(".bubbles");
  if (bubbles) {
    for (let index = 0; index < Number(bubbles.dataset.bubbles || 18); index++) {
      const bubble = document.createElement("i");
      const size = 10 + (index * 17 % 40);
      Object.assign(bubble.style, {
        width: `${size}px`, height: `${size}px`,
        left: `${(index * 37 + 7) % 100}%`,
        animationDuration: `${14 + index % 11}s`,
        animationDelay: `${-index * 1.7}s`
      });
      bubbles.append(bubble);
    }
  }
  if (hero && "IntersectionObserver" in window) {
    const heroObserver = new IntersectionObserver(([entry]) => {
      nav?.classList.toggle("scrolled", !entry.isIntersecting);
      hero.classList.toggle("offscreen", !entry.isIntersecting);
    });
    heroObserver.observe(hero);
  }

  // Observe once, animate with transforms/opacity, then release each element.
  const revealNodes = [...document.querySelectorAll(
    ".home [data-reveal], .home h1, .home .hero .lede, .home .hero-actions, " +
    ".home .h2, .home .sub, .home .wide-card, .home .trust-card, " +
    ".home .packs-grid > *, .home .price, .home .faq-item, .home .cta h2, .home .cta p"
  )];
  let revealObserver;
  function setRevealMotion() {
    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      revealObserver?.disconnect();
      document.documentElement.classList.remove("motion-ready");
      revealNodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    revealObserver?.disconnect();
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: .08, rootMargin: "0px 0px -36px 0px" });
    revealNodes.forEach((node) => {
      node.classList.add("reveal");
      if (node.matches("p")) node.style.setProperty("--reveal-delay", "100ms");
      if (!node.classList.contains("is-visible")) revealObserver.observe(node);
    });
    document.documentElement.classList.add("motion-ready");
  }
  reduceMotion.addEventListener("change", setRevealMotion);
  setRevealMotion();

  // Ticker links to packs collapsed on mobile lead to their summary card.
  const mobilePacks = window.matchMedia("(max-width: 720px)");
  function revealPackDestination() {
    if (!mobilePacks.matches || !location.hash) return;
    let target;
    try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); }
    catch { return; }
    if (!target?.matches(".packs-grid .pack-extra")) return;
    document.getElementById("pack-more")?.scrollIntoView({
      behavior: reduceMotion.matches ? "instant" : "smooth", block: "start"
    });
  }
  window.addEventListener("hashchange", revealPackDestination);
  document.addEventListener("click", (event) => {
    const link = event.target.closest?.('a[href^="#pack-"]');
    if (link?.getAttribute("href") === location.hash) revealPackDestination();
  });
  mobilePacks.addEventListener("change", revealPackDestination);
  revealPackDestination();

  // Each step selects its matching screen. All screens remain available without JS.
  const steps = [...document.querySelectorAll(".step")];
  const shots = [...document.querySelectorAll(".shot")];
  if (steps.length && steps.length === shots.length) {
    const list = document.querySelector(".steps");
    list.setAttribute("role", "tablist");
    list.setAttribute("aria-orientation", "vertical");
    const heading = document.querySelector(".how .h2");
    heading.id = "how-heading";
    list.setAttribute("aria-labelledby", heading.id);
    steps.forEach((step, index) => {
      step.parentElement.setAttribute("role", "presentation");
      step.setAttribute("role", "tab");
      shots[index].setAttribute("role", "tabpanel");
      shots[index].tabIndex = 0;
    });
    function activate(index, focus = false) {
      steps.forEach((step, current) => {
        const active = current === index;
        step.classList.toggle("active", active);
        step.setAttribute("aria-selected", String(active));
        step.tabIndex = active ? 0 : -1;
        shots[current].hidden = !active;
      });
      if (focus) steps[index].focus();
    }
    steps.forEach((step, index) => {
      step.addEventListener("click", () => activate(index));
      step.addEventListener("keydown", (event) => {
        let next;
        if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % steps.length;
        if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index + steps.length - 1) % steps.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = steps.length - 1;
        if (next === undefined) return;
        event.preventDefault();
        activate(next, true);
      });
    });
    activate(0);
  }

  // Legal documents keep their table of contents in sync with the section in view.
  const tocLinks = [...document.querySelectorAll(".toc a")];
  if (tocLinks.length && "IntersectionObserver" in window) {
    const sections = tocLinks.map((link) => document.querySelector(link.getAttribute("href")));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const index = sections.indexOf(entry.target);
        tocLinks.forEach((link, current) => {
          const active = current === index;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-20% 0px -60% 0px" });
    sections.forEach((section) => section && observer.observe(section));
  }
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
