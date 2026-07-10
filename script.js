const guideDatabase = {
    about: {
        title: "Development Solutions & Process",
        intro: "How I handle your technical development from blueprint concepts to highly optimized deployment layers.",
        steps: [
            {
                num: "01",
                heading: "Discovery & Structure Mapping",
                desc: "We analyze your target business goals and design layout mockups explicitly configured to turn your site traffic into direct inbound leads.",
                img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
            },
            {
                num: "02",
                heading: "Clean High-Performance Production",
                desc: "Handcrafting clean code strings using semantic layers. This eliminates layout shifts and guarantees fast load times on mobile metrics.",
                img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
            }
        ]
    },
    projects: {
        title: "Live Production Case Studies",
        intro: "A deep dive into functional systems designed to manage high usage rates cleanly.",
        steps: [
            {
                num: "01",
                heading: "Modern Dashboard User Interfaces",
                desc: "Fully responsive tracking centers engineered to aggregate dynamic analytics and control web modules natively.",
                img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
            },
            {
                num: "02",
                heading: "Integrated High-Converting Checkout Pipelines",
                desc: "Asynchronous transmission scripts linked cleanly to form targets to process inbound communications instantly.",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            }
        ]
    },
    skills: {
        title: "Platform Capabilities Index",
        intro: "The specific operational framework systems I build to handle high-performance client demands.",
        steps: [
            {
                num: "01",
                heading: "Fluid Frontend Design Systems",
                desc: "Mastery of modern responsive layouts, custom grid structures, and precise CSS components designed to capture consumer attention.",
                img: ""
            },
            {
                num: "02",
                heading: "Automated Data Processing Systems",
                desc: "Integrating native script loops to communicate with third-party service hooks, enabling lightning-fast responses without losing information.",
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
            <span class="status-pill">SPEC_NODE: LOADED</span>
            <span class="system-time">CORE_FILE // ${key.toUpperCase()}</span>
        </div>
        <h2 class="guide-main-title">${data.title}</h2>
        <p class="guide-intro-text">${data.intro}</p>
        <div class="step-by-step-timeline">
            ${stepsHTML}
        </div>
    `;
    
    targetDeck.scrollIntoView({ behavior: 'smooth' });
}
