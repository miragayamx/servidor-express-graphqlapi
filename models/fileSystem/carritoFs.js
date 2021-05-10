const productos = require("./productosFs");
const { readFile, saveFile } = require("../../utils/fileManager");
class Carrito {
  constructor() {
    this.carrito = [];
  }
  // setList(carrito) {
  // 	this.carrito = carrito;
  // }
  async find() {
    try {
      const carrito = await readFile("./data/fs/carrito.txt");
      if (Array.isArray(carrito)) this.carrito = carrito;
      if (!this.carrito.length) return this.carrito;
      return this.carrito.filter((el) => el.producto);
    } catch (err) {
      throw err;
    }
  }
  async findById(id) {
    try {
      const carrito = await readFile("./data/fs/carrito.txt");
      if (Array.isArray(carrito)) this.carrito = carrito;
      if (!carrito.length)
        throw new Error("No se encontraron productos en el carrito");
      const item = this.carrito.filter((el) => el._id === Number(id))[0];
      if (!item) throw new Error("No se encontró el producto solicitado");
      return item.producto;
    } catch (err) {
      throw err;
    }
  }
  async insert(item) {
    try {
      const carrito = await readFile("./data/fs/carrito.txt");
      if (Array.isArray(carrito)) this.carrito = carrito;
      const producto = productos.findById(item.producto);
      if (!producto) throw new Error("No se encontró el producto solicitado");
      let newId = 1;
      if (!!this.carrito.length)
        newId = this.carrito[this.carrito.length - 1].id + 1;
      const itemWithId = {
        _id: newId,
        timestamp: item.timestamp,
        producto: producto,
      };
      this.carrito.push(itemWithId);
      await saveFile("./data/fs/carrito.txt", this.carrito);
      return itemWithId;
    } catch (err) {
      throw err;
    }
  }
  async delete(id) {
    try {
      const carrito = await readFile("./data/fs/carrito.txt");
      if (Array.isArray(carrito)) this.carrito = carrito;
      const index = this.carrito.findIndex((el) => el._id === Number(id));
      if (index < 0) throw new Error("No se encontró el producto solicitado");
      const deleteProduct = this.carrito[index];
      this.carrito.splice(index, 1);
      await saveFile("./data/fs/carrito.txt", this.carrito);
      return deleteProduct;
    } catch (err) {
      throw err;
    }
  }
}

const carrito = new Carrito();

// const prevData = readFile('./data/fs/carrito.txt')
// 	.then((data) =>  carrito.setList(JSON.parse(data)))
// 	.catch((err) => {
// 		if ((err.code = 'ENOENT')) return;
// 		console.log(err);
// 	});

module.exports = carrito;
