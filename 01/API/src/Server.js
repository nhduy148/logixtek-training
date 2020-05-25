const express = require('express');
const app = express();
const http = require("http");
const cors = require("cors");
const socketIO = require("socket.io");

const port = process.env.PORT || 5000

var bodyParser = require('body-parser');

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors({
	origin: 'http://localhost:3000',
}))

const user = require('./api');

const server = http.Server(app);
const IO = socketIO(server);

app.use( "/", user, (err, req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);

  res.status(404).send({ error: 'URL: '+req.originalUrl+' not found!'});
  next();
})

app.listen(port, () => console.log(`Server started on port ${port}`));

IO.set('origins', 'http://localhost:3000');
// With Socket IO
let interval;
IO.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  socket.emit("App", response);
};