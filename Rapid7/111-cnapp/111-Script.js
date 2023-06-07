var jQueryInterval = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQueryInterval);
        jQuery(document).ready(function () {
            if (!jQuery('body').hasClass('spz-111')) {
                jQuery('body').addClass('spz-111');
            }

            waitForElm('#mktoForm_6455 [input-name="parent-LastName"]').then(function (elm) {
                removeColumn();

                jQuery(".mktoButton").click(function () {
                    jQuery('#mktoForm_6455 input, #mktoForm_6455 select').each(function (index, value) {
                        if (jQuery(this).val() == "" || jQuery(this).val() == null || jQuery(this).val() == '0') {
                            jQuery(this).closest('div').addClass('invalidValidation');
                            jQuery(this).closest('div').removeClass('valid');
                        }
                        else {
                            jQuery(this).closest('div').removeClass('invalidValidation');
                            jQuery(this).closest('div').addClass('valid');
                        }
                    });

                    let checkEmailError = setInterval(() => {   
                        if (jQuery('#Email').hasClass('mktoValid') && !jQuery('#Email').parent().find('.mktoError').is(':visible')) {
                            jQuery('#Email').closest('div').removeClass('invalidValidation');
                            jQuery('#Email').closest('div').addClass('valid');
                        }
                        else {
                            jQuery('#Email').closest('div').addClass('invalidValidation');
                            jQuery('#Email').closest('div').removeClass('valid');
                        }
                    }, 50);

                    setTimeout(() => {
                        clearInterval(checkEmailError);
                    }, 3000);
                });
            });

            jQuery("body").on("focus", '#mktoForm_6455 input , #mktoForm_6455 select', function () {
                jQuery(this).closest('div').addClass('focus');
            }).on("blur", '#mktoForm_6455 input , #mktoForm_6455 select', function () {
                jQuery(this).closest('div').removeClass('focus');

                if (jQuery(this).attr('id') == 'Email') {
                    if (jQuery(this).hasClass('mktoValid') && !jQuery(this).parent().find('.mktoError').is(':visible')) {
                        jQuery(this).closest('div').removeClass('invalidValidation');
                        jQuery(this).closest('div').addClass('valid');
                    }
                    else {
                        jQuery(this).closest('div').addClass('invalidValidation');
                        jQuery(this).closest('div').removeClass('valid');
                    }
                }
                else {
                    if (jQuery(this).val() == "" || jQuery(this).val() == null || jQuery(this).val() == '0') {
                        jQuery(this).closest('div').addClass('invalidValidation');
                        jQuery(this).closest('div').removeClass('valid');
                    }
                    else {
                        jQuery(this).closest('div').removeClass('invalidValidation');
                        jQuery(this).closest('div').addClass('valid');
                    }
                }
            });
            // jQuery("#mktoForm_6455 select").change(function () {
            //     addOption();
            // });
            waitForElm('[input-name="parent-State"]').then(function (elm) {
                removeColumn();
            });
        });
    }
});

function removeColumn() {
    let column = setInterval(() => {
        jQuery('.mktoLabel:contains(":")').each(function () {
            jQuery(this).html(jQuery(this).html().split(":").join(""));
        });
    }, 100);
    setTimeout(() => {
        clearInterval(column);
    }, 3000);
    // addOption();
}

function waitForElm(selector) {
    return new Promise(function (resolve) {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(function (mutations) {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document, {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: true,
        });
    });
}

window.onload = function () {
    jQuery('body').addClass('loaded');
};
