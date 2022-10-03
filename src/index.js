require("dotenv").config();
const express = require("express");

const cors = require("cors");
const routes = require("./characters/rickandmorty.route");
const connectToDatabase = require("./database/database");
const port = process.env.PORT || 3001;
const app = express();
connectToDatabase();
app.use(express.json());
app.use(cors());
app.use("/", routes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
