allBalls = [];

let font = "Monocraft";


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
    //ball1 = new Ball(x=mouseX,y=mouseY,radius=25);
    //allBalls.push(ball1); 
    // creates circle in with half the values
    // of viewport width and height so that
    // it will always be centered
    //for (let i=0; i < allBalls.length; i++) {
    //    j = new Ball(mouseX,mouseY,35);
    //    j.display();
    //}

    for (let i = 0; i < allBalls.length; i++) {
        //allBalls[i].newRadius();
        allBalls[i].display();
    }
    //if (allBalls.length>0) {
    //allBalls[0].display();
    //}
    textFont(font);
    //textSize(32);
    let str1 = allBalls.length;
    text("ball/object counter: "+str1.toString(), 100, 100)
    
}

class Boundary {}

class Ball {
    constructor(x,y, radius) {
    this.x=x;
    this.y=y;
    this.pos=createVector(x,y);
    //this.vel=p5.vector.random2D().mult(2);
    this.radius=radius;
    }

    display() {
        fill('white')
        noStroke();
        ellipse(this.x,this.y,this.radius,this.radius);
        
        
        
    
    }
    newRadius(i) {
        this.radius=this.radius-1
    }

    //move() {}
}

function mousePressed() {
    let newball = new Ball(mouseX, mouseY, 40);
    allBalls.push(newball);

    
}