// Typewriter function for title in banner
document.addEventListener('DOMContentLoaded', function() {
    const dynamicText = document.querySelector("h1 span");
    const words = ["Hello, I'm Senie 👋"];

    if (!dynamicText) {
        console.error("Element not found");
        return;
    }

    // Function to type out each character
    function typeWriter(text, i, callback) {
        if (i < text.length) {
            dynamicText.innerHTML = text.substring(0, i + 1) + '<span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span>';
            setTimeout(function() {
                typeWriter(text, i + 1, callback);
            },55); // Typing speed for smoothness
        } else if (typeof callback == 'function') {
            setTimeout(callback, 1000); // Slight delay before starting the next word
        }
    }

    // Function to start the typing effect
    function startTextAnimation(i) {
        if (i >= words.length) {
            i = 0;
        }
        typeWriter(words[i], 0, function() {
            deleteWriter(words[i], words[i].length, function() {
                startTextAnimation(i + 1);
            });
        });
    }

    // Start the typing effect
    startTextAnimation(0);
});

// Smooth scroll 😌
document.addEventListener('DOMContentLoaded', function() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Calculate the target scroll position
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

        // Scroll to the target position smoothly
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Hide the mobile menu if a section link is clicked
        hideMobileMenu();
        });
    });

    // Hide the mobile menu if clicking outside of it
    document.addEventListener('click', function(event) {
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburgerIcon = document.querySelector('.hamburger-icon');
    
        if (!mobileMenu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
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
