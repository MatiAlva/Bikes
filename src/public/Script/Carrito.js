let BotonCarrito = document.querySelectorAll("#Boton");
let carritoVacio =  document.getElementById("carrito");
let carritoLleno =  document.getElementById("carrito2");

BotonCarrito.forEach((boton)=>{ boton.addEventListener("click",()=>{
        carritoVacio.style.opacity= "0";
        carritoLleno.style.opacity= "1";  
    });
});