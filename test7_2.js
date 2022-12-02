// Class Sprite 사용법

let tst;
let cyc1 = false;
let cyc2 = false;
let cyc3 = false;

function preload() {
  tst = new Sprite(250, 200, 200, 200, 'static');
  tst.addAni('bridge', './brd_001.png', 2);
  tst.addAni('set2', './set2_001.png', 3);
  // tst.ani.frameDelay = 40;
  tst.addAni('set3', './set3_001.png', 4);
  // tst.ani.frameDelay = 20;
  tst.addAni('set1', './set1_001.png', 5);
  // tst.ani.frameDelay = 20;
}

function setup() {
  createCanvas(500, 400);
  frameRate(20);
}

function draw() {
	background('#f6f5f0');

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

  console.log(tst.ani.name)
}

function mouseClicked() {
  if (tst.ani.name == 'set1' && cyc1) {
    tst.ani = 'set2';
    tst.ani.play(0)
    cyc1 = false;
  }else if(tst.ani.name == 'set2' && cyc2) {
    tst.ani = ['set3', 'bridge'];
    tst.ani.play(0)
    cyc2 = false;
  } else if(tst.ani.name == 'bridge' && cyc3) {
    tst.ani = 'set1';
    tst.ani.play(0)
    cyc3 = false;
  }
}
