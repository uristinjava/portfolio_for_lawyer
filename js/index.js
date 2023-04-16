document.addEventListener('DOMContentLoaded', () => {

    window.onscroll = () => {
        const header = document.querySelector('header');
        header.classList.toggle('bcg_color_header', window.scrollY > 1);

        const buttonDark = document.querySelector('.dark_mode');
        buttonDark.classList.toggle('bcg_color_header', window.scrollY > 1);

    }

    // появляется меню в мобильной версии

    const mobileMenu = document.querySelector('.nav_mobile');
    mobileMenu.addEventListener('click', function () {

        const mobileList = document.querySelector('.nav_list_mobile')
        mobileList.classList.toggle('active');

        const icon = document.querySelector('.bx');
        icon.classList.toggle('bx-menu');
        icon.classList.toggle('bx-x');

        const unscroll = document.querySelector('body');
        unscroll.classList.toggle('unscroll');

        const removIconAnimation = document.querySelector('.bx-phone-call');
        removIconAnimation.classList.toggle('bx-tada');

    })



})