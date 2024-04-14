//borrowed alot from the lesson and a couple other places.
// changed numbers and colors nothing original 
//as I'm still a bit slow on all this...


// x and y for player(rect)
var rectX = 50;
var rectY = 50;

// Key code for WASD
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a bomb1
var shapeX = -600;
var shapeY = 300;
var shapeXSpeed;
var shapeYSpeed;

// x and y for  abomb2
var shapeX2 = 300;
var shapeY2 = -800;
var shapeX2Speed;
var shapeY2Speed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(800,900);
    // random speed bomb 1
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 25)) + 1);

    background(0);// the canvas color

    createCharacter(200,350)

    createCanvas(800,900);
    //random speed bomb 2
    shapeX2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeY2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(0);
    stroke(300);
    fill('red');

    // call borders
    createBorders(10);

    // exit 
    textSize(30);
    text("EXIT", width-85,height-20)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();


    // bombs
    fill(13,145,14);
    // bombs shape
    circle(shapeX, shapeY, 20);

     // bombs2
     fill('yellow');
     // bombs shape
     circle(shapeX2, shapeY2, 15);

     // random speed bomb1
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 2);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 25)) + 2);
     //random speed bomb 2
     shapeX2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
     shapeY2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
   

     // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    shapeX2 += shapeX2Speed;
    shapeY2 += shapeY2Speed;
    // check to see if the shape has gone out of bounds
    if(shapeX2 > width)
    {
        shapeX2 = 0;
    }
    if(shapeX2 < 0)
    {
        shapeX2 = width;
    }
    if(shapeY2 > height)
    {
        shapeY2 = 0;
    }
    if(shapeY2 < 0)
    {
        shapeY2 = height;
    }

    // Player 1 out of here!
    if(rectX > width && rectY > width-72)
    {
        fill('white');
        stroke('white');
        textAlign(CENTER, CENTER);
        textSize(60);
        text("You Win!", width/2-50, height/2-50);
    }

    //fire for mouse clicks

    fill('orange');
    stroke ('yellow')
    strokeWeight(4);
    circle(mouseShapeX, mouseShapeY, 25);

  strokeWeight(0);//return to no stroke
}

function characterMovement()
{
//movement WASD
    if(keyIsDown(w))
    {
        rectY -= 10;   
    }
    if(keyIsDown(s))
    {
        rectY += 10;   
    }
    if(keyIsDown(a))
    {
        rectX -= 10;   
        console.log("movement: " + rectX);
    }
    if(keyIsDown(d))
    {
        rectX += 10;   
    }
}

//fine tune movement wit Arrow Keys Creepin'
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
      rectX -= 10;
  } 
  else if (keyCode === RIGHT_ARROW) {
      rectX += 10;
  }
  else if (keyCode === UP_ARROW) {
      rectY -= 10;
  }
  else if (keyCode === DOWN_ARROW) {
      rectY += 10;
  }

}

function mouseClicked()//clickie here
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function createCharacter(x,y)
{
    rectX = x;
    rectY = y;
    console.log(rectX);
    //character

}

function drawCharacter()
{
    fill('white');
    rect(rectX,rectY,50,10);// Player
}
function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-50);

   }





  




  

    
    
    
   
    
    
