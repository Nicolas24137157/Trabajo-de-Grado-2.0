import React, { useEffect } from 'react'
import "./Editar_Producto.css"
import { useState } from 'react'
import { useSearchParams } from "react-router-dom"
import { getProductoById, updateProducto } from './productos.service'

function Editar_Producto() {

    const [queryParameters] = useSearchParams()
    const [id_producto, setIdProducto]  = useState ('')
    const [nombre_producto, setNombreProducto]  = useState ('')
    const [precio, setPrecio] = useState ('')
    const [descripcion_producto, setDescripcionProducto]  = useState ('')

    useEffect(()=>{
        console.log(queryParameters.get('id_producto'))
        getProductoById(queryParameters.get('id_producto')).then(producto => {
            setIdProducto(producto.id_producto)
            setNombreProducto(producto.nombre_producto)
            setPrecio(producto.precio)
            setDescripcionProducto(producto.descripcion)
        })
    },[])    

    function handleClick (){
        const producto = JSON.stringify({            
            nombre_producto:nombre_producto,
            precio:precio,
            descripcion:descripcion_producto
        })
        updateProducto(id_producto, producto).then( res => {
            console.log(res)
            
        })
    }
    
  return (
    <div>
         {/* <!-- Header--> */}
         <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Editar Producto</h1>
                    <p className="lead fw-normal text-white-50 mb-0">Registra el Producto Atráves del formulario</p>
                </div>
            </div>
        </header>

        {/* <!-- Formulario--> */}

        <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="well well-sm">
                <form className="form-horizontal" method="post">
                    <fieldset>
                        <legend className="text-center header">Editar Producto</legend>
                        
                        <div className='formulario'>
                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                            <div className="col-md-8">
                            <label htmlFor="name">Nombre del Producto</label>
                                <input id="fname" name="name" type="text" placeholder="Nombre del Producto" className="form-control"
                                value={nombre_producto}
                                onChange={(e)=>{
                                    setNombreProducto(e.target.value)
                                }}/>
                                
                            </div>
                        </div>

                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-envelope-o bigicon"></i></span>
                            <div className="col-md-8">
                            <label htmlFor="name">Precio del Producto</label>
                                <input id="email" name="email" type="text" placeholder="Precio" className="form-control"
                                value={precio}
                                onChange={(e)=>{
                                    setPrecio(e.target.value)
                                }}/>

                            </div>
                        </div>

                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                            <div className="col-md-8">
                            <label htmlFor="name">Descripción del Producto</label>
                                <input id="fname" name="name" type="text" placeholder="Descripción del Producto" className="form-control"
                                value={descripcion_producto}
                                onChange={(e)=>{
                                    setDescripcionProducto(e.target.value)
                                }}/>
                                
                            </div>
                        </div>


                        

                        

                        <div className="form-group">
                            <div className="col-md-12 text-center">
                                <button type="submit" className="btn btn-primary btn-lg1" onClick={(e) =>{
                                    e.preventDefault()
                                    handleClick()
                                }}>Actualizar</button>
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
    <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Restaurante Oh La Lá</p></div>
        </footer>


    </div>
  )
}

export default Editar_Producto