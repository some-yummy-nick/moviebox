require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT
const DB_URL = process.env.DB_URL

const app = express()

const movieRoutes = require('./routes/movie')

app.use(express.json())
app.use(movieRoutes)

mongoose.set('strictQuery', false)

mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`))

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`)
})
