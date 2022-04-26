var ship,sea
var shipimg,seaimg

function preload(){
shipimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaimg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200)
  sea.addImage(seaimg)
  sea.velocityX=-3

  ship = createSprite(200,195)
  ship.addAnimation("navio",shipimg)
  ship.scale=0.25
  sea.scale=0.24
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x = width/2
  }
    drawSprites();

 
}
