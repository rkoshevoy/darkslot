$(document).ready(function() {
	var content = $('.content'),
	slider = $('.slider--about');

	$(content).viewportChecker({
		classToAdd: 'animated bounce',
		offset: 300
	});

	$(slider).viewportChecker({
		classToAdd: 'animated tada',
		offset: 300
	});
});