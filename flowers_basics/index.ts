function setup() {
createCanvas(1000, 1000)
background("skyblue")

noStroke()


fill("purple");
circle(630, 500, 80)
circle(680, 550, 80)
circle(730, 500, 80)
circle(680, 450, 80)

fill("yellow")
circle(680, 500, 65)

angleMode(DEGREES)
noFill()
strokeWeight(6)
stroke("green")
arc(680, 580, 100, 150, -45, 75)

noStroke()
fill("yellow")
circle(250, 500, 65)

fill("purple")
circle(200, 520, 70)
circle(240, 560, 70)
circle(300, 540, 70)
}