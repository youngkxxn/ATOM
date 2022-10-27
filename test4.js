// Class Sprite 사용법

let tst;
let tst2;

function preload() {
  tst = new Sprite(250, 200, 200, 200, 'static');
  tst.addAni('./set1_001.png', 3);
  tst.ani.frameDelay = 40;
  tst.visible = false;

  tst2 = new Sprite(250, 200, 200, 200, 'static');
  tst2.addAni('./set2_001.png', 3);
  tst2.ani.frameDelay = 30;
  tst2.visible = true;
}

function setup() {
  createCanvas(500, 400);

}

function draw() {
	background('#f6f5f0');

  allSprites.debug = mouse.pressing();
  console.log(tst)
}
