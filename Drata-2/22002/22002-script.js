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
                        icon: astUrl + "fl_sanitize//drata/22002/component_86.svg"
                    },
                    {
                        text: "Growth",
                        link: "/platform/growth",
                        icon: astUrl + "/drata/22002/component_99.svg"
                    },
                    {
                        text: "Enterprise",
                        link: "/platform/enterprise",
                        icon: astUrl + "/drata/22002/component_107.svg"
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
                        info: "One platform for complete control over your compliance program.",
                        link: "/platform",
                        icon: astUrl + "fl_sanitize/drata/22002/component_95.svg"
                    },
                    {
                        text: "Trust Center",
                        info: "Your fast pass to vendor security reviews.",
                        link: "/product/trust-center",
                        icon: astUrl + "fl_sanitize/drata/22002/component_118.svg"
                    },
                    {
                        text: "Vendor Risk Management",
                        info: "Identify and monitor vendor risk.",
                        link: "/product/third-party-risk-management",
                        icon: astUrl + "fl_sanitize/drata/22002/component_117.svg"
                    },
                    {
                        text: "Risk Management",
                        info: "Put risk management on autopilot.",
                        link: "/product/risk-management",
                        icon: astUrl + "fl_sanitize//drata/22002/component_135.svg"
                    },
                    {
                        text: "Compliance as Code",
                        info: "Address compliance across the software development lifecycle. ",
                        link: "/product/compliance-as-code",
                        icon: astUrl + "fl_sanitize//drata/22002/component_129.svg",
                        newTag: true
                    },
                    {
                        text: "User Access Reviews",
                        info: "Conduct user access reviews directly to increase security.",
                        link: "/product/user-access-reviews",
                        icon: astUrl + "fl_sanitize//drata/22002/component_133.svg"
                    },
                    {
                        text: "Audit Hub",
                        info: "Streamline the audit process with advanced tools and workflows.",
                        link: "/product/audit-hub",
                        icon: astUrl + "fl_sanitize//drata/22002/component_138.svg"
                    },
                ]
            },
            {
                text: "FRAMEWORKS",
                class: "frameworks-spz",
                link: "",
                subMenu: [
                    { text: 'SOC 2', link: "/product/soc-2", icon: astUrl + "fl_sanitize/drata/22002/component_94.svg" },
                    { text: 'ISO 27001', link: "/product/iso-27001", icon: astUrl + "fl_sanitize/drata/22002/component_168.svg" },
                    { text: 'HIPAA', link: "/product/hipaa", icon: astUrl + "fl_sanitize/drata/22002/component_123.svg" },
                    { text: 'GDPR', link: "/product/gdpr", icon: astUrl + "fl_sanitize/drata/22002/component_132.svg" },
                    { text: 'PCI DSS', link: "/product/pci-dss", icon: astUrl + "fl_sanitize/drata/22002/component_147.svg" },
                    { text: 'Cyber Essentials', link: "/product/cyber-essentials", icon: astUrl + "fl_sanitize/drata/22002/component_130.svg" },
                    { text: 'NIST AI RMF', link: "/product/nist-ai-risk-management", icon: astUrl + "fl_sanitize/drata/22002/component_136.svg" },
                    { text: 'CCPA', link: "/product/ccpa", icon: astUrl + "fl_sanitize/drata/22002/component_134.svg" },
                    { text: 'CMMC', link: "/product/cmmc", icon: astUrl + "fl_sanitize/drata/22002/component_163.svg" },
                    { text: 'Microsoft SSPA', link: "/product/msft-sspa", icon: astUrl + "fl_sanitize/drata/22002/component_165.svg" },
                    { text: 'NIST CSF', link: "/product/nist-csf", icon: astUrl + "fl_sanitize/drata/22002/component_146.svg" },
                    { text: 'NIST SP 800-53', link: "/product/nist-800-53", icon: astUrl + "fl_sanitize/drata/22002/component_151.svg" },
                    { text: 'NIST SP 800-171', link: "/product/nist-800-171", icon: astUrl + "fl_sanitize/drata/22002/component_166.svg" },
                    { text: 'ISO 27701', link: "/product/iso-27701", icon: astUrl + "fl_sanitize/drata/22002/component_143.svg" },
                    { text: 'FFIEC', link: "/product/ffiec", icon: astUrl + "fl_sanitize/drata/22002/component_149.svg" },
                    { text: 'CCM', link: "/product/ccm", icon: astUrl + "fl_sanitize/drata/22002/component_161.svg" },
                    { text: 'FedRAMP', link: "/product/fedramp", icon: astUrl + "fl_sanitize/drata/22002/component_139.svg" },
                    { text: 'ISO 27017', link: "/product/iso-27001", icon: astUrl + "fl_sanitize/drata/22002/component_158.svg" },
                    { text: 'ISO 27018', link: "/product/iso-27001", icon: astUrl + "fl_sanitize/drata/22002/component_164.svg" },
                    { text: 'Custom Frameworks', link: "/product/custom-frameworks", icon: astUrl + "fl_sanitize/drata/22002/component_162.svg" },
                ]
            },
            {
                text: "TAKE DRATA FURTHER",
                class: "take-drata-spz",
                link: "",
                subMenu: [
                    { text: 'Customer Success', link: "/success", icon: astUrl + "fl_sanitize/drata/22002/component_91.svg" },
                    { text: 'Partners', link: "/partner", icon: astUrl + "fl_sanitize/drata/22002/component_145.svg" },
                    { text: 'API', link: "/product/api", icon: astUrl + "fl_sanitize/drata/22002/component_144.svg" },
                    { text: 'Integrations', link: "/platform/integrations", icon: astUrl + "fl_sanitize/drata/22002/component_156.svg" },
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
                    {
                        cTitle: "What Is Shift-Left Security?",
                        cImg: astUrl + "f_auto/drata/22002/rectangle_4535.webp",
                        cDesc: "See how SaaS organization are implementing new security and compliance practices.",
                        cLink: "",
                        cClass: "sl-security-card"
                    },
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
                        info: "Latest blogs, webinars, customer stories, product enhancements, and more.",
                        link: "/resources",
                        icon: ""
                    },
                    {
                        text: "GRC Central",
                        info: "One-stop-shop for all things GRC. Explore the educational hubs below.",
                        link: "/grc-central",
                        icon: ""
                    },
                    {
                        text: "Risk Hub",
                        info: "",
                        link: "/grc-central/risk",
                        icon: astUrl + "fl_sanitize/drata/22002/component_152.svg"
                    },
                    {
                        text: "SOC 2 Hub",
                        info: "",
                        link: "/grc-central/soc-2",
                        icon: astUrl + "fl_sanitize//drata/22002/component_141.svg"
                    },
                    {
                        text: "ISO 27001 Hub",
                        info: "",
                        link: "/grc-central/iso-27001",
                        icon: astUrl + "fl_sanitize//drata/22002/component_154.svg",
                    },
                    {
                        text: "Compliance Glossary",
                        info: "",
                        link: "/glossary",
                        icon: ""
                    },
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
                        info: "Search for a Service & Tech Partner",
                        link: "/partner/find",
                        icon: ""
                    },
                    {
                        text: "Auditor Network",
                        info: "Pre-Vetted Auditor Network. ",
                        link: "/auditors",
                        icon: ""
                    }
                ]
            },
            {
                text: "Customer Support",
                class: "customer-support-spz",
                link: "",
                subMenu: [
                    { text: 'Product Updates ', link: "https://updates.drata.com/", icon: "" },
                    { text: 'API Docs', link: "https://developers.drata.com/docs/", icon: "" },
                    { text: 'Help & Documentation', link: "https://help.drata.com/", icon: "" },
                    {
                        cTitle: "Drata Named One of the Best Workplaces in Technology",
                        cImg: astUrl + "f_auto/drata/22002/image_3.webp",
                        cDesc: "Drata is featured in Fortune’s lists of Best Workplaces in Technology and Best Medium Workplaces.",
                        cLink: "/drataverse",
                        cClass: "ws-tech-card"
                    },
                ]
            },
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
                        icon: astUrl + "fl_sanitize/drata/22002/component_137.svg"
                    },
                    {
                        text: "Find a Partner",
                        link: "/partner/find",
                        icon: astUrl + "fl_sanitize/drata/22002/component_153.svg"
                    },
                    {
                        text: "Become a Partner",
                        link: "/partner/become",
                        icon: astUrl + "fl_sanitize/drata/22002/component_150.svg"
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
                        icon: astUrl + "fl_sanitize/drata/22002/component_137.svg"
                    },
                    {
                        text: "Join the Audit Alliance",
                        link: "/partner/application/audit-alliance",
                        icon: astUrl + "fl_sanitize/drata/22002/component_142.svg"
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
                        text: "Customer Success",
                        link: "/success",
                        icon: astUrl + "fl_sanitize/drata/22002/component_159.svg"
                    },
                ]
            },
            {
                text: "FEATURED Customer STORIES",
                class: "customers-stories-spz",
                link: "",
                subMenu: [
                    {
                        text: "SOC 2",
                        link: "/customers/lemonade",
                        icon: astUrl + "fl_sanitize/drata/22002/component_160.svg"
                    },
                    {
                        text: "ISO 27001",
                        link: "/customers/calendly",
                        icon: astUrl + "fl_sanitize/drata/22002/component_157.svg"
                    },
                    {
                        text: "HIPAA",
                        link: "/customers/pear-health",
                        icon: astUrl + "fl_sanitize/drata/22002/component_167.svg"
                    },
                    {
                        text: "GDPR",
                        link: "/customers/deeper-signals",
                        icon: astUrl + "fl_sanitize/drata/22002/component_155.svg"
                    },
                ]
            },
            {
                text: "",
                class: "company-card-spz",
                link: "",
                subMenu: [
                    {
                        cName: "Jonathan Jaffe",
                        cDesg: "CISO, Lemonade",
                        cImg: astUrl + "f_auto/drata/22002/image.webp",
                        cDesc: `“We saved 80% of time using Drata’s continuous compliance automation. I’ve spent well over 200 hours before using Drata just in preparing for and dealing with our SOC 2 audit. Drata has been great for automating evidence collection. I find it really flexible, and I’m able to make my own control framework.”`,
                        cLink: "/customers/lemonade",
                        cClass: "cs-jonathan-card"
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
                    {
                        text: "Life at Drata",
                        link: "/about/life-at-drata",
                        icon: ""
                    },
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
                text: "",
                class: "company-card-spz",
                link: "",
                subMenu: [
                    {
                        cTitle: "Drata Named One of the Best Workplaces in Technology",
                        cImg: astUrl + "f_auto/drata/22002/image_3.webp",
                        cDesc: "Drata is featured in Fortune’s lists of Best Workplaces in Technology and Best Medium Workplaces.",
                        cLink: "/blog/drata-receives-first-pair-workplace-accolades",
                        cClass: "ws-tech-card"
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

            // Get all 'HeaderNavLink-navItemLink' text and apply it as a class to the closest li
            document.querySelectorAll('header [class*="HeaderNavLink-navItemLink"]').forEach(navItem => {
                const navItemText = navItem.innerText.replace(/\s+/g, '-').toLowerCase();
                navItem.closest('li').classList.add(`${navItemText}-spz`);
            });
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
                        <div class="spz-disabled-anchor-wrapper desk-only">
                            <div class="disabled-anchor-wrapper">
                                <a href="javascript:void(0);" class="spz-d-link">Pricing ${arrowSvg}</a>
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
                        return `${(subItem2.cTitle && subItem2.cTitle != null) ? `<li class="css-spz-menu-card">
                                                    <div class="spz-menu-card ${subItem2.cClass}">
                                                        <img src="${subItem2.cImg}" alt="${subItem2.cTitle}">
                                                        <div class="card-title">${subItem2.cTitle}</div>
                                                        <div class="card-desc">${subItem2.cDesc}</div>
                                                        ${(subItem2.cLink && subItem2.cLink != null) ? `<a href="${subItem2.cLink}" class="card-link">Learn More ${arrowSvg}</a>` : ""}
                                                    </div>
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

                if (!document.querySelector('.resources-spz .spz-disabled-anchor-wrapper')) {
                    menuNav.insertAdjacentHTML('afterend', `
                        <div class="spz-disabled-anchor-wrapper desk-only">
                            <div class="disabled-anchor-wrapper">
                                <a href="javascript:void(0);" class="spz-d-link">Pricing ${arrowSvg}</a>
                            </div>
                        </div>`);
                }
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
                        <div class="spz-disabled-anchor-wrapper desk-only">
                            <div class="disabled-anchor-wrapper">
                                <a href="https://drata.allbound.com/" class="spz-d-link">Log In To Alliance Gateway ${arrowSvg}</a>
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
                                                        <div class="spz-review-card ${subItem2.cClass}">
                                                            <div class="review-img">
                                                                <img src="${subItem2.cImg}" alt="${subItem2.cName}">
                                                            </div>
                                                            <div class="review-content">
                                                                <div class="card-title"><p class="name">${subItem2.cName}</p><p class="desg">${subItem2.cDesg}</p></div>
                                                                <div class="card-desc">${subItem2.cDesc}</div>
                                                                ${(subItem2.cLink && subItem2.cLink != null) ? `<a href="${subItem2.cLink}" class="card-link">Learn More ${arrowSvg}</a>` : ""}
                                                            </div>
                                                        </div>
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
                                                    <div class="spz-menu-card ${subItem2.cClass}">
                                                        <img src="${subItem2.cImg}" alt="${subItem2.cTitle}">
                                                        <div class="card-title">${subItem2.cTitle}</div>
                                                        <div class="card-desc">${subItem2.cDesc}</div>
                                                        ${(subItem2.cLink && subItem2.cLink != null) ? `<a href="${subItem2.cLink}" class="card-link">Learn More ${arrowSvg}</a>` : ""}
                                                    </div>
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
        if (!document.querySelector('header > .MuiContainer-root [class*="Header-contentContainer"] > nav > ul[class*="Header-headerMenuNavItems"] > .spz-disabled-anchor-wrapper')) {
            document.querySelector('.spz-22002 header > .MuiContainer-root [class*="Header-contentContainer"] > nav > ul[class*="Header-headerMenuNavItems"]').insertAdjacentHTML('beforeend', `
                <li class="spz-disabled-anchor-wrapper pricing-disabled">
                    <div class="disabled-anchor-wrapper">
                        <a href="javascript:void(0);" class="spz-d-link">
                            Pricing 
                            ${arrowSvg}
                        </a>
                    </div>
                </li>
                <li class="spz-disabled-anchor-wrapper alliance-disabled">
                    <div class="disabled-anchor-wrapper">
                        <a href="javascript:void(0);" class="spz-d-link">
                            Log In To Alliance Gateway 
                            ${arrowSvg}
                        </a>
                    </div>
                </li>`);
        }
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
        // Get the header height
        // const headerHeight = document.querySelector('header').offsetHeight;
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
                if (window.getComputedStyle(document.querySelector('[data-testid="MenuIcon"]'), null).display == 'none') {
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