import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { getInsumos, deleteInsumo } from "./insumos.service";
import Swal from 'sweetalert2';

function Productos_Insumos(props) {

  const [insumos, setInsumos] = useState([])

  useEffect(()=>{
    getInsumos().then( insumos => setInsumos(insumos))   
  },[])

  const borrarInsumo = (id_insumos) => {
    Swal.fire({
      title: '¿Estás seguro de que deseas borrar el plato del Menú?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma, elimina el producto
        deleteInsumo(id_insumos).then(() => {
          getInsumos().then((insumos) => setInsumos(insumos));
        });
      }
    });
  }



  const editarInsumo = (id_insumos) => {
    // window.location.href = "./editar_insumo?id_insumos="+id_insumos;
    Swal.fire({
      title: '¿Quieres Editar Este Insumo?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Editar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "./editar_insumo?id_insumos="+id_insumos;
      }
    });
  }

 
  
  return (
    <div className="animate__animated animate__fadeIn animate">
      
         {/* <!-- Header--> */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Productos (Insumos)</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              Sección de los Insumos
            </p>
          </div>
        </div>
      </header>

      

      
<div className="container">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-8">
          <h2>Insumos</h2>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID del Insumo</th>
          <th>Nombre del Insumo</th>
          <th>Cantidad</th>
          <th>Fecha de Caducidad del Insumo</th>
          <th style={{ width: "160px"}}>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {insumos.map((insumo) => (
          <tr key={insumo.id_insumos}>
            <td>{insumo.id_insumos}</td>
            <td>{insumo.nombre_insumo}</td>
            <td>{insumo.cantidad}</td>
            <td>{insumo.fecha_caducidad}</td>
            <td className="td-botones">
              <div className="botones">
                
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => editarInsumo(insumo.id_insumos)}
              >
                Editar
              </button>
             
              
              <button
                type="button"
                className="btn btn-danger ml-2"
                onClick={() => borrarInsumo(insumo.id_insumos)}
              >
                Borrar
              </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="col-sm-12 text-start">
        <Link to="/registrar_insumo">
          <button type="submit" className="btn btn-primary btn-lg">
            Registrar Insumo
          </button>{" "}
        </Link>
      </div>

      <div className="col-sm-12 text-start" style={{paddingTop: '30px'}}>
        <Link to="/Menu">
          <button type="submit" className="btn btn-primary btn-lg">
            Ir Atrás
          </button>{" "}
        </Link>
      </div>
      
  </div>
  <div>
  
</div>
</div>

      

      {/* <!-- Footer--> */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Restaurante Oh La Lá
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Productos_Insumos