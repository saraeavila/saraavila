document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll('.page');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); 
      }
    });
  }, { threshold: 0.3 });

  targets.forEach(target => observer.observe(target));
});
