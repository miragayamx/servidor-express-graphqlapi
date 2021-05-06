const createTables = async (knex) => {
	try {
		await knex.schema.createTable('productos', function(table) {
			table.increments('id');
			table.date('timestamp'), table.string('nombre');
			table.string('descripcion');
			table.string('codigo');
			table.string('foto');
			table.decimal('price');
			table.integer('stock');
		});
		await knex.schema.createTable('carrito', function(table) {
			table.increments('id');
			table.date('timestamp'), table.integer('productos');
			table.foreign('productos').references('productos.id');
		});
		console.log('Base de datos MariaDB lista');
	} catch (err) {
		if (err.errno === 1050) return console.log('Base de datos MariaDB lista');
		console.log(err.message);
	}
};

module.exports = createTables;
