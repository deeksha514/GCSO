var car, wall;
var speed,weight

function setup() {
 createCanvas(1600,400);

 car= createSprite(50, 200, 30, 30);
 wall=createSprite(1500,200,30,height/2);
 wall.shapecolor=color(80,80,80);

 speed=random(55,90);
 weight=random(400,1500);

 car.velocityX=speed;

}


function draw() {
  background(0,0,0); 
  
  if(wall.x-car.x<(wall.width+car.width)/2)
  {
    car.velocityX=0;

    var deformation=0.5*weight*speed*speed/22500;

    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }

    if(deformation<100)
    {
      car.shapeColor=color(0,250,0);
    }

  }

  wall.depth=car.depth;
  car.depth=car.depth+1;

  text("car turns green then the deformation is less than 100",80,50);
  text("car turns yellow then the deformation is between 100 and 180",80,75);
  text("car turns red then the deformation is greater than 180",80,100);

  drawSprites();
}