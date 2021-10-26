var bg,bgImg;
var player, PlayerImg,heartImg ;
var  Treasure;
var TreeImg;
var tree, tree1, tree2, tree3, tree4;
var falseground;
var collideground;
var arrow, arrowImg;


function preload(){
  
  PlayerImg = loadAnimation("assets/Imported Piskel.png")
  heartImg = loadImage("assets/heart_3.png")
  bgImg = loadImage("assets/bg.png")
  Treasure = loadImage("assets/Treasure Box.png")
  TreeImg  = loadImage("assets/Trees.png")
  arrowImg = loadImage("assets/download.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

//adding the walls of the maze
var wall1= createSprite(windowWidth/2+905,windowHeight/2-50,10,400);
var wall2= createSprite(windowWidth/2+685,windowHeight/2,10,300);
var wall3= createSprite(windowWidth/2+793,windowHeight/2+140,215,20);
var wall4= createSprite(windowWidth/2+185,windowHeight/2-245,1430,10);
var wall5= createSprite(windowWidth/2+127,windowHeight/2-150,1125,10);
var wall6= createSprite(windowWidth/2-535,windowHeight/2-50,10,400);
var wall7= createSprite(windowWidth/2-431,windowHeight/2,10,300);
wall1.shapeColor=('black');
wall2.shapeColor=('black');
wall3.shapeColor=('black');
wall4.shapeColor=('black');
wall5.shapeColor=('black');
wall6.shapeColor=('black');
wall7.shapeColor=('black')

//Creating a falseground
falseground= createSprite(windowWidth/2-483,windowHeight/2+80,95,20);
falseground.addImage(arrowImg);

tree= createSprite(windowWidth/2,windowHeight/2-190,20,20);
tree.addImage(TreeImg);
tree.scale=0.15;

tree1= createSprite(windowWidth/2-470,windowHeight/2-190,20,20);
tree1.addImage(TreeImg);
tree1.scale=0.15;

tree2= createSprite(windowWidth/2-480,windowHeight/2+30,20,20);
tree2.addImage(TreeImg);
tree2.scale=0.15;

//creating thw winning trophy sprite
var winningtrophy = createSprite(windowWidth/2+800,windowHeight/2+30,20,20)
winningtrophy.addImage(Treasure)
winningtrophy.shapeColor=('#FFD700');
winningtrophy.scale=0.3;
    

//creating the player sprite
player = createSprite(windowWidth/2-470, windowHeight-50 , 50, 50);
player.addAnimation("player",PlayerImg)
player.scale=0.2;



}

function draw() {
  background(0,255,0); 

if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-15
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+15
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-15
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
 player.x = player.x+15
}

if (player.isTouching(falseground)){
  collideground= createSprite(windowWidth/2-483,windowHeight/2+140,95,20);
  collideground.shapeColor=('black');
}

if (player.isTouching(tree)){
  textSize(40);
  fill('red');
  text("1- I can fly but have no wings. I can cry but I have no eyes . Who am I ??",windowWidth/2-600,windowHeight/2-430)
  
  player.position.x=tree.position.x
  player.position.y=tree.position.y
}

drawSprites();

}
