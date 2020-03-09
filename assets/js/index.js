let navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    addShadowToNavbar()
});

/**
 * Anime la barre de navigation en lui rajoutant les ombres lorsque l'utilisateur défile.
 */
function addShadowToNavbar() {
    let y = this.window.scrollY;
    if (y === 0) {
        navbar.classList.remove('shadow');
    } else {
        navbar.classList.add('shadow');
    }
}

document.getElementById('menu-icon').addEventListener('click', function () {
    document.getElementById('menu-icon').classList.toggle('change');
    navbar.classList.toggle('change');

});
var reviews = new Swiper('.reviews-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.reviews-swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
});

let swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


$('.flop__authors__pictures img').click(function() {
    $('.flop__authors__pictures img').removeClass('active');
    $(this).addClass('active');
    $('.flop__authors__details').removeClass('active');
    $('#' + $(this).attr('alt')).addClass('active');
});