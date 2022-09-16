let img;
let Set1;
let Set2;
let x;
let y; //x와 y좌표 선언
let i = 0;
let j = 0;
let r; //랜덤값
let imgHeight = 100;
let imgWidth = 100; //이미지 사이즈는 250x250인데, 기린 클릭할때만 효과 먹히도록 조정
let overImg = false; //마우스가 그림위에 있는지
let clicked = false; //클릭했는지

function preload() {
	//절대경로는 html기준
	Set1 = loadAni('./images/set1_001.png', 7);
	Set2 = loadAni('./images/set2_001.png', 4);
}

function setup() {
	//캔버스 사이즈
	var cnv = createCanvas(windowWidth, windowHeight);
  // p5play를 쓰면 아래 코드가 안먹어서 주석처리함. 대신 css에서 viewport로 손댐
	// cnv.style('display', 'block');

	//x y값은 화면 중앙
	x = width / 2;
  y = height / 2;
}

function draw() {
  //캔버스 색
  background('#f6f5f0');

	// 기린 그림 위에 커서가 있는지 확인
	// 0.2와 0.8이라는 계수는 기린만 터치하기 위한 장치
	if (
		mouseX > x - imgWidth * 0.2 &&
		mouseX < x + imgWidth * 0.8 &&
		mouseY > y - imgHeight &&
		mouseY < y + imgHeight
	) {
		overImg = true;
	} else {
		overImg = false;
	}

	//0~9 난수생성
	// r = Math.floor(Math.random() * 10);


  ///// 여기서 멈춰있음. Set1사이사이에 Set2가 들어오게 하고 싶은데 잘 안됨.

	if (Set1.frame == Set1.lastFrame && j < 2) {
		i += 1;
		j = Math.floor(i / 15);
	} else if (Set2.frame == Set2.lastFrame) {
		i += 1;
		j = Math.floor(i / 15);
	}

	if (j < 2) {
		img = Set1;
	} else if (j >= 2) {
		img = Set2;
	}

	//그림 그리기
	animation(img, x, y);
	Set1.frameDelay = 15;
	Set2.frameDelay = 15;
	console.log(r);
}

function mousePressed() {
	if(overImg) {
		img.frame = 0;
	}
}
