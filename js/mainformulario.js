class Cliente {
     constructor(nombre, apellido, mail) {
       this.nombre = nombre;
       this.apellido = apellido;
       this.mail = mail;
     }
   }
   
   const arrayClientes = [];
   
   const formulario = document.getElementById("formulario");
   formulario.addEventListener("submit", (e) => {
     e.preventDefault();
   
     const nombre = document.getElementById("nombre");
     const apellido = document.getElementById("apellido");
     const mail = document.getElementById("mail");
   
    
     if (nombre.value === "" || apellido.value === "" || mail.value === "") {
       alert("Por favor complete todos los campos del formulario");
       return;
     }
   
     const cliente = new Cliente(nombre.value, apellido.value, mail.value);
   
     arrayClientes.push(cliente);
     console.log(arrayClientes);
   
    
     localStorage.setItem("arrayClientes", JSON.stringify(arrayClientes));
   
     formulario.reset();
   });
   
   
   let arrayClienteAgregado = JSON.parse(localStorage.getItem("arrayClientes"));
   console.log(arrayClienteAgregado);
   

   function saludo() {
    Swal.fire({
      title: 'Gracias por registrarte',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: 'url(../assets/fondo.jpg', 
    });
  }
  
  document.getElementById("btn-enviar").addEventListener("click", saludo);