const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {
    response.send('<form action="/miModulo" method="POST"><label>Nombre de equipo nuevo:</label><br><input type="text" name="nombre"><input type="submit" name="enviar" value="Registrar"></form>');
});

router.post('/', (request, response, next) => {
    console.log(request.body);
    response.send('Nombre del equipo: '+ request.body.nombre +' '); 
});

module.exports = router;