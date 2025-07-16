// Função para inicializar os eventos da navbar e do menu dinâmico
function initNavbarEvents() {
    // Seletores dos elementos do header
    const btnLogar = document.querySelector("#btn-logar");
    const btnLogin = document.querySelector("#btn-login");
    const form = document.querySelector("#form-login");
    const btnMenu = document.querySelector("#btn-menu");
    const menu = document.querySelector("#menu");

    // Função para alternar display flex do form-login
    function toggleFormLogin() {
        if (form) {
            if (form.style.display === "flex") {
                form.style.display = "none";
            } else {
                form.style.display = "flex";
            }
        }
    }

    // Função para alternar display flex do menu
    function toggleMenu() {
        if (menu) {
            if (menu.style.display === "flex") {
                menu.style.display = "none";
            } else {
                menu.style.display = "flex";
            }
        }
    }

    // Evento para btn-logar
    if (btnLogar) {
        btnLogar.addEventListener('click', toggleFormLogin);
    }
    // Evento para btn-login (caso exista)
    if (btnLogin) {
        btnLogin.addEventListener('click', toggleFormLogin);
    }
    // Evento para btn-menu
    if (btnMenu) {
        btnMenu.addEventListener('click', toggleMenu);
    }

    // Evento para submit-login revelar o gerenciador
    const submitLogin = document.querySelector('#submit-login');
    if (submitLogin) {
        submitLogin.addEventListener('click', function() {
            const gerenciadorOption = document.querySelector('#menu .options.hide a[href="gerenciador.html"]')?.parentElement;
            if (gerenciadorOption) {
                gerenciadorOption.classList.remove('hide');
                alert('Opção GERENCIADOR desbloqueada!');
            }
        });
    }
}

// Torna a função disponível globalmente para ser chamada após o fetch do header
window.initNavbarEvents = initNavbarEvents;
