import express from 'express'
import config  from './config'
import serverRender from 'renderers/server'
import data from './testData'

const app = express()

app.use(express.static('public'))

app.get('/', async (req, res) => {
  const initialContent = await serverRender()
  res.render('index', { ...initialContent })
})

app.get('/data', (req, res) => {
  res.send(data)
})


app.set('view engine', 'ejs')

app.listen(config.port, function listenHandle() {
  console.info(`Running on ${config.port}`)
})
