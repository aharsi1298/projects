var song1;
var song2;
var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;
var leftWristScore = 0;
var rightWristScore = 0;
var playing = false;
var result = [];
var video

function preload() {
    song1 = loadSound("peter pan.m4a");
    song2 = loadSound("harry potter.m4a");
}

function setup() {
    var canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    var poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", GUTPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
    playing = song1.isPlaying();
    if (result.length > 0) {
        if (result[0].pose.keypoints[9].score > 0.2) {
            circle(leftWristX, leftWristY, 20);
            song2.stop();

            if (!song1.isPlaying()) {
                song1.play();
                document.getElementById("song").innerHTML = "Peter Pan";
            }
        }
        if (result[0].pose.keypoints[10].score > 0.2) {
            circle(rightWristX, rightWristY, 20);
            song1.stop();
            if (!song2.isPlaying()) {
                song2.play();
                document.getElementById("song").innerHTML = "Harry Potter";
            }
        }
    }
}

function modelLoaded() {}

function GUTPoses(results) {
    result = results;
    if (results.length > 0) {
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        leftWristScore = results[0].pose.keypoints[9].score;
        rightWristScore;
    }
}