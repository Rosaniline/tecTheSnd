$(document).ready(function(){

	if ( beforeApply() || afterApply() ) {
		$('#div_apply').css('display', 'none');
	}

	$(document).on("click", "#img_apply_btn, #btn_apply", function(e){

		// Prevent a page reload when a link is pressed
		e.preventDefault(); 

		if ( beforeApply() ) {	

			bootbox.alert("第二屆臺大種子創業競賽將於 9/21(一) - 9/30(三) 開放系統報名！");
		}

		else if (afterApply()) {

			bootbox.alert("第二屆臺大種子創業競賽已截止報名。歡迎於 10/30(五) 前來決選觀賽！");
			
		}

		else {

			$("html, body").animate({

				scrollTop: $("#div_apply").offset().top - 50

			}, 500);
		}

	});

    $(document).on('click', '#ss_submit', function(event) {
    	event.preventDefault();

    	if ( $('#file_text').val() == "" ) {
    		bootbox.alert("請上傳報名表格!");
    	}

    	else if ( !formValidation() ) {
    		bootbox.alert("請填寫完成報名資訊!");	
    	}

    	else {


			$('#ss-form').ajaxSubmit({

	            error: function(xhr) {
					status('Error: ' + xhr.status);
					console.log('error');
	            },

	            success: function(response) {
					$('#apply_ing').css('display', 'none');
					$('#apply_done').css('display', 'block');
	            }
	        });
    	}

        return false;
	    	
    });

});

function beforeApply() {

	var s = new Date(2015, 8, 20, 0, 0, 0, 0); 
	var d = new Date();
	
	return s > d;

}

function afterApply() {

	var t = new Date(2015, 9, 1, 0, 0, 0, 0); 
	var d = new Date(); 
	
	return d > t;

}

function formValidation() {

	val = true;

	$('#ss-form input').each(function() {
		// console.log($(this).val());
		if($(this).val() == "") {
			val = false;
		} 
	});

	// console.log(val);

	return val;
}