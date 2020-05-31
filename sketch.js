var car,car2,car3, wall;
var speed,weight

function setup() {
 createCanvas(1600,400);

 car= createSprite(50, 200, 30, 30);
 car2=createSprite(50,125,30,30);
 car3=createSprite(50,275,30,30);
 wall=createSprite(1500,200,30,height/2);
 wall.shapecolor=color(80,80,80);

 speed=random(35,80);
 speed2=random(60,140);
 speed3=random(90,150);

 weight=random(400,700);
 weight2=random(500,1200);
 weight3=random(180,800);
  
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

    if (deformation>200)
    {
      car.shapeColor=color(255,0,0);
      text("Damage:"+round(deformation),500,200);
    }

    if(deformation>120 && deformation<200);
    {
      car.shapeColor=color(255, 143, 0);
      text("Damage:"+round(deformation),500,200);
    }

    if(deformation<120 && deformation>50)
    {
      car.shapeColor=color(230,230,0);
      text("Damage;"+round(deformation),500,200);
    }

    if(deformation<50)
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

    if (deformation>200)
    {
      car2.shapeColor=color(255,0,0);
      text("Damage:"+round(deformation),500,125);
    }

    if(deformation>120 && deformation<200)
    {
      car2.shapeColor=color(255, 143, 0);
      text("Damage:"+round(deformation),500,125);
    }

    if(deformation<120 && deformation>50)
    {
      car2.shapeColor=color(230,230,0);
      text("Damage:"+round(deformation),500,125);
    }

    if(deformation<50)
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

    if (deformation>200)
    {
      car3.shapeColor=color(255,0,0);
      text("Damage:"+round(deformation),500,275);
    }

    if(deformation>120 && deformation<200)
    {
      car3.shapeColor=color(255, 143, 0);
      text("Damage:"+round(deformation),500,275);
    }

    if(deformation<120 && deformation>50)
    {
      car3.shapeColor=color(230,230,0);
      text("Damage:"+round(deformation),500,275);
    }

    if(deformation<50)
    {
      car3.shapeColor=color(0,250,0);
      text("Damage:"+round(deformation),500,275);
    }

  }
  car3.depth=wall.depth;
  car3.depth=car3.depth+1;

  text("car turns green then the deformation is less than 50",80,25);
  text("car turns yellow then the deformation is between 50 and 120",80,50);
  text("car turns orange then the deformation is between 120 and 200 ",80,75);
  text("car turns red then the deformaion is greater than 200",80,100);

  drawSprites();
}