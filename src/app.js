//importing modules
require('dotenv').config()
const express = require("express")

//importing configs
const db = require("./models")
require("./config/MongoDB")

//syncing SQL database
db.sequelize.sync({ alter: true })
  .then(() => console.log("Sequelize sincronizado com MySQL"))
  .catch(err => console.error("Erro ao sincronizar Sequelize:", err))

//server setup
const app = express()
app.use(express.json())

//testing server
app.get('/', (req, res) => {
    res.send('User Management API is running')
})

//start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})