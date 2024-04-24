(function () {
    document.body.classList.add('spz-4014');
    let identifyPage = window.location.pathname.replace('/', '').replace('.html', '');
    document.body.classList.add(identifyPage);

    const assetURL = '//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/eptura/4014/';

    const rightBullets = [
        {
            pageName: "website-proxyclick-demo",
            value_prop1_img: assetURL + "icon_proxyclick_01.svg",
            value_prop1_copy: "Optimize <br>guest experience",
            value_prop2_img: assetURL + "icon_proxyclick_02.svg",
            value_prop2_copy: "Improve <br>safety & security",
            value_prop3_img: assetURL + "icon_proxyclick_03.svg",
            value_prop3_copy: "Decrease <br>operational costs",
        },
        {
            pageName: "website-managerplus-demo",
            value_prop1_img: assetURL + "icon_managerplus_01.svg",
            value_prop1_copy: "Improve asset availability",
            value_prop2_img: assetURL + "icon_managerplus_02.svg",
            value_prop2_copy: "Extend asset longevity",
            value_prop3_img: assetURL + "icon_managerplus_03.svg",
            value_prop3_copy: "Save time",
        },
        {
            pageName: "website-archibus-demo",
            value_prop1_img: assetURL + "icon_archibus_01.svg",
            value_prop1_copy: "Boost workplace productivity",
            value_prop2_img: assetURL + "icon_archibus_02.svg",
            value_prop2_copy: "Maximize your space",
            value_prop3_img: assetURL + "icon_archibus_03.svg",
            value_prop3_copy: "Get real-time data",
        },
        {
            pageName: "website-spaceiq-demo",
            value_prop1_img: assetURL + "hand_icon_1.svg",
            value_prop1_copy: "Space <br>planning",
            value_prop2_img: assetURL + "security_icon_4.svg",
            value_prop2_copy: "Support hybrid working",
            value_prop3_img: assetURL + "security_icon_3.svg",
            value_prop3_copy: "Uncover <br>smarter data",
        },
        {
            pageName: "website-ioffice-demo",
            value_prop1_img: assetURL + "icon_ioffice_01.svg",
            value_prop1_copy: "Maximize <br>your space",
            value_prop2_img: assetURL + "icon_ioffice_02.svg",
            value_prop2_copy: "Boost office productivity",
            value_prop3_img: assetURL + "icon_ioffice_03.svg",
            value_prop3_copy: "Uncover <br>smarter data",
        }
    ];

    waitForElm('.mktoForm .mktoFormRow .mktoField').then(function () {
        document.body.classList.add('spz-4014');
        loadTest();
    });

    function loadTest() {
        updatePageContent();

        // Add class 'safari' 
        if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
            document.body.classList.add('safari')
        }
    }

    function updatePageContent() {
        waitForElm('.body-wrapper #form-over #form_title').then(function () {
            rightBullets.forEach(function (con) {
                if (identifyPage == con.pageName) {

                    document.querySelector('#form-over #form_title').textContent = "Get a demo";

                    document.querySelector('#form-over #form_title').insertAdjacentHTML('afterend', `
                    <div class="value-props-section">
                    <div class="value-props-wrapper">
                        <div class="value-prop">
                            <div class="prop-img"><img src="${con.value_prop1_img}" alt="${con.value_prop1_copy}"></div>
                            <div class="prop-copy">${con.value_prop1_copy}</div>
                        </div>
                        <div class="line"></div>
                        <div class="value-prop"><div class="prop-img"><img src="${con.value_prop2_img}" alt="${con.value_prop2_copy}"></div>
                        <div class="prop-copy">${con.value_prop2_copy}</div></div>
                        <div class="line"></div>
                        <div class="value-prop"><div class="prop-img"><img src="${con.value_prop3_img}" alt="${con.value_prop3_copy}"></div>
                        <div class="prop-copy">${con.value_prop3_copy}</div></div>
                    </div></div>
                    `);
                }
            })
        });
    }

    // Generic Code
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