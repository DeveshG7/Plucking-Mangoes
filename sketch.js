
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var treee, boyi, boy, gardeni, rope;
var gameState="serve";

function preload(){
	boyi=loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	treee= new tree(960,588)

	ground= new Ground(700, 590, 1420, 15)

    stone1 = new Stone(130, 405, 30)

	boy=createSprite(210,490,150,200)
	boy.addImage(boyi)
	boy.scale=0.15

	mango1= new Mango(850, 270, 60)
	mango2= new Mango(970, 190, 60)
	mango3= new Mango(1050, 230, 60)
	mango4= new Mango(1120, 290, 65)
	mango5= new Mango(940, 290, 60)
	mango6= new Mango(900, 90, 60)
	mango7= new Mango(860, 185, 60)
	mango8= new Mango(1030, 100, 60)
	mango9= new Mango(1117, 177, 60)

	rope= new Chain(stone1.body, {x:130, y:405})

	Engine.run(engine);
  
}


function draw() {

  background(250);
  
  drawSprites();

  rectMode(CENTER);
 treee.display();
 ground.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
 rope.display();
 stone1.display();

 detectollision(stone1, mango1)
 detectollision(stone1, mango2)
 detectollision(stone1, mango3)
 detectollision(stone1, mango4)
 detectollision(stone1, mango5)
 detectollision(stone1, mango6)
 detectollision(stone1, mango7)
 detectollision(stone1, mango8)
 detectollision(stone1, mango9)
 
}

function mouseDragged(){
if(gameState==="serve"){
Matter.Body.setPosition(stone1.body, {x: mouseX, y: mouseY})
}
}

function mouseReleased(){

rope.fly();
gameState="done";
}


function keyPressed(){

if(keyCode === 32){
rope.attach(stone1.body)
Matter.Body.setPosition(stone1.body, {x:130, y:405})
gameState="serve"
}

}
function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }