var jQueryInterval = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQueryInterval);
        jQuery(document).ready(function () {
            if (!jQuery('body').hasClass('spz-111')) {
                jQuery('body').addClass('spz-111');
            }

            MktoForms2.whenReady(function (form) {
                jQuery("#Country").find('option:first-child').text('Choose a country');
                jQuery("#LblEmail").text('Company Email');
                removeColumn();
                jQuery('.mktoForm  input').removeAttr('placeholder');
            });

            jQuery("body").on("focus", '#mktoForm_4818 input , #mktoForm_4818 select', function () {
                jQuery(this).closest('div').addClass('focus');
            }).on("blur", '#mktoForm_4818 input , #mktoForm_4818 select', function () {
                jQuery(this).closest('div').removeClass('focus');

                if (jQuery(this).attr('id') == 'Email' || jQuery(this).attr('id') == 'Phone') {
                    if (jQuery(this).hasClass('mktoValid') && !jQuery(this).parent().find('.mktoError').is(':visible')) {
                        jQuery(this).closest('div').removeClass('invalid-field');
                        jQuery(this).closest('div').addClass('filled');
                    }
                    else {
                        jQuery(this).closest('div').addClass('invalid-field');
                        jQuery(this).closest('div').removeClass('filled');
                    }
                }
                else {
                    if (jQuery(this).val() == "" || jQuery(this).val() == null || jQuery(this).val() == '0') {
                    }
                    else {
                        jQuery(this).closest('div').removeClass('invalid-field');
                        jQuery(this).closest('div').addClass('filled');
                    }
                }
            });

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
    }, 2000);
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
