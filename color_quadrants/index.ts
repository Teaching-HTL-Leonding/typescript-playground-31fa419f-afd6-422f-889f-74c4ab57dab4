const textAreaHeight: number = 50;
const textAreaWidth: number = 200;

function setup() {
    createCanvas(400, 200);
    background("black");

    noStroke();

    
    fill("orange");
    rect(0, 0, width / 2, height / 2);

    
    fill("green");
    rect(width / 2, 0, width / 2, height / 2);

    
    fill("red");
    rect(width / 2, height / 2, width / 2, height / 2);

    
    fill("blue");
    rect(0, height / 2, width / 2, height / 2);

    
    fill("black");
    rect(width / 2 - textAreaWidth / 2, height / 2 - textAreaHeight / 2, textAreaWidth, textAreaHeight);
}

function mouseClicked() {
   
    fill("black");
    rect(width / 2 - textAreaWidth / 2, height / 2 - textAreaHeight / 2, textAreaWidth, textAreaHeight);


    noStroke();
    fill("white");
    textSize(30);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);

    
    let message: string;

    if (mouseX < width / 2) {
       

        if (mouseY < height / 2) {
            
            message = "Orange";
        } else {
           
            message = "Blue"
        }
    } else {
        

        if (mouseY < height / 2) {
            message = "Green";
        } else {
     
            message = "Red"
        }
    }

    text(message, width / 2, height / 2);
}