function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}
function mouseMoved() {
 background("black");

let width = Math.abs((mouseX - width/2) * 2)
let heightx = Math.abs((mouseY - height/2) * 2);

noFill()
stroke("white")
rect(mouseX, mouseY, heightx)








}

