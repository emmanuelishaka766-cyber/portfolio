// --- 1. THE TYPEWRITER EFFECT ---
const words = ["Code.", "Python.", "Clean Design.", "JavaScript."];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('typewriter').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000); 
            return false;
        }
        timer = setTimeout(loopTyping, 100); 
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('typewriter').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0; 
            }
            setTimeout(typingEffect, 500);
            return false;
        }
        timer = setTimeout(loopDeleting, 50); 
    };
    loopDeleting();
}

document.addEventListener("DOMContentLoaded", typingEffect);

// --- 2. SCROLL REVEAL ANIMATION ---
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.08 
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});