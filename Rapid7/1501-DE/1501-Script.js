var jQueryInterval = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQueryInterval);
        jQuery(document).ready(function () {
            if (!jQuery('body').hasClass('rapid-contact-spz')) {
                var cookieName = 'rapid_contact_10052021';
                var cookieValue = '1';
                var myDate = new Date();
                myDate.setDate(myDate.getDate() + 30);
                document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
                jQuery('body').addClass('rapid-contact-spz');
            }
            jQuery('meta[name="viewport"]').attr("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0");
            var heroSec = '<section class="hero-section"><div class="container-spz"><div class="form-wrap"><h2 class="form-heading">Kontaktieren Sie uns</h2><div class="form-container"></div></div></div></section>';
            jQuery(heroSec).insertBefore('.rapid-contact-spz .pageContent');
            jQuery('.rapid-contact-spz .hero-section .form-wrap .form-container').append(jQuery('#formBlock'));
            wrappingEle();
            classAllocation();

            var cardtitle1, cardsubtitle1, cardimg1, cardurl1, cardtitle2, cardsubtitle2, cardimg2, cardurl2, dropValue, cardWrapper;
            var imgpath = '//res.cloudinary.com/spiralyze/image/upload/';
            jQuery('body').find('#thankyouText').html('<div class="inner-wrapper"><div class="img-wrapper"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="white"/><path d="M22.4 12L13.6 20.8L9.59998 16.8" stroke="#3B454A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><h4 class="title">Vielen Dank für Ihr Interesse!</h4><h5 class="sub-title">Wir melden uns in Kürze bei Ihnen</h5></div>');
            jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock').append('<div class="card-inner-wrapper"></div>');
            jQuery('form#formBlock #contactType').on('click change', function () {
                dropValue = jQuery(this).val();
                if (dropValue == '20437') {
                    cardtitle1 = "Was ist Cybersecurity-Risikomanagement?";
                    cardsubtitle1 = "WHITEPAPER / GUIDE";
                    cardimg1 = imgpath + "v1686223621/rapid7/1504/was_ist_cybersecurity-risikomanagement.webp";
                    cardurl1 = "/de/cybersecurity-grundlagen/what-is-cybersecurity-risk-management/";
                    cardtitle2 = "Kundenratgeber: Auswahl einer SchwachstellenManagement-Lösung";
                    cardsubtitle2 = "WHITEPAPER / GUIDE";
                    cardimg2 = imgpath + "v1686223621/rapid7/1504/auswahl_einer_schwachstellen-_management-losung.webp";
                    cardurl2 = "/de/info/vm-buyers-guide/";
                } else if (dropValue == '20440') {
                    cardtitle1 = "DevSecOps: Definition und weitere Informationen";
                    cardsubtitle1 = "BRIEF / DATASHEET";
                    cardimg1 = imgpath + "v1686223622/rapid7/1504/definition_und_weitere_informationen.webp";
                    cardurl1 = "/de/cybersecurity-grundlagen/devsecops/";
                    cardtitle2 = "Sicherheit und Scannen von Webanwendungen: Erläuterung und weitere Informationen";
                    cardsubtitle2 = "WHITEPAPER / GUIDE";
                    cardimg2 = imgpath + "v1686223622/rapid7/1504/erlauterung_und_weitere_informationen.webp";
                    cardurl2 = "/de/cybersecurity-grundlagen/web-application-security/";
                } else if (dropValue == '20443') {
                    cardtitle1 = "Ransomware-Playbook: So senken Sie das Angriffsrisiko und reduzieren die Auswirkungen";
                    cardsubtitle1 = "CUSTOMER STORY";
                    cardimg1 = imgpath + "v1686223622/rapid7/1504/so_senken_sie_das_angriffsrisiko_und_reduzieren_die_auswirkungen.webp";
                    cardurl1 = "https://information.rapid7.com/rs/411-NAK-970/images/Ransomware_Playbook_DE.pdf";
                    cardtitle2 = "Kundenratgeber: Auswahl einer Security Information and Event Management-Lösung (SIEM)";
                    cardsubtitle2 = "BRIEF / DATASHEET";
                    cardimg2 = imgpath + "v1686223623/rapid7/1504/auswahl_einer_security_information_and_event_management-losung_siem.webp";
                    cardurl2 = "/de/info/siem-buyers-guide/";
                } else if (dropValue == '20433') {
                    cardtitle1 = "Forschungbericht: Vertrauen in der Cloud";
                    cardsubtitle1 = "BRIEF / DATASHEET";
                    cardimg1 = imgpath + "v1686223623/rapid7/1504/vertrauen_in_der_cloud.webp";
                    cardurl1 = "https://information.rapid7.com/rs/411-NAK-970/images/Rapid7_Trust_in_the_Cloud.DE.pdf";
                    cardtitle2 = "Cloud Security für Einsteiger";
                    cardsubtitle2 = "SECURITY FUNDAMENTALS";
                    cardimg2 = imgpath + "v1686223623/rapid7/1504/cloud_security_fur_einsteiger.webp";
                    cardurl2 = "/de/info/cloud-security-fuer-einsteiger/";
                } else if (dropValue == '20448') {
                    cardtitle1 = "Kundenratgeber: Managed Detection and Response (MDR)";
                    cardsubtitle1 = "BRIEF / DATASHEET";
                    cardimg1 = imgpath + "v1686223624/rapid7/1504/managed_detection_and_response_mdr.webp";
                    cardurl1 = "https://information.rapid7.com/rs/411-NAK-970/images/MDR_Buyers_Guide_DE.pdf";
                    cardtitle2 = "Gartner®-Report: Fragen, die Sie sich bei der Auswahl eines MDR-Anbieters stellen sollten";
                    cardsubtitle2 = "WHITEPAPER / GUIDE";
                    cardimg2 = imgpath + "v1686223624/rapid7/1504/fragen_die_sie_sich_bei_der_auswahl_eines_mdr-anbieters_stellen_sollten.webp";
                    cardurl2 = "/de/about/dach-blog-news/gartner-report-fragen-die-sie-sich-bei-der-auswahl-eines-mdr-anbieters-stellen-sollten/";
                } else if (dropValue == '20450') {
                    cardtitle1 = "Automatisierung von Vulnerability Management";
                    cardsubtitle1 = "USE CASE";
                    cardimg1 = imgpath + "v1686223624/rapid7/1504/automatisierung_von_vulnerability_management.webp";
                    cardurl1 = "/de/products/insightconnect/use-cases/patching-remediation/";
                    cardtitle2 = " Incident Response beschleunigen";
                    cardsubtitle2 = "USE CASE";
                    cardimg2 = imgpath + "v1686223624/rapid7/1504/incident_response_beschleunigen.webp";
                    cardurl2 = "/de/products/insightconnect/use-cases/threat-hunting/";
                } else if (dropValue == '20434') {
                    cardtitle1 = "Grundlagen des Cybersecurity-Programms";
                    cardsubtitle1 = "BRIEF / DATASHEET";
                    cardimg1 = imgpath + "v1686223624/rapid7/1504/grundlagen_des_cybersecurity-programms.webp";
                    cardurl1 = "/de/cybersecurity-grundlagen/security-program-basics/";
                    cardtitle2 = "Was bedeutet Risikomanagement für die Informationssicherheit?";
                    cardsubtitle2 = "TEMPLATE";
                    cardimg2 = imgpath + "v1686223625/rapid7/1504/was_bedeutet_risikomanagement_fur_die_informationssicherheit.webp";
                    cardurl2 = "/de/cybersecurity-grundlagen/information-security-risk-management/";
                } else if (dropValue == '21019') {
                    cardtitle1 = "Ransomware eine Ständig neue Bedrohung";
                    cardsubtitle1 = "PRODUCT VIDEO";
                    cardimg1 = imgpath + "v1686223625/rapid7/1504/ransomware_eine_standig_neue_bedrohung.webp";
                    cardurl1 = "/globalassets/_pdfs/whitepaperguide/rapid7-the-evolving-ransomware-threat_de.pdf";
                    cardtitle2 = "Extended Detection and Response (XDR)";
                    cardsubtitle2 = "BLOG";
                    cardimg2 = imgpath + "v1686223625/rapid7/1504/extended_detection_and_response_xdr.webp";
                    cardurl2 = "/de/cybersecurity-grundlagen/extended-detection-response-xdr/";
                }
            });

            var intervalSet = setInterval(function () {
                if (jQuery(".rapid-contact-spz #formBlock #firstName").length > 0) {
                    clearInterval(intervalSet);
                    checkInputform();
                    jQuery('<p id="formTitle">Kontakt aufnehmen</p>').insertBefore('.rapid-contact-spz #fieldInstruction');
                    jQuery('.rapid-contact-spz #fieldInstruction').text('Alle Felder sind Pflichtfelder.');
                    /*jQuery(".rapid-contact-spz #formBlock #jobLevel option:nth-child(1)").attr('value','').text('').hide();
                    jQuery(".rapid-contact-spz #formBlock #contactType option:nth-child(1)").attr('value','').text('').hide();
                    jQuery(".rapid-contact-spz #formBlock #contactTypeSecondary option:nth-child(1)").attr('value','').text('').hide();*/
                    jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-email"]').insertAfter('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-lastName"]');
                    jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-parent-companyName"]').insertAfter('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-email"]');
                    jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-companyName"]').insertAfter('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-email"]');
                    //jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-email"] label').text('Company Email');
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
                    jQuery('<label for="contactTypeSecondary">Auswählen</label>').insertBefore('.rapid-contact-spz #contactTypeSecondary');
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
            /*Submission Event*/
            window['optimizelyEdge'] = window['optimizelyEdge'] || [];
            jQuery('body').on('click', '.form-wrap .form-container form#formBlock dl.expand button.submit', function () {
                if (jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock dl.error').length == 0) {
                    window['optimizelyEdge'].push({
                        type: "event",
                        eventName: "ContactFormSubmissionSPZ",
                    });
                    cardWrapper = '<h4 class="title">Empfohlene Ressourcen</h4>\
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
			<h4>Karriere: <a href="mailto:careers@rapid7.com"> careers@rapid7.com</a></h4>\
			<h4>Investor Relations: <a href="mailto:investors@rapid7.com"> investors@rapid7.com</a></h4>\
			<h4>Employment Verification: <a href="mailto:verifyemployment@rapid7.com"> verifyemployment@rapid7.com</a> or <a href="tel:+1-857-990-4600">+1-857-990-4600</a></h4>\
			<h4>Fax: Legal & Administration <a href="tel:+1-617-904-1913"> +1-617-904-1913</a></h4>\
			<h4>Sales & Other Inquiries: <a href="tel:+1-617-457-7929"> +1-617-457-7929</a></h4>\
			</div>\
		</div>');
    });
    jQuery('.rapid-contact-spz .contact__general .contactContainer__item .first-row .contactField:last-child .contactField__title h2').text('Kundensupport');
    jQuery('.rapid-contact-spz .contact__general .contactContainer__item .second-row .contactField:first-child .contactField__title h2').text('Vertrieb & Allgemeine Info');
    jQuery('.rapid-contact-spz .contact__general .contactContainer__item .second-row .contactField:last-child .contactField__title h2').text('Sonstiges');
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
    jQuery("body").find('#formBlock #contactType, #formBlock #jobLevel').each(function () {
        if (jQuery(this).val() == "" || jQuery(this).val() == null) {
            jQuery(this).closest('dl').removeClass('focused');
        } else {
            jQuery(this).closest('dl').removeClass('focused').addClass('filled');
        }
    });
}