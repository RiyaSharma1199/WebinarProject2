const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,ball,ground,rope; 
var mConstraint;

function setup(){
    canvas = createCanvas(800,450);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
      mouse: canvasmouse
    };
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
    
    ground = new Ground(600,height,1200,20)

    //Stage 1
    box1 = new Box(300,430,40,40);
    box2 = new Box(300,410,40,40);
    box3 = new Box(300,390,40,40);
    box4 = new Box(300,370,40,40);
    box5 = new Box(300,350,40,40);
    box6 = new Box(300,330,40,40);


    //Stage 2
    box7 = new Box(360,430,40,40);
    box8 = new Box(360,410,40,40);
    box9 = new Box(360,390,40,40);
    box10 = new Box(360,370,40,40);
    box11 = new Box(360,350,40,40); 

    //Stage 3
    box12 = new Box(420,430,40,40);
    box13 = new Box(420,410,40,40);
    box14 = new Box(420,390,40,40);
    
    ball = new Ball(10,10);
    rope = new Rope(ball.body, { x: 250, y: 50 });

}

function draw(){
    background("lightblue");
    Engine.update(engine);

    ground.display();

    strokeWeight(4);
    stroke("white");
    fill("pink");
    box1.display();
    fill("purple");
    box2.display();
    fill("pink");
    box3.display();
    fill("purple");
    box4.display();
    fill("pink");
    box5.display();
    fill("purple");
    box6.display();

    fill("lightgreen");
    box7.display();
    fill("turquoise");
    box8.display();
    fill("lightgreen");
    box9.display();
    fill("turquoise");
    box10.display();
    fill("lightgreen");
    box11.display();

    fill("violet");
    box12.display();
    fill("orange");
    box13.display();
    fill("violet");
    box14.display();

    ball.display();
    rope.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  }
