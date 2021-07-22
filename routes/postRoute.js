const express = require('express')
const { post } = require('./usuarioRoute')
const postRoute = express.Router()

postRoute.get('/posts', (req, res) => {
    res.status(200).send({'mensagem': 'Rota do Get posts'})
})

postRoute.get('/posts/:id', (req, res) => {
    res.status(200).send({'mensagem': 'Rota do Get posts, obter 1 post'})
})

postRoute.post('/posts', (req, res) => {
    res.status(201).send({'mensagem': 'Rota do Post post'})
})

postRoute.put('/posts/:id', (req, res) => {
    res.status(201).send({'mensagem': 'Rota do put post'})
})

postRoute.delete('/posts/:id', (req, res) => {
    res.status(201).send({'mensagem': 'Rota do delete post'})
})

module.exports = postRoute