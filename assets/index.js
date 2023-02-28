import randomChange from './random.js';

let random = document.getElementById("random");
let overlay = document.getElementById("overlay");
let magic = document.getElementById("magic");
let anchorTags = document.getElementsByTagName("a");

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


const ANIMATION_TIME_PER_CIRCLE = 2500; /* ms */
const CIRCLE_DIAMETER = 3; /* rem */

let GLOBAL_COUNTER = 0;

createNewCircle = (x = window.innerWidth / 2, y = window.innerHeight / 2) => {
    let newCircle = document.createElement('div');
    newCircle.classList.add(`circle`, `circle-${GLOBAL_COUNTER++}`);

    /* set the orginating circle from x and y coordinate */
    newCircle.style.setProperty('top', `calc(${y}px - ${CIRCLE_DIAMETER / 2}rem`);
    newCircle.style.setProperty('left', `calc(${x}px - ${CIRCLE_DIAMETER / 2}rem`);

    body.appendChild(newCircle);
    setTimeout(() => body.removeChild(newCircle), ANIMATION_TIME_PER_CIRCLE);
}

anchorTags.addEventListener('click', (event) => {
    createNewCircle(event.x, event.y);
});