const { requiredData, validFields } = require('./validData');
const { readFile, saveFile } = require('../../utils/fileManager');
class Productos {
	constructor() {
		this.productos = [];
		this.productoKeys = [ 'nombre', 'descripcion', 'codigo', 'foto', 'precio', 'stock' ];
	}
	setList(productList) {
		this.productos = productList;
	}
	find() {
		return this.productos;
	}
	findById(id) {
		const producto = this.productos.filter((el) => el._id === Number(id))[0];
		if (!producto) throw new Error('No se encontró el producto solicitado');
		return producto;
	}
	insert(item) {
		const validItem = requiredData(item, this.productoKeys);
		if (!validItem) throw new Error('Los datos del producto proporcionado no son suficientes');
		let newId = 1;
		if (!!this.productos.length) newId = this.productos[this.productos.length - 1]._id + 1;
		const itemWithId = {
			...item,
			timestamp: Date.now(),
			precio: Number(item.precio),
			stock: Number(item.stock),
			_id: newId
		};
		this.productos.push(itemWithId);
		return itemWithId;
	}
	update(id, item) {
		const productToUpdate = validFields(item, this.productoKeys);
		const index = this.productos.findIndex((el) => el._id === Number(id));
		if (index < 0) throw new Error('No se encontró el producto solicitado');
		this.productos[index] = {
			...this.productos[index],
			...productToUpdate
		};
		return this.productos[index];
	}
	delete(id) {
		const index = this.productos.findIndex((el) => el._id === Number(id));
		if (index < 0) throw new Error('No se encontró el producto solicitado');
		const deleteProduct = this.productos[index];
		this.productos.splice(index, 1);
		return deleteProduct;
	}
}

const productos = new Productos();
const prevData = readFile('./data/productos.txt')
	.then((data) => productos.setList(JSON.parse(data)))
	.catch((err) => {
		if ((err.code = 'ENOENT')) return;
		console.log(err);
	});

module.exports = productos;
