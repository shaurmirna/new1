class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("box.png")
      World.add(world, this.body);
    }
    display(){
     // var pos =this.body.position;
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
    //  rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  