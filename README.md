# SEGUNDA ENTREGA DEL PROYECTO FINAL

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

Deberás entregar el estado de avance de tu aplicación eCommerce Backend,
agregando 7 tipos de persistencia de datos:
1) File System (fs)
2) MySQL/MariaDB local
3) SQLite3
4) MongoDB Local
5) MongoDB DBaaS

>>Aspectos a incluir en el entregable:

a. Implementarás en cada tipo el CRUD correspondiente a los procesos anteriormente
desarrollados, con persistencia en memoria.
b. La funcionalidad de persistencia para todos estos casos debe ser realizada utilizando clases
con interfaz única (los nombres de los métodos comunes deben ser iguales). Cada clase
representará un tipo de persistencia.
c. Incluir dentro de estos tipos la ya realizada en memoria (Tipo 0).
d. Para seleccionar el modo de persistencia operativa, crear una clase o función que actúe
como 'Fábrica ó Factory': recibirá el 'número' de persistencia (1 al 7 y 0 para memoria) y
devolverá el objeto correspondiente para el uso por parte del controlador o lógica de negocio
en cada caso de uso (carrito o lista de productos).
e. Estas clases, llamadas DAO (Data Access Object), implementarán los métodos de conexión
hacia cada base, así como los 4 métodos CRUD: Create (insert), Read (leer con o sin filtro),
Update: (actualizar), Delete (borrar) y los métodos auxiliares que se consideren incorporar.
e. Estas clases, llamadas DAO (Data Access Object), implementarán los métodos de
conexión hacia cada base, así como los 4 métodos CRUD: Create (insert), Read (leer con o
sin filtro), Update (actualizar), Delete (borrar) y los métodos auxiliares que se consideren
incorporar.
f. La selección de la capa de persistencia activa se hará a través de una variable global, a la
cual se le asignará una constante. El nombre de dicha constante corresponderá al tipo de
persistencia y se inicializará con el número correspondiente.
g. En la vista de productos incorporar filtros mediante los cuales el cliente pueda determinar
qué información desea ver. Estos filtros responderán a los siguientes campos:
- nombre : el nombre del producto debe coincidir exactamente
- código : el código del producto debe coincidir exactamente
- precio : por rango de precio
- stock : por rango de stock
La información será filtrada del lado backend en la operación de lectura hacia la base.