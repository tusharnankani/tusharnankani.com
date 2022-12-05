import randomChange from './random.js';

let random = document.getElementById("random");
let overlay = document.getElementById("overlay");
let magic = document.getElementById("magic");

window.addEventListener('load', () => {
    random.textContent = randomChange[Math.floor(Math.random() * randomChange.length)];
    console.clear();
})

let setRandomColor = () => {
    let randomColor = "";
    let chars = "0123456789abcdef";
    for(let i = 0; i < 6; i++)
        randomColor += chars[Math.floor(Math.random() * 16)];
    
    overlay.style.display = "block";
    overlay.style.backgroundColor = "#" + randomColor + "12";
}

let id; 

magic.addEventListener('mouseenter', () => {
    console.log(
        '%cYou are staring into a colourful void. Want to dive deeper?',
        'background: #f4f4f4; color: #001d3d; padding: 10px; margin: 20px 0px; font-size: 16px;  border-radius: 2px'
    );
    id = setInterval(() => {
        setRandomColor();
    }, 500);
})

magic.addEventListener('mouseleave', () => {
    clearInterval(id);
    overlay.style.display = "none";
    console.clear();
})
