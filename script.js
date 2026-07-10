const guideDatabase = {
    about: {
        title: "Identity & Core System Specs",
        intro: "A live breakdown mapping out my execution background, active development standards, and creative layout solutions.",
        steps: [
            {
                num: "01",
                heading: "Engineering Profile Alignment",
                desc: "I specialize in building modular, component-based front-end layout frames optimized for high user engagement and speed.",
                img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
            },
            {
                num: "02",
                heading: "Operational Matrix Standards",
                desc: "Every script, structure alignment, and padding tracking metric is engineered precisely from raw code definitions for absolute layout stability.",
                img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
            }
        ]
    },
    projects: {
        title: "Dynamic Functional Showcase",
        intro: "Step-by-step visual display of functional interfaces, production builds, and structured core components.",
        steps: [
            {
                num: "01",
                heading: "Distributed Serverless Logic",
                desc: "Clean modular routing engines structured explicitly to dispatch form data tokens cleanly to secure remote mail servers.",
                img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
            },
            {
                num: "02",
                heading: "Visual UI Deck Integration",
                desc: "A responsive content workflow mirroring established tutorial-based index columns to emphasize readability.",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            }
        ]
    },
    skills: {
        title: "Core Infrastructure Capabilities",
        intro: "Current system configurations detailing languages, libraries, and design matrices deployed fluently.",
        steps: [
            {
                num: "01",
                heading: "Semantic DOM & Structural Layouts",
                desc: "Advanced execution of fluid document blueprints, utilizing modern layout algorithms to handle responsive viewport resizing natively.",
                img: ""
            },
            {
                num: "02",
                heading: "Asynchronous Interactive Routines",
                desc: "Writing streamlined event listeners in vanilla scripts to modify browser display states and route form objects instantly.",
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
        <div class="card-status-bar">
            <span class="status-pill">SYS_STATUS: DATA_LOADED</span>
            <span class="system-time">SECTOR // ${key.toUpperCase()}</span>
        </div>
        <h2 class="guide-main-title">${data.title}</h2>
        <p class="guide-intro-text">${data.intro}</p>
        <div class="step-by-step-timeline">
            ${stepsHTML}
        </div>
    `;
    
    targetDeck.scrollIntoView({ behavior: 'smooth' });
}
