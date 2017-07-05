$(document).ready(function() {

	$('.slide-reg__password').focus(function() {
		$('.slide-reg__password').css('margin-bottom', '76px'),
		$('.slide-reg__password-confirm').css('top', '230px').css('z-index', '1').css('opacity', '1')
	});

	// if($('.slide-reg__password').val() == '') {

	// 	$('.slide-reg__password').focusout(function() {
	// 		$('.slide-reg__password').css('margin-bottom', '18px'),
	// 		$('.slide-reg__password-confirm').css('top', '172px').css('z-index', '-1').css('opacity', '0')
	// 	});
	// };

});