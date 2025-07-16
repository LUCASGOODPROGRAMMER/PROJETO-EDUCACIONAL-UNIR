function initNavbarEvents() {
    const btnMenu = document.querySelector("#btn-menu");
    const btnLogar = document.querySelector("#btn-logar");
    const menu = document.querySelector("#menu");
    const form = document.querySelector("#form-login");

    // Adiciona a classe 'hide' a todas divs com id 'menu' que não possuem a classe 'hide'
    document.querySelectorAll('div#menu:not(.hide)').forEach(div => {
        div.classList.add('hide');
    });

    if (btnMenu && menu) {
        btnMenu.addEventListener("click", (e) => {
            e.preventDefault();
            menu.classList.toggle("hide");
        });
    }

    if (btnLogar && form) {
        btnLogar.addEventListener("click", (e) => {
            e.preventDefault();
            form.classList.toggle("hide");
        });
    }

    const submitLogin = document.querySelector('#submit-login');
    if (submitLogin) {
        submitLogin.addEventListener('click', function() {
            const optionsHideDiv = document.querySelector('#menu .options.hide');
            if (optionsHideDiv) {
                optionsHideDiv.classList.toggle('hide');
            }
        });
    }
}

// Chame essa função após o fetch do header
window.initNavbarEvents = initNavbarEvents;
