var jQueryInterval = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQueryInterval);
        if (!jQuery('body').hasClass('contactform-redesign-spz')) {
            jQuery('body').addClass('contactform-redesign-spz');

            if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
                document.body.classList.add('safari')
            }
        }
        window['optimizely'] = window['optimizely'] || [];

        // Goal 1 Trigger
        let checkGoalSubmit = 0;
        jQuery(document).on('click', '#contactModal button.submit', function () {
            checkGoalSubmit = 1;
        });
        let checkForm = setInterval(function () {
            if (document.querySelectorAll("#contactModal").length > 0) {
                clearInterval(checkForm);
                const elementToObserve = document.querySelector("#contactModal");
                const observer = new MutationObserver(function () {
                    if (jQuery('#thankyouText').is(':visible') == true && jQuery('#contactModal .errorMsg').length == 0 && checkGoalSubmit == 1) {
                        window['optimizely'].push({
                            type: "event",
                            eventName: "ContactFormSubmissionSPZ",
                        });
                        checkGoalSubmit = 0;
                    }
                });
                observer.observe(elementToObserve, { subtree: true, childList: true, attributeFilter: ["style"], attributes: true });
            }
        }, 500);

        // Goal 2 Trigger
        jQuery(document).on('click', '#sticky_contact_btn', function () {
            window['optimizely'].push({
                type: "event",
                eventName: "contact-sticky-cta-click-spz",
            });
        });

        jQuery(window).on('load', function () {
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

            var checkForm = setInterval(function () {
                if (jQuery('.contactform-redesign-spz #contactModal.formBlock #firstName').length > 0) {
                    clearInterval(checkForm);
                    jQuery('.contactform-redesign-spz .reveal-overlay .contactForm.spz-new-form-section fieldset dl:eq(12)').addClass('sub-center');
                    jQuery('.contactform-redesign-spz .reveal-overlay .contactForm.spz-new-form-section fieldset dl:eq(8)').removeClass('clearfix expand');
                    // jQuery('.contactform-redesign-spz .reveal-overlay .contactForm.spz-new-form-section fieldset dl:eq(8) dd').prepend('<label for="Reason">Reason for Contact</label>');
                    jQuery('<label for="Reason">Reason for Contact</label>').insertBefore('.contactform-redesign-spz .reveal-overlay .contactForm.spz-new-form-section fieldset dl#contactTypeSecondaryParent #contactTypeSecondary');
                    jQuery('.contactform-redesign-spz .reveal-overlay .contactForm.spz-new-form-section fieldset dl:eq(8) dd option:eq(0)').text('Select Option');
                    jQuery('.contactform-redesign-spz .reveal-overlay .contactForm.spz-new-form-section .grid-container select option').addClass('left_opt_pad');
                    jQuery('.contactform-redesign-spz .reveal-overlay .contactForm.spz-new-form-section fieldset dl#productNameParent').prepend('<label for="Product">Product</label>');
                    var count = 1;
                    jQuery('.contactform-redesign-spz .reveal-overlay .contactForm.spz-new-form-section .grid-container .formBlock dl').each(function () {
                        jQuery(this).addClass('dl-' + count);
                        jQuery(this).find('input,select').attr('tabindex', count);
                        count++;
                    });
                }
            });
        });

        //Thank you page test
        if (!jQuery('body').hasClass('rapid-contact-spz')) {
            jQuery('body').addClass('rapid-contact-spz');
        }
        jQuery('meta[name="viewport"]').attr("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0");
        var cardtitle1, cardsubtitle1, cardimg1, cardurl1, cardtitle2, cardsubtitle2, cardimg2, cardurl2, dropValue, cardWrapper;
        var imgpath = '//res.cloudinary.com/spiralyze/image/upload/f_auto/RAPID7/1504:%20Contact%20Page%20-%20Related%20Resources';
        jQuery('body').find('#thankyouText').html('<div class="inner-wrapper"><div class="img-wrapper"><img src="//res.cloudinary.com/spiralyze/image/upload/v1698411225/RAPID7/603/Check.svg" alt="Checkmark"></div><h4 class="title">Thank you for contacting us.</h4><h5 class="sub-title">We will be in touch shortly.</h5></div>');
        jQuery('#contactModal').append('<div class="card-inner-wrapper"></div>');
        jQuery('form#contactModal #contactType').on('click change', function () {
            dropValue = jQuery(this).val();
            if (dropValue == '20437') {
                cardtitle1 = "Whitepaper: The Four Pillars of Modern Vulnerability Management";
                cardsubtitle1 = "WHITEPAPER / GUIDE";
                cardimg1 = imgpath + "/The-four-pillars.jpg";
                cardurl1 = "/info/whitepaper-the-four-pillars-of-modern-vulnerability-management/";
                cardtitle2 = "Solution Guide: Modern Vulnerability Management with Rapid7";
                cardsubtitle2 = "WHITEPAPER / GUIDE";
                cardimg2 = imgpath + "/Modern-vulnerability-management.jpg";
                cardurl2 = "/c/modern-vm/2/";
            } else if (dropValue == '20440') {
                cardtitle1 = "Solution Brief: 3 Ways to Power DevSecOps with InsightAppSec";
                cardsubtitle1 = "BRIEF / DATASHEET";
                cardimg1 = imgpath + "/Ways-to-power.jpg";
                cardurl1 = "/globalassets/_pdfs/product-and-service-briefs/rapid7-solution-brief-devsecops-insightappsec.pdf";
                cardtitle2 = "Application Security Buyer's Guide";
                cardsubtitle2 = "WHITEPAPER / GUIDE";
                cardimg2 = imgpath + "/Application-Security.jpg";
                cardurl2 = "/info/application-security-buyers-guide/";
            } else if (dropValue == '20443') {
                cardtitle1 = "Case Study: Auden";
                cardsubtitle1 = "CUSTOMER STORY";
                cardimg1 = imgpath + "/Case-Study-Auden.jpg";
                cardurl1 = "/about/customers/auden/";
                cardtitle2 = "Solution Brief: Detection and Response for the Mobile Workforce";
                cardsubtitle2 = "BRIEF / DATASHEET";
                cardimg2 = imgpath + "/Detection-and_response.jpg";
                cardurl2 = "/globalassets/_pdfs/product-and-service-briefs/rapid7-insightidr-remote-workers-solution-brief.pdf";
            } else if (dropValue == '20433') {
                cardtitle1 = "InsightCloudSec: Continuous Security and Compliance in the Cloud";
                cardsubtitle1 = "BRIEF / DATASHEET";
                cardimg1 = imgpath + "/Mobile-orkforce.jpg";
                cardurl1 = "/globalassets/_pdfs/rapid7-insightcloudsec-continuous-security-and-compliance-for-the-cloud-brief.pdf";
                cardtitle2 = "Fundamentals: Cloud Network Security Best Practices";
                cardsubtitle2 = "SECURITY FUNDAMENTALS";
                cardimg2 = imgpath + "/Cloud-Network-Security.jpg";
                cardurl2 = "/fundamentals/cloud-network-security/";
            } else if (dropValue == '20448') {
                cardtitle1 = "Service Brief: Managed Services";
                cardsubtitle1 = "BRIEF / DATASHEET";
                cardimg1 = imgpath + "/Managed-services.jpg";
                cardurl1 = "/globalassets/_pdfs/product-and-service-briefs/rapid7-managed-services-brief.pdf";
                cardtitle2 = "Under the Hoodie: Ask a Penetration Tester";
                cardsubtitle2 = "WHITEPAPER / GUIDE";
                cardimg2 = imgpath + "/Under-the-hoodie.jpg";
                cardurl2 = "/resources/testing-user-credentials-in-metasploit/";
            } else if (dropValue == '20450') {
                cardtitle1 = "VM Automation";
                cardsubtitle1 = "USE CASE";
                cardimg1 = imgpath + "/VM-Automation.jpg";
                cardurl1 = "/products/insightconnect/use-cases/patching-remediation/";
                cardtitle2 = "Accelerate Incident Response";
                cardsubtitle2 = "USE CASE";
                cardimg2 = imgpath + "/Accelerate-Incident-Response.jpg";
                cardurl2 = "/products/insightconnect/use-cases/threat-hunting/";
            } else if (dropValue == '20434') {
                cardtitle1 = "Rapid7 Overview brochure";
                cardsubtitle1 = "BRIEF / DATASHEET";
                cardimg1 = imgpath + "/Overview-brochure.jpg";
                cardurl1 = "/globalassets/_pdfs/product-and-service-briefs/rapid7-overview-brochure-2021-digital.pdf";
                cardtitle2 = "Planning tools for 2022";
                cardsubtitle2 = "TEMPLATE";
                cardimg2 = imgpath + "/Planning-tools.jpg";
                cardurl2 = "/info/planning-tool-for-2022/";
            } else if (dropValue == '21019') {
                cardtitle1 = "Video: Threat Command";
                cardsubtitle1 = "PRODUCT VIDEO";
                cardimg1 = imgpath + "/Threat-command.jpg";
                cardurl1 = "https://share.vidyard.com/watch/2PvsNR753HfRV5pj3RYBDT";
                cardtitle2 = "Blog: Demystifying XDR: A Forrester Analyst Lays the Foundation";
                cardsubtitle2 = "BLOG";
                cardimg2 = imgpath + "/Demystifying-xdr.jpg";
                cardurl2 = "/blog/post/2021/12/08/demystifying-xdr-a-forrester-analyst-lays-the-foundation/";
            }
        });

        /*Submission Event*/

        window['optimizelyEdge'] = window['optimizelyEdge'] || [];
        jQuery('body').on('click', ' form#contactModal dl.expand button.submit', function () {
            if (jQuery('.rapid-contact-spz  form#contactModal dl.error').length == 0) {
                window['optimizelyEdge'].push({
                    type: "event",
                    eventName: "ContactFormSubmissionSPZ",
                });
                cardWrapper = '<h4 class="title">Recommended Resources</h4>\
                    <div class="card-wrapper">\
                        <a class="card-item item-1" href="' + cardurl1 + '">\
                            <img src="' + cardimg1 + '" alt="' + cardtitle1 + '">\
                            <div class="card-sub-title">' + cardsubtitle1 + '</div>\
                            <div class="card-title">' + cardtitle1 + '</div>\
                        </a>\
                        <a class="card-item item-2" href="' + cardurl2 + '">\
                            <img src="' + cardimg2 + '" alt="' + cardtitle2 + '">\
                            <div class="card-sub-title">' + cardsubtitle2 + '</div>\
                            <div class="card-title">' + cardtitle2 + '</div>\
                        </a>\
                    </div>';
                var checkInterval = setInterval(function () {
                    if (jQuery('form#contactModal').find('#thankyouText').attr('style').indexOf('none') == -1) {
                        clearInterval(checkInterval);
                        jQuery('.rapid-contact-spz  form#contactModal .card-inner-wrapper').html(cardWrapper);
                        jQuery(' form#contactModal').addClass('form-submitted');
                        jQuery('html, body').animate({ scrollTop: jQuery('#thankyouText').offset().top - 150 }, 'fast');
                        //console.log('===========Inner Interval=============');
                    }
                }, 200);
            }
        });
    }
});

function checkInputform() {
    jQuery('form#contactModal fieldset dl').each(function () {
        jQuery(this).removeAttr('input-name');
        if (jQuery(this).find('input,select,textarea').length > 0) {
            var currentID = jQuery(this).find('input,select,textarea').attr('name');
            jQuery(this).attr('input-name', 'parent-' + currentID);
        } else {
            jQuery(this).attr('input-name', 'parent-noinput');
        }
    });
}
