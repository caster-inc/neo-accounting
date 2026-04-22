(function () {
  const header = document.querySelector(".header");
  if (!header) return;

  const mq = window.matchMedia("(max-width: 767px)");
  const SCROLL_THRESHOLD = 32;
  let ticking = false;

  function syncScrolled() {
    ticking = false;
    if (!mq.matches) {
      header.classList.remove("is-scrolled");
      return;
    }
    header.classList.toggle("is-scrolled", window.scrollY > SCROLL_THRESHOLD);
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(syncScrolled);
    }
  }

  mq.addEventListener("change", syncScrolled);
  window.addEventListener("scroll", onScroll, { passive: true });
  syncScrolled();
})();
