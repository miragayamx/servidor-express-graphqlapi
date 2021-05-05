const express = require("express");
const carritoController = require("../controller/carritoController");

const router = express.Router();

//GET
router.get("/listar", carritoController.getList);
//POST
router.post("/agregar/:id_producto", carritoController.addItem);
//DELETE
router.delete("/borrar/:id", carritoController.deleteItem);

module.exports = router;
