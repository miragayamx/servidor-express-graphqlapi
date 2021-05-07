const { carrito } = require('../models/daoMongoDB');

const getList = async (req, res) => {
  let response;
  const id = req.query.id;
  if (!!id) {
    response = await carrito.findById(id);
  } else {
    response = await carrito.find();
  }
  res.status(200).json(response);
};

const addItem = async (req, res) => {
  try {
    await carrito.insert(item);
    res.status(201).json({ notificacion: "Producto agregado con exito!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    carrito.delete(req.params.id);
    res.status(200).json({ notificacion: "Producto eliminado con exito!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  getList,
  addItem,
  deleteItem
};
