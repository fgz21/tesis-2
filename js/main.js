const button = document.getElementById('menu');
const dropdown = document.querySelector('.origin-top-right');

button.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
});

