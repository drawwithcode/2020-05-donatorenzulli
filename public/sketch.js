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
    input.style('color', 'black')

    input.style("border-radius", "15px");

    input.style('margin-left', '10px')
    input.style("padding", "10px 20px 10px 20px")


     start = createButton("PLAY");
     start.position(width/2-40, height/2+ 70)
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
    textFont('Impact')
    textAlign(LEFT)
    text("TRISSS", 20,300)
}

function aprigioco(){
   nome = input.value();
  window.open('index1.html?nome='+nome, '_self')
}
