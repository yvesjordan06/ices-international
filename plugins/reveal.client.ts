// Lightweight scroll-reveal: any element with class `reveal` fades/slides in
// once when it enters the viewport. Re-scans after each route change.
export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window === "undefined") return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const observer = prefersReduced
    ? null
    : new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );

  const scan = () => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal:not(.in)");
    nodes.forEach((n, i) => {
      if (prefersReduced || !observer) {
        n.classList.add("in");
        return;
      }
      // subtle stagger for siblings revealed together
      n.style.transitionDelay = `${Math.min(i % 6, 5) * 70}ms`;
      observer.observe(n);
    });
  };

  nuxtApp.hook("page:finish", () => {
    setTimeout(scan, 60);
  });

  if (document.readyState !== "loading") setTimeout(scan, 60);
  else window.addEventListener("DOMContentLoaded", () => setTimeout(scan, 60));
});
