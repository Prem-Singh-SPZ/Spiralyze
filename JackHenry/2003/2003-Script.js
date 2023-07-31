(function () {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-2003a')) {
            clearInterval(bodyInterval);
            bodyEle.classList.add('spz-2003a');

            // if (location.href.indexOf('support') > -1) {
            // waitForElm('.hs-content-path-contact-us-support form.hs-form-private .hs-form-field').then(function (elm) {
            //     //swap fields
            //     document.querySelector('.field:nth-child(5)').after(document.querySelector('.hs_phone'));

            //     document.querySelector('.hs_how_would_you_like_to_be_contacted_').insertAdjacentHTML('afterend', `<div class="add-comments-div"><a href="javascript:void(0)" class="addcomment">+ Add Comments</a> </div>`);

            //     document.querySelector('.hs_zip').classList.add('hidden-spz');
            //     document.querySelector('.hs_phone').classList.add('hidden-spz');
            //     document.querySelector('.hs_product_name').classList.add('hidden-spz');
            //     document.querySelector('.hs_i_am_a_current_customer').classList.add('hidden-spz');
            //     document.querySelector('.hs_how_would_you_like_to_be_contacted_').classList.add('hidden-spz');
            //     document.querySelector('.add-comments-div').classList.add('hidden-spz');
            //     document.querySelector('.hs_comment').classList.add('sub-hidden-spz');

            //     focusFields();
            // });
            // }

            // else if (location.href.indexOf('other') > -1) {
            // waitForElm('.hs-content-path-contact-us-other form.hs-form-private .hs-form-field').then(function (elm) {
            //     //swap fields
            //     // document.querySelector('.field:nth-child(5)').after(document.querySelector('.hs_phone'));

            //     document.querySelector('.hs_reasons_for_reaching_out').insertAdjacentHTML('afterend', `<div class="add-comments-div"><a href="javascript:void(0)" class="addcomment">+ Add Comments</a> </div>`);

            //     document.querySelector('.hs_zip').classList.add('hidden-spz');
            //     document.querySelector('.hs_reasons_for_reaching_out').classList.add('hidden-spz');
            //     document.querySelector('.add-comments-div').classList.add('hidden-spz');
            //     document.querySelector('.hs_comment').classList.add('sub-hidden-spz');

            //     focusFields();
            // });
            // }

            if (location.href.indexOf('sales') > -1) {
                waitForElm('.hs-content-path-contact-us-sales form.hs-form-private .hs-form-field').then(function (elm) {
                    //swap fields
                    if (document.querySelector('form.hs-form-private .hs-form-field.hs_phone ')) {
                        document.querySelector('.field.hs_email').after(document.querySelector('.field.hs_company'));
                        document.querySelector('.hs_phone').classList.add('hidden-spz');
                    }

                    document.querySelector('.hs_comment').insertAdjacentHTML('beforebegin', `<div class="add-comments-div"><a href="javascript:void(0)" class="addcomment">+ Add Comments</a> </div>`);

                    document.querySelector('.hs_zip').classList.add('hidden-spz');
                    document.querySelector('.hs-fieldtype-checkbox.field.hs-form-field').classList.add('hidden-spz');
                    // document.querySelector('.hs_i_am_a_current_customer').classList.add('hidden-spz');
                    // document.querySelector('.hs_how_would_you_like_to_be_contacted_').classList.add('hidden-spz');
                    document.querySelector('.add-comments-div').classList.add('hidden-spz');
                    document.querySelector('.hs_comment').classList.add('sub-hidden-spz');

                    if (document.querySelectorAll('.hs-fieldtype-checkbox.field.hs-form-field .input .hs-form-checkbox').length == 1) {
                        document.querySelector('.hs-fieldtype-checkbox.field.hs-form-field .input').classList.add('single-input');
                    }

                    focusFields();
                    submitTestDetails();
                });
            }
            else {
                waitForElm('.hs-content-path-contact-us form.hs-form-private .hs-form-field').then(function (elm) {
                    //swap fields
                    document.querySelector('.hs_company').after(document.querySelector('.hs_phone'));

                    document.querySelector('.hs_capability_types.hs-fieldtype-checkbox').insertAdjacentHTML('afterend', `<div class="add-comments-div"><a href="javascript:void(0)" class="addcomment">+ Add Comments</a> </div>`);

                    document.querySelector('.hs_zip').classList.add('hidden-spz');
                    document.querySelector('.hs_phone').classList.add('hidden-spz');
                    document.querySelector('.hs_capability_types').classList.add('hidden-spz');
                    document.querySelector('.add-comments-div').classList.add('hidden-spz');
                    document.querySelector('.hs_comment').classList.add('sub-hidden-spz');

                    focusFields();

                    submitTestDetails();
                });
            }
        }
    });


    // On input focus add class on closest parent .field class
    function focusFields() {
        document.querySelectorAll('.hs-input').forEach(function (el) {
            el.addEventListener('focus', function () {
                checkValid();
            });

            el.addEventListener('blur', function () {
                setTimeout(() => {
                    checkValid();
                }, 1000);
            });

            //comment field logic
            window.addEventListener("click", function (e) {
                if (e.target.classList.contains("addcomment")) {
                    e.target.parentElement.remove();
                    if (document.querySelector('.sub-hidden-spz')) {
                        document.querySelector('.sub-hidden-spz').classList.remove('sub-hidden-spz');
                    }
                }
            });

            //Check if fields are valid
            function checkValid() {
                if (el.closest('.field').querySelector('.error') != null || (el.getAttribute('value') == '' || el.getAttribute('value') == null || el.getAttribute('value') == undefined)) {
                    el.closest('.field').classList.remove('field-valid');
                } else {
                    el.closest('.field').classList.add('field-valid');
                }

                if (document.querySelectorAll('.field-valid').length >= 3) {
                    document.querySelectorAll('.hidden-spz').forEach(function (el) {
                        el.classList.remove('hidden-spz');
                    });
                }
            }
        });
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
            observer.observe(document, { attributes: true, childList: true, subtree: true, characterData: true });
        });
    }

    function submitTestDetails() {
        if (document.querySelector('form.hs-form-private .hs_spz1 .input .hs-input')) {
            document.querySelector('form.hs-form-private .hs_spz1 .input .hs-input').setAttribute('value', '#2003a_Contact_Us_Progressive_Form');
            document.querySelector('form.hs-form-private .hs_spz2 .input .hs-input').setAttribute('value', 'Variant');
        }
    }

    // Add class 'safari' (used for cart scrollbar)
    if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
        document.body.classList.add('safari')
    }
})();