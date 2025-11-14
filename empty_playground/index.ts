function setup() {
    createCanvas(400, 400);
    background("hotpink")
}

let x: number = 0
let direction: number = 5


function draw() {
    background("hotpink")
    fill("darkblue")
    circle(x, 200, 50)
    x += direction

    // === gleich
    // !== nicht gleich
    // >, >=, <, <= Vergleiche
    if (x === width){direction = -5  }
    if (x === 0) { direction = 5}
}
