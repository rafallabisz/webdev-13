//hamburger

const burger = document.querySelector('.nav__hamburger');
const menu = document.querySelector('.menu');
const li = document.querySelectorAll('.menu__li a');

const toogleClass = () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
}

burger.addEventListener('click', toogleClass);
li.forEach(el => {
    el.addEventListener('click', toogleClass);
})

//scroll menu

const menuEl = document.querySelectorAll('.menu__li a[data-section]');
const footEl = document.querySelectorAll('.footer_nav-ul--li a[data-section]');
const logo = document.querySelector('.nav__logo img');

function scrollTo(e) {
    e.preventDefault();
    const nameSection = `[data-section=${this.dataset.section}-sect]`;

    if (this.dataset.section === 'logo') {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: 0
        })
    } else {

        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: document.querySelector(nameSection).getBoundingClientRect().top - 70 + window.scrollY
        })
    }
}

menuEl.forEach(el => {
    el.addEventListener('click', scrollTo);
})

footEl.forEach(el => {
    el.addEventListener('click', scrollTo);
})

logo.addEventListener('click', scrollTo);

//transparent menu

const nav = document.querySelector('.nav');
window.addEventListener('scroll', function () {
    nav.classList.toggle('transp', window.scrollY > 0);
})
