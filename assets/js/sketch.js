var gridSize = 20;
var shape;
let myFont;

function preload() {
    myFont = loadFont('assets/fonts/Anonymous.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    textFont(myFont);
    shape = new Shape(5, 5, 5, gridSize);
    shape.generate();
}

function draw() {
    background(0);
    shape.update();
}

function mousePressed() {
    shape.click();
}