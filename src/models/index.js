const { sequelize, DataTypes } = require("../config/SqlDB")

const User = require("./User")(sequelize, DataTypes)
const Role = require("./Role")(sequelize, DataTypes)

const db = {}
db.sequelize = sequelize
db.User = User
db.Role = Role

module.exports = db