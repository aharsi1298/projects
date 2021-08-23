var mouseEvent = "empty";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var color = "red";
var radius = 20;
var linewidth = 2;

canvas.addEventListener("mousedown", myMiceDown);

function myMiceDown(e) {
  color = document.getElementById("color").value;
  linewidth = document.getElementById("width").value;
  radius = document.getElementById("rad").value;

  mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup", myMiceUp);

function myMiceUp(e) {
  mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", myMiceLeave);

function myMiceLeave(e) {
  mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", myMiceMove);

function myMiceMove(e) {
  var x = e.clientX - canvas.offsetLeft;
  var y = e.clientY - canvas.offsetTop;
  if(mouseEvent === "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = linewidth;
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    ctx.stroke();
  }
}