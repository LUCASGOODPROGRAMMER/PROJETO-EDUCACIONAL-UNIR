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
    }[]
});

const btnUser = document.querySelectorAll("#btn-admin");
const formLogin = document.querySelector("#form-login");

btnUser.forEach((btn) => {
    btn.addEventListener("click", () => {
        const isHidden = getComputedStyle(formLogin).display === 'none';
        formLogin.style.display = isHidden ? 'flex' : 'none';
    });
});

const btnLogin = document.querySelector("#btn-submit");
const options = document.querySelectorAll("#options-task, #btn-add");

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    options.forEach((option) => {
        const isHidden = getComputedStyle(option).display === "none";
        option.style.display = isHidden ? "flex" : "none";
    });
});


