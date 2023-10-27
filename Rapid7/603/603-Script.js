var jQueryInterval = setInterval(function() {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQueryInterval);
        if (!jQuery('body').hasClass('contactform-redesign-spz')) {
            var cookieName = 'contactform-redesign-25012021';
            var cookieValue = '1';
            var myDate = new Date();
            myDate.setDate(myDate.getDate() + 30);
            document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
            jQuery('body').addClass('contactform-redesign-spz');
        }
        window['optimizely'] = window['optimizely'] || [];
        
        // Goal 1 Trigger
        let checkGoalSubmit = 0;
        jQuery(document).on('click', '#contactModal button.submit', function(){
        	checkGoalSubmit = 1;
        });
        let checkForm = setInterval(function(){
            if(document.querySelectorAll("#contactModal").length > 0)
            {
                clearInterval(checkForm);
                const elementToObserve = document.querySelector("#contactModal");
                const observer = new MutationObserver(function() {
                    if(jQuery('#thankyouText').is(':visible') == true && jQuery('#contactModal .errorMsg').length == 0 && checkGoalSubmit == 1)
                    {
                        window['optimizely'].push({
                            type: "event",
                            eventName: "ContactFormSubmissionSPZ",
                        });
                        checkGoalSubmit = 0;
                    }
                });
                observer.observe(elementToObserve, {subtree: true, childList: true, attributeFilter: ["style"], attributes: true});
            }
        }, 500);
        
        // Goal 2 Trigger
        jQuery(document).on('click', '#sticky_contact_btn', function(){
            window['optimizely'].push({
                type: "event",
                eventName: "contact-sticky-cta-click-spz",
            });
        });

        jQuery(window).on('load', function() {
        	jQuery('.contactform-redesign-spz .formBlock h2').text('Contact Us');
            jQuery('#stickyContact section').addClass('spz-new-form-section').closest('.reveal-overlay').addClass('spz-new-back-contact');
            jQuery(".contactform-redesign-spz .reveal-overlay .contactForm.spz-new-form-section .grid-container .large-3.cell.sidebar").html('<div class="section-desk-mob-bottom"><img alt="Rapid7 logo" class="logo" data-src="//res.cloudinary.com/spiralyze/image/upload/v1611665075/RAPID7/Rapid7_logo_whiteappe.png" src="//res.cloudinary.com/spiralyze/image/upload/v1611665075/RAPID7/Rapid7_logo_whiteappe.png">\
                            <div class="custsup"><h3>CUSTOMER SUPPORT</h3>\
                            <p><a href="tel:1-866-390-8113">+1-866-390-8113 (Toll Free)</a></div>\
                            <div class="salsup"><h3>SALES SUPPORT</h3>\
                            <p><a href="tel:1-866-772-7437">+1-866-772-7437 (Toll Free)</a></div>\
                                <div class="immedisup"><h3>Need immediate help with a breach?</h3>\
                            <a href="tel:1-844-727-4347"><div class="button-outer">\
	<div class="button-left-section"></div>\
	<div class="button-right-section"><a href="tel:18447274347">+1-844-727-4347</a></div>\
</div></a></div>\
                        </div></div>\
                        <div class="section-tab-bottom"><div class="bottom-tab"><div class="bottom-tab-right">\
			<div class=" custsup"><h3>CUSTOMER SUPPORT</h3><p><a href="tel:1-866-390-8113">+1-866-390-8113 (Toll Free)</a></p></div>\
<div class="salsup"><h3>SALES SUPPORT</h3><p><a href="tel:1-866-772-7437">+1-866-772-7437 (Toll Free)</a></div> </div>\
		<div class="immedisup"><h3>Need immediate help with a breach?</h3><a href="tel:1-844-727-4347"><div class="button-outer">\
	<div class="button-left-section"></div>\
	<div class="button-right-section"><a href="tel:18447274347">+1-844-727-4347</a></div>\
</div></a></div>\
		</div><img alt="Rapid7 logo" class="logo" data-src="//res.cloudinary.com/spiralyze/image/upload/v1611665075/RAPID7/Rapid7_logo_whiteappe.png" src="//res.cloudinary.com/spiralyze/image/upload/v1611665075/RAPID7/Rapid7_logo_whiteappe.png">\
</div>');

            var checkForm = setInterval(function() {
                if(jQuery('.contactform-redesign-spz #contactModal.formBlock #firstName').length > 0)
                {
                    clearInterval(checkForm);
                    jQuery('.contactform-redesign-spz .reveal-overlay .contactForm.spz-new-form-section fieldset dl:eq(12)').addClass('sub-center');
                    jQuery('.contactform-redesign-spz .reveal-overlay .contactForm.spz-new-form-section fieldset dl:eq(8)').removeClass('clearfix expand');
                    // jQuery('.contactform-redesign-spz .reveal-overlay .contactForm.spz-new-form-section fieldset dl:eq(8) dd').prepend('<label for="Reason">Reason for Contact</label>');
                    jQuery('<label for="Reason">Reason for Contact</label>').insertBefore('.contactform-redesign-spz .reveal-overlay .contactForm.spz-new-form-section fieldset dl#contactTypeSecondaryParent #contactTypeSecondary');
                    jQuery('.contactform-redesign-spz .reveal-overlay .contactForm.spz-new-form-section fieldset dl:eq(8) dd option:eq(0)').text('Select Option');
                    jQuery('.contactform-redesign-spz .reveal-overlay .contactForm.spz-new-form-section .grid-container select option').addClass('left_opt_pad');
                    jQuery('.contactform-redesign-spz .reveal-overlay .contactForm.spz-new-form-section fieldset dl#productNameParent').prepend('<label for="Product">Product</label>');
                    var count = 1;
                    jQuery('.contactform-redesign-spz .reveal-overlay .contactForm.spz-new-form-section .grid-container .formBlock dl').each(function(){
                        jQuery(this).addClass('dl-'+count);
                        jQuery(this).find('input,select').attr('tabindex',count);
                        count ++;
                    });
                }
            });
        });
    }
});