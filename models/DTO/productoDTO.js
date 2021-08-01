const productoDTO = ({ timestamp, nombre, descripcion, codigo, foto, precio, stock }) => ({
	timestamp,
	nombre,
	descripcion,
	codigo,
	foto,
	precio,
	stock
});

module.exports = productoDTO;
