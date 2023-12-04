
let bodyLoad = setInterval(function () {
    const bodyEle = document.querySelector('body');
    if (bodyEle) {
        clearInterval(bodyLoad);

        // Set test class
        document.body.classList.add("spz-6006");

        waitForElm('.hbspt-form .hs_email').then(function () {
            loadTest();
        });

        function loadTest() {
            waitForElm('.integrations-logo-slider').then(function () {
                submitTestDetails();
            });
        }

        //Passing test details to hidden fields
        function submitTestDetails() {
            if (document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input')) {
                document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').setAttribute('value', '#6005__Demo(Paid)_Testimonial');
                document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input').setAttribute('value', 'Variant');
            }
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
    }
});

