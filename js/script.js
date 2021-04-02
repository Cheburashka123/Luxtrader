$(document).ready(function () {
    $('.header__burger, .link').click(function (event) {
        $('.header__burger,.nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


