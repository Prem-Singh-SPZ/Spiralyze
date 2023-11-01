(function () {
    document.body.classList.add('spz-4002');
    let identifyPage = window.location.pathname.replace('/', '').replace('.html', '');
    document.querySelector('body').classList.add(identifyPage);


    const pageContent = [{
        pageName: "website-proxyclick-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1694619471/eptura/4004/logo-proxyclick.svg",
        logoAlt: "Proxyclick Demo",
    },
    {
        pageName: "website-managerplus-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693575720/eptura/4003/managerplus-eptura-logo-1.svg",
        logoAlt: "Managerplus Demo",
    },
    {
        pageName: "website-archibus-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693575732/eptura/4003/archibus-eptura-logo-color_1.svg",
        logoAlt: "Archibus Demo",
    },
    {
        pageName: "website-spaceiq-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693575752/eptura/4003/spaceiq-eptura-logo-color_1.svg",
        logoAlt: "SpaceIQ Demo",
    },
    {
        pageName: "website-ioffice-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693575766/eptura/4003/ioffice-eptura-logo-color_1.svg",
        logoAlt: "IOffice Demo",
    },

    ];

    // create a json of 6 image url and respective title
    const imageUrlsForStep1 = [{
        image: "//res.cloudinary.com/dxprfaxf3/image/upload/v1696423194/eptura/4002/icon-01-desktop.svg",
        title: "Corporate services"
    },
    {
        image: "//res.cloudinary.com/dxprfaxf3/image/upload/v1696423194/eptura/4002/icon-02-desktop.svg",
        title: "Software/<span>technology</span>"
    },
    {
        image: "//res.cloudinary.com/spiralyze/image/upload/v1697629030/eptura/4002/icon-03-desktop_2.svg",
        title: "Government"
    },
    {
        image: "//res.cloudinary.com/dxprfaxf3/image/upload/v1696423194/eptura/4002/icon-11_2.svg",
        title: "Manufacturing"
    },
    {
        image: "//res.cloudinary.com/dxprfaxf3/image/upload/v1696423194/eptura/4002/icon-05-desktop.svg",
        title: "Finance"
    },
    {
        image: "//res.cloudinary.com/dxprfaxf3/image/upload/v1696423194/eptura/4002/icon-05_5.svg",
        title: "Other"
    }
    ];

    const imageUrlsForStep2 = [{
        image: "//res.cloudinary.com/dxprfaxf3/image/upload/v1696423305/eptura/4002/icon-07-desktop.svg",
        title: "0-200"
    },
    {
        image: "//res.cloudinary.com/dxprfaxf3/image/upload/v1696423305/eptura/4002/icon-08-desktop.svg",
        title: "200-1999"
    },
    {
        image: "//res.cloudinary.com/dxprfaxf3/image/upload/v1696423305/eptura/4002/icon-09-desktop.svg",
        title: "2000+"
    }
    ];

    waitForElm('#bodyId #hero #HeroFormCol #HeroForm .mktoForm .mktoFormRow .mktoField').then(function () {
        document.body.classList.add('spz-4002');
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
        stepValidations();


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

        document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1692677050/eptura/3002/form-checkmark-errored.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-hover.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-checked.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1696578810/eptura/4002/Checkbox-hover.svg" as="image">
        <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1696578810/eptura/4002/Checkbox-filled.svg" as="image">
        <link rel="preload" href="//res.cloudinary.com/dxprfaxf3/image/upload/v1696586009/eptura/4002/aura-1_5.svg" as="image">
        <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1696843119/eptura/4002/Aura-2-Disabled.svg" as="image">
        <link rel="preload" href="//res.cloudinary.com/dxprfaxf3/image/upload/v1696586009/eptura/4002/aura-2_5.svg" as="image">
        <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1696843119/eptura/4002/Aura-3-Disabled.svg" as="image">
        <link rel="preload" href="//res.cloudinary.com/dxprfaxf3/image/upload/v1696586009/eptura/4002/aura-3_5.svg" as="image">`
        );
    }


    function updatePageContent() {
        waitForElm('#nav #NavLogo #logo-img').then(function () {
            pageContent.forEach(function (url) {
                if (identifyPage == url.pageName) {
                    document.querySelector('#hero > .hero_container > .row > #HeroFormCol').insertAdjacentHTML('afterbegin', `<div class="spz-logo"><img src="` + url.pageLogo + `" alt="` + url.logoAlt + `"></div>
                    <div class="steps-container">
                    <div class="steps">
                    <div class="step-1 active">
                        <span class="step-11">Step 1</span>
                        </div>
                        <div class="step-2">
                        <span class="line"></span>
                        <span class="step-11">Step 2</span>
                        </div>
                        <div class="step-3">
                        <span class="line"></span>
                        <span class="step-11">Step 3</span>
                    </div>
                    </div>
                    <div class="step-ques-section-1">
                    <div class="step-ques-sub-title">Get a Demo</div>
                    <div class="step-ques-title">What is your industry?</div>
                    <div class="step-ques-variant-question">
                        <div class="d-flex flex-wrap justify-content-between form-checkboxes">
                        <!-- Custom checkbox starts -->
                        `+ checkBoxHTML(imageUrlsForStep1) + `
                        <!-- Custom checkbox ends -->
                        </div>
                        <div class="step-error-1 spz-hidden"><img src="//res.cloudinary.com/dxprfaxf3/image/upload/v1696580574/eptura/4002/icon-info.svg" alt="info-icon"><span>Choose your answer</span></div>
                    </div>
                    <div class="step-ques-button">
                        <button class="call-to-action step-1">Next<img class="cta-arrow" alt="Arrow" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1696423223/eptura/4002/navigation__5_-_navigation_arrow_arrows_direction_right_icon.svg" /></button></div>
                    </div>
                    <div class="step-ques-section-2 spz-hidden">
                    <div class="step-ques-sub-title">Get a Demo</div>
                    <div class="step-ques-title">What is your employee range?</div>
                    <div class="step-ques-variant-question">
                        <div class="d-flex flex-wrap justify-content-between form-checkboxes">
                        <!-- Custom checkbox starts -->
                        `+ checkBoxHTML(imageUrlsForStep2) + `
                        <!-- Custom checkbox ends -->
                        </div>
                        <div class="step-error-2 spz-hidden"><img src="//res.cloudinary.com/dxprfaxf3/image/upload/v1696580574/eptura/4002/icon-info.svg" alt="info-icon"><span>Choose your answer</span></div>
                    </div>
                    <div class="step-ques-button">
                        <button class="call-to-action step-2">Next<img class="cta-arrow" alt="Arrow" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1696423223/eptura/4002/navigation__5_-_navigation_arrow_arrows_direction_right_icon.svg" /></button></div>
                    </div></div>`);

                    checkBoxEvents();

                }
            })
        });
    }

    //Steps show hide logic
    function stepValidations() {

        waitForElm('.step-ques-section-1 .call-to-action.step-1').then(function () {

            document.querySelector('#HeroFormPanel').classList.add('spz-hidden');
            //move #HeroFormPanel inside .steps-container div
            document.querySelector('.steps-container').appendChild(document.querySelector('#HeroFormPanel'));


            //onclick of .call-to-action.step-1 check if at east one checkbox is checked and show .step-ques-section-2
            document.querySelector('.step-ques-section-1 .call-to-action.step-1').addEventListener('click', function () {
                if (document.querySelector('.step-ques-section-1 .form-checkboxes input:checked')) {
                    document.querySelector('.step-ques-section-1').classList.add('spz-hidden');
                    document.querySelector('.step-ques-section-2').classList.remove('spz-hidden');
                    document.querySelector('.steps .step-1').classList.replace("active", "filled");
                    document.querySelector('.steps .step-2').classList.add('active');
                }
                else {
                    document.querySelector('.step-error-1').classList.remove('spz-hidden');
                }
            });

            document.querySelector('.step-ques-section-2 .call-to-action.step-2').addEventListener('click', function () {
                if (document.querySelector('.step-ques-section-2 .form-checkboxes input:checked')) {
                    document.querySelector('.step-ques-section-2').classList.add('spz-hidden');
                    document.querySelector('#HeroFormPanel').classList.remove('spz-hidden');
                    document.querySelector('.steps .step-2').classList.replace("active", "filled");
                    document.querySelector('.steps .step-3').classList.add('active');
                }
                else {
                    document.querySelector('.step-error-2').classList.remove('spz-hidden');
                }
            });
        })
    }

    //custom html for checkbox
    function checkBoxHTML(stepIdentify) {

        let thisPage = stepIdentify;

        let featureEl = ''
        thisPage.forEach((element, index) => {
            featureEl += `<label class="custom-checkbox-spz" for="${element.title.replace('<span>', '').replace('</span>', '')}"><div class="ccs-img">
            <img src="${element.image}" alt="${element.title.replace('<span>', '').replace('</span>', '')}" />
        </div>
        <div class="ccs-label">${element.title}</div>
        <div class="ccs-checkbox">
            <input type="checkbox" id="${element.title.replace('<span>', '').replace('</span>', '')}" name="${element.title.replace('<span>', '').replace('</span>', '')}" />
            <span class="ccs-box"></span>
        </div> </label>`
        });
        featureEl += '';

        return featureEl;
    }

    //checkbox events
    function checkBoxEvents() {
        document.querySelectorAll('.custom-checkbox-spz').forEach((checkbox) => {
            checkbox.addEventListener('click', (e) => {
                // Remove any active class and checked attribute from other checkboxes
                e.stopPropagation();
                e.preventDefault();

                if (document.querySelector('.custom-checkbox-spz.active')) {
                    document.querySelector('.custom-checkbox-spz.active input').removeAttribute('checked');
                    document.querySelector('.custom-checkbox-spz.active').classList.remove('active');
                }

                // Add active class and checked attribute to clicked checkbox
                if (!checkbox.classList.contains('active')) {
                    checkbox.classList.add('active');
                    checkbox.querySelector('input').setAttribute('checked', true);
                }
            });
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
        if (document.querySelector('#HeroFormCol #HeroFormTitleText')) {
            document.querySelector('#HeroFormCol #HeroFormTitleText').innerHTML = '<h6>Get a demo</h6>';
        }

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



