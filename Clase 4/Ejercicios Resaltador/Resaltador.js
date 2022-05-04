var lis = document.querySelectorAll("p")

for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.classList.toggle("resaltador")
    })

}