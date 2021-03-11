
require('dotenv').config()

const express = require('express')

const server = express();

server.use(express.json())

if(process.env.NODE_ENV !== 'development'){
  const cors = require('cors')
  server.use(cors())
}


server.use('*', (res,req) => {
  res.send('<h1>hi world</h1>')
})



const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(`listing on ${PORT}`)
})