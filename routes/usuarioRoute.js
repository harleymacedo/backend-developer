const express = require('express')
const usuarioRouter = express.Router()

//Obter todos os usuários
usuarioRouter.get('/usuarios', (req, res) => {
    res.status(200).send([
        {"id": 1, "nome": "Marcos", "idade": 29},
        {"id": 2, "nome": "Luiz", "idade": 19}
    ])
})

//Obter 1 usuário específico
usuarioRouter.get('/usuario/:id', (req, res) => {
    res.status(200).send({"id": 1, "nome": "Marcos", "idade": 29})
})