let socket = io();
let myColor = "white"

socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);
socket.on("color", setColor);
socket.on("newPlayer", newPlayer)

let yplay = 60

const urlString = window.location.href;
const url = new URL(urlString);
let nameP = url.searchParams.get('nome');

function newPlayer(newPlayerColor) {
  console.log(newPlayerColor)
  push()
  textSize(20)
  textAlign(LEFT)
  fill(newPlayerColor)
  noStroke()
  text("NEW PLAYER JOYNED:", 20,yplay)
  yplay+=20
  pop()
}


function newConnection() {
  console.log("your id:" + socket.id)

}

function drawOtherMouse(data) {
  noStroke()
  stroke(data.color)
  strokeWeight(10)
  line(data.px*width, data.py*height, data.x*width, data.y*height)
  fill(data.color)
  noStroke();
  textSize(20)
  text(data.name, 250, yplay -20)
}

function preload() {
  // put preload code here
  sfondotris = loadImage('assets/tris.jpg')
}

function setColor(assignedColor) {
  myColor = assignedColor;

}


function setup() {
createCanvas(windowWidth, windowHeight)
background(sfondotris)
push()
textAlign(LEFT);
textSize(20)
fill(myColor);
text('Welcome ' + nameP + "! Invite your friends to play with you!" , 20,30);
pop()
// background(img)
}


function draw() {
  // put drawing code here
  console.log(myColor)
}

function mouseDragged() {

  push()
  strokeWeight(10)
  stroke(myColor)

  line(pmouseX, pmouseY, mouseX, mouseY)
pop()

  //create the message
  let message = {
    x: mouseX/width,
    y: mouseY/height,
    px: pmouseX/width,
    py: pmouseY/height,
    color: myColor,
    name: nameP,
  }

  // send to the server
  socket.emit("mouse", message); //"mouse" is title, message is the variable
}
