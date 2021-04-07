const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {
    response.send('Pagina principal de la ruta Modulo <br> <a href="/misRutas/ejemplo">click aqui</a>'); 
});

router.get('/ejemplo', (request, response, next) => {
    response.send('Respuesta de la ruta "/misRutas/ejemplo <br> <a href="/misRutas/ejemplo2">click aqui</a>'); 
});
router.get('/ejemplo2', (request, response, next) => {
    response.send('Respuesta de la ruta "/modulo/ejemplo2 <br> <a href="/misRutas/ejemplo3">click aqui</a>'); 
});
router.get('/ejemplo3', (request, response, next) => {
    response.send('Respuesta de la ruta "/modulo/ejemplo3'); 
});

module.exports = router;