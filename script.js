const typewriterText = "DAPHNIE OLVIGA RULL";
const typewriterElement = document.getElementById("typewriter");
let charIndex = 0;

function typeWriter() {
  if (charIndex < typewriterText.length) {
    typewriterElement.textContent += typewriterText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  }
}

window.addEventListener("load", typeWriter);

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const sections = document.querySelectorAll('section');
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.3
});

sections.forEach(section => {
  appearOnScroll.observe(section);
});
