//play.js 기본형식

let Ani;

function setup() {
	createCanvas(720, 400);
	Ani = loadAni('./tst001.png', 7);
}

function draw() {
	clear();
	animation(Ani, 250, 80);
}
