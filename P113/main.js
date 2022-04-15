var video;
var timer = null;

function setup() {
    var canvas = createCanvas(640, 420);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 420);
    /*if (timer !== null) {
        fill(color(256 - timer));
        stroke(color(256 - timer));
        rect(0, 0, 640, 420);
        noFill();
        noStroke();
    
}*/
}

function snap() {
    for (let i = 0; i < 256; i++) {
        sleep(5).then(() => { timer++; })
    }
    timer = null;
    saveCanvas();
}

function sleep(millisecondsDuration) {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecondsDuration);
    })
}