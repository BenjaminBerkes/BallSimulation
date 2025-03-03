allBalls = [];
textColor = "orange";
boundaryColor = "orange";
let font = "Monocraft";
boundarydiameter = 400;
balldiameter = 40;

function setup() {
    frameRate(24)
    vh=windowHeight;
    vw=windowWidth;
    let canvas = createCanvas(vw,vh);
    canvas.parent('canvas-container');
    gravityvector = createVector(0,0.75);
    
    
}
function draw() {
    background('black');
    
    drawBoundary();
    displayText();
    // creates circle in with half the values
    // of viewport width and height so that
    // it will always be centered
    
    
    
    
    //for (let i=0; i < allBalls.length; i++) {
    //    j = new Ball(mouseX,mouseY,35);
    //    j.display();
    //}
    
    
    //ball1 = new Ball(x=mouseX,y=mouseY,radius=25); allBalls.push(ball1); //uncomment this if you want the balls to spawn on mouse forever 

    updateBalls();
    displayBalls();

    

    
}

class Boundary {
    
}

class Ball {
    constructor() {
    this.x=mouseX;
    this.y=mouseY;
    this.pos=createVector(mouseX,mouseY);
    this.vel=createVector(0,0);
    this.radius=balldiameter;
    }
    

    move() {
        this.vel.add(gravityvector);
        this.pos.add(this.vel);
        if ((boundarydiameter/2)<(balldiameter/2)+Math.sqrt((((vw/2)-this.pos.x)**2)+(((vh/2)-this.pos.y)**2))) {

            this.vel.mult(1,-1);
            this.pos.add(this.vel);
        }

        
        
    }

    display() {
        stroke('white');
        strokeWeight(this.radius);
        console.log(this.pos);
        point(this.pos);
    }
    

}

    
    // find mouse distance from center 
    // Math.sqrt((((vw/2)-mouseX)**2)+(((vh/2)-mouseY)**2))

function mousePressed() {
    if ((boundarydiameter/2)>(balldiameter/2)+Math.sqrt((((vw/2)-mouseX)**2)+(((vh/2)-mouseY)**2))) {
        // if the distance is less than the 
        // diameter/2 AKA radius then the
        // new instance of ball is allowed
        // to be created
        //let newball = new Ball(mouseX, mouseY, balldiameter);
        let newball = new Ball();
        allBalls.push(newball);
    }
    
}

function drawBoundary() {
    stroke('white')
    strokeWeight(3)
    fill(boundaryColor)
    circle(vw/2,vh/2,boundarydiameter)
}

function updateBalls() {
    for (i = 0; i < allBalls.length; i++) {
        allBalls[i].move();
    }
}

function displayBalls() {
    for (i = 0; i < allBalls.length; i++) {
        allBalls[i].display();
    }
}

function displayText() {
    textFont(font);
    textSize(20);
    let str1 = allBalls.length;
    fill(textColor)
    stroke('black')
    text("ball/object counter: "+str1.toString(), 60, 40)
    text("this is distance of mouse from center: "+(Math.sqrt((((vw/2)-mouseX)**2)+(((vh/2)-mouseY)**2))).toFixed(2), 60, 60)
    text("this is framerate: "+int(frameRate()), 60, 80)
}