const rickandmortyService = require("../services/rickandmorty.service");
const mongoose = require("mongoose");

const findAllcharactersController = async (req, res) => {
  const characters = await rickandmortyService.findAllcharactersService();

  if (characters.lenght == 0) {
    return res.status(404).send({ message: "Nenhum personagem encontrado." });
  }

  res.send(characters);
};

const findByIdcharactersController = async (req, res) => {
  const idParam = req.params.id;
  const escolhacharacters = await rickandmortyService.findByIdcharactersService(
    idParam
  );
  if (!escolhacharacters) {
    return res.status(404).send({ message: "Personagem não encontrado." });
  }
  res.send(escolhacharacters);
};

const createcharactersController = async (req, res) => {
  const characters = req.body;
  const newcharacters = await rickandmortyService.createcharactersService(
    characters
  );
  res.status(201).send(newcharacters);
};

const updatecharactersController = async (req, res) => {
  const idParam = req.params.id;
  const charactersEdit = req.body;
  const updatedcharacters = await rickandmortyService.updatecharactersService(
    idParam,
    charactersEdit
  );
  res.send(updatedcharacters);
};

const deletecharactersController = async (req, res) => {
  const idParam = req.params.id;
  await rickandmortyService.deletecharactersService(idParam);
  res.send({ message: "Personagem deletado com sucesso!" });
};

module.exports = {
  findAllcharactersController,
  findByIdcharactersController,
  createcharactersController,
  updatecharactersController,
  deletecharactersController,
};
