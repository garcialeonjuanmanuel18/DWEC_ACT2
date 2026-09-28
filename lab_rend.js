//Escribe un archivo HTML/JS con un botón que ejecute un bucle
//for muy pesado

let botonBucle=document.getElementById("botonBucle");

function buclePesado(){
for (let i = 0; i < 1000000; i++) {
    console.log("Pesao");
 }
}

botonBucle.addEventListener("click", buclePesado);