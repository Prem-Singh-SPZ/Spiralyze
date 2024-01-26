let bodyLoad = setInterval(function () {
    const bodyEle = document.querySelector('body');
    if (bodyEle) {
        clearInterval(bodyLoad);
        // Set test class
        document.body.classList.add("spz-5002");

        waitForElm('#demo-modal .modal__container .mktoHasWidth.mktoField').then(function () {
            loadTest();
        });

        function loadTest() {
            document.querySelector('#demo-modal').classList.add('modal-container-spz');
            document.querySelector('#demo-modal .modal__container .demo-modal__col2 .demo-modal__form').insertAdjacentHTML('afterbegin', `<div class="logo-spz-bg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1706090193/ABCFitnessIgnite/5002/ignite-logo-bg.svg" class="ls-img">
            </div>`);

            // Add class 'spz-email-label' to parent .mktoFormCol of email label
            document.querySelector('#demo-modal #LblEmail').closest('.mktoFormCol').classList.add('spz-email-label');
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