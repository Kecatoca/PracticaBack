const express = require('express')
const app = express();

app.get('/',function(req,res){
    res.send('Servicio Express en Linea');
});

app.listen(3000);