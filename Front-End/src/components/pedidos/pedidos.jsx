import React from 'react'
import { Link } from 'react-router-dom'

function Pedidos() {
  return (
    <div>
          {/* <!-- Header--> */}
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Pedidos</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              Sección de los Pedidos de Platos de Comida
            </p>
          </div>
        </div>
      </header>

      <div class="form-group">
        <div class="col-md-12 text-center">
          <Link to="/registrar_pedidos">
            <button type="submit" class="btn btn-primary btn-lg">
              Registrar Pedido
            </button>{" "}
          </Link>
        </div>
      </div>

      <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"><h2>Pedidos</h2></div>
                    <div class="col-sm-4">
                        
                    </div>
                </div>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Nombre de la Persona del Pedido</th>
                        <th>Dirección (En caso de que el pedido sea para llevar)</th>
                        <th>Celular</th>
                        <th>Pedido</th>
                        <th>Precio Total del Pedido</th>
                        <th>Número de la Mesa (En caso del que el pedido sea en el restaurante)</th>
                        <th>Estado del Pedido</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
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

export default Pedidos