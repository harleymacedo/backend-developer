const {Pool} = require('pg')

const pool = new Pool({
    connectionString: process.env.STRING_CONEXAO
})

module.exports = pool