(() => {
  // Filter chips (projects page)
  const filterBar = document.querySelector("[data-filter-bar]");
  if (!filterBar) return;

  const buttons = Array.from(filterBar.querySelectorAll("[data-filter]"));
  const cards = Array.from(document.querySelectorAll("[data-tags]"));

  const setActive = (btn) => {
    buttons.forEach(b => b.classList.toggle("active", b === btn));
  };

  const applyFilter = (tag) => {
    cards.forEach(card => {
      const tags = (card.getAttribute("data-tags") || "").split(",").map(s => s.trim()).filter(Boolean);
      const show = tag === "all" || tags.includes(tag);
      card.classList.toggle("d-none", !show);
    });
  };

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tag = btn.getAttribute("data-filter");
      setActive(btn);
      applyFilter(tag);
    });
  });

  // default
  const defaultBtn = buttons.find(b => b.getAttribute("data-filter") === "all") || buttons[0];
  if (defaultBtn) {
    setActive(defaultBtn);
    applyFilter(defaultBtn.getAttribute("data-filter"));
  }
})();
