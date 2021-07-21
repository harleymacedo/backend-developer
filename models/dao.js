const {Pool} = require('pg')

const pool = new Pool({
    connectionString: process.env.CON_STRING
})

module.exports = pool