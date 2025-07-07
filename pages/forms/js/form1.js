const insertFile = document.querySelector("#file");
const btnInsert = document.querySelector("#upload");
const previewImage = document.getElementById("preview");

btnInsert.addEventListener("click", () => {
  insertFile.click();
});

insertFile.addEventListener("change", () => {
  const file = insertFile.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewImage.src = e.target.result;
      previewImage.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    previewImage.style.display = "none";
    previewImage.src = "";
  }
});
