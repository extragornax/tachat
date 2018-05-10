function setup() {
  createCanvas(1280, 720);
  background(002, 142, 123);
}

function draw() {

}

var i = 0;
function keyPressed() {
  if (i == 0) {
    background(111,222,121);
    i++;
  } else if (i == 1) {
    background(002, 142, 123);
    i = 0;
  }
}
