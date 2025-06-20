(function () {
    function createTest() {
        let bodyLoaded = setInterval(function () {
            const body = document.querySelector('body');
            if (body) {
                clearInterval(bodyLoaded);
                if (!document.body.classList.contains('spz_3004')) {
                    removeSpecificCookieValue('SPZ_3004', 'SPZ_3004_truecontrol');
                    document.body.classList.add('spz_3004');
                    waitForElm('.spz_3004 .product-hero .row__inner .inner-row__inner .form-header .text-white').then(() => {
                        let keepChanges = setInterval(() => {
                            if (document.querySelector('.spz_3004 .product-hero .row__inner .column.relative .column__inner .heading-lg.text-h1.text-cobalt') && document.querySelector('.spz_3004 .product-hero .row__inner .column.relative .column__inner .heading-lg.text-h1.text-cobalt').textContent !== 'Streamline identity and access management') {
                                heroSectionUpdate();
                                accordionSection();
                            }
                            // if (document.querySelector('.spz_3004 #page-container .page-transition .product-hero .row__inner .inner-row__inner .column:last-child .mkto-wrap.w-full.iron-theme #mktoForm_1018.mktoForm .mktoFieldWrap .mktoField')) {
                            //     formModify();
                            // }
                            waitForElm('.spz_3004 #page-container .page-transition .product-hero .row__inner .inner-row__inner .column:last-child .mkto-wrap.w-full.iron-theme #mktoForm_1018.mktoForm .mktoFieldWrap .mktoField').then(() => {
                                if (!document.querySelector('.spz_3004 #page-container .page-transition .product-hero #mktoForm_1018.mktoForm .row_FirstName')) {
                                    formModify();
                                    clearInterval(keepChanges);
                                }
                            });
                            hiddenValue('SPZ_3004', 'SPZ_3004_variant');
                        }, 10);

                        setTimeout(() => {
                            clearInterval(keepChanges);
                        }, 5000);
                    });

                } else {
                    if (document.body.classList.contains('spz_3004')) {
                        removeSpecificCookieValue('SPZ_3004', 'SPZ_3004_truecontrol');
                        hiddenValue('SPZ_3004', 'SPZ_3004_variant');
                    }
                }
            }
        });
    }

    function formModify() {
        document.querySelector('.spz_3004 .product-hero .row__inner .inner-row').classList.add('spz-form-container');
        document.querySelector('.spz_3004 .product-hero .row__inner .inner-row__inner .form-header .text-white').textContent = 'Get a demo';

        var form_fields = document.querySelectorAll('.spz_3004 #mktoForm_1018.mktoForm .mktoFormRow');
        for (var i = 0; i < form_fields.length; i++) {
            if (form_fields[i].querySelector('.mktoField[name]:not([type="hidden"])')) {
                var dynamicClass = form_fields[i].querySelector('.mktoField[name]:not([type="hidden"])').getAttribute('name');
                form_fields[i].classList.add('row_' + dynamicClass);
            }
            else {
                if (!form_fields[i].querySelector('.mktoPlaceholderGlobal_Opt_in__c')) {
                    if (i <= 12) {
                        form_fields[i].classList.add('hidden');
                    }
                }
                else {
                    form_fields[i].classList.add('row_Global_Opt_in__c');
                }
            }
        }

        waitForElm(`.spz_3004 #mktoForm_1018.mktoForm .mktoFieldWrap select#Country`).then((elm) => {
            setTimeout(() => {
                document.querySelectorAll(`.spz_3004 #mktoForm_1018.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
                    if (el && el.value && (el.value != '')) {
                        el.closest('.mktoFieldWrap').classList.add('filled');
                    }
                });
            }, 1000);
        });

        function focusFields() {
            // Attach events using event delegation
            const form = document.querySelector('.spz_3004 #mktoForm_1018.mktoForm');
            if (!form) return;

            form.addEventListener('focus', function (event) {
                const el = event.target;
                if (el.classList.contains('mktoField')) {
                    el.closest('.mktoFieldWrap').classList.add('typing');
                    checkAllFields();
                }
            }, true);

            form.addEventListener('blur', function (event) {
                const el = event.target;
                if (el.classList.contains('mktoField')) {
                    el.closest('.mktoFieldWrap').classList.remove('typing');
                    checkAllFields();
                }
            }, true);

            form.addEventListener('input', function (event) {
                const el = event.target;
                if (el.classList.contains('mktoField')) {
                    checkAllFields();
                }
            });

            form.addEventListener('change', function (event) {
                const el = event.target;
                if (el.classList.contains('mktoField')) {
                    checkAllFields();
                }
            });

            // Function to reapply functionality for dynamic fields
            function reapplyStateFieldListeners() {
                const stateField = document.querySelector('.spz_3004 #mktoForm_1018.mktoForm .mktoFieldWrap .mktoField#State');
                if (stateField) {
                    stateField.addEventListener('focus', function () {
                        stateField.closest('.mktoFieldWrap').classList.add('typing');
                        checkAllFields();
                    });
                    stateField.addEventListener('blur', function () {
                        stateField.closest('.mktoFieldWrap').classList.remove('typing');
                        checkAllFields();
                    });
                    stateField.addEventListener('input', function () {
                        checkAllFields();
                    });
                    stateField.addEventListener('change', function () {
                        checkAllFields();
                    });
                }
            }

            // Reapply listeners whenever the state field is dynamically updated
            const observer = new MutationObserver(() => {
                reapplyStateFieldListeners();
            });

            const container = document.querySelector('.spz_3004 #mktoForm_1018.mktoForm');
            if (container) {
                observer.observe(container, { childList: true, subtree: true });
            }
        }
        focusFields();
        function checkAllFields() {
            const fields = document.querySelectorAll('.spz_3004 #mktoForm_1018.mktoForm .mktoField');
            const timeBuffer = setInterval(() => {
                fields.forEach(field => {
                    const fieldWrap = field.closest('.mktoFieldWrap');
                    if (fieldWrap) {
                        // Check for error
                        const errorElement = fieldWrap.querySelector('.mktoError');
                        if (errorElement && errorElement.style.display !== 'none') {
                            // fieldWrap.classList.add('error');
                        } else {
                            // fieldWrap.classList.remove('error');
                        }

                        // Check if the field is filled
                        if (field.value && field.value.trim() !== '') {
                            fieldWrap.classList.add('filled');
                        } else {
                            fieldWrap.classList.remove('filled');
                        }
                    }
                });
            }, 100);

            setTimeout(() => {
                clearInterval(timeBuffer);
            }, 1000);
        }

        MktoForms2.whenReady(function (form) {
            form.onSuccess(function (values, followUpUrl) {
                document.body.classList.add('form-submit');
                document.querySelector('.spz_3004 #page-container .page-transition .product-hero .row__inner .inner-row .inner-row__inner .column:first-child .column__inner').style.display = 'none';

                return false;
            });

            waitForElm('.spz_3004 .mkto-wrap.w-full.iron-theme #confirm #contact_us_submit').then(() => {
                document.querySelector('.spz_3004 #page-container .page-transition .product-hero .row__inner .inner-row .inner-row__inner .column:first-child .column__inner').style.display = 'none';
            });
        });

        waitForElm('#mktoForm_1018 .mktoButton').then(function (elm) {
            elm.addEventListener("click", function (e) {
                waitForElm('.spz_3004 .mktoForm .mktoError').then(function (elm) {
                    if (elm.querySelector('#ValidMsgEmail')) {
                        const targetNode = elm.parentNode;
                        const config = { attributes: true, childList: true, subtree: true };
                        const callback = (mutationList, observer) => {
                            for (const mutation of mutationList) {
                                if (mutation.type === "childList") {
                                    if (elm.parentNode === null && elm.style.display != 'none') {
                                        // targetNode.classList.add('error');
                                    } else {
                                        // elm.parentNode.classList.add('error');
                                    }
                                    observer.disconnect();
                                } else if (mutation.type === "attributes") {
                                    if (elm.parentNode === null) {
                                        // targetNode.classList.add('error');
                                    } else {
                                        // elm.parentNode.classList.add('error');
                                    }
                                    observer.disconnect();
                                }
                            }
                        };
                        const observer = new MutationObserver(callback);
                        observer.observe(targetNode, config);
                    } else {
                        let counterA = 0;
                        const intervalIdA = setInterval(() => {
                            if (document.querySelector('.spz_3004 .mktoForm .mktoError #ValidMsgEmail') !== null) {
                                // document.querySelector('.spz_3004 .mktoForm .mktoError #ValidMsgEmail').parentNode.parentNode.classList.add('error');
                            }
                            counterA++;
                            if (counterA >= 10) {
                                clearInterval(intervalIdA);
                            }
                        }, 500);
                    }
                });

                //inject current time and date in EST timezone into .intellimize2 hidden field
                var d = new Date();
                var n = d.toLocaleString('en-US', { timeZone: 'America/New_York' });
                var int2 = e.target.closest('.mktoForm').querySelector('input[name="intellimize2"]');
                if (int2)
                    int2.value = n;
            });
        });
    }

    function heroSectionUpdate() {
        if (document.querySelectorAll('.spz_3004 .product-hero .row__inner .column.relative .column__inner .trusted-companies').length === 0) {
            document.querySelector('.spz_3004 .product-hero .row__inner .column.relative').classList.add('spz-lc-container');
            document.querySelector('.spz_3004 .product-hero .row__inner .column.relative .column__inner').insertAdjacentHTML('beforeend', `<div class="spz-left-copy">
                <div class="sp-logo"><a href="javascript:;" class="sp-logo-home"><img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/logo__colored.svg" alt="SailPoint"></a></div>
                <h1 class="eyebrow">Identity Security Cloud</h1>
                <p class="text-h2 text-h1 text-cobalt">Streamline identity and access management</p>
                <ul class="list--checkmarks">
                    <li><span>Access management.</span> Use least-privilege policies, get real-time access monitoring, and auto-implement roles for zero trust security.</li>
                    <li><span>Complete coverage.</span> Manage non-employee or privileged access, machine identities, entitlements, passwords, risk, etc. Detect threats.</li>
                    <li><span>Compliance.</span> Generate audit trails to document compliance. GDPR, HIPAA, PCI, CCPA, FISMA, PCPD, PDPA, and more.</li>
                </ul>
                <div class="trusted-companies">
                    <h6 class="main-heading">Trusted by 51% of the Fortune 500</h6>
                    <div class="company-logos">
                        <div class="logo-card"><img src="//res.cloudinary.com/spiralyze/image/upload/v1742239929/sailpoint/1004/logo_2.svg" alt="aes"></div>
                        <div class="logo-card"><img src="//res.cloudinary.com/spiralyze/image/upload/v1742239930/sailpoint/1004/logo_3.svg" alt="gm"></div>
                        <div class="logo-card"><img src="//res.cloudinary.com/spiralyze/image/upload/v1742239929/sailpoint/1004/logo_4.svg" alt="Hershey's"></div>
                        <div class="logo-card"><img src="//res.cloudinary.com/spiralyze/image/upload/v1742239929/sailpoint/1004/logo_5.svg" alt="Paccar"></div>
                        <div class="logo-card"><img src="//res.cloudinary.com/spiralyze/image/upload/v1742239929/sailpoint/1004/logo_6.svg" alt="The Home Depot"></div>
                        <div class="logo-card"><img src="//res.cloudinary.com/spiralyze/image/upload/v1742239929/sailpoint/1004/logo_7.svg" alt="The Legal & General"></div>
                        <div class="logo-card"><img src="//res.cloudinary.com/spiralyze/image/upload/v1742239929/sailpoint/1004/logo_8.svg" alt="The Salvation Army"></div>
                        <div class="logo-card"><img src="//res.cloudinary.com/spiralyze/image/upload/v1742239929/sailpoint/1004/logo_9.svg" alt="Vodafone"></div>
                    </div>
                </div>
            </div>`);

            //on click of sp-logo-home, redirect to home page
            document.querySelector('.spz_3004 .product-hero .row__inner .column.relative .column__inner .sp-logo-home').addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector('a[href="/"]').click();
            });
        }
    }

    function accordionSection() {
        //create accordion section json data
        let accordionItems = [{
            title: 'Accelerate insights and automation with SailPoint Harbor Pilot',
            content: 'Make data-driven decisions and maximize efficiencies using AI agents',
            demoLink: 'Get a demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/arrow.svg" alt="Arrow Right">',
            image: '//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3004/accelerate_insights_and_automation_with_sailpoint_1.webp'
        }, {
            title: 'Discover & secure all machine identities',
            content: 'Enhance security by gaining control over machine identities',
            demoLink: 'Get a demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/arrow.svg" alt="Arrow Right">',
            image: '//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3004/discover__secure_all_machine_identities_1.webp'
        }, {
            title: 'Manage & secure the non-employee lifecycle',
            content: 'Boost efficiency with simplified management of non-employees',
            demoLink: 'Get a demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/arrow.svg" alt="Arrow Right">',
            image: '//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3004/manage__secure_the_non-employee_lifecycle_1.webp'
        }, {
            title: 'Secure & govern access to sensitive data',
            content: 'Extend visibility and access governance to your sensitive data',
            demoLink: 'Get a demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/arrow.svg" alt="Arrow Right">',
            image: '//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3004/secure__govern_access_to_sensitive_data_1.webp'
        }, {
            title: 'Automate & delegate privileged tasks',
            content: 'Improve productivity and security by automating manual tasks',
            demoLink: 'Get a demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/arrow.svg" alt="Arrow Right">',
            image: '//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3004/automate__delegate_privileged_tasks_1.webp'
        }];

        if (document.querySelectorAll('.spz_3004 .help-section').length === 0) {
            document.querySelector('.spz_3004 .product-hero').insertAdjacentHTML('afterend', `<section class="help-section row"><div class="row__inner grid container">
            <div class="help-title">
                <h2 class="section-heading eyebrow">HOW WE HELP</h2>
                <h1 class="main-title text-cobalt">See how SailPoint helps secure every identity and protect your enterprise.</h1>
            </div>
            <div class="grid md:gap-16 md:grid-cols-50-50">
        <div class="help-content">
            <div class="accordion">
            ${accordionItems.map((item, index) => {
                return `<div class="accordion-item">
                    <div class="accordion-header">
                        <span>${item.title}</span>
                        <button class="toggle-button"></button>
                    </div>
                    <div class="accordion-content" data-image="image${index + 1}">
                        <p>${item.content}</p>
                        <a href="javascript:;" class="demo-link go-to-demo">Get a demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/arrow.svg" alt="Arrow Right"></a>
                        <div class="image-container">
                            <img src="${item.image}" alt="${item.title}">
                        </div>
                    </div>
                </div>`;
            }).join('')}</div>
                </div>
                <div class="help-image">
                    ${accordionItems.map((item, index) => {
                return ` <div class="image-container image${index + 1}">
                                    <img src="${item.image}" alt="${item.title}">
                                </div>`;
            }).join('')}
                </div>
        </div>
        </div>
    </section>
    `);

            waitForElm('.spz_3004 .accordion-item').then(() => {
                const accordionItems = document.querySelectorAll('.accordion-item');
                const imageContainers = document.querySelectorAll('.help-image .image-container');

                accordionItems.forEach((item, index) => {
                    const header = item.querySelector('.accordion-header');
                    const content = item.querySelector('.accordion-content');
                    const toggleButton = item.querySelector('.toggle-button');
                    const imageClass = content.dataset.image;

                    header.addEventListener('click', () => {
                        accordionItems.forEach(item => item.classList.remove('active')); // Remove active class from all items
                        item.classList.add('active');
                        toggleButton.textContent = item.classList.contains('active') ? '-' : '+';

                        // Show/hide the corresponding image container
                        imageContainers.forEach(container => container.classList.remove('active'));
                        document.querySelector('.' + imageClass).classList.add('active');
                    });

                    // Activate the first accordion item and show its image
                    if (index === 0) {
                        item.classList.add('active');
                        // toggleButton.textContent = '-';
                        document.querySelector('.' + imageClass).classList.add('active');
                    }
                });
            });
        }

        ourPartnerSection();
    }

    function ourPartnerSection() {
        if (document.querySelectorAll('.spz_3004 .our-partners-section').length === 0) {
            document.querySelector('.spz_3004 .help-section').insertAdjacentHTML('afterend', `<section id="our-partners" class="row bg-lightestgray relative our-partners-section" data-bg-color="true"><div class="row__inner grid container gap-10 grid-cols-1"><div class="column relative logo-container logo-container--left "><div class="column__inner flex h-full w-full flex-col items-start justify-start text-left"><div class="image-wrapper relative flex h-auto w-full" style="justify-content: inherit; align-items: inherit; min-height: 50px;"><img alt="partners logos" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" class="object-contain w-full desktop logos--left" src="https://sailpoint-digital-marketing.imgix.net/partner-logos--left.png?auto=compress&amp;fm=webp" style="color: transparent; height: auto; min-height: 50px;"></div></div></div><div class="column relative logo-container logo-container--top "><div class="column__inner flex h-full w-full flex-col items-start justify-start text-left"><div class="image-wrapper relative flex h-auto w-full" style="justify-content: inherit; align-items: inherit; min-height: 50px;"><img alt="Partner logos" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" class="object-contain w-full mobile logos--bottom" src="https://sailpoint-digital-marketing.imgix.net/partner-logos--top.png?auto=compress&amp;fm=webp" style="color: transparent; height: auto; min-height: 50px;"></div></div></div><div class="column relative our-partners__content "><div class="column__inner flex h-full w-full flex-col items-start md:items-center justify-start text-left md:text-center"><h2 class="eyebrow">OUR PARTNERS</h2><p class="text-h2 text-cobalt text-h1">Our global partner ecosystem </p><p>We partner with the many of the most innovative companies to provide identity security for the modern enterprise. Our partner ecosystem offers consulting, implementation, and services on SailPoint deployments, as well as integrations that help drive your business. </p><a class="btn btn--blue" href="/partners">Explore our partners</a></div></div><div class="column relative logo-container logo-container--right "><div class="column__inner flex h-full w-full flex-col items-start justify-start text-left"><div class="image-wrapper relative flex h-auto w-full" style="justify-content: inherit; align-items: inherit; min-height: 50px;"><img alt="Partner logos" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" class="object-contain w-full desktop logos--right" src="https://sailpoint-digital-marketing.imgix.net/partner-logos--right.png?auto=compress&amp;fm=webp" style="color: transparent; height: auto; min-height: 50px;"></div></div></div><div class="column relative logo-container logo-container--bottom "><div class="column__inner flex h-full w-full flex-col items-start justify-start text-left"><div class="image-wrapper relative flex h-auto w-full" style="justify-content: inherit; align-items: inherit; min-height: 50px;"><img alt="Partner logos" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" class="object-contain w-full mobile logos--top" src="https://sailpoint-digital-marketing.imgix.net/partner-logos-bottom.png?auto=compress&amp;fm=webp" style="color: transparent; height: auto; min-height: 50px;"></div></div></div><div class="column relative hidden "><div class="column__inner flex h-full w-full flex-col items-start justify-start text-left"><div class="custom-html"></div></div></div></div></section>`);

        }
        getStarted();
        modifyAtlas();
    }

    function modifyAtlas() {
        if (document.querySelector('.spz_3004 #atlas .column.relative .column__inner .btn.btn--blue-alt')) {
            let demoBtn = document.querySelector('.spz_3004 #atlas .column.relative .column__inner .btn.btn--blue-alt');
            demoBtn.outerHTML = `<a class="btn btn--hotpink go-to-demo" href="javascript:;">Get a demo</a>`;

            waitForElm('.spz_3004 #atlas .column.relative .video-wrapper .video-wrapper__inner').then(() => {
                document.querySelector('.spz_3004 #atlas .column.relative .video-wrapper .video-wrapper__inner').outerHTML = `<picture>
                    <source media="(min-width:1025px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3004/video_thumb.webp">
                    <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3004/video_thumb_tablet.webp">
                    <img class="vidyard-lightbox-image" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3004/video_thumb_mobile.webp" alt="Video Thumbnail">
                </picture>`;
            });

            //for all the .go-to-demo elements, add click event listener to scroll to form section
            document.querySelectorAll('.spz_3004 .go-to-demo').forEach(function (el) {
                el.addEventListener('click', function (e) {
                    e.preventDefault();
                    var formInner = document.querySelector('body.spz_3004 #page-container .page-transition .product-hero .row__inner .inner-row');
                    formInner.scrollIntoView({ behavior: 'smooth' });
                });
            });
        }


        modifyCustomerStories();
    }

    function modifyCustomerStories() {
        if (document.querySelector('.spz_3004 #customer-stories > .text-darkgray.container') && document.querySelector('.spz_3004 #customer-stories > .text-darkgray.container .customer-stories__content') == null) {
            document.querySelector('.spz_3004 #customer-stories > .text-darkgray.container').insertAdjacentHTML('beforeend', `<div class="customer-stories__content"><h2 class="eyebrow">OUR CUSTOMERS</h2><p class="text-h2 text-cobalt text-h1">Many of the world’s leading enterprises trust SailPoint </p><p class="plain-text">51% of the Fortune 500 and 26% of the Forbes Global 2000</p></div>`);
        }
    }

    function getStarted() {
        if (document.querySelectorAll('.spz_3004 .sailpoint-banner').length == 0) {
            document.querySelector('.spz_3004 #customer-stories').insertAdjacentHTML('afterend', `<div class="sailpoint-banner">
                <div class="sailpoint-banner-content">
                    <p class="sailpoint-get-started">GET STARTED</p>
                    <h1>Modernize your identity security with SailPoint</h1>
                    <a href="javascript:;" class="btn btn--blue-alt go-to-demo">Get a demo</a>
                </div>
            </div>`);
        }
    }

    //click event listener
    // document.body.addEventListener('click', function (e) {
    //     if (e.target.classList.contains('sp-logo-home')) {
    //         e.preventDefault();
    //         document.querySelector('a[href="/"]').click();
    //     }
    //     if (e.target.classList.contains('go-to-demo')) {
    //         e.preventDefault();
    //         // document.querySelector('a[href="/demo"]').click();
    //         var formInner = document.querySelector('body.spz_3004 #page-container .page-transition .product-hero .row__inner .inner-row');
    //         formInner.scrollIntoView({ behavior: 'smooth' });
    //     }
    // });

    function removeTest() {
        setTimeout(() => {
            if (document.querySelector('.spz_3004')) {
                document.body.classList.remove("spz_3004");
            }
        }, 200);
    }

    function removeSpecificCookieValue(targetName, targetValue) {
        ['HiddenFieldName', 'HiddenFieldValue'].forEach((key, i) => {
            var values = getCookie(key)?.split(',').filter(v => v !== (i ? targetValue : targetName)).join(',');
            setCookie(key, values || '', 1);
        });
    }

    // Do not touch below hidden field code for any Experiment Start
    function hiddenValue(currentHiddenFieldName, currentHiddenFieldValue) {
        var ExistingHiddenFieldName = getCookie('HiddenFieldNameContact');
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValueContact');

        if (!ExistingHiddenFieldName) {
            setCookie('HiddenFieldNameContact', currentHiddenFieldName, 1);
            setCookie('HiddenFieldValueContact', currentHiddenFieldValue, 1);
        } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
            setCookie('HiddenFieldNameContact', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
            setCookie('HiddenFieldValueContact', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
        }

        setHiddenFieldValue();
    }

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=sailpoint.com;";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function setHiddenFieldValue() {
        var spz_cro_Interval = setInterval(function () {
            var intellimize1 = document.querySelector('form.mktoForm#mktoForm_1018 input[name="intellimize1"]');
            if (intellimize1) {
                clearInterval(spz_cro_Interval);
                var ExistingHiddenFieldValue = getCookie('HiddenFieldValueContact');
                //check if hidden field value is empty then only set the value else set the value with , seperated
                if (intellimize1.value == '') {
                    intellimize1.value = ExistingHiddenFieldValue;
                }
                else {
                    if (!intellimize1.value.includes(ExistingHiddenFieldValue)) {
                        intellimize1.value = intellimize1.value + ',' + ExistingHiddenFieldValue;
                    }
                }
            }
        });
    }
    // Do not touch below hidden field code for any Experiment over

    history.pushState = (function (f) {
        return function pushState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event("pushstate"));
            window.dispatchEvent(new Event("locationchange"));
            return ret;
        };
    })(history.pushState);
    history.replaceState = (function (f) {
        return function replaceState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event("replacestate"));
            window.dispatchEvent(new Event("locationchange"));
            return ret;
        };
    })(history.replaceState);
    window.addEventListener("popstate", function () {
        window.dispatchEvent(new Event("locationchange"));
    });

    window.addEventListener("locationchange", function () {
        url = location.href;
        urlCheck(url);
        if (document.querySelector('.spz_3004')) {
            document.body.classList.remove("spz_3004");
        }
    });
    var url = location.href;
    urlCheck(url);

    function urlCheck(url) {
        if (location.pathname === "/products/lp/identity-security-cloud") {
            createTest();
        } else {
            removeTest();
        }
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