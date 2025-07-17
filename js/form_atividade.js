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

    // Seleciona o input de número de perguntas e o formulário de perguntas
    const numPerguntasInput = document.querySelector('.num-perguntas');
    const perguntasForm = document.querySelector('.container-template:nth-of-type(3)');

    if (numPerguntasInput && perguntasForm) {
        numPerguntasInput.addEventListener('change', function() {
            // Limpa perguntas antigas
            perguntasForm.innerHTML = '';

            // Gera perguntas conforme o valor
            const total = parseInt(numPerguntasInput.value, 10);
            for (let i = 1; i <= total; i++) {
                // Cria section.perguntas
                const section = document.createElement('section');
                section.className = 'perguntas';

                // Título da pergunta
                const h2 = document.createElement('h2');
                h2.textContent = `PERGUNTA ${i.toString().padStart(2, '0')}`;
                section.appendChild(h2);

                // Input da pergunta
                const perguntaInput = document.createElement('input');
                perguntaInput.className = 'pergunta';
                perguntaInput.type = 'text';
                perguntaInput.placeholder = 'Qual a sua pergunta?';
                perguntaInput.required = true;
                section.appendChild(perguntaInput);

                // Texto número de respostas
                const p = document.createElement('p');
                p.textContent = 'NÚMERO DE RESPOSTAS:';
                section.appendChild(p);

                // Grupo de radios
                const respostasGroup = document.createElement('div');
                respostasGroup.className = 'num-respostas-group';
                for (let v = 1; v <= 4; v++) {
                    const label = document.createElement('label');
                    const radio = document.createElement('input');
                    radio.type = 'radio';
                    radio.name = `num-respostas-${i}`;
                    radio.value = v;
                    label.appendChild(radio);
                    label.appendChild(document.createTextNode(` ${v}`));
                    respostasGroup.appendChild(label);
                }
                section.appendChild(respostasGroup);

                // Adiciona evento para criar inputs de resposta para cada pergunta
                respostasGroup.addEventListener('change', function(e) {
                    // Remove respostas antigas
                    section.querySelectorAll('.resposta').forEach(input => input.remove());
                    // Adiciona novas respostas
                    if (e.target && e.target.type === 'radio') {
                        const num = parseInt(e.target.value, 10);
                        for (let r = 1; r <= num; r++) {
                            const input = document.createElement('input');
                            input.className = 'resposta';
                            input.type = 'text';
                            input.placeholder = `Resposta ${r}`;
                            input.required = true;
                            section.appendChild(input);
                        }
                    }
                });

                // Adiciona section ao formulário
                perguntasForm.appendChild(section);

                // Adiciona linha separadora, exceto na última
                if (i < total) {
                    const hr = document.createElement('hr');
                    perguntasForm.appendChild(hr);
                }
            }
        });
    }
});