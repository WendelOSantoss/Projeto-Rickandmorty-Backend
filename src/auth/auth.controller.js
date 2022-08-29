require("dotenv").config();
const authService = require("./auth.service");
const bcrypt = require("bcryptjs");

const loginController = async (req, res) => {
  const { email, senha } = req.body;

  const user = await authService.loginService(email);

  if (!user) {
    return res.status(400).send({ message: "Usuário não encontrado!" });
  }

  const isPasswordValid = await bcrypt.compare(senha, user.senha);

  if (!isPasswordValid) {
    return res.status(400).send({ message: "Senha inválida!" });
  }

  const token = authService.generatetoken(user.id);

  res.send({ token });
};

module.exports = { loginController };
