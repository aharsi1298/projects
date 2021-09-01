var img_imgTag;
// Create a reference for the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var img_width = 300;
var img_height = 100;

var img_image;

var img_x = 100;
var img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
document.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	var keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)) {
			aplhabetkey();
			document.getElementById("d1").innerHTML = "You pressed Alphabet Key";
			console.log("alphabet key");
		} else if(keyPressed >= 0x30 && keyPressed <= 0x39) {
			numberkey();
			document.getElementById("d1").innerHTML = "You pressed Number Key";
			console.log("number key");
		} else if(keyPressed >= 37 && keyPressed <= 40) {
			arrowkey();
			document.getElementById("d1").innerHTML = "You pressed Arrow Key";
			console.log("arrow key");
		}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey()
{
	img_image = "Alpkey.png"
	add();
	uploadimg();
}
function numberkey()
{
	img_image = "numkey.png";
	add();	
	uploadimg();
}
function arrowkey()
{
	img_image = "Arrkey.png";
	add();
	uploadimg();
}
function specialkey()
{
	img_image = "spkey.png";
	add();
	uploadimg();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
	uploadimg();
}