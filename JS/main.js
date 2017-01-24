$('.hamburger-icon').on('click', function(){
    $('.menu-wrap').toggleClass('menu-show');
    $('.menu2').toggleClass('menu2-show');
    $(this).toggleClass('active');
});
