let array = [];

function setup() {
  createCanvas(600, 600);
  background(220);

  strokeWeight(7);

}

function draw() {

if (mouseIsPressed){
	//stroke(map(mouseX, 0, 600, 0, 255, true))
	//line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
	line(mouseX, mouseY, pmouseX, pmouseY);
	array.push([mouseX, mouseY]);
}
  
}

function keyTyped(){

	if (key === 's'){
		//save image
		saveCanvas('fileName', 'png');
	}else if (key === 'd'){
		//display image
		console.log(array);

	}

	}

	return false;
}