
// ====== UI DOM SELECTORS ======
const tabButtons = document.querySelectorAll('.tab-btn');
const gridViewport = document.getElementById('gridViewport');
const scrollTrigger = document.getElementById('scrollTrigger');
const globalSearch = document.getElementById('globalSearch');
const postInput = document.getElementById('postInput');
const submitPostBtn = document.getElementById('submitPostBtn');
const followSuggestions = document.getElementById('followSuggestions');
const calcDisplay = document.getElementById('calcDisplay');
const trendList = document.getElementById('trendList');

// Chat DOM Selectors
const chatPopup = document.getElementById('chatPopup');
const chatActiveUser = document.getElementById('chatActiveUser');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const chatSendBtn = document.getElementById('chatSendBtn');

// ====== SECURE SUPABASE INITIALIZATION ENGINE ======
// Replace placeholders with your actual keys from the Supabase Project Dashboard Settings
const SUPABASE_URL = "https://your-project-id.supabase.co"; 
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."; 
const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

let currentUserId = "alex_rivers"; // Client session handle account
let activeChatUser = "";
let chatChannel = null;

// ====== IDENTITY & TREND DATA REPOSITORIES ======
const firstNames = ["Liam", "Olivia", "Noah", "Emma", "Oliver", "Ava", "Elijah", "Charlotte", "William", "Sophia", "James", "Amelia", "Benjamin", "Isabella", "Lucas", "Mia", "Henry", "Evelyn", "Alexander", "Harper"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin"];

const baseHandles = {
    tech: ["dev", "coder", "pixel", "stack", "quantum", "cyber", "neural", "bit"],
    trends: ["vibe", "alpha", "matrix", "crypto", "hype", "nexus", "pulse", "echo"],
    sports: ["striker", "hoops", "pace", "atleta", "apex", "score", "runner", "champ"],
    food: ["macro", "chef", "keto", "bites", "flavor", "gourmet", "grill", "cook"],
    dress: ["fits", "streetwear", "style", "mode", "vogue", "threads", "wear", "thrift"]
};

const trendData = {
    tech: ["#JavaScript2026", "#Web3Engine", "#AIModels", "#QuantumStack"],
    trends: ["#AestheticOLED", "#DigitalMatrix", "#NeoVibe", "#HypeDrop"],
    sports: ["#ChampionshipFinals", "#MatchDay", "#ConsistencyMetrics", "#CardioBlock"],
    food: ["#MacroPrep", "#CulinaryArt", "#KetoFuel", "#GourmetPlating"],
    dress: ["#StreetwearFits", "#MonochromeLayout", "#VintageArchival", "#UtilityLayering"]
};

const tabData = {
    tech: { imgKeyword: "computer", captions: ["Just deployed the final optimization sequence to the core engine. System performance running beautifully.", "Building a new open-source framework for fluid web animations. Latency drops are insane.", "Testing the new hardware array today. Multicore processing speeds hitting record highs.", "Debugging this legacy stack code. Got microservices communicating properly."] },
    trends: { imgKeyword: "neon", captions: ["Spotting a major shift in the visual design market. Moving toward deep OLED dark spaces.", "The latest cultural shift is happening entirely in decentralized networks.", "Analyzing the top viral trajectories this week. Digital aesthetics are changing fast.", "Stumbled on a massive aesthetic shift hidden deep within standard UI forums tonight."] },
    sports: { imgKeyword: "sports", captions: ["Unbelievable game tonight. Tactical shifts in the second half completely turned the scoreboard around!", "Early morning training block done. Consistency is the only metric that matters.", "Breaking down the championship footage. Defense won that match, hands down.", "Incredible atmosphere out on the pitch today. This squad is ready for the finals."] },
    food: { imgKeyword: "food", captions: ["Perfected this clean energy meal prep template. High protein, zero mid-day crash.", "Searing standard premium ingredients over high heat. Pure culinary art in the kitchen tonight.", "Spicing up traditional recipes with a modern twist. The flavor profiles are incredible.", "Testing a high-nutrient whole foods menu all week. Energy levels entirely transformed."] },
    dress: { imgKeyword: "apparel", captions: ["Testing some new structured silhouettes and muted color layers for the upcoming season drop.", "Monochrome layouts never miss. Streetwear aesthetics are lean and clean this winter.", "Sourced some amazing vintage archival jackets today. Design quality back then was unmatched.", "Layering clean canvas elements with raw utility boots. Current fit check."] }
};

// ====== TIMELINE SWITCH & NAVIGATION MODULES ======
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        globalSearch.value = ""; 
        scrollTrigger.style.display = "block"; 
        const selectedTab = button.getAttribute('data-tab');
        
        clearAndReloadFeed(selectedTab);
        generateFollowSuggestions(selectedTab);
        generateTrendingTopics(selectedTab);
    });
});

