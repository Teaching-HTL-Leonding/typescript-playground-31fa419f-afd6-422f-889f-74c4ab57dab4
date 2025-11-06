function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}
 
function mouseMoved() {
    background("black")
    stroke('white')
    noFill()
 
    let w = (mouseX - width / 2) * 2
    let h = (mouseY - height / 2) * 2
 
    ellipse(width / 2, height / 2, w, h)
 
   
    noStroke()
    fill('white')
    let a = w / 2 * h / 2 * Math.PI
    text(`Area: ${abs (a)}`, 10, height-20)

    line(width / 2 )
 
   
}
 