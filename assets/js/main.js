// selectors
const wallCont = document.querySelector(".maze-walls");

const playButton = document.querySelector(".play");
const playCont = document.querySelector(".play-cont");

const retryButton = document.querySelector(".retry");
const retryCont = document.querySelector(".retry-cont");

// listeners
window.onmousemove = logMouseMove;
playButton.addEventListener("click", startMaze);

// functions
function logMouseMove(e) {
    e = event || window.event;
    if (event.target.parentElement == wallCont) {
        console.log("hit wall");
        retryCont.style.display = "block";
    }
}

function startMaze() {
    playCont.style.display = "none";
}

function retryMaze() {
    retryCont.style.opacity = "contents";
}