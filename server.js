console.log("up and running");

let express = require("express");
let socket = require('socket.io');

let app = express();
let port = process.env.PORT || 3000;
let server = app.listen(port);
app.use(express.static("public"))

let io = socket(server);
io.on('connection', newConnection);



//NEW CONNECTION
function newConnection(socket) {
  console.log("new connection: " + socket.client.id)

  let clientColor = getRandomColor()
  socket.emit("color", clientColor)

  //send the color to all the other clients
  socket.broadcast.emit("newPlayer", clientColor)

  socket.on("mouse", mouseMessage);

  function mouseMessage(dataReceived) {
    console.log(socket.client.id, dataReceived);
    socket.broadcast.emit("mouseBroadcast", dataReceived)
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
