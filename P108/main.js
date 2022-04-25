var classifier;

var dog = 0;
var cat = 0;

var result;

var img = document.getElementById("animal-picture");

function start() {
    //console.log("Teachable Machine Loaded by ml5.js")
    //var audio = navigator.mediaDevices.getUserMedia({ audio: true });;
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json", modelReady);
}

function modelReady() {
    classifier.classify(GUTResults);
}

function GUTResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        var r = Math.floor(Math.random() * 255) + 1;
        var g = Math.floor(Math.random() * 255) + 1;
        var b = Math.floor(Math.random() * 255) + 1;
        result = results;
        document.getElementById("sound-times").innerHTML = `Dogs: ${dog}, Cats: ${cat}`;
        document.getElementById("animal-name").innerHTML = results[0].label;
        document.getElementById("sound-times").style.color = `rgb(${r}, ${g}, ${b})`;
        document.getElementById("animal-name").style.color = `rgb(${r}, ${g}, ${b})`;

        if (results[0].label == "Barking") {
            img.src = "dog.png";
            dog++;
        } else if (results[0].label == "Meowing") {
            img.src = "cat.png";
            cat++;
        } else {
            img.src = "image.png";
        }
    }
}