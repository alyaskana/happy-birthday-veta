function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("canvas");
  background('#FAD3E4');
}

function draw() {

  flowers.forEach(flower => {
    drawFlower(flower.x, flower.y, flower.d, flower.count, flower.size, flower.color1, flower.color2)
  })

}


let flowers = []
const red = '#EF5455'
const white = '#FFFFFF'
const yellow = '#FFCC49'
const blue = '#4066AD'
const pink = '#F39292'
const green = '#6DB576'
const lightblue = '#88CAEF'
let colors = [pink, white, lightblue, yellow, red, blue, green]

function mousePressed() {
  color1 = random(colors)
  color2 = random(colors.filter(color => color != color1))

  flowers.push({
    x: mouseX,
    y: mouseY,
    d: random(40, 75),
    count: floor(random(8, 12)),
    size: floor(random(40, 70)),
    color1: color1,
    color2: color2
  })
}

function drawFlower(x = 200, y = 200, d = 50, count = 10, size = 30, color1, color2) {
  push()
  stroke(0)
  strokeWeight(0.8);
  // rect(x - 5, y, 10, 200);

  translate(x, y);
  fill(color1)
  for (let i = 0; i < count; i++) {
    ellipse(0, size, size, size * 2);
    rotate(2 * PI / count);
  }

  fill(color2)
  ellipse(0, 0, d);
  pop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}