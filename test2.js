

let img;

function preload() {
	img = loadAni('./tst001.png', 7);
}

function setup() {
	createCanvas(800, 300);
}

function draw() {
	background(255);

	// makes a loop between the last few frames of the animation
	// goes from 7 to 11 and then back to 7
	if (img.frame == img.lastFrame) {
		img.frame = 5;
	}

	animation(img, 300, 150);
}

function mousePressed() {
	img.frame = 0;
}
