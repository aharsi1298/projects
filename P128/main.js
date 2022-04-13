var song1 = "song.mp3";
var song2 = "song.mp3";
var canvas;
var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;

function preload() {
    loadSound(song1);
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    var video = createCapture(VIDEO);
    video.hide();
    var poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", GUTPoses);
}

function draw() {
    image(capture, 0, 0, 600, 500);
}

function modelLoaded() {}

function GUTPoses(results) {
    if (results.length > 0) {
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}