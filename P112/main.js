Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

var toSpeak = "";

var camera = document.getElementById("vid");

Webcam.attach('#vid');

function snap() {
    Webcam.snap(function(data_uri) {
        document.getElementsByTagName("img")[0].src = data_uri;
    });
}

console.log('ml5 version:', ml5.version);


var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xQRttb4CE/model.json', modelLoaded);

function modelLoaded() {
    console.log("Blag blog bleeg");
}

function predict() {
    var img = document.getElementsByTagName("img")[0];
    classifier.classify(img, GUTResults);
}

function GUTResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        //never gonna give you up never gonna let you down never gonna run around and desert you
        var gesture = results[0].label;

        toSpeak = "";

        switch (gesture) {
            case 'amazing':
                toSpeak = "This is looking amazing";
                document.getElementById("prediction").innerHTML = `${results[0].label} &#128076`;
                break;
            case 'best':
                toSpeak = "All the best";
                document.getElementById("prediction").innerHTML = `${results[0].label} &#128077`;
                break;
            case 'amazing':
                toSpeak = "That was a marvelous victory";
                document.getElementById("prediction").innerHTML = `${results[0].label} &#9996`;
                break;
            default:
                break;
        }

        speak();

    }
}

function speak() {
    /*var synth = window.speechSynthesis;

    var speak_data = toSpeak;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);*/

    window.speechSynthesis.speak(new SpeechSynthesisUtterance(toSpeak));
    // never gonna give you up never gonna let you down never gonna run around and desert you
}