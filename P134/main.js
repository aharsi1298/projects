Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});

var img = "";
var objectDetector;
var status = "";
var objects = [];
var video;
var alarm;
var isbaby;

function setup() {
    var canvas = createCanvas(380, 380);
    canvas.center("horizontal");
    video = createCapture(VIDEO);
    //video.size(380, 380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload() {
    img = loadImage("madness.png");
    alarm = loadSound("alarm.m4a");
}

function draw() {
    image(video, 0, 0, 380, 380);

    if (status != "" && video.elt.readyState === 4) {
        var r = random(255);
        var b = random(255);
        var g = random(255);
        objectDetector.detect(video, GUTResults);
        var detected;
        isbaby = false;
        for (var i = 0; i < objects.length; i++) {
            if (objects[i].label == "person") {
                document.getElementById("status").innerHTML = "Baby Detected";
                //document.getElementById("number-of-objects").innerHTML = `Number of objects detected are : ${objects.length}`;

                fill("red");
                var percent = floor(objects[i].confidence * 100);
                text(`Person ${percent}%`, objects[i].x + 15, objects[i].y + 15);
                noFill();
                stroke("red" /*r, g, b*/ );
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                noStroke();
                isbaby = true;
            } else {
                fill("red");
                var percent = floor(objects[i].confidence * 100);
                text(`${objects[i].label} ${percent}%`, objects[i].x + 15, objects[i].y + 15);
                noFill();
                stroke("red" /*r, g, b*/ );
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                noStroke();
            }
            //
        }
        if (!isbaby) {
            document.getElementById("status").innerHTML = "Baby Not Detected";
            if (!alarm.isPlaying()) alarm.play();
        } else {
            alarm.stop();
        }
    }
    /*

        fill("#FF0000");
        text("Dog", 45, 75);
        noFill();
        stroke("#FF0000");
        rect(30, 60, 450, 350);

        fill("#FF0000");
        text("Cat", 320, 120);
        noFill();
        stroke("#FF0000");
        rect(300, 90, 270, 320);*/
}

function modelLoaded() {
    status = "loaded";
}

function GUTResults(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    objects = results;
}