(function () {
    let bodyLoaded = setInterval(function () {
        const body = document.querySelector('body');
        if (body && !body.classList.contains('spz-2206')) {
            clearInterval(bodyLoaded);
            loadTest();
        }
    });

    function loadTest() {
        document.body.classList.add('spz-2206');

        if (window.location.pathname.indexOf('/db/vulnerabilities') > -1) {
            waitForElm('.off-canvas-wrapper .off-canvas-content .overlayText .longHero__content .button-container .hero-cta:last-child .hero-cta-subtext').then(function (elm) {

                document.querySelector('.longHero .longHero__content .button-container .hero-cta:last-child .button ').setAttribute('href', 'https://www.rapid7.com/solutions/unified-mdr-xdr-vm/');
                document.querySelector('.longHero .longHero__content .button-container .hero-cta:last-child .button ').textContent = 'Rapid7 MDR Services';

                let subText = setInterval(() => {
                    document.querySelector('.longHero .longHero__content .button-container .hero-cta:last-child .hero-cta-subtext').textContent = 'With Unlimited IR & VM';
                }, 10);

                setTimeout(() => {
                   clearInterval(subText); 
                }, 2000);
            });
        }
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