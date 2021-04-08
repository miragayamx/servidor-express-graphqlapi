//EN PROCESO
class Carrito {
  constructor(carrito = []) {
    this.carrito = Array.isArray(productList) ? productList : [];
    this.dataKeys = ["timestamp", "producto"];
  }
  setList(carrito) {
    if (!Array.isArray(carrito))
      throw new Error("Los datos proporcionados no son validos");
    this.carrito = carrito;
  }
  getList() {
    return this.carrito;
  }
  getProduct(id) {
    return this.carrito.filter((el) => el.id === Number(id))[0];
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
    if (!!this.carrito.length)
      newId = this.carrito[this.carrito.length - 1].id + 1;
    const itemWithId = {
      ...item,
      price: Number(item.price),
      stock: Number(item.stock),
      id: newId,
    };
    this.carrito.push(itemWithId);
    return itemWithId;
  }
  updateProduct(id, item) {
    const validKeys = Object.keys(item).filter((el) =>
      this.dataKeys.includes(el)
    );
    const productToUpdate = {};
    validKeys.forEach((key) => (productToUpdate[key] = item[key]));
    const index = this.carrito.findIndex((el) => el.id === Number(id));
    if (index < 0) return null;
    this.carrito[index] = {
      ...this.carrito[index],
      ...productToUpdate,
    };
    return this.carrito[index];
  }
  deleteProduct(id) {
    const index = this.carrito.findIndex((el) => el.id === Number(id));
    const deleteProduct = this.carrito[index];
    this.carrito.splice(index, 1);
    return deleteProduct;
  }
}

const carrito = new Carrito();

module.exports = carrito;
