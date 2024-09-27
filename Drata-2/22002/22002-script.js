(function () {
    const astUrl = '//res.cloudinary.com/spiralyze/image/upload/';
    const navSelector = 'header [class*="HeaderNavLink-navItemSubMenuWrapper"]';
    const arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6.11932 11.7273L4.80114 10.4204L8.26137 6.96021H0.153412V5.03975H8.26137L4.80114 1.58521L6.11932 0.272705L11.8466 5.99998L6.11932 11.7273Z" fill="#0580E8"></path>
                    </svg>`;
    const navContent = {
        solutions: [
            {
                text: "BY COMPANY SIZE",
                class: "by-company-size-spz",
                link: "",
                subMenu: [
                    {
                        text: "Startup",
                        link: "/platform/startup",
                        icon: astUrl + "fl_sanitize/drata/22002/component_174.svg"
                    },
                    {
                        text: "Growth",
                        link: "/platform/growth",
                        icon: astUrl + "fl_sanitize/drata/22002/component_172.svg"
                    },
                    {
                        text: "Enterprise",
                        link: "/platform/enterprise",
                        icon: astUrl + "fl_sanitize/drata/22002/component_173.svg"
                    }
                ]
            },
            {
                text: "PLATFORM & CAPABILITIES",
                class: "platform-capabilities-spz",
                link: "",
                subMenu: [
                    {
                        text: "Platform Overview",
                        info: "Complete control over your GRC program.",
                        link: "/platform",
                        // icon: astUrl + "fl_sanitize/drata/22002/component_95.svg"
                    },
                    {
                        text: "Trust Center",
                        info: "Manage & publish your security posture.",
                        link: "/product/trust-center",
                        // icon: astUrl + "fl_sanitize/drata/22002/component_118.svg"
                    },
                    {
                        text: "Security Questionnaire Automation",
                        info: "Automate security reviews with Drata AI.",
                        link: "/product/security-questionnaire-automation",
                        // icon: astUrl + "fl_sanitize/drata/22002/component_118.svg"
                        newTag: true
                    },
                    {
                        text: "Vendor Risk Management",
                        info: "Identify and monitor vendor risk.",
                        link: "/product/third-party-risk-management",
                        // icon: astUrl + "fl_sanitize/drata/22002/component_117.svg"
                    },
                    {
                        text: "Risk Management",
                        info: "Put risk management on autopilot.",
                        link: "/product/risk-management",
                        // icon: astUrl + "fl_sanitize/drata/22002/component_135.svg"
                    },
                    {
                        text: "Compliance as Code",
                        info: "Maintain compliance across the SDLC.",
                        link: "/product/compliance-as-code",
                        // icon: astUrl + "fl_sanitize/drata/22002/component_129.svg",
                    },
                    {
                        text: "User Access Reviews",
                        info: "Automate access reviews.",
                        link: "/product/user-access-reviews",
                        // icon: astUrl + "fl_sanitize/drata/22002/component_133.svg"
                    },
                    {
                        text: "Audit Hub",
                        info: "Create centralized audit communication.",
                        link: "/product/audit-hub",
                        // icon: astUrl + "fl_sanitize/drata/22002/component_138.svg"
                    },
                ]
            },
            {
                text: "FRAMEWORKS",
                class: "frameworks-spz",
                link: "",
                subMenu: [
                    { text: 'SOC 2', link: "/product/soc-2" },
                    { text: 'ISO 27001', link: "/product/iso-27001" },
                    { text: 'HIPAA', link: "/product/hipaa" },
                    { text: 'GDPR', link: "/product/gdpr" },
                    { text: 'Cyber Essentials', link: "/product/cyber-essentials" },
                    { text: 'NIST AI RMF', link: "/product/nist-ai-risk-management" },
                    { text: 'FedRAMP', link: "/product/fedramp" },
                    { text: 'PCI DSS', link: "/product/pci-dss" },
                    { text: 'Custom Frameworks', link: "/product/custom-frameworks" },
                    { text: 'All Frameworks', link: "/product" }
                ]
            },
            {
                text: "TAKE DRATA FURTHER",
                class: "take-drata-spz",
                link: "",
                subMenu: [
                    { text: 'Customer Success', link: "/success" },
                    { text: 'Partners', link: "/partner" },
                    { text: 'API', link: "/product/api" },
                    { text: 'Integrations', link: "/platform/integrations" },
                ]
            },
        ],

        resources: [
            {
                text: "Quick Links",
                class: "quick-link-spz",
                link: "",
                subMenu: [
                    {
                        text: "Blog",
                        link: "/blog",
                        icon: ""
                    },
                    // {
                    //     cTitle: "What Is Shift-Left Security?",
                    //     cImg: astUrl + "f_auto/drata/22002/rectangle_4535.webp",
                    //     cDesc: "See how SaaS organization are implementing new security and compliance practices.",
                    //     cLink: "",
                    //     cClass: "sl-security-card"
                    // },
                    {
                        text: "Customer Stories",
                        link: "/customers",
                        icon: ""
                    },
                    {
                        text: "Events",
                        link: "/events",
                        icon: ""
                    },
                    {
                        text: "Webinars",
                        link: "/resources/webinars",
                        icon: ""
                    }
                ]
            },
            {
                text: "Discover & Learn",
                class: "discover-learn-spz",
                link: "",
                subMenu: [
                    {
                        text: "Resource Center",
                        info: "Access the latest GRC resources.",
                        link: "/resources",
                        icon: ""
                    },
                    {
                        text: "Compliance Glossary",
                        info: "Get the compliance definitions you need.",
                        link: "/glossary",
                        icon: ""
                    },
                    {
                        text: "GRC Central",
                        info: "Dive into GRC fundamental topics.",
                        link: "/grc-central",
                        icon: ""
                    },
                    {
                        groupMenu: [
                            {
                                text: "Risk Hub",
                                info: "",
                                link: "/grc-central/risk",
                                // icon: astUrl + "fl_sanitize/drata/22002/component_152.svg"
                            },
                            {
                                text: "SOC 2 Hub",
                                info: "",
                                link: "/grc-central/soc-2",
                                // icon: astUrl + "fl_sanitize/drata/22002/component_141.svg"
                            },
                            {
                                text: "ISO 27001 Hub",
                                info: "",
                                link: "/grc-central/iso-27001",
                                // icon: astUrl + "fl_sanitize/drata/22002/component_154.svg",
                            }
                        ]
                    }
                ]
            },
            {
                text: "Compliance Support",
                class: "compliance-support-spz",
                link: "",
                subMenu: [
                    {
                        text: "Partners",
                        info: "",
                        link: "/partner",
                        icon: ""
                    },
                    {
                        text: "Service & Tech Partner Directories",
                        info: "",
                        link: "/partner/find",
                        icon: ""
                    },
                    {
                        text: "Auditor Network",
                        info: "",
                        link: "/auditors",
                        icon: ""
                    },
                    {
                        text: "Customer Support",
                        class: "customer-support-spz",
                        link: "",
                        class: "force-heading"
                    },
                    { text: 'Product Updates ', link: "https://updates.drata.com/", icon: "" },
                    { text: 'API Docs', link: "https://developers.drata.com/docs/", icon: "" },
                    { text: 'Help & Documentation', link: "https://help.drata.com/", icon: "" },
                    { text: 'Integrations', link: "/platform/integrations", icon: "" },
                ]
            },
            {
                text: "Featured",
                class: "featured-support-spz",
                link: "",
                subMenu: [
                    {
                        cTitle: "What Is Shift-Left Security and Why Should Businesses Incorporate It?",
                        cTag: 'BLOG',
                        cImg: astUrl + "f_auto/drata/22002/shift_security.jpg",
                        cDesc: "",
                        cLink: "/blog/what-is-shift-left-security",
                        cClass: "sl-security-card"
                    },
                ]
            }
        ],

        alliances: [
            {
                text: "Partners",
                class: "partners-spz",
                link: "",
                subMenu: [
                    {
                        text: "Overview",
                        link: "/partner",
                        // icon: astUrl + "fl_sanitize/drata/22002/component_137.svg"
                    },
                    {
                        text: "Find a Partner",
                        link: "/partner/find",
                        // icon: astUrl + "fl_sanitize/drata/22002/component_153.svg"
                    },
                    {
                        text: "Become a Partner",
                        link: "/partner/become",
                        // icon: astUrl + "fl_sanitize/drata/22002/component_150.svg"
                    }
                ]
            },
            {
                text: "AUDITORS",
                class: "auditors-spz",
                link: "",
                subMenu: [
                    {
                        text: "Overview",
                        link: "/auditors",
                        // icon: astUrl + "fl_sanitize/drata/22002/component_137.svg"
                    },
                    {
                        text: "Join the Audit Alliance",
                        link: "/partner/application/audit-alliance",
                        // icon: astUrl + "fl_sanitize/drata/22002/component_142.svg"
                    },
                    {
                        text: "Auditor Code of Ethics",
                        link: "/auditors/code-of-ethics",
                        // icon: astUrl + "fl_sanitize/drata/22002/component_142.svg"
                    },
                ]
            },
        ],

        customers: [
            {
                text: "CUSTOMERS",
                class: "customers-sub-spz",
                link: "",
                subMenu: [
                    {
                        text: "Customer Stories",
                        link: "/customers",
                        // icon: astUrl + "fl_sanitize/drata/22002/component_159.svg"
                    },
                    {
                        text: "Customer Success",
                        link: "/success",
                        // icon: astUrl + "fl_sanitize/drata/22002/component_159.svg"
                    },
                ]
            },
            {
                text: "Featured",
                class: "company-card-spz",
                link: "",
                subMenu: [
                    {
                        cName: "Lemonade",
                        clogo: astUrl + 'fl_sanitize/drata/22002/lemonade-logo.svg',
                        cDesg: "SOC 2",
                        cImg: astUrl + "f_auto/drata/22002/01_-_desktop.webp",
                        cImgTab: astUrl + "f_auto/drata/22002/01_-_tablet.webp",
                        cImgMob: astUrl + "f_auto/drata/22002/01_-_mobile.jpg",
                        cDesc: `Lemonade Saves 80% of Time Using Drata.`,
                        cLink: "/customers/lemonade",
                        cClass: "cs-jonathan-card"
                    },
                    {
                        cName: "Calendly",
                        clogo: astUrl + 'fl_sanitize/drata/22002/calendly-logo.svg',
                        cDesg: "ISO 27001",
                        cImg: astUrl + "f_auto/drata/22002/02_-_desktop.webp",
                        cImgTab: astUrl + "f_auto/drata/22002/02_-_tablet.webp",
                        cImgMob: astUrl + "f_auto/drata/22002/02_-_mobile.jpg",
                        cDesc: `Calendly Reduces Hours Spent on Audit Prep by 90%.`,
                        cLink: "/customers/calendly",
                        cClass: "cs-calendly-card"
                    },
                    {
                        cName: "Pear Health",
                        clogo: astUrl + 'fl_sanitize/drata/22002/pear-health-logo.svg',
                        cDesg: "HIPAA",
                        cImg: astUrl + "f_auto/drata/22002/03_-_desktop.webp",
                        cImgTab: astUrl + "f_auto/drata/22002/03_-_tablet.webp",
                        cImgMob: astUrl + "f_auto/drata/22002/03_-_mobile.jpg",
                        cDesc: `Pear Health Saves Nearly 9 Months Implementing HIPAA Compliance With Drata`,
                        cLink: "/customers/pear-health",
                        cClass: "cs-pear-card"
                    },
                ]
            },
        ],

        company: [
            {
                text: "Company",
                class: "company-sub-spz",
                link: "",
                subMenu: [
                    {
                        text: "About",
                        link: "/about",
                        icon: ""
                    },
                    // {
                    //     text: "Life at Drata",
                    //     link: "/about/life-at-drata",
                    //     icon: ""
                    // },
                    {
                        text: "Careers",
                        link: "/about/careers",
                        icon: ""
                    },
                    {
                        text: "Press",
                        link: "/press",
                        icon: ""
                    },
                    {
                        text: "Security & Compliance at Drata",
                        link: "/security",
                        icon: ""
                    },
                    {
                        text: "Contact Us",
                        link: "/contact",
                        icon: ""
                    },
                ]
            },
            {
                text: "Featured",
                class: "company-card-spz",
                link: "",
                subMenu: [
                    {
                        cTitle: "Drata Recognized in G2’s 2024 Best Software Awards",
                        cTag: 'WEBINAR',
                        cImg: astUrl + "f_auto/drata/22002/drata_recognized.jpg",
                        cDesc: "",
                        cLink: "/blog/drata-recognized-in-g2s-2024-best-software-awards",
                        cClass: "sl-security-card"
                    },
                ]
            },
        ]
    };


    function createTest() {
        waitForElm(navSelector).then(function () {
            document.querySelector("body").classList.add("spz-22002");

            navigationContent();
            submitTestDetails('variant_22002');

        });

        createCookie('spz-22002-loaded', 'true', 1);
    }

    function removeTest() {
        document.body.classList.remove("loaded-test");
        document.body.classList.remove("spz-22002");
        if (document.querySelector('.hero-section-22002')) {
            document.querySelector('.hero-section-22002').remove();
        }
    }

    //Passing test details to hidden fields
    function submitTestDetails(cro_test) {
        if (document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input')) {
            document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').setAttribute('value', cro_test);
        }
    }

    function demoChecked() {
        const sInt = setInterval(() => {
            var cro_field = document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input');

            // Check if spz-22002-loaded cookie is present and cro_field is present
            if ((cro_field && cro_field.val != "") && isCookieExist('spz-22002-loaded')) {
                clearInterval(sInt);
                submitTestDetails('variant_22002');

                // deleteCookie('spz-22002-loaded');
            }
        }, 1000);

        setTimeout(() => {
            clearInterval(sInt);
        }, 10000);
    }

    history.pushState = (function (f) {
        return function pushState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('pushstate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };
    })(history.pushState);
    history.replaceState = (function (f) {
        return function replaceState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('replacestate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };
    })(history.replaceState);
    window.addEventListener('popstate', function () {
        window.dispatchEvent(new Event('locationchange'));
    });
    window.addEventListener('locationchange', function () {
        url = location.href;
        urlCheck(url);
    });
    var url = location.href;
    urlCheck(url);

    function urlCheck(url) {
        let testURL = "";
        if (window.location.pathname.indexOf("/") > -1) {
            testURL = window.location.href;
        }
        if (isSameUrl(url, testURL, true)) {
            createTest();
        } else {
            removeTest();
        }
        if (window.location.pathname.indexOf("/demo") > -1) {
            // ADDED ONLY FOR DEMO PAGE TO ADD variant_22002 IN HIDDEN FIELD
            demoChecked();
        }
    }

    function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
        currentUrl = currentUrl.includes("#") ?
            currentUrl.slice(0, currentUrl.indexOf("#")) :
            currentUrl;
        specifiedUrl = specifiedUrl.includes("#") ?
            specifiedUrl.slice(0, specifiedUrl.indexOf("#")) :
            specifiedUrl;
        if (!includeQueryParams)
            currentUrl = currentUrl.includes("?") ?
                currentUrl.slice(0, currentUrl.indexOf("?")) :
                currentUrl;
        if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
            return true;
        return false;
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

    // Create cookie
    function createCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    // Check if cookie exists
    function isCookieExist(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Delete cookie
    function deleteCookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    // Navigation content
    function navigationContent() {
        // Prepare the navigation position and style
        navStyleBase();

        //main menu changes
        mainMenuUpdates();

        if (!document.querySelector('.by-company-size-spz')) {
            waitForElm('header .solutions-spz [class*=HeaderNavLink-navItemSubMenuWrapper] [class*=HeaderNavLink-navItemSubMenu]').then(function () {
                const menuNav = document.querySelector('header .solutions-spz [class*=HeaderNavLink-navItemSubMenuWrapper] [class*=HeaderNavLink-navItemSubMenu]');
                // Remove all LI in menuNav
                menuNav.innerHTML = "";

                navContent.solutions.forEach((subItem1, subIndex) => {
                    menuNav.insertAdjacentHTML('beforeend', `
                    <li class="css-spz-MuiListItem-root-HeaderNavLink-navItemSubMenuItem ${subItem1.class}">
                        <div class="MuiBox-root css-spz-HeaderNavGroup-root" data-testid="HeaderNavGroup">
                            <a class="css-spz-Link-root-HeaderNavGroup-navItemLink-HeaderNavLink-navItemGroup" ${subItem1.link != '' ? `href='${subItem1.link}'` : ""}>${subItem1.text}</a>
                            <div class="MuiBox-root css-spz-HeaderNavGroup-navItemSubMenuWrapper">
                                <ul class="MuiList-root MuiList-padding css-spz-MuiList-root-HeaderNavGroup-navItemSubMenu">
                                    ${subItem1.subMenu.map((subItem2, subIndex) => {
                        return `<li class="css-spz-MuiListItem-root-HeaderNavLink-navItemSubMenuItem">
                                                    <div class="MuiBox-root css-spz-HeaderNavLinkNested-root" data-testid="HeaderNavLinkNested">
                                                        <a class="css-spz-Link-root-HeaderNavLinkNested-navItemLink-HeaderNavGroup-navItemGroup" href="${subItem2.link}">
                                                            ${(subItem2.icon && subItem2.icon != null) ? `<div class="menu-icon"><img src="${subItem2.icon}" alt="${subItem2.text}" /></div>` : ""}
                                                            <div class="menu-texts">
                                                                <div class="menu-title">${subItem2.text} ${(subItem2.newTag && subItem2.newTag != null) ? `<span class="new-tag">New</span>` : ""}</div>
                                                                ${(subItem2.info && subItem2.info != null) ? `<div class="menu-info">${subItem2.info}</div>` : ""}
                                                             </div>
                                                        </a>
                                                    </div>
                                                </li>`;
                    }).join("")}
                                </ul>
                                
                            </div>
                        </div>
                    </li>`);
                });

                if (!document.querySelector('.solutions-spz .spz-disabled-anchor-wrapper')) {
                    menuNav.insertAdjacentHTML('afterend', `
                        <div class="spz-disabled-anchor-wrapper">
                            <div class="disabled-anchor-wrapper">
                                <a href="/plans" class="spz-d-link">Plans ${arrowSvg}</a>
                            </div>
                        </div>`);
                }
            });
        }

        if (!document.querySelector('.quick-link-spz')) {
            waitForElm('header .resources-spz [class*=HeaderNavLink-navItemSubMenuWrapper] [class*=HeaderNavLink-navItemSubMenu]').then(function () {

                const menuNav = document.querySelector('header .resources-spz [class*=HeaderNavLink-navItemSubMenuWrapper] [class*=HeaderNavLink-navItemSubMenu]');

                // Remove all LI in menuNav
                menuNav.innerHTML = "";

                navContent.resources.forEach((subItem1, subIndex) => {
                    menuNav.insertAdjacentHTML('beforeend', `
                    <li class="css-spz-MuiListItem-root-HeaderNavLink-navItemSubMenuItem ${subItem1.class}">
                        <div class="MuiBox-root css-spz-HeaderNavGroup-root" data-testid="HeaderNavGroup">
                            <a class="css-spz-Link-root-HeaderNavGroup-navItemLink-HeaderNavLink-navItemGroup" ${subItem1.link != '' ? `href='${subItem1.link}'` : ""}>${subItem1.text}</a>
                            <div class="MuiBox-root css-spz-HeaderNavGroup-navItemSubMenuWrapper">
                                <ul class="MuiList-root MuiList-padding css-spz-MuiList-root-HeaderNavGroup-navItemSubMenu">
                                    ${subItem1.subMenu.map((subItem2, subIndex) => {
                        let grpMenu = '';
                        if (subItem2.groupMenu) {
                            subItem2.groupMenu.forEach((gmi) => {
                                grpMenu += `<div class="MuiBox-root css-spz-HeaderNavLinkNested-root grp-sub-item" data-testid="HeaderNavLinkNested">
                                                        <a class="css-spz-Link-root-HeaderNavLinkNested-navItemLink-HeaderNavGroup-navItemGroup" href="${gmi.link}">
                                                            <div class="menu-texts">
                                                                <div class="menu-title">${gmi.text}</div>
                                                            </div>
                                                        </a>
                                                    </div>`;
                            });
                        }

                        return `${(subItem2.cTitle && subItem2.cTitle != null) ? `<li class="css-spz-menu-card">
                                                    <a href="${subItem2.cLink}" class="spz-menu-card ${subItem2.cClass}">
                                                        <img src="${subItem2.cImg}" alt="${subItem2.cTitle}">
                                                        <span class="card-tag">${subItem2.cTag}</span>
                                                        <div class="card-title">${subItem2.cTitle}</div>
                                                        <div class="card-desc">${subItem2.cDesc}</div>
                                                        <!-- ${(subItem2.cLink && subItem2.cLink != null) ? `<a href="${subItem2.cLink}" class="card-link">Learn More ${arrowSvg}</a>` : ""} -->
                                                    </a>
                                                </li>` :
                            `<li class="css-spz-MuiListItem-root-HeaderNavLink-navItemSubMenuItem ${subItem2.groupMenu ? 'grp-item-wrapper' : ''} ${subItem2.class != null ? subItem2.class : ''}">
                                                    ${(subItem2.groupMenu && subItem2.groupMenu.length > 0) ?
                                grpMenu
                                :
                                `<div class="MuiBox-root css-spz-HeaderNavLinkNested-root" data-testid="HeaderNavLinkNested">
                                                            <a class="css-spz-Link-root-HeaderNavLinkNested-navItemLink-HeaderNavGroup-navItemGroup" href="${subItem2.link}">
                                                                ${(subItem2.icon && subItem2.icon != null) ? `<div class="menu-icon"><img src="${subItem2.icon}" alt="${subItem2.text}" /></div>` : ""}
                                                                <div class="menu-texts">
                                                                    <div class="menu-title">${subItem2.text} ${(subItem2.newTag && subItem2.newTag != null) ? `<span class="new-tag">New</span>` : ""}</div>
                                                                    ${(subItem2.info && subItem2.info != null) ? `<div class="menu-info">${subItem2.info}</div>` : ""}
                                                                </div>
                                                            </a>
                                                        </div>`
                            }
                                                </li>`}`;
                    }).join("")}
                                </ul>
                                
                            </div>
                        </div>
                    </li>`);
                });

                // if (!document.querySelector('.resources-spz .spz-disabled-anchor-wrapper')) {
                //     menuNav.insertAdjacentHTML('afterend', `
                //         <div class="spz-disabled-anchor-wrapper desk-only">
                //             <div class="disabled-anchor-wrapper">
                //                 <a href="javascript:void(0);" class="spz-d-link">Pricing ${arrowSvg}</a>
                //             </div>
                //         </div>`);
                // }
            });
        }

        if (!document.querySelector('.partners-spz')) {
            waitForElm('header .alliances-spz [class*=HeaderNavLink-navItemSubMenuWrapper] [class*=HeaderNavLink-navItemSubMenu]').then(function () {

                const menuNav = document.querySelector('header .alliances-spz [class*=HeaderNavLink-navItemSubMenuWrapper] [class*=HeaderNavLink-navItemSubMenu]');
                // Remove all LI in menuNav
                menuNav.innerHTML = "";

                navContent.alliances.forEach((subItem1, subIndex) => {
                    menuNav.insertAdjacentHTML('beforeend', `
                    <li class="css-spz-MuiListItem-root-HeaderNavLink-navItemSubMenuItem ${subItem1.class}">
                        <div class="MuiBox-root css-spz-HeaderNavGroup-root" data-testid="HeaderNavGroup">
                            <a class="css-spz-Link-root-HeaderNavGroup-navItemLink-HeaderNavLink-navItemGroup" ${subItem1.link != '' ? `href='${subItem1.link}'` : ""}>${subItem1.text}</a>
                            <div class="MuiBox-root css-spz-HeaderNavGroup-navItemSubMenuWrapper">
                                <ul class="MuiList-root MuiList-padding css-spz-MuiList-root-HeaderNavGroup-navItemSubMenu">
                                    ${subItem1.subMenu.map((subItem2, subIndex) => {
                        return `<li class="css-spz-MuiListItem-root-HeaderNavLink-navItemSubMenuItem">
                                                    <div class="MuiBox-root css-spz-HeaderNavLinkNested-root" data-testid="HeaderNavLinkNested">
                                                        <a class="css-spz-Link-root-HeaderNavLinkNested-navItemLink-HeaderNavGroup-navItemGroup" href="${subItem2.link}">
                                                            ${(subItem2.icon && subItem2.icon != null) ? `<div class="menu-icon"><img src="${subItem2.icon}" alt="${subItem2.text}" /></div>` : ""}
                                                            <div class="menu-texts">
                                                                <div class="menu-title">${subItem2.text} ${(subItem2.newTag && subItem2.newTag != null) ? `<span class="new-tag">New</span>` : ""}</div>
                                                                ${(subItem2.info && subItem2.info != null) ? `<div class="menu-info">${subItem2.info}</div>` : ""}
                                                             </div>
                                                        </a>
                                                    </div>
                                                </li>`;
                    }).join("")}
                                </ul>
                            </div>
                        </div>
                    </li>`);
                });

                if (!document.querySelector('.alliances-spz .spz-disabled-anchor-wrapper')) {
                    menuNav.insertAdjacentHTML('afterend', `
                        <div class="spz-disabled-anchor-wrapper">
                            <div class="disabled-anchor-wrapper">
                                <a href="https://drata.allbound.com/" class="spz-d-link" target="_blank">Log In To Alliance Gateway ${arrowSvg}</a>
                            </div>
                        </div>`);
                }
            });
        }

        if (!document.querySelector('.customers-sub-spz')) {
            waitForElm('header .customers-spz [class*=HeaderNavLink-navItemSubMenuWrapper] [class*=HeaderNavLink-navItemSubMenu]').then(function () {

                const menuNav = document.querySelector('header .customers-spz [class*=HeaderNavLink-navItemSubMenuWrapper] [class*=HeaderNavLink-navItemSubMenu]');
                // Remove all LI in menuNav
                if (menuNav) {
                    menuNav.innerHTML = "";
                    navContent.customers.forEach((subItem1, subIndex) => {
                        menuNav.insertAdjacentHTML('beforeend', `
                        <li class="css-spz-MuiListItem-root-HeaderNavLink-navItemSubMenuItem ${subItem1.class}">
                            <div class="MuiBox-root css-spz-HeaderNavGroup-root" data-testid="HeaderNavGroup">
                                <a class="css-spz-Link-root-HeaderNavGroup-navItemLink-HeaderNavLink-navItemGroup" ${subItem1.link != '' ? `href='${subItem1.link}'` : ""}>${subItem1.text}</a>
                                <div class="MuiBox-root css-spz-HeaderNavGroup-navItemSubMenuWrapper">
                                    <ul class="MuiList-root MuiList-padding css-spz-MuiList-root-HeaderNavGroup-navItemSubMenu">
                                        ${subItem1.subMenu.map((subItem2, subIndex) => {
                            return `${(subItem2.cName && subItem2.cName != null) ? `<li class="css-spz-review-card">
                                                        <a href="${subItem2.cLink}" class="spz-review-card ${subItem2.cClass}">
                                                            <div class="review-img">
                                                                <picture>
                                                                    <source media="(min-width:1200px)" srcset="${subItem2.cImg}">
                                                                    <source media="(min-width:768px)" srcset="${subItem2.cImgTab}">
                                                                    <source media="(min-width:0px)" srcset="${subItem2.cImgMob}">
                                                                    <img src="${subItem2.cImg}" alt="${subItem2.cName}">
                                                                </picture>
                                                            </div>
                                                            <div class="review-content">
                                                                <div class="card-title">
                                                                    <img src="${subItem2.clogo}" alt="${subItem2.cName}" />
                                                                </div>
                                                                <div class="card-desc">${subItem2.cDesc}</div>
                                                                <span class="card-tag">${subItem2.cDesg}</span>
                                                            </div>
                                                        </a>
                                                    </li>` : `
                                                    <li class="css-spz-MuiListItem-root-HeaderNavLink-navItemSubMenuItem">
                                                        <div class="MuiBox-root css-spz-HeaderNavLinkNested-root" data-testid="HeaderNavLinkNested">
                                                            <a class="css-spz-Link-root-HeaderNavLinkNested-navItemLink-HeaderNavGroup-navItemGroup" href="${subItem2.link}">
                                                                ${(subItem2.icon && subItem2.icon != null) ? `<div class="menu-icon"><img src="${subItem2.icon}" alt="${subItem2.text}" /></div>` : ""}
                                                                <div class="menu-texts">
                                                                    <div class="menu-title">${subItem2.text} ${(subItem2.newTag && subItem2.newTag != null) ? `<span class="new-tag">New</span>` : ""}</div>
                                                                    ${(subItem2.info && subItem2.info != null) ? `<div class="menu-info">${subItem2.info}</div>` : ""}
                                                                 </div>
                                                            </a>
                                                        </div>
                                                    </li>`}`;
                        }).join("")}
                                    </ul>
                                    
                                </div>
                            </div>
                        </li>`);
                    });
                }
            });
        }

        if (!document.querySelector('.company-sub-spz')) {
            waitForElm('header .company-spz [class*=HeaderNavLink-navItemSubMenuWrapper] [class*=HeaderNavLink-navItemSubMenu]').then(function () {

                const menuNav = document.querySelector('header .company-spz [class*=HeaderNavLink-navItemSubMenuWrapper] [class*=HeaderNavLink-navItemSubMenu]');
                // Remove all LI in menuNav
                menuNav.innerHTML = "";

                navContent.company.forEach((subItem1, subIndex) => {
                    menuNav.insertAdjacentHTML('beforeend', `
                    <li class="css-spz-MuiListItem-root-HeaderNavLink-navItemSubMenuItem ${subItem1.class}">
                        <div class="MuiBox-root css-spz-HeaderNavGroup-root" data-testid="HeaderNavGroup">
                            <a class="css-spz-Link-root-HeaderNavGroup-navItemLink-HeaderNavLink-navItemGroup" ${subItem1.link != '' ? `href='${subItem1.link}'` : ""}>${subItem1.text}</a>
                            <div class="MuiBox-root css-spz-HeaderNavGroup-navItemSubMenuWrapper">
                                <ul class="MuiList-root MuiList-padding css-spz-MuiList-root-HeaderNavGroup-navItemSubMenu">
                                    ${subItem1.subMenu.map((subItem2, subIndex) => {
                        return `${(subItem2.cTitle && subItem2.cTitle != null) ? `<li class="css-spz-menu-card">
                                                    <a href="${subItem2.cLink}" class="spz-menu-card ${subItem2.cClass}">
                                                        <img src="${subItem2.cImg}" alt="${subItem2.cTitle}">
                                                        <span class="card-tag">${subItem2.cTag}</span>
                                                        <div class="card-title">${subItem2.cTitle}</div>
                                                        <div class="card-desc">${subItem2.cDesc}</div>
                                                        <!-- ${(subItem2.cLink && subItem2.cLink != null) ? `<a href="${subItem2.cLink}" class="card-link">Learn More ${arrowSvg}</a>` : ""} -->
                                                    </a>
                                                </li>` : `
                                                <li class="css-spz-MuiListItem-root-HeaderNavLink-navItemSubMenuItem">
                                                    <div class="MuiBox-root css-spz-HeaderNavLinkNested-root" data-testid="HeaderNavLinkNested">
                                                        <a class="css-spz-Link-root-HeaderNavLinkNested-navItemLink-HeaderNavGroup-navItemGroup" href="${subItem2.link}">
                                                            ${(subItem2.icon && subItem2.icon != null) ? `<div class="menu-icon"><img src="${subItem2.icon}" alt="${subItem2.text}" /></div>` : ""}
                                                            <div class="menu-texts">
                                                                <div class="menu-title">${subItem2.text} ${(subItem2.newTag && subItem2.newTag != null) ? `<span class="new-tag">New</span>` : ""}</div>
                                                                ${(subItem2.info && subItem2.info != null) ? `<div class="menu-info">${subItem2.info}</div>` : ""}
                                                             </div>
                                                        </a>
                                                    </div>
                                                </li>`}`;
                    }).join("")}
                                </ul>
                                
                            </div>
                        </div>
                    </li>`);
                });

                mainMenuUpdates();
            });
        }

        //For Tablet and Mobile
        // if (!document.querySelector('header > .MuiContainer-root [class*="Header-contentContainer"] > nav > ul[class*="Header-headerMenuNavItems"] > .spz-disabled-anchor-wrapper')) {
        //     document.querySelector('.spz-22002 header > .MuiContainer-root [class*="Header-contentContainer"] > nav > ul[class*="Header-headerMenuNavItems"]').insertAdjacentHTML('beforeend', `
        //         <li class="spz-disabled-anchor-wrapper pricing-disabled">
        //             <div class="disabled-anchor-wrapper">
        //                 <a href="javascript:void(0);" class="spz-d-link">
        //                     Pricing 
        //                     ${arrowSvg}
        //                 </a>
        //             </div>
        //         </li>
        //         <li class="spz-disabled-anchor-wrapper alliance-disabled">
        //             <div class="disabled-anchor-wrapper">
        //                 <a href="https://drata.allbound.com/" class="spz-d-link" target="_blank">
        //                     Log In To Alliance Gateway 
        //                     ${arrowSvg}
        //                 </a>
        //             </div>
        //         </li>`);
        // }
    }

    function mainMenuUpdates() {
        //replace "solutions" text to "key" in above html rest keep as is
        if (document.querySelector('.solutions-spz [class$=HeaderNavLink-navItemLink]')) {
            document.querySelector('.solutions-spz [class$=HeaderNavLink-navItemLink]').innerHTML = document.querySelector('.solutions-spz [class$=HeaderNavLink-navItemLink]').innerHTML.replace('Solutions', 'Product');
        }

        if (document.querySelector('.spz-22002 header > .MuiContainer-root [class*=Header-contentContainer] > ul a[class*=MuiTypography-darkL]')) {
            document.querySelector('.spz-22002 header > .MuiContainer-root [class*=Header-contentContainer] > ul a[class*=MuiTypography-darkL]').classList.add('spz-22002-tracking');
        }
    }

    function navStyleBase() {

        const menuLbl = setInterval(() => {
            // Get all 'HeaderNavLink-navItemLink' text and apply it as a class to the closest li
            document.querySelectorAll('header [class*="HeaderNavLink-navItemLink"]').forEach(navItem => {
                const navItemText = navItem.innerText.replace(/\s+/g, '-').toLowerCase();
                navItem.closest('li').classList.add(`${navItemText}-spz`);

                if (navItemText == 'company') {
                    clearInterval(menuLbl);
                }
            });
        }, 50);

        setInterval(() => {
            if (document.querySelector(`${navSelector}[open]`)) {
                // Stop page from scrolling when navSelector has 'open' attribute
                document.body.classList.add('nav-open-spz');

                // Set the navigation position according to the header height
                // document.querySelector(`${navSelector}[open]`).style.top = `${headerHeight}px`;
                // document.querySelector(`${navSelector}[open]`).style.maxHeight = `calc(100vh - ${headerHeight}px)`;
            } else {
                document.body.classList.remove('nav-open-spz');
            }

            if (window.innerWidth <= 1200) {
                if (document.querySelector('[data-testid="MenuIcon"]') && window.getComputedStyle(document.querySelector('[data-testid="MenuIcon"]'), null).display == 'none') {
                    document.body.classList.add('nav-tab-open-spz');
                } else if (window.getComputedStyle(document.querySelector('[data-testid="CloseIcon"]'), null).display == 'none') {
                    document.body.classList.remove('nav-tab-open-spz');
                }
            }
        }, 150);


        // Set the navigation position according to the header height
        // document.querySelectorAll(navSelector).forEach(nav => {
        //     nav.style.top = `${headerHeight}px`;
        // });
    }
})();