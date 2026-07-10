// --- Pinterest Layout Interactive Content Engine Mapping ---
const techRegistryData = {
    about: {
        title: "ABOUT ME",
        html: `
            <p>I am a Systems Architect and Creative Engineer focusing on the intersection of highly clean execution layer logic and visually compelling digital interfaces.</p>
            <p>By blending full-stack software development workflows with optimized responsive asset delivery, I build high-performance products that engage audiences.</p>
            <div class="drawer-gallery-grid">
                <div class="drawer-img-placeholder">[ Photo/Avatar Placeholder ]</div>
                <div class="drawer-img-placeholder">[ Workspace Node ]</div>
            </div>
        `
    },
    projects: {
        title: "PROJECT PORTFOLIO",
        html: `
            <p>Review the active collection of systems, applications, and visual platforms built natively using optimized coding architectures.</p>
            <h4>Production Deliverables</h4>
            <div class="drawer-gallery-grid">
                <div class="drawer-img-placeholder tall">[ Project Screenshot 1 ]</div>
                <div class="drawer-img-placeholder">[ Interface Detail ]</div>
                <div class="drawer-img-placeholder">[ Code Architecture Blueprint ]</div>
            </div>
        `
    },
    skills: {
        title: "TECHNICAL CAPABILITIES",
        html: `
            <p>Comprehensive tracking indices mapping proficiency levels across modern frontend design arrays and performance tools.</p>
            <h4>Core Architecture Layers</h4>
            <ul>
                <li><strong>HTML5 / Semantic DOM Structuring</strong> - Mastery</li>
                <li><strong>CSS3 / Grid & Masonry Matrices</strong> - Advanced</li>
                <li><strong>JavaScript / Asynchronous Request Handling</strong> - Advanced</li>
                <li><strong>React Component State Optimization</strong> - Intermediate</li>
            </ul>
        `
    }
};

function openDrawer(key) {
    const segment = techRegistryData[key];
    if (!segment) return;
    document.getElementById('drawer-title').textContent = segment.title;
    document.getElementById('drawer-content').innerHTML = segment.html;
    document.getElementById('doc-drawer').classList.add('active');
    document.getElementById('drawer-overlay').classList.add('active');
}

function closeDrawer() {
    document.getElementById('doc-drawer').classList.remove('active');
    document.getElementById('drawer-overlay').classList.remove('active');
}

// --- Dynamic Secure Form Gateway Handling ---
document.getElementById('my-contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const triggerBtn = e.target.querySelector('.transmit-btn');
    triggerBtn.textContent = 'Transmitting...';
    triggerBtn.disabled = true;

    const payload = {
        name: document.getElementById('form-name').value,
        email: document.getElementById('form-email').value,
        message: document.getElementById('form-message').value
    };

    try {
        const networkResponse = await fetch('/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (networkResponse.ok) {
            alert('Transmission Complete. Data packet processed successfully.');
            document.getElementById('my-contact-form').reset();
        } else {
            alert('Transmission error. Server node rejected the packet structure.');
        }
    } catch (err) {
        alert('Network routing failed. Check active uplink state.');
    } {
        triggerBtn.textContent = 'Transmit Payload';
        triggerBtn.disabled = false;
    }
});

