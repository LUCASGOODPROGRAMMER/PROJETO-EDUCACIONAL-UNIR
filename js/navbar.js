//seletores
const btnMenu = document.querySelector("#btn-menu")
const btnLogar = document.querySelector("#btn-logar")
const menu = document.querySelector("#menu")
const form = document.querySelector("#form-login")

// Adiciona a classe 'hide' a todas divs com id 'menu' que não possuem a classe 'hide'
document.querySelectorAll('div#menu:not(.hide)').forEach(div => {
  div.classList.add('hide');
});

//eventos
btnMenu.addEventListener("click", (e) => {
    e.preventDefault()
    menu.classList
    .toggle("hide")
})

document.querySelector('#submit-login').addEventListener('click', function() {
    const optionsHideDiv = document.querySelector('#menu .options.hide');
    if (optionsHideDiv) {
        optionsHideDiv.classList.toggle('hide');
    }
});

btnLogar.addEventListener("click", (e) => {
    e.preventDefault()
    form.classList
    .toggle("hide")
})
