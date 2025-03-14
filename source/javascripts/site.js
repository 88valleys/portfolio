document.addEventListener('DOMContentLoaded', function () {
  initTypewriter();
  initScrollIcon();
  initMobileMenu();
  initSmoothScroll();
  initContactForm();
});

// Typewriter function for banner title
function initTypewriter() {
  const dynamicText = document.querySelector('h1 span');
  const words = ["Hello, I'm Senie 👋"];
  let continueTyping = true;

  if (!dynamicText) {
    console.error('Element not found');
    return;
  }

  // Function to type out each character
  function typeWriter(text, i, callback) {
    if (i < text.length) {
      dynamicText.innerHTML =
        text.substring(0, i + 1) +
        '<span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span>';
      setTimeout(() => typeWriter(text, i + 1, callback), 55);
    } else if (typeof callback === 'function') {
      setTimeout(callback, 1000);
    }
  }

  // Function to start the typing effect
  function startTextAnimation(i) {
    if (i >= words.length) {
      continueTyping = false;
      return;
    }
    typeWriter(words[i], 0, () => startTextAnimation(i + 1));
  }

  startTextAnimation(0);
}

// Make the down arrow button on banner clickable and navigates to projects
function initScrollIcon() {
  const scrollIcon = document.querySelector('.scroll-icon');
  const projectsSection = document.getElementById('projects');
  const headerOffset = 70;

  if (scrollIcon && projectsSection) {
    scrollIcon.addEventListener('click', function () {
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  }
}

// Mobile Menu: Hamburger toggle
function initMobileMenu() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const closeIcon = document.querySelector('.close-icon');
  const mobileMenu = document.getElementById('mobile-menu');

  function toggleMenu() {
    mobileMenu.classList.toggle('open');
  }

  function hideMobileMenu() {
    mobileMenu.classList.remove('open');
  }

  hamburgerIcon.addEventListener('click', toggleMenu);
  closeIcon.addEventListener('click', hideMobileMenu);
}

// Smooth scroll on section link click
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({ top: targetPosition, behavior: 'smooth' });

      document.getElementById('mobile-menu')?.classList.remove('open');
    });
  });
}

// Contact Form: Send message using EmailJS
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  emailjs.init('PyViX0SCaQ_EhZME2');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const templateParams = {
      name: contactForm.name.value,
      email: contactForm.email.value,
      message: contactForm.message.value,
    };

    emailjs
      .sendForm('service_qpfn5zq', 'template_msbpz65', this)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Message sent! ✉️',
          text: "Thank you for reaching out! I'll get back to you within two business days.",
        });
        contactForm.reset();
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send message. Please try again later.',
        });
      });
  });
}
