const mongoose = require("mongoose");

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "Id inválido." });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const charactersEdit = req.body;

  if (!charactersEdit || !charactersEdit.nome || !charactersEdit.image) {
    return res
      .status(400)
      .send({ message: "Envie todos os campos preenchidos!" });
  }
  next();
};
module.exports = {
    validId,
    validObjectBody,
  };