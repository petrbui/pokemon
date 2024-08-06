import { json, urlencoded } from 'body-parser'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'
app.use(morgan('dev'))

app.use(urlencoded({ extended: true }))
app.use(json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 5001

app.listen(port, () => {
  console.log(`api running at port ${port}`)
})

app.get('/health', (req, res) => {
  res.json({ ok: true })
})
