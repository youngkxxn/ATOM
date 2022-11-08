// 특정 공간을 만들고, 그 범위를 벗어나면 모양 변하게

let area, ground;
let s = [];

function preload() {
  area = new Sprite(200, 200, 170, 10, 'static')
  area.overlap(allSprites);

  ground = new Sprite(200, 220, 200, 20, 'static')
  ground.addAni('./bg.png');
}

function setup() {
  createCanvas(400, 400);
  world.gravity.y = 10;
}

function draw() {
  background('#f6f5f0');


  for (var i = 0; i < s.length + 1; i++){
    if(s[i]) {
      if (s[i].overlapping(area)) {
        s[i].ani = 'normal';
      } else {
        s[i].ani = 'falling';
      }
    }
  }

  console.log(i)
  allSprites.debug = mouse.pressing();
}

function mousePressed() {
  let _t = new Sprite(mouse.x, 0, 20);
  _t.addAni('normal', './set1_001.png', 7);
  _t.addAni('falling', './set2_001.png', 4);
  _t.rotationDrag = 10;
  s.push(_t);
}
