$(document).ready(function() {

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

	$('.search__field').focus(function() {
		$('.search__close').css('display', 'block')
	});

	$('.search__close').click(function() {
		$('.search__close').css('display', 'none'),
		$('.search__filed').focusout()
	});

	$('.search__field').focusout(function() {
		$('.search__close').css('display', 'none')
	});
});