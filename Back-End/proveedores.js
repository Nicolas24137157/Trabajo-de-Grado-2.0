const express = require("express")
const router = express.Router()
const mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "developer",
    database: "inventario_ohlala"
  });
  
  //CREATE Enviar nueva Información
  router.post('/', (req, res) => {   
      const nombre_proveedor = req.body['nombre_proveedor']
      const celular = req.body['celular']
      const direccion = req.body['direccion']
      con.connect(function(err) {
        if (err) throw err;
        var sql = "INSERT INTO proveedores (nombre_proveedor, celular, direccion) VALUES (?);";
        var values = [
          [nombre_proveedor,celular,direccion]
        ]
        con.query(sql, values, function (err, result) {
          if (err) throw err;
          res.json("1 record inserted")        
        });
      });    
  })
  
  //READ Solicitar Información
  router.get('/', (req, res) => {
    con.connect(function(err) {
      if (err) throw err;    
      var sql = "SELECT * FROM proveedores";
      con.query(sql, function (err, result) {
        if (err) throw err;
        res.json(result)        
      });
    });     
  })
  
  //READ Solicitar Información de un producto
  router.get('/:NIT', (req, res) => {
    con.connect(function(err) {
      if (err) throw err;    
      var sql = "SELECT * FROM proveedores WHERE NIT = ?;";
      var values = [req.params.NIT]
      con.query(sql, values, function (err, result) {
        if (err) throw err;
        res.json(result)        
      });
    });   
  })
  
  //UPDATE actualizar información que ya existe
  router.put('/:NIT', (req, res) => {  
    const nombre_proveedor = req.body['nombre_proveedor']
    const celular = req.body['celular']
    const direccion = req.body['direccion']
    con.connect(function(err) {
      if (err) throw err;
      var sql = "UPDATE proveedores SET nombre_proveedor = ?, celular = ?, direccion = ? WHERE NIT = ?; ";
      var values = [nombre_proveedor, celular,direccion, req.params.NIT]      
      con.query(sql, values, function (err, result) {
        if (err) throw err;
        res.json("Number of records updated: " + result.affectedRows)        
      });
    });        
  })
    
  //DELETE Borrar información 
  router.delete('/:NIT', (req, res) => {
    con.connect(function(err) {
      if (err) throw err;
      var sql = "DELETE FROM proveedores WHERE NIT = ?";
      var values = [req.params.NIT]      
      con.query(sql, values, function (err, result) {
        if (err) throw err;
        res.json("Number of records deleted: " + result.affectedRows)        
      });
    });   
  })

module.exports = router