const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({extend: true}))

server.listen(port, function(){
  console.log(`BACKEND is runnig on port ${port}.`)
})

module.exports = server