// This is where it all goes :)

// Array of strings to type out
const items = ["I'm a developer", "I am a designer", "I love coding"];

// Function to type out each character
function typeWriter(text, i, callback) {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
        setTimeout(function() {
            typeWriter(text, i + 1, callback);
        }, 100);
    } else if (typeof callback == 'function') {
        setTimeout(callback, 700);
    }
}

// Function to start the typing effect
function startTextAnimation(i) {
    if (typeof items[i] == 'undefined') {
        setTimeout(function() {
            startTextAnimation(0);
        }, 20000);
    }
    if (i < items.length) {
        typeWriter(items[i], 0, function() {
            startTextAnimation(i + 1);
        });
    }
}

// Start the typing effect
document.addEventListener('DOMContentLoaded', function(event) {
    startTextAnimation(0);
});