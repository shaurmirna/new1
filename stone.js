class stone{
    
    constructor(x,y){

      var  options={
            restitution:0.5,
            friction:1,
            density:0.5
        }

        this.body=Bodies.rectangle(x,y,180,80,options);
        this.width = 220;
        this.height = 120;
        this.image = loadImage("stone.png");
        World.add(world,this.body)
        this.visiblity=255;
    }
    display(){
        var angle = this.body.angle;
        push();
        if(this.body.speed<10){
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

        }
        else{
         
          World.remove(world,this.body);
          this.visiblity-=10;
          tint(255,this.visiblity);
          image(this.image, this.body.position.x,this.body.position.y, this.width, this.height);
        }
        pop();
      }
        score(){
          if(this.visiblity<0 && this.visiblity>-100){
            score=score+1;
          }
     
        }   
    
}
