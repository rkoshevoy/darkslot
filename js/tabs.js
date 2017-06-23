$(document).ready(function() {

	$('.switchers__switcher--first').click(function() {
		$('.switchers__switcher').removeClass('switchers__switcher--active'),
		$('.switchers__switcher--first').addClass('switchers__switcher--active'),
		$('.tab').removeClass('tab--active'),
		$('.tab--first').addClass('tab--active')
	});

	$('.switchers__switcher--second').click(function() {
		$('.switchers__switcher').removeClass('switchers__switcher--active'),
		$('.switchers__switcher--second').addClass('switchers__switcher--active'),
		$('.tab').removeClass('tab--active'),
		$('.tab--second').addClass('tab--active')
	});

	$('.switchers__switcher--third').click(function() {
		$('.switchers__switcher').removeClass('switchers__switcher--active'),
		$('.switchers__switcher--third').addClass('switchers__switcher--active'),
		$('.tab').removeClass('tab--active'),
		$('.tab--third').addClass('tab--active')
	});

	$('.switchers__switcher--fourth').click(function() {
		$('.switchers__switcher').removeClass('switchers__switcher--active'),
		$('.switchers__switcher--fourth').addClass('switchers__switcher--active'),
		$('.tab').removeClass('tab--active'),
		$('.tab--fourth').addClass('tab--active')
	});

	$('.switchers__switcher--fifth').click(function() {
		$('.switchers__switcher').removeClass('switchers__switcher--active'),
		$('.switchers__switcher--fifth').addClass('switchers__switcher--active'),
		$('.tab').removeClass('tab--active'),
		$('.tab--fifth').addClass('tab--active')
	});
});