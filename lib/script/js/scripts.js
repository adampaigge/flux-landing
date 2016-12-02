(function ($, root, undefined) {

	$(function () {

		"use strict";

		var siteMovement = new TimelineLite();

		//Slide
		$('#btn-cta').click(function(e) {
			e.preventDefault();
			siteMovement.to($('.homepage-block-content-wrp'), 1, {autoAlpha:0}, 0);
			siteMovement.to($('.site-bg'), 4, {backgroundPosition:"center top", ease: Power4.easeInOut}, 0.5);
			siteMovement.to($('.site-lgo-sub'), 1, {opacity:1}, 0.5);
			siteMovement.to($('.homepage-block-signup-wrp'), 4, {top:0, ease: Power4.easeInOut}, 0.5);
		})

		// Variable to hold request
		var request;

		// Bind to the submit event of our form
		$("#formContact").submit(function(event){

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
