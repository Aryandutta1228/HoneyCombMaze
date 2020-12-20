class Log extends BaseClass{
  constructor(x,y,width,height){
    super(x,y,30,width, height);
    this.image = loadImage("sprites/wood3.png");
    //Matter.Body.setAngle(this.body, angle);
  }
}