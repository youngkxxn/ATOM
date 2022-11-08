// 특정 공간을 만들고, 그 범위를 벗어나면 모양 변하게

let area, giraffe, ground;


function preload() {
  area = new Sprite(200, 200, 170, 10, 'static')
  area.overlap(allSprites);

  giraffe = new Sprite(200, 200, 40, 40);
  giraffe.addAni('normal', './set1_001.png', 7);
  giraffe.addAni('falling', './set2_001.png', 4);
  giraffe.rotationDrag = 2;

  ground = new Sprite(200, 220, 200, 20, 'static')
  ground.addAni('./bg.png');
}

function setup() {
  createCanvas(400, 400);
  world.gravity.y = 10;
}

function draw() {
  clear();
  background('#f6f5f0');

  giraffe.moveTowards(mouse.x, mouse.y);

  if (giraffe.overlapping(area)) {
    giraffe.ani = 'normal';
  } else {
    giraffe.ani = 'falling';
  }

  allSprites.debug = mouse.pressing();
}
