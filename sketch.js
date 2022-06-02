const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var boat;

function preload (){
  backgroundImg=loadImage("./assets/background.gif")
  boat.png=loadImage;
}

function setup() {
  createCanvas(1300,550);

  engine = Engine.create();
  world = engine.world;
tower=new Tower(150,350,160,310)


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(50);
  image(backgroundImg,0,0,width,height);
  Engine.update(engine);
tower.display();

 
}

