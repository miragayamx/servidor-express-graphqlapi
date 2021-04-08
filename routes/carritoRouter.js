const express = require('express');

const router = express.Router();

//GET
router.get('/listar', (req, res) => {
    const id = req.query.id;
    res.status(200).json({saludo: 'hola'});
});
//POST
router.post('/agregar/:id_producto', auth, (req, res) => {
    const productoId = req.params.id_producto;
    res.status(200).json({saludo: 'hola'});
});
//PUT
router.put('/actualizar/:id', auth, (req, res) => {
    const id = req.params.id;
    const producto = req.body;
    res.status(200).json({saludo: 'hola'});
});
//DELETE
router.delete('/borrar/:id', auth, (req, res) => {
    const id = req.params.id;
    res.status(200).json({saludo: 'hola'});
});

module.exports = router;