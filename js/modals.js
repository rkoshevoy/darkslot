$(document).ready(function () {
	$('.header__first-button, .main-nav__mobile-reg, .slide__reg-button, .registration__reg-button, .statistics__button').click(function () {
		$('.modal-bg').css({'opacity': '0.8', 'z-index': '100'});
		$('.modal-registration').css('top', '50%')
	});

	$('.header__second-button, .main-nav__mobile-enter').click(function () {
		$('.modal-bg').css({'opacity': '0.8', 'z-index': '100'});
		$('.modal-enter').css('top', '50%')
	});

	$('#menu-support, .games__item--support').click(function () {
		$('.modal-bg').css({'opacity': '0.8', 'z-index': '100'});
		$('.modal-contact').css('top', '50%')
	});

	$('.modal-registration__close, .modal-enter__close, .modal-contact__close').click(function () {
		$('.modal-bg').css({'opacity': '0', 'z-index': '-1'});
		$('.modal-registration').css('top', '-1000px');
		$('.modal-enter').css('top', '-1000px');
		$('.modal-contact').css('top', '-1000px')
	});

	$('.modal-bg').click(function () {
		$('.modal-bg').css({'opacity': '0', 'z-index': '-1'});
		$('.modal-registration, .modal-enter, .modal-contact').css('top', '-1000px')
	});
});