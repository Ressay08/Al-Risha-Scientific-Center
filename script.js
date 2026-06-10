// Centre Al Risha Languages - Interactive JavaScript

// Wait for DOM
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navbar Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Smooth Scrolling for ALL Nav Links (internal #anchors or external)
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // Close mobile menu always
      if (navMenu) navMenu.classList.remove('active');
      if (hamburger) hamburger.classList.remove('active');
    });
  });

  // CTA Buttons scroll to contact (or navigate if external)
  const ctaBtns = document.querySelectorAll('.cta-btn');
  ctaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const href = btn.getAttribute('href');
      if (href && href.startsWith('#')) {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Testimonial Slider
  const testimonials = document.querySelectorAll('.testimonial');
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.style.opacity = i === index ? '1' : '0.5';
      t.style.transform = i === index ? 'translateX(0)' : 'translateX(20px)';
    });
  }

  if (testimonials.length > 0) {
    showTestimonial(0);
    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }, 4000);
  }



  // Fade-in Animations on Scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  console.log('Centre Al Risha Languages website fully loaded and interactive! 🎓');
});



