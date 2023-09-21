import React from 'react'
import "./Registrar_Producto.css"

function Registrar_Producto() {
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
                        <legend class="text-center header">Registrar Producto</legend>
                        
                        <div className='formulario'>
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                            <label htmlFor="name">Nombre del Producto</label>
                                <input id="fname" name="name" type="text" placeholder="Nombre del Producto" class="form-control"/>
                                
                            </div>
                        </div>
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                            <label htmlFor="name">N° De Etiqueta del Producto</label>
                                <input id="lname" name="name" type="text" placeholder="# De Etiqueta" class="form-control"/>
                                
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-8">
                            <label htmlFor="name">Precio del Producto</label>
                                <input id="email" name="email" type="text" placeholder="Precio" class="form-control"/>
                            </div>
                        </div>

                        

                        

                        <div class="form-group">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn btn-primary btn-lg">Registrar</button>
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