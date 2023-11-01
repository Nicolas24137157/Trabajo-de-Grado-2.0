const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

// npx nodemon conexion.js

app.use(express.json())
app.use(cors())

const productosRouter = require('./productos')
app.use('/productos', productosRouter)

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})