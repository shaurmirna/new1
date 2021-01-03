class DIMOND{
    constructor(x,y){

      var  options={
            restitution:0.5,
            friction:1,
            density:0.5
        }

        this.body=Bodies.rectangle(x,y,150,100,options);
        this.width = 150;
        this.height = 100;
    this.image=loadImage("dimond.png")
    this.image.scale=0.2
        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle);
        image(this.image,0,0,this.width,this.height)
      
        pop();
      }
    
}