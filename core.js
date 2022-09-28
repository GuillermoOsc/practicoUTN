const express = require('express');
const app = express();

// Se llama al motor de plantillas ejs
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./router'));

app.listen(5000, ()=>{
    console.log('Server corriendo en localhost:5000');
});

