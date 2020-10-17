
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,690,width, 10)
  tree = new Tree(700,410,200,600)
  stone = new Stone(160,550,25)
  boy = new Boy(190, 620, 100, 300)
  mango1 = new Mango(690,210, 55)
  mango2 = new Mango(650, 300, 55)
  mango3 = new Mango(750,300,55)
  mango4 = new Mango(700, 360,55)
  rope = new Rope(stone.body, {x:100, y: 650})
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255);

  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  drawSprites();
 
}

function mouseDragged() {
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
  stone.fly();
}