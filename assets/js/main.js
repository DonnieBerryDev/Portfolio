$(document).scroll(function () {
    $('nav').toggleClass('navScrolled', $(this).scrollTop() > 1);
    $('nav').toggleClass('navScrolled', $(this).scrollTop() > 1);
});
$(document).ready(function () {
    $('#hamburger_icon').on('click', function () {
        $('.hamburger').toggleClass('activeMenu');
    })
})




$(document).ready(function () {
    $('#hamburger_icon').click(function () {
        $(this).toggleClass('open');
    });
});
