const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_bbdd' // Nombre de la base de datos
});


// Se establece conexión a la base de datos MySql
conexion.connect((error)=>{
    if(error){
        console.error('Error de conexión: '+ error);
        return
    }
    console.log('Conectado correctamente');
})

module.exports = conexion;