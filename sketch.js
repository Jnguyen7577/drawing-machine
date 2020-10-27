let array = [];
let backgroundColor = 200;

function setup() {
  createCanvas(windowWidth, windowHeight );
  //background(backgroundColor);
  drawGrid();

  noFill();
  strokeWeight(7);
}

function draw() {
  
  if (mouseIsPressed) {
    
    backgroundColor -= 5;
    background(backgroundColor);
    stroke(map(mouseX, 0, 600, 0, 237, true));
    //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    //line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY])
  }
}

function keyTyped() {

  //save image
  if (key === 's') {
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    //display image
    background(255);
    beginShape();
    for (let i = 0; i < array.length; i++) {
      //  line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
  
  return false;
}

function drawGrid(){
  numCells = 20;
  fillColor = 255;
  strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells){
    for (let j = 0; j <= height; j += height / numCells){
      if (fillColor === 255){
        fillColor = 200;
      } else {
        fillColor = 255;
      }
      fill(fillColor);
    rect(i, j, width / numCells, height / numCells);
  }
}
}
}
