const express = require('express');
let app = express();

app.get('/', (req, res) =>{
    res.send("Hello World");
});

app.post('/', (req, res) => {
    res.send(req.params);

});


app.listen(8080,()=>{
    console.log("Aplicacion Corriendo en el puerto 8080");
});

