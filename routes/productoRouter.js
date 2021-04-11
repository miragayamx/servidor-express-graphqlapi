const express = require('express');
const auth = require('../middleware/auth');
const productos = require('../modelo/productos');
const { readFile, saveFile } = require('../utils/fileManager');

const router = express.Router();

//GET
router.get('/listar', (req, res) => {
	try {
		let response;
		const id = req.query.id;
		if (!!id) {
			response = productos.getProduct(id);
		} else {
			response = productos.getList();
		}
		res.status(200).json(response);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});
//DESDE AQUI TODAS LAS RUTAS REQUIEREN PERMISO
router.use(auth);
//POST
router.post('/agregar', async (req, res) => {
	try {
		const producto = req.body;
		productos.addProduct(producto);
		const saveData = JSON.stringify(productos.getList());
		await saveFile('./data/productos.txt', saveData);
		res.status(201).json({ notification: 'Operación realizada con exito!' });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});
//PUT
router.put('/actualizar/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const producto = req.body;
		productos.updateProduct(id, producto);
		const saveData = JSON.stringify(productos.getList());
		await saveFile('./data/productos.txt', saveData);
		res.status(200).json({ notification: 'Operación realizada con exito!' });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});
//DELETE
router.delete('/borrar/:id', async (req, res) => {
	try {
		const id = req.params.id;
		productos.deleteProduct(id);
		const saveData = JSON.stringify(productos.getList());
		await saveFile('./data/productos.txt', saveData);
		res.status(200).json({ notification: 'Operación realizada con exito!' });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

module.exports = router;
