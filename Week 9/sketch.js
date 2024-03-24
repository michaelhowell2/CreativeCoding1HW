function setup() {
  
  angleMode(DEGREES);
  rectMode(CENTER); 
  
   
  createCanvas(800, 800);
  background(0,0,0,150);  
    
    
  fill(255,226,198)
  ellipse(255,295,100,125)//lear
  ellipse(545,295,100,125)//rear
  ellipse(235,295,50,75)//learinner
  ellipse(565,295,50,75)//rearinner
  rect(400,600,200,155)//neck
  ellipse(400,350,350,425);//face
  
      fill(255,226,198)
  ellipse(205,620,200, 70)//larm
  ellipse(110,500,75, 250)//lforearm
  ellipse(110,350,75, 100)
    ellipse(135,280,20, 80)
  ellipse(80,300,20, 80,)
     ellipse(120,320,15, 35)
       ellipse(100,320,15, 35)
     ellipse(120,340,55, 18)
  
   ellipse(600,620,200, 70)//larm
  ellipse(700,750,75, 250)//lforearm
  
  
  
  fill(128, 0, 108)
  ellipse(400,750,400,450)//body
  
  
  fill(0)
  ellipse(400,225,425,65)//hat
  ellipse(400,50,250,25)//hat
  rect(400,135,255,220)
  ellipse(400,25,250,25)//hat
  fill(255)
 
  ellipse(400,200,265,15)//hat
  
  fill(255)
  ellipse(335,325,75,60);//leye
  ellipse(455,325,75,60);//reye
  
  fill(175,125,80)
  ellipse(335,325,40,35);//liris
  ellipse(455,325,40,35);//riris
  
  fill(0)
  ellipse(335,325,25,20);//lpupil
  ellipse(455,325,25,20);//rpupil
  
  // eyebrows
   fill(152, 60, 0)
   ellipse(330, height/2.5 - 45, 60, 10)
   ellipse(455, height/2.5 - 45, 60, 10)
  
  fill(255,215,215)
  arc(400,475,100,100,0,180)//mouth
  
  noFill()
  arc(400,400,125,55,0,200)

  fill(152, 60, 0)

 arc(400,600,200,95,0,180)//beard

  
  ellipse(400,625,200,325)
  


arc(400,475,155,95,180,0)//mustache
  
     noStroke()
 ellipse(350,475,40,50)
ellipse(450,475,40,50) 
  
  stroke(0        )
fill(0,0,0,200)
  
 arc(400,475,100,100,0,180)//mouth
  fill(238,169,184)
   arc(395,500,45,45,0,205)//toungue
   line(390,515,395,505)
  

   fill(255,215,0)
 triangle(490,200,300,200,400,80);  
  
  fill(0)
  textSize(15);
  text('MICHAEL HOWELL', 330, 175);

  
  strokeWeight(5)
  stroke(255)
  point(335,325)
  point(455,325)

  strokeWeight(10)
  fill(186, 9, 235)
  textSize(45);
  text('ROCK ON!',25, 175);

}