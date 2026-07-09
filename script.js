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
        if (charIdx === currentPhrase.length) { isDeleting = true; setTimeout(runTypewriter, 2500); return; }
    } else {
        targetElement.textContent = currentPhrase.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) { isDeleting = false; phraseIdx = (phraseIdx + 1) % terminalPhrases.length; }
    }
    setTimeout(runTypewriter, isDeleting ? 40 : 80);
}
document.addEventListener("DOMContentLoaded", () => setTimeout(runTypewriter, 1000));

// --- Documentation Drawer Content Engine ---
const documentationData = {
    html5: {
        title: "HTML5 Engine",
        html: "<p>Hypertext Markup Language version 5 defines the structure and semantic layer of modern apps.</p><h4>Core Knowledge Base</h4><ul><li>Semantic Elements (&lt;main&gt;, &lt;section&gt;, &lt;article&gt;)</li><li>SEO Structure Optimizations</li><li>Web Accessibility (ARIA Guidelines)</li></ul><br><a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank'>Explore Official MDN Docs →</a>"
    },
    css3: {
        title: "CSS3 Cascading Layouts",
        html: "<p>Advanced style matrices including animations, Grid structures, and custom property architectures.</p><h4>Core Knowledge Base</h4><ul><li>Flexbox & Bento Grid Systems</li><li>Fluid Responsive Breakpoints</li><li>GPU Accelerated Layer Keyframes</li></ul><br><a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank'>Explore Official MDN Docs →</a>"
    },
    javascript: {
        title: "JavaScript (ES6+ Runtime)",
        html: "<p>Asynchronous runtime execution logic parsing DOM nodes and controlling event triggers securely.</p><h4>Core Knowledge Base</h4><ul><li>Asynchronous Fetch Requests & API Interception</li><li>JSON Parsers</li><li>Event Bubbling & Scoped Modules</li></ul><br><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>Explore Official MDN Docs →</a>"
    },
    apis: {
        title: "Serverless Node Endpoints",
        html: "<p>Isolated computational modules managing data validation pipelines safely from background runtime layers.</p><h4>Core Knowledge Base</h4><ul><li>HTTP Request Methods (POST, GET intercept)</li><li>Secure Environment Key Passing</li><li>CORS Headers Management</li></ul><br><a href='https://vercel.com/docs/functions/serverless-functions' target='_blank'>Explore Serverless Architecture Docs →</a>"
    },
    git: {
        title: "Git & Version Control",
        html: "<p>Distributed development management maps handling cryptographic codebase tracking states safely.</p><h4>Core Knowledge Base</h4><ul><li>Atomic Changeset Commit Hooks</li><li>Branch Strategies & Merge Conflict Handling</li><li>Automated Continuous Deployment Pipeline Links</li></ul><br><a href='https://git-scm.com/doc' target='_blank'>Explore Git Reference Engine →</a>"
    },
    project: {
        title: "Serverless Messenger Core",
        html: "<p>An end-to-end processing pipeline communicating with Resend via decoupled REST calls.</p><h4>System Blueprints</h4><ul><li>Client dispatches data payload directly to microservice path</li><li>Endpoint isolates private environment tokens</li><li>System checks validation headers before processing email transmission</li></ul>"
    }
};

function openDrawer(key) {
    const data = documentationData[key];
    if (!data) return;
    document.getElementById('drawer-title').textContent = data.title;
    document.getElementById('drawer-content').innerHTML = data.html;
    document.getElementById('doc-drawer').classList.add('active');
    document.getElementById('drawer-overlay').classList.add('active');
}

function closeDrawer() {
    document.getElementById('doc-drawer').classList.remove('active');
    document.getElementById('drawer-overlay').classList.remove('active');
}

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


