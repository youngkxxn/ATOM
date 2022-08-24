let img; // 변수 'img' 선언

function setup() {
  createCanvas(720, 400);
  img = loadImage('./tst.png'); // 이미지 불러오기
}

function draw() {
  // 이미지를 화면상 좌표 (0,0) 위치에 실제 크기로 보이게 한다.
  image(img, 0, 0);
  // 이미지를 화면상 좌표 (0,높이/2) 위치에 절반 크기로 보이게 한다.
  image(img, 0, height / 2, img.width / 2, img.height / 2);
}
