const randomChange = [
    "I admire people who think deeply and feed their minds with knowledge, who strengthen their intellect, who can control their emotions, people with whom one can delve into a soul-like dimension.",
    "I like people with emotional and intellectual depth, speaking so passionately about everything they believe is honestly so beautiful.",
    "If someone makes you happy, make them happier — Practicing to live up to this mindset.",
    "I think the greatest form of intimacy is to understand someone.",
    "Spending the weekends to build the life I admire, not to escape the life I have.",
    "I believe regret is much more painful than failure; so I prefer to take the first step. I regret the times I haven't. I hope I take the first step with you.",
    "The entire point of life is to be silly, weird and realy really kind.",
    "I am a different person to different people. Annoying to one, talented to another. Quiet to a few, unknown to a lot. But who am I, to me?",
];

let random = document.getElementById("random");
let overlay = document.getElementById("overlay");
let magic = document.getElementById("magic");

window.addEventListener('load', () => {
    random.textContent = randomChange[Math.floor(Math.random() * randomChange.length)];
})

setRandomColor = () => {
    let randomColor = "";
    let chars = "0123456789abcdef";
    for(i = 0; i < 6; i++)
        randomColor += chars[Math.floor(Math.random() * 16)];
        
    overlay.style.display = "block";
    overlay.style.backgroundColor = "#" + randomColor + "10";
}

let id; 

magic.addEventListener('mouseenter', () => {
    id = setInterval(() => {
        console.log("wow")
        setRandomColor();
    }, 500);
})

magic.addEventListener('mouseleave', () => {
    clearInterval(id);
    overlay.style.display = "none";
})
