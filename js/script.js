  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  const observerTarget = document.createElement("div");
  
  observerTarget.style.position = "absolute";
  observerTarget.style.bottom = "0";
  observerTarget.style.width = "100%";
  observerTarget.style.height = "1px";
  document.body.appendChild(observerTarget);

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        footer.style.bottom = "0"; // Show footer
      } else {
        footer.style.bottom = "-100%"; // Hide footer
      }
    },
    { root: null, threshold: 0.1 }
  );

  observer.observe(observerTarget);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
