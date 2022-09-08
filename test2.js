

let img;
let bx;
let by;
let imgSize = 100;
let overImg = false;
let clicked = false;

function preload() {
	img = loadAni('./tst001.png', 7);
}

function setup() {
	createCanvas(400, 400);
	bx = width / 2;
	by = height / 2;
}

function draw() {
	background(150);

	// 그림 위에 커서가 있는지 확인
	if (
		mouseX > bx - imgSize &&
		mouseX < bx + imgSize &&
		mouseY > by - imgSize &&
		mouseY < by + imgSize
	) {
		overImg = true;
	} else {
		overImg = false;
	}

	// makes a loop between the last few frames of the animation
	// goes from 6 to 7 and then back to 5
	if (img.frame == img.lastFrame) {
		img.frame = 5;
	}

	animation(img, 200, 200);
}

function mousePressed() {
	if(overImg) {
		img.frame = 0;
	}
}
