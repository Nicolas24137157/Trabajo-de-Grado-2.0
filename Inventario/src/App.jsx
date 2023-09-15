import React from 'react'
import "./App.css"

function App() {
  


  return (
      <div class="d-lg-flex half">
    <div class="bg order-1 order-md-2"></div>
    <div class="contents">    
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-7">
            <h3>Bienvenido Al Sistema de Inventario del Restaurante Oh La Lá</h3>
            <form className='formulario'>
              <div class="form-group first">
                <label for="username">Usuario</label>
                <input type="text" class="form-control" placeholder="Usuario" id="username" />                
              </div>
              <div class="form-group">
                <label for="password">Contraseña</label>
                <input type= "password" class="form-control" placeholder="Contraseña" id="password" />               
              </div>                         
              <input type ="submit" value="Log In" class="btn btn-block btn-primary"/>            
            </form>
          </div>
        </div>
      </div>
    </div>    
  </div>
)
}

export default App
