$(document).ready(function(){

	alignNavbar();

	$('.panel-div').on('click', function(event) {
		event.preventDefault();

		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$(this).find('img').attr('src', 'seed/images/plus_symbol_grey.png');
			// console.log($(this).find('img').attr('src'));
		}

		else {
			$('.panel-div').removeClass('active');
			$('.panel-div').find('img').attr('src', 'seed/images/plus_symbol_grey.png');
			$(this).addClass('active');
			console.log($(this).find('img').attr('src'));
			$(this).find('img').attr('src', 'seed/images/minus_symbol_grey.png');
		}				

	});


	$(".navbar-nav li").on('click', function(){

		$(".navbar-nav li").removeClass('active');

		$(this).addClass('active');

	});

	$("#img_apply_btn").css({
		"cursor": "pointer"
	})

	$("#img_logo").css({
		"cursor": "pointer"
	})

	$('.banner_slider').bxSlider({
		slideWidth: window.width,
		minSlides: 1,
		maxSlides: 1,
		slideMargin: 0,
		infiniteLoop: true,
		adaptiveHeight: true,
		auto: true,
		pager: false,
		pause: 3000,
		keyboardEnabled: true
	});

	$(document).on("click", "#img_logo", function(e){

		// Prevent a page reload when a link is pressed
		e.preventDefault(); 

		$("html, body").animate({

			scrollTop: 0

		}, 500);

	});

	$(document).on("click", "#btn_more", function(e){

		// Prevent a page reload when a link is pressed
		e.preventDefault(); 

		$("html, body").animate({

			scrollTop: $("#div_spirit").offset().top - 50

		}, 500);

	});

	if ( beforeApply() || afterApply() ) {
		$('#div_apply').css('display', 'none');
		$('#apply_done').css('display', 'navone');
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

	$(document).on("click", "#footer1 #link_menu a", function(e){

		// Prevent a page reload when a link is pressed
		e.preventDefault(); 

		if ( $(this).attr('id') != 'procedure' ) {

			var offset = $("#div_" + $(this).attr('id').substr(2)).offset().top - 70;

			$("html, body").animate({

				scrollTop: offset

			}, 500);

		}



	});



	$(document).on("click", ".nav.navbar-nav li", function(e){

		// Prevent a page reload when a link is pressed
		e.preventDefault(); 

		if ( !($(this).attr('id') == 'apply' || $(this).attr('id') == 'procedure') ) {

			var offset = $("#div_" + $(this).attr('id')).offset().top - 70;

			$("html, body").animate({

				scrollTop: offset

			}, 500);

		}

	});

	$(".circle").hover(function(){

	    	$(this).stop(true, false).animate({ 
	    		'background-color': 'white',
	    		'border-color': '#EB623F',
	    		'color': '#EB623F'
	    	}, 300);

	    	$(this).find('.des').stop(true, false).animate({ 
	    		'opacity': '1',
	    		'color': '#4D4D4D'
	    	}, 300);

		}, function() {

		    $(this).stop(true, false).animate({ 
		    	'background-color': '#F8F7F7',
		    	'border-color': '#CCCCCC',
	    		'color': '#4D4D4D'
		    }, 300);

	    	$(this).find('.des').stop(true, false).animate({ 
	    		'opacity': '0'
	    	}, 300);
	});

    $('.btn-file').on('change', function(event, numFiles, label) {


    	var elem = document.getElementById("file_text");
    	elem.value = "";
    	var fileName = $("input:file").val().split('/').pop().split('\\').pop();
    	
		elem.value = fileName;
        
    });

	$('#ss-form').submit(function(event) {
	    event.preventDefault();
		    $(this).submit();
    });


});


$(window).scroll(function(){

	alignNavbar($(document).scrollTop());

});

function alignNavbar(scroll) {

	scroll = Math.max(0, (Math.min(150, scroll - 730 + 200)));

	$('#img_logo').css('height', (110 - scroll/6) + 'px');
	$('#img_apply_btn').css('margin-top', (30 - scroll/15) + 'px');

	var h = parseInt($('#img_logo').css('height'))/2 - 10;

	$('.navbar-nav > li > a').css({
		'padding-top': h + 'px',
		'padding-bottom': h + 'px',
	});

	$('.btn.rec_btn.s').css('margin-top', (40 - scroll/7) + 'px');


	$('.bx-wrapper .bx-prev').css('opacity', Math.max( ($(window).height()/2 - $(document).scrollTop()*2)/$(window).height(), 0));

	$('.bx-wrapper .bx-next').css('opacity', Math.max( ($(window).height()/2 - $(document).scrollTop()*2)/$(window).height(), 0));

}

function beforeApply() {

	var s = new Date(2015, 8, 21, 0, 0, 0, 0); 
	var d = new Date();
	
	return s > d;

}

function afterApply() {

	var t = new Date(2015, 9, 1, 0, 0, 0, 0); 
	var d = new Date(); 
	
	console.log(d);
	return d > t;

}




