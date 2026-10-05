(() => {
  const sidebar = document.querySelector(".docs-nav-disclosure");
  const mobile = matchMedia("(max-width:760px)");
  const sync = () => {
    if (sidebar) sidebar.open = !mobile.matches;
  };
  sync();
  mobile.addEventListener("change", sync);
  document.querySelectorAll(".docs-article pre").forEach((pre) => {
    const code = pre.querySelector("code");
    if (!code) return;
    const button = document.createElement("button");
    button.className = "doc-copy-button";
    button.textContent = "Copy";
    button.type = "button";
    button.setAttribute("aria-label", "Copy code block");
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(code.textContent);
        button.textContent = "Copied";
        button.setAttribute("aria-label", "Code copied");
      } catch {
        button.textContent = "Select text";
        button.setAttribute(
          "aria-label",
          "Copy failed; select the code manually",
        );
      }
    });
    pre.append(button);
  });
  const dialog = document.querySelector(".docs-search-dialog");
  if (!dialog) return;
  const input = dialog.querySelector("input"),
    results = dialog.querySelector(".docs-search-results"),
    status = dialog.querySelector(".docs-search-status");
  let entries = [],
    loaded = false,
    trigger;
  const siteRoot = new URL("../", new URL(dialog.dataset.index, location.href));
  const resultUrl = (entry) => new URL(entry.url, siteRoot).href;
  function render() {
    const terms = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    let hits = entries
      .map((entry) => {
        const title = (entry.title + " " + (entry.page || "")).toLowerCase(),
          body = (
            title +
            " " +
            entry.description +
            " " +
            entry.body
          ).toLowerCase();
        return {
          entry,
          score: terms.every((t) => body.includes(t))
            ? (entry.page ? 0 : 2) + terms.reduce((n, t) => n + (title.includes(t) ? 8 : entry.description.toLowerCase().includes(t) ? 4 : 1), 0)
            : -1,
        };
      })
      .filter((x) => x.score >= 0);
    if (!terms.length) hits = hits.filter((x) => !x.entry.page);
    hits.sort((a, b) => b.score - a.score);
    hits = hits.slice(0, 12);
    results.replaceChildren();
    for (const { entry } of hits) {
      const li = document.createElement("li"),
        a = document.createElement("a"),
        detail = document.createElement("span");
      a.href = resultUrl(entry);
      a.textContent = entry.title;
      detail.textContent =
        (entry.page ? entry.page + " · " : "") +
        entry.group +
        " — " +
        entry.description;
      a.append(detail);
      li.append(a);
      results.append(li);
    }
    status.textContent = hits.length
      ? terms.length
        ? `${hits.length} results`
        : "Start with a guide, or type to search"
      : "No matching pages. Try “workspace”, “checks” or “Codex”.";
  }
  async function open(from) {
    trigger = from;
    dialog.showModal();
    input.focus();
    if (!loaded) {
      status.textContent = "Loading documentation…";
      try {
        const response = await fetch(dialog.dataset.index);
        if (!response.ok) throw Error();
        entries = await response.json();
        loaded = true;
      } catch {
        status.textContent =
          "Search is unavailable. Use the documentation navigation.";
        return;
      }
    }
    render();
  }
  document
    .querySelector("[data-doc-search]")
    .addEventListener("click", (e) => open(e.currentTarget));
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (dialog.open) dialog.close();
      else open(document.querySelector("[data-doc-search]"));
    }
  });
  dialog
    .querySelector("[data-search-close]")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => trigger?.focus());
  dialog.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      dialog.close();
    }
  });
  input.addEventListener("input", render);
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      results.querySelector("a")?.focus();
    }
    if (e.key === "Enter") {
      const a = results.querySelector("a");
      if (a) {
        e.preventDefault();
        a.click();
      }
    }
  });
  results.addEventListener("click", (e) => {
    if (e.target.closest("a")) dialog.close();
  });
  results.addEventListener("keydown", (e) => {
    const links = [...results.querySelectorAll("a")],
      index = links.indexOf(document.activeElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      links[(index + 1) % links.length]?.focus();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (index <= 0) input.focus();
      else links[index - 1].focus();
    }
  });
})();
