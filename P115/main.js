var video;
var noseX;
var noseY;

function preload() {}

function setup() {
    var canvas = createCanvas(640, 420);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    var poseNet = ml5.poseNet(video, () => console.log("PoseNet"));
    poseNet.on('pose', GUTPoses);
}

function draw() {}

function snap() {}

function GUTPoses(results) {
    if (results.length > 0) {
        if (results[0].pose.keypoints[0].score > 0.2) {
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
        }
    }
}