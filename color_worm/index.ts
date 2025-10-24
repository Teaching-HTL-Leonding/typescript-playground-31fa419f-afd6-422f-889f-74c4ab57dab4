function setup() {
    createCanvas(500, 500);
    colorMode(HSB);
    background(0, 100, 0);
    noStroke();
}

// Globale Variabel
let color_hue: number = 0;

function mouseClicked() {
    fill(color_hue, 100, 100)
    circle(mouseX, mouseY, 70)
    color_hue = color_hue + 400
    color_hue = color_hue % 360
    //console.log(color_hue)
}
