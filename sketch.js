function setup() {
    let setting1 = createCanvas(600,600)
    background('black')
    fill('blue')
    circle(200,200,400)
}
function draw() {
    

}
class Ball {
    constructor(x,y) {
    this.pos=createVector(x,y);
    this.vel=p5.vector.random2D().mult(2);
    this.radius=10;
    }
}