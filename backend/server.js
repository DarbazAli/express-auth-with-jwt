'use strict'
console.clear()
import mongoose from 'mongoose'
import app from './express.js'
import dotenv from 'dotenv'

dotenv.config()

const { MONGO_URI, PORT } = process.env

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('MongoDB connected successfully')
  })
  .catch((err) => console.log(err))

app.listen(PORT || 5000, () => {
  console.log(`Server is running on port ${PORT}`)
})
