window.addEventListener('DOMContentLoaded', () => {

    const parent = document.querySelector('html'),
        themeToggle = document.querySelector('#themeToggle');

    function getThemeFromLocalStorage(parentSelector) {
        if (localStorage.getItem('theme')) {
            parentSelector.classList.add(localStorage.getItem('theme'));
        }
    }

    getThemeFromLocalStorage(parent);

    themeToggle.addEventListener('click', () => {
        if (parent.classList.contains('dark')) {
            parent.classList.remove('dark');
            localStorage.clear();
            themeToggle.classList.replace('bxs-sun', 'bxs-moon');
        } else {
            parent.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.classList.replace('bxs-moon', 'bxs-sun');
        }
        console.log('hello');
    });

});