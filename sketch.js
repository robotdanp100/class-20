var object_1;
var object_2;
function setup() {
  createCanvas(2500,1200);
  object_1 =createSprite(600, 400, 50, 80);
  object_2 =createSprite(400, 200, 80, 30);
  object_1.shapeColor = "green";
  object_2.shapeColor = "green";
  object_1.debug = true;
  object_2.debug = true;
}

function draw() {
  background(0,0,0);
  object_2.x = World.mouseX;
  object_2.y = World.mouseY;
  isTouching();
  drawSprites();
}

function isTouching() {
if(object_1.x-object_2.x < object_1.width/2+object_2.width/2 && object_2.x-object_1.x <object_1.width/2+object_2.width/2
&& object_1.y-object_2.y < object_1.height/2+object_2.height/2 && object_2.y-object_1.y <object_1.height/2+object_2.height/2
) {
object_1.shapeColor = "red";
object_2.shapeColor = "red";



}

else{
  object_1.shapeColor = "green";
  object_2.shapeColor = "green";
  
}

}