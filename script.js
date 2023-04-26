(function () {
    const header = document.querySelector('.ast-main-header-wrap'); // Enter menu class or ID
    const adminBar = document.querySelector('#wpadminbar'); // Add upper bar class or ID

    let scrollposition = window.scrollY;

    function menubar() {
        scrollposition = window.scrollY;

        if (scrollposition > 10) {
            header.classList.add('small-header');
            if (adminBar) header.style.top = `${adminBar.style.height}px`;
        } else {
            header.classList.remove('small-header');
            if (adminBar) header.style.top = '0';
        }
    }

    window.addEventListener('scroll', function () {
        menubar();
    });

    menubar();
})();
