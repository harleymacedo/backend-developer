const express = require('express')
const app = express()
const port = process.env.PORT || 3000 
const usuarioRoute = require('./routes/usuarioRoute')

app.use(usuarioRoute)

app.listen(port, () => {console.log(`App rodando em http://localhost:${port}`)})