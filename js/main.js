// efecto del button iniciar sesion

const button = document.getElementById('menu');
const dropdown = document.querySelector('.origin-top-right');

button.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
});

// efecto del button del registro

const button2 = document.getElementById('menu2');
const dropdown2 = document.querySelector('.origin-top-right2');

button2.addEventListener('click', () => {
    dropdown2.classList.toggle('hidden');
});


//efecto menu

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.flex-col');

menuToggle.addEventListener('click', function () {
    navbar.classList.toggle('hidden');
});
