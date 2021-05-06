const getQueries = (knex) => {
	const producto = {
		async find(filter = {}) {
			const productos = await knex.from('productos').select('*');
			return await productos;
		},
		async findById(id) {
			const producto = await knex.from('productos').select('*').where('id', id);
			return producto;
		},
		async insert(item) {
			await knex('productos').insert(item);
		},
		async update(id, data) {
			return await knex.from('productos').where('id', id).update(data);
		},
		async delete(id) {
			return await knex.from('productos').where('id', id).del();
		}
	};

	const carrito = {
		async find(filter = {}) {
			const carrito = await knex.from('carrito').select('*');
			return await carrito;
		},
		async findById(id) {
			const carrito = await knex.from('carrito').select('*').where('id', id);
			return carrito;
		},
		async insert(item) {
			await knex('carrito').insert(item);
		},
		async update(id, data) {
			return await knex.from('carrito').where('id', id).update(data);
		},
		async delete(id) {
			return await knex.from('carrito').where('id', id).del();
		}
	};
	return { producto, carrito };
};

module.exports = getQueries;
