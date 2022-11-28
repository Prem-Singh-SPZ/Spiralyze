const prodThumbs = document.createElement('script');
// prodThumbs.src = 'http://127.0.0.1:5500/AWR/5002/product_thumbs.js';
prodThumbs.src = 'https://res.cloudinary.com/spiralyze/raw/upload/f_auto/AWR/5002/product_thumbs.js';
document.head.appendChild(prodThumbs);
let url = location.href;
let api_active = false;
function loadTest() {
    if (document.querySelectorAll('hos-quick-checkout-payment-box').length == 0) {
        document.querySelector('body').classList.add("spz-5006");
        setText('.register-section .right-form-box .form-header span', 'Billing Information');
    }
    formFields();
    cartSection();
    setText('.register-section .right-form-box .form-header > img', '//res.cloudinary.com/spiralyze/image/upload/v1659964955/AWR/5001/file-text.svg', 'IMAGE');
    if (document.querySelector('.register-section .right-form-box .form-header > img')) {
        document.querySelector('.register-section .right-form-box .form-header > img').classList.remove('mt-auto');
    }
    document.querySelector('body').classList.add("loaded");
}

// Cart block (title, products) Starts
function cartSection() {
    const cartInt = setInterval(() => {
        const cartContent = document.querySelector('body .cart-header');
        const is_payment = document.querySelectorAll('hos-quick-checkout-payment-box').length == 1;

        if (cartContent != null && document.querySelector('.card-body-box .product-name') != null) {
            document.querySelector('.payment-gateway.mobile-only').parentElement.classList.add('pg-checkout-wrapper-spz');

            if (!is_payment) {
                document.body.classList.remove('payment-pg-spz');
                jQuery('.payment-gateway.mobile-only').hide();
                if (window.innerWidth > 1024) {
                    moveElement('.pg-checkout-wrapper-spz .col-lg-5.desktop-only', '.pg-checkout-wrapper-spz');
                }
                moveElement('.payment-gateway.mobile-only', '.pg-checkout-wrapper-spz');

            } else if (is_payment) {
                document.body.classList.add('payment-pg-spz');
                if (window.innerWidth <= 1024) {
                    jQuery('.payment-gateway.mobile-only').show();
                    moveElement('.pg-checkout-wrapper-spz .col-lg-7.payment-gateway', '.pg-checkout-wrapper-spz');
                    // jQuery('.order-summary__button').trigger('click');

                    resetCartToControl();
                }
            }

            jQuery('.cart-header .cart-note-div .cart-note').text('Order Summary');

            jQuery('.payment-box .card-body .media-icon').removeAttr('class').addClass('col-2 col-sm-2 col-md-2 col-lg-2 col-xl-3 text-center media-icon spz-cart');
            jQuery('.payment-box .card-body .product-details').removeAttr('class').addClass('col-9 col-sm-8 col-md-8 col-lg-6 col-xl-6 product-details PL-10');
            jQuery('.payment-box .card-body .flex-center-cls').removeAttr('class').addClass('col-3 col-sm-4 col-md-2 col-lg-3 col-xl-3 row flex-center-cls');
            jQuery('.payment-box .card-body .flex-center-cls .offbill-price-cls').removeAttr('class').addClass('col-12 p-none offbill-price-cls PR-10');
            jQuery('.payment-box .card-body .flex-center-cls button.non-href-links').html(`
                <img class="cross-btn-remove" src='//res.cloudinary.com/spiralyze/image/upload/v1660553382/AWR/5001/close.svg' />
                <img class="cross-btn-remove-hover" style="opacity: 0;" src='//res.cloudinary.com/spiralyze/image/upload/v1667971579/AWR/5002/close_hover.svg' />
            `).parent().addClass('cross-btn-spz');

            jQuery('.cart-header .tax-div > .col-12.row.mobile-only').remove();
            jQuery('.cart-header .tax-div > .col-6.row.desktop-only, .cart-header .tax-div > .col-md-3.col-xl-5.desktop-only').removeAttr('class').addClass('col-12 row');
            jQuery('.cart-header .tax-div > .col-12.row .product-taxes').removeAttr('class').addClass('col-10 col-md-9 text-right product-taxes');
            jQuery('.cart-header .tax-div > .col-12.row .col-12.col-md-6').removeAttr('class').addClass('col-2 col-md-3 text-right to-right p-none PR-7');

            jQuery('.cart-header .sub-total-box .align-subtotal').removeClass('col-xl-5').addClass('col-xl-6');
            jQuery('.cart-header .sub-total-box .value-subtotal').removeClass('col-xl-7').addClass('col-xl-6');
            jQuery('.card.border-light.mb-3').removeClass('border-light mb-3');
            jQuery('.product-details .product-desc button.btn').addClass('edit-button-spz');

            if (window.innerWidth < 1025) {
                jQuery('.cart-list .payment-box .ets-box .sub-total-box .total').removeAttr('class').addClass('col-7 total');
                jQuery('.cart-list .payment-box .ets-box .sub-total-box .parent-align').removeAttr('class').addClass('col-5 row parent-align');
                jQuery('.cart-list .payment-box .ets-box .sub-total-box .align-subtotal').removeClass('col-md-12 col-12').addClass('col-6 col-md-5');
                jQuery('.cart-list .payment-box .ets-box .sub-total-box .value-subtotal').removeClass('col-md-12 col-12').addClass('col-6 col-md-7');
            }

            if ((window.location.pathname.indexOf("nyc") == 1 || window.location.pathname.split('/').length > 3) && window.location.pathname.indexOf("nashville") == 1) {
                jQuery('.cart-list .payment-box').addClass('nyc-page-spz');

                if (window.location.pathname.indexOf("nashville") == 1) {
                    jQuery('.cart-list .payment-box').removeClass('nyc-page-spz');
                    jQuery('.cart-list .payment-box .sub-total-box.margin-offbill').addClass('nashville-page-spz');
                }

                if (window.innerWidth > 1025) {
                    jQuery('.cart-list .payment-box .ets-box .sub-total-box .total').removeAttr('class').addClass('col-6 total');
                    jQuery('.cart-list .payment-box .ets-box .sub-total-box .parent-align').removeAttr('class').addClass('col-6 row parent-align');
                }
            }

            if (!is_payment) {
                document.querySelectorAll('.cart-header .cart-list').forEach((cartList, k) => {
                    cartList.querySelectorAll('.product-name').forEach((cardItem, i) => {
                        if (relProducts) {
                            relProducts.filter(item => {
                                if (cardItem.children[0] && cardItem.children[0].innerText === item.productFilterName) {
                                    if (cardItem.closest('.card-body').querySelector('.cart-image')) {
                                        cardItem.closest('.card-body').querySelector('.cart-image').src = item.thumbImage;
                                        cardItem.closest('.card-body').querySelector('.cart-image').alt = item.productFilterName;
                                    }

                                    if (window.innerWidth < 768 && document.querySelectorAll(`.cart-list:nth-of-type(${k + 1}) .ets-box .card-body-box .card-body:nth-of-type(${i + 1}) .prn-spz`).length == 0) {
                                        // Set product name after the product image for mobile
                                        const prName = cardItem.textContent.trim();
                                        if (document.querySelector(`.cart-list:nth-of-type(${k + 1}) .ets-box .card-body-box .card-body:nth-of-type(${i + 1}) .media-icon`) && prName != null) {
                                            document.querySelector(`.cart-list:nth-of-type(${k + 1}) .ets-box .card-body-box .card-body:nth-of-type(${i + 1}) .media-icon`).insertAdjacentHTML('afterend', `<h6 _ngcontent-c8="" class="col-8 col-sm-9 product-name prn-spz LH-20"> <strong _ngcontent-c8="">${prName}</strong>`);
                                        }
                                    } else if (window.innerWidth >= 768 && document.querySelector(`.cart-list:nth-of-type(${k + 1}) .ets-box .card-body-box .card-body:nth-of-type(${i + 1}) .prn-spz`)) {
                                        document.querySelector(`.cart-list:nth-of-type(${k + 1}) .ets-box .card-body-box .card-body:nth-of-type(${i + 1}) .prn-spz`).remove();
                                    }


                                    // Remove product icon in cart
                                    if (document.querySelectorAll(`.cart-list:nth-of-type(${k + 1}) .ets-box .card-body-box .card-body:nth-of-type(${i + 1}) > .cross-btn-spz`).length == 0) {
                                        setTimeout(function () {
                                            moveElement(`.cart-list:nth-of-type(${k + 1}) .ets-box .card-body-box .card-body:nth-of-type(${i + 1}) .cross-btn-spz`, `.cart-list:nth-of-type(${k + 1})  .ets-box .card-body-box .card-body:nth-of-type(${i + 1})`);
                                        }, 50);
                                    }

                                    // Placing 'On Bill' after product name if exist
                                    if (cardItem.parentElement != null) {
                                        const statusElm = cardItem.parentElement.querySelector('.statusBtnStyle');
                                        if (statusElm && statusElm.textContent.trim().toLocaleLowerCase() == 'on bill') {
                                            const status = statusElm.textContent.trim();
                                            if (window.innerWidth > 767 && cardItem.parentElement.querySelectorAll('.status-style-spz.desktop').length == 0) {
                                                cardItem.insertAdjacentHTML('afterend', `<div class="status-style-spz desktop">${status}</div>`);
                                            } else if (cardItem.parentElement.querySelector('.prn-spz') && cardItem.parentElement.querySelectorAll('.status-style-spz.mobile').length == 0) {
                                                cardItem.parentElement.querySelector('.prn-spz').insertAdjacentHTML('beforeend', `<div class="status-style-spz mobile col-6 col-sm-6 LH-20">${status}</div>`);
                                            }
                                        }
                                    }

                                    return true;
                                }
                            });
                        }
                    });
                });

                relatedProdSection();
            }

            clearInterval(cartInt);

        } else if (document.querySelector('.other-services-spz')) {
            // document.querySelector('.other-services-spz').classList.add('d-none');
            document.querySelector('.other-services-spz').remove();
        }
    }, 100);
}

