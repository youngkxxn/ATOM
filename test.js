let x = [],
  y = [],
  angle = [],
  targetX,
  targetY;

for (let i = 0; i < 10; i++) {
  x[i] = 0;
  y[i] = 0;
  angle[i] = 0;
}

function setup() {
  createCanvas(710, 400);
  strokeWeight(15);
  stroke(255, 100);

  //배열명.length는 배열길이
  x[9] = width / 2; // 기본 x좌표 설정
  y[9] = 0; // 기본 y좌표 설정
}

function draw() {
  background(0);

  reachSegment(0, mouseX, mouseY);

  for (let i = 1; i < 10; i++) {
    reachSegment(i, targetX, targetY);
  }
  for (let j = 9; j >= 1; j--) {
    positionSegment(j, j - 1);
  }
  for (let k = 0; k < 10; k++) {
    segment(x[k], y[k], angle[k], (k + 1) * 2);
  }
}

function positionSegment(a, b) {
  x[b] = x[a] + cos(angle[a]) * 26;
  y[b] = y[a] + sin(angle[a]) * 26;
}

function reachSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  angle[i] = atan2(dy, dx);
  targetX = xin - cos(angle[i]) * 26;
  targetY = yin - sin(angle[i]) * 26;
}

function segment(x, y, a) {
  push(); // new drawing state
  translate(x, y); //이후 선언된 거 이동
  rotate(a);
  line(0, 0, 26, 0);
  pop(); //이전 설정으로 되돌림
}
