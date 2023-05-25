const button_Menu = document.getElementById('buttonMenu');

function mostrarMenu() {
    const nav = document.querySelector("#menu>div");
    nav.classList.toggle('active');
}

button_Menu.addEventListener('click', mostrarMenu);

const button_Footer = document.getElementById('buttonFooter');

function mostrarFooter() {
    const nav = document.querySelector("#footer>div");
    nav.classList.toggle('active');
}

button_Footer.addEventListener('click', mostrarFooter);