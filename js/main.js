let boton = document.getElementById("boton");
let parrafo = document.getElementById("parrafo");
let titulo = document.getElementById("titulo");
let body = document.body;

        titulo.style.color = "black"
        parrafo.style.color = "black"
        body.style.backgroundColor = "white"

function modoClarOscuro(){
    if(body.style.backgroundColor == "white"){
        body.style.backgroundColor = "black"
        titulo.innerHTML = "OSCURO"
        parrafo.innerHTML = "oscuro"
        titulo.style.color = "white"
        parrafo.style.color = "white"
    }
    else{
        body.style.backgroundColor = "white"
        titulo.innerHTML = "CLARO"
        parrafo.innerHTML = "claro"
        titulo.style.color = "black"
        parrafo.style.color = "black"
    }
}
    

boton.addEventListener("click", modoClarOscuro);