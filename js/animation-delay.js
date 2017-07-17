$(document).ready(function() {
	var content = $('.content'),
	anim = $('.anim');

	$(content).viewportChecker({
		classToAdd: 'animated bounce',
		offset: 300
	});

	$(anim).viewportChecker({
		classToAdd: 'animated tada',
		offset: 300
	});
});