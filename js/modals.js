$(document).ready(function(){

	$('.header__first-button').click(function() {
		$('.modal-bg').css('opacity', '0.8').css('z-index', '100'),
		$('.modal-registration').css('top', '50%')
	});

	$('.slide__reg-button').click(function() {
		$('.modal-bg').css('opacity', '0.8').css('z-index', '100'),
		$('.modal-registration').css('top', '50%')
	});

	$('.main-nav__mobile-reg').click(function() {
		$('.modal-bg').css('opacity', '0.8').css('z-index', '100'),
		$('.modal-registration').css('top', '50%')
	});

	$('#menu-support').click(function() {
		$('.modal-bg').css('opacity', '0.8').css('z-index', '100'),
		$('.modal-contact').css('top', '50%')
	});

	$('.header__second-button').click(function() {
		$('.modal-bg').css('opacity', '0.8').css('z-index', '100'),
		$('.modal-enter').css('top', '50%')
	});

	$('.main-nav__mobile-enter').click(function() {
		$('.modal-bg').css('opacity', '0.8').css('z-index', '100'),
		$('.modal-enter').css('top', '50%')
	});

	$('.modal-registration__close').click(function() {
		$('.modal-bg').css('opacity', '0').css('z-index', '-1'),
		$('.modal-registration').css('top', '-1000px')
	});

	$('.modal-enter__close').click(function() {
		$('.modal-bg').css('opacity', '0').css('z-index', '-1'),
		$('.modal-enter').css('top', '-1000px')
	});

	$('.modal-contact__close').click(function() {
		$('.modal-bg').css('opacity', '0').css('z-index', '-1'),
		$('.modal-contact').css('top', '-1000px')
	});

	$('.modal-bg').click(function() {
		$('.modal-bg').css('opacity', '0').css('z-index', '-1'),
		$('.modal-registration').css('top', '-1000px'),
		$('.modal-enter').css('top', '-1000px'),
		$('.modal-contact').css('top', '-1000px')
	});

});