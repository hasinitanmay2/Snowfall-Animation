
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;
var bg,r;
var snow;
//var snow2;



function preload() {
 bg = loadImage("snow2.jpg");
 

}



function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
 world = engine.world;
 if(frameCount%200===0){
   snow = new Snowflake(random(0,800),10);
 }
 
}

function draw() {
 
  
  Engine.update(engine);

  background(bg);
  
   

  snow.display();

  
  
  drawSprites();
  
}
