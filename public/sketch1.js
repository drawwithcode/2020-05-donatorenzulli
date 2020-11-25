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
  text('Welcome ' + nameP, width/2,height/2)
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
  background(img)
  textSize(20)
  text("PRESS 'A' TO DRAW", 20,20)

}


function draw() {
  // put drawing code here

    fill(myColor)

}


function mouseMoved(){

  fill(myColor)
  noStroke()
  if (keyIsDown(65)){
  ellipse(mouseX,mouseY,10);}


  //create the message
  let message = {
    x: mouseX,
    y: mouseY,
    color: myColor,
    name:nameP,

  };

//send the message to the server
if(keyIsDown(65))
socket.emit("mouse", message)

}

function newPlayer(newPlayerColor){
  console.log(newPlayerColor)
  y = height/2
  fill('120')
  rectMode(CORNER);
  noStroke()
  rect(20,30,400,50)
  fill(newPlayerColor)
  textSize(30);
  textAlign(LEFT)
  text('New player joined: '+ nameP, 20,50)
  pop()

}
