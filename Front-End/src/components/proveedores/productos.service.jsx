export async function postProducto(producto){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: producto
    };    
    return await fetch('http://127.0.0.1:3000/productos', requestOptions)
        .then(response => response.json())
        .then(data => data);
}

export async function getProductos(){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return await fetch('http://127.0.0.1:3000/productos', requestOptions)
    .then(response => response.json())
    .then(data => data );        
}

export async function getProductoById(id_producto){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    console.log("geting product",id_producto)
    return await fetch('http://127.0.0.1:3000/productos/'+id_producto, requestOptions)
    .then(response => response.json())
    .then(data => data[0]);  
}

export async function updateProducto(id_producto, producto){
    console.log(producto)
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: producto
    };    
    return await fetch('http://127.0.0.1:3000/productos/'+id_producto, requestOptions)
        .then(response => response.json())
        .then(data => data);
}

export async function deleteProducto(id_producto){
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
    return await fetch('http://127.0.0.1:3000/productos/'+id_producto, requestOptions)
        .then(response => response.json())
        .then(data => data);
}
