class Ball {
    constructor(x,y,width,height) {
      var options = {
          frictionAir: 0.005,
          density:0.4
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var ang = this.body.angle;
      push()
      translate(pos.x,pos.y)
      rotate(ang)
      strokeWeight(3)
      stroke('blue')
      fill("purple");
      ellipse(0,0, this.width, this.height);
      pop()
      
    }
  };