import React from 'react'
import "/src/components/devoluciones/Registrar_Devoluciones.css"


function Registrar_Devoluciones() {
  return (
    <div>
        {/* <!-- Header--> */}
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Devoluciones</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              Sección de Registro de Devoluciones
            </p>
          </div>
        </div>
      </header>

      
      <div>
        
      </div>

      <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="well well-sm">
                <form class="form-horizontal" method="post">
                    <fieldset className='fieldset1'>
                        <legend class="text-center header">Registrar Devoluciones</legend><br />
                        <legend class="text-center header1">Devolución de Plato del Menú (Producto) (Domicilio)</legend>
                        
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-8">
                                <textarea class="form-control" id="message" name="message" placeholder="Escriba el motivo por el cuál hace devolución del plato del Menú (Domicilio)" rows="7"></textarea>
                            </div>
                        </div>
                       

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="fñname" name="name" type="text" placeholder="Celular de la persona" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-8">
                                <textarea class="form-control" id="message" name="message" placeholder="Producto Pedido" rows="7"></textarea>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn btn-primary btn-lg3">Enviar</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="well well-sm">
                <form class="form-horizontal" method="post">
                    <fieldset className='fieldset2'>
                        <legend class="text-center header1">Devolución del Insumo</legend>
                        
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-8">
                                <textarea class="form-control" id="message" name="message" placeholder="Escriba el motivo por el cuál hace devolución de uno o varios insumos" rows="7"></textarea>
                            </div>
                        </div>
                       
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="fñname" name="name" type="text" placeholder="Celular del Proveedor" class="form-control"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="fñname" name="name" type="text" placeholder="Nombre del Proveedor" class="form-control"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-8">
                                <textarea class="form-control" id="message" name="message" placeholder="Insumo(s) a devolver" rows="7"></textarea>
                            </div>
                        </div>

                        

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-8">
                                <textarea class="form-control" id="message" name="message" placeholder="Cantidad a devolver del insumo(s)" rows="7"></textarea>
                            </div>
                        </div>

                        

                        <div class="form-group">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn btn-primary btn-lg3">Enviar</button>
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
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Restaurante Oh La Lá
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Registrar_Devoluciones