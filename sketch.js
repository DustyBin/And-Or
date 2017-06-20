var on = false

function setup() {
	
	createCanvas(600, 400);
}

function draw() {
	
	if (on) {
		background(0, 100, 0);
		} else {
		  	background(0);
		}

	for (var x = 0; x <= width; x += 50) {
		for (var y = 0; y <= height; y += 50) {
		fill(random(255), 0, random(255));
		ellipse(x, y, 25, 25);
		}
 	}
 	stroke(255);
 	strokeWeight(4);
 	noFill();
 	if (mouseX > 250 && mouseX < 350 && 
 			mouseY < 250 && mouseY > 150) {
				fill(100, 0, 100) 
		}
 	rectMode(CENTER)
 	rect(300, 200, 100, 100); 

}	

function mousePressed() {
	
	if (mouseX > 250 && mouseX < 350 && 
 			mouseY < 250 && mouseY > 150) {
				fill(100, 0, 100) 
				on = !on
		}
 	}