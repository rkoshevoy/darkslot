$(document).ready(function () {
	$('.header__first-button, .main-nav__mobile-reg, .slide__reg-button, .registration__reg-button, .statistics__button, .greeting-bonus__button').click(function () {
		$('.modal-bg').css({'opacity': '0.8', 'z-index': '100'});
		$('.modal--registration').css('top', '50%')
	});

	$('.header__second-button, .main-nav__mobile-enter').click(function () {
		$('.modal-bg').css({'opacity': '0.8', 'z-index': '100'});
		$('.modal--enter').css('top', '50%')
	});

	$('.modal-form__forgot-pass').click(function () {
		$('.modal-bg').css({'opacity': '0.8', 'z-index': '100'});
		$('.modal--recovery').css('top', '50%')
	});

	$('#forgot-button').click(function (event) {
		event.preventDefault();
		$('.modal--recovery').css('top', '-1000px');
		$('.modal--new-password').css('top', '50%')
	});

	$('#menu-support, .games__item--support, .modal-form__support').click(function () {
		$('.modal-bg').css({'opacity': '0.8', 'z-index': '100'});
		$('.modal--contact').css('top', '50%');
		$('.modal--recovery').css('top', '-1000px')
	});

	$('.modal__close').click(function () {
		$('.modal-bg').css({'opacity': '0', 'z-index': '-1'});
		$('.modal').css('top', '-1000px')
	});

	$('.modal-form__forgot-pass').click(function () {
		$('.modal--enter').css('top', '-1000px')
	});

	$('.modal-bg').click(function () {
		$('.modal-bg').css({'opacity': '0', 'z-index': '-1'});
		$('.modal--registration, .modal--enter, .modal--contact, .modal--recovery, .modal--new-password').css('top', '-1000px')
	});

	$('#button1').click(function() {
		$('.level-modal--second').css({'top': '50%'});
		$('.level-modal-bg').css({'opacity': '0.8', 'z-index': '100'});
	});

	$('#button2').click(function() {
		$('.level-modal--third').css({'top': '50%'});
		$('.level-modal-bg').css({'opacity': '0.8', 'z-index': '100'});
	});

	$('#button3').click(function() {
		$('.level-modal--fourth').css({'top': '50%'});
		$('.level-modal-bg').css({'opacity': '0.8', 'z-index': '100'});
	});

	$('.level-modal__close').click(function() {
		$('.level-modal').css({'top': '-1000px'});
		$('.level-modal-bg').css({'opacity': '0', 'z-index': '-1'});
	});

	$('.level-modal-bg').click(function () {
		$('.level-modal-bg').css({'opacity': '0', 'z-index': '-1'});
		$('.level-modal').css('top', '-1000px')
	});
});