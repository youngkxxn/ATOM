// Class Sprite 사용법

let tst;

function preload() {
  // Sprite(x좌표, y좌표, 원의 지름)
  // Sprite(x좌표, y좌표, 가로길이, 세로길이)
  tst = new Sprite(0, 0, 200, 200);
  tst.addAni('./set1_001.png', 7);
  tst.ani.frameDelay = 40;
  tst.angularDrag = 2;

}

function setup() {
  createCanvas(500, 400);

}

function draw() {
	background('#f6f5f0');

  tst.moveTowards(mouse.x, mouse.y);

  allSprites.debug = mouse.pressing();
}
