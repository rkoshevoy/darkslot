$(document).ready(function() {

	$('.main-nav__menu-button').click(function() {
		$('.main-nav__list').toggleClass('main-nav__list--show')
	});

	$('.main-nav__item').click(function() {
		$('.main-nav__list').removeClass('main-nav__list--show')
	});

	$('.main-nav__item--first').click(function() {
		$('.main-nav__dropdown--first').toggleClass('hidden')
	});

	$('.main-nav__item--second').click(function() {
		$('.main-nav__dropdown--second').toggleClass('hidden')
	});

	$('.main-nav__item--fifth').click(function() {
		$('.main-nav__dropdown--fifth').toggleClass('hidden')
	});

});