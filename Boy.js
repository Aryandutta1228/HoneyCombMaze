class BOY {
    constructor(x,y,width,height){
     var options = {
       restitution:1,
       density:0.8,
       friction :0.8
     }
    this.body = Bodies.rectangle(x ,y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }
    display(){
     var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    pop();
    }
}