function relatedProdSection() {
    const cartRelatedInt = setInterval(() => {
        if (document.querySelectorAll('.cart-link-div').length > 0) {
            clearInterval(cartRelatedInt);
            if (document.querySelector('.cart-header .cart-link-div')) {

                // if (document.querySelectorAll('.other-services-spz').length == 0) {
                document.querySelector('.checkout-plans form').insertAdjacentHTML('beforeend', '<div class="other-services-spz"></div>');
                moveElement('.cart-header .cart-link-div', '.checkout-plans form .other-services-spz');
                // }

                if (document.querySelectorAll('.other-services-spz .cart-link-div').length > 0) {
                    document.querySelector('.other-services-spz .cart-link-div').classList.add('row');
                }
                document.querySelector('.other-services-spz .cart-other-link').innerText = 'You may be interested in other services';
                otherProduct();
                document.querySelector('.other-services-spz').classList.remove('d-none');
            }
            jQuery('.cart-list .payment-box.content-section').addClass('loaded');
            renewModal();
            scrollShadow();
            progressiveForm();
        }

        if (document.querySelectorAll('hos-quick-checkout-payment-box').length > 0) {
            clearInterval(cartRelatedInt);
        }
    }, 100);
}


function otherProduct() {
    jQuery('.other-services-spz .cart-link-div > div:not(:nth-of-type(1)) > .col-12.mar-15-0').removeClass('col-12').addClass('row');
    jQuery('.other-services-spz .cart-link-div > div:not(:nth-of-type(1)) > .row .col-7').removeClass('col-7 text-align-center').addClass('col-10 text-left');
    jQuery('.other-services-spz .cart-link-div > div > .row').removeClass('row flex-align-center').addClass('row-grid');
    jQuery('.other-services-spz .cart-link-div > div > .row .col-3').removeClass('col-3').addClass('col-12');

    jQuery('.other-services-spz .cart-link-div > div:not(:nth-of-type(1))').each(function (i, cardItem) {
        // Product Title
        const pName = jQuery(this).find('.row-grid > div.col-10 p:first-child b').text().trim() || jQuery(this).find('.row-grid .pr-name-spz').text().trim();
        if (pName != null) {
            jQuery(this).find('.row-grid > div.col-10 p:first-child').text(pName).addClass('pr-name-spz');
        }

        // Product Price
        const pPrice = jQuery(this).find('.row-grid .pr-price-spz .pr-price-d').text().trim() || jQuery(this).find('.row-grid > div.col-10 p:last-child span').text().trim();
        if (pPrice != null) {
            jQuery(this).find('.row-grid > div.col-10 p:last-child').html('<span class="pr-price-d">' + pPrice + '</span>' + '<span> Per Month</span>').addClass('pr-price-spz');
        }

        if (relProducts) {
            relProducts.filter(item => {
                if (jQuery(this).find('.pr-name-spz') && jQuery(this).find('.pr-name-spz').text() === item.productFilterName) {
                    let imgPath = item.productImage;
                    if (window.innerWidth < 1201) {
                        imgPath = item.productMobileImage;
                    } else {
                        imgPath = item.productImage;
                    }

                    jQuery(this).find('.image-thumb .other-service-img').attr('src', imgPath);
                    jQuery(this).find('.image-thumb .other-service-img').attr('alt', item.productFilterName);

                    jQuery(this).find('.cart-link').html('Add to Cart <img src="//res.cloudinary.com/spiralyze/image/upload/v1660035881/AWR/5001/chevron.svg" class="img-fluid" />')
                    return true;
                }
            });
        }
    });
    jQuery("#cartcollapse").collapse('show');
}
// Cart block (title, products) Ends


