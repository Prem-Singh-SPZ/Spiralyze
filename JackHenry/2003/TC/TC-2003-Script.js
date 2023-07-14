(function () {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-2003')) {
            clearInterval(bodyInterval);
            waitForElm('.hs-content-path-contact-us form.hs-form-private .hs-form-field').then(function (elm) {
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
        if (document.querySelector('form.hs-form-private .hs_spz1 .input .hs-input')) {
            document.querySelector('form.hs-form-private .hs_spz1 .input .hs-input').setAttribute('value', '#2003_Contact_Us_Progressive_Form');
            document.querySelector('form.hs-form-private .hs_spz2 .input .hs-input').setAttribute('value', 'Control');
        }
    }
})();