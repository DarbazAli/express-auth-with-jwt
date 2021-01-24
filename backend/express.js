import express from 'express'

// custom modules
import userRouters from './routes/userRoutes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('API is working')
})

app.use(userRouters)

export default app
