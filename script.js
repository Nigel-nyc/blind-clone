const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.14,
  }
);

document
  .querySelectorAll(".hero-copy, .hero-panel, .post-card, .sidebar-card")
  .forEach((node, index) => {
    node.classList.add("reveal");
    node.style.transitionDelay = `${index * 80}ms`;
    observer.observe(node);
  });
