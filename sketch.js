var ship, ship_swimming;
var waterImage;
var sea;

function preload(){
  ship_swimming = loadAnimation("ship-1.png","ship-2.png","ship-3.png", "ship-4.png");
  waterImage = loadImage("sea.png");
  
}

function setup(){
  createCanvas(400,400);
  background("blue");
  // Creating ships
  sea = createSprite(400, 200);
  sea.addImage(waterImage);
  sea.velocityX = -5;
  sea.scale = 0.3;

  ship = createSprite(130, 200, 30, 30);
  ship.addAnimation("running", ship_swimming);
  ship.scale = 0.25;

  // adding scale and position to ship
}

function draw() {
  background(0);
  if (sea.x <0)
  {
    sea.x = sea.width/8;
  }
  drawSprites();
}