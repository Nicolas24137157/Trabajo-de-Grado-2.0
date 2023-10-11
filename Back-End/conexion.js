const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2');

app.use(express.json())

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "developer",
  database: "inventario_ohlala"
});

//CREATE Enviar nueva Información
app.post('/productos', (req, res) => {   
    const nombre_producto = req.body['nombre_producto']
    const precio = req.body['precio']
    con.connect(function(err) {
      if (err) throw err;
      var sql = "INSERT INTO productos (nombre_producto, precio) VALUES (?);";
      var values = [
        [nombre_producto,precio]
      ]
      con.query(sql, values, function (err, result) {
        if (err) throw err;
        res.send("1 record inserted")        
      });
    });    
})

//READ Solicitar Información
app.get('/productos', (req, res) => {
  con.connect(function(err) {
    if (err) throw err;    
    var sql = "SELECT * FROM productos";
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.send(result)        
    });
  });   
})

//UPDATE actualizar información que ya existe
app.put('/productos/:id_producto', (req, res) => {  
  const nombre_producto = req.body['nombre']
  const precio = req.body['precio']
  con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE productos SET nombre_producto = ?, precio = ? WHERE id_producto = ?;";
    var values = [nombre_producto,precio, req.params.id_producto]      
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      res.send("Number of records updated: " + result.affectedRows)        
    });
  });        
})
  
//DELETE Borrar información 
app.delete('/productos/:id_producto', (req, res) => {
  con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM productos WHERE id_producto = ?";
    var values = [req.params.id_producto]      
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      res.send("Number of records deleted: " + result.affectedRows)        
    });
  });   
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})