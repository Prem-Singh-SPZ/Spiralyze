(function () {
    const astUrl = '//res.cloudinary.com/spiralyze/image/upload/';
    const navSelector = 'header [class*="HeaderNavLink-navItemSubMenuWrapper"]';
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
                        link: "",
                        icon: astUrl + "fl_sanitize/drata/22002/component_95.svg"
                    },
                    {
                        text: "Trust Center",
                        info: "Your fast pass to vendor security reviews.",
                        link: "",
                        icon: astUrl + "fl_sanitize/drata/22002/component_118.svg"
                    },
                    {
                        text: "Vendor Risk Management",
                        info: "Identify and monitor vendor risk.",
                        link: "",
                        icon: astUrl + "fl_sanitize/drata/22002/component_117.svg"
                    },
                    {
                        text: "Risk Management",
                        info: "Put risk management on autopilot.",
                        link: "",
                        icon: ""
                    },
                    {
                        text: "Compliance as Code",
                        info: "Address compliance across the software development lifecycle. ",
                        link: "",
                        icon: ""
                    },
                    {
                        text: "User Access Reviews",
                        info: "Conduct user access reviews directly to increase security.",
                        link: "",
                        icon: ""
                    },
                    {
                        text: "Audit Hub",
                        info: "Streamline the audit process with advanced tools and workflows.",
                        link: "",
                        icon: ""
                    },
                ]
            },
            {
                text: "FRAMEWORKS",
                class: "frameworks-spz",
                link: "",
                subMenu: [
                    { text: 'SOC 2', link: "", icon: astUrl + "fl_sanitize/drata/22002/component_94.svg" },
                    { text: 'ISO 27001', link: "", icon: "" },
                    { text: 'HIPAA', link: "", icon: "" },
                    { text: 'GDPR', link: "", icon: "" },
                    { text: 'PCI DSS', link: "", icon: "" },
                    { text: 'Cyber Essentials', link: "", icon: "" },
                    { text: 'NIST AI RMF', link: "", icon: "" },
                    { text: 'CCPA', link: "", icon: "" },
                    { text: 'CMMC', link: "", icon: "" },
                    { text: 'Microsoft SSPA', link: "", icon: "" },
                    { text: 'NIST CSF', link: "", icon: "" },
                    { text: 'NIST SP 800-53', link: "", icon: "" },
                    { text: 'NIST SP 800-171', link: "", icon: "" },
                    { text: 'ISO 27701', link: "", icon: "" },
                    { text: 'FFIEC', link: "", icon: "" },
                    { text: 'CCM', link: "", icon: "" },
                    { text: 'FedRAMP', link: "", icon: "" },
                    { text: 'ISO 27017', link: "", icon: "" },
                    { text: 'ISO 27018', link: "", icon: "" },
                    { text: 'Custom Frameworks', link: "", icon: "" },
                ]
            },
            {
                text: "TAKE DRATA FURTHER",
                class: "take-drata-spz",
                link: "",
                subMenu: [
                    { text: 'Customer Success', link: "", icon: astUrl + "fl_sanitize/drata/22002/component_91.svg" },
                    { text: 'Partners', link: "", icon: "" },
                    { text: 'API', link: "", icon: "" },
                    { text: 'Integrations', link: "", icon: "" },
                ]
            },
        ]
    };

    function createTest() {

        waitForElm(navSelector).then(function () {
            document.querySelector("body").classList.add("spz-22002");

            navigationContent();
            submitTestDetails('Variant_22002');
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
        if (document.querySelector('form.hs-form-private .hs_cro_test_3 .input .hs-input')) {
            document.querySelector('form.hs-form-private .hs_cro_test_3 .input .hs-input').setAttribute('value', cro_test);
        }
    }

    function demoChecked() {
        const sInt = setInterval(() => {
            var cro_field = document.querySelector('form.hs-form-private .hs_cro_test_3 .input .hs-input');

            // Check if spz-22002-loaded cookie is present and cro_field is present
            if ((cro_field && cro_field.val != "") && isCookieExist('spz-22002-loaded')) {
                clearInterval(sInt);
                submitTestDetails('Variant_22002');

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
            // ADDED ONLY FOR DEMO PAGE TO ADD Variant_22002 IN HIDDEN FIELD
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

            const menuNav = document.querySelector('header .solutions-spz [class*=HeaderNavLink-navItemSubMenuWrapper] [class*=HeaderNavLink-navItemSubMenu]');

            // Remove all LI in menuNav
            menuNav.innerHTML = "";

            navContent.solutions.forEach((subItem1, subIndex) => {

                menuNav.insertAdjacentHTML('beforeend', `
                    <li class="css-spz-MuiListItem-root-HeaderNavLink-navItemSubMenuItem ${subItem1.class}">
                        <div class="MuiBox-root css-spz-HeaderNavGroup-root" data-testid="HeaderNavGroup">
                            <a class="css-spz-Link-root-HeaderNavGroup-navItemLink-HeaderNavLink-navItemGroup" href="">${subItem1.text}</a>
                            <div class="MuiBox-root css-spz-HeaderNavGroup-navItemSubMenuWrapper">
                                <ul class="MuiList-root MuiList-padding css-spz-MuiList-root-HeaderNavGroup-navItemSubMenu">
                                    ${subItem1.subMenu.map((subItem2, subIndex) => {
                    return `<li class="css-spz-MuiListItem-root-HeaderNavLink-navItemSubMenuItem">
                                                    <div class="MuiBox-root css-spz-HeaderNavLinkNested-root" data-testid="HeaderNavLinkNested">
                                                        <a class="css-spz-Link-root-HeaderNavLinkNested-navItemLink-HeaderNavGroup-navItemGroup" href="${subItem2.link}">
                                                            ${(subItem2.icon && subItem2.icon != null) ? `<div class="menu-icon"><img src="${subItem2.icon}" alt="${subItem2.text}" /></div>` : ""}
                                                            <div class="menu-texts">
                                                                ${subItem2.text}
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

        }
    }

    function mainMenuUpdates() {
        //replace "solutions" text to "key" in above html rest keep as is
        document.querySelector('.spz-22002 .MuiLink-selected[class$=HeaderNavLink-navItemLink]').innerHTML = document.querySelector('.spz-22002 .MuiLink-selected[class$=HeaderNavLink-navItemLink]').innerHTML.replace('Solutions', 'Product');

    }

    function navStyleBase() {
        // Get the header height
        const headerHeight = document.querySelector('header').offsetHeight;
        setInterval(() => {
            console.log(headerHeight, isTopBarVisible);
            if (document.querySelector(`${navSelector}[open]`)) {
                // Stop page from scrolling when navSelector has 'open' attribute
                document.body.classList.add('nav-open-spz');

                // Set the navigation position according to the header height
                // document.querySelector(`${navSelector}[open]`).style.top = `${headerHeight}px`;
                // document.querySelector(`${navSelector}[open]`).style.maxHeight = `calc(100vh - ${headerHeight}px)`;
            } else {
                document.body.classList.remove('nav-open-spz');
            }
        }, 500);


        // Set the navigation position according to the header height
        // document.querySelectorAll(navSelector).forEach(nav => {
        //     nav.style.top = `${headerHeight}px`;
        // });

        // Get all 'HeaderNavLink-navItemLink' text and apply it as a class to the closest li
        document.querySelectorAll('header [class*="HeaderNavLink-navItemLink"]').forEach(navItem => {
            const navItemText = navItem.innerText.replace(/\s+/g, '-').toLowerCase();
            navItem.closest('li').classList.add(`${navItemText}-spz`);
        });
    }
})();