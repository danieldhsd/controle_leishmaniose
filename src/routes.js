const express = require('express');

const routes = express.Router();

const userController = require('./app/controllers/userController.js');

routes.get('/signup', userController.create);
routes.post('/signup', userController.store);

module.exports = routes;
