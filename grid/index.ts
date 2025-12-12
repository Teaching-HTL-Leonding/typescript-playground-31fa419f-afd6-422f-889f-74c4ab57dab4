function setup() {

    const SIZE = 400;

    const GRID = 25;
 
    createCanvas(SIZE, SIZE);

    background("black");
 
    strokeWeight(0.25);

    stroke("lightgray");

    for (let i = GRID; i < SIZE; i += GRID) {

        line(i, 0, i, SIZE);

    }

    for (let i = GRID; i < SIZE; i += GRID) {

        line(0, i, SIZE, i);

    }

}
 