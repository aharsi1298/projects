var status = false;
var img = null;
var objectdetector = null;
var result;

function preload() {
    img = loadImage("bedroom.jpg");
}

function setup() {
    var canvas = createCanvas(640, 420);
    canvas.center();
    objectdetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded() {
    status = true;
    objectdetector.detect(img, GUTResults);
}

function GUTResults(error, results) {
    if (error) {
        console.error(error);
    }
    result = results;
}