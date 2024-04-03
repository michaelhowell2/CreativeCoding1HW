var textSizeRock = 20;
var textSizeCrazy= 35;
var movement =1;
var circleX=335;
var circleY=325;
var moveX 
var moveY 
var beard =400
var moveBeardX
var textNameY = 175
var textNameYMove =3;

function setup() {
  angleMode(DEGREES);
  rectMode(CENTER); 
  createCanvas(800, 800);
  background(99);
  
  moveX = random(-1,4);
  moveY = random(-1,4);
 moveBeardX = random(-1,4);

}

    
function draw() {
  background(99);  
  //Face and Head
stroke(0,0,0)
strokeWeight(1) 
fill(255,226,198)
ellipse(255,295,100,125)//lear
ellipse(545,295,100,125)//rear
ellipse(235,295,50,75)//learinner
ellipse(565,295,50,75)//rearinner
rect(400,600,200,155)//neck
ellipse(400,350,350,425);//face


//Left Facing Arm
ellipse(205,620,200, 70)//larm
ellipse(110,500,75, 250)//lforearm
ellipse(110,350,75, 100)
ellipse(135,280,20, 80)
ellipse(80,300,20, 80,)
ellipse(120,320,15, 35)
ellipse(100,320,15, 35)
ellipse(120,340,55, 18)


//Right Facing Arm
ellipse(600,620,200, 70)//rarm
ellipse(700,750,75, 250)//rforearm


// Purple Body
fill(128, 0, 108)
ellipse(400,750,400,450)//body

//Hat
fill(0)
ellipse(400,225,425,65)//hat
ellipse(400,50,250,25)//hat
rect(400,135,255,220)
ellipse(400,25,250,25)//hat
fill(255)
ellipse(400,200,265,15)//hat

//Eyes
fill(255)
ellipse(335,325,75,60);//leye
ellipse(455,325,75,60);//reye

fill(175,125,80)
ellipse(circleX,325,40,35);
  fill(0);//black
  ellipse(circleX,325,25,20);//eye pupil
  circleX=circleX+moveX;
  if(circleX>345){
  moveX=-1
  }
if(circleX<325){
moveX=3
}

fill(175,125,80)
ellipse(455,circleY,40,35);//sets size of inner circle but makes movement based on mouse position
  fill(0);//black
  ellipse(455,circleY,25,20);//eye pupil
  circleY=circleY+moveY;
  if(circleY>335){
  moveY=-1
  }
if(circleY<310){
moveY=1
}


// eyebrows
 fill(152, 60, 0)
 ellipse(335, height/2.5 - 45, 60, 10)
 ellipse(455, height/2.5 - 45, 60, 10)

 
 //Mouth
fill(255,215,215)
arc(400,475,100,100,0,180)//mouth

noFill()
arc(400,400,125,55,0,200)

fill(152, 60, 0)

//Facial Hair
ellipse(beard,625,200,325)
arc(400,475,155,95,180,0)//mustache
beard=beard+moveBeardX;
  if(beard>405){
    moveBeardX=-1
  }
if(beard<395){
  moveBeardX=3

}

noStroke()
ellipse(350,475,40,50)
ellipse(450,475,40,50) 

stroke(0)
fill(0,0,0,200)

arc(400,475,100,100,0,180)//mouth
fill(238,169,184)
 arc(395,500,45,45,0,205)//tongue
 line(390,515,395,505)//tongue line


fill(255,215,0)
triangle(490,200,300,200,400,80);  

fill(0)
textSize(15);
text('MICHAEL HOWELL', 330, textNameY);

textNameY=textNameY+textNameYMove;
if(textNameY>185){
textNameYMove=-1
}
if(textNameY<165){
textNameYMove=1
}


  
stroke(255)
strokeWeight(10)
fill(186, 9, 235)
textSize(textSizeRock);
text('ROCK ON!',50,200)

if (textSizeRock >= 75 || textSizeRock <= -1) {
  movement *= -1;
}
textSizeRock += movement;

stroke(255)
strokeWeight(10)
fill( 255, 195, 0 )
textSize(textSizeCrazy);
text('CRAZY!',frameCount,frameCount)






}








