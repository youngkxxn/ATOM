// Class Sprite 사용법

let tst;
let i = 0;
let a = [];
let click = false;
let cyc1 = false;
let cyc2 = false;
let cyc3 = false;

function preload() {
  tst = new Sprite(250, 200, 200, 200, 'static');
  tst.addAni('set2', './set2_001.png', 3);
  tst.ani.frameDelay = 40;
  tst.addAni('set3', './set3_001.png', 4);
  tst.ani.frameDelay = 20;
  tst.addAni('set1', './set1_001.png', 5);
  tst.ani.frameDelay = 20;
}

function setup() {
  createCanvas(500, 400);

}

function draw() {
	background('#f6f5f0');

  i += 1;
  text(frameCount, -10, -10);

  if(tst.ani.name == 'set1' && click && cyc1) {
    tst.ani = 'set2';
    tst.ani.play(0)
    cyc1 = false;
  } else if(tst.ani.name == 'set2' && click && cyc2) {
    tst.ani = 'set3';
    tst.ani.play(0)
    cyc2 = false;
  } else if(tst.ani.name == 'set3' && click && cyc3) {
    tst.ani = 'set1';
    tst.ani.play(0)
    cyc3 = false;
  }

  //조건
  if (tst.ani.name == 'set1') {
    if(tst.ani.frame == tst.ani.lastFrame) {
      cyc1 = true;
    }
  } else if (tst.ani.name == 'set2') {
      if(tst.ani.frame == tst.ani.lastFrame) {
        cyc2 = true;
      }
    } else if (tst.ani.name == 'set3') {
      if(tst.ani.frame == tst.ani.lastFrame) {
        cyc3 = true;
      }
    }

  // allSprites.debug = mouse.pressing();
  // console.log(tst.ani.name, 'c1=', cyc1, 'c2=', cyc2, 'c3=', cyc3)
  console.log(attackTime)
}

function mousePressed() {
  if (true) {
    click = true;
  }
}

function mouseReleased() {
  click = false;
}
