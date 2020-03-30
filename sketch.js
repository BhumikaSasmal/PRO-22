
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.

 
var boxes = [];
var gSlider;
var ground
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    const Engine = Matter.Engine;
    const World= Matter.World;
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
    ground= new Ground (200,380,400,20);
    World.add(ground);
   
}
 
function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
        Box();
    }
}
 
function draw() {
    // Draw all the elements including the slider that 
    ground.show();
    background(51);
   
    var fVal = gSlider.value();
    Text(fVal,390,390);
    // Use a for loop to show all the boxes

}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
function Box( ) {
    
    // add options such as friction and restitution. Experiment with the values
    var options = {
        'restitution': 0.8,
        'friction': 1.0
    }
    var rand1 = random(1,15);
    var rand2 = random(1,20);

    this.x = mouse.position.x;
    this.y = mouse.position.y;
    
    this.width= rand1;
    this.height= rand2;
    this.show();
    World.add(this.body);

    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box
}
 

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
      function show() {
        
        push();
        translate(this.body.position.x, this.body.position.y);
        pop();
    }