function clearAndReloadFeed(category) {
    const cards = gridViewport.querySelectorAll('.post-card');
    cards.forEach(card => card.remove());
    loadMorePosts(category, 5); 
}

function loadMorePosts(category, count = 3, prepend = false) {
    const currentTab = tabData[category] || tabData['tech'];
    const words = baseHandles[category] || baseHandles['tech'];

    for (let i = 0; i < count; i++) {
        const post = document.createElement('div');
        post.className = 'post-card';
        
        const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
        const fullName = `${randomFirst} ${randomLast}`;
        
        const randomWord = words[Math.floor(Math.random() * words.length)];
        const handleName = `${randomWord}_${randomFirst.toLowerCase()}${Math.floor(Math.random() * 899) + 100}`;
        const captionText = currentTab.captions[Math.floor(Math.random() * currentTab.captions.length)];
        const uniqueId = Math.floor(Math.random() * 900000) + i;
        
        post.innerHTML = `
            <div class="avatar" style="background-image: url('https://i.pravatar.cc/100?img=${(uniqueId % 70) + 1}'); background-size: cover;"></div>
            <div class="post-content">
                <div class="post-user-info" onclick="openChat('${fullName}')" style="cursor: pointer;" title="Click to open encrypted chat">${fullName} <span>@${handleName} • Just now</span></div>
                <p class="post-text">${captionText}</p>
                <div class="post-media-box">
                     <img src="https://loremflickr.com/600/400/${currentTab.imgKeyword}?random=${uniqueId}" alt="Feed Media" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="post-actions">
                    <button class="action-btn like-btn" onclick="toggleLike(this, 42)">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        <span>42</span>
                    </button>
                    <button class="action-btn comment-btn" onclick="openChat('${fullName}')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        <span>7</span>
                    </button>
                </div>
            </div>
        `;
        if (prepend) gridViewport.insertBefore(post, gridViewport.firstChild);
        else gridViewport.insertBefore(post, scrollTrigger);
    }
}

window.toggleLike = function(button, count) {
    button.classList.toggle('liked');
    button.querySelector('span').textContent = button.classList.contains('liked') ? count + 1 : count;
};

// ====== CHAT ENGINE INTERFACES (SUPABASE & BACKEND SYNC) ======
window.openChat = async function(friendUsername) {
    activeChatUser = friendUsername;
    chatActiveUser.textContent = `Secure Chat: ${friendUsername}`;
    chatPopup.classList.add('active');

    if (!supabase) {
        chatMessages.innerHTML = `
            <div class="msg system">Offline Simulation Mode</div>
            <div class="msg friend">Hey! Setup Supabase API keys to turn on live server broadcasting.</div>`;
        return;
    }

    chatMessages.innerHTML = `<div class="msg system">Syncing encrypted cloud messages...</div>`;

    // Fetch past secure chat timeline rows
    const { data: history, error } = await supabase
        .from('messages')
        .select('*')
        .or(`and(sender.eq.${currentUserId},receiver.eq.${friendUsername}),and(sender.eq.${friendUsername},receiver.eq.${currentUserId})`)
        .order('created_at', { ascending: true });

    if (!error && history) {
        chatMessages.innerHTML = "";
        history.forEach(msg => appendMessageHTML(msg.sender === currentUserId ? 'user' : 'friend', msg.content));
    }

    if (chatChannel) supabase.removeChannel(chatChannel);

    // Subscribe to live WebSockets channel
    chatChannel = supabase.channel(`room_${friendUsername}`)
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, payload => {
            const newMsg = payload.new;
            if (newMsg.sender === activeChatUser && newMsg.receiver === currentUserId) {
                appendMessageHTML('friend', newMsg.content);
            }
        })
        .subscribe();
};

window.closeChat = function() {
    chatPopup.classList.remove('active');
    if (chatChannel && supabase) supabase.removeChannel(chatChannel);
};

async function sendChatMessage() {
    const txt = chatInput.value.trim();
    if (txt === "" || !activeChatUser) return;

    appendMessageHTML('user', txt);
    chatInput.value = "";

    if (supabase) {
        await supabase.from('messages').insert([{ sender: currentUserId, receiver: activeChatUser, content: txt }]);
    } else {
        setTimeout(() => appendMessageHTML('friend', "Automated echo verification reply message works!"), 1000);
    }
}

