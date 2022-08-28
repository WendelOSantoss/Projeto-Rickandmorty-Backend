const route = require("express").Router();
const controllerrickandmorty = require("../controllers/rickandmorty.controller");
const {
  validId,
  validObjectBody,
} = require("../middlewares/rickandmorty.middleware");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");

route.use("/api-docs", swaggerUi.serve);
route.get("/api-docs", swaggerUi.setup(swaggerDocument));
route.get("/characters", controllerrickandmorty.findAllcharactersController);
route.get(
  "/characters/find/:id",
  validId,
  controllerrickandmorty.findByIdcharactersController
);
route.post(
  "/characters/create",
  validObjectBody,
  controllerrickandmorty.createcharactersController
);
route.put(
  "/characters/update/:id",
  validId,
  validObjectBody,
  controllerrickandmorty.updatecharactersController
);
route.delete(
  "/characters/delete/:id",
  validId,
  controllerrickandmorty.deletecharactersController
);

module.exports = route;
