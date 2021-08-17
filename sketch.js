function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

hr = hour();
mn = minute(); 
sc = second();

angleMode(DEGREES);


function draw() {
  background(255,255,255);  
  
  push();
  rotate (scAngle); 
  scAngle = map (sc, 0, 60, 360); 
  stroke(255,0,0)
  strokeWeight(7); 
  line (0,0,100,0);
  pop();

  drawSprites();
}