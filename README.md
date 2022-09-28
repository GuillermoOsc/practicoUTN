## Proyecto final capacitación UTN BA - Incluyeme

### CRUD con NodeJs


### Frameworks y librerías utilizadas

- Npm
- Express
- Ejs (motor de plantillas)
- MySql (módulo para conexión a la Base de datos)
- Bootstrap (vía CDN)

### Implementación

  Con base a los requerimientos del proyecto, se implementó un CRUD con una interfaz de usuario construida con Bootstrap y conectada a una base de datos MySql, en la misma, se aplican las acciones Create, Update, Read y Delete para gestionar libros, estos se pueden filtrar mediante ID, nombre y/o sección.


  El proyecto se modularizó en tres carpetas y dos archivos:
  - controllers: Almacenamiento y actualización de los datos.
  - database: Conexión a la base de datos.
  - views: Carpeta donde se contienen las plantillas con Ejs
  - router.js: Archivo para gestión de rutas Urls
  - core.js: Archivo raíz del proyecto.




