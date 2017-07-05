$(document).ready(function() {

	$('.registration-form-mini__password').focus(function() {
		$('.registration-form-mini__password').css('margin-bottom', '76px'),
		$('.registration-form-mini__password-confirm').css('top', '250px').css('z-index', '1').css('opacity', '1')
	});

	// if($('.slide-reg__password').val() == '') {

		$('.registration-form-mini__password').focusout(function() {
			$('.registration-form-mini__password').css('margin-bottom', '18px'),
			$('.registration-form-mini__password-confirm').css('top', '192px').css('z-index', '-1').css('opacity', '0')
		});
	// };

});