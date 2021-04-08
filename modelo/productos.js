const { readFile } = require("../utils/fileManager");
class Productos {
  constructor() {
    this.productos = [];
    this.dataKeys = [
      "timestamp",
      "nombre",
      "descripcion",
      "codigo",
      "foto",
      "precio",
      "stock",
    ];
  }
  setList(productList) {
    if (!Array.isArray(productList))
      throw new Error("La lista de productos debe ser un array");
    this.productos = productList;
  }
  getList() {
    return this.productos;
  }
  getProduct(id) {
    return this.productos.filter((el) => el.id === Number(id))[0];
  }
  addProduct(item) {
    const validItem = this.dataKeys.every((el) =>
      Object.keys(item).includes(el)
    );
    if (!validItem)
      throw new Error(
        "Los datos del producto proporcionado no son suficientes"
      );
    let newId = 1;
    if (!!this.productos.length)
      newId = this.productos[this.productos.length - 1].id + 1;
    const itemWithId = {
      ...item,
      price: Number(item.price),
      stock: Number(item.stock),
      id: newId,
    };
    this.productos.push(itemWithId);
    return itemWithId;
  }
  updateProduct(id, item) {
    const validKeys = Object.keys(item).filter((el) =>
      this.dataKeys.includes(el)
    );
    const productToUpdate = {};
    validKeys.forEach((key) => (productToUpdate[key] = item[key]));
    const index = this.productos.findIndex((el) => el.id === Number(id));
    if (index < 0) return null;
    this.productos[index] = {
      ...this.productos[index],
      ...productToUpdate,
    };
    return this.productos[index];
  }
  deleteProduct(id) {
    const index = this.productos.findIndex((el) => el.id === Number(id));
    const deleteProduct = this.productos[index];
    this.productos.splice(index, 1);
    return deleteProduct;
  }
}

const productos = new Productos();
// const prevData = readFile("../data/productos.txt")
//   .then((data) => data.json())
//   .then(productos => productos)
//   .catch((err) => console.log(err));

module.exports = productos;
