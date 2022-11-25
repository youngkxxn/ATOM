// Class Sprite 사용법

let tst;
let tst2;

function preload() {
  tst = new Sprite(250, 200, 200, 200, 'static');
  tst.addAni('set2', './set2_001.png', 3);
  tst.ani.frameDelay = 40;
  // tst.ani.looping = false;
  tst.addAni('./set1_001.png', 5);
  tst.ani.frameDelay = 20;
}

function setup() {
  createCanvas(500, 400);

}

function draw() {
	background('#f6f5f0');

  // allSprites.debug = mouse.pressing();
  console.log(tst.mouse.presses())
}

function mousePressed() {
  tst.ani = 'set2';
  // tst.ani.play(0); //play animation starting from frame 0
}
