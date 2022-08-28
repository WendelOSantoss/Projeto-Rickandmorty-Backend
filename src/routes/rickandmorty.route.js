const route = require('express').Router();
const controllerrickandmorty = require('../controllers/rickandmorty.controller');



route.get('/characters',controllerrickandmorty.findAllcharactersController);
route.get('/characters/find/{id}',controllerrickandmorty.findByIdcharactersController);
route.post('/characters/create/{id}', controllerrickandmorty.createcharactersController);
route.put('/characters/update/{id}', controllerrickandmorty.updatecharactersController);
route.delete('/characters/delete/{id}', controllerrickandmorty.deletecharactersController);
 

module.exports = route;
