function setup() {
    vh=windowHeight;
    vw=windowWidth;
    let canvas = createCanvas(vw,vh);
    canvas.parent('canvas-container');
    
    
}
function draw() {
    background('black');
    fill('purple');
    circle(vw/2,vh/2,400); 
    // creates circle in with half the values
    // of viewport width and height so that
    // it will always be centered
    ball1 = new Ball(mouseX,mouseY)
    ball1.display()

}

class Boundary {}

class Ball {
    constructor(x,y) {
    this.x=x;
    this.y=y;
    this.pos=createVector(x,y);
    //this.vel=p5.vector.random2D().mult(2);
    this.radius=100;
    }

    display() {
        fill('white')
        noStroke();
        ellipse(this.x,this.y,100,100)
    }
    move() {}
}

function mousePressed() {
    let ball = new Ball(mouseX, mouseY)
}