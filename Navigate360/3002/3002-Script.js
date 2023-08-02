(function () {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-3002')) {
            clearInterval(bodyInterval);
            document.body.classList.add('spz-3002');
            waitForElm('.et_pb_row.et_pb_row_23').then(function (elm) {
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
        document.querySelector('.et_pb_row.et_pb_row_23').setAttribute('id', 'spz-form-container');
        document.querySelectorAll('#page-container #main-header .header_button').forEach(element => {
            element.setAttribute('href', 'javascript:void(0)');
            element.addEventListener('click', function () {
                let form = document.getElementById('spz-form-container');
                let headerOffset;
                window.innerWidth < 1024 ? headerOffset = 0 : headerOffset = 105;
                let elementPosition = form.getBoundingClientRect().top;
                let offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            });
        });
    }
})();