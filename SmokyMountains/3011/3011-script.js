var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    if (window.location.href.indexOf("/checkout/step-one/") > -1) {
        var cookieName = "#3011_smoky_mountains_checkout_accordion_style_07022023"; var cookieValue = "1"; var myDate = new Date(); myDate.setDate(myDate.getDate() + 30); document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
        checkAvailable();
    }
});

function checkAvailable() {
    var checkLoad = setInterval(function () {
        var bodytag = document.querySelector('body');
        if (!bodytag.classList.contains("spz-sm-3011")) {
            clearInterval(checkLoad);
            bodytag.classList.add("spz-sm-3011");
            //console.log('checkAvailable');
            test3002_init();
        }
    });
}

function test3002_init() {
    //console.log('test3002_init');
    var hcUrgencyText = document.querySelector('.hc-main-notifications .hc-main-notifications__text');
    if (hcUrgencyText) {
        var textUpdated = setInterval(function () {
            if (!hcUrgencyText.classList.contains('text_updated')) {
                clearInterval(textUpdated);
                hcUrgencyText.innerHTML = '<strong>Act fast!</strong> Smoky Mountains properties are 43% booked for upcoming dates.';
                hcUrgencyText.classList.add('text_updated');
                // jQuery('.hc-field').addClass(jQuery(this).closest('input').attr('name'));
                document.querySelectorAll('.hc-field').forEach(function (v, i) {
                    if (v.querySelectorAll('input').length > 0) {
                        v.classList.add(v.querySelector('input').getAttribute('name'));
                    }
                })

                // 3011 Start
                jQuery('body.spz-sm-3011').on('click focus', '.hc-main__content .hc-field input, .hc-main__content .hc-field select', function () {
                    jQuery(this).closest('.hc-field').addClass('input-focused');
                    if (jQuery('#apt').closest('.hc-field').hasClass('input-focused')) {
                        jQuery('.hc-field__label[for="apt"]').text('Apt / Suite / Etc');
                    }
                });

                //input blur
                jQuery('body.spz-sm-3011').on('blur', '.hc-main__content .hc-field input, .hc-main__content .hc-field select', function () {
                    if (!$(this).val()) {
                        jQuery(this).closest('.hc-field').removeClass('input-focused');
                    }
                    if (jQuery('#apt').closest('.hc-field').hasClass('input-focused')) {
                        jQuery('.hc-field__label[for="apt"]').text('Apt / Suite / Etc');
                    } else {
                        jQuery('.hc-field__label[for="apt"]').text('Additional Address Info');
                    }
                });

                //label click/touch
                jQuery('body.spz-sm-3011').on('click', '.hc-main__content .hc-field label', function () {
                    jQuery(this).closest('.hc-field').addClass('input-focused');
                    if (jQuery('#apt').closest('.hc-field').hasClass('input-focused')) {
                        jQuery('.hc-field__label[for="apt"]').text('Apt / Suite / Etc');
                    }
                });

                jQuery('.hc-primary').addClass('active');

                jQuery('#cc_visa').attr('src', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/SmokyMountains/3011/assets/logo-Visa.png');
                jQuery('#cc_visa').attr('srcset', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/SmokyMountains/3011/assets/logo-Visa.png 2x');
                jQuery('#cc_master').attr('src', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/SmokyMountains/3011/assets/logo-Mastercard.png');
                jQuery('#cc_master').attr('srcset', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/SmokyMountains/3011/assets/logo-Mastercard.png 2x');
                jQuery('#cc_discover').attr('src', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/SmokyMountains/3011/assets/logo-Discover.png');
                jQuery('#cc_discover').attr('srcset', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/SmokyMountains/3011/assets/logo-Discover.png 2x');
                jQuery('#cc_amex').attr('src', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/SmokyMountains/3011/assets/logo-AmericanExpress.png');
                jQuery('#cc_amex').attr('srcset', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/SmokyMountains/3011/assets/logo-AmericanExpress.png 2x');
                jQuery('.hc-payment-secure__icon').after('<img class="secure_icon" src="https://res.cloudinary.com/spiralyze/image/upload/v1675934777/SmokyMountains/3011/assets/icon_secure.svg" alt="Secure Checkout" />');
                jQuery('.hc-payment-secure__icon').remove();
                jQuery('.hc-agree-secure__icon').after('<img class="secure_icon__agree" src="https://res.cloudinary.com/spiralyze/image/upload/v1675934777/SmokyMountains/3011/assets/icon_secure.svg" alt="Secure Checkout" />');
                jQuery('.hc-agree-secure__icon').remove();


                jQuery('#exp-month option:contains("--")').text('');
                jQuery('#exp-year option:contains("--")').text('');
                jQuery('#state option:contains("State")').text('');

                jQuery('#checkout-submit').attr('disabled', true);
                jQuery('#email2').closest('.hc-field').find('label').attr('for', 'email2');
                jQuery('#email2').closest('.hc-field').find('label').text('Verify email');
                jQuery('.hc-field__label[for="phone"]').text('Phone Number');
                jQuery('.hc-field__label[for="card-num"]').text('Credit Card Number');
                jQuery('.hc-field__label[for="exp-month"]').text('Exp MM');
                jQuery('.hc-field__label[for="exp-year"]').text('Exp YYYY');
                jQuery('.hc-field__label[for="sec-code"]').text('CVV');
                jQuery('.hc-field__label[for="apt"]').text('Additional Address Info');

                const userAgent = navigator.userAgent.toLowerCase();
                const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
                const isMobile = /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent);



                jQuery('#fname, #lname, #email, #email2, #phone').on("change paste keyup", function () {
                    if (jQuery('#fname').val() != '' && jQuery('#lname').val() != '' && jQuery('#email').val() != '' && jQuery('#email2').val() != '' && jQuery('#phone').val() != '') {
                        if (jQuery('.hc-primary').hasClass('active')) {
                            jQuery('.hc-primary').removeClass('active').addClass('data_filled');
                            jQuery('.hc-payment').addClass('active');
                            jQuery('.hc-payment__list').slideDown();
                            jQuery('.hc-payment__container').slideDown();
                            if (!isTablet && !isMobile) {
                                var element = document.querySelector(".hc-primary__email");
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                            if (jQuery('.hc-payment').hasClass('data_filled') && jQuery('.hc-billing').hasClass('data_filled')) {
                                jQuery('.hc-agree').addClass('active')
                            }
                        }
                    }
                    ctaEnable();
                });


                jQuery('#card-num, #book-form-card-name, #sec-code').on("change paste keyup", function () {
                    if (jQuery('#card-num').val() != '' && jQuery('#book-form-card-name').val() != '' && jQuery('#exp-month').val() != '' && jQuery('#exp-year').val() != '' && jQuery('#sec-code').val() != '') {
                        if (jQuery('.hc-payment').hasClass('active')) {
                            jQuery('.hc-payment').removeClass('active').addClass('data_filled');
                            jQuery('.hc-billing').addClass('active');
                            jQuery('.hc-billing__container').slideDown();
                            if (!isTablet && !isMobile) {
                                var element = document.querySelector(".hc-payment__card-name");
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                            if (jQuery('.hc-primary').hasClass('data_filled') && jQuery('.hc-billing').hasClass('data_filled')) {
                                jQuery('.hc-agree').addClass('active')
                            }
                        }
                    }
                    ctaEnable();
                });

                jQuery('#exp-month, #exp-year').change(function () {
                    if (jQuery('#card-num').val() != '' && jQuery('#book-form-card-name').val() != '' && jQuery('#exp-month').val() != '' && jQuery('#exp-year').val() != '' && jQuery('#sec-code').val() != '') {
                        if (jQuery('.hc-payment').hasClass('active')) {
                            jQuery('.hc-payment').removeClass('active').addClass('data_filled');
                            jQuery('.hc-billing').addClass('active');
                            jQuery('.hc-billing__container').slideDown();
                            if (!isTablet && !isMobile) {
                                var element = document.querySelector(".hc-payment__card-name");
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        }
                    }
                    ctaEnable();
                });

                jQuery('#street-address, #postal, #city, #state').on("change paste keyup", function () {
                    if (jQuery('#street-address').val() != '' && jQuery('#postal').val() != '' && jQuery('#city').val() != '' && jQuery('#state').val() != '') {
                        if (jQuery('.hc-billing').hasClass('active')) {
                            jQuery('.hc-billing').removeClass('active').addClass('data_filled');
                            jQuery('.hc-agree').addClass('active');
                            jQuery('.hc-agree__terms h3').slideDown();
                            jQuery('.hc-agree__cancellation').slideDown();
                            jQuery('#terms-wrapper > div').slideDown();
                            jQuery('#terms-wrapper > input, #terms-wrapper > label').css({ "opacity": "1", "visibility": "visible", "height": "auto" });
                            if (!isTablet && !isMobile) {
                                var element = document.querySelector("#city");
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        }
                    }
                    ctaEnable();
                });

                jQuery('#state').change(function () {
                    if (jQuery('#street-address').val() != '' && jQuery('#postal').val() != '' && jQuery('#city').val() != '' && jQuery('#state').val() != '') {
                        if (jQuery('.hc-billing').hasClass('active')) {
                            jQuery('.hc-billing').removeClass('active').addClass('data_filled');
                            jQuery('#checkout-submit').attr('disabled', false);
                            jQuery('.hc-agree').addClass('active');
                            jQuery('.hc-agree__terms h3').slideDown();
                            jQuery('.hc-agree__cancellation').slideDown();
                            jQuery('#terms-wrapper > div').slideDown();
                            jQuery('#terms-wrapper > input, #terms-wrapper > label').css({ "opacity": "1", "visibility": "visible", "height": "auto" });
                            if (!isTablet && !isMobile) {
                                var element = document.querySelector("#city");
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        }
                    }
                    ctaEnable();
                });


                jQuery('#terms-box').change(function () {
                    if (this.checked) {
                        if (jQuery('.hc-agree').hasClass('active')) {
                            jQuery('#checkout-submit').attr('disabled', false);
                            jQuery('.hc-agree').removeClass('active').addClass('data_filled');
                        } else if (!jQuery('.hc-agree').hasClass('active') && !jQuery('.hc-agree').hasClass('data_filled')) {
                            jQuery(this).prop('checked', false);
                        }
                    }
                });

                jQuery('.hc-billing__row:nth-child(3)').prependTo('.hc-billing__container');
                var fieldUpdated = setInterval(function () {
                    clearInterval(fieldUpdated);
                    jQuery('.hc-billing__row:nth-child(2)').prependTo('.hc-billing__container');
                }, 10);

                var meta = document.createElement('meta');
                meta.name = "viewport";
                meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, minimum-scale=1";
                document.getElementsByTagName('head')[0].appendChild(meta);

            }
        });
    }
}

function ctaEnable() {
    if (jQuery('#fname').val() && jQuery('#lname').val() && jQuery('#email').val() && jQuery('#email2').val() && jQuery('#phone').val() && jQuery('#card-num').val() && jQuery('#book-form-card-name').val() && jQuery('#exp-month').val() && jQuery('#exp-year').val() && jQuery('#sec-code').val() && jQuery('#street-address').val() && jQuery('#postal').val() && jQuery('#city').val() && jQuery('#state').val()) {
        jQuery('.hc-agree').addClass('active');
        jQuery('#checkout-submit').attr('disabled', false);
    }
    else {
        jQuery('#checkout-submit').attr('disabled', true);
        // if (jQuery('.hc-agree').hasClass('active')) {
        //     jQuery('.hc-agree').removeClass('active')
        // }
        // if (jQuery('.hc-agree').hasClass('data_filled')) {
        //     jQuery('.hc-agree').removeClass('data_filled')
        // }
    }
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}