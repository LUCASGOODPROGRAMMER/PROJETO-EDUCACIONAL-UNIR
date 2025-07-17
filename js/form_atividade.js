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
                    imgPreview.style.maxWidth = '400px';
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
            perguntasForm.innerHTML = '';
            const total = parseInt(numPerguntasInput.value, 10);
            for (let i = 1; i <= total; i++) {
                const section = document.createElement('section');
                section.className = 'perguntas';

                const h2 = document.createElement('h2');
                h2.textContent = `PERGUNTA ${i.toString().padStart(2, '0')}`;
                section.appendChild(h2);

                const perguntaRow = document.createElement('div');
                perguntaRow.style.display = 'flex';
                perguntaRow.style.alignItems = 'center';
                perguntaRow.style.gap = '10px';

                // Input da pergunta
                const perguntaInput = document.createElement('input');
                perguntaInput.className = 'pergunta';
                perguntaInput.type = 'text';
                perguntaInput.placeholder = 'Qual a sua pergunta?';
                perguntaInput.required = true;
                perguntaRow.appendChild(perguntaInput);

                // Botão quadrado para imagem
                const imgBtn = document.createElement('button');
                imgBtn.type = 'button';
                imgBtn.className = 'btn-img-pergunta';
                imgBtn.textContent = '1:1';
                perguntaRow.appendChild(imgBtn);

                // Input de imagem oculto
                const imgInput = document.createElement('input');
                imgInput.type = 'file';
                imgInput.accept = 'image/*';
                imgInput.style.display = 'none';
                imgInput.className = 'img-pergunta';
                perguntaRow.appendChild(imgInput);

                // Preview da imagem
                const imgPreview = document.createElement('img');
                imgPreview.className = 'img-preview-pergunta';
                imgPreview.style.display = 'none';
                imgPreview.style.marginLeft = '10px';
                perguntaRow.appendChild(imgPreview);

                // Evento para abrir seletor de imagem
                imgBtn.addEventListener('click', function() {
                    imgInput.click();
                });

                // Evento para mostrar preview e esconder o botão
                imgInput.addEventListener('change', function() {
                    const file = imgInput.files[0];
                    if (file) {
                        imgPreview.src = URL.createObjectURL(file);
                        imgPreview.style.display = 'block';
                        imgBtn.style.display = 'none'; // Esconde o botão quadrado
                    } else {
                        imgPreview.style.display = 'none';
                        imgBtn.style.display = 'flex'; // Mostra o botão quadrado novamente
                    }
                });

                // Adiciona a linha ao section
                section.appendChild(perguntaRow);

                const p = document.createElement('p');
                p.textContent = 'NÚMERO DE RESPOSTAS:';
                section.appendChild(p);

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

                // Container para respostas e seleção da correta
                const respostasContainer = document.createElement('div');
                respostasContainer.className = 'respostas-container';

                // Adiciona inputs de resposta e radios para marcar a correta
                respostasGroup.addEventListener('change', function(e) {
                    // Remove respostas antigas
                    respostasContainer.innerHTML = '';
                    if (e.target && e.target.type === 'radio') {
                        const num = parseInt(e.target.value, 10);

                        // Título para seleção da resposta correta
                        const correctTitle = document.createElement('p');
                        correctTitle.textContent = 'Selecione a resposta correta:';
                        respostasContainer.appendChild(correctTitle);

                        for (let r = 1; r <= num; r++) {
                            const respostaDiv = document.createElement('div');
                            respostaDiv.className = 'resposta-item';

                            // Input de resposta
                            const input = document.createElement('input');
                            input.className = 'resposta';
                            input.type = 'text';
                            input.placeholder = `Resposta ${r}`;
                            input.required = true;

                            // Radio para resposta correta
                            const radioCorreta = document.createElement('input');
                            radioCorreta.type = 'radio';
                            radioCorreta.name = `correta-${i}`;
                            radioCorreta.value = r;
                            radioCorreta.className = 'radio-correta';

                            respostaDiv.appendChild(input);
                            respostaDiv.appendChild(radioCorreta);

                            respostasContainer.appendChild(respostaDiv);
                        }
                    }
                });

                respostasContainer.addEventListener('change', function(ev) {
                    if (ev.target.classList.contains('radio-correta')) {
                        // Remove todas as classes
                        respostasContainer.querySelectorAll('.resposta-item').forEach(item => {
                            item.classList.remove('correta');
                            item.classList.add('errada');
                        });
                        // Adiciona classe correta apenas ao selecionado
                        ev.target.closest('.resposta-item').classList.add('correta');
                        ev.target.closest('.resposta-item').classList.remove('errada');
                    }
                });

                section.appendChild(respostasContainer);

                perguntasForm.appendChild(section);

                if (i < total) {
                    const hr = document.createElement('hr');
                    perguntasForm.appendChild(hr);
                }
            }
        });
    }
});