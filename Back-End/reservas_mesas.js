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

      const nombre_cliente = req.body['nombre_cliente']
      const tipo_identificacion = req.body['tipo_identificacion']
      const identificacion = req.body['identificacion']
      const celular = req.body['celular']
      const correo = req.body['correo']
      const numero_mesa = req.body['numero_mesa']
      const hora_reserva = req.body['hora_reserva']
      
      
      con.connect(function(err) {
        if (err) throw err;
        var sql = "INSERT INTO cliente (identificacion,tipo_identificacion,nombre_cliente,celular,correo) VALUES (?);";
        var values = [
          [identificacion,tipo_identificacion,nombre_cliente,celular,correo]
        ]
        con.query(sql, values, function (err, result) {
          if (err) throw err;
          var sql = "INSERT INTO reserva (hora_reserva,id_mesa,id_estado,identificacion) VALUES (?);";
          var values = [
          [hora_reserva,numero_mesa, 1 /* estado 1 es pendiente creado en la bd*/,identificacion]
        ]
        con.query(sql, values, function (err, result) {
          if (err) throw err;
          res.json("1 record inserted")        
        });       
        });
      }); 

        
  })
  
  //READ Solicitar Información
  router.get('/', (req, res) => {
    
    con.connect(function(err) {
      if (err) throw err;    
      var sql = "SELECT cliente.identificacion AS identificacion, cliente.nombre_cliente AS nombre_cliente, cliente.celular AS celular, mesa.numero_mesa AS numero_mesa, DATE_FORMAT(reserva.hora_reserva,'%m/%d/%Y %h:%i %p') AS hora_reserva, estado.descripcion AS estado  FROM reserva JOIN cliente ON cliente.identificacion = reserva.identificacion JOIN estado ON estado.id_estado = reserva.id_estado JOIN mesa ON mesa.id_mesa = reserva.id_mesa";
      con.query(sql, function (err, result) {
        if (err) throw err;
        res.json(result)        
      });
    });   
  })
  
  //READ Solicitar Información de un producto
  router.get('/:id_reserva', (req, res) => {
    con.connect(function(err) {
      if (err) throw err;
      var sql = "SELECT cliente.identificacion AS identificacion, cliente.nombre_cliente AS nombre_cliente, cliente.celular AS celular, mesa.numero_mesa AS numero_mesa, DATE_FORMAT(reserva.hora_reserva,'%Y-%m-%d %H:%i:%s') AS hora_reserva, estado.descripcion AS estado  FROM reserva JOIN cliente ON cliente.identificacion = reserva.identificacion JOIN estado ON estado.id_estado = reserva.id_estado JOIN mesa ON mesa.id_mesa = reserva.id_mesa WHERE id_reserva = ?;";   
      var values = [req.params.id_reserva]
      con.query(sql, values, function (err, result) {
        if (err) throw err;
        res.json(result)        
      });
    });   
  })
  
  //UPDATE actualizar información que ya existe
  router.put('/:id_reserva', (req, res) => {  
      const nombre_cliente = req.body['nombre_cliente']
      const tipo_identificacion = req.body['tipo_identificacion']
      const identificacion = req.body['identificacion']
      const celular = req.body['celular']
      const correo = req.body['correo']
      const numero_mesa = req.body['numero_mesa']
      const hora_reserva = req.body['hora_reserva']
      const estado = req.body['estado']
    con.connect(function(err) {
      if (err) throw err;
      var sql = "UPDATE reserva SET nombre_cliente = ?, tipo_identificacion = ?, identificacion = ?,celular = ? ,correo = ?, numero_mesa = ?, hora_reserva = ?, estado = ? WHERE id_reserva = ?; ";
      var values = [nombre_cliente, tipo_identificacion,identificacion,celular,correo,numero_mesa,hora_reserva,estado, req.params.id_reserva]      
      con.query(sql, values, function (err, result) {
        if (err) throw err;
        res.json("Number of records updated: " + result.affectedRows)        
      });
    });        
  })
    
  //DELETE Borrar información 
  router.delete('/:id_reserva', (req, res) => {
    con.connect(function(err) {
      if (err) throw err;
      var sql = "DELETE FROM reserva WHERE id_reserva = ?";
      var values = [req.params.id_reserva]      
      con.query(sql, values, function (err, result) {
        if (err) throw err;
        res.json("Number of records deleted: " + result.affectedRows)        
      });
    });   
  })

module.exports = router