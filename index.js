const express = require('express')
const app = express()
const port = 3000

app.get('/contacto', (req, res) => {
  res.send('Estas en la pagina de contacto')
})

app.get('/inicio', (req, res) => {
  res.send('Estas en la pagina de inicio')
})

app.get('/about', (req, res) => {
  res.send('Estas en la pagina de nosotros')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})