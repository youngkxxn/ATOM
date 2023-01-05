// Class Sprite 사용법

let tst;
let click = false;
let cyc1 = false;
let cyc2 = false;
let cyc3 = false;

function preload() {
  tst = new Sprite(250, 200, 200, 200, 'static');
  tst.addAni('bridge', './brd_001.png', 2);
  tst.addAni('set2', './set2_001.png', 3);
  // tst.ani.frameDelay = 30;
  tst.addAni('set3', './set3_001.png', 4);
  // tst.ani.frameDelay = 30;
  tst.addAni('set1', './set1_001.png', 5);
  // tst.ani.frameDelay = 30;
}

function setup() {
  createCanvas(500, 400);
  frameRate(24);
}

function draw() {
	background('#f6f5f0');

  if(tst.ani.name == 'set1' && click && cyc1) {
    ini = false;
    tst.ani = ['set2', 'bridge'];
    tst.ani.play(0)
    cyc1 = false;
  } else if (tst.ani.name == 'bridge' && click && cyc1) {
    tst.ani = ['set2', 'bridge'];
    tst.ani.play(0)
    cyc1 = false;
  }else if(tst.ani.name == 'bridge' && click && cyc2) {
    tst.ani = ['set3', 'bridge'];
    tst.ani.play(0)
    cyc2 = false;
  } else if(tst.ani.name == 'bridge' && click && cyc3) {
    tst.ani = ['set1', 'bridge'];
    tst.ani.play(0)
    cyc3 = false;
  }

  //조건 : lastFrame이 지나야 cycle이 돌았다고 판단.
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
  console.log(tst.ani.name)
}

function mousePressed() {
    click = true;
}

function mouseReleased() {
  click = false;
}
