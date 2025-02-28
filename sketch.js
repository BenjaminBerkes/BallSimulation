allBalls = [];
textColor = "purple";
boundaryColor = "purple";
let font = "Monocraft";
boundarydiameter = 400;
balldiameter = 40;

function setup() {
    frameRate(24)
    vh=windowHeight;
    vw=windowWidth;
    let canvas = createCanvas(vw,vh);
    canvas.parent('canvas-container');
    gravityvector = createVector(0,0.2);
    
    
}
function draw() {
    background('black');
    fill(boundaryColor);
    circle(vw/2,vh/2,boundarydiameter);
    // creates circle in with half the values
    // of viewport width and height so that
    // it will always be centered
    
    //for (let i=0; i < allBalls.length; i++) {
    //    j = new Ball(mouseX,mouseY,35);
    //    j.display();
    //}
    
    
    //ball1 = new Ball(x=mouseX,y=mouseY,radius=25);
    //allBalls.push(ball1); 


    for (let i = 0; i < allBalls.length; i++) {
        allBalls[i].display();
        
        //allBalls[i].move();
    }

    textFont(font);
    textSize(20);
    let str1 = allBalls.length;
    fill(textColor)
    text("ball/object counter: "+str1.toString(), 60, 40)
    text("this is distance of mouse from center: "+(Math.sqrt((((vw/2)-mouseX)**2)+(((vh/2)-mouseY)**2))).toFixed(2), 60, 60)
    text("this is framerate: "+int(frameRate()), 60, 80)
}

class Boundary {
    
}

class Ball {
    constructor(x,y, radius) {
    this.pos=createVector(x,y);
    this.vel=createVector(0,0);
    this.radius=radius;
    }

    move() {
        this.vel = this.vel + gravityvector
        this.pos += this.vel
    }

    display() {
        fill('white')
        noStroke();
        ellipse(this.pos.x ,this.pos.y ,this.radius,this.radius);
        
    
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
        let newball = new Ball(mouseX, mouseY, balldiameter);
        allBalls.push(newball);
    }
    
    

    
}