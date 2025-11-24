import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const once = true;
    if (!window.__inViewIO) {
      window.__inViewIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            if (once) window.__inViewIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
    }

    const initInViewAnimations = (selector = ".animate-on-scroll") => {
      document.querySelectorAll(selector).forEach((el) => {
        window.__inViewIO.observe(el);
      });
    };

    // Initialize on mount
    initInViewAnimations();

    // Cleanup
    return () => {
      if (window.__inViewIO) {
        document.querySelectorAll(".animate-on-scroll").forEach((el) => {
          window.__inViewIO.unobserve(el);
        });
      }
    };
  }, []);

  return null;
}

// Extend Window type
declare global {
  interface Window {
    __inViewIO: IntersectionObserver;
  }
}

