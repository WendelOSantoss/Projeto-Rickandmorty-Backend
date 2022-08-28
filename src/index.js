require("dotenv").config();
const express = require('express');

const cors = require("cors");
const routes = require("./routes/rickandmorty.route");
const connectToDatabase = require('./database/database');
const port = process.env.PORT || 3000;
const app = express();
const userRoute = require('./users/users.route');
connectToDatabase();
app.use(express.json());
app.use(cors());
app.use("/rickandmorty", routes);
app.use("/users",userRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});




