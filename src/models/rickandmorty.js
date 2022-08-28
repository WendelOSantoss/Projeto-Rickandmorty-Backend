const mongoose = require("mongoose");
const rickandmortySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const rickandmorty = mongoose.model("rickandmorty", rickandmortySchema);

module.exports = rickandmorty;
