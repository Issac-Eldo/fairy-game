var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var option

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	//fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world ;

	option = {
		isStatic:false	
	}

	starBody = Bodies.circle(650 , 30 , 5 ,option);
	//starBody.addImage(starImg);
	World.add(world, starBody);
	
	Engine.run(engine);


}


function draw() {
  background(bgImg);

  if(keyDown("DOWN_ARROW")){	
	
	option = {
		isStatic:false	
	}
starBody = Bodies.circle(650 , 30 , 5 ,option);
}


  fairy.velocityX=0
  Engine.update(engine);
 ellipseMode(RADIUS)
  ellipse(starBody.position.x,starBody.position.y,5)
  Engine.update(engine);

  if(keyDown("LEFT_ARROW")){
	  fairy.velocityX=-5
  }

  if(keyDown("RIGHT_ARROW")){
	fairy.velocityX=5
}

if(keyDown("DOWN_ARROW")){	
	option = isStatic=false
}
  star.x = starBody.position.x
  star.y = starBody.position.y



  drawSprites();

 

}

function keyPressed() {
	//write code here
}
