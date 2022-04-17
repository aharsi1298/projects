var video;
var noseX;
var noseY;
var filter;

function preload() {
    filter = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
    var canvas = createCanvas(640, 420);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    var poseNet = ml5.poseNet(video, () => console.log("PoseNet"));
    poseNet.on('pose', GUTPoses);
}

function draw() {
    image(video, 0, 0, 640, 420);
    image(filter, noseX - 37, noseY - 30, 74, 50);
}

function snap() {
    saveCanvas();
}

function GUTPoses(results) {
    if (results.length > 0) {
        if (results[0].pose.keypoints[0].score > 0.2) {
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
        }
    }
}