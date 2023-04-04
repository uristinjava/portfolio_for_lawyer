document.addEventListener('DOMContentLoaded', () => {

    window.onscroll = () => {
        const header = document.querySelector('.header__conteiner');
        header.classList.toggle('bcg_color_header', window.scrollY > 1);

        const buttonDark = document.querySelector('.dark_mode');
        buttonDark.classList.toggle('bcg_color_header', window.scrollY > 1);
    }
})