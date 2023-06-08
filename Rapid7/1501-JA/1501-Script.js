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
            var heroSec = '<section class="hero-section"><div class="container-spz"><div class="form-wrap"><h2 class="form-heading">お問い合わせ</h2><div class="form-container"></div></div></div></section>';
            jQuery(heroSec).insertBefore('.rapid-contact-spz .pageContent');
            jQuery('.rapid-contact-spz .hero-section .form-wrap .form-container').append(jQuery('#formBlock'));
            wrappingEle();
            classAllocation();

            var cardtitle1, cardsubtitle1, cardimg1, cardurl1, cardtitle2, cardsubtitle2, cardimg2, cardurl2, dropValue, cardWrapper;
            var imgpath = '//res.cloudinary.com/spiralyze/image/upload/';
            jQuery('body').find('#thankyouText').html('<div class="inner-wrapper"><div class="img-wrapper"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="white"/><path d="M22.4 12L13.6 20.8L9.59998 16.8" stroke="#3B454A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><h4 class="title">ご連絡いただきありがとうございます。</h4><h5 class="sub-title">すぐに折り返しご連絡いたします。</h5></div>');
            jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock').append('<div class="card-inner-wrapper"></div>');
            jQuery('form#formBlock #contactType').on('click change', function () {
                dropValue = jQuery(this).val();
                if (dropValue == '20437') {
                    cardtitle1 = "サイバーセキュリティリスク管理とは";
                    cardsubtitle1 = "WHITEPAPER / GUIDE";
                    cardimg1 = imgpath + "f_auto/RAPID7/1504/%E3%82%B5%E3%82%A4%E3%83%8F%E3%82%99%E3%83%BC%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3%E3%83%AA%E3%82%B9%E3%82%AF%E7%AE%A1%E7%90%86%E3%81%A8%E3%81%AF_2x.jpg";
                    cardurl1 = "/ja/fundamentals/what-is-cybersecurity-risk-management/";
                    cardtitle2 = "プレスリリース＆ブログ";
                    cardsubtitle2 = "WHITEPAPER / GUIDE";
                    cardimg2 = imgpath + "f_auto/RAPID7/1504/%E3%83%95%E3%82%9A%E3%83%AC%E3%82%B9%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9_%E3%83%95%E3%82%99%E3%83%AD%E3%82%AF%E3%82%99_2x.jpg";
                    cardurl2 = "/ja/about/japan-blog-news/";
                } else if (dropValue == '20440') {
                    cardtitle1 = "Webアプリケーションに対するリスクの把握とコントロール";
                    cardsubtitle1 = "BRIEF / DATASHEET";
                    cardimg1 = imgpath + "v1686223626/rapid7/1504/_.webp";
                    cardurl1 = "https://www.brighttalk.com/webcast/19011/549577?utm_source=brighttalk-portal&utm_medium=web&utm_campaign=channel-page&utm_content=recorded";
                    cardtitle2 = "「Web アプリケーション/サービスの脆弱性を可能な限りシンプルに」";
                    cardsubtitle2 = "WHITEPAPER / GUIDE";
                    cardimg2 = imgpath + "v1686223627/rapid7/1504/__1.webp";
                    cardurl2 = "https://www.brighttalk.com/webcast/19011/561612?utm_source=brighttalk-portal&utm_medium=web&utm_campaign=channel-page&utm_content=recorded";
                } else if (dropValue == '20443') {
                    cardtitle1 = "侵害発生！その時SOCでは何が？ ";
                    cardsubtitle1 = "CUSTOMER STORY";
                    cardimg1 = imgpath + "v1686223626/rapid7/1504/soc.webp";
                    cardurl1 = "/ja/c/soc-timeline-of-attacks/";
                    cardtitle2 = "年MDRバイヤーズガイド";
                    cardsubtitle2 = "BRIEF / DATASHEET";
                    cardimg2 = imgpath + "v1686223626/rapid7/1504/mdr.webp";
                    cardurl2 = "https://information.rapid7.com/rs/411-NAK-970/images/MDR_Buyers_Guide_ja.pdf";
                } else if (dropValue == '20433') {
                    cardtitle1 = "クラウドセキュリティとは?";
                    cardsubtitle1 = "BRIEF / DATASHEET";
                    cardimg1 = imgpath + "f_auto/RAPID7/1504/%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%88%E3%82%99%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3%E3%81%A8%E3%81%AF__2x.jpg";
                    cardurl1 = "/ja/fundamentals/cloud-security/";
                    cardtitle2 = "クラウドネットワークセキュリティのベストプラクティス";
                    cardsubtitle2 = "SECURITY FUNDAMENTALS";
                    cardimg2 = imgpath + "f_auto/RAPID7/1504/%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%88%E3%82%99%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3%E3%81%AE%E3%83%98%E3%82%99%E3%82%B9%E3%83%88%E3%83%95%E3%82%9A%E3%83%A9%E3%82%AF%E3%83%86%E3%82%A3%E3%82%B9_2x.jpg";
                    cardurl2 = "/ja/fundamentals/cloud-network-security/";
                } else if (dropValue == '20448') {
                    cardtitle1 = "年MDRバイヤーズガイド";
                    cardsubtitle1 = "BRIEF / DATASHEET";
                    cardimg1 = imgpath + "v1686223627/rapid7/1504/mdr_1.webp";
                    cardurl1 = "https://information.rapid7.com/rs/411-NAK-970/images/MDR_Buyers_Guide_ja.pdf";
                    cardtitle2 = "侵害発生！その時SOCでは何が？";
                    cardsubtitle2 = "WHITEPAPER / GUIDE";
                    cardimg2 = imgpath + "v1686223628/rapid7/1504/soc_1.webp";
                    cardurl2 = "/ja/c/soc-timeline-of-attacks/";
                } else if (dropValue == '20450') {
                    cardtitle1 = "パッチの適用と問題の修正の効率化 ";
                    cardsubtitle1 = "USE CASE";
                    cardimg1 = imgpath + "f_auto/RAPID7/1504/%E3%83%8F%E3%82%9A%E3%83%83%E3%83%81%E3%81%AE%E9%81%A9%E7%94%A8%E3%81%A8%E5%95%8F%E9%A1%8C%E3%81%AE%E4%BF%AE%E6%AD%A3%E3%81%AE%E5%8A%B9%E7%8E%87%E5%8C%96_2x.jpg";
                    cardurl1 = "/ja/products/insightconnect/use-cases/streamline-patching-and-remediation/";
                    cardtitle2 = "脅威の検出の迅速化";
                    cardsubtitle2 = "USE CASE";
                    cardimg2 = imgpath + "f_auto/RAPID7/1504/%E8%84%85%E5%A8%81%E3%81%AE%E6%A4%9C%E5%87%BA%E3%81%AE%E8%BF%85%E9%80%9F%E5%8C%96_2x.jpg";
                    cardurl2 = "/ja/products/insightconnect/use-cases/accelerate-threat-hunting/";
                } else if (dropValue == '20434') {
                    cardtitle1 = "セキュリティプログラムの基本 ";
                    cardsubtitle1 = "BRIEF / DATASHEET";
                    cardimg1 = imgpath + "f_auto/RAPID7/1504/%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3%E3%83%95%E3%82%9A%E3%83%AD%E3%82%AF%E3%82%99%E3%83%A9%E3%83%A0%E3%81%AE%E5%9F%BA%E6%9C%AC_2x.jpg";
                    cardurl1 = "/ja/fundamentals/security-program-basics/";
                    cardtitle2 = "情報セキュリティにおけるリスク管理";
                    cardsubtitle2 = "TEMPLATE";
                    cardimg2 = imgpath + "f_auto/RAPID7/1504/%E6%83%85%E5%A0%B1%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E3%83%AA%E3%82%B9%E3%82%AF%E7%AE%A1%E7%90%86_2x.jpg";
                    cardurl2 = "/ja/fundamentals/information-security-risk-management/";
                } else if (dropValue == '21019') {
                    cardtitle1 = "【15分でわかる！シリーズ】8割超が満足したMDRのサービスとは？";
                    cardsubtitle1 = "PRODUCT VIDEO";
                    cardimg1 = imgpath + "v1686223628/rapid7/1504/158mdr_.webp";
                    cardurl1 = "https://www.brighttalk.com/webcast/19011/568603?utm_source=brighttalk-portal&utm_medium=web&utm_campaign=channel-page&utm_content=featured";
                    cardtitle2 = "XDR (Extended Detection and Response) とは何ですか?";
                    cardsubtitle2 = "BLOG";
                    cardimg2 = imgpath + "v1686223628/rapid7/1504/xdr_extended_detection_and_response_.webp";
                    cardurl2 = "/ja/fundamentals/extended-detection-response/";
                }
            });

            var intervalSet = setInterval(function () {
                if (jQuery(".rapid-contact-spz #formBlock #firstName").length > 0) {
                    clearInterval(intervalSet);
                    checkInputform();
                    jQuery('<p id="formTitle">お問い合わせはこちら</p>').insertBefore('.rapid-contact-spz #fieldInstruction');
                    jQuery('.rapid-contact-spz #fieldInstruction').text('全てのフィールドは必須項目です');
                    /*jQuery(".rapid-contact-spz #formBlock #jobLevel option:nth-child(1)").attr('value','').text('').hide();
                    jQuery(".rapid-contact-spz #formBlock #contactType option:nth-child(1)").attr('value','').text('').hide();
                    jQuery(".rapid-contact-spz #formBlock #contactTypeSecondary option:nth-child(1)").attr('value','').text('').hide();*/
                    jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-email"]').insertAfter('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-lastName"]');
                    jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-parent-companyName"]').insertAfter('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-email"]');
                    jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-companyName"]').insertAfter('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-email"]');
                    //jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock dl[input-name="parent-email"] label').text('Company Email');
                    jQuery('.rapid-contact-spz .form-wrap .form-container form#formBlock #optout label').text('Rapid7 の製品およびサービスに関するメールを希望しません。');
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
                    jQuery('<label for="contactTypeSecondary">選択する</label>').insertBefore('.rapid-contact-spz #contactTypeSecondary');
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
                    cardWrapper = '<h4 class="title">推奨リソース</h4>\
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
}, 300);
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
    jQuery("body").find('#formBlock #contactType, #formBlock #jobLevel').each(function () {
        if (jQuery(this).val() == "" || jQuery(this).val() == null) {
            jQuery(this).closest('dl').removeClass('focused');
        } else {
            jQuery(this).closest('dl').removeClass('focused').addClass('filled');
        }
    });
}