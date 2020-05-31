var car,car2,car3, wall;
var speed,weight

function setup() {
 createCanvas(1600,400);

 car= createSprite(50, 200, 30, 30);
 car2=createSprite(50,125,30,30);
 car3=createSprite(50,275,30,30);
 wall=createSprite(1500,200,30,height/2);
 wall.shapecolor=color(80,80,80);

 speed=random(35,70);
 speed2=random(50,80);
 speed3=random(20,40);

 weight=random(800,1200);
 weight2=random(100,400);
 weight3=random(400,800);
  
 car.velocityX=speed;
 car2.velocityX=speed2;
 car3.velocityX=speed3;

}


function draw() {
  background(0,0,0); 


  if(car.isTouching(wall))
  {
    car.velocityX=0;

    var deformation=0.5*weight*speed*speed/22500;
 

    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
      text("damage"+deformation,500,200);
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
      text("damage"+deformation,500,200);
    }

    if(deformation<100)
    {
      car.shapeColor=color(0,250,0);
      text("Damage:"+round(deformation),500,200);
    }

  }
  car.depth=wall.depth;
  car.depth=car.depth+1;

  if(car2.isTouching(wall))
  {
    car2.velocityX=0;

    var deformation=0.5*weight2*speed2*speed2/22500;

    if(deformation>180)
    {
      car2.shapeColor=color(255,0,0);
      text("Damage:"+round(deformation),500,125);
    }

    if(deformation<180 && deformation>100)
    {
      car2.shapeColor=color(230,230,0);
      text("Damage:"+round(deformation),500,125);
    }

    if(deformation<100)
    {
      car2.shapeColor=color(0,250,0);
      text("Damage:"+round(deformation),500,125);
    }

    car2.depth=wall.depth;
    car2.depth=car2.depth+1;

  }


  if(car3.isTouching(wall))
  {
    car3.velocityX=0;

    var deformation=0.5*weight3*speed3*speed3/22500;

    if(deformation>180)
    {
      car3.shapeColor=color(255,0,0);
      text("Damage:"+round(deformation),500,275);
    }

    if(deformation<180 && deformation>100)
    {
      car3.shapeColor=color(230,230,0);
      text("Damage:"+round(deformation),500,275);
    }

    if(deformation<100)
    {
      car3.shapeColor=color(0,250,0);
      text("Damage:"+round(deformation),500,275);
    }

  }
  car3.depth=wall.depth;
  car3.depth=car3.depth+1;

  text("car turns green then the deformation is less than 100",80,50);
  text("car turns yellow then the deformation is between 100 and 180",80,75);
  text("car turns red then the deformation is greater than 180",80,100);

  drawSprites();
}