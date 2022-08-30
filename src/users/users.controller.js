const userService = require("./users.service");
const authService = require("../auth/auth.service");
const createUserController = async (req, res) => {
  const { nome, usuario, email, password, image } = req.body;

  if (!nome || !usuario || !email || !password || !image) {
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

  const token = authService.generatetoken(user.id);

  res.status(201).send({
    user: {
      id: user.id,
      nome,
      apelido,
      email,
      senha,
      foto,
    },
    token,
  });
};

const findallUserController = async (req, res) => {
  const users = await userService.findallUserService();

  if (users.length === 0) {
    return res.status(400).send({ message: "Não há usuários cadastrados!" });
  }

  res.send(users);
};

module.exports = { createUserController, findallUserController };
