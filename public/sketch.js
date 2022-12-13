var socket;
let x1; let y1; let x2; let y2;
let x = 1; let y = 1;
let easinga = 0.05;
let easingb = 0.02;
let easingc = 0.005;
let mn = 0;

function preload(){
  planchette = loadImage("images/planchette.png");
  board = loadImage("images/board.png");
  candle1 = loadImage("images/candle1.gif");
  candle2 = loadImage("images/candle2.gif");
  oldfont = loadFont("IMFellEnglishSC-Regular.ttf");
}

function setup() {
  imageMode(CENTER);
  createCanvas(600,460);

  socket = io.connect('http://192.168.1.78:3000');
  // socket = io.connect('http://localhost:3000');
  socket.on('mouse', newDrawing);
}

function newDrawing(data) {
  x2 = data.x; y2 = data.y;
}

function draw() {
  var data = {
    x: mouseX,
    y: mouseY
  }
  socket.emit('mouse', data);
  background(0);
  image(board,300, 200, 600, 400);
  image(candle1,100,425,50,50);
  image(candle2,500,425,50,50);
  textAlign(CENTER); textFont(oldfont); textSize(40);
  fill(128,97,64);

  x1 = mouseX; y1 = mouseY;

  let dx;
  dx = x1 - x;
  let dy;
  dy = y1 - y;

  if (x > (x2 - 20) && x < (x2 + 20) && y > (y2 - 20) && y < (y2 + 20)) {
    x += dx * easingc;
    y += dy * easingc; 
    mn = 1;
  } else 
    if (x > (x2 - 70) && x < (x2 + 70) && y > (y2 - 70) && y < (y2 + 70)) {
    x += dx * easingb;
    y += dy * easingb;
    mn = 0;         
  } else {
    x += dx * easinga;
    y += dy * easinga;
    mn = 0;
  }

  image(planchette, x, y, 140, 200);

  if (mn == 1) {
  matches();
  }
  // if (mn == 1) {
  //   text('match', 300, 410);
  // }

  }

  function matches() {
    if (90 < x && 150 > x && 10 < y && 50 > y) {
      text('match : yes', 300, 430);
    } else if(470 < x && 530 > x && 10 < y && 50 > y) {
      text('match : no', 300, 430);
    } else if(230 < x && 390 > x && 330 < y && 370 > y) {
      text('match : goodbye', 300, 430);
    } else if(1 < x && 1 > x && 70 < y && 110 > y) {
      text('match : 1', 300, 430);
    } else if(1 < x && 1 > x && 70 < y && 110 > y) {
      text('match : 2', 300, 430);
    } else if(1 < x && 1 > x && 70 < y && 110 > y) {
      text('match : 3', 300, 430);
    } else if(1 < x && 1 > x && 70 < y && 110 > y) {
      text('match : 4', 300, 430);
    } else if(1 < x && 1 > x && 70 < y && 110 > y) {
      text('match : 5', 300, 430);
    } else if(1 < x && 1 > x && 70 < y && 110 > y) {
      text('match : 6', 300, 430);
    } else if(1 < x && 1 > x && 70 < y && 110 > y) {
      text('match : 7', 300, 430);
    } else if(1 < x && 1 > x && 70 < y && 110 > y) {
      text('match : 8', 300, 430);
    } else if(1 < x && 1 > x && 70 < y && 110 > y) {
      text('match : 9', 300, 430);
    } else if(1 < x && 1 > x && 70 < y && 110 > y) {
      text('match : 0', 300, 430);
    } else if(110 < x && 150 > x && 190 < y && 230 > y) {
      text('match : q', 300, 430);
    } else if(150 < x && 190 > x && 170 < y && 210 > y) {
      text('match : w', 300, 430);
    } else if(190 < x && 230 > x && 150 < y && 190 > y) {
      text('match : e', 300, 430);
    } else if(230 < x && 270 > x && 130 < y && 170 > y) {
      text('match : r', 300, 430);
    } else if(270 < x && 310 > x && 130 < y && 170 > y) {
      text('match : t', 300, 430);
    } else if(310 < x && 350 > x && 130 < y && 170 > y) {
      text('match : y', 300, 430);
    } else if(350 < x && 390 > x && 130 < y && 170 > y) {
      text('match : u', 300, 430);
    } else if(390 < x && 430 > x && 150 < y && 190 > y) {
      text('match : i', 300, 430);
    } else if(430 < x && 470 > x && 170 < y && 210 > y) {
      text('match : o', 300, 430);
    } else if(470 < x && 510 > x && 190 < y && 230 > y) {
      text('match : p', 300, 430);
    } else if(130 < x && 170 > x && 250 < y && 290 > y) {
      text('match : a', 300, 430);
    } else if(170 < x && 210 > x && 230 < y && 270 > y) {
      text('match : s', 300, 430);
    } else if(210 < x && 250 > x && 210 < y && 250 > y) {
      text('match : d', 300, 430);
    } else if(250 < x && 290 > x && 190 < y && 230 > y) {
      text('match : f', 300, 430);
    } else if(290 < x && 330 > x && 190 < y && 230 > y) {
      text('match : g', 300, 430);
    } else if(330 < x && 370 > x && 190 < y && 230 > y) {
      text('match : h', 300, 430);
    } else if(370 < x && 410 > x && 210 < y && 250 > y) {
      text('match : j', 300, 430);
    } else if(410 < x && 450 > x && 230 < y && 270 > y) {
      text('match : k', 300, 430);
    } else if(450 < x && 490 > x && 250 < y && 290 > y) {
      text('match : l', 300, 430);
    } else if(170 < x && 210 > x && 290 < y && 330 > y) {
      text('match : z', 300, 430);
    } else if(210 < x && 250 > x && 270 < y && 310 > y) {
      text('match : x', 300, 430);
    } else if(250 < x && 290 > x && 250 < y && 290 > y) {
      text('match : c', 300, 430);
    } else if(290 < x && 330 > x && 250 < y && 290 > y) {
      text('match : v', 300, 430);
    } else if(330 < x && 370 > x && 250 < y && 290 > y) {
      text('match : b', 300, 430);
    } else if(370 < x && 410 > x && 270 < y && 310 > y) {
      text('match : n', 300, 430);
    } else if(410 < x && 450 > x && 290 < y && 330 > y) {
      text('match : m', 300, 430);
    } else {text('match', 300, 430);}
  }