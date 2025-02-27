var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rect1, rect2, rect3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);

	var op = {
		isStatic:true
	}

	rect1 = Bodies.rectangle(275, 585, 20, 100, op);
	World.add(world, rect1);
	fill("red")

	rect2 = Bodies.rectangle(385, 625, 200, 20, op);
	World.add(world, rect2);
	fill("red")
	
	rect3 = Bodies.rectangle(495, 585, 20, 100, op);
	World.add(world, rect3);
	fill("red")

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rect(rect1.position.x, rect1.position.y, 20, 100)
  rect(rect2.position.x, rect2.position.y, 200, 20)
  rect(rect3.position.x, rect3.position.y, 20, 100)
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false)
    
  }
}



