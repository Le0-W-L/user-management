const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(process.env.MYSQL_URL)

const db = {}
db.sequelize = sequelize

db.Role = require('./Role')(sequelize, DataTypes)
db.User = require('./User')(sequelize, DataTypes)

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) db[modelName].associate(db)
})

module.exports = db