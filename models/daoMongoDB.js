const Producto = require("./mongodb/producto");
const Carrito = require("./mongodb/carrito");

const productos = {
  async find(filter = {}) {
    return await Producto.find(filter);
  },
  async findById(id) {
    return await Producto.findById(id);
  },
  async insert(item) {
    const producto = new Producto(item);
    await producto.save();
  },
  async update(id, data) {
    return await Producto.findByIdAndUpdate(id, item);
  },
  async delete(id) {
    return await Producto.findByIdAndDelete(id);
  },
};

const carrito = {
  async find(filter = {}) {
    return await Carrito.find(filter).populate('producto');
  },
  async findById(id) {
    return await Carrito.findById(id).populate('producto');
  },
  async insert(item) {
    const carrito = new Carrito(item);
    await carrito.save();
  },
  async update(id, data) {
    return await Carrito.findByIdAndUpdate(id, data);
  },
  async delete(id) {
    return await Carrito.findByIdAndDelete(id);
  },
};

module.exports = { productos, carrito };