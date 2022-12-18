const menuToggle = document.querySelector('.menu-toggle input');
const firstSpan = document.querySelector('#firstSpan');
const secondSpan = document.querySelector('#secondSpan');
const nav = document.querySelector('nav ul');
const dropdown = document.querySelector('.dropdown');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
    firstSpan.classList.toggle('slide');
    secondSpan.classList.toggle('slide');
    dropdown.classList.toggle('slide');
});