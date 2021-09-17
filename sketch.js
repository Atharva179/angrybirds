
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var plat;
var log6;
var sling;
var gameState= "onsling"
var score = 0;

function preload() {
   getBackground();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    plat = new Ground(150,305,300,170)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230, 200, 80, PI/2);
    sling = new Slingshot(bird.body , {x:200,y:50})


}

function draw(){
    if(backgroundImg){
        background(backgroundImg); 
    }
    
    Engine.update(engine);

    textSize(20);
    fill("white");
    text("SCORE:" + score, 500,50)
    
    box1.display();
    box2.display();
    ground.display();
    plat.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    pig2.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();

    sling.display();
    
    
    
}


function mouseDragged(){
    if(gameState=== "onsling" ){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
    
}

function mouseReleased () {
    sling.fly();
    gameState = "launched"
}

function keyPressed() {
    if(keyCode===32){
        bird.trajectory = []
        Matter.Body.setPosition(bird.body,{x:200, y:50})
        gameState = "onsling"
        sling.attach(bird.body)  
    }
}

async function getBackground(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON.datetime);

    var dt = responseJSON.datetime;
    var hour = dt.slice(11, 13);

    console.log(hour)

    if(hour>=06 && hour<12){
        var bg = "sprites/bg.png"
    }

    else{
        var bg = "sprites/bg2.jpg"
    }

    backgroundImg = loadImage(bg)

}