const express = require('express')
const app = express()
const port = 3000
const dt = require('./m2')

app.use(express.json())

//CREATE
app.post('/productos', (req, res) => {   
    const nombre_producto = req.body['nombre']
    const precio = req.body['precio']
   
})

//READ
app.get('/productos', (req, res) => {
  res.send("The date and time are currently: " + dt.myDateTime())
})

//UPDATE
app.put('/productos', (req, res) => {
    res.send("The date and time are currently: " + dt.myDateTime())
})

//DELETE
app.delete('/productos', (req, res) => {
    res.send("The date and time are currently: " + dt.myDateTime())
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
