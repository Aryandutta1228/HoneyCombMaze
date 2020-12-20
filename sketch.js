const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;
var Boy;
/*var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;*/

//var gameState = "onSling";
//var bg = "sprites/bg1.png";


function preload() {
    //getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(650,700);
    engine = Engine.create();
    world = engine.world;
   
    

   /* ground = new Ground(570,height,1237.5,20);
    platform = new Ground(150, 305, 347, 205);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);*/
    log1 = new Log(15,350,700,30);
    log3 =  new Log(635,350,700,30);
    log7 = new BLog(325,685,30,570);
    log9 = new BLog(325,15.0,30,570);
    
    log11 = new CLog(80,640/5,75,20);
    log12 = new CLog(80,237.5,75,20);
    log13 = new CLog(80,347,75,20);
    log14 = new CLog(80,457,75,20);
    log15 = new CLog(80,570,75,20);


    slog1 = new CLog(205,640/5,75,20); 
    slog2 = new CLog(205,237.5,75,20); 
    slog3 = new CLog(205,347,75,20); 
    slog4 = new CLog(205,457,75,20); 
    slog5 = new CLog(205,570,75,20); 
    

    tlog1 = new CLog(325,640/5,75,20);
    tlog2 = new CLog(325,237.5,75,20);
    tlog3 = new CLog(325,347,75,20);
    tlog4 = new CLog(325,457,75,20);
    tlog5 = new CLog(325,570,75,20);


    ulog1 = new CLog(445,640/5,75,20);
    ulog2 = new CLog(445,237.5,75,20);
    ulog3 = new CLog(445,347,75,20);
    ulog4 = new CLog(445,457,75,20);
    ulog5 = new CLog(445,570,75,20);
    

    vlog1 = new CLog(570,640/5,75,20);
    vlog2 = new CLog(570,237.5,75,20);
    vlog3 = new CLog(570,347,75,20);
    vlog4 = new CLog(570,457,75,20);
    vlog5 = new CLog(570,570,75,20);


    alog1 = new DLog(142.5,75,75,20);
    alog2 = new DLog(265.5,75,75,20);
    alog3 = new DLog(386.5,75,75,20);
    alog4 = new DLog(506.5,75,75,20);

    blog1 = new DLog(142.5,180.5,75,20);
    blog2 = new DLog(265.5,180.5,75,20);
    blog3 = new DLog(386.5,180.5,75,20);
    blog4 = new DLog(506.5,180.5,75,20);

    clog1 = new DLog(142.5,292,75,20);
    clog2 = new DLog(265.5,292,75,20);
    clog3 = new DLog(386.5,292,75,20);
    clog4 = new DLog(506.5,292,75,20);
   
    dlog1 = new DLog(142.5,403,75,20);
    dlog2 = new DLog(265.5,403,75,20);
    dlog3 = new DLog(386.5,403,75,20);
    dlog4 = new DLog(506.5,403,75,20);

    elog1 = new DLog(142.5,515,75,20);
    elog2 = new DLog(265.5,515,75,20);
    elog3 = new DLog(386.5,515,75,20);
    elog4 = new DLog(506.5,515,75,20);

    flog1 = new DLog(142.5,625,75,20);
    flog2 = new DLog(265.5,625,75,20);
    flog3 = new DLog(386.5,625,75,20);
    flog4 = new DLog(506.5,625,75,20);

    Boy = new BOY(550,80,30,30);
    









    
    /*box3 = new Box(700,237.5,70,70);
    box4 = new Box(920,237.5,70,70);
    pig3 = new Pig(810, 220);

    

    box5 = new Box(810,205,70,70);
    log4 = new Log(775,640/5,150, PI/7);
    log5 = new Log(870,640/5,150, -PI/7);

    bird = new Bird(237.5,50);*/

    //
    //slingshot = new SlingShot(bird.body,{x:237.5, y:50});*/
}

function draw(){
    //if(backgroundImg)
       background(0);
    
    Engine.update(engine);
    //strokeWeight(4);
   /* box1.display();
    box2.display();
    ground.display();
    pig1.display();*/

    
    log1.display();
    log3.display();
    log7.display();
    log9.display();
    
    log11.display();
    log12.display();
    log13.display();
    log14.display();
    log15.display();


    slog1.display();
    slog2.display();
    slog3.display();
    slog4.display();
    slog5.display();
    

    tlog1.display();
    tlog2.display();
    tlog3.display();
    tlog4.display();
    tlog5.display();
    

    ulog1.display();
    ulog2.display();
    ulog3.display();
    ulog4.display();
    ulog5.display();
    

    vlog1.display();
    vlog2.display();
    vlog3.display();
    vlog4.display();
    vlog5.display();

    alog1.display();
    alog2.display();
    alog3.display();
    alog4.display();

    blog1.display();
    blog2.display();
    blog3.display();
    blog4.display();

    clog1.display();
    clog2.display();
    clog3.display();
    clog4.display();

    dlog1.display();
    dlog2.display();
    dlog3.display();
    dlog4.display();

    elog1.display();
    elog2.display();
    elog3.display();
    elog4.display();

    flog1.display();
    flog2.display();
    flog3.display();
    flog4.display();


    Boy.display();
}
    
    /*if(keyDown(UP_ARROW)){
        Boy.velocityY = -5;
        Boy.velocityX = 0;
       }
   
       if(keyDown(DOWN_ARROW)){
           Boy.velocityY = 5;
           Boy.velocityX = 0;
       }
   
       if(keyDown(RIGHT_ARROW)){
       Boy.velocityX = 5;
       Boy.velocityY = 0;
       }
   
       if(keyDown(LEFT_ARROW)){
        Boy.velocityX = -5;
        Boy.velocityY = 0;
       }
       
       /*Boy.bounceOff(log1);
       Boy.bounceOff(log2);
       Boy.bounceOff(log3);
       Boy.bounceOff(log4);*/
    
     

    
    
 


   //function bounceOff(object1, object2){
    
  // }


  