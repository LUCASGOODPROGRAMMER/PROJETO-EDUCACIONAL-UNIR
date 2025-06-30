const btnMenu = document.querySelector("#btn-menu")
const menu = document.querySelector("#menu")

btnMenu.addEventListener("click", (e) => {
    e.preventDefault()

    if(menu.style.display === 'none'){
         menu.style.display = 'flex'
         return;
    }
    menu.classList.add("fade-out")
    setTimeout(() => {
        menu.classList.remove("fade-out")
        menu.style.display = 'none'
    }, 500)
    
})

