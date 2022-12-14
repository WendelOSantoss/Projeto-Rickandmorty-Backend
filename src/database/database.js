const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Atlas conectado!"))
    .catch((error) =>
      console.log(`Erro ao conectar com o MONGODB Atlas, erro: ${error}`)
    );
};

module.exports = connectToDatabase;
