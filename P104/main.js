var video = document.getElementById("webcam");

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.srcObject = stream;
        console.log("b");
        console.log(stream);
    }).catch(function(error) {
        alert("Something went wrong! Error: " + error);
    })
}

function takeSnapshot() {
    var canvas = document.getElementById("image");
    var ctx = canvas.getContext("2d");

    ctx.drawImage(video, 0, 0, 390, 292.5);
}

console.log(`ml5 version: ${ml5.version}`);

var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EdouiQFqW/', modelLoaded);

function modelLoaded() {
    console.log('Model loaded!');
}