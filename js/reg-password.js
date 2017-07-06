$(document).ready(function () {

	$('.registration-form-mini__password').focus(function () {
		$('.registration-form-mini__password').css('margin-bottom', '76px');
		$('.registration-form-mini__password-confirm'.css({'opacity': '1', 'z-index': '1', 'top': '250px'});
	});

	// if($('.slide-reg__password').val() == '') {

	$('.registration-form-mini__password').focusout(function () {
		$('.registration-form-mini__password').css('margin-bottom', '18px');
		$('.registration-form-mini__password-confirm').css({'opacity': '0', 'z-index': '-1', 'top': '192px'});
	});
	// };

});