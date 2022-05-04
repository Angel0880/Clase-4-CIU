var $div = document.querySelector("div")

$div.classList.add("square")

$div.classList.remove("square")

var claseSquare = $div.classList.toggle("square")

function toogleSquare() { claseSquare }
setInterval( toogleSquare, 1500)

////////////////////////////////////////////////////////////

var source = document.getElementById('source').textContent
document.getElementById('destination').textContent = source

var swap_nro_1 = document.getElementById('swap_1').textContent
var swap_nro_2 = document.getElementById('swap_2').textContent
document.getElementById('swap_1').textContent = swap_nro_2
document.getElementById('swap_2').textContent = swap_nro_1