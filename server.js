const path = require('path');
const express = require('express');
const productoRouter = require('./routes/productoRouter');
const carritoRouter = require('./routes/carritoRouter'); 

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

app.use('/producto', productoRouter);
app.use('/carrito', carritoRouter);

const server = app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto: ${server.address().port}`);
});

server.on('error', (err) => console.log(`Error de servidor: ${err}`));