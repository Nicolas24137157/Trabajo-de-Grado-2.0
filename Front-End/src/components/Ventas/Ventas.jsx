import React from 'react'

function Ventas() {
  return (
    <div>
           {/* <!-- Header--> */}
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Ventas</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              Sección de Ventas
            </p>
          </div>
        </div>
      </header>

      <div class="form-group">
        <div class="col-md-12 text-center">
          
        </div>
      </div>

      <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"><h2>Ventas</h2></div>
                    <div class="col-sm-4">
                        
                    </div>
                </div>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>ID Del Producto</th>
                        <th>Nombre del Producto</th>
                        <th>Precio</th>
                        <th>Cantidas Vendidas</th>
                        <th>Ingreso Total Generado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>

                        </td>
                        <td>
							
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>

                        </td>
                        <td>
							
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>

                        </td>
                        <td>
							
                        </td>
                    </tr>      
                </tbody>
            </table>
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

export default Ventas