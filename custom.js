let input = document.querySelector('input');

input.addEventListener('focus', () => {
    document.getElementById('searchbar').classList.add('boxShadow');
});

input.addEventListener('focusout', () => {
    document.getElementById('searchbar').classList.remove('boxShadow');
});