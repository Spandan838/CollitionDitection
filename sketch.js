var bullet,wall;
var speed,weidth;


function setup() {
  createCanvas(1300,400);
  speed = random(223,321);
 weidth = random(30,52);
 thikness = random(22,83);
 bullet = createSprite(50, 200, 100, 10);
 bullet.velocityX = speed;
  wall = createSprite(1200,200,thikness,height/2);
  
  
}

function draw() {
  background("blue");
  if(collisiondetection(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5*weidth*speed*speed/(thickness*thickness*thickness);
   
   if(damage > 10)
   {
     wall.shapeColor=color("Green")
   }

   if(damage < 10)
   {
     wall.shapeColor=color("Red")
   }
  }
  
drawSprites();
}

function collisiondetection(target1, target2){
    
  bulletRightEdge=target1.x + target1.weidth;
    wallLeftEdge=target2.x;
  
    if(bulletRightEdge>=wallLeftEdge){   
      return true;
    
  }
  else {
    return false;
    
  }

}