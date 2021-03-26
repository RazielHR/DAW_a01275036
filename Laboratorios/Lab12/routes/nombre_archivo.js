const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {
    response.send('Pagina principal de la ruta Modulo <br> <a href="/modulo/ejemplo">click aqui</a>'); 
});

router.get('/ejemplo', (request, response, next) => {
    response.send('Respuesta de la ruta "/modulo/ejemplo'); 
});

module.exports = router;