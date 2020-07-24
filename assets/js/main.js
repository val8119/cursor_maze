// selectors
const body = document.querySelector(".body")
const wallCont = document.querySelector(".maze-walls");

const playButton = document.querySelector(".play");
const playCont = document.querySelector(".play-cont");

const retryButton = document.querySelector(".retry");
const retryCont = document.querySelector(".retry-cont");

const finishButton = document.querySelector(".finish");

// variables
var isPlaying = false;

// listeners
window.onmousemove = logMouseMove;
playButton.addEventListener("click", startMaze);
retryButton.addEventListener("click", retryMaze);

// functions
function logMouseMove(e) {
    e = event || window.event;
    // console.log(event.target)
    if (event.target.parentElement == wallCont && isPlaying || event.target == body && isPlaying) {
        console.log("hit wall");
        retryCont.style.display = "block";
        finishButton.style.display = "none";
        isPlaying = false;
    }
}

function startMaze() {
    playCont.style.display = "none";
    finishButton.style.display = "block";
    isPlaying = true;
}

function retryMaze() {
    retryCont.style.display = "none";
    finishButton.style.display = "block";
    isPlaying = true;
}