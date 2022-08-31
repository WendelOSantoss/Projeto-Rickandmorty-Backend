const Characters = require("./rickandmorty");

const findAllcharactersService = async () => {
  const characters = await Characters.find();
  return characters;
};

const findByIdcharactersService = async (idParam) => {
  const characters = await Characters.find({_id: idParam});
  return characters;
};

const createcharactersService = async (newcharacters) => {
  const charactersCreated = await Characters.create(newcharacters);
  return charactersCreated;
};

const updatecharactersService = async (id, charactersEdit) => {
  const charactersupdate = await Characters.findByIdAndUpdate(
    id,
    charactersEdit
  );
  return charactersupdate;
};

const deletecharactersService = async (idParam) => {
  return await Characters.findByIdAndDelete(idParam);
};


const findsearchrickandmortyservice = async (name) => {
  const rickandmortys = await Characters.find({ name: name });
  return rickandmortys;
};



module.exports = {
  findAllcharactersService,
  findByIdcharactersService,
  createcharactersService,
  updatecharactersService,
  deletecharactersService,
  findsearchrickandmortyservice,
};
