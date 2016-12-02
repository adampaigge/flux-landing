(function ($, root, undefined) {

	$(function () {

		"use strict";

		var navGrip = new TimelineLite();
		var frmSend = new TimelineLite();

		//MENU CONTROLLER
		$('.site-hdr-inr').click(function() {

			if(navGrip._totalDuration == 0) {

			} else if(navGrip.progress() == 0) {
				navGrip.play();
			} else if(navGrip.progress() == 1) {
				navGrip.reverse();
			}

			navState = !navState;
		});

		//Language Adjuster
		$('.wpml-ls-item a span').each(function(index, element) {
			var eleStr = $(element).html();
			var newStr = ""
			if (eleStr == "English") {
				newStr = "EN"
			} else if (eleStr == "Português") {
				newStr = "BR"
			}

			 $(element).html(newStr);
		})

		//Slide
		$('#btn-cta').click(function(e) {
			e.preventDefault();
			navGrip.to($('.homepage-block-content-wrp'), 1, {autoAlpha:0}, 0);
			navGrip.to($('.site-bg'), 4, {backgroundPosition:"center top", ease: Power4.easeInOut}, 0.5);
			navGrip.to($('.site-lgo-sub'), 1, {opacity:1}, 0.5);
			navGrip.to($('.homepage-block-signup-wrp'), 4, {top:0, ease: Power4.easeInOut}, 0.5);
		})

		// Variable to hold request
		var request;

		// Bind to the submit event of our form
		$("#formContact").submit(function(event){

			// $('.site-submit')

			frmSend.to($('.site-submit'), 0.25, {width:"+=100px", repeat:-1, yoyo:true}, 0);

		    // Abort any pending request
		    if (request) {
		        request.abort();
		    }
		    // setup some local variables
		    var $form = $(this);

		    // Let"s select and cache all the fields
		    var $inputs = $form.find("input, select, button, textarea");

		    // Serialize the data in the form
		    var serializedData = $form.serialize();

		    // Let"s disable the inputs for the duration of the Ajax request.
		    // Note: we disable elements AFTER the form data has been serialized.
		    // Disabled form elements will not be serialized.
		    $inputs.prop("disabled", true);

		    // Fire off the request to /form.php
		    request = $.ajax({
		        url: "https://script.google.com/macros/s/AKfycbxHPKbw14oxLREpkxVjR2D_HNntB_UEBsvicO8TZcARb2-QwuU/exec",
		        type: "post",
		        data: serializedData
		    });

		    // Callback handler that will be called on success
		    request.done(function (response, textStatus, jqXHR){
		        // Log a message to the console
		        console.log("Hooray, it worked!");
		        console.log(response);
		        console.log(textStatus);
		        console.log(jqXHR);
				TweenMax.to($('.homepage-signup-form-wrp'), 1, {autoAlpha:0});
				TweenMax.to($('.homepage-signup-form-wrp'), 1, {height:0, delay:1});
		    });

		    // Callback handler that will be called on failure
		    request.fail(function (jqXHR, textStatus, errorThrown){
		        // Log the error to the console
		        console.error(
		            "The following error occurred: "+
		            textStatus, errorThrown
		        );
		    });

		    // Callback handler that will be called regardless
		    // if the request failed or succeeded
		    request.always(function () {
		        // Reenable the inputs
		        $inputs.prop("disabled", false);
				TweenMax.to($('.homepage-signup-rsp-success'), 1, {autoAlpha:1});
				TweenMax.to($('.homepage-signup-rsp-success'), 1, {height:"100%", delay:1});
		    });

		    // Prevent default posting of form
		    event.preventDefault();
		});

	});

})(jQuery, this);
