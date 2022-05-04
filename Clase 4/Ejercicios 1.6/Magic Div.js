var img = document.querySelector("img")

var div = document.querySelector("div")

const callbackDesaparece = function() {

    img.classList.add("magic")

}

const callbackAparece = function() {

    img.classList.remove("magic")

}

div.addEventListener("mouseenter",callbackDesaparece)
div.addEventListener("mouseleave",callbackAparece)