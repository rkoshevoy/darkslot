$(document).ready(function () {
	$('.switchers__switcher').click(function () {
		$('.switchers__switcher').removeClass('switchers__switcher--active');
		$(this).addClass('switchers__switcher--active');
		$('.tab').removeClass('tab--active')
		$(".tab:eq(" + $(this).index() + ")").addClass('tab--active')
	});
});
