//eventos
document.addEventListener('DOMContentLoaded', function() {

    const btnUpload = document.querySelector('.upload');
    const inputFile = document.querySelector('.capa-img');

    if (btnUpload && inputFile) {
        btnUpload.addEventListener('click', function(e) {
            e.preventDefault();
            inputFile.click();
        });

        inputFile.addEventListener('change', function() {
            const file = inputFile.files[0];
            if (file) {
                let imgPreview = document.querySelector('.img-preview');
                if (!imgPreview) {
                    imgPreview = document.createElement('img');
                    imgPreview.className = 'img-preview';
                    imgPreview.style.maxWidth = '100%';
                    imgPreview.style.marginTop = '10px';
                    inputFile.parentNode.insertBefore(imgPreview, inputFile.nextSibling);
                }
                imgPreview.src = URL.createObjectURL(file);
            }
        });
    }
});