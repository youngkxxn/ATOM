//드래그로 그림 바뀌게 테스트중

let img;
let img1; // 변수 'img' 선언
let img2;
let bx;
let by;
let imgSize = 300;
let overImg = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;

function setup() {
  createCanvas(720, 400);
  bx = width / 2.0;
  by = height / 2.0;
  img1 = loadImage('./tst001.png'); // 이미지 불러오기
  img2 = loadImage('./tst002.png');
  img = img1; //초기이미지
}

function draw() {
  // 이미지를 화면상 좌표 (0,0) 위치에 실제 크기로 보이게 한다.
  image(img, 0, 0);
  // 이미지를 화면상 좌표 (0,높이/2) 위치에 절반 크기로 보이게 한다.
  // image(img, 0, height / 2, img.width / 2, img.height / 2);

  if (
    mouseX > bx - imgSize &&
    mouseX < bx + imgSize &&
    mouseY > by - imgSize &&
    mouseY < by + imgSize
  ) {
    overImg = true;
  } else {
    overImg = false;
  }

}

function mousePressed() {
  if (overImg) {
    // locked = true;
    img = img2;
  } else {
    // locked = false;
  }
  // xOffset = mouseX - bx;
  // yOffset = mouseY - by;
}

// function mouseDragged() {
//   if (locked) {
//     // bx = mouseX - xOffset;
//     // by = mouseY - yOffset;
//     img = img2;
//   } else {
//     img = img1;
//   }
// }

function mouseReleased() {
  // locked = false;
  img = img1;
}
