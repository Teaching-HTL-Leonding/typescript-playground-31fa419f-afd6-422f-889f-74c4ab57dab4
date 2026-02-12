let happy = true

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  smile(true);
}

function mousePressed(){
  smile(happy);
  happy = !happy
}

function smile(happy: boolean) {
  let x = random(500);
  let y = random (500);

  circle(x, y, 40);
  circle(x - 5, y- 5, 5);
   circle(x + 5, y- 5, 5);

   if (happy) {
    line(x - 8, y + 8, x + 8, x + 8,);
   } else {
    line (x - 8, y + 12, x + 8, y + 12)
   }


}
