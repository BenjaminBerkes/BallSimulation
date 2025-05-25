allBalls = [];
textColor = "red";
boundaryColor = "red";
let font = "Monocraft";
boundarydiameter = 400;
boundaryradius = boundarydiameter/2;
balldiameter = 40;
ballradius = balldiameter/2;
frameBuff = 60
function setup() {
    frameRate(frameBuff)
    centerX = windowWidth/2;
    centerY = windowHeight/2;
    let canvas = createCanvas(windowWidth,windowHeight);
    canvas.parent('canvas-container');
    gravityvector = createVector(0,9.81/frameBuff);
    
    
}
function draw() {
    background('black');

    drawBoundary();// creates circle in with half the values of viewport width and height so that it will always be centered
    displayText();     
    //ball1 = new Ball(x=mouseX,y=mouseY,radius=25); allBalls.push(ball1); //uncomment this if you want the balls to spawn on mouse forever
    updateBalls();
    displayBalls();
    //displays through a for loop
}

class Boundary {
    
}

class Ball {
    constructor() {
    this.x=mouseX;
    this.y=mouseY;
    this.pos=createVector(mouseX,mouseY);
    this.vel=createVector(0,0);
    this.radius=ballradius;
    }
    

    move() {
        if (keyIsPressed && key == 'w') {
            
            this.vel.add(0,-0.5)
        }

        this.vel.add(gravityvector);
        this.pos.add(this.vel);

        let dx = this.pos.x - centerX;
        let dy = this.pos.y - centerY;
        let distFromCenter = Math.sqrt(dx*dx + dy*dy);

        if (distFromCenter + this.radius > boundaryradius) {
            
            
            let normal = createVector(dx, dy).normalize();

            this.pos = p5.Vector.add(
                createVector(centerX, centerY),
                normal.copy().mult(boundaryradius - this.radius)
            );

            let vDotN = this.vel.dot(normal);
            let reflected = p5.Vector.sub(this.vel, p5.Vector.mult(normal, 2 * vDotN));
            this.vel = reflected.mult(0.87);

            
            if (this.vel.mag() < 0.2) {
                this.vel.set(0, 0);
            }
        }
        
        //if (boundaryradius>ballradius+Math.sqrt(((centerX-this.pos.x)**2)+((centerY-this.pos.y)**2))+2) {

        //}
        if (boundaryradius<(ballradius+Math.sqrt(((centerX-this.pos.x)**2)+((centerY-this.pos.y)**2)))) {
            this.vel.mult(1,-0.87);
            this.pos.add(this.vel);
        }


        
        
    }

    display() {
        noStroke();
        fill('white');
        ellipse(this.pos.x, this.pos.y, this.radius*2, this.radius*2);
        console.log(this.pos);
    }
    

}

    
    // find mouse distance from center 
    // Math.sqrt((((vw/2)-mouseX)**2)+(((vh/2)-mouseY)**2))

function mousePressed() {
    if ((boundarydiameter/2)>(balldiameter/2)+Math.sqrt(((centerX-mouseX)**2)+((centerY-mouseY)**2))) {
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
    circle(centerX,centerY,boundarydiameter)
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
    text("this is distance of mouse from center: "+(Math.sqrt(((centerX-mouseX)**2)+((centerY-mouseY)**2))).toFixed(2), 60, 60)
    text("this is framerate: "+int(frameRate()), 60, 80)
    text("this is frameCount: "+frameCount, 60, 100)
    text("this is : "+'', 60, 120)
}