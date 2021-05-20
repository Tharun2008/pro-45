var car;
var stone,fire,log;
var carImg;
var fireImg;
var stoneImg;
var logImg;
var canvas,background;
var track;



function preload(){
  carImg = loadImage('car.jpg');
  fireImg = loadImage('fire3.jpg');
  stoneImg = loadImage('stone.jpg');
  logImg = loadImage('log1.jpg');
  track = loadImage("black.jpg");

}

function setup() {
  canvas = createCanvas(1800,1800);
  car = createSprite(761,676,10,10);
  car.addImage(carImg);
  car.scale = 0.1;

  stone = createSprite(665,464,10,10);
  stone.addImage(stoneImg);
  fire = createSprite();
  fire.addImage(fireImg);
  log = createSprite();
  log.addImage(logImg);
}

function draw() {
  background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
  text(mouseX+','+mouseY,mouseX,mouseY);
  car.display(); 
  stone.display(); 
  fire.display(); 
  log.display(); 
  drawSprites();
}