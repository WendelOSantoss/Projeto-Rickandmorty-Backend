const route = require("express").Router();
const controllerrickandmorty = require("./rickandmorty.controller");
const {
  validId,
  validObjectBody,
} = require("../middlewares/rickandmorty.middleware");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");
const authmiddleware = require("../auth/auth.middleware");

route.use("/api-docs", swaggerUi.serve);
route.get("/api-docs", swaggerUi.setup(swaggerDocument));
route.get(
  "/characters",
  authmiddleware,
  controllerrickandmorty.findAllcharactersController
);
route.get(
  "/characters/find/:id",
  authmiddleware,
  validId,
  controllerrickandmorty.findByIdcharactersController
);
route.post(
  "/characters/create",
  authmiddleware,
  validObjectBody,
  controllerrickandmorty.createcharactersController
);
route.put(
  "/characters/update/:id",
  authmiddleware,
  validId,
  validObjectBody,
  controllerrickandmorty.updatecharactersController
);
route.delete(
  "/characters/delete/:id",
  authmiddleware,
  validId,
  controllerrickandmorty.deletecharactersController
);

route.get(
  "/characters/search",
  authmiddleware,
  controllerrickandmorty.findsearchrickandrickandmortycontroller
);

module.exports = route;
