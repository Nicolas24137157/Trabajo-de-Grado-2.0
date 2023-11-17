import React from 'react'
import plato_comida from '@assets/plato_comida.jpg'
import insumo from '@assets/insumos.jpg'
import proveedores from '@assets/Proveedores.jpg'
import ventas from '@assets/ventas_comidas.jpg'
import reservas_mesas from '@assets/registro_mesas.jpeg'
import pedidos from '@assets/pedidos_comida.jpg'
import devoluciones from '@assets/devoluciones.jpg'
import seccion_registro from '@assets/seccion_registro.jpeg'
import registro_mesas from '/src/assets/reservamesarestaurante.jpg'
import { Link } from 'react-router-dom'
import './Menu.css'



function Menu() {
  return (
    <div className="animate__animated animate__fadeIn animate">
      <body>
        
        {/* <!-- Header--> */}
        
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Menú del Inventario del Restaurante Oh La Lá</h1>
                    <p class="lead fw-normal text-white-50 mb-0">Elige una opción</p>
                </div>
            </div>
        </header>
        {/* <!-- Section--> */}
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src={plato_comida} alt="Plato_Comida" />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Platos del Menú</h5>
                                    {/* <!-- Product price--> */}
                                    {/* $40.00 - $80.00 */}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               <Link to='/platos_menu'> <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Ingresar</a></div></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Sale badge--> */}
                            {/* <div class="badge bg-dark text-white position-absolute" >Sale</div> */}
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src={insumo} alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Productos (Insumos)</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    {/* <span class="text-muted text-decoration-line-through">$20.00</span> */}
                                    {/* $18.00 */}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <Link to = '/productos_insumos'><div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Ingresar</a></div></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Sale badge--> */}
                            {/* <div class="badge bg-dark text-white position-absolute" >Sale</div> */}
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src={proveedores} alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Proveedores</h5>
                                    {/* <!-- Product price--> */}
                                    {/* <span class="text-muted text-decoration-line-through">$50.00</span> */}
                                    {/* $25.00 */}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <Link to='/proveedores'><div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Ingresar</a></div></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src={ventas} alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Ventas</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    {/* $40.00 */}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              <Link to = '/ventas'> <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Ingresar</a></div></Link>
                            </div>
                        </div>
                    </div>

                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Product image--> */}
                             <img class="card-img-top" src={reservas_mesas} alt="..." /> 
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                  <h5 class="fw-bolder">Registro de Mesas</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    {/* $40.00 */}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <Link to ="/mesas"><div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Ingresar</a></div></Link>
                            </div>
                        </div>
                    </div>

                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Sale badge--> */}
                            {/* <div class="badge bg-dark text-white position-absolute">Sale</div> */}
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src={registro_mesas} alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Reservas</h5>
                                    {/* <!-- Product price--> */}
                                    {/* <span class="text-muted text-decoration-line-through">$50.00</span> */}
                                    {/* $25.00 */}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               <Link to = '/reservas'> <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Ingresar</a></div></Link>
                            </div>
                        </div>
                    </div>

                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Sale badge--> */}
                            {/* <div class="badge bg-dark text-white position-absolute">Sale</div> */}
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src={pedidos} alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Pedidos</h5>
                                    {/* <!-- Product price--> */}
                                    {/* <span class="text-muted text-decoration-line-through">$50.00</span> */}
                                    {/* $25.00 */}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              <Link to = '/pedidos'>  <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Ingresar</a></div></Link>
                            </div>
                        </div>
                    </div>

                   
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Sale badge--> */}
                            {/* <div class="badge bg-dark text-white position-absolute" >Sale</div> */}
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src={devoluciones} alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Devoluciones</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    {/* <span class="text-muted text-decoration-line-through">$20.00</span> */}
                                    {/* $18.00 */}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <Link to = "/devoluciones"><div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Ingresar</a></div></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src={seccion_registro} alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                  <h5 class="fw-bolder">Sección de Registro de Devoluciones</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    {/* $40.00 */}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <Link to ="/seccion_registros"><div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Ingresar</a></div></Link>
                            </div>
                        </div>
                    </div>
                    


                </div>
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Restaurante Oh La Lá</p></div>
        </footer>
        
    </body>
    </div>
  )
}

export default Menu