var w;
var h;

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  getSize();
  createCanvas(w, h);
  background(127);
  noStroke();
  for (var i = 0; i < height; i += 20) {
    fill(129, 206, 15);
    rect(0, i, width, 10);
    fill(255);
    rect(i, 0, 10, height);
  }
}

function getSize(){
  w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  h=window.innerHeight || document.documentElement.clientHeight ||document.body.clientHeight;
}
