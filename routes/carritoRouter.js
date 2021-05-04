const express = require("express");
const carritoController = require("../controller/carritoController");
const { saveFile } = require("../utils/fileManager");

const router = express.Router();

//GET
router.get("/listar", carritoController.getList);
//POST
router.post("/agregar/:id_producto", carritoController.addItem);
//DELETE
router.delete("/borrar/:id", async (req, res) => {
  try {
    const id = req.params.id;
    carrito.deleteProduct(id);
    const saveData = JSON.stringify(carrito.getList());
    await saveFile("./data/carrito.txt", saveData);
    res.status(200).json({ notificacion: "Producto eliminado con exito!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
