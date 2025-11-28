function setup() {
    const num = Math.floor(random(0,64 ));

    const number1 = num % 2
    const number2 = Math.floor(num / 2) % 2;
    const number3 = Math.floor(num / 4) % 2;
    const number4 = Math.floor(num / 8) % 2;
    const number5 = Math.floor(num / 16) % 2;
    const number6 = Math.floor(num / 32) % 2;

    createCanvas(550, 300);
    background("black");

    noFill();
    stroke("yellow");

    rect(50 + 0 * 75, 100, 50, 75);
    rect(50 + 1 * 75, 100, 50, 75);
    rect(50 + 2 * 75, 100, 50, 75);
    rect(50 + 3 * 75, 100, 50, 75);
    rect(50 + 4 * 75, 100, 50, 75);
    rect(50 + 5 * 75, 100, 50, 75);

    textAlign(CENTER, CENTER);
    fill("yellow");
    noStroke();

    text(num, width / 2, height - 20);

    textSize(30);

    text(number6, 75 + 0 * 75, 100 + 75 / 2);
    text(number5, 75 + 1 * 75, 100 + 75 / 2);
    text(number4, 75 + 2 * 75, 100 + 75 / 2);
    text(number3, 75 + 3 * 75, 100 + 75 / 2);
    text(number2, 75 + 4 * 75, 100 + 75 / 2);
    text(number1, 75 + 5 * 75, 100 + 75 / 2);
}