var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var balls = [];
var plinkos = [];
var divisions =[];
var ball;

var gameState = 0;
var Loop = 0;

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 25; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 25; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}


function draw() {
  background(0);
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");

  textSize(35)
  text(" 100 ", 5, 550);
  text(" 100 ", 80, 550);
  text(" 200 ", 160, 550);
  text(" 200 ", 240, 550);
  text(" 500 ", 320, 550);
  text(" 500 ", 400, 550);
  text(" 200 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 100 ", 640, 550);
  text(" 100 ", 720, 550);
  Engine.update(engine);
  ground.display();


  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(ball!=null){
      
      ball.display();
  
      if(ball.body.position.y > 720 && ball.body.position.x > 0 && ball.body.position.x < 160){
        score = score + 100;
        ball = null;
      }
    
      if(ball.body.position.y > 720 && ball.body.position.x > 160 && ball.body.position.x < 320){
        score = score + 200;
        ball = null;
      }

      if(ball.body.position.y > 720 && ball.body.position.x > 320 && ball.body.position.x < 480){
        score = score + 500;
        ball = null;
      }

      if(ball.body.position.y > 720 && ball.body.position.x > 480 && ball.body.position.x < 540){
        score = score + 200;
        ball = null;
      }

      if(ball.body.position.y > 720 && ball.body.position.x > 540 && ball.body.position.x < 700){
        score = score + 100;
        ball = null;
      }
      
    }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
  gameState === 0;

}


function mousePressed(){
  
  if(gameState <= 9){
    
    ball=new Ball(mouseX, 10, 10, 10); 
    
    gameState = gameState + 2;

  }
  else{
    fill("red");
    textSize(200);
    text("Game Over", 150, 400);
  }
}

