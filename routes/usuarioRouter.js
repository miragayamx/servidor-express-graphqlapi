const express = require("express");
const usuario = require("../modelo/usuario");

const router = express.Router();

router.get("/usuario", (req, res) => {
  const user = usuario.getUsuario();
  res.status(200).json({ usuario: user });
});

router.post("/usuario", (req, res) => {
  const user = req.body.usuario;
  usuario.setUsuario(user);
  res.status(200).json({ notification: "Operación realizada con exito!" });
});

module.exports = router;