function renewModal() {
    const cartClInt = setInterval(() => {
        if (document.querySelectorAll('.cart-header .cart-link-div')) {
            clearInterval(cartClInt);
            window.addEventListener('click', function (e) {
                if (e.target.classList.contains('edit-button-spz') && document.querySelectorAll('.card-title-spz').length == 0) {
                    document.querySelector('.modal .modal-dialog').classList.add('edit-renew-modal-spz', 'modal-dialog-centered');
                    document.querySelector('.modal-custom-header .modal-header').insertAdjacentHTML('afterbegin', `<div class="card-title-spz">With Us, Your Home's Protected</div>`);
                    document.querySelector('.modal-custom-header .modal-header button.close').innerHTML = `<img class="btn-close-spz" src="//res.cloudinary.com/spiralyze/image/upload/v1660636546/AWR/5001/close-dark.svg" />`;
                    document.querySelector('.modal-custom-header .auto-renew').classList.add('col-12');
                    document.querySelector('.edit-renew-modal-spz .card-body-box .card-body > .col-2').classList.add('col-12', 'col-sm-2');
                    document.querySelector('.edit-renew-modal-spz .card-body-box .card-body > .col-10').classList.add('col-12', 'col-md-10');
                    jQuery('.modal-custom-header .auto-renew label').append(`<span><img class="ccb-spz" src="//res.cloudinary.com/spiralyze/image/upload/v1660025774/AWR/5001/check.svg" /></span>`);
                    jQuery('.edit-renew-modal-spz .card-body-box .product-details').removeClass('col-md-8').addClass('col-12');
                    jQuery('.edit-renew-modal-spz .card-body-box .col-10 .col-md-4').removeClass('col-md-4').addClass('col-12');
                }
            });
        }
    }, 100);
}

