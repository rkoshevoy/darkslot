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
});