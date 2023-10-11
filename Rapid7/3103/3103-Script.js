(function () {
    let bodyLoaded = setInterval(function () {
        const body = document.querySelector('body');
        if (body && !body.classList.contains('spz-3103')) {
            clearInterval(bodyLoaded);
            loadTest();
        }
    });

    function loadTest() {
        document.body.classList.add('spz-3103');

        waitForElm('.mktoForm .mktoButtonRow .mktoButton').then(function (elm) {
            let subText = setInterval(() => {
                document.querySelector('#hero .left-side-content .html-block p:nth-child(2)').textContent = `In this demo, you'll navigate through the Investigation experience within InsightIDR, the core technology available with Managed Threat Complete. Our unified next-gen SIEM and XDR solution offers transparency into investigations that provide you the flexibility to work alongside our elite experts (as much or as little as you desire), as well as access to information for quick reporting and stakeholder visibility. Managed Threat Complete offers organizations a true strategic partnership so that they know whatever happens, we’re here for them.`;
                document.querySelector('#hero .left-side-content .html-block > h3').textContent = `During the demo you’ll see:`;

                document.querySelector('.marketoForm #intro > h2').textContent = `Managed Threat Complete Demo`;
                document.querySelector('.marketoForm #intro > #fieldInstruction').textContent = `This demo is only available to watch on desktop.`;

                document.querySelector('.mktoForm .mktoButtonRow .mktoButton').textContent = `Watch Demo`;
                document.querySelector('.mktoForm .mktoButtonRow .mktoButton').classList.add('r7-icon-play-circled');
            }, 10);

            setTimeout(() => {
                clearInterval(subText);
            }, 1000);
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