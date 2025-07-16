document.addEventListener('DOMContentLoaded', function() {
    const btnUpload = document.querySelector('.upload');
    const inputFile = document.querySelector('.capa-img');

    if (btnUpload && inputFile) {
        btnUpload.addEventListener('click', function(e) {
            e.preventDefault();
            inputFile.click();
        });
    }
});