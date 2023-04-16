fetch('../js/productos.json')
  .then((response) => response.json())
  .then((info) => {
    let html = "";
    info.forEach(producPedido => {
      html += `<div class="col-md-3">
               <div class="card tex-center">
               <img src="${producPedido.img}" alt="${producPedido.nombre}" class="card-img-top" />
               <div class="card-body">
               <p class="card-text">${producPedido.nombre} ${producPedido.precio}</p>
               <button class="btn btn-warning" onclick="agregarAlCarrito(${producPedido.id});" title="Agregar Producto">Pedir</button>
               </div>
               </div>
               </div>`;
    });

    document.getElementById("pedidos").innerHTML = html;
  });
