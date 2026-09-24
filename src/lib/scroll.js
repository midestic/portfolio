let lenisInstance = null;

export function setLenis(instance) {
  lenisInstance = instance;
}

export function scrollToSection(href) {
  if (href === "#home" || href === "/") {
    if (lenisInstance) lenisInstance.scrollTo(0);
    else window.scrollTo({ top: 0 });
    return;
  }
  const target = document.querySelector(href);
  if (!target) return;
  if (lenisInstance) lenisInstance.scrollTo(target);
  else target.scrollIntoView({ behavior: "smooth" });
}
