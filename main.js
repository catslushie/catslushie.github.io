console.log("hey");

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

var mousePressed = false;
const MAIN_MOUSE_BUTTON = 0;

canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", mouseUp);
canvas.addEventListener("mousemove", draw);


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