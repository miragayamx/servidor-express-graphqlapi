const express = require("express");
const carritoController = require("../controller/carritoController");
const auth = require('../middleware/auth');

const router = express.Router();

//GET
router.get("/listar", carritoController.getList);
//POST
router.post("/agregar/:id_producto", carritoController.addItem);
router.post('/comprar', auth, carritoController.buy);
//DELETE
router.delete("/borrar/:id", carritoController.deleteItem);

module.exports = router;
