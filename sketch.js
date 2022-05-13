var caja;
function setup() {
  createCanvas(400,400);
  caja=createSprite(200,200,20,20);
}

function draw() 
{
  background(20);
  if(keyIsDown(RIGHT_ARROW)){
    caja.x=caja.x+5;
  }
  if(keyIsDown(LEFT_ARROW)){
    caja.position.x=caja.x-5;
  }
  if(keyIsDown(UP_ARROW)){
    caja.position.y=caja.y-5;
  }
  if(keyIsDown(DOWN_ARROW)){
    caja.position.y=caja.y+5;
  }
  drawSprites ();

}




