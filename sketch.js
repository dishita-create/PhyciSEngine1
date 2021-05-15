 const Engine=Matter.Engine
 const World=Matter.World
 const Bodies=Matter.Bodies
 
 
 

 function setup() {
  createCanvas(1800,1400);
 // createSprite(400, 200, 50, 50);


engine=Engine.create()
world=engine.world
var ball_options={
  restitution:1.5
}
ball=Bodies.circle(200,200,30,ball_options)
World.add(world,ball)

var ground_options={
isStatic:true

}
ground=Bodies.rectangle(300,900,600,40,ground_options)
World.add(world,ground)
console.log(ball)
}

function draw() {
  background("Pink");  
 // drawSprites();
 Engine.update(engine)
 fill ("orange")
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,30,30)
 fill ("blue")
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,600,40)
}