function setup() {
  createCanvas(200, 200);

 
}

function mouseMoved() {
  background("aqua")
  stroke("blue");
  noFill();
  // "Variable"
  circle(mouseX, mouseY, 15)
  circle(mouseX, mouseY, 30)
  line(mouseX - 20, mouseY, mouseX + 20, mouseY);
  line(mouseX, mouseY - 20, mouseX, mouseY + 20);

}
