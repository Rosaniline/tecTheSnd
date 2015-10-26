
$(document).ready(function(){

	if ($(window).width() < 970) {

		$("#navbar_master").removeClass('navbar-custom')
		$("#navbar_master").addClass('navbar-default')
	}
	else {
		$("#navbar_master").addClass('navbar-custom')
		$("#navbar_master").removeClass('navbar-default')
	}


	$(window).resize(function () {
		
		if ($(this).width() < 970) {

			$("#navbar_master").removeClass('navbar-custom')
			$("#navbar_master").addClass('navbar-default')

			$(".circle").addClass(".col-xs-12")
		}
		else {
			$("#navbar_master").addClass('navbar-custom')
			$("#navbar_master").removeClass('navbar-default')
		}
	});
});


