var status = false;
var video = null;
var objectdetector = null;
var value;

function setup() {
    var canvas = createCanvas(380, 380);
    canvas.center("horizontal");
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function start() {
    objectdetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    value = document.getElementById("object_name").value;
}

function modelLoad() {
    console.log("Model Loaded");
    status = true;
}

function draw() {
    image(video, 0, 0, 380, 380);
}