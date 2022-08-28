const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose.connect(`mongodb+srv://root:admin@api-rickandmorty.2zmymg4.mongodb.net/?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB conectado!"))
    .catch((error) =>
      console.log(`Erro ao conectar com o MONGODB, erro: ${error}`)
    );
};

module.exports = connectToDatabase;
