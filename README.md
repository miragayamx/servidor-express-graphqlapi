# PRIMERA ENTREGA DEL PROYECTO FINAL

>>url imagenes para test:
https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/BK-EXAGON-GREEN-1024x1024.png?alt=media&token=92f34b40-9c27-4271-855a-2b92680abb08

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/BK-EXAGON-ORANGE-1024x1024.png?alt=media&token=0c01c355-c01e-4184-9dc6-eee704d779d5

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/BK-EXAGON-yellow-1024x1024.png?alt=media&token=bc5052da-564b-4e05-ac40-7abf53838803

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/BK-confort-1.jpg?alt=media&token=07a158ac-0cad-498a-bcc1-4230febd24fa

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/BK-hybrid-1.jpg?alt=media&token=01ef2cae-7915-465a-ac39-1e5d52e5e12d

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/BK-speed-1.jpg?alt=media&token=1e60a193-2046-466b-a574-958f8c76eaa0

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/carbon-confort-1.jpg?alt=media&token=d46fb7ed-58d7-4dca-a0df-c2eadd10952f

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/confort-1.jpg?alt=media&token=acdbf655-3493-4b88-86ec-0d1eec826c79

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/genetic-ultra-carbon-1024x1024.png?alt=media&token=1fa048a5-b6e4-4047-9487-f6962b22e6b2

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/grapheno-confort-1.jpg?alt=media&token=877c5efa-54c0-48e1-baf0-d6b908ae9d76

https://firebasestorage.googleapis.com/v0/b/proyectoutn-13de6.appspot.com/o/speed1.jpg?alt=media&token=66e0c683-1f20-4e01-96da-178ed322e7cf


>>Consigna: 

Deberás entregar el estado de avance de tu aplicación eCommerce Backend, que
implemente un servidor de aplicación basado en la plataforma Node.js y el middleware express. El
servidor implementará dos conjuntos de rutas agrupadas en routers, uno con la url base
'/productos' y el otro con '/carrito'. El puerto de escucha será el 8080 para desarrollo y
process.env.PORT para producción en glitch.com
>>Aspectos a incluir en el entregable:

1. El router base '/productos' implementará cuatro rutas:
a. '/listar/:id?' : Me permite listar todos los productos disponibles ó un producto por su id
(disponible para usuarios y administradores)
b. '/agregar' : Para incorporar productos al listado (disponible para administradores)
c. '/actualizar/:id' : Actualiza un producto por su id (disponible para administradores)
d. '/borrar/:id' : Borra un producto por su id (disponible para administradores)

2. El router base '/carrito' implementará tres rutas:
a. '/listar/:id?' : Me permite listar todos los productos guardados en el carrito ó un
producto por su id de carrito (disponible para usuarios y administradores)
b. '/agregar/:id_producto' : Para incorporar productos al carrito por su id de producto
(disponible para usuarios y administradores)
c. '/borrar/:id' : Eliminar un producto del carrito por su id de carrito (disponible para
usuarios y administradores)

3. Crear una variable booleana administrador, cuyo valor configuraremos más adelante con el
sistema de login. Según su valor (true ó false) me permitirá alcanzar o no las rutas indicadas.
En el caso de recibir un request a una ruta no permitida por el perfil, devolver un objeto de
error. Ejemplo: { error : -1, descripcion: ruta 'x' método 'y' no autorizada}

4. Un producto dispondrá de los siguientes campos: id, timestamp, nombre, descripcion,
código, foto (url), precio, stock.

5. El carrito de compras tendrá la siguiente estructura:
id, timestamp(carrito), producto: { id, timestamp(producto), nombre, descripcion, código, foto
(url), precio, stock }

6. El timestamp puede implementarse con Date.now()

7. Comenzar a trabajar con el listado de productos y el carrito de compras en memoria del
servidor, luego persistirlos en el filesystem.

>>A tener en cuenta:

1. Para realizar la prueba de funcionalidad hay dos opciones:
a. Probar con postman cada uno de los endpoints (productos y carrito) y su operación en
conjunto.
b. Realizar una aplicación frontend sencilla, utilizando HTML/CSS/JS ó algún framework de
preferencia, que represente el listado de productos en forma de cards. En cada card
figuran los datos del producto, que, en el caso de ser administradores, podremos editar
su información. Para este último caso incorporar los botones actualizar y eliminar.
También tendremos un formulario de ingreso de productos nuevos con los campos
correspondientes y un botón enviar. Asimismo, construir la vista del carrito donde se
podrán ver los productos agregados e incorporar productos a comprar por su id de
producto.

2. Esta aplicación de frontend debe enviar los requests get, post, put y delete al servidor
utilizando fetch y debe estar ofrecida en su espacio público. En el caso de requerir una ruta
no implementada en el servidor, este debe contestar un objeto de error: ej { error : -2,
descripcion: ruta 'x' método 'y' no implementada}
3. En todos los casos, el diálogo entre el frontend y el backend debe ser en formato JSON. El
servidor no debe generar ninguna vista.

4. La estructura de programación será ECMAScript, separada tres en módulos básicos (router,
lógica de negocio/api y persistencia ). Más adelante implementaremos el desarrollo en capas.
Utilizar preferentemente clases, constructores de variables let y const y arrow function.

5. Realizar la prueba de funcionalidad completa en el ámbito local (puerto 8080) y en glitch.com
