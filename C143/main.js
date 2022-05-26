var video = null;
var objects = [];
var pnosenet = null;

function preload() {
    world_start = loadSound("world_start.wav");
    mario_jump = loadSound("jump.wav");
    mario_coin = loadSound("coin.wav");
    mario_gameover = loadSound("gameover.wav");
    mariodie = loadSound("mariodie.wav");
    mario_kick = loadSound("kick.wav");
    setSprites();
    MarioAnimation();
}

function setup() {
    canvas = createCanvas(1240, 336);
    canvas.parent('canvas');

    video = createCapture(VIDEO);
    video.size(398, 256);
    video.parent("game_console");

    pnosenet = ml5.poseNet(video, modelLoaded);

    instializeInSetup(mario);
}

function modelLoaded() {
    pnosenet.on("pose", GUTPoses);
}

function draw() {
    game()
}

function GUTPoses(results) {
    if (results.length > 0) {
        objects = results;
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}