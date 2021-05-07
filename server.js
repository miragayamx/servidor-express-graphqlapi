const path = require("path");
const express = require("express");
const productoRouter = require("./routes/productoRouter");
const carritoRouter = require("./routes/carritoRouter");
const usuarioRouter = require("./routes/usuarioRouter");
const { createFolder } = require("./utils/fileManager");
require('./db-connect-data/mongoDB');
const sequelize = require('./db-connect-data/sequelize');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

app.use("/", usuarioRouter);
app.use("/productos", productoRouter);
app.use("/carrito", carritoRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    error: -2,
    descripcion: `ruta ${req.url} método ${req.method} no implementada`,
  });
});

const server = app.listen(PORT, async () => {
  console.log(
    `El servidor esta corriendo en el puerto: ${server.address().port}`
  );
  await createFolder("./data");
  await sequelize.sync();
});

server.on("error", (err) => console.log(`Error de servidor: ${err}`));
