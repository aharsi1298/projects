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

function GUTPoses(results) {
    result = results;
    if (results.length > 0) {
        leftWristX = results[0].pose.keypoints[9].position.x;
        leftWristY = results[0].pose.keypoints[9].position.y;
        rightWristX = results[0].pose.keypoints[10].position.x;
        rightWristY = results[0].pose.keypoints[10].position.y;
    }
}