function eliminarProducto(id) {
  const carrito = cargarProductosCarrito();
  const productos = carrito.filter(item => item.id !== id);


  guardarProductosCarrito(productos);
  renderProductosCarrito();
  renderBotonCarrito();
}


function totalPagarCarrito() {
  const productos = cargarProductosCarrito();

  return productos.reduce((total, item) => total += item.cantidad * item.precio, 0);
}


function renderProductosCarrito() {
    const productos = cargarProductosCarrito();
    let salida = "";
  
    if (totalItemsCarrito() > 0) {
      salida += `<table class="table">
                 <tr>
                 <td colpan="5" class="text-end"><button class="btn btn-warning" onclick="vaciarCarrito()">Vaciar el Carrito</button></td>
                 </tr>`;

      for (const producto of productos) {
          salida += `<tr>
          <td>${producto.nombre}</td>
          <td>${producto.precio}</td>
          <td>${producto.cantidad} X $${producto.precio}</td>
          <td>${producto.cantidad * producto.precio}</td>
          <td id="cont.cruz" class="text-end"><button class="btn btn-warning" onclick="eliminarProducto(${producto.id});" title="Eliminar Producto"><img id=cruz src="../assets/x.svg" alt="Eliminar Producto" width="23" /></button></td>
          </tr>`;
      }

      salida += `<tr>
         <td colspan="4">Total a Pagar</td>
         <td>$${totalPagarCarrito()}</td>
         <td>&nbsp;</td>
         <td>&nbsp;</td>
         <td>&nbsp;</td>
         </tr>`;
     
      salida += `</table>`;
    } else{
        salida = `<div class="alert alert-danger text-center" role="alert">No se agregaron Productos en el Carrito!</div>`
    }
  
    document.getElementById("productos").innerHTML = salida;
} 
  renderProductosCarrito();
  renderBotonCarrito();
  

