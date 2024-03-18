console.log("hey");

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

var mousePressed = false;
var touchDrawing = false;
const MAIN_MOUSE_BUTTON = 0;

canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", mouseUp);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("touchstart", startDrawing);
canvas.addEventListener("touchend", endDrawing);
canvas.addEventListener("touchmove", drawTouch);

function setlineprops() {
    ctx.lineWidth = 4;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    return ctx;
}

function mouseDown() {
    mousePressed = true;
    console.log("mouse pressed: " + mousePressed);
    draw();
}

function mouseUp(){
    mousePressed = false;
    console.log("mouse pressed: " + mousePressed);
    ctx.beginPath();
}

function draw(){
    if(!mousePressed) return;

    const x = event.clientX - canvas.offsetLeft; // Get the mouse X coordinate relative to the canvas
    const y = event.clientY - canvas.offsetTop; // Get the mouse Y coordinate relative to the canvas

    ctx.lineTo(x, y); // Draw a line to the current mouse position
    ctx.stroke(); // Stroke the current path

}

function startDrawing() {
    event.preventDefault();
    touchDrawing = true;
    ctx.lineTo(x,  y);
    ctx.stroke();
}

function endDrawing() {
    touchDrawing = false;
    ctx.beginPath();
}

function drawTouch() {
    if(!mousePressed) return;

    const { x, y } = getCanvasCoordinates(event.touches[0]);
    ctx.lineTo(x, y); // Draw a line to the current mouse position
    ctx.stroke(); // Stroke the current path

}

function getCanvasCoordinates(event) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
        x: (event.pageX - rect.left) * scaleX,
        y: (event.pageY - rect.top) * scaleY
    }
}