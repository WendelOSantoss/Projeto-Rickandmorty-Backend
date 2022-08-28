const router = require('express').Router();
const userController = require('./users.controller');

router.post("/", userController.createUserController);
router.get("/", userController.findallUserController);

module.exports = router;

