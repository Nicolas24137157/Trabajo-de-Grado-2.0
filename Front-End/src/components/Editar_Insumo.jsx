import React from 'react'
import "./Editar_Insumo.css"

function Editar_Insumo() {
  return (
    <div>
    {/* <!-- Header--> */}
    <header class="bg-dark py-5">
       <div class="container px-4 px-lg-5 my-5">
           <div class="text-center text-white">
               <h1 class="display-4 fw-bolder">Editar Insumo</h1>
               <p class="lead fw-normal text-white-50 mb-0">Edita y Actualiza el Insumo Atráves del formulario</p>
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
                   <legend class="text-center header">Editar Insumo</legend>
                   
                   <div className='formulario'>
                   <div class="form-group">
                       <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                       <div class="col-md-8">
                       <label htmlFor="name">Nombre del Insumo</label>
                           <input id="fname" name="name" type="text" placeholder="Nombre del Insumo" class="form-control"/>
                           
                       </div>
                   </div>
                   <div class="form-group">
                       <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                       <div class="col-md-8">
                       <label htmlFor="name">N° De Etiqueta del Insumo</label>
                           <input id="lname" name="name" type="text" placeholder="# De Etiqueta" class="form-control"/>
                           
                       </div>
                   </div>

                   <div class="form-group">
                       <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                       <div class="col-md-8">
                       <label htmlFor="name">Cantidad del Insumo</label>
                           <input id="email" name="email" type="text" placeholder="Cantidad" class="form-control"/>
                       </div>
                   </div>

                   <div class="form-group">
                       <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                       <div class="col-md-8">
                        <label htmlFor="name">Fecha de Caducidad del Insumo</label>
                           <input id="email" name="email" type="date" placeholder="Fecha de Caducidad" class="form-control"/>
                       </div>
                   </div>

                   

                   

                   <div class="form-group">
                       <div class="col-md-12 text-center">
                           <button type="submit" class="btn btn-primary btn-lg1">Actualizar</button>
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

export default Editar_Insumo