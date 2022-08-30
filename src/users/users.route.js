const router = require("express").Router();
const userController = require("./users.controller");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const authmiddleware = require('../auth/auth.middleware');

router.post("/create", userController.createUserController);
router.get("/", authmiddleware, userController.findallUserController);
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;
