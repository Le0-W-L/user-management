const jwt = require('jsonwebtoken')
require('dotenv').config()

const createToken = async(user, req, res) => {
    const token = jwt.sign({
        name: user.name,
        id: user.id
    }, process.env.JWT_SECRET)

    res.status(200).json({
        message: "Você foi autenticado!",
        token: token
    })
}

module.exports = createToken