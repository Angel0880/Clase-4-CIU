var img = document.querySelector("img")

var body = document.querySelector("body")

const callback = function(infoLog) {
    img.style.left = `${infoLog.clientX}px`;
    img.style.top = `${infoLog.clientY}px`;
    console.log("El mouse está en X: " + infoEvento.clientX + " Y: " + infoEvento.clientY)
}

//Punto 3

body.addEventListener("mousemove",callback)

//Punto 5

//body.addEventListener("drag",callback)



