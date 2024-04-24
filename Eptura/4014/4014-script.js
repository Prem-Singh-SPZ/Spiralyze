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
            value_prop1_img: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/eptura/4014/icon_proxyclick_01.svg",
            value_prop1_copy: "Optimize <br>guest experience",
            value_prop2_img: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/eptura/4014/icon_proxyclick_02.svg",
            value_prop2_copy: "Improve <br>safety & security",
            value_prop3_img: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/eptura/4014/icon_proxyclick_03.svg",
            value_prop3_copy: "Decrease <br>operational costs",
            bgDesktop: assetURL + "proxyclick_bg_1443.webp",
        },
        {
            pageName: "website-archibus-demo",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1696950683/eptura/4006/archibus-eptura-logo-color_2.svg",
            logoAlt: "Archibus Logo",
            formSubTitle: "Get an Archibus demo",
            title: "Space and Facility MANAGEMENT SOFTWARE",
            subtitle: "How does it work?",
            lisTitle1: "Set up facility and asset info",
            listContent1: "Upload your facility and asset details, such as condition, space usage, costs, and occupancy.",
            lisTitle2: "Monitor your workplace",
            listContent2: "Adjust floor plans. Track occupancy. Set asset maintenance schedules.",
            lisTitle3: "Enjoy streamlined maintenance",
            listContent3: "Optimize facilities and assets based on usage analytics. Track inventory and work orders in one place.",
            bgDesktop: assetURL + "proxyclick_bg_1441.webp",
        },
        {
            pageName: "website-spaceiq-demo",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1696950695/eptura/4006/spaceiq-eptura-logo-color_2.svg",
            logoAlt: "SpaceIQ logo",
            formSubTitle: "Get a SpaceIQ demo",
            title: "Workplace operations SOFTWARE",
            subtitle: "How does it work?",
            lisTitle1: "Set up your workspace environment",
            listContent1: "Upload details about your space, like floor plans, equipment, and lease costs.",
            lisTitle2: "Plan space and facility moves",
            listContent2: "Drag-and-drop desks, equipment, structures, and more. Track your real estate portfolio.",
            lisTitle3: "Enjoy streamlined operations",
            listContent3: "Send updated floor plans in a few clicks. Streamline moves and real estate planning.",
            bgDesktop: assetURL + "proxyclick_bg_1449.webp",
        },
        {
            pageName: "website-ioffice-demo",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1696950704/eptura/4006/ioffice-eptura-logo-color_2.svg",
            logoAlt: "iOffice Logo",
            formSubTitle: "Get an iOffice demo",
            title: "Facility MANAGEMENT SOFTWARE",
            subtitle: "How does it work?",
            lisTitle1: "Set up workplace details",
            listContent1: "Add your floor plans, inventory, employee roles and locations, and additional details.",
            lisTitle2: "Manage your workplace",
            listContent2: "Drag-and-drop to plan spaces. Track assets and send work orders. Book spaces in 1-click.",
            lisTitle3: "Enjoy a unified workplace strategy",
            listContent3: "Optimize space usage, asset health, and employee services based on usage trends.",
            bgDesktop: assetURL + "proxyclick_bg_1452.webp",
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