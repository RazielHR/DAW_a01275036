const express = require('express');
const router = express.Router();
const path= require('path');
//CONTROLADORES
const actividades_controller=require('../controllers/actividades_controller');
//Fue la primera forma de agregar un nuevo perro a la lista:
router.get('/nuevo_accidente',actividades_controller.getNuevoAccidente);  //Ahora ya se cambio por el controlador.
//Creando rutas utilizando node
router.post('/nuevo_accidente',actividades_controller.postNuevoAccidente);
///////////////////////////////////////////////////////////////
//Regresa el html "mascotas.html" que esta en views cuando se realiza el get de "localhost:3000/mascotas/"
router.get('/',actividades_controller.get );





module.exports = router;