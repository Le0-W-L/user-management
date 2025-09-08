require('dotenv').config()

const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(process.env.MYSQL_URL, {
    logging: false
});

(async () => {
    try {
        await sequelize.authenticate()
        console.log('Conexão com MySQL estabelecida com sucesso!')
    } 
    catch (error) {
        console.error('Erro ao conectar ao MySQL: ', error)
    }
})()

module.exports = { sequelize, DataTypes }