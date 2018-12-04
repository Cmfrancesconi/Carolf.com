
var x=10
var y=10

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  var red = map(mouseX, 0, width, 0, 255);
  var green = map((mouseX - mouseY), 0, (width - height), 0, 100);
  var blue = map(mouseY, 0, height, 0, 255);
  
background (red, green, blue,10);
}

function draw() {
  

//   var red = map(mouseX, 0, width, 0, 255);
//   var green = map((mouseX - mouseY), 0, (width - height), 0, 100);
//   var blue = map(mouseY, 0, height, 0, 255);
  
// background (red, green, blue,10);
  
  // fill(red, green, blue, 20);

  //   noStroke()
  //   r=random (0,255)
  //   b=random (0,255)
  //   d=random (0,20)
  // fill (r,70,b,d)
  //ellipse(mouseX-40, mouseY,s,s)


  stroke (random(0, 255), random(0, 255), random(0, 255), random(0, 100));


  var diffx = mouseX - x;
  var diffy = mouseY - y;
  
var easing = 0.05;

  // stroke (0);
  strokeWeight(4)
  line (mouseX + random (0,25), mouseY+ random (0,100),diffx + random (0,50), diffy + random (0,10));
  line (mouseX + random (0,10), mouseY+ random (0,10),diffx - random (0,100), diffy - random (0,100));
  line (mouseX - random (0,10), mouseY- random (0,10),diffx - random (0,100), diffy - random (0,100));
  line (mouseX - random (0,10), mouseY- random (0,10),diffx + random (0,100), diffy + random (0,100));

  // random(ellipse(mouseX + 60, mouseY, random(0, 100), random(0, 100)), rect(mouseX + 60, mouseY, random(0, 100), random(0, 100)), triangle(mouseX + random(0, 100), mouseY + random(0, 100), mouseX, mouseY, mouseX + random(0, 100), mouseY + random(0, 100)))

}

function mousePressed(){
background (red, green, blue,10);
}