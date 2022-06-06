const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes/router.js')
const e = require('express')
const app = express()

//using cors to accept cross orgin resource sharing
app.use(
  cors({
    origin: '*',
  }),
)

//to get json data
app.use(express.json())

//connecting db
mongoose.connect('mongodb://localhost:27017/student', (err) => {
  if (err) {
    console.log(err)
  } else console.log('db is connected')
})

//routing all operation to router
app.use('/student', router)

//starting the port at 3001
app.listen(3001, (err) => {
  if (err) console.log(err)
  else console.log('server starts on port 3001')
})
