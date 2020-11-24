console.log("node js is running");

let express = require("express");
let socket = require("socket.io");


let app = express();

// let port = process.env.PORT || 8000;
let port = 3000;

let  server = app.listen(port);

app.use(express.static("public"))

let io = socket(server);

//AD OGNI CONNESSIONE DI UN CLIENT IL SERVER RICONOSCE
//IL MESSAGGIO CONNECTION E NOI FACCIAMO PARTIRE LA FUNZIONE
//newConnection
io.on("connection", newConnection);


//NEW CONNECTION
function newConnection(socket){
  console.log("new connection: " + socket.client.id)
  // let clientColor = getRandomColor()
  let clientColor = getRandomColor()
  socket.emit("color", clientColor)
  socket.broadcast.emit("newPlayer", clientColor)


//WHEN "MOUSE" COME FROM THE CLIENT, ESECUTE "mouseMessage"
  socket.on("mouse", mouseMessage)

function mouseMessage(dataReceived){
  console.log(socket.client.id, dataReceived)
  socket.broadcast.emit("mouseBroadcast", dataReceived);
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
