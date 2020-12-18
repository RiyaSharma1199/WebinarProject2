class Ball {
    constructor(x, y) {
      var options = {
        restitution: 1,
        friction: 0.5,
        frictionAir: 0.0,
        slop: 1,
        inertia: Infinity
    };
    this.body = Bodies.rectangle(x, y, 40, 40, options);
    this.x = x;
    this.y = y;
    this.color = color;
    World.add(world, this.body);
  }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(5);
      stroke('black')
      fill('yellow')
      ellipseMode(RADIUS)
      ellipse(0, 0, 30,30);
      pop();
    };
  };