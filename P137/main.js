var status = false;
var video = null;
var objectdetector = null;
var value = null;
var objects = [];

function setup() {
    var canvas = createCanvas(380, 380);
    canvas.center("horizontal");
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function start() {
    objectdetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    value = document.getElementById("object_name").value;
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
}

function draw() {
    image(video, 0, 0, 380, 380);
    if (status == 'true') {
        objectdetector.detect(video, GUTResults);
        for (var i = 0; i < objects.length; i++) {
            var percentage = Number(objects[i].confidence * 100).toFixed(2);
            fill("red");
            text(`${String(objects[i].label).charAt(0).toUpperCase() + String(objects[i].label).slice(1)} ${percentage}%`, objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            noStroke();

            if (String(objects[i].label).toLowerCase() === String(value).toLowerCase()) {
                video.stop();
                objectdetector.detect(GUTResults);
                var synth = window.speechSynthesis;
                var utterThis = new SpeechSynthesisUtterance(`${value} Found`);
                synth.speak(utterThis);
                document.getElementById("object_status").innerHTML = `${value.charAt(0).toUpperCase() + value.slice(1)} Found`;
            } else
                document.getElementById("object_status").innerHTML = `${value.charAt(0).toUpperCase() + value.slice(1)} Not Found`;
        }
    }
}

function GUTResults(error, results) {
    if (error) console.error(error);
    else {
        objects = results;
    }
}