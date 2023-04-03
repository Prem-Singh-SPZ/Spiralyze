var intr = setInterval(function () {
    if (document.querySelector('body .productOverview') && !document.querySelector('body').classList.contains('spz-3302')) {
        clearInterval(intr);
        document.body.classList.add('spz-3302');
    }

    const ctaSectionHtml = ctaButtonsSection();
    // CTA Section
    if (document.querySelectorAll('.spz-3302 .productOverview > section.customerLogos').length > 0) {
        document.querySelector('.spz-3302 .productOverview ').insertAdjacentHTML('beforeend', ctaSectionHtml);
    }

    // 3 Reasons Section
    if (document.querySelectorAll('.spz-3302 .pageContent > .richTextBlockWrap').length > 0) {
        document.querySelector('.spz-3302 .pageContent > .richTextBlockWrap').classList.add('reason-trust-section');

        document.querySelector('.spz-3302 .pageContent > .richTextBlockWrap .medium-10.medium-offset-1.large-8.large-offset-2.cell.pageBlock__content').classList.remove('medium-offset-1');
        document.querySelector('.spz-3302 .pageContent > .richTextBlockWrap .medium-10.large-8.large-offset-2.cell.pageBlock__content').classList.remove('large-offset-2');

        if (document.querySelector('.spz-3302 .reason-trust-section .grid-x.wrapper ol')) {
            document.querySelector('.spz-3302 .reason-trust-section .grid-x.wrapper ol').insertAdjacentHTML('afterend', ctaSectionHtml);
            document.querySelector('.spz-3302 .reason-trust-section .grid-x.wrapper').insertAdjacentHTML('beforebegin', ctaSectionHtml);
        }
        // Reviews Section
        if (document.querySelectorAll('.spz-3302 .reason-trust-section .grid-x.wrapper').length > 0) {
            document.querySelector('.spz-3302 .reason-trust-section .grid-x.wrapper').insertAdjacentHTML('afterend', reviewSection());
        }

    }
    moveElement('.pageContent .customerLogos', '.off-canvas-wrapper .off-canvas-content .longHero');

}, 100);



const content = document.createElement('script');
content.src = '//information.rapid7.com/js/forms2/js/forms2.min.js';
document.head.appendChild(content);

content.onload = function () {
    formLoad();
};

const ctaButtonsSection = () => {
    return `<div class="spz-cta-section">
                <div class="button-container">
                <div class="second-cta">
                <a href="#mktoForm_2857" class="button btn-primary mdBtn spz-demo-btn" data-element-block="Product Wheel Block"
                    data-element-location="hero" data-element-label="watch demo">
                    WATCH DEMO
                </a>
                <span>See how it all works</span>
            </div>
                </div>
            </div>`;
};

const reviewSection = () => {
    return `<section class=review-section>
                <div class=container>
                    <div class=item-wrapper>
                        <div class=comment-wrapper>
                            <img class="br-logo" alt="TechValidate" src="https://res.cloudinary.com/spiralyze/image/upload/v1675317581/RAPID7/3301%20%7C%20Rapid7%20%7C%20XDR%20vs%20Comp%20%7C%20TechValidate%20Reviews/techvalidate-logo.svg">
                        </div>
                    </div>
                    <div class=item-wrapper>
                        <div class=comment-wrapper>
                            <p class=comment>
                                Rapid7's InsightIDR finally lets me sleep at night. Everything is being covered, even when I am not in the office. If something happens, I'll be notified. It really helped us to understand a lot of things that happen in our environment/network and made us feel more confident about our security posture.
                            <h5 class=profession>IT Administrator</h5>
                            <span class=profession-desc>Medium Enterprise Industrial Manufacturing Company</span>
                        </div>
                    </div>
                    <div class=item-wrapper>
                        <div class=comment-wrapper>
                            <p class=comment>
                            Rapid7 InsightIDR has been a wonderful tool that gives us insight into our user behaviors, as well as clearly alerting us to potential threats that exist in our network. Our team has become more efficient with fewer false positives and improved investigation times.
                            <h5 class=profession>Josh Petrucka</h5>
                            <span class=profession-desc>Security Analyst, Conexus Credit Union</span>
                        </div>
                    </div>
                    <div class=item-wrapper>
                        <div class=comment-wrapper>
                            <p class=comment>
                                Rapid7 InsightIDR vastly improved the visibility of our network, endpoints, and weak spots. We now have the ability to respond to threats we didn't see before we had InsightIDR.
                            <h5 class=profession>Robert Middleton</h5>
                            <span class=profession-desc>Network Administrator, CU4SD</span>
                        </div>
                    </div>
                </div>
            </section>`;
}

