let happy = true;

function setup() {
  createCanvas(400, 400);
  background(240);
  smile(true); // erstes Gesicht ist happy
}

function mousePressed() {
  smile(happy);
  happy = !happy; 
}

function smile(isHappy: boolean) {
  let x = random(width);
  let y = random(height);
  let r = 40;

  fill(isHappy ? "yellow" : "lightgreen");
  stroke(0);
  circle(x, y, r);

  fill(0);
  circle(x - 8, y - 5, 4);
  circle(x + 8, y - 5, 4);

  noFill();
  if (isHappy) {
    arc(x, y + 5, 20, 15, 0, PI);
  } else {
    arc(x, y + 15, 20, 15, PI, TWO_PI);
  }
}