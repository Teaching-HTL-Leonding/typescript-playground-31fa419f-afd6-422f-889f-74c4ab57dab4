let circleX: number[] = []
let circleY: number[] = []
let direction: number[] = []

let launcherY: number = 150

const SPEED: number = 2;
const RADI: number = 10;
const DIAM: number = RADI * 2;

function setup() {
    createCanvas(500, 300);
    circleX.push(RADI)
    circleY.push(height / 2)
    direction.push(1)
}

function draw() {
    background("white");

    fill('lightgray');
    stroke('darkgray');
    rect(0, 0, DIAM, height);

    launcherY = mouseY
    launcherY = max(RADI,min(height - RADI, launcherY ))
    fill("orange")
    stroke("darkorange")
    circle(RADI, launcherY, DIAM)

    fill('yellow');
    stroke('gold');

    for (let i = 0; i < circleX.length; i++) {
        circle(circleX[i], circleY[i], DIAM);

        circleX[i] += SPEED * direction[i];
        if (circleX[i] - RADI < 0 || circleX[i] + RADI > width) {
            direction[i] *= -1;
            circleX[i] = max(RADI, min(width - RADI, circleX[i]));
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
