// Class Sprite 사용법

let tst;

function preload() {
  tst = floor(random(120, 240))
}

function setup() {
  createCanvas(500, 400);

}

function draw() {
	background('#f6f5f0');

  allSprites.debug = mouse.pressing();
  console.log(tst)
}
