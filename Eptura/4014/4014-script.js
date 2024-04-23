(function () {
    document.body.classList.add('spz-4014');
    let identifyPage = window.location.pathname.replace('/', '').replace('.html', '');
    document.body.classList.add(identifyPage);

    const assetURL = '//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4010/';

    const rightBullets = [
        {
            pageName: "website-proxyclick-demo",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1695293167/eptura/3012/endorsed_logos.svg",
            logoAlt: "Proxyclick Logo",
            formSubTitle: "Get a Proxyclick demo",
            title: "VISiTOR MANAGEMENT SOFTWARE",
            subtitle: "How does it work?",
            lisTitle1: "Set up pre-screening process",
            listContent1: "Upload pre-screening documents, like legal forms and questionnaires, to send to guests before arrival.",
            lisTitle2: "Invite visitors",
            listContent2: "Send invites that automatically include check-in requirements. Approve or deny based on responses.",
            lisTitle3: "Enjoy streamlined check-in",
            listContent3: "Check visitors in with a couple of clicks. Or let them scan for entry. Reduce front desk admin.",
            bgDesktop: assetURL + "proxyclick_bg_1440.webp",
        },
        {
            pageName: "website-managerplus-demo",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1696950672/eptura/4006/logo_-managerplus.svg",
            logoAlt: "Manager Plus Logo",
            formSubTitle: "Get a ManagerPlus demo",
            title: "All-in-one Asset MANAGEMENT SOFTWARE",
            subtitle: "How does it work?",
            lisTitle1: "Set up asset details",
            listContent1: "Upload maintenance history, equipment lists, and warranty information for all assets. ",
            lisTitle2: "Schedule automated maintenance",
            listContent2: "Auto-send work orders based on usage thresholds, or as needed. See asset status.",
            lisTitle3: "Enjoy streamlined asset management",
            listContent3: "Track progress. Auto-reorder inventory. Reduce time spent managing assets.",
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
        waitForElm('.body-wrapper #form-over ').then(function () {
            rightBullets.forEach(function (con) {
                if (identifyPage == con.pageName) {

                    document.querySelector('#form-over #form_title').textContent = "Get a demo";


                    // setBgImage(con);
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

    // Set background image on body according to screen size (1200px, 1024px, 768px)
    function setBgImage(con) {
        document.querySelector('.form-overlay #mkto_gen_ovelayImg img').setAttribute('src', con.bgDesktop);
        document.querySelector('#form-over #mkto_gen_form_logo img').setAttribute('src', con.pageLogo);
    }
})();