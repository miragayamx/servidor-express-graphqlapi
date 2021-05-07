const usuario = require("../models/usuario");
const auth = (req, res, next) => {
  const administrador = usuario.getUsuario() === 'administrador';
  if (administrador) return next();
  const errorObj = {
    error: -1,
    descripcion: `ruta ${req.url} método ${req.method} no autorizada`,
  };
  return res.status(401).json(errorObj);
};

module.exports = auth;
