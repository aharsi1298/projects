var mouseEvent = "empty";
var prevPosX, prevPosY;
var currPosX, currPosY;

var width = screen.width;

var newWidth = width - 70;
var newHeight = screen.height - 300;

if("ontouchstart" in document.documentElement) {  // if(width < 992) {
  canvas.width = newWidth;
  canvas.height = newHeight;
  document.body.style.overflow = "hidden";
}

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

canvas.addEventListener("touchstart", myToucheStart);

function myToucheStart(e) {
  color = document.getElementById("color").value;
  linewidth = document.getElementById("width").value;

  prevPosX = e.touches[0].clientX - canvas.offsetLeft;
  prevPosY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", myToucheMove);

function myToucheMove(e) {
  currPosX = e.touches[0].clientX - canvas.offsetLeft;
  currPosY = e.touches[0].clientY - canvas.offsetTop;

  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = linewidth;
  ctx.moveTo(prevPosX, prevPosY);
  ctx.lineTo(currPosX, currPosY);
  ctx.stroke();
  prevPosX = currPosX;
  prevPosY = currPosY;
}