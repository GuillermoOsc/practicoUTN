const conexion = require('../database/db');

// Se almacenan los datos del formulario
exports.save = (req, res)=>{
   const libro = req.body.user;
   const seccion = req.body.rol;
   conexion.query('INSERT INTO libro SET ?', {user:user, rol:rol}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
   })

// Se actualizan los datos del formulario
   exports.update = (req, res)=>{
    const libro = req.body.user;
    const seccion = req.body.rol;
    conexion.query('UPDATE libros SET ? WHERE id = ?', [{libros:libros, seccion:seccion}, id], (error, results)=>{
         if(error){
             console.log(error);
         }else{
             res.redirect('/');
         }
    })
   }
}