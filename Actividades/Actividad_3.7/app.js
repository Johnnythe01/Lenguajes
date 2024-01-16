let navigationbar = document.getElementById('navigationbar')
let boton = document.getElementById("hamburguesa")
let option0 = document.getElementById("option0")
let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let option3 = document.getElementById("option3")
let option4 = document.getElementById("option4")
boton.addEventListener("click", function () {

    navigationbar.classList.toggle("visible")
})