// Related to Form Starts
// Floating label for form fields
function formFields() {
    const selector = 'body .register-section .general-information .form-group input.form-control';
    jQuery(document).on('focus', selector, function () {
        jQuery(this).closest('.form-group').addClass('active typing');
    });
    jQuery(document).on('blur focusout keyup', selector, function (e) {
        inputFilled(this);
        progressiveForm();
    });
    jQuery(document).on('focusout', selector, function (e) {
        jQuery(this).closest('.form-group').removeClass('typing');
    });
    jQuery(document).on('blur focusout keyup focus change', selector, function (e) {
        setTimeout(function () {
            jQuery(selector).each(function (i) {
                isInputValid(this);
            });
        }, 10);

        setTimeout(function () {
            jQuery('.form-control.ng-valid').closest('.form-group').removeClass('error');
        }, 300);
        progressiveForm();
    });

    // Add error icon after inputs
    jQuery(`<a href="javascript:void(0)" class="error-ico-spz" tabindex="-1" data-toggle="tooltip" style="display: none;">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1660111008/AWR/5001/error.svg" />
            </a>`).insertAfter(jQuery(selector), jQuery('.ng-select'));

    // Add error icon after ng-select
    jQuery(`<a href="javascript:void(0)" class="error-ico-spz" tabindex="-1" data-toggle="tooltip" style="display: none;">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1660111008/AWR/5001/error.svg" />
        </a>`).insertAfter(jQuery('.ng-select'));

    if (document.querySelectorAll('.error-msg-spn-spz').length == 0 && document.querySelector('[name="firstName"] ~ .error-ico-spz')) {
        document.querySelector('[name="firstName"] ~ .error-ico-spz').insertAdjacentHTML('afterend', `<small _ngcontent-c7="" class="form-text text-danger error-msg-spn-spz" id="emailHelp">First name is required</small>`);
        document.querySelector('[name="lastName"] ~ .error-ico-spz').insertAdjacentHTML('afterend', `<small _ngcontent-c7="" class="form-text text-danger" id="emailHelp">Last name is required</small>`);
        document.querySelector('[name="email"] ~ .error-ico-spz').insertAdjacentHTML('afterend', `<small _ngcontent-c7="" class="form-text text-danger" id="emailHelp">Please enter valid email address</small>`);
        document.querySelector('[name="phoneNumber"] ~ .error-ico-spz').insertAdjacentHTML('afterend', `<small _ngcontent-c7="" class="form-text text-danger" id="emailHelp">Please enter valid phone number</small>`);
        document.querySelector('[name="streetNumber"] ~ .error-ico-spz').insertAdjacentHTML('afterend', `<small _ngcontent-c7="" class="form-text text-danger" id="emailHelp">Address is required</small>`);
        document.querySelector('[name="city"] ~ .error-ico-spz').insertAdjacentHTML('afterend', `<small _ngcontent-c7="" class="form-text text-danger" id="emailHelp">City address is required</small>`);
    }
    window.addEventListener('click', function (e) {
        jQuery(selector).each(function (i) {
            if (jQuery(this).closest('.form-control.ng-invalid.is-invalid').length > 0) {
                jQuery(this).closest('.form-group').addClass('error');
            } else {
                if (jQuery('.form-control.ng-invalid').length == 0 && document.querySelectorAll('.agreeHelp').length == 0 && !document.querySelector('#authorizeinfo-check').checked) {
                    document.querySelector('#service-address .highlight-checkbox').insertAdjacentHTML('afterend', `<small _ngcontent-c7="" class="form-text text-danger agreeHelp" id="agreeHelp">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1660293241/AWR/5001/error-white.svg" />
                        Please check this box if you want to proceed
                    </small>`);
                }
                // jQuery(this).closest('.form-group').removeClass('error');
            }
        });

        // Check if agreement is checked else show error
        if (e.target.classList.contains('enroll-now')) {
            if (document.querySelector('#authorizeinfo-check')) {
                if (!document.querySelector('#authorizeinfo-check').checked && document.querySelectorAll('#agreeHelp').length == 0 && document.querySelectorAll('.pad-btn-checkout.disable-cls').length == 0) {
                    document.querySelector('#service-address .highlight-checkbox').insertAdjacentHTML('afterend', `<small _ngcontent-c7="" class="form-text text-danger agreeHelp" id="agreeHelp">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1660293241/AWR/5001/error-white.svg" />
                        Please check this box if you want to proceed
                    </small>`);
                } else if (document.querySelector('#authorizeinfo-check').checked && document.querySelectorAll('#agreeHelp').length != 0) {
                    jQuery('.agreeHelp').remove();
                }
            }

            checkIfBundled();
        }

        if (e.target.classList.contains('authorizeinfo-check')) {
            setTimeout(function () {
                if (document.querySelector('#authorizeinfo-check').checked && document.querySelectorAll('#agreeHelp').length != 0) {
                    document.querySelector('#agreeHelp').remove();
                }
            }, 10);
        }

        moveElement('.form-content-spz .row:nth-of-type(3) .form-group:nth-of-type(2) label', '.form-content-spz .row:nth-of-type(3) .form-group:nth-of-type(2)');
    });


    if (document.querySelectorAll('.form-wrapper-spz').length == 0 && document.querySelectorAll('.right-form-box .general-information').length > 0) {
        removeInputFields();

        document.querySelector('.register-section .right-form-box .form-border .py-4.px-4').classList.add('form-wrapper-spz');
        document.querySelector('.register-section .form-wrapper-spz > div > div').classList.add('form-content-spz');

        // Wait for CTA button to show/load
        waitForElement('.pad-btn-checkout').then(function () {
            // Move terms and CTA inside form wrapper
            moveElement('#service-address', '.form-content-spz');
            moveElement('.pad-btn-checkout', '.form-content-spz');


            // Add styles to CTA button
            document.querySelector('.pad-btn-checkout .enroll-now').removeAttribute('style');
            document.querySelector('.pad-btn-checkout .enroll-now').innerHTML = 'Select Payment Method <img src="//res.cloudinary.com/spiralyze/image/upload/v1660035881/AWR/5001/chevron.svg" class="img-fluid" />';
            document.querySelector('#service-address label').innerHTML = 'By clicking the checkbox you are confirming that you are the homeowner, & your name is on the water bill. <span>(Required*)</span>';

            // Enable CTA and Back button
            // document.querySelector('.pad-btn-checkout').classList.remove('disable-cls');
            // document.querySelector('.pad-btn-checkout .enroll-now').classList.remove('pointer-events-none');

            // Make zip code filled if zip code present
            if (document.querySelector('[name="Zipcode"]').value) {
                document.querySelector('[name="Zipcode"]').closest('.form-group').classList.add('filled');
            }

            if (document.querySelector('[name="state"]').classList.contains('disabled')) {
                document.querySelector('[name="state"]').closest('.form-group').classList.add('filled');
            }

            // Add back button before CTA
            if (document.querySelectorAll('.back-spz').length == 0) {
                document.querySelector(".pad-btn-checkout").insertAdjacentHTML("afterbegin", `
                    <a href="javascript:void(0)" class="back-spz bottom-back-btn" onclick="history.back()">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1660033776/AWR/5001/arrow-back.svg" class="img-fluid" />Back
                    </a>`);
            }

            document.querySelector('[name="Zipcode"]').closest('.form-group').firstElementChild.innerText = 'Zip Code';

            if (document.querySelectorAll('#agreeHelp').length > 0) {
                document.querySelector('#agreeHelp').remove();
            }
        });
        document.querySelector('input[name="streetNumber"]').parentElement.parentElement.classList.add('progress-step');
    }

    jQuery('input.form-control').each(function (i) {
        inputFilled(this)
    });


    // https://app.asana.com/0/1111420164829058/1203064311743271/f
    jQuery(document).on('keyup', '[name="streetNumber"]', function () {
        const snInt = setInterval(() => {
            if (jQuery(this).val().length == 0 && jQuery('.showDropDownWrapper .search-drop-down').length > 0) {
                jQuery('.showDropDownWrapper .search-drop-down').remove();
            }
        }, 100);

        setTimeout(() => {
            clearInterval(snInt);
        }, 1000);
    })
    progressiveForm();
}