// form append //
function formLoad() {
    jQuery('.productOverview .grid-x .large-order-1').append('<div class="main-form"><div data-block="marketo"><div class="clearfix marketoForm"><div id="intro"><h2>See XDR in Action</h2><p id="fieldInstruction" class="instructions">All fields are mandatory.</p></div><form id="mktoForm_2857"></form></div></div></div></div>');
    var mktoForm;
    var isValidCompanyEmail = false;
    MktoForms2.loadForm("//information.rapid7.com", "411-NAK-970", 2857);
    MktoForms2.whenReady(function (form) {
        console.log('form ready');
        var thankYouWindow;
        var allowFreemail = false;
        var hasSubmitMessage = false;
        var hasUrlOverride = false;
        var opensNewWindow = false;
        mktoForm = form;

        mktoForm.onValidate(function (form) {
            // Validates company email if freemail class present
            if ((!isValidCompanyEmail) && (!allowFreemail)) {
                console.log('invalid? isValidCompanyEmail: ' + isValidCompanyEmail);
                mktoForm.submittable(false);
                var email = jQuery('#Email').val();
                var emailRequest =
                {
                    email: email
                };
                jQuery.ajax({
                    url: '/api/netsuite/CallNetsuiteEmailValidation',
                    data: JSON.stringify(emailRequest),
                    type: 'POST',
                    method: 'POST',
                    contentType: 'application/json',
                    dataType: 'json',
                    crossDomain: true,
                    success: function (data) {
                        var ips_val = data.ips;
                        var eme_val = data.eme;
                        var emdf_val = data.emdf;

                        // If all three checks are true, email is valid and lets move to the next validation state
                        if (ips_val == 'true' && eme_val == 'true' && emdf_val == 'true') {
                            console.log('valid');
                            isValidCompanyEmail = true;
                            mktoForm.submit();
                            return true;

                        }
                        // If all three checks are NOT met, throw a validation error message for the user to try again...
                        else {
                            console.log('invalid');
                            // Show error message, pointed at VehicleSize element
                            var emailElem = mktoForm.getFormElem().find("#Email");
                            mktoForm.showErrorMessage("Must be valid company email.", emailElem);
                            return false;
                        }
                    }
                });
            } else {
                console.log('valid? isValidCompanyEmail: ' + isValidCompanyEmail);
                mktoForm.submittable(true);
            }
        });
        mktoForm.onSubmit(function (form) {
            if (opensNewWindow) {
                thankYouWindow = window.open('');
            }
        });

        mktoForm.onSuccess(function (values, followUpUrl) {
            window.dataLayer.push({ 'event': 'form_submit_success' });
            var overrideUrl = '';
            if (opensNewWindow) {
                if (hasUrlOverride) {
                    //set the provided URL as the follow up URL and open in a new window
                    thankYouWindow.document.location = overrideUrl;
                    document.getElementById("followupUrl").setAttribute('href', overrideUrl);
                } else {
                    //open the follow up URL in a new window
                    thankYouWindow.document.location = followUpUrl;
                    document.getElementById("followupUrl").setAttribute('href', followUpUrl);
                }
            } else if (!opensNewWindow && hasUrlOverride) {
                //set the provided URL as the follow up URL
                window.location = overrideUrl;
                document.getElementById("followupUrl").setAttribute('href', overrideUrl);
            } else if (hasSubmitMessage || opensNewWindow) {
                //hides form after submit, replaces with thank you message
                form.getFormElem().hide();
                document.getElementById('thankyouText').style.display = 'block';
                return false;
            } else {
                // inherits marketo settings
                return true;
            }
        });
        checkInputform();
        checkFilled();

        if (document.querySelectorAll('#mktoForm_2857 .mktoButtonRow').length > 0) {
            document.querySelector('#mktoForm_2857 .mktoButtonRow').insertAdjacentHTML('beforebegin', '<div class="text-link">Please refer to our <a href="/privacy-policy/" target="_blank" class="customer-btn">Privacy Policy</a> or contact us at <a href="mailto:info@rapid7.com">info@rapid7.com</a> for more details.</div>');
        }

        var targetNodes = document.querySelectorAll('.mktoFieldWrap');
        var config = { childList: true, subtree: true };
        var callback = function (mutationsList, observer) {
            jQuery('.mktoFormCol').each(function () {
                if (jQuery(this).find('.mktoError').length > 0 && jQuery(this).find('.mktoError').attr('style').indexOf('none') == -1) {
                    jQuery(this).find('.mktoFieldWrap').addClass('invalid-field');
                } else {
                    //jQuery('#mktoForm_2857 input, #mktoForm_2857 select').closest('div').removeClass('invalid-field');
                    jQuery(this).find('.mktoFieldWrap').removeClass('invalid-field');
                }
            });
            checkInputform();
            checkFilled();
        };
        var observer = new MutationObserver(callback);
        for (var i = 0; i < targetNodes.length; i++) {
            observer.observe(targetNodes[i], config);
        }
    });
}

function moveElement(sourceElm, targetLoc) {
    const f = document.createDocumentFragment();
    if (document.querySelector(sourceElm) != null) {
        f.appendChild(document.querySelector(sourceElm));
        document.querySelector(targetLoc).appendChild(f);
    }
}
function checkInputform() {
    jQuery('form#mktoForm_2857 .mktoFormRow').each(function () {
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
    jQuery("body").find('#mktoForm_2857 input , #mktoForm_2857 select').each(function () {
        if (jQuery(this).val().length > 0) {
            jQuery(this).parent().addClass('filled');
        }
        else {
            jQuery(this).parent().removeClass('filled');
        }
    });
}


jQuery('body').on("change", '#mktoForm_2857 select', function (event) {
    checkInputform();
    // enabledisableform(event);
    jQuery(".main-form .mktoForm .mktoFormRow #State option:nth-child(1)").text('State');
    jQuery('.mktoFormRow[input-name = parent-State] .mktoFormCol .mktoFieldWrap').append("<span class='error-message'> </span>");
    if (jQuery(this).val() != '') {
        jQuery(this).addClass('blackText');
    } else {
        jQuery(this).removeClass('blackText');
    }
});
jQuery("body").on("focus", '#mktoForm_2857 input , #mktoForm_2857 select', function () {
    jQuery(this).closest('div').addClass('focused').removeClass('invalid-field');
}).on("blur", '#mktoForm_2857 input , #mktoForm_2857 select', function () {
    checkFilled();
    if (jQuery(this).val() == "" || jQuery(this).val() == null) {
        jQuery(this).closest('div').removeClass('focused').addClass('invalid-field');
    }
});