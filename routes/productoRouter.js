const express = require("express");
const auth = require("../middleware/auth");
const productos = require("../modelo/productos");

const router = express.Router();

//GET
router.get("/listar", (req, res) => {
  const id = req.query.id;
  if (!!id) return res.status(200).json(productos.getProduct(id));
  res.status(200).json(productos.getList());
});
router.use(auth);
//POST
router.post("/agregar", (req, res) => {
  try {
    const producto = req.body;
    productos.addProduct(producto);
    res.status(200).json({ notification: "Operación realizada con exito!" });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});
//PUT
router.put("/actualizar/:id", (req, res) => {
  const id = req.params.id;
  const producto = req.body;
  productos.updateProduct(id, producto);
  res.status(200).json({ notification: "Operación realizada con exito!" });
});
//DELETE
router.delete("/borrar/:id", (req, res) => {
  const id = req.params.id;
  productos.deleteProduct(id);
  res.status(200).json({ notification: "Operación realizada con exito!" });
});

module.exports = router;
