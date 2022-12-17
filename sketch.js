
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var engine, world;
var boy;
var boyImg, boyCry;
var a1, appleImg

function preload() {
  boyImg = loadImage("boy1.png")
  boyCry = loadImage("boycry.png");
  appleImg = loadImage("apple.png")
}

function setup() {
  createCanvas(400, 600);

  engine = Engine.create();
  world = engine.world;
  var options = { isStatic: true }
  ground = Bodies.rectangle(200, 590, 400, 20, options)
  World.add(world, ground);

  boy = createSprite(200, 500, 50, 80)
  boy.addImage("boy", boyImg)
  boy.addImage("cry", boyCry)
  boy.changeImage("boy")
  boy.scale = 0.4;

  // a1=new Apple(random(50,80),100,45);
  //  a2=new Apple(random(150,180),150,45);
  //  a3=new Apple(random(250,280),50,45);

  var apple_options = { density: 0.001 };
  a1 = Bodies.circle(random(50, 350), random(50, 80), 40, apple_options);
  World.add(world, a1);
}


function draw() {
  background(51);
  fill("red");

  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20)

  if (a1 != null) {
    image(appleImg, a1.position.x, a1.position.y, 40, 40);

  }
  move();

  if (collide(a1, ground)) {
    boy.changeImage("cry")
  }
  drawSprites();
}

function collide(body, sprite) {
  if (body != null) {
    var d = dist(body.position.x, body.position.y, sprite.position.x, sprite.position.y);
    if (d <= 60) {
      World.remove(world, a1);
      a1 = null
      return true;
    }
    else {
      return false;
    }
  }
}



function move() {
  if (keyDown(LEFT_ARROW)) {
    boy.x -= 5;
  }
  if (keyDown(RIGHT_ARROW)) {
    boy.x += 5;
  }
}