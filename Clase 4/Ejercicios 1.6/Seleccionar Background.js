var input = document.querySelector("input")
var body = document.querySelector("body")

input.addEventListener("input", function() {
  body.style.backgroundColor = `${input.value}`;
})