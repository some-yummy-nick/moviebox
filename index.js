require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const colors = require('colors')
const PORT = process.env.PORT
const DB_URL = process.env.DB_URL

colors.enable()

const app = express()

const movieRoutes = require('./routes/movie')

app.use(express.json())
app.use(movieRoutes)

mongoose.set('strictQuery', false)

mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'.green))
  .catch((err) => console.log(`DB connection error: ${err}`))

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`.blue.bgCyan)
})
