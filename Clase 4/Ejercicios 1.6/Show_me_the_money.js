var imagenes = document.querySelectorAll("img")
var botones = document.querySelectorAll("button")

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].classList.add("hidden")
}

for (let i = 0; i < botones.length; i++) {
    const boton = botones[i];
    const imagen = imagenes[i];
    boton.addEventListener("click", function(){
        imagen.classList.toggle("hidden")
    })
}

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("click", function(){
        this.classList.add("hidden")
    })
}