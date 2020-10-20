let array = [];
let backgroundColor = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);

  strokeWeight(7);
  noFill();
}

function draw() {

if (mouseIsPressed){
	backgroundColor -= 5;
	background(backgroundColor);
	//stroke(map(mouseX, 0, 600, 0, 255, true))
	//line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
	//line(mouseX, mouseY, pmouseX, pmouseY);
	array.push([mouseX, mouseY]);

beginShape();
		for(let i = 0; i < array.length - 1; i++){
			//line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
			curveVertex(array[i][0], array[i][1])
		}
		endShape();	
}
  
}

function keyTyped(){

	if (key === 's'){
		//save image
		saveCanvas('fileName', 'png');
	}else if (key === 'd'){
		//display image
		//console.log(array[0]);
		//console.log(array[0][1]);
		background(255);


		beginShape();
		for(let i = 0; i < array.length - 1; i++){
			//line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
			curveVertex(array[i][0], array[i][1])
		}
		endShape();

		


	}

	

	return false;
}

function mousePressed() {
	array = [];
	backgroundColor = 255;
}
