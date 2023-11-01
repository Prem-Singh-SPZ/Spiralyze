(function () {
    document.body.classList.add('spz-4005');
    let identifyPage = window.location.pathname.replace('/', '').replace('.html', '');
    document.querySelector('body').classList.add(identifyPage);

    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/swiper@10.3.1/modules/effect-fade.min.css';
    document.head.appendChild(link);

    function getScript(source, callback) {
        var el = document.createElement("script");
        el.onload = callback;
        el.src = source;
        document.body.appendChild(el);
    }

    function loadSlider() {
        getScript("https://cdn.jsdelivr.net/npm/swiper@10.3.1/swiper-bundle.min.js", function () {
            const swiper = new Swiper('.swiper', {
                slidesPerView: "auto",
                loop: true,
                speed: 1200,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
            });
        });
    }

    let isSlider_init = setInterval(() => {
        if (document.querySelector('.logos-slider.swiper,mySwiper swiper-initialized')) {
            clearInterval(isSlider_init);
            loadSlider();
        }
    }, 100);

    const pageContent = [{
        pageName: "website-proxyclick-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694619471/eptura/4004/logo-proxyclick.svg",
        logoAlt: "Proxyclick demo",
    },
    {
        pageName: "website-managerplus-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693575720/eptura/4003/managerplus-eptura-logo-1.svg",
        logoAlt: "ManagerPlus demo",
    },
    {
        pageName: "website-archibus-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693575732/eptura/4003/archibus-eptura-logo-color_1.svg",
        logoAlt: "Archibus demo",
    },
    {
        pageName: "website-spaceiq-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693575752/eptura/4003/spaceiq-eptura-logo-color_1.svg",
        logoAlt: "SpaceIQ demo",
    },
    {
        pageName: "website-ioffice-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693575766/eptura/4003/ioffice-eptura-logo-color_1.svg",
        logoAlt: "iOFFICE demo",
    },

    ];

    waitForElm('#bodyId #hero #HeroFormCol #HeroForm .mktoForm .mktoFormRow .mktoField').then(function () {
        document.body.classList.add('spz-4005');
        loadTest();
        clearFormFields();
    });

    //Clear form fields
    function clearFormFields() {
        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {
            el.value = '';
            if (el.closest('.mktoFormCol').classList.contains('input-filled')) {
                el.closest('.mktoFormCol').classList.remove('input-filled');
            }
        });
    }

    function loadTest() {
        formUpdate();
        focusFields();
        updatePageContent();

        window.addEventListener("click", function (e) {
            if (e.target.classList.contains("show-comment-dynamic")) {
                e.target.parentElement.classList.add('spz-hidden');
                this.document.querySelector('#Lead_Notes__c').focus();
            }

            if (e.target.classList.contains("mktoField")) {
                showGlobalError();
            }

            if (e.target.classList.contains("mktoButton")) {
                document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {
                    checkError(el);
                    showGlobalError();
                });
            }
        });

        // Add class 'safari' 
        if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
            document.querySelector('body').classList.add('safari')
        }

        document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1692677050/eptura/3002/form-checkmark-errored.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-hover.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-checked.svg" as="image">`
        );
    }


    function updatePageContent() {
        waitForElm('#nav #NavLogo #logo-img').then(function () {
            pageContent.forEach(function (url) {
                if (identifyPage == url.pageName) {

                    if (document.querySelector('#HeroFormCol #HeroFormTitleText')) {
                        if (identifyPage == "website-archibus-demo" || identifyPage == "website-ioffice-demo") {
                            document.querySelector('#HeroFormCol #HeroFormTitleText').innerHTML = `<h6>Get an ` + url.logoAlt + `</h6>`;
                        }
                        else {
                            document.querySelector('#HeroFormCol #HeroFormTitleText').innerHTML = `<h6>Get a ` + url.logoAlt + `</h6>`;
                        }
                    }

                    document.querySelector('#hero > .hero_container > .row > #HeroFormCol').insertAdjacentHTML('afterbegin', `<div class="spz-logo"><img src="` + url.pageLogo + `" alt="` + url.logoAlt + `"></div>`);


                    if (identifyPage == "website-archibus-demo" || identifyPage == "website-spaceiq-demo") {
                        document.querySelector('#HeroForm').insertAdjacentHTML('afterend', `<div class="logos-ribbon">
                        <div class="ribbon-title">
                            <h6>Connect to <br><span> 30+ </span> platforms</h6>
                        </div>
                        <div class="logos-slider swiper mySwiper">
                            <div class="slider-wrapper swiper-wrapper">
                            <div class="swiper-slide">
                                <img class="logo" alt="Microsoft" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_microsoft.svg" />
                            </div>
                            <div class="swiper-slide">
                                 <img class="logo" alt="Okta" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_okta.svg" />
                            </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Google" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_google.svg" />
                            </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Amazon AWS" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697021063/eptura/4005/logo_-_amazon_aws.svg" />
                            </div>
                            <div class="swiper-slide">
                                 <img class="logo" alt="Slack" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_slack.svg" />
                             </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Oracle" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697021063/eptura/4005/logo_-_oracle.svg" />
                            </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Azure Ad" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_azure_ad.svg" />
                            </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Autodesk" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697021063/eptura/4005/logo_-_autodesk.svg" />
                             </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Salesforce" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_salesforce.svg" />
                             </div>
                             <div class="swiper-slide">
                                <img class="logo" alt="Microsoft" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_microsoft.svg" />
                            </div>
                            <div class="swiper-slide">
                                 <img class="logo" alt="Okta" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_okta.svg" />
                            </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Google" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_google.svg" />
                            </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Amazon AWS" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697021063/eptura/4005/logo_-_amazon_aws.svg" />
                            </div>
                            <div class="swiper-slide">
                                 <img class="logo" alt="Slack" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_slack.svg" />
                             </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Oracle" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697021063/eptura/4005/logo_-_oracle.svg" />
                            </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Azure Ad" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_azure_ad.svg" />
                            </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Autodesk" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697021063/eptura/4005/logo_-_autodesk.svg" />
                             </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Salesforce" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_salesforce.svg" />
                             </div>
                            </div>
                        </div>
                        </div>`);
                    }
                    else {
                        document.querySelector('#HeroForm').insertAdjacentHTML('afterend', `<div class="logos-ribbon">
                        <div class="ribbon-title">
                            <h6>Connect to <br><span> 40+ </span> platforms</h6>
                        </div>
                        <div class="logos-slider swiper mySwiper">
                            <div class="slider-wrapper swiper-wrapper">
                            <div class="swiper-slide">
                                <img class="logo" alt="Microsoft" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_microsoft.svg" />
                            </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Microsoft Teams" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_microsoft_teams.svg" />
                            </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Outlook" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_outlook.svg" />
                            </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Slack" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_slack.svg" />
                            </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Google" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_google.svg" />
                            </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Salesforce" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_salesforce.svg" />
                             </div>
                             <div class="swiper-slide">
                                 <img class="logo" alt="Okta" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_okta.svg" />
                            </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Google Drive" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020744/eptura/4005/logo_-_google_drive.svg" />
                            </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Dropbox" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_dropbox.svg" />
                            </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Azure Ad" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_azure_ad.svg" />
                            </div>
                            <div class="swiper-slide">
                                <img class="logo" alt="Cisco" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697020743/eptura/4005/logo_-_cisco.svg" />
                            </div>
                            </div>
                        </div>
                        </div>`);
                    }
                }
            })
        });
    }


    //custom error for checkbox field
    function showGlobalError() {
        let checkErrorforCheckBox = setInterval(() => {
            if (document.querySelector('.mktoLogicalField.mktoCheckboxList.mktoInvalid') && document.querySelector('.mktoLogicalField.mktoCheckboxList.mktoInvalid + .mktoError')) {
                document.querySelector('#LblSingle_Opt_In__c').closest('.mktoFieldWrap').classList.add('spz-cstm-error');
            }
            else {
                document.querySelector('#LblSingle_Opt_In__c').closest('.mktoFieldWrap').classList.remove('spz-cstm-error');
            }
        }, 50);

        setTimeout(() => {
            clearInterval(checkErrorforCheckBox);
        }, 1000);
    }

    //Marketo form update
    function formUpdate() {
        // if (document.querySelector('#HeroFormCol #HeroFormTitleText')) {
        //     document.querySelector('#HeroFormCol #HeroFormTitleText').innerHTML = '<h6>Request a demo</h6>';
        // }

        document.querySelector('#HeroFormCol .mktoForm em').closest('.mktoFormRow').classList.add('spz-email');
        document.querySelector('#HeroFormCol .mktoForm em').innerHTML = `Trouble submitting? <br class="mobile-only"> Email us at <a href="mailto:info@eptura-marketing.com" target="_blank" id="">info@eptura-marketing.com</a>`;

        document.querySelector('body .body-wrapper #hero .hero_container.page_padding > .row #HeroFormCol #HeroFormPanel #HeroForm form.mktoForm .mktoFormRow .mktoFormCol .mktoFieldWrap .mktoHtmlText.mktoHasWidth span').innerText = 'If you consent to us contacting you, please tick below to confirm you would like us to contact you:';

        document.querySelector('#HeroFormCol .mktoForm .spz-email').before(document.querySelector('#HeroFormCol .mktoForm .mktoButtonRow'));

        document.querySelector('#Lead_Notes__c').closest('.mktoFormCol').insertAdjacentHTML(`beforebegin`, `<div class="spz-anchor"><a href="javascript:void(0);" class="show-comment-dynamic">+ Comment</a></div>`);

        document.querySelector('#I_am__c').addEventListener('change', function () {
            dropdownFunctionality(this.value);
        });

        document.querySelector('#LblI_am__c').textContent = 'I am...*';
    }

    //On value change of "I am.." field switch label od comment button
    function dropdownFunctionality(val) {
        let setBuffer = setInterval(() => {
            if (document.querySelector('#Lead_Notes__c')) {
                if (document.querySelector('.spz-anchor').classList.contains('spz-hidden')) {
                    document.querySelector('.spz-anchor').classList.remove('spz-hidden');
                }
            }
            else {
                document.querySelector('.spz-anchor').classList.add('spz-hidden');
            }

            if (val == 'Other' || val == 'A current client' || val == 'A current Partner') {
                document.querySelector('.show-comment-dynamic').textContent = '+ Please let us know how we may assist you';
            }
            else {
                document.querySelector('.show-comment-dynamic').textContent = '+ Comment';
            }
            focusFields();
        }, 5);

        setTimeout(() => {
            clearInterval(setBuffer);
        }, 50);
    }

    // On input focus add class on closest parent field class
    function focusFields() {
        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {

            blockChar();

            el.addEventListener('focus', function () {
                el.closest('.mktoFormCol').classList.add('field-focus');
            });
            el.addEventListener('blur', function () {
                el.closest('.mktoFormCol').classList.remove('field-focus');
                checkError(el);
            });

            // add event listeners to the input element
            el.addEventListener('keypress', () => {
                checkError(el);
            });

            el.addEventListener('change', () => {
                checkError(el);
            });

            el.addEventListener('keydown', () => {
                checkError(el);
            });

            el.addEventListener('keyup', () => {
                checkError(el);
            });
        });
    }

    // Function to add .field-error class on closest parent .field class if .error is exist on input
    function checkError(elem) {
        let timeBuffer = setInterval(() => {
            if (elem.closest('.mktoFormCol ').querySelector('.mktoError') && elem.closest('.mktoFormCol').querySelector('.mktoInvalid')) {
                elem.closest('.mktoFormCol').classList.add('field-error');
            } else {
                elem.closest('.mktoFormCol').classList.remove('field-error');
            }
            if (elem && elem.value && (elem.value != '')) {
                // console.log(elem.value)
                elem.closest('.mktoFormCol').classList.add('input-filled');
                // elem.closest('.mktoFormCol').classList.remove('field-error');
            } else {
                elem.closest('.mktoFormCol').classList.remove('input-filled');
                // elem.closest('.mktoFormCol').classList.add('field-error');
            }

        }, 100);

        setTimeout(() => {
            clearInterval(timeBuffer);
        }, 1000);
    }

    //Block "e" from number of employees field
    function blockChar() {
        document.querySelector('#NumberOfEmployees').addEventListener("keydown", function (e) {
            if (e.key == 'e') {
                e.preventDefault();
            }
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