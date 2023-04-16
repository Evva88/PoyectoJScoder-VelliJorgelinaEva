const productos = [
  {
    nombre: "Cat Chow",
    precio: 8000,
    id: 1,
    img: "./assets/CatChowAdultoCarne-8kg.jpg"
  },
  {
    nombre: 'Dog Chow',
    precio: 8000,
    id: 2,
    img: './assets/perro.jpg'
  },
 {
    nombre: 'Cat Chow Gatitos',
    precio: 9000,
    id: 3,
    img: './assets/gatitos.jpg'
  },
  {
    nombre: 'Dog Chow Perritos',
    precio: 9000,
    id: 4,
    img: './assets/perritos.jpg'
  },
  {
    nombre: 'Juguete gatito',
    precio: 300,
    id: 5,
    img: './assets/j.gato.jpg'
  },
  {
    nombre: 'Juguete perrito',
    precio: 300,
    id: 6,
    img: './assets/CHUPETE-GOMA.jpg'
  },
  {
    nombre: 'Royal Canin',
    precio: 14000,
    id: 7,
    img: './assets/royalGato.jpg'
  },
  {
    nombre: 'Purina Gato',
    precio: 10000,
    id: 8,
    img: './assets/purinaGato.webp'
  },
  {
    nombre: 'Purina Perro',
    precio: 11000,
    id: 9,
    img: './assets/purina.png'
  },
  {
    nombre: 'Whiskas Sardina',
    precio: 230,
    id: 10,
    img: './assets/sardina.webp'
  },
];



function guardarProductos(productos){
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductos(){
  return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductos(productos);


function renderProductos() {
  const productos = cargarProductos();
  let salida = "";

  for (const producto of productos) {
    salida += `<div class="col-md-3">
               <div class="card tex-center">
               <img src="${producto.img}" alt="${producto.nombre}" class="card-img-top" />
               <div class="card-body">
               <p class="card-text">${producto.nombre} ${producto.precio}</p>
               <p><button class="btn btn-warning" onclick="agregarAlCarrito(${producto.id});" title="Agregar Producto">Agregar</button>
               </div>
               </div>
               </div>`;
}

  document.getElementById("productos").innerHTML = salida;
}

renderProductos();
renderBotonCarrito();

function guardarProductosCarrito(productos) {
  localStorage.setItem("carrito", JSON.stringify(productos));
}

function cargarProductosCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function vaciarCarrito() {
  localStorage.removeItem("carrito");


  renderProductosCarrito();
  renderBotonCarrito();
}

function estaEnElCarrito(id) {
  const carrito = cargarProductosCarrito(); 
  
  return carrito.some(item => item.id === id);
}

function agregarAlCarrito(id) {
  const carrito= cargarProductosCarrito();


  if (estaEnElCarrito(id)){
    let pos= carrito.findIndex (item => item.id === id);
    carrito[pos].cantidad += 1;
  }else{
    const productos = buscarProducto(id);
    productos.cantidad = 1;
    carrito.push(productos);
  }


  guardarProductosCarrito(carrito);
  renderBotonCarrito();    
}

function buscarProducto(id) { 
  const productos = cargarProductos();

  return productos.find(item => item.id === id); 
}

function totalItemsCarrito() {
  const productos = cargarProductosCarrito();

  return productos.reduce((total, item) => total += item.cantidad, 0);
}

function totalPagarCarrito() {
  const productos = cargarProductosCarrito();

  return productos.reduce((total, item) => total += item.cantidad * item.precio, 0);
} 

function renderBotonCarrito() {
  const salida = `<a href="./pag/carritoCompras.html" id="carrito-container" class="btn  btn-warning primary position-relative">
                   <img id=carrito-container2 src="./assets/shopping-bag (1).svg" alt="carrito-container" width="32"/>
                   <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalItemsCarrito()}
                   </span>
                   </a>`;
                  

  document.getElementById("carrito-container").innerHTML = salida;
}
 


































  
     