//Progress form
function progressiveForm() {
    if (document.querySelectorAll('.form-content-spz .form-group.filled:not(.error)').length > 5) {
        document.querySelector('.progress-step').classList.add('active');
        document.querySelector('.pad-btn-checkout').classList.remove('disable-cls');
        document.querySelector('.pad-btn-checkout .enroll-now').classList.remove('pointer-events-none');
    }
}

// Check if input is FILLED
function inputFilled(el) {
    if (jQuery(el).val() == null || jQuery(el).val() == '') {
        jQuery(el).closest('.form-group').removeClass('active filled');
    } else {
        jQuery(el).closest('.form-group').addClass('active filled');
    }
}

// Check if input is VALID
function isInputValid(el) {
    if (jQuery(el).closest('.form-control.ng-invalid.ng-touched').length > 0) {
        jQuery(el).closest('.form-group').addClass('error');
    } else if (jQuery(el).closest('.form-control.ng-valid').length > 0) {
        jQuery(el).closest('.form-group').removeClass('error');
        jQuery(el).find('.error-ico-spz').remove();
    }
}

// Remove form fields
function removeInputFields() {
    if (document.querySelectorAll('.general-information [name="confirmEmail"]').length > 0) {
        document.querySelector('[name="confirmEmail"]').closest('.form-group').remove();
        document.querySelector('[name="streetName"]').closest('.form-group').remove();
    }
}
// Related to Form Ends

