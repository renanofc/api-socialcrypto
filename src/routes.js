const { Router } = require('express');

const UserController = require('./Controllers/UserController');

const routes = Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({ message: "Server is on..." }) // /health Rota para checar se ta funcionando a API
});

routes.post('./users', UserController.banco);
routes.get('./users', UserController.index);
routes.get('./users/:id', UserController.show); // Receber o ID do User

module.exports = routes