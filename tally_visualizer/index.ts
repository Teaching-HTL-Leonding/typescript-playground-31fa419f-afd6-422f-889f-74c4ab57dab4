// Layout constants
const GROUPS_PER_ROW = 10;
const ROWS = 10;
const MARKS_PER_GROUP = 5;
const TOTAL = ROWS * GROUPS_PER_ROW * MARKS_PER_GROUP; // 500

const GROUP_W = 42;   // width of one tally group
const GROUP_H = 36;   // height of the vertical strokes
const COL_GAP = 10;   // gap between groups
const ROW_GAP = 16;   // gap between rows
const MARGIN = 16;
const TITLE_HEIGHT = 30;


const CELL_W = GROUP_W + COL_GAP;
const CELL_H = GROUP_H + ROW_GAP;

// Colors
const COLOR_FILLED = "steelblue";
const COLOR_EMPTY = 200

let randomNumber: number

function strokesToColor(groupIndex: number): number {
    let start = groupIndex * 5
    let rest = randomNumber - start
    if (rest >= 5) return 5
    if (rest > 0) return rest
    return 0
}

function drawGroup(colored: number): void {
    strokeWeight(3)

    for (let i = 0; i < 4; i++) {
        if (i < colored) {
            stroke(COLOR_FILLED)
        } else {
            stroke(COLOR_EMPTY)
        }
        line(i * 8, 0, i * 8, GROUP_H)
    }
    if (colored == 5) {
        stroke(COLOR_FILLED)
        line(0, GROUP_H, 24, 0)

    }

}

function setup(): void {
    const canvasW = GROUPS_PER_ROW * CELL_W + 2 * MARGIN;
    const canvasH = ROWS * CELL_H + TITLE_HEIGHT + MARGIN;
    createCanvas(canvasW, canvasH);

    randomNumber = Math.floor(Math.random() * (TOTAL + 1));

    background("white");

    textSize(16)
    fill(0)
    text("Random Number: " + randomNumber + " / 500", MARGIN, 20)

    translate(MARGIN, TITLE_HEIGHT)

    let groupIndex = 0

    for (let r = 0; r < ROWS; r++) {

        push()

        for (let c = 0; c < GROUPS_PER_ROW; c++) {

            let colored = strokesToColor(groupIndex)
            drawGroup(colored)

            translate(CELL_W, 0)
            groupIndex++
        }
        pop()
        translate(0, CELL_H)
    }

}