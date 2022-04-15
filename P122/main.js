x = 0;
y = 0;

draw_apple = "";

var screen_width = 0;
var screen_height = 0;

var apple;

var speak_data;

var to_number;

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function preload() {
    apple = loadImage("apple.png");
}

function start() {
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var content = event.results[0][0].transcript;

    to_number = Number(content);

    if (Number.isInteger(to_number)) {
        document.getElementById("status").innerHTML = "Started drawing apple";
        draw_apple = "set";
    } else document.getElementById("status").innerHTML = "The speech has been recognized: " + content;

}

function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;

    var canvas = createCanvas(screen_width, screen_height - 150);
    canvas.position(0, 150);
}

function draw() {
    if (draw_apple == "set") {
        for (var i = 0; i < to_number; i++) {
            /*x = Math.floor(Math.random() * (screen_width * (2 / 3)));
            y = Math.floor(Math.random() * (screen_height * (2 / 3)));
            image(apple, x, y, (screen_width * (2 / 3)), (screen_height * (2 / 3)));*/
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            image(apple, x, y, 50, 50);
        }
        speak();
        document.getElementById("status").innerHTML = to_number + " Apples drawn";
        draw_apple = "";
    }
}

function speak() {
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}