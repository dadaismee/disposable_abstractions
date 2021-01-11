class oneImage {
  constructor(posX, posY) {
    this.x = posX;
    this.y = posY;
    this.colour = random(100);
    this.picker = int(random(4));
    this.rotatePicker = int(random(2));
    this.rectPicker = int(random(2));
    this.strokeWidth = 1.25;//IMAGE_SIZE / 100;
  }
  

  render() {
    let numSteps = 30;
    let step = GRIDBOX / numSteps;
    push();
    translate(this.x, this.y);
    fill(10, 30, 70);
    rect(0, 0, IMAGE_SIZE, IMAGE_SIZE);
    fill(100 - this.colour, random(30, 70), random(90, 90));
    rect(0, 0, IMAGE_SIZE * 0.95, IMAGE_SIZE * 0.95); 

    for (var i = 0; i < random(3, numSteps / random(2)); i++) {
      stroke(RAND_VALUE - this.colour + (i * 2), 70, 70);
      fill(this.colour + (i * 4), 70, 50);
      strokeWeight(this.strokeWidth);
      if (this.picker == 1) {
        
        bezier(
          random(RAND_VALUE),
          random(RAND_VALUE),
          random(RAND_VALUE),
          random(RAND_VALUE) * 2,
          random(RAND_VALUE) * 2,
          random(RAND_VALUE),
          random(RAND_VALUE), 
          random(RAND_VALUE));

      } else if (this.picker == 2) {

        strokeWeight(this.strokeWidth);
        if (this.rectPicker == 1) {
        noFill();
        rotate(0);
        rect(
          random(20), 
          random(20), 
          random(RAND_VALUE * random(3) + i), 
          random(RAND_VALUE * random(3) + i));
        } else {
          rotate(100);
          noStroke();
          //strokeWeight(this.strokeWidth);
          rect(
            random(RAND_VALUE + i), 
            random(RAND_VALUE), 
            random(RAND_VALUE * random(1.75)), 
            random(RAND_VALUE * random(1.75)));
        }
      } else if (this.picker == 3) {
        strokeWeight(this.strokeWidth);
        
        for (let i = 15; i < numSteps * 2; i += step * int(random(20))) {
          for (let j = 15; j < numSteps * 2; j += step) {
            rotate(random(numSteps));
            line(i, 
                 j, 
                 numSteps * 2, 
                 numSteps * 1.5);
          }
        }
        
      } else {
        if (this.rectPicker == 1) {
          strokeWeight(this.strokeWidth);
          noFill();
          rotate(10);
          ellipse(
            0,
            0,
            random(RAND_VALUE * 2 + i), 
            random(RAND_VALUE * 2 + i));
          } else {
            //rotate(100);
            //noFill();
            noStroke();
            ellipse(
              random(RAND_VALUE + i), 
              random(RAND_VALUE), 
              random(RAND_VALUE / 2), 
              random(RAND_VALUE / 2));
          }
      }
      rotate(100);
      // if (this.rotatePicker == 1) rotate(100);  
      // if (this.rotatePicker == 2) translate(10, i);
    }  
    pop();    
    }
  }

