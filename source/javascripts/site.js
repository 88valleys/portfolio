// // This is where it all goes :)

// Typewriter function in hero banner
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
            }, 75); // Adjusted typing speed for smoothness
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