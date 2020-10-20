 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 var engine, world;
 var ground; 
 var ball;
 var ball2;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  var ground_options = {
    isStatic: true
  }

  var ball_options = {
    restitution: 1.0
  }

  
  var ball2_options = {
    restitution: 0.8
  }
  ground = Bodies.rectangle(200, 390, 1000, 20, ground_options);
  ball = Bodies.circle(200, 200, 50, ball_options);
  ball2 = Bodies.circle(300, 200, 20, ball2_options);
  World.add(world, ground);
  World.add(world, ball);
  World.add(world, ball2);

  
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  rect(ground.position.x, ground.position.y, 800, 20);
  ellipse(ball.position.x, ball.position.y, 50, 50);
  ellipse(ball2.position.x, ball2.position.y, 20, 20);
}