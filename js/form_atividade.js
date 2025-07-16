// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {

    // Inicializa eventos da navbar (header dinâmico)
    if (window.initNavbarEvents) {
        window.initNavbarEvents();
    }

    // Seleciona o botão de upload e o input de arquivo
    const btnUpload = document.querySelector('.upload');
    const inputFile = document.querySelector('.capa-img');

    // Evento para abrir o seletor de arquivos ao clicar no botão de upload
    if (btnUpload && inputFile) {
        btnUpload.addEventListener('click', function(e) {
            e.preventDefault(); // Evita o submit do formulário
            inputFile.click();  // Dispara o clique no input file
        });

        // Evento para exibir a imagem enviada como preview
        inputFile.addEventListener('change', function() {
            const file = inputFile.files[0];
            if (file) {
                // Verifica se já existe um preview, senão cria um novo
                let imgPreview = document.querySelector('.img-preview');
                if (!imgPreview) {
                    imgPreview = document.createElement('img');
                    imgPreview.className = 'img-preview';
                    imgPreview.style.maxWidth = '100%';
                    imgPreview.style.marginTop = '10px';
                    // Insere a imagem logo após o input file
                    inputFile.parentNode.insertBefore(imgPreview, inputFile.nextSibling);
                }
                // Define o src da imagem preview para o arquivo selecionado
                imgPreview.src = URL.createObjectURL(file);
            }
        });
    }

    // Seleciona todos os formulários do quiz
    const forms = document.querySelectorAll('.container-template');
    // Se houver pelo menos dois formulários, ativa a transição entre eles
    if (forms.length >= 2) {
        // Evento para o submit do primeiro formulário
        forms[0].addEventListener('submit', function(e) {
            e.preventDefault(); // Evita o envio do formulário
            // Adiciona fade-out ao formulário atual
            forms[0].classList.add('fade-out');
            // Remove fade-in caso exista
            forms[0].classList.remove('fade-in');
            // Após a transição, oculta o formulário atual e exibe o próximo com fade-in
            setTimeout(() => {
                forms[0].classList.remove('visible', 'fade-out');
                forms[1].classList.add('visible', 'fade-in');
                // Remove fade-in do próximo formulário após a transição
                setTimeout(() => {
                    forms[1].classList.remove('fade-in');
                }, 500); // tempo igual ao da transição CSS
            }, 500); // tempo igual ao da transição CSS
        });
    }
});