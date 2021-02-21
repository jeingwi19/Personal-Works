//let heart;

function preload() {
  //heart = loadModel('assets/obj/heart.obj', true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background('#222');
  noFill();
  stroke(160);
  scale(1);
  rotateX(frameCount * 0.5);
  rotateY(frameCount * 0.5);
  //normalMaterial();
  //model(heart);
  sphere(160);
}