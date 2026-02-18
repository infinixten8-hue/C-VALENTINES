const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const message = document.getElementById('message');
const video = document.getElementById('video');
const backButton = document.getElementById('back');
const funnyPic = document.getElementById('funnyPic');
const container = document.getElementById('mainContainer');
const results = document.getElementById('results');

let scale = 1;
let noCount = 0;

noButton.addEventListener('click', () => {
    scale += 0.25;
    yesButton.style.transform = `scale(${scale})`;
    noCount++;

    if (noCount >= 3) {
        funnyPic.style.display = 'block';
        funnyPic.style.transform = `scale(${scale})`;
    }
});

yesButton.addEventListener('click', () => {
    container.style.display = 'none';
    results.style.display = 'flex';
    
    setTimeout(() => {
        message.style.opacity = 1;
        video.style.opacity = 1;
    }, 50);
});

backButton.addEventListener('click', () => {
    location.reload(); 
});

function createFloatingEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("heart");
    const emojis = ["💖", "🥶", "✨", "🌸"];
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.fontSize = Math.random() * 20 + 15 + "px";
    emoji.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 5000);
}

setInterval(createFloatingEmoji, 400);