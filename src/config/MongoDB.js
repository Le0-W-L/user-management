const mongoose = require("mongoose")

const mongoUri = process.env.MONGO_URL

mongoose
  .connect(mongoUri)
  .then(() => console.log("Conexão MongoDB estabelecida com sucesso!"))
  .catch((err) => console.error("Erro ao conectar no MongoDB: ", err))

module.exports = mongoose