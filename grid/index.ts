function setup() {
  
    const SIZE = 400;
    const GRID = 25;

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(0.25);
    stroke("lightgray");

    let i = GRID;
    for (i < SIZE) {
        line(i, 0, i, SIZE);
        i += GRID;
    }

    i = GRID;
    for (i < SIZE) {
        line(0, i, SIZE, i);
        i += GRID;
    }
}