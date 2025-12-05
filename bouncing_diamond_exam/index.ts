let x = 150;
let y = 50;
let size = 50;
let countdown = 10;
let dx = 2;
let dy = 2;
let  cTopRight ="white"
let cRightBottom
let cBottomLeft
let cLeftTop
function setup() {
    createCanvas(300, 300);
}

function draw() {
    background("gold");
    strokeWeight(5)
    stroke("white")
    line(x, y - size, x + size, y)
    line(x + size, y, x, y+size)
    line(x, y + size, x - size, y)
    line(x - size, y, x, y - size)
    fill("black")
    textAlign(CENTER, CENTER)
    textSize(20)
    text(countdown, x, y)

    if (countdown > 0) {
        x += dx;
        y += dy;
    }
     if (x <= 0 || x >= width) {
         dx*= -1;
         countdown--
    }
      if (y <= 0 || y >= height) {
        dy *= -1;
        countdown--
    }


}
