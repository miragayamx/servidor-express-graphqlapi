const express = require('express');
const auth = require('../middleware/auth');
const productoController = require('../controller/productoController');

const router = express.Router();

//GET
router.get('/listar', productoController.getList);
//DESDE AQUI TODAS LAS RUTAS REQUIEREN PERMISO
router.use(auth);
//POST
router.post('/agregar', productoController.addItem);
//PUT
router.put('/actualizar/:id', productoController.updateItem);
//DELETE
router.delete('/borrar/:id', productoController.deleteItem);

module.exports = router;
