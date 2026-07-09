// 1. Typewriter Effect Logic
const phrases = ["I build beautiful interfaces.", "I create secure solutions.", "Welcome to my space."];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
const typewriterElement = document.getElementById("typewriter");

function type() {
    if (currentCharIndex < phrases[currentPhraseIndex].length) {
        typewriterElement.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (currentCharIndex > 0) {
        typewriterElement.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(erase, 50);
    } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    }
}

// Start typewriter on load
document.addEventListener("DOMContentLoaded", () => setTimeout(type, 500));


// 2. Secure Form Submission Logic
document.getElementById('my-contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const data = {
        name: document.getElementById('form-name').value,
        email: document.getElementById('form-email').value,
        message: document.getElementById('form-message').value
    };

    try {
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Message sent safely and securely!');
            document.getElementById('my-contact-form').reset();
        } else {
            alert('Something went wrong. Please try again.');
        }
    } catch (error) {
        alert('Error connecting to the server.');
    }
});


