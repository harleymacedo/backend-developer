const express = require('express')
const app = express()
const port = process.env.PORT || 3000 

app.get('/', (req, res) => {
    res.status(200).send({
        'mensagem': 'Primeira rota com GET'
    })
})

app.listen(port, () => {console.log(`App rodando em http://localhost:${port}`)})