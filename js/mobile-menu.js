$(document).ready(function() {

	$('.main-nav__menu-button').click(function() {
		$('.main-nav__list').toggleClass('main-nav__list--show')
	});

	$('.main-nav__item').click(function() {
		$('.main-nav__list').removeClass('main-nav__list--show')
	});

});