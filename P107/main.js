var classifier;

function start() {
    //console.log("Teachable Machine Loaded by ml5.js")
    //var audio = navigator.mediaDevices.getUserMedia({ audio: true });;
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/IDD2xBL7P/model.json", modelReady);
}

function modelReady() {
    classifier.classify(GUTResults);
}

function GUTResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log("Got Result");
    }
}