function appendMessageHTML(type, text) {
    const msgElement = document.createElement('div');
    msgElement.className = `msg ${type}`;
    msgElement.textContent = text;
    chatMessages.appendChild(msgElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatSendBtn.addEventListener('click', sendChatMessage);
chatInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendChatMessage(); });

// ====== POST CREATOR ENGINE ======
submitPostBtn.addEventListener('click', () => {
    const text = postInput.value.trim();
    if (text === "") return;

    const activeTab = document.querySelector('.tab-btn.active').getAttribute('data-tab');
    const currentTab = tabData[activeTab];
    const post = document.createElement('div');
    post.className = 'post-card';

    post.innerHTML = `
        <div class="avatar" style="background-image: url('https://i.pravatar.cc/100?img=33'); background-size: cover;"></div>
        <div class="post-content">
            <div class="post-user-info">You <span>@alex_rivers • Space Creator</span></div>
            <p class="post-text">${text}</p>
            <div class="post-media-box">
                 <img src="https://loremflickr.com/600/400/${currentTab.imgKeyword}?random=${Math.floor(Math.random() * 9000)}" alt="Feed Media" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="post-actions">
                <button class="action-btn like-btn" onclick="toggleLike(this, 0)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    <span>0</span>
                </button>
            </div>
        </div>
    `;
    gridViewport.insertBefore(post, gridViewport.firstChild);
    postInput.value = "";
});

// ====== SUGGESTIONS & SIDEBAR POPULATORS ======
function generateFollowSuggestions(category) {
    followSuggestions.innerHTML = "";
    const words = baseHandles[category] || baseHandles['tech'];
    for (let i = 0; i < 3; i++) {
        const fullName = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
        const row = document.createElement('div');
        row.className = 'follow-row';
        row.innerHTML = `
            <div class="avatar" style="background-image: url('https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 50) + 1}'); background-size: cover; cursor: pointer;" onclick="openChat('${fullName}')"></div>
            <div class="follow-info" onclick="openChat('${fullName}')" style="cursor: pointer;">
                <div class="follow-name">${fullName}</div>
                <div class="follow-handle">@${words[Math.floor(Math.random() * words.length)]}_chat</div>
            </div>
            <button class="follow-btn message-link-btn" onclick="openChat('${fullName}')">Chat</button>
        `;
        followSuggestions.appendChild(row);
    }
}

function generateTrendingTopics(category) {
    trendList.innerHTML = "";
    (trendData[category] || trendData['tech']).forEach(tag => {
        const li = document.createElement('div');
        li.className = 'trend-item';
        li.innerHTML = `<div class="trend-tag">${tag}</div><div class="trend-vol">${(Math.random() * 45 + 5).toFixed(1)}K posts trending</div>`;
        trendList.appendChild(li);
    });
}

// ====== SIDEBAR UTILITY CALCULATOR ======
let currentExpression = "";
function pressNum(num) { currentExpression = (currentExpression === "0" && num !== ".") ? num : currentExpression + num; updateCalcDisplay(); }
function pressOp(op) { if (!["+", "-", "*", "/"].includes(currentExpression.slice(-1)) && currentExpression !== "") currentExpression += op; updateCalcDisplay(); }
function clearCalc() { currentExpression = ""; calcDisplay.textContent = "0"; }
function updateCalcDisplay() { calcDisplay.textContent = currentExpression || "0"; }
function calculateResult() {
    if (currentExpression === "") return;
    try { currentExpression = Number(Function(`"use strict"; return (${currentExpression})`)()).toString(); calcDisplay.textContent = currentExpression; } 
    catch { calcDisplay.textContent = "Error"; currentExpression = ""; }
}

// ====== INTEGRATION FILTER & OBSERVERS ======
globalSearch.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    const posts = gridViewport.querySelectorAll('.post-card');
    scrollTrigger.style.display = term !== "" ? "none" : "block";
    posts.forEach(post => {
        const match = post.querySelector('.post-text').textContent.toLowerCase().includes(term) || post.querySelector('.post-user-info').textContent.toLowerCase().includes(term);
        post.style.display = (term === "" || match) ? 'flex' : 'none';
    });
});

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && scrollTrigger.style.display !== "none") {
        loadMorePosts(document.querySelector('.tab-btn.active').getAttribute('data-tab'), 3);
    }
}, { threshold: 0.1 });
observer.observe(scrollTrigger);

// APP APPLICATION STARTING FLOW
clearAndReloadFeed('tech');
generateFollowSuggestions('tech');
generateTrendingTopics('tech');

