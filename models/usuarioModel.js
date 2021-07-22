const connectionPost = require('./connection')

const getPosts = async () => {
    await connectionPost.query()
}

module.exports = poolUsuario