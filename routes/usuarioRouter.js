const express = require("express");
const usuario = require("../models/usuario");

const router = express.Router();

router.get("/usuario", (req, res) => {
  const user = usuario.getUsuario();
  res.status(200).json({ usuario: user });
});

router.post("/usuario", (req, res) => {
  const data = req.body.usuario;
  usuario.setUsuario(data.usuario);
  res.status(200).json({ usuario: usuario.getUsuario() });
});

module.exports = router;