// Generic
history.pushState = (function (f) {
    return function pushState() {
        let ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };
})(history.pushState);
history.replaceState = (function (f) {
    return function replaceState() {
        let ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };
})(history.replaceState);

window.addEventListener('popstate', function () {
    window.dispatchEvent(new Event('locationchange'));
});
window.addEventListener('locationchange', function () {
    url = location.href;
    urlCheck(url);
});

urlCheck(url);
function urlCheck(url) {
    let testURL = 'https://www.awrusa.com/';
    if (window.location.pathname.indexOf("user/checkout") > -1) {
        testURL = window.location.href;
    }
    if (isSameUrl(url, testURL, true)) {
        waitForElement('.checkout-plans').then(function (element) {
            loadTest();
console.log('test loaded');
        });
        setTimeout(function () {
            const pgInt = setInterval(() => {
                if (document.querySelectorAll('hos-quick-checkout-payment-box').length > 0) {
                    clearInterval(pgInt);
                    removeTest();
                    api_active = true;
                }
            }, 1000);

            document.querySelector('body').classList.add("loaded");

            if (document.querySelectorAll('hos-quick-checkout-payment-box').length == 0) {
                window.addEventListener("resize", function () {
                    loadTest();
                });
            }

            if (document.querySelector('.cart-list .payment-box.content-section')) {
                jQuery('.cart-list .payment-box.content-section').addClass('loaded');
            }

            waitForElement('.pace.pace-inactive').then(function () {
                cartSection();

                if (document.querySelectorAll('hos-quick-checkout-payment-box').length > 0 && window.innerWidth <= 1024) {
                    resetCartToControl();
                }
            });
        }, 3000);
        if (document.querySelectorAll('.checkout-plans').length > 0) {
            loadTest();
        }
    } else {
        removeTest();
    }
}

