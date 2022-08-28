const Characters = require("../models/rickandmorty");

const findAllcharactersService = async () => {
  const characters = await Characters.find();
  return characters;
};

const findByIdcharactersService = async (parametro_id) => {
  const characters = await Characters.findById(parametro_id);
  return characters;
};

const createcharactersService = async (newcharacters) => {
  const charactersCreated = await Characters.create(newcharacters);
  return charactersCreated;
};

const updatecharactersService = async (id, charactersEdited) => {
  const charactersupdate = await Characters.findByIdAndUpdate(
    id,
    charactersEdited
  );
  return charactersupdate;
};

const deletecharactersService = async (id) => {
  return await Characters.findByIdAndDelete(id);
};

module.exports = {
  findAllcharactersService,
  findByIdcharactersService,
  createcharactersService,
  updatecharactersService,
  deletecharactersService,
};
