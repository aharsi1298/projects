var background_imgTag;
var car_imgTag;

//Create a reference for canvas 
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Give specific height and width to the car image
var car_height = 100;
var car_width = 100;

var background_image = "parkingLot.jpg";
var greencar_image = "car2.png";

//Set initial position for a car image.
var car_x = 50;
var car_y = 50;

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	car_imgTag = new Image();
	car_imgTag.onload = uploadgreencar;
	car_imgTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	car_y -= 10;
	add();
}

function down()
{
	//Define function to move the car downward
	car_y += 10;
	add();
}

function left()
{
	//Define function to move the car left side
	car_x -= 10;
	add();
}

function right()
{
	//Define function to move the car right side
	car_x += 10;
	add();
}