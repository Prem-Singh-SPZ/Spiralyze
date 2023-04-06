(function () {
    const content = document.createElement('script');
    content.src = '//information.rapid7.com/js/forms2/js/forms2.min.js';
    document.head.appendChild(content);
    content.onload = function () {
        if (document.querySelector('body .customerLogos') && !document.querySelector('body').classList.contains('spz-3401')) {
            document.body.classList.add('spz-3401');
            formLoad();
        }
    };

    // form append //
    function formLoad() {
        jQuery('.longHero .hub-hero-block .large-order-3').append('<div class="main-form"><div data-block="marketo"><div class="clearfix marketoForm"><div id="intro"><h2>Let&rsquo;s start the conversation</h2><p id="fieldInstruction" class="instructions">All fields are mandatory.</p></div><form id="mktoForm_6065"></form></div></div></div></div>');
        var mktoForm;
        var isValidCompanyEmail = false;
        MktoForms2.loadForm("//information.rapid7.com", "411-NAK-970", 6065);
        MktoForms2.whenReady(function (form) {
            // console.log('form ready');
            var thankYouWindow;
            var allowFreemail = false;
            var hasSubmitMessage = false;
            var hasUrlOverride = false;
            var opensNewWindow = false;
            mktoForm = form;

            mktoForm.onValidate(function (form) {
                // Validates company email if freemail class present
                if ((!isValidCompanyEmail) && (!allowFreemail)) {
                    // console.log('invalid? isValidCompanyEmail: ' + isValidCompanyEmail);
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
                                // console.log('valid');
                                isValidCompanyEmail = true;
                                mktoForm.submit();
                                return true;

                            }
                            // If all three checks are NOT met, throw a validation error message for the user to try again...
                            else {
                                // console.log('invalid');
                                // Show error message, pointed at VehicleSize element
                                var emailElem = mktoForm.getFormElem().find("#Email");
                                mktoForm.showErrorMessage("Must be valid company email.", emailElem);
                                return false;
                            }
                        }
                    });
                } else {
                    // console.log('valid? isValidCompanyEmail: ' + isValidCompanyEmail);
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
            jQuery('body').on("change", '#mktoForm_6065 select', function (event) {
                checkInputform();
                // enabledisableform(event);
                jQuery('.mktoFormRow[input-name = parent-State] .mktoFormCol .mktoFieldWrap').append("<span class='error-message'> </span>");
                if (jQuery(this).val() != '') {
                    jQuery(this).addClass('blackText');
                } else {
                    jQuery(this).removeClass('blackText');
                }
            });
            jQuery("body").on("focus", '#mktoForm_6065 input , #mktoForm_6065 select', function () {
                jQuery(this).closest('div').addClass('focused');
            }).on("blur", '#mktoForm_6065 input , #mktoForm_6065 select', function () {
                checkFilled();
                if (jQuery(this).val() == "" || jQuery(this).val() == null) {
                    jQuery(this).closest('div').removeClass('focused').addClass('invalid-field');
                }
            });

            if (document.querySelectorAll('#mktoForm_6065 .mktoButtonRow').length > 0) {
                document.querySelector('#mktoForm_6065 .mktoButtonRow').insertAdjacentHTML('beforebegin', '<div class="text-link">Please refer to our <a href="/privacy-policy/" class="customer-btn">Privacy Policy</a> or contact us at <a href="mailto:info@rapid7.com">info@rapid7.com</a> for more details.</div>');
            }

            var targetNodes = document.querySelectorAll('.mktoFieldWrap');
            var config = { childList: true, subtree: true };
            var callback = function (mutationsList, observer) {
                jQuery('.mktoFormCol').each(function () {
                    if (jQuery(this).find('.mktoError').length > 0 && jQuery(this).find('.mktoError').attr('style').indexOf('none') == -1) {
                        jQuery(this).find('.mktoFieldWrap').addClass('invalid-field');
                        jQuery(this).parent().addClass('error-field');
                    } else {
                        //jQuery('#mktoForm_6065 input, #mktoForm_6065 select').closest('div').removeClass('invalid-field');
                        jQuery(this).find('.mktoFieldWrap').removeClass('invalid-field');
                        jQuery(this).parent().removeClass('error-field');
                    }
                });
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
        jQuery(".main-form .mktoForm .mktoFormRow #Country option:nth-child(1)").text('');
        jQuery(".main-form .mktoForm .mktoFormRow #State option:nth-child(1)").text('');
        jQuery(".main-form .mktoForm .mktoFormRow #JobLevel option:nth-child(1)").text('');

        jQuery('form#mktoForm_6065 .mktoFormRow').each(function () {
            jQuery(this).removeAttr('input-name');
            if (jQuery(this).find('input,select,textarea').length > 0) {
                var currentID = jQuery(this).find('input,select,textarea').attr('name');
                jQuery(this).attr('input-name', 'parent-' + currentID);
                if (jQuery(this).find('input').length) {
                    let labelName = jQuery(this).find('input').attr('placeholder');
                    jQuery(this).find('label').text(labelName);
                }
                else if (jQuery(this).find('select').length) {
                    let labelName = jQuery(this).find('select').attr('name');
                    jQuery(this).find('label').text(labelName);
                }
            } else {
                jQuery(this).attr('input-name', 'parent-noinput');
            }
        });

        jQuery('.main-form .mktoForm .mktoFormRow[input-name="parent-JobLevel"]').find('label').text('Job Level');

    }
    function checkFilled() {
        jQuery("body").find('#mktoForm_6065 input , #mktoForm_6065 select').each(function () {
            if (jQuery(this).val().length > 0) {
                jQuery(this).parent().addClass('filled');
            }
            else {
                jQuery(this).parent().removeClass('filled');
            }
        });
    }
})();

