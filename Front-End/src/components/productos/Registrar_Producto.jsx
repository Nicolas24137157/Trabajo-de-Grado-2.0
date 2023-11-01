import React from 'react'
import "./Registrar_Producto.css"
import { useState } from 'react'
import { postProducto } from './productos.service'
import { Link } from 'react-router-dom'

function Registrar_Producto() {

    const [nombre_producto, setNombreProducto]  = useState ('')
    const [precio, setPrecio] = useState ('')
    const [descripcion_producto, setDescripcionProducto]  = useState ('')

    function handleClick (){
        const producto = JSON.stringify({ 
            nombre_producto: nombre_producto,
            precio: precio,
            descripcion: descripcion_producto

        })
        postProducto(producto).then(res => console.log(res))
    }
    
  return (
    <div>
         {/* <!-- Header--> */}
         <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Registrar Producto</h1>
                    <p class="lead fw-normal text-white-50 mb-0">Registra el Producto Atráves del formulario</p>
                </div>
            </div>
        </header>

        {/* <!-- Formulario--> */}

        <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="well well-sm">
                <form class="form-horizontal" method="post">
                    <fieldset>
                        
                        <legend class="text-center header "style={{position:'relative',left:'0px'}}>Registrar Producto</legend>
                        
                        <div className='formulario'>
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                            <label htmlFor="name">Nombre del Producto</label>
                                <input id="fname" name="name" type="text" placeholder="Nombre del Producto" class="form-control"
                                onChange={(e)=>{
                                    setNombreProducto(e.target.value)
                                }}/>
                                
                            </div>
                        </div>
                       
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-8">
                            <label htmlFor="name">Precio del Producto</label>
                                <input id="email" name="email" type="text" placeholder="Precio" class="form-control"
                                onChange={(e)=>{
                                    setPrecio(e.target.value)
                                }}/>

                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                            <label htmlFor="name">Descripcion del Producto</label>
                                <input id="fname" name="name" type="text" placeholder="Descripción del Producto" class="form-control"
                                onChange={(e)=>{
                                    setDescripcionProducto(e.target.value)
                                }}/>
                                
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn btn-primary btn-lg1" onClick={(e) =>{
                                    e.preventDefault()
                                    handleClick()
                                }}>Registrar</button>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-12 text-center">
                              <Link to = '/platos_menu'> <button type="submit" class="btn btn-primary btn-lg1">Ir Atrás</button></Link> 
                            </div>
                        </div>



                        </div>

                        

                        
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>
    {/* <!-- Footer--> */}
    <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Restaurante Oh La Lá</p></div>
        </footer>


    </div>
  )
}

export default Registrar_Producto