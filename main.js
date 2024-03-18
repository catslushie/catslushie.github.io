console.log("hey");

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

var isDrawing = false;
var touchX, touchY;

const MAIN_MOUSE_BUTTON = 0;

canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", mouseUp);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("touchstart", startDrawing);
canvas.addEventListener("touchend", endDrawing);
canvas.addEventListener("touchmove", drawTouch);

setlineprops(); 

function setlineprops() {
    ctx.lineWidth = 4;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
}

function mouseDown() {
    isDrawing = true;
    console.log("mouse pressed: " + isDrawing);
    draw();
}

function mouseUp(){
    isDrawing = false;
    console.log("mouse pressed: " + isDrawing);
    ctx.beginPath();
}

function draw(){
    if(!isDrawing) return;

    const x = event.clientX - canvas.offsetLeft; // Get the mouse X coordinate relative to the canvas
    const y = event.clientY - canvas.offsetTop; // Get the mouse Y coordinate relative to the canvas

    ctx.lineTo(x, y); 
    ctx.stroke(); 
}

function startDrawing(event) {
    event.preventDefault();
    isDrawing = true;
    getTouchPos(event);
    ctx.beginPath();
    ctx.moveTo(touchX, touchY);
}

function endDrawing(){
    event.preventDefault();
    isDrawing = false;
    ctx.beginPath();
}

function drawTouch(event){
    event.preventDefault();
    if(!isDrawing) return;
    getTouchPos(event);
    ctx.lineTo(touchX, touchY); 
    ctx.stroke(); 
}

function getTouchPos(event) {
    const rect = canvas.getBoundingClientRect();
    touchX = event.touches[0].clientX - rect.left;
    touchY = event.touches[0].clientY - rect.top;
}
