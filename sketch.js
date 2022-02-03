var paddle
var ball
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12



function setup() {
  createCanvas(1050,800);
  createSprite(400, 200, 50, 50);

paddle=createSprite(525,680,135,30)
paddle.shapeColor="yellow"
 
block1=createSprite(100,100,175,175)
block1.shapeColor="red"

block2=createSprite(275,100,175,175)
block2.shapeColor="orange"

block3=createSprite(450,100,175,175)
block3.shapeColor="yellow"

block4=createSprite(625,100,175,175)
block4.shapeColor="green"

block5=createSprite(800,100,175,175)
block5.shapeColor="blue"

block6=createSprite(975,100,175,175)
block6.shapeColor="purple"

block7=createSprite(100,275,175,175)
block7.shapeColor="purple"

block8=createSprite(275,275,175,175)
block8.shapeColor="blue"

block9=createSprite(450,275,175,175)
block9.shapeColor="green"

block10=createSprite(625,275,175,175)
block10.shapeColor="yellow"

block11=createSprite(800,275,175,175)
block11.shapeColor="orange"

block12=createSprite(975,275,175,175)
block12.shapeColor="red"





}

function draw() {
  background('lightBlue');  
  
createEdgeSprites()



fill("black")  
ellipse(525,580,32)


if(keyDown(LEFT_ARROW)){
paddle.velocityX=-20
}


if(keyDown(RIGHT_ARROW)){
paddle.velocityX=20
}


ball.gravity(true)






drawSprites();
}