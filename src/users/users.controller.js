const userService = require("./users.service");

const createUserController = async (req, res) => {
  const { nome, apelido, email, senha, foto } = req.body;

  if (!nome || !apelido || !email || !senha || !foto) {
    return res.status(400).send({ message: "Alguns campos estão faltando." });
  }

  const foundUser = await userService.findByEmailUserService(email);

  if (foundUser) {
    return res.status(400).send({ message: "Usuário já existe!" });
  }

  const user = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err.message));

  if (!user) {
    return res.status(400).send({ message: "Erro ao criar usuário!" });
  }


res.status(201).send(user);
};

const findallUserController = async (req, res) => {
  res.send({ message: "Find All ok" });
};

module.exports = { createUserController, findallUserController };
