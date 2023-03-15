const express = require('express')
const next = require('next')
const apiHandlers = require('./api')

const hostname = 'localhost'
const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, hostname, port })
// const app = next({ dev })
const server = express()
const handler = app.getRequestHandler()
app.prepare().then(() => {
  server.get('/hello', (req, res) => {
    res.send('Good Luck!')
  })

  server.use('/api', apiHandlers)

  server.get('*', async (req, res) => {
    await handler(req, res)
  })

  server.listen(port, () => console.log('Server is listening on port 3000'))
})
