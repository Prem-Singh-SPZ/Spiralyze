(function () {
    let bodyLoaded = setInterval(function () {
        const body = document.querySelector('body');
        if (body && !body.classList.contains('spz-3203')) {
            clearInterval(bodyLoaded);
            loadTest();
        }
    });

    function loadTest() {
        document.body.classList.add('spz-3203');

        waitForElm('.mktoForm .mktoButtonRow .mktoButton').then(function (elm) {
            let subText = setInterval(() => {
                document.querySelector('#hero .left-side-content .html-block p:nth-child(2)').textContent = `Cloud Risk Complete enables teams to effectively prioritize risk with an attacker mindset based on exploitability, blast radius, and business context. Real-time visibility into your entire environment is delivered by Executive Risk View: a unified dashboard that provides the comprehensive visibility and context needed to track total risk across both cloud and on-premises assets and better understand organizational risk posture and trends. See it in action via our virtual demo.`;

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