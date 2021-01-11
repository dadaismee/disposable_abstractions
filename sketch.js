'use strict';

let IMAGE_SIZE = 250;
const RAND_VALUE = IMAGE_SIZE / 4;
const MARGIN = IMAGE_SIZE / 2;
const PADDING = IMAGE_SIZE * 0.1;
const START = IMAGE_SIZE / 2 + PADDING + MARGIN;
const GRIDBOX = IMAGE_SIZE + PADDING;
let rows = 1;
let columns = 3;

function setup() {
  const totalX = GRIDBOX * columns; 
  const totalY = GRIDBOX * rows; 
  
  createCanvas(totalX, totalY, SVG);
  
  
  colorMode(HSB, 100);
  ellipseMode(CENTER);
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  noLoop();
  //frameRate(4);
  
}

function draw() {
  background(20, 10, 100);

    for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      if (columns == 1 && rows == 1) {
        const posX = width / 2;
        const posY = height / 2;
        //IMAGE_SIZE = windowWidth / 4;
        new oneImage(posX, posY).render();
      } else {
        const posX = START / 2 + x * GRIDBOX;
        const posY = START / 2 + y * GRIDBOX;  
        //IMAGE_SIZE = windowWidth / 5;
        new oneImage(posX, posY).render();
      }
      
    }
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas('1', 'png');
  
  switch (key) {
  case '1':
    // rows = 1;
    // columns = 3;
    redraw();
    break;
  }
}

function mousePressed() {
  redraw();
}