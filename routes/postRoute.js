const express = require('express')
const postRoute = express.Route()

postRoute.get('/posts', (req, res) => {
    res.status(200).send({'mensagem': 'Rota do Get posts'})
})

module.exports = postRoute