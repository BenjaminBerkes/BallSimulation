allBalls = [];
textColor = "purple";
boundaryColor = "purple";
let font = "Monocraft";
boundarydiameter = 400;

function setup() {
    vh=windowHeight;
    vw=windowWidth;
    let canvas = createCanvas(vw,vh);
    canvas.parent('canvas-container');
    
    
    
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
        //allBalls[i].newRadius();
        allBalls[i].display();
    }

    textFont(font);
    textSize(20);
    let str1 = allBalls.length;
    fill(textColor)
    text("ball/object counter: "+str1.toString(), 60, 40)
    text("this is distance of mouse from center: "+Math.sqrt((((vw/2)-mouseX)**2)+(((vh/2)-mouseY)**2)), 60, 60)
}

class Boundary {
    
}

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

    //move() {}
}

    
    //Math.sqrt((((vw/2)-mouseX)**2)+(((vh/2)-mouseY)**2))

function mousePressed() {
    if ((boundarydiameter/2)>Math.sqrt((((vw/2)-mouseX)**2)+(((vh/2)-mouseY)**2))) {
        // if the distance is less than the 
        // diameter/2 AKA radius then the
        // new instance of ball is allowed
        // to be created
        let newball = new Ball(mouseX, mouseY, 40);
        allBalls.push(newball);
    }
    
    

    
}