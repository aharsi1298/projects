var status = false;
var img = null;
var objectdetector = null;
var result = [];

function preload() {
    img = loadImage("bedroom.jpg");
}

function setup() {
    var canvas = createCanvas(245, 281);
    canvas.center("horizontal");
    objectdetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function draw() {
    image(img, 0, -263, 245, 544);
    if (status)
        for (var i = 0; i < result.length; i++) {
            percentage = Number(result[i].confidence * 100).toFixed(2);
            //textSize(32);
            stroke('red');
            fill('red');
            text(`${result[i].label} ${percentage}%`, (result[i].x / 6) + 15, (result[i].y / 6) + 15);
            noFill();
            rect(result[i].x / 6, result[i].y / 6, result[i].width / 6, result[i].height / 6);
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