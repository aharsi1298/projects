var status = false;
var img = null;
var objectdetector = null;
var result = [];

function preload() {
    img = loadImage("showcase.jpg");
}

function setup() {
    var canvas = createCanvas(580, 261);
    canvas.center("horizontal");
    objectdetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function draw() {
    image(img, 0, 0, 580, 261);
    if (status)
        for (var i = 0; i < result.length; i++) {
            percentage = Number(result[i].confidence * 100).toFixed(2);
            //textSize(32);
            stroke('red');
            fill('red');
            text(`${result[i].label} ${percentage}%`, (result[i].x / 8) - 15, (result[i].y / 8) - 15);
            noFill();
            rect((result[i].x / 8), result[i].y / 8, result[i].width / 8, result[i].height / 8);
        }
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