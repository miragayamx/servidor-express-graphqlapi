const express = require("express");
const carrito = require("../modelo/carrito");
const { saveFile } = require("../utils/fileManager");

const router = express.Router();

//GET
router.get("/listar", (req, res) => {
  let response;
  const id = req.query.id;
  if (!!id) {
    response = carrito.getProduct(id);
  } else {
    response = carrito.getList();
  }
  res.status(200).json(response);
});
//POST
router.post("/agregar/:id_producto", async (req, res) => {
  try {
    const productoId = req.params.id_producto;
    carrito.addProduct(productoId);
    const saveData = JSON.stringify(carrito.getList());
    await saveFile("./data/carrito.txt", saveData);
    res.status(201).json({ notificacion: "Producto agregado con exito!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
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
