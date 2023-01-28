require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3000
const db = require('./config/db')
const route = require('./routes')
const cors = require('cors')

// Connect to DataBase;
db.connect()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('combined'))
app.use(cors())

// Routes init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




