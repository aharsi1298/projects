var song1 = "song.mp3";
var canvas;
var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;
var playing = false;
var result;

function preload() {
    song1 = loadSound("song.mp3");
    song2 = loadSound("song.mp3");
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
    fill("#FF0000");
    stroke("#FF0000");
    playing = song1.isPlaying() ? true : song2.isPlaying();
    if (result[0].keypoints[9].score > 0.2) {
        circle(leftWristX, leftWristY, 20);
        song2.stop();
    }
    if (!song1.isPlaying()) {
        song1.play();
        document.getElementById("song").innerHTML = "Song.mp3";
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
    }
}