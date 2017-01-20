console.log('Js is live!');

$('.hamburger-icon').on('click', function(){
	console.log('Button works.');

    $('.menu-wrap').toggleClass('menu-show');
    $('.menu2').toggleClass('menu2-show');
    console.log('sidebar works');

    $(this).toggleClass('active');
});