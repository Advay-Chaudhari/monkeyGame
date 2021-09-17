
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,bananaGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey=createSprite(80,315,20,20) 
monkey.addAnimation("m1",monkey_running);
monkey.scale=0.1;
score=0;
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
bananaGroup=createGroup();
obstacleGroup=createGroup();
}


function draw() {
background(255);
fill("black");
textSize(30);
text("score "+score,200,50);
//score+=Math.ceil(frameCount/frameRate());
score=score+2
if(ground.x<0){
ground.x=ground.width/2;
}
if(keyDown("space")){
monkey.velocityY=-12;
}
monkey.velocityY=monkey.velocityY+0.8;
monkey.collide(ground);
spawnfood();
spawnobstacles();

drawSprites();
}

function spawnfood(){
if(frameCount%80===0){
banana=createSprite(600,250,40,10);
banana.y=random(120,200);
banana.velocityX=-5;
banana.lifetime=300;
banana.addImage("b1",bananaImage);
banana.scale=0.05;
bananaGroup.add(banana);
}
}

function spawnobstacles(){
if(frameCount%300===0){
obstacle=createSprite(800,320,10,40);
obstacle.y=random(120,200);
obstacle.velocityX=-6;
obstacle.lifetime=300;
obstacle.addImage("b1",obstacleImage);
obstacle.scale=0.15;
obstacleGroup.add(obstacle);
}
}


