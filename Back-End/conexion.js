const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

// npx nodemon conexion.js

app.use(express.json())
app.use(cors())

const productosRouter = require('./productos')
app.use('/productos', productosRouter)

const insumosRouter = require('./insumos')
app.use('/insumos', insumosRouter)

const proveedoresRouter = require('./proveedores')
app.use('/proveedores', proveedoresRouter)



  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})