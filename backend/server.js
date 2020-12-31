const express = require('express')

let server = express();

let bodyParser = require('body-parser')

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


server.get('/', (req, res) => {
  res.end("Hello World!")
})

server.get('/question', (req, res) => {
  res.end("What is your favorite number?")
})

server.post('/answer', (req, res) => {
  console.log("Requested answer")
  if('answer' in req.body){
    console.log(req.body.answer)
    res.end("Success")
  } else {
    res.end("Error")
  }
})

server.listen(3001)

console.log("Listening on http://localhost:3001")
