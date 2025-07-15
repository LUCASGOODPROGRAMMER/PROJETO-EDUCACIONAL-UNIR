//seletores
const btnMenu = document.querySelector("#btn-menu")
const btnLogar = document.querySelector("#btn-logar")
const menu = document.querySelector("#menu")
const form = document.querySelector("#form-login")

//eventos
btnMenu.addEventListener("click", (e) => {
    e.preventDefault()
    menu.classList
    .toggle("hide")
})

btnLogar.addEventListener("click", (e) => {
    e.preventDefault()
    form.classList
    .toggle("hide")
})
