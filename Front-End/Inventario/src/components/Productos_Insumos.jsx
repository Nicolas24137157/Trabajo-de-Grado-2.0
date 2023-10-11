import React from 'react'
import { Link } from "react-router-dom";

function Productos_Insumos() {
  return (
    <div>

         {/* <!-- Header--> */}
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Productos (Insumos)</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              Sección de los Insumos
            </p>
          </div>
        </div>
      </header>

      <div class="form-group">
        <div class="col-md-12 text-center">
          <Link to="/registrar_insumo">
            <button type="submit" class="btn btn-primary btn-lg">
              Registrar Insumo
            </button>{" "}
          </Link>
        </div>
      </div>

      <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"><h2>Productos (Insumos)</h2></div>
                    <div class="col-sm-4">
                        
                    </div>
                </div>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>ID del Insumo</th>
                        <th>Nombre del Insumo</th>
                        <th>Cantidad</th>
                        <th>Fecha de Caducidad</th>
                        <th>Opciones</th>
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
							<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>

                        </td>
                        <td>
							<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>

                        </td>
                        <td>
							<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
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

export default Productos_Insumos