(function () {
    waitForElm('.off-canvas-wrapper .off-canvas-content .button.mdBtn.btn-secondary[data-element-label="product tour"]').then(function (elm) {
        loadTest();
    });

    function loadTest() {
        document.body.classList.add('spz-3202');

        document.querySelectorAll('.off-canvas-wrapper .off-canvas-content .button.mdBtn.btn-secondary[data-element-label="product tour"]').forEach(function (btnelem) {
            btnelem.textContent = "Tour the Product";
        });
    }

    // Generic
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
})();
