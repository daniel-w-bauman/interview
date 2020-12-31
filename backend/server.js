const express = require('express')

let server = express();

server.get('/', (req, res) => {
  res.end("Hello World!")
})

server.listen(3001)

console.log("Listening on http://localhost:3001")
