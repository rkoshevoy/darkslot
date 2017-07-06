$(document).ready(function() {

	$('.registration-form-mini__password').focus(function() {
		$('.registration-form-mini__password').css('margin-bottom', '76px');
		$('.registration-form-mini__password-confirm').css({'top': '250px', 'z-index': '1', 'opacity': '1'});
	});

	$('.registration-form-mini__password').blur(function() {
		
		if( !$(this).val() ) {
			$('.registration-form-mini__password').css('margin-bottom', '18px');
			$('.registration-form-mini__password-confirm').css({'opacity': '0', 'z-index': '-1', 'top': '192px'});
		}
	});

});