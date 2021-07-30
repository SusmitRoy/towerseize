class Ball {
  constructor(x,y,width, height){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }

  this.width = width;
  this.height = height;
  this.body = Bodies.polygon(x, y, width, height, options);

  World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;

    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,50,50)
    pop();
  }
}
