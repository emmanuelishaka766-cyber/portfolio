// --- High-Response Content Module Core Mapping ---
const guideDatabase = {
    about: {
        title: "Development Philosophy & Luxury Spacing",
        intro: "Crafting modern, responsive web experiences optimized explicitly for maximum client conversion metrics and effortless readability.",
        steps: [
            {
                heading: "Discovery & Structure Mapping",
                desc: "We analyze your target commercial goals and design architectural blueprints configured precisely to transform passive visitors into paying customers.",
                img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
            },
            {
                heading: "Clean Class & Performance Production",
                desc: "Every code string, component alignment, and margin spacing value is meticulously engineered from raw specifications to eliminate layout shifts and guarantee swift mobile load times.",
                img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
            }
        ]
    },
    projects: {
        title: "Premier Production Case Studies",
        intro: "A deep dive into functional applications designed to maintain exceptional UI/UX standards cleanly.",
        steps: [
            {
                heading: "Modern Dashboard Interfaces",
                desc: "Fully responsive analytical tracking hubs engineered to manage dynamic data visualization streams and remote module interactions natively.",
                img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
            },
            {
                heading: "High-Converting Transaction Pipelines",
                desc: "Handcrafted e-commerce checkout flows built cleanly for secure e-payment integrations and automated transactional response handling.",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            }
        ]
    },
    skills: {
        title: "Technical Capabilities Matrix",
        intro: "Specific operational frameworks and performance benchmarks deployed fluently to optimize commercial results.",
        steps: [
            {
                heading: "Class & Luxury Interface Design Systems",
                desc: "Mastery of advanced semantic DOM structures, fluid grid layouts, and custom CSS asset compilation configured explicitly for premium brand perception.",
                img: ""
            },
            {
                heading: "Integrated Microservice Architecture",
                desc: "Engineering native backend routines to communicate transaction requests securely via serverless hooks and decoupled database endpoints instantly.",
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
        <div class="card-status-bar">
            <span class="status-pill">SPEC_NODE: DEPLOYED</span>
            <span class="system-time">FILE_ID // ${key.toUpperCase()}</span>
        </div>
        <h2 class="guide-main-title">${data.title}</h2>
        <p class="guide-intro-text">${data.intro}</p>
        <div class="step-by-step-timeline">
            ${stepsHTML}
        </div>
    `;
    
    // Smoothly reposition view for immediate focus (crucial for class)
    targetDeck.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
