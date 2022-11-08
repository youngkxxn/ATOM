// Class Sprite 사용법

let tst;
let tst2;

function preload() {
  tst = new Sprite(250, 200, 200, 200, 'static');
  tst.addAni('set2', './set2_001.png', 3);
  tst.ani.frameDelay = 40;
  tst.ani.looping = false;
  tst.addAni('./set1_001.png', 3);
  tst.ani.frameDelay = 20;
}

function setup() {
  createCanvas(500, 400);

}

function draw() {
	background('#f6f5f0');

//pressing말고 클릭으로 바꾸고
  if (tst.mouse.presses()) {
    tst.ani = 'set2';
    tst.ani.play(0); //play animation starting from frame 0

    //coffee acting + 여러번 클릭 가능 + 맥시멈 값 있음.
    //루프가 다 돌아야 다음 프레임 세트로 넘어감
    //acting게이지가 서서히 빠지면서 속도도 서서히 빠지게
  }

  if (tst.mouse.released()) {
    tst.ani = ['set2', '!set2', 'default'];
    tst.ani.frameDelay = 40;
  }

  // allSprites.debug = mouse.pressing();
  console.log(tst.mouse.presses())
}
