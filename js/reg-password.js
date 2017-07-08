$(document).ready(function() {

	$('.registration-form-mini__password').focus(function() {
		$('.registration-form-mini__password').css('margin-bottom', '76px');
		$('.registration-form-mini__password-confirm').css({'left': '20px', 'top': '192px', 'z-index': '1', 'opacity': '1'});
	});

	$('.registration-form-mini__password').blur(function() {
		
		if( !$(this).val() ) {
			$('.registration-form-mini__password').css('margin-bottom', '18px');
			$('.registration-form-mini__password-confirm').css({'left': '20px', 'opacity': '0', 'z-index': '-1', 'top': '130px'});
		}
	});

});