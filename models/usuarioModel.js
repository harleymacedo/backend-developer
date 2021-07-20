const {Pool} = require('pg')
const stringConexao = process.env.STRING_CONEXAO

const poolUsuario = new Pool({
    connectionString: stringConexao,
})

module.exports = poolUsuario