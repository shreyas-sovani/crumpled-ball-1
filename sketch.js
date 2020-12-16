
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

ball=new Ball(100,550,20);
ground=new Ground(400,670,800,20);
dustD=new Dustbin(700,655,150,10);
dustR=new Dustbin(775,642,10,75);
dustL=new Dustbin(625,645,10,70);
  
}


function draw() {
  rectMode(CENTER);

jump();

  background(0);
ball.display();
  dustD.display();
  dustR.display();
  dustL.display();

  ground.display();
 // console.log(ball1);
  drawSprites();
 
}



function jump(){
if(keyCode===UP_ARROW){

	Matter.Body.applyForce(ball.body,ball.body.position,{x:5,y:-5});
}



}



