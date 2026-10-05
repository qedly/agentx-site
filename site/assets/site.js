const sections = [...document.querySelectorAll('.site-rail .rail-nav a')];
if (sections.length && 'IntersectionObserver' in window) {
  const ids = new Map(sections.map((link) => [document.querySelector(link.getAttribute('href')), link]).filter(([section]) => section));
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    sections.forEach((link) => {
      const active = link === ids.get(visible.target);
      link.classList.toggle('is-current', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-20% 0px -62% 0px', threshold: [0, .15, .4] });
  ids.forEach((_, section) => observer.observe(section));
}
