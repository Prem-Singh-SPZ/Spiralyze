(function () {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-2003')) {
            clearInterval(bodyInterval);
            bodyEle.classList.add('spz-2003');

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
            });
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
                    e.target.remove();
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

    // Add class 'safari' (used for cart scrollbar)
    if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
        document.body.classList.add('safari')
    }
})();