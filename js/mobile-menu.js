$(document).ready(function() {

	$('.main-nav__menu-button').click(function() {
		$('.main-nav__list').toggleClass('main-nav__list--show')
	});

	$('.main-nav__item--hider').click(function() {
		$('.main-nav__list').removeClass('main-nav__list--show')
	});

	$('.main-nav__dropdown-item').click(function() {
		$('.main-nav__list').removeClass('main-nav__list--show')
	})

	$('.main-nav__item--first').click(function() {
		$('.main-nav__dropdown--first').toggleClass('hidden'),
		$('.main-nav__dropdown--second').addClass('hidden'),
		$('.main-nav__dropdown--fifth').addClass('hidden')
	});

	$('.main-nav__item--second').click(function() {
		$('.main-nav__dropdown--second').toggleClass('hidden'),
		$('.main-nav__dropdown--first').addClass('hidden'),
		$('.main-nav__dropdown--fifth').addClass('hidden')
	});

	$('.main-nav__item--fifth').click(function() {
		$('.main-nav__dropdown--fifth').toggleClass('hidden'),
		$('.main-nav__dropdown--second').addClass('hidden'),
		$('.main-nav__dropdown--first').addClass('hidden')
	});$(document).ready(function() {

	$('.fixed-bar__hider').click(function() {
		$('.fixed-bar').addClass('fixed-bar--collapsed'),
		$('.top-games').addClass('hidden')
	});

	$('.fixed-bar__shower').click(function() {
		$('.fixed-bar').removeClass('fixed-bar--collapsed')
	});

	$('.fixed-bar__top-games-button').click(function() {
		$('.top-games').toggleClass('hidden')
	})

	// крестик поля поиска

	$('.main-nav__search-field').focus(function() {
		$('.main-nav__search-close').css('display', 'block')
	});

	$('.main-nav__search-close').click(function() {
		$('.main-nav__search-close').css('display', 'none'),
		$('.search__filed').focusout()
	});

	$('.main-nav__search-field').focusout(function() {
		$('.main-nav__search-close').css('display', 'none')
	});
});
});