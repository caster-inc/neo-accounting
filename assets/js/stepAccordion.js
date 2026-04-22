(function () {
  const root = document.querySelector("[data-step-accordion]");
  if (!root) return;

  const panels = [...root.querySelectorAll(".step__panel")];

  function togglePanel(panel) {
    const open = !panel.classList.contains("is-open");
    panel.classList.toggle("is-open", open);
    const btn = panel.querySelector(".step__trigger");
    const region = panel.querySelector(".step__content");
    if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (region) region.toggleAttribute("hidden", !open);
  }

  panels.forEach((panel) => {
    const btn = panel.querySelector(".step__trigger");
    if (!btn) return;
    btn.addEventListener("click", () => togglePanel(panel));
  });
})();
