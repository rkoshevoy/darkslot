$(document).ready(function() {

	$('.main-nav__menu-button').click(function() {
		$('.main-nav__list').toggleClass('main-nav__list--show');
		$('.main-nav__item').removeClass('main-nav__item--active');
		$('.main-nav__item').find('.main-nav__dropdown').removeClass('main-nav__item--active')
	});

	$('.main-nav__item--hider, .main-nav__dropdown-item').click(function() {
		$('.main-nav__list').removeClass('main-nav__list--show')
	});

	$('.main-nav__item').click(function () {
		$(this).find('.main-nav__dropdown').toggleClass('main-nav__item--active');
		$(this).nextAll().find('.main-nav__dropdown').removeClass('main-nav__item--active');
		$(this).prevAll().find('.main-nav__dropdown').removeClass('main-nav__item--active');
	});

	$('#enter-button').click(function(event) {
		event.preventDefault();
		$('.header__buttons').css('display', 'none');
		$('.header__authorized').css('display', 'flex');
		$('.modal').css('top', '-1000px');		
		$('.modal-bg').css({'opacity': '0', 'z-index': '-1'});
	});

	// крестик меню

	$('.main-nav__menu-button, #menu-support').click(function () {
		$('#first-line').toggleClass('main-nav__menu-line--first');
		$('#second-line').toggleClass('main-nav__menu-line--hidden');
		$('#third-line').toggleClass('main-nav__menu-line--third')
	});

	//fixed bar

	$('.fixed-bar__hider').click(function () {
		$('.fixed-bar').addClass('fixed-bar--collapsed');
		$('.top-games').addClass('hidden')
	});

	$('.fixed-bar__shower').click(function () {
		$('.fixed-bar').removeClass('fixed-bar--collapsed')
	});

	$('.fixed-bar__top-games-button').click(function () {
		$('.top-games').toggleClass('hidden')
	})

	// крестик поля поиска

	$('.main-nav__search-field').focus(function () {
		$('.main-nav__search-close').css('display', 'block')
	});

	$('.main-nav__search-close').click(function () {
		$('.main-nav__search-close').css('display', 'none');
		$('.search__filed').focusout()
	});

	$('.main-nav__search-field').focusout(function () {
		$('.main-nav__search-close').css('display', 'none')
	});

});