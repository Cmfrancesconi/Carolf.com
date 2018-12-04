
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
  strokeWeight(2)
  line (mouseX + random (0,25), mouseY+ random (0,50),diffx + random (0,75), diffy + random (0,100));
  line (mouseX + random (0,100), mouseY+ random (0,75),diffx - random (0,50), diffy - random (0,25));
  line (mouseX - random (0,125), mouseY- random (0,150),diffx - random (0,175), diffy - random (0,200));
  line (mouseX - random (0,200), mouseY- random (0,175),diffx + random (0,125), diffy + random (0,100));

  // random(ellipse(mouseX + 60, mouseY, random(0, 100), random(0, 100)), rect(mouseX + 60, mouseY, random(0, 100), random(0, 100)), triangle(mouseX + random(0, 100), mouseY + random(0, 100), mouseX, mouseY, mouseX + random(0, 100), mouseY + random(0, 100)))

}

function mousePressed(){
background (red, green, blue,10);
}