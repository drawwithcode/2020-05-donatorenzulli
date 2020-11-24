function preload(){
      img = loadImage('tris.jpg');
}


function setup(){
  createCanvas(windowWidth,windowHeight)
  background('Yellow')


    input = createInput("").attribute("placeholder", "what's your name?");
    input.position(width/2-100, height/2);
    input.style('font-family', 'Helvetica');
    input.style('font-size', '20px' )
    input.style('color', 'blue')
    input.style('border-color', 'blue');
    input.style("border-radius", "15px");
    input.style("border-style", "solid");
    input.style('margin-left', '10px')
    input.style("padding", "10px 20px 10px 20px")


     start = createButton("PLAY");
     start.position(width/2-40, height/2+ 70)
     start.style('font-family', 'Helvetica');
start.style('font-size', '20px');
start.style('background-color', 'blue');
start.style('color', 'white');
start.style('border-color', 'blue');
start.style('border-radius', '15px')
start.style("border-style", "solid");
start.style('border-style', 'none')
start.style("padding", "8px 20px 8px 20px")
start.style('margin-left', '20px')
start.mousePressed(aprigioco)

    textSize(100)
    textAlign(CENTER)
    text("TRIS.io", 200,150)
}

function aprigioco(){
   nome = input.value();
  window.open('index1.html?nome='+nome, '_self')
}
