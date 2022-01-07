// librerias requeridas
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');


let app = express();

// convierte el body del post en un objeto.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/', (req, res) =>{
    let path = __dirname + '/public/' + 'blog.html';
    fs.readFile('./test.json', (err,data)=>{
        
        let Data = JSON.parse(data);
        let msg = "";

        Data.Scores.forEach(element => {
            msg += "|Nick: " + element.nick + " |Score: " + element.score + "<br>";
        });
        res.send(msg);
    //res.sendFile(path);
    });
});
app.get('/blog', (req, res) =>{
    let path = __dirname + '/public/' + 'index.html';
    res.sendFile(path);
});
// Listener Posty
app.post('/', 
// entrada
(req, res) => {
    // Mostrando el body
    console.log(req.body);
    res.send("Ah");
    // guardando en el archivo
    const url = './test.txt';
    // leyendo el archivo
    fs.readFile(url, "utf-8",(err, data)=>{
        if(err) throw err;
        console.log('File Opened');
        // añadiendo al contenido del archivo el contenido del cuerpo
        data += '\n' + req.body.data;
        // escribiendo en el archivo
        fs.writeFile(url, data, (err) => {if(err) throw err;});
        console.log('File Writed');
    });
    
});


app.listen(8080,()=>{
    console.log("Aplicacion Corriendo en el puerto 8080");
});

