// --- Premium Typewriter Implementation ---
const terminalPhrases = ["systems designer.", "full-stack creator.", "problem solver."];
let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;
const targetElement = document.getElementById("typewriter");

function runTypewriter() {
    const currentPhrase = terminalPhrases[phraseIdx];
    
    if (!isDeleting) {
        targetElement.textContent = currentPhrase.substring(0, charIdx + 1);
        charIdx++;
        
        if (charIdx === currentPhrase.length) {
            isDeleting = true;
            setTimeout(runTypewriter, 2500);
            return;
        }
    } else {
        targetElement.textContent = currentPhrase.substring(0, charIdx - 1);
        charIdx--;
        
        if (charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % terminalPhrases.length;
        }
    }
    
    setTimeout(runTypewriter, isDeleting ? 40 : 80);
}

document.addEventListener("DOMContentLoaded", () => setTimeout(runTypewriter, 1000));

// --- Secure Serverless Request Interceptor ---
document.getElementById('my-contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const btn = e.target.querySelector('.submit-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span>Processing Payload...</span>';
    btn.disabled = true;

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
            alert('Transmission Success. Data routed safely.');
            document.getElementById('my-contact-form').reset();
        } else {
            alert('Error dispatching pipeline. Please retry.');
        }
    } catch (error) {
        alert('Could not establish network route.');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
});