function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#") ?
        currentUrl.slice(0, currentUrl.indexOf("#")) :
        currentUrl;
    specifiedUrl = specifiedUrl.includes("#") ?
        specifiedUrl.slice(0, specifiedUrl.indexOf("#")) :
        specifiedUrl;
    if (!includeQueryParams)
        currentUrl = currentUrl.includes("?") ?
            currentUrl.slice(0, currentUrl.indexOf("?")) :
            currentUrl;
    if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
        return true;
    return false;
}

function removeTest() {
    document.querySelector('body').classList.remove("spz-5006");

    if (document.querySelectorAll('hos-quick-checkout-payment-box').length == 1 && window.innerWidth < 1025) {
        resetCartToControl();
    }
}

function resetCartToControl() {
    jQuery('.cart-list .payment-box .ets-box .sub-total-box .total').removeAttr('class').addClass('col-6 total');
    jQuery('.cart-list .payment-box .ets-box .sub-total-box .parent-align').removeAttr('class').addClass('col-6 row parent-align');

    jQuery('.cart-list .payment-box .ets-box .sub-total-box .align-subtotal').removeClass('col-6 col-md-5').addClass('col-md-12 col-12');
    jQuery('.cart-list .payment-box .ets-box .sub-total-box .value-subtotal').removeClass('col-6 col-md-7').addClass('col-md-12 col-12');

    jQuery('.cart-header .tax-div > .col-12.row .product-taxes').removeAttr('class').addClass('col-8 text-right product-taxes');
    jQuery('.cart-header .tax-div > .col-12.row .col-12.col-md-6').removeAttr('class').addClass('col-4 text-right to-right p-none PR-7');

    jQuery('.payment-box .card-body .product-details').removeAttr('class').addClass('col-7 col-md-8 col-xl-7 product-details PL-10');
    jQuery('.payment-box .card-body .flex-center-cls').removeAttr('class').addClass('col-3 col-md-3 col-xl-4 row flex-center-cls');
}

function moveElement(sourceElm, targetLoc) {
    const f = document.createDocumentFragment();
    if (document.querySelector(sourceElm) != null) {
        f.appendChild(document.querySelector(sourceElm));
        document.querySelector(targetLoc).appendChild(f);
    }
}

function waitForElement(selector) {
    return new Promise(function (resolve, reject) {
        var element = document.querySelector(selector);

        if (element) {
            resolve(element);
            return;
        }

        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                var nodes = Array.from(mutation.addedNodes);
                for (var node of nodes) {
                    if (node.matches && node.matches(selector)) {
                        observer.disconnect();
                        resolve(node);
                        return;
                    }
                };
            });
        });

        observer.observe(document.documentElement, { childList: true, subtree: true });
    });
}

// Set text, image etc.
function setText(el, value, type = 'STRING') {
    if (document.querySelector(el)) {
        const tg = document.querySelector(el);
        if (type == 'IMAGE') {
            tg.src = value;
        } else {
            tg.innerText = value;
        }
    }
}

