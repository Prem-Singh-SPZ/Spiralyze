(function () {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-4010')) {
            clearInterval(bodyInterval);
            waitForElm('.hs-landing-page.hs-page form.hs-form-private .hs-form-field').then(function (elm) {
                submitTestDetails();
            });
        }
    });

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
        if (document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input')) {
            document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').setAttribute('value', '#4010__Product(Paid)_SPZ_Baseline_Long_Page');
            document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input').setAttribute('value', 'Control');
        }
    }
})();