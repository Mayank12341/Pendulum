const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var constrainedLog;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;



    ground = new Ground(600,height,1200,20);
   
  
  
    pig1 = new Pig(610, 50);
  
-4
   
    bird = new Bird(100,100);
    
    constrainedLog=new Box(600,20 );
    
    chain=new Chain(constrainedLog.body,pig1.body,);
}

function draw(){
    background("cyan");
    Engine.update(engine);
   
   
    ground.display();
    pig1.display();
 
    bird.display();
    
    constrainedLog.display();
    chain.display();
  
    
}
