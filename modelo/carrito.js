const productos = require('./productos');
const { readFile } = require('../utils/fileManager');
class Carrito {
	constructor() {
		this.carrito = [];
	}
	setList(carrito) {
		this.carrito = carrito;
	}
	getList() {
		if (!this.carrito.length) throw new Error('No se encontraron productos en el carrito');
		return this.carrito.filter((el) => el.producto);
	}
	getProduct(id) {
		if(!carrito.length) throw new Error('No se encontraron productos en el carrito');
		const item = this.carrito.filter((el) => el.id === Number(id))[0];
		if (!item) throw new Error('No se encontró el producto solicitado');
		return item.producto;
	}
	addProduct(productId) {
		const producto = productos.getProduct(productId);
		if (!producto) throw new Error('No se encontró el producto solicitado');
		let newId = 1;
		if (!!this.carrito.length) newId = this.carrito[this.carrito.length - 1].id + 1;
		const itemWithId = {
			id: newId,
			timestamp: Date.now(),
			producto: producto
		};
		this.carrito.push(itemWithId);
		return itemWithId;
	}
	deleteProduct(id) {
		const index = this.carrito.findIndex((el) => el.id === Number(id));
		if (index < 0) throw new Error('No se encontró el producto solicitado');
		const deleteProduct = this.carrito[index];
		this.carrito.splice(index, 1);
		return deleteProduct;
	}
}

const carrito = new Carrito();

const prevData = readFile('./data/carrito.txt')
	.then((data) =>  carrito.setList(JSON.parse(data)))
	.catch((err) => {
		if ((err.code = 'ENOENT')) return;
		console.log(err);
	});

module.exports = carrito;
