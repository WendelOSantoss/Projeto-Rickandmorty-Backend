const rickandmortyService = require('../services/rickandmorty.service');
const mongoose = require("mongoose");

const findAllcharactersController = async (req, res) => {
  const characters = await rickandmortyService.findAllcharactersService();

  if (characters.lenght == 0) {
    return res.status(404).send({ message: "Nenhum personagem encontrado." });
  }

  res.send(characters);
};

const findByIdcharactersController = async (req, res) => {
  const parametro_id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(parametro_id)) {
    return res.status(400).send({ message: "Id inválido." });
  }
  const escolhacharacters = await rickandmortyService.findByIdcharactersService(parametro_id);
  if (!escolhacharacters) {
    return res.status(404).send({ message: "Personagem não encontrado." });
  }
  res.send(escolhacharacters);
};

const createcharactersController = async (req, res) => {
  const characters = req.body;
  if (!characters || !characters.nome || !characters.image) {
    return res
      .status(400)
      .send({ message: "Envie todos os campos preenchidos!" });
  }

  const newcharacters = await charactersService.createcharactersService(characters);
  res.status(201).send(newcharacters);
};

const updatecharactersController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "Id inválido." });
  }
  const charactersEdit = req.body;

  if (!charactersEdit || !charactersEdit.nome || !charactersEdit.image) {
    return res
      .status(400)
      .send({ message: "Envie todos os campos preenchidos!" });
  }
  const updatedcharacters = await charactersService.updatecharactersService(
    idParam,
    charactersEdit
  );
  res.send(updatedcharacters);
};

const deletecharactersController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "Id inválido." });
  }
  await charactersService.deletecharactersService(idParam);
  res.send({ message: "Personagem deletado com sucesso!" });
};

module.exports = {
  findAllcharactersController,
  findByIdcharactersController,
  createcharactersController,
  updatecharactersController,
  deletecharactersController,
};
