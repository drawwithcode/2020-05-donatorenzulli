//DICHIARO IL PACKAGE SOCKET.IO
let socket = io();
let myColor = 'white';
const urlString = window.location.href;
const url = new URL(urlString);
let nameP = url.searchParams.get('nome');


//AD OGNI CONNESSIONE DI UN CLIENT IL SERVER RICONOSCE
//IL MESSAGGIO CONNECTION E NOI FACCIAMO PARTIRE LA FUNZIONE
//newConnection
socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse)
socket.on("color", setColor);
socket.on("newPlayer", newPlayer)


function setColor(assignedColor){
  myColor = assignedColor;
  fill(myColor)
  textSize(30)
  textAlign(CENTER)
  text('Welcome ' + myColor, width/2,height/2)
}


function newConnection(){
  console.log("your id: " + socket.id)
}

function drawOtherMouse(data){
  push()
  fill(data.color)
  noStroke()
  ellipse(data.x,data.y, 10)
  pop()
}

function preload(){
  // put preload code here
    img = loadImage('tris.jpg');
}

function setup() {
  createCanvas(windowWidth,windowHeight)

}


function draw() {
  // put drawing code here
    background(img)
    fill(myColor)
    text(nameP, mouseX,mouseY)
}


function mouseMoved(){
  push()
  fill(myColor)
  noStroke()
  if (keyIsDown(65)){
  ellipse(mouseX,mouseY,10);}

  pop()
  //create the message
  let message = {
    x: mouseX,
    y: mouseY,
    color: myColor,
    text: nameP,
  };

//send the message to the server
if(keyIsDown(65))
socket.emit("mouse", message)
}


function newPlayer(newPlayerColor){
  console.log(newPlayerColor)
  y = height/2
  fill('120')
  rectMode(CENTER,CENTER);
  noStroke()
  rect(width/2,height/2,400,50)
  fill(newPlayerColor)
  textSize(30);
  textAlign(CENTER,CENTER)
  text('New player joined: '+ newPlayerColor, width/2,height/2)
  pop()

}
