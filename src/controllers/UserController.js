// import models
const User = require('../models/User')

// import packages
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// import utils
const createToken = require('../utils/create-user-token')

module.exports = class UserController {
    //register user
    static async register(req, res) {
        const { name, email, password, confirmpassword } = req.body

        //validations
        if(!name) {
            return res.status(422).json({ message: 'O nome é obrigatório' })
        }
        if(!email) {
            return res.status(422).json({ message: 'O email é obrigatório' })
        }
        if(!password) {
            return res.status(422).json({ message: 'A senha é obrigatória' })
        }
        if(!confirmpassword) {
            return res.status(422).json({ message: 'A confirmação de senha é obrigatória' })
        }
        if(password !== confirmpassword) {
            return res.status(422).json({ message: 'As senhas não coincidem' })
        }

        //check if user exists
        const userExists = await User.findOne({ where: { email: email } })
        if(userExists){
            return res.status(422).json({ message: "Ops, parece que este e-mail já foi utilizado." })
        }

        //create password hash
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        //create user
        const user = {
            name: name, 
            email: email, 
            password: passwordHash
        }

        //save user in MySQL DB
        try {
            const newUser = await user.save()

            //create token function
        }
        catch (error) {
            res.status(500).json({ message: error })
        }
    }
}