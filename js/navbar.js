// Função para inicializar os eventos da navbar e do menu dinâmico
function initNavbarEvents() {
    // Seletores dos elementos do header
    const btnMenu = document.querySelector("#btn-menu");
    const btnLogar = document.querySelector("#btn-logar");
    const menu = document.querySelector("#menu");
    const form = document.querySelector("#form-login");

    // Garante que todas as divs com id menu estejam ocultas inicialmente
    document.querySelectorAll('div#menu:not(.hide)').forEach(div => {
        div.classList.add('hide');
    });

    // Evento para desbloquear opções de admin após login
    const submitLogin = document.querySelector('#submit-login');
    if (submitLogin) {
        submitLogin.addEventListener('click', function() {
            const optionsHideDiv = document.querySelector('#menu .options.hide');
            if (optionsHideDiv) {
                optionsHideDiv.classList.toggle('hide');
                alert('Opções de administrador desbloqueadas!');
            }
        });
    }
}

// Torna a função disponível globalmente para ser chamada após o fetch do header
window.initNavbarEvents = initNavbarEvents;
