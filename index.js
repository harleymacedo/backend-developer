//Importações
const express = require('express')
const app = express()
const port = process.env.PORT || 3000 
const usuarioRoute = require('./routes/usuarioRoute')
const postRoute = require('./routes/postRoute')

//Middlewares
app.use(usuarioRoute)
app.use(postRoute)

//Worker
app.listen(port) 