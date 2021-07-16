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

//Inserir usuário
usuarioRouter.post('/usuario', (req, res) => {
    res.status(201).send({"mensagem": "Usuário inserido com sucesso!"})
})

//Alterar usuário
usuarioRouter.put('/usuario/:id', (req, res) => {
    res.status(201).send({"mensagem": "Usuário alterado com sucesso!"})
})

//Excluir usuário
usuarioRouter.delete('/usuario/:id', (req, res) => {
    res.status(201).send({"mensagem": "Usuário excluído com sucesso!"})
})

module.exports = usuarioRouter