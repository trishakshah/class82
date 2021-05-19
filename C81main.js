canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent ="empty";
var lastX, lastY;
var colour = "white";
var width = 1;
canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e){
    var colour=document.getElementById("colourInput").value;
    var width=document.getElementById("widthInput").value;
    var mouseEvent="mousedown";
}

canvas.addEventListener("mouseup",mymouseup);

function mymouseup(e){
    var mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",mymouseleave);

function mymouseleave(e){
    var mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",mymousemove);

function mymousemove(e){
    var currentX=e.clientX-canvas.offsetLeft;
    var currentY=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=width;
        console.log("Last X and Y co-ordinates = ");
        console.log("X = "+lastX+", Y = "+lastY);
        ctx.moveTo(lastX,lastY);
        console.log("Current X and Y co-ordinates = ");
        console.log("X = "+currentX+", Y = "+currentY);
        ctx.lineTo(currentX,currentY);
        ctx.stroke();
    }
        var lastX=currentX;
        var lastY=currentY;
}