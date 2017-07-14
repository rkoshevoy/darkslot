$(document).ready(function() {
	var content = $('.content');
	$(content).viewportChecker({
		classToAdd: 'animated bounce',
		offset: 300
	});
});