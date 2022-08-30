require("dotenv").config();
const jwt = require("jsonwebtoken");
const { findByIdUserService } = require("../users/users.service");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: "O token não foi informado" });
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    return res.status(401).send({ message: "Token inválido" });
  }

  const [scheme, token] = parts;

  const isTokenFormated = scheme == 'Bearer';

  if (!isTokenFormated) {
    return res.status(401).send({ message: "Token malformatado!" });
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    if (!decoded) {
      return res.status(401).send({ message: "Token inválido!" });
    }

    const user = await findByIdUserService(decoded.id);

    if (err || !user || !user.id) {
      return res.status(401).send({ message: "Usuário inválido!" });
    }
    
    req.userId = user.id;
    return next();

  });

 
};
