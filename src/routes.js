const { Router } = require('express');

const routes = Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({ message: "Server is on..." }) // /health Rota para checar se ta funcionando a API
});

module.exports = routes