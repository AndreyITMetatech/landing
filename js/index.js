let burgerMenu = document.querySelector('.header__burger-btn');
let burgerList = document.querySelector('.header');

burgerMenu.addEventListener('click', mobileBurger);

function mobileBurger() {
    burgerList.classList.toggle('open');
}