// // This is where it all goes :)

// Typewriter function in hero banner
document.addEventListener('DOMContentLoaded', function() {
    const dynamicText = document.querySelector("h1 span");
    const words = ["Senie 👋"];

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
            }, 100);
        } else if (typeof callback == 'function') {
            setTimeout(callback, 700);
        }
    }

        // // Function to delete each character
        // function deleteWriter(text, i, callback) {
        //     if (i >= 0) {
        //         dynamicText.innerHTML = text.substring(0, i) + '<span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span>';
        //         setTimeout(function() {
        //             deleteWriter(text, i - 1, callback);
        //         }, 100);
        //     } else if (typeof callback == 'function') {
        //         setTimeout(callback, 700);
        //     }
        // }

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