const btnMenu = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");

btnMenu.addEventListener("click", (e) => {
    e.preventDefault();

    const isHidden = getComputedStyle(menu).display === 'none';

    if (isHidden) {
        menu.style.display = 'block';
        menu.classList.remove("fade-out");
        menu.classList.add("fade-in");

        setTimeout(() => {
            menu.classList.remove("fade-in");
        }, 500);

    } else {
        menu.classList.remove("fade-in");
        menu.classList.add("fade-out");

        setTimeout(() => {
            menu.classList.remove("fade-out");
            menu.style.display = 'none';
        }, 500);
    }
});

const btnUser = document.querySelectorAll("#btn-admin, #config");
const formLogin = document.querySelector("#form-login");

btnUser.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (formLogin.style.display === 'none' || formLogin.style.display === '') {
            formLogin.style.display = 'flex';
        } else {
            formLogin.style.display = 'none';
        }
    });
});
