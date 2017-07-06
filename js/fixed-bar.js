$(document).ready(function () {
	$('.fixed-bar__hider').click(function () {
		$('.fixed-bar').addClass('fixed-bar--collapsed');
		$('.top-games').addClass('hidden')
	});

	$('.fixed-bar__shower').click(function () {
		$('.fixed-bar').removeClass('fixed-bar--collapsed')
	});

	$('.fixed-bar__top-games-button').click(function () {
		$('.top-games').removeClass('hidden')
	});

	$('.top-games__close').click(function () {
		$('.top-games').addClass('hidden')
	});

	// крестик поля поиска

	$('.search__field').focus(function () {
		$('.search__close').css({'opacity': '1', 'z-index': '20'})
	});

	$('.search__close').click(function () {
		$('.search__close').css({'opacity': '0', 'z-index': '-1'});
		$('.search__field').focusout()
	});

	$('.search__field').focusout(function () {
		$('.search__close').css({'opacity': '0', 'z-index': '-1'})
	});
});