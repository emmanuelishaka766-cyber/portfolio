// --- Tutorial Guide Repository (Updates main module on index link selections) ---
const guideDatabase = {
    about: {
        title: "How to Build Full-Stack Solutions",
        intro: "An introduction detailing my technical background, core philosophies, and approach to scaling web application architecture.",
        steps: [
            {
                num: "Step 1",
                heading: "Background Profiling",
                desc: "Specializing in crafting smooth, responsive front-end structures alongside reliable asynchronous background data channels.",
                img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
            },
            {
                num: "Step 2",
                heading: "Workflow Standards",
                desc: "Focusing on meticulous code architectures, minimizing asset load latency, and improving visibility across layouts.",
                img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
            }
        ]
    },
    projects: {
        title: "How to Build a Distributed Messaging Core",
        intro: "A step-by-step breakdown of a production project showcasing decoupled endpoints and secure transaction management workflows.",
        steps: [
            {
                num: "Step 1",
                heading: "Construct Application Infrastructure",
                desc: "Configure serverless entryways inside an independent routing file tree to safely process data packages sent by forms.",
                img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
            },
            {
                num: "Step 2",
                heading: "Integrate Third-Party Delivery APIs",
                desc: "Connect backend delivery routes cleanly with secure validation keys, allowing alerts to be transmitted instantly to email locations.",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            }
        ]
    },
    skills: {
        title: "How to Initialize the Core Engine Stack",
        intro: "A reference guide detailing specific tools used to maintain high performance across digital real estate solutions.",
        steps: [
            {
                num: "Step 1",
                heading: "Structure Layout Modules Natively",
                desc: "Deploy semantic elements alongside fluid styling parameters to build robust masonry matrices or two-column directory grids.",
                img: ""
            },
            {
                num: "Step 2",
                heading: "Refine Interface Interactivity",
                desc: "Write native script listeners to capture user events and alter data displays without full-screen browser refreshes.",
                img: ""
            }
        ]
    }
};

function showTrack(key) {
    const data = guideDatabase[key];
    if (!data) return;

    let stepsHTML = '';
    data.steps.forEach(step => {
        let mediaHTML = step.img ? `<div class="step-media-box"><img src="${step.img}" alt="${step.heading}"></div>` : '';
        stepsHTML += `
            <div class="timeline-step">
                <div class="step-number-badge">${step.num}</div>
                <div class="step-details">
                    <h3>${step.heading}</h3>
                    <p>${step.desc}</p>
                    ${mediaHTML}
                </div>
            </div>
        `;
    });

    const targetDeck = document.getElementById('tutorial-view-deck');
    targetDeck.innerHTML = `
        <h2 class="guide-main-title">${data.title}</h2>
        <p class="guide-intro-text">${data.intro}</p>
        <div class="step-by-step-timeline">
            ${stepsHTML}
        </div>
    `;
    
    // Smooth scroll directly to view on mobile devices
    targetDeck.scrollIntoView({ behavior: 'smooth' });
}

// --- Contact Form Transmission Gateway ---
document.getElementById('my-contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('.transmit-btn');
    btn.textContent = 'Transmitting Payload...';
    btn.disabled = true;

    try {
        const res = await fetch('/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: document.getElementById('form-name').value,
                email: document.getElementById('form-email').value,
                message: document.getElementById('form-message').value
            })
        });

        if (res.ok) {
            alert('Transmission Success. Payload data node updated.');
            document.getElementById('my-contact-form').reset();
        } else {
            alert('Routing node refused transmission packet parameters.');
        }
    } catch (err) {
        alert('Network interruption encountered. Link offline.');
    } finally {
        btn.textContent = 'Transmit Payload';
        btn.disabled = false;
    }
});
