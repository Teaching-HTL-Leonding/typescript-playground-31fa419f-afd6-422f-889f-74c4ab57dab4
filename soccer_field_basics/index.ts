const SCALE = 5;

const MARGIN = 4;
const SOCCERFIELDWIDTH = 70;
const SOCCERFIELDLENGTH = 100;

function setup() {
    
    createCanvas((SOCCERFIELDLENGTH + MARGIN * 2) * SCALE, (SOCCERFIELDWIDTH + MARGIN * 2) * SCALE);
    background("green");

    strokeWeight(0.5);
    stroke("white");
    noFill();
    angleMode(DEGREES);

    push();

    scale(SCALE);

    
    translate(MARGIN, MARGIN);

    rect(0,0, SOCCERFIELDLENGTH, SOCCERFIELDWIDTH);
   const SOCCERMIDDLELINE = SOCCERFIELDWIDTH / 2;
   const LENGTHGOALAREA = 5.5 * 2 + 7.32
   const WIDTHGOALAREA = 5.5;
   const SOCCERMIDDLELINEX = SOCCERFIELDLENGTH / 2;
   

   rect(0,SOCCERMIDDLELINE-LENGTHGOALAREA/2, WIDTHGOALAREA, LENGTHGOALAREA);
   
   line(SOCCERMIDDLELINEX, 0, SOCCERMIDDLELINEX, SOCCERFIELDWIDTH);
   circle(SOCCERMIDDLELINEX, SOCCERMIDDLELINE, 9.15*2);
   rect(95, 26, 5, 20);
   rect(0, 10, 15, 50);
   rect(85, 10, 15, 50);

   fill("White");
   circle(11, SOCCERMIDDLELINE, 1);

   circle(SOCCERMIDDLELINEX, SOCCERMIDDLELINE, 1);

   circle(89, SOCCERMIDDLELINE, 1)
   
   line(5, 70, 0, 65)
   line(5, 0, 0, 5)

   line(95, 70, 100, 65)
   line(95, 0, 100, 5)
}