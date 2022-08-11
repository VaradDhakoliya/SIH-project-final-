var form,system,code,security;
var score=0;

function preload() {
 
}

function setup() {
  createCanvas(1220,600);
  system = new System();
  security = new Security();

}

function draw() {
  background(0);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 5) {
    clear()
    background(136, 182, 235);
    fill("black")
    textSize(40);
    text("Excellent, Perfect Score, 5/5",400, 300);
  }

  drawSprites()
}