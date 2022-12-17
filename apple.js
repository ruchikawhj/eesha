class Apple {
    constructor(x,y,r){
        var options={
           density:0.002,
           restitution:0.2,
        }
      
        this.r=r;
        this.body=Bodies.rectangle(x,y,r,r,options)
        World.add(world,this.body);
        this.image=loadImage("apple.png")
    }
    display(){
        var pos=this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
        pop();
    }
}