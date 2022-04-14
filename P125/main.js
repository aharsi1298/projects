var video;

var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;

var result;

function setup() {
    video = createCapture(VIDEO);
    video.size(640, 420);
    var canvas = createCanvas(640, 420);
    canvas.position(640);
    background('white');
    var posenet = ml5.poseNet(video, () => {});
    posenet.on('pose', GUTPoses);
}

function draw() {
    background('black');
    textSize(Math.floor(Math.abs(leftWristX - rightWristX)));
    fill("#FF0000");
    text("Aharsi", 30, 150);
}

function GUTPoses(results) {
    result = results;
    if (results.length > 0) {
        if (results[0].pose.keypoints[9].score > 0.2) {
            leftWristX = results[0].pose.keypoints[9].position.x;
            leftWristY = results[0].pose.keypoints[9].position.y;
        }
        if (results[0].pose.keypoints[10].score > 0.2) {
            rightWristX = results[0].pose.keypoints[10].position.x;
            rightWristY = results[0].pose.keypoints[10].position.y;
        }
    }
}