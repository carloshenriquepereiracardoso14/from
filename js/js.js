document.addEventListener('DOMContentLoaded', () => {
    const sinopse = document.querySelector('.sinopse');
    const btnOpen = document.querySelector('.btn');
    const btnClose = document.querySelector('.btnclose');

    if (btnOpen && btnClose && sinopse) {
        btnOpen.addEventListener('click', () => {
            sinopse.classList.add('active');
        });

        btnClose.addEventListener('click', () => {
            sinopse.classList.remove('active');
        });
    }
});
