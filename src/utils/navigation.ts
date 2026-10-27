export function navigateTo(path: string) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function scrollToSection(id: string) {
  window.history.replaceState({}, '', `/#${id}`);
  document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
}
