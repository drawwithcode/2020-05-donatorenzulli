function preload() {

}


function setup() {
  createCanvas(windowWidth, windowHeight)
  background(100)


  input = createInput("").attribute("placeholder", "what's your name?");
  input.position(width / 2 - 150, height / 2);
  input.style('font-family', 'Helvetica');
  input.style('font-size', '20px')
  input.style('color', 'black')

  input.style("border-radius", "15px");

  input.style('margin-left', '10px')
  input.style("padding", "10px 20px 10px 20px")


  start = createButton("PLAY");
  start.position(width / 2 - 80, height / 2 + 70)
  start.style('font-family', 'Helvetica');
  start.style('font-size', '20px');
  start.style('background-color', 'white');
  start.style('color', 'black');
  start.style('border-color', 'black');
  start.style('border-radius', '15px')
  start.style("border-style", "solid");
  start.style('border-style', 'none')
  start.style("padding", "8px 20px 8px 20px")
  start.style('margin-left', '20px')
  start.mousePressed(aprigioco)

  textSize(300)
  fill('#FF8800')
  textFont('Impact')
  textAlign(CENTER)
  text("TRIS", width / 2, 300)
}

function aprigioco() {
  nome = input.value();
  window.open('trisgame.html?nome=' + nome, '_self')
}
