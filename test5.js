// Class Sprite 사용법

let tst;
let tst2;

function preload() {
  tst = new Sprite(250, 200, 200, 200, 'static');
  tst.addAni('./set1_001.png', 3);
  tst.addAni('chng', './set2_001.png', 3);

}

function setup() {
  createCanvas(500, 400);

}

function draw() {
	background('#f6f5f0');

//pressing말고 클릭으로 바꾸고
  if (mouse.pressing()) {
    tst.ani = 'chng';
    tst.ani.frameDelay = 80;
    //클릭시 1번 프레임부터 시작
    //coffee acting + 여러번 클릭 가능 + 맥시멈 값 있음.
    //루프가 다 돌아야 다음 프레임 세트로 넘어감
    //acting게이지가 서서히 빠지면서 속도도 서서히 빠지게
  } else {
    tst.ani = 'default';
    tst.ani.frameDelay = 40;
    //풀었을때 1번 프레임부터 시작 하면 될듯?
    //속도는 게이지에 맞춰서 재생되고 결국 디폴트 게이지까지 빠지면 될듯
  }

  // allSprites.debug = mouse.pressing();
  console.log(tst.ani.frameChanged)
}