function cloneElement(source, target) {
    if (document.querySelector(source) && document.querySelector(target)) {
        const sc = document.querySelector(source);
        const clone = sc.cloneNode(true);
        document.querySelector(target).appendChild(clone);
    }
}

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('cart-link')) {
        otherProduct();
        jQuery('.cart-list .payment-box.content-section').removeClass('loaded');

        // For Cart Section changes
        let observer = new MutationObserver(cartSection);
        observer.observe(document.querySelector('.cart-header'), {
            subtree: true,
            childList: true,
            attributeOldValue: true
        });
        setTimeout(function () {
            observer.disconnect();
        }, 1000);
        const paceLoadInt = setInterval(function () {
            if (document.querySelectorAll('.spz-cart').length == 0) {
                loadTest();
                clearInterval(paceLoadInt);
            }
        }, 100);
    }

    if (e.target.classList.contains('cross-btn-remove') || e.target.classList.contains('cross-btn-remove-hover') || e.target.classList.contains('ga-track-remove-product')) {
        otherProduct();
        scrollShadow();
        setTimeout(function () {
            if (document.querySelector('.card-body-box .product-name') == null) {
                document.querySelector('.other-services-spz').remove();
                if (document.querySelectorAll('.other-services-spz').length == 0) {
                    loadTest();
                }
            }
        }, 100);
    }

    let freInt;
    if (api_active && (e.target.getAttribute('for') == 'frequency-Annual-desktop' || e.target.getAttribute('for') == 'frequency-Monthly-desktop')) {
        clearInterval(freInt);
        if (document.querySelectorAll('hos-quick-checkout-payment-box').length == 0) {
            jQuery('.cart-list .payment-box.content-section').removeClass('loaded');
            freInt = setInterval(function () {
                if (document.querySelectorAll('.spz-cart').length == 0) {
                    // waitForElement('.product-details .product-desc').then(function () {
                    cartSection()
                    clearInterval(freInt);
                    // });
                    jQuery('.cart-list .payment-box.content-section').addClass('loaded');
                }
            }, 100);
        }
    }

    // Checkout -> Payment - On back press reload variant.
    if (e.target.classList.contains('btn') && e.target.classList.contains('btn-link') && e.target.classList.contains('navigate-link')) {
        jQuery('.cart-list .payment-box.content-section').removeClass('loaded');
        setTimeout(function () {
            loadTest();
        }, 500);
    }

    setTimeout(() => {
        if (document.querySelectorAll('.pace.pace-inactive').length == 1 && document.querySelector('.cart-list .payment-box.content-section')) {
            jQuery('.cart-list .payment-box.content-section').addClass('loaded');
        }
    }, 500);
});


// Cart bottom shadow (scroll)
function scrollShadow() {
    if (window.innerWidth > 1023 && document.querySelectorAll('.cart-header .payment-box .card-body-box').length > 0) {
        let cardBodyCont = document.querySelector('.cart-header .payment-box .card-body-box');
        contentScrollHeight = cardBodyCont.scrollHeight - cardBodyCont.offsetHeight;

        if (contentScrollHeight > 0) {
            cardBodyCont.style.boxShadow = `0 -150px 40px -150px rgba(218, 218, 218, 0.8) inset`;
        } else {
            cardBodyCont.style.boxShadow = 'none';
        }

        cardBodyCont.addEventListener('scroll', function () {
            currentScroll = this.scrollTop * (contentScrollHeight);
            let opacity = this.scrollTop / (contentScrollHeight);

            // if ((1 - currentScroll) <= 2000) {
            cardBodyCont.style.boxShadow = `0 -150px 40px -150px rgba(218, 218, 218, ${1 - opacity}) inset`;
            // } else {
            // cardBodyCont.style.boxShadow = `0px 150px 40px -150px rgba(218, 218, 218, ${opacity}) inset`;
            // }
        });
    }
}


prodThumbs.onload = function () {
    loadTest();
    progressiveForm();
}

// Add class 'safari' (used for cart scrollbar)
if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.querySelector('body').classList.add('safari')
}


function checkIfBundled() {
    const bnInt = setInterval(() => {
        if (document.querySelector('dialog-holder dialog-wrapper .modal .bundle-detail')) {
            document.body.classList.remove('loaded');
            document.querySelector('hos-root hos-checkout-cart > div:last-child').classList.add('loading');
            jQuery('.btn.btn-primary.block.full-width.app-btn, dialog-holder dialog-wrapper .modal').on('click', function () {
                document.querySelector('.form-wrapper-spz').classList.remove('form-wrapper-spz');
                location.reload()
            });
            clearInterval(bnInt);
        }
    }, 500);
}


// // IGNORE - This is to stop error in spz-1001
document.body.insertAdjacentHTML('beforeend', '<div class="feedback-container slick-initialized"></div>');