const express = require('express')
const next = require('next')
const hostname = 'localhost'
const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, hostname, port })
// const app = next({ dev })

const server = express()
const handler = app.getRequestHandler()
app.prepare().then(() => {
  server.get('/helloworld', (req, res) => {
    console.log('deal before next RequestHandler...')
    res.send('Good Luck!')
  })

  server.get('*', async (req, res) => {
    await handler(req, res)
  })

  server.listen(port, () => console.log('Server is listening on port 3000'))
})
