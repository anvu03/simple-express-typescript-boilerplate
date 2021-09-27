import express from 'express'
import { configureMiddlewares } from './midleware-configurator.js'

const app = express()

configureMiddlewares(app)

app.use('/', (_, res) => {
  res.send('hello world')
})

app.listen(process.env.PORT || 4000, () => {
  console.log('Server is running on ' + (process.env.PORT || 4000))
})
