// --- Interactive Pinterest Panel Registry Data ---
const techRegistryData = {
    about: {
        title: "ABOUT ME",
        html: `
            <p>I design and build intuitive, high-performance web applications that make people's lives simpler.</p>
            <div class="project-gallery">
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80" alt="Workspace Design">
                </div>
                <p>Focused on clean execution, modern layout systems, and responsive user experiences.</p>
            </div>
        `
    },
    projects: {
        title: "PROJECT GALLERY",
        html: `
            <p>Click on any component blueprint to view live documentation tracking.</p>
            <div class="project-gallery">
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80" alt="Web App Dashboard Code">
                </div>
                <p><strong>Dashboard Core Engine:</strong> A full-stack data system managing web transactions cleanly.</p>
                
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=500&q=80" alt="UI Design System">
                </div>
                <p><strong>Interface Systems:</strong> Custom responsive layout architectures mimicking high-end UI blocks.</p>
            </div>
        `
    },
    skills: {
        title: "CORE SKILLS",
        html: `
            <p>Meticulous system development across multiple technical interfaces:</p>
            <ul>
                <li><strong>HTML5 / CSS3 Layouts:</strong> Creating fluid grids, clean typography tracking, and flexbox matrices.</li>
                <li><strong>JavaScript Core:</strong> Intercepting user events and rendering asynchronous components.</li>
                <li><strong>Serverless Architecture:</strong> Processing API endpoints and routing payload data dynamically.</li>
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
    document.getElementById('doc-drawer').classList.remove('remove');
    document.getElementById('doc-drawer').classList.remove('active');
    document.getElementById('drawer-overlay').classList.remove('active');
}
