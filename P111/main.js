Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

var camera = document.getElementById("vid");

Webcam.attach('#vid');

function snap() {
    Webcam.snap(function(data_uri) {
        document.getElementsByTagName("img").src = data_uri;
    });
}

console.log('ml5 version:', ml5.version);


var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xQRttb4CE/model.json', modelLoaded);