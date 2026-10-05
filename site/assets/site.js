(() => {
  document.documentElement.classList.add("js");
  const menu = document.querySelector(".primary-nav");
  const toggle = document.querySelector(".menu-toggle");
  const setMenu = (open) => {
    menu?.classList.toggle("is-open", open);
    toggle?.setAttribute("aria-expanded", String(open));
    toggle?.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation",
    );
  };
  toggle?.addEventListener("click", () =>
    setMenu(toggle.getAttribute("aria-expanded") !== "true"),
  );
  menu?.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu?.classList.contains("is-open")) {
      setMenu(false);
      toggle?.focus();
    }
  });
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const dialog = document.querySelector(".evidence-dialog");
  let evidenceTrigger;
  document.querySelectorAll("[data-evidence]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (!dialog || typeof dialog.showModal !== "function") return;
      const source = document.getElementById(link.dataset.evidence);
      if (!source) return;
      event.preventDefault();
      evidenceTrigger = link;
      dialog.querySelector("#dialog-title").textContent =
        source.querySelector("summary").textContent;
      const target = dialog.querySelector(".dialog-content");
      target.replaceChildren(
        source.querySelector(".report-detail").cloneNode(true),
      );
      dialog.showModal();
      document.body.classList.add("modal-open");
      dialog.querySelector(".dialog-close").focus();
      if (!reducedMotion.matches && window.Motion?.animate) {
        window.Motion.animate(
          dialog,
          { opacity: [0, 1], y: [8, 0] },
          { duration: 0.2 },
        );
      }
    });
  });
  dialog
    ?.querySelector(".dialog-close")
    ?.addEventListener("click", () => dialog.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      dialog.close();
  });
  dialog?.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    evidenceTrigger?.focus();
  });
  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.hidden = !navigator.clipboard?.writeText;
    button.addEventListener("click", async () => {
      const command = button
        .closest(".command")
        .querySelector("code").textContent;
      const status = button.closest(".command").nextElementSibling;
      try {
        await navigator.clipboard.writeText(command);
        status.textContent = "Command copied.";
      } catch {
        status.textContent = "Select the command above to copy it.";
      }
    });
  });
  const readingLinks = [...document.querySelectorAll('.doc-nav a[href^="#"]')];
  if ("IntersectionObserver" in window && readingLinks.length) {
    const sections = readingLinks
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (!active) return;
        readingLinks.forEach((link) => {
          const matches = link.getAttribute("href") === `#${active.target.id}`;
          link.classList.toggle("active", matches);
          if (matches) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      },
      { rootMargin: "-10% 0px -60% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
  }
})();
