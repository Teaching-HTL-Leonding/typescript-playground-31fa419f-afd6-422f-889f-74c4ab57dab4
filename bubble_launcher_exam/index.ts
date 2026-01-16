let circleX: number = 0;
let circleY: number = 150;
let direction: number = 1;

const SPEED: number = 2;
const RADI: number = 10;
const DIAM: number = RADI * 2;

function setup() {
    createCanvas(500, 300);
}

function draw() {
    background("white");

    fill('lightgray');
    stroke('darkgray');
    rect(0, 0, DIAM, height);

    fill('yellow');
    stroke('gold');

    circle(circleX, circleY, DIAM);

    for (let i = 0; i < circleX; i++) {
        circle(circleX[i], circleY[i], DIAM)
        circleX[i] += SPEED * direction[i]


        circleX += SPEED * direction;
        if (circleX[i] - RADI < 0 || circleX[i] + RADI > width) {
            direction[i] *= -1;
            circleX[i] = max(RADI, min(width - RADI, circleX));
        }
    }
}

function mouseClicked() {
    if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) {
        return;
    }
    let y = max(RADI, min(height - RADI, mouseY))

    circleX.push(RADI)
    circleY.push(y)
    direction.push(1)
}
