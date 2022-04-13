var song1 = "song.mp3";
var song2 = "song.mp3";
var canvas;

function preload() {
    loadSound(song1);
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    var video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(capture, 0, 0, 600, 500);
}