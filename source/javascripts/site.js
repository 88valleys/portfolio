// Typewriter function for title in banner
document.addEventListener('DOMContentLoaded', function () {
  const dynamicText = document.querySelector('h1 span');
  const words = ["Hello, I'm Senie 👋"];

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
      setTimeout(function () {
        typeWriter(text, i + 1, callback);
      }, 55); // Typing speed for smoothness
    } else if (typeof callback == 'function') {
      setTimeout(callback, 1000); // Slight delay before starting the next word
    }
  }

  // Function to start the typing effect
  function startTextAnimation(i) {
    if (i >= words.length) {
      i = 0;
    }
    typeWriter(words[i], 0, function () {
      deleteWriter(words[i], words[i].length, function () {
        startTextAnimation(i + 1);
      });
    });
  }

  // Start the typing effect
  startTextAnimation(0);
});

// Make the down arrow button on banner clickable and navigates to projects
document.addEventListener('DOMContentLoaded', function () {
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
});
// Smooth scroll on section link click 😌
document.addEventListener('DOMContentLoaded', function () {
  const navbarHeight = document.querySelector('.navbar').offsetHeight;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Calculate the target scroll position
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      // Scroll to the target position smoothly
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });

      // Hide the mobile menu if a section link is clicked
      hideMobileMenu();
    });
  });

  // Hide the mobile menu if clicking outside the menu
  document.addEventListener('click', function (event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    if (
      !mobileMenu.contains(event.target) &&
      !hamburgerIcon.contains(event.target)
    ) {
      hideMobileMenu();
    }
  });
});

// Navbar: Hamburger toggleMenu
function toggleMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('open');
}

function hideMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.remove('open');
}

// Social Contact Form: Send user's message to Senie's inbox thru emailJS
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.init({
      publicKey: 'PyViX0SCaQ_EhZME2',
    });

    const templateParams = {
      name: contactForm.name.value,
      email: contactForm.email.value,
      message: contactForm.message.value,
    };

    emailjs.sendForm('service_qpfn5zq', 'template_msbpz65', this).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
        Swal.fire({
          icon: 'success',
          title: 'Message sent! ✉️',
          text: "Thank you for reaching out! Your message was sent successfully. I'll get back to you within two business days. Looking forward to chatting with you!",
        });
        contactForm.reset();
      },
      function (error) {
        console.log('FAILED...', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send message. Please try again later.',
        });
        contactForm.reset();
      }
    );
  });
});
