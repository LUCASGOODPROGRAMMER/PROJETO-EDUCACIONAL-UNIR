
const btnView = document.querySelectorAll(".btn-view")
const btnTrash = document.querySelectorAll(".btn-trash")
const btnConfig = document.querySelectorAll(".btn-edit")

const btnAdd = document.querySelector("#btn-new");

btnAdd.addEventListener("click", () => {
window.location.href = "forms/html/form1.html"
});

const gridBox = document.querySelector("#grid-box");

gridBox.addEventListener("click", (event) => {
  const btnView = event.target.closest(".btn-view");
  if (btnView) {
    const boxGame = btnView.closest(".box-game");
    if (boxGame) {
      boxGame.classList.toggle("dimmed");
    }
  }
});



