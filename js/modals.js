$(document).ready(function () {
	$('.header__first-button, .main-nav__mobile-reg, .slide__reg-button, .registration__reg-button, .statistics__button, .greeting-bonus__button, #partners-button').click(function () {
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
		$('.modal').css('top', '-1000px');
		$('.modal--new-password').css('top', '50%')
	});

	$('#recovery-unlock').click(function () {
		$('.modal').css('top', '-1000px');
		$('.modal--unlock').css('top', '50%')
	});

	$('#recovery-confirm').click(function () {
		$('.modal').css('top', '-1000px');
		$('.modal--confirm').css('top', '50%')
	});

	$('#menu-support, .games__item--support, .modal-form__support').click(function () {
		$('.modal-bg').css({'opacity': '0.8', 'z-index': '100'});
		$('.modal--contact').css('top', '50%');
		$('.modal--recovery').css('top', '-1000px')
	});

	$('.modal-close').click(function () {
		$('.modal-bg').css({'opacity': '0', 'z-index': '-1'});
		$('.level-modal-bg').css({'opacity': '0', 'z-index': '-1'});
		$('.modal, .level-modal, .modal-about').css('top', '-1000px');
	});

	$('.modal-form__forgot-pass').click(function () {
		$('.modal--enter').css('top', '-1000px')
	});

	$('.modal-bg').click(function () {
		$('.modal-bg').css({'opacity': '0', 'z-index': '-1'});
		$('.modal, .modal-about').css('top', '-1000px')
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

	$('#button4').click(function() {
		$('.modal--activate').css({'top': '50%'});
		$('.level-modal-bg').css({'opacity': '0.8', 'z-index': '100'});
	});

	$('.level-modal-bg').click(function () {
		$('.level-modal-bg').css({'opacity': '0', 'z-index': '-1'});
		$('.modal, .level-modal').css('top', '-1000px')
	});

	$('.main-nav__dropdown-rules, .games__item--rules, #bonus-rules-button, #day-slot-button, #free-spins-button, #tournament-button, #slider-button-rules').click(function(event) {
		event.preventDefault();
		$('.modal-about--rules').css({'top': '50%'});
		$('.modal-bg').css({'opacity': '0.8', 'z-index': '100'});
	});

	$('.main-nav__dropdown-policy, .games__item--policy').click(function(event) {
		event.preventDefault();
		$('.modal-about--policy').css({'top': '50%'});
		$('.modal-bg').css({'opacity': '0.8', 'z-index': '100'});
	});
});