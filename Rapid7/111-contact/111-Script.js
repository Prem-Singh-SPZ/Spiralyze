var jQueryInterval = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQueryInterval);
        jQuery(document).ready(function () {
            if (!jQuery('body').hasClass('rapid-contact-spz spz-111')) {
                jQuery('body').addClass('rapid-contact-spz spz-111');
            }
            jQuery('meta[name="viewport"]').attr("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0");
            var heroSec = '<section class="hero-section"><div class="container-spz"><div class="form-wrap"><h2 class="form-heading">Contact Us</h2><div class="form-container"></div></div></div></section>';
            jQuery(heroSec).insertBefore('.rapid-contact-spz .pageContent');
            jQuery('.rapid-contact-spz .hero-section .form-wrap .form-container').append(jQuery('#formBlock'));
            wrappingEle();
            classAllocation();
            var cardtitle1, cardsubtitle1, cardimg1, cardurl1, cardtitle2, cardsubtitle2, cardimg2, cardurl2, dropValue, cardWrapper;
            var imgpath = '//res.cloudinary.com/spiralyze/image/upload/f_auto/RAPID7/1504:%20Contact%20Page%20-%20Related%20Resources';
            jQuery('body').find('#thankyouText').html('<div class="inner-wrapper"><div class="img-wrapper"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="white"/><path d="M22.4 12L13.6 20.8L9.59998 16.8" stroke="#3B454A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><h4 class="title">Thank you for contacting us.</h4><h5 class="sub-title">We will be in touch shortly.</h5></div>');
            jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock').append('<div class="card-inner-wrapper"></div>');
            jQuery('form#formBlock #contactType').on('click change', function () {
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
            var intervalSet = setInterval(function () {
                if (jQuery(".rapid-contact-spz #formBlock #firstName").length > 0) {
                    clearInterval(intervalSet);
                    checkInputform();
                    jQuery('<p id="formTitle">Let\'s Start the Conversation</p>').insertBefore('.rapid-contact-spz #fieldInstruction');
                    jQuery('.rapid-contact-spz #fieldInstruction').text('All fields are mandatory.');
                    /*jQuery(".rapid-contact-spz #formBlock #jobLevel option:nth-child(1)").attr('value','').text('').hide();
                    jQuery(".rapid-contact-spz #formBlock #contactType option:nth-child(1)").attr('value','').text('').hide();
                    jQuery(".rapid-contact-spz #formBlock #contactTypeSecondary option:nth-child(1)").attr('value','').text('').hide();*/
                    jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-email"]').insertAfter('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-lastName"]');
                    jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-parent-companyName"]').insertAfter('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-email"]');
                    jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-companyName"]').insertAfter('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-email"]');
                    jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-email"] label').text('Company Email');
                    //jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-howDidYouHear"]').removeClass('hide');
                    jQuery('#consultant, #optout, dl[input-name="parent-noinput"]').addClass('bottomtext');
                    jQuery('#firstName').attr('tabindex', '1');
                    jQuery('#lastName').attr('tabindex', '2');
                    jQuery('#email').attr('tabindex', '3');
                    jQuery('#companyName').attr('tabindex', '4');
                    jQuery('#jobTitle').attr('tabindex', '5');
                    jQuery('#jobLevel').attr('tabindex', '6');
                    jQuery('#phone').attr('tabindex', '7');
                    jQuery('#country').attr('tabindex', '8');
                    jQuery('#state').attr('tabindex', '9');
                    jQuery('#contactType').attr('tabindex', '10');
                    jQuery('#contactTypeSecondary').attr('tabindex', '11');
                    jQuery('<label for="contactTypeSecondary">Select</label>').insertBefore('.rapid-contact-spz #contactTypeSecondary');
                    checkFilled();

                    jQuery('body').addClass('load');
                }
            }, 300);
            jQuery('#country ,#state,#contactTypeSecondary').closest('dl').addClass('filled');
            jQuery("body").on("focus", 'form#formBlock input, form#formBlock select', function () {
                jQuery(this).closest('dl').addClass('focused');
            }).on("blur", 'form#formBlock input, form#formBlock select', function () {
                if (jQuery(this).val() == "" || jQuery(this).val() == null) {
                    jQuery(this).closest('dl').removeClass('focused');
                }
                checkFilled();
            });
            contact111();

            /*Submission Event*/
            window['optimizely'] = window['optimizely'] || [];
            jQuery('body').on('click', '.form-wrap .form-container form#formBlock dl.expand button.submit', function () {
                if (jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock dl.error').length == 0) {
                    window['optimizely'].push({
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
                        if (jQuery('form#formBlock').find('#thankyouText').attr('style').indexOf('none') == -1) {
                            clearInterval(checkInterval);
                            jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock .card-inner-wrapper').html(cardWrapper);
                            jQuery('.form-wrap .form-container form#formBlock').addClass('form-submitted');
                            jQuery('html, body').animate({ scrollTop: jQuery('#thankyouText').offset().top - 150 }, 'fast');
                            //console.log('===========Inner Interval=============');
                        }
                    }, 200);
                }
            });
        });
    }
});

function wrappingEle() {
    var copyEle = jQuery(".rapid-contact-spz .contact__general .contactField__other").html();
    jQuery('.rapid-contact-spz .contact__general .contactContainer__item').each(function () {
        jQuery(this).find('.contactField:eq(0)').wrap('<div class="first-row"></div>');
        jQuery(this).find('.contactField:eq(1)').insertAfter(jQuery(this).find('.contactField:eq(0)'));
        jQuery(this).find('.contactField:eq(2)').wrap('<div class="second-row"></div>');
        jQuery(this).find('.second-row').append('<div class="contactField">\
			<div class="contactField__title">\
			    <h2 class="inquiries">Other</h2>\
			</div>\
			<div class="contactField__info">\
				<h4>Partners: <a href="mailto:partners@rapid7.com"> partners@rapid7.com</a></h4>\
				<h4>Press: <a href="mailto:press@rapid7.com"> press@rapid7.com</a></h4>\
				<h4>Analyst Relations: <a href="mailto:analysts@rapid7.com"> analysts@rapid7.com</a></h4>\
				<h4>Careers: <a href="mailto:careers@rapid7.com"> careers@rapid7.com</a></h4>\
				<h4>US Employment Verification: <a href="http://empinfo.com/" target="_blank" rel="noopener" class="external"> empinfo.com</a> or <a href="tel:+1-800-274-9694">+1-800-274-9694</a></h4>\
				<h4>Fax: Sales & Other Inquiries <a href="tel:+1-617-457-7929"> +1-617-457-7929</a></h4>\
				<h4>Legal: <a href="mailto:notices@rapid7.com"> notices@rapid7.com</a></h4>\
				<h4>Investor Relations: <a href="mailto:investors@rapid7.com"> investors@rapid7.com</a></h4>\
			</div>\
		</div>');
    });
}

function classAllocation() {
    var dataIndex = 1;
    jQuery('.rapid-contact-spz .contact__general .contactContainer .contactField__other p > a').each(function () {
        jQuery(this).addClass('data-' + dataIndex);
        dataIndex++;
    });
}

function checkInputform() {
    jQuery('form#formBlock fieldset dl').each(function () {
        jQuery(this).removeAttr('input-name');
        if (jQuery(this).find('input,select,textarea').length > 0) {
            var currentID = jQuery(this).find('input,select,textarea').attr('name');
            jQuery(this).attr('input-name', 'parent-' + currentID);
        } else {
            jQuery(this).attr('input-name', 'parent-noinput');
        }
    });
}

function checkFilled() {
    jQuery("body").find('#formBlock input').each(function () {
        if (jQuery(this).val().length > 0) {
            jQuery(this).closest('dl').addClass('filled');
        } else {
            jQuery(this).closest('dl').removeClass('filled');
        }
    });
    jQuery("body").find('#formBlock #contactType, #formBlock #jobLevel, #formBlock #contactTypeSecondary').each(function () {
        if (jQuery(this).val() == "" || jQuery(this).val() == null || jQuery(this).val() == '0') {
            jQuery(this).closest('dl').removeClass('focused filled');
        } else {
            jQuery(this).closest('dl').removeClass('focused').addClass('filled');
        }
    });
}

function contact111() {
    jQuery("body").on("focus", '#formBlock input , #formBlock select', function () {
        jQuery(this).closest('dl').addClass('focus');
    }).on("blur", '#formBlock input , #formBlock select', function () {
        jQuery(this).closest('dl').removeClass('focus');
    });

    // $("#formBlock").find('[input-name="parent-jobLevel"], [input-name="parent-contactType"], #contactTypeSecondaryParent').removeClass('filled');
    // $("#contactType").find('option:first-child').val('');
    $("#contactType").find('option:first-child').text('Select a reason');
    // $("#jobLevel").find('option:first-child').val('');
    // $("#contactTypeSecondary").find('option:first-child').val('');

    jQuery("body").on("blur", '#formBlock select', function () {
        if (jQuery(this).val() == "" || jQuery(this).val() == null || jQuery(this).val() == '0') {
            jQuery(this).closest('dl').removeClass('filled');
        } else { jQuery(this).closest('dl').addClass('filled'); }
    });
}


