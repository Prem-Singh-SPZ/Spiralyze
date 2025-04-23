(function () {
    const template_triageData = [
        //Question 1 start
        {
            questionSuperHeading: "Get a demo",
            questionHeading: "What products are you interested in?",
            questionSubHeading: "",
            type: "checkbox",
            answers: [
                {
                    answerText: 'Lifecycle management',
                    answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/normal.svg'
                },
                {
                    answerText: 'Compliance management',
                    answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/frame_1171276135.svg'
                },
                {
                    answerText: 'Access<br /> modeling',
                    answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/frame_1171276136.svg'
                },
                {
                    answerText: 'Analytics',
                    answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/frame_1171276137.svg'
                },
                {
                    answerText: 'CIEM',
                    answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/frame_1171276138.svg'
                },
                {
                    answerText: 'Machine identity security',
                    answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/frame_1171276139.svg'
                },
                {
                    answerText: 'Data security',
                    answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/frame_1171276140.svg'
                },
                {
                    answerText: 'Non-employee risk management',
                    answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/frame_1171276141.svg'
                },
                {
                    answerText: 'Privileged task automation',
                    answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/frame_1171276134.svg'
                }
            ]
        },
        //Question 1 end
        //Question 2 start
        {
            questionSuperHeading: "Get a demo",
            questionHeading: "What is your industry?",
            questionSubHeading: "",
            type: "radio",
            answers: [
                {
                    answerText: "Healthcare",
                    answerImage: "//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/icon_09.svg"
                },
                {
                    answerText: "Financial services",
                    answerImage: "//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/icon_16.svg"
                },
                {
                    answerText: "Government",
                    answerImage: "//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/icon_02.svg"
                },
                {
                    answerText: "Manufacturing",
                    answerImage: "//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/icon_03.svg"
                },
                {
                    answerText: "Higher education",
                    answerImage: "//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/icon_11.svg"
                },
                {
                    answerText: "Utilities",
                    answerImage: "//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/icon_06.svg"
                },
                {
                    answerText: "Oil & gas",
                    answerImage: "//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/icon_05.svg"
                },
                {
                    answerText: "Technology",
                    answerImage: "//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/icon_08.svg"
                },
                {
                    answerText: "Services",
                    answerImage: "//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/icon_10.svg"
                },
                {
                    answerText: "Leisure",
                    answerImage: "//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/icon_12.svg"
                },
                {
                    answerText: "Telecommunications",
                    answerImage: "//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/icon_13.svg"
                },
                {
                    answerText: "Retail",
                    answerImage: "//res.cloudinary.com/spiralyze/image/upload/v1738852123/sailpoint/1004/icon_14.svg"
                },
                {
                    answerText: "Transportation",
                    answerImage: "//res.cloudinary.com/spiralyze/image/upload/v1738852123/sailpoint/1004/icon_07.svg"
                },
                {
                    answerText: "Construction",
                    answerImage: "//res.cloudinary.com/spiralyze/image/upload/v1738852122/sailpoint/1004/icon_15.svg"
                },
                {
                    answerText: "Other",
                    answerImage: "//res.cloudinary.com/spiralyze/image/upload/v1738852123/sailpoint/1004/icon_04.svg"
                }
            ]
        }
        //Question 2 end
    ]
    const template_sectionSelector = `.spz-form-section`;
    const template_formUniqueSelector = `.the-form`;
    const template_position = "afterbegin"
    const heroSelector = `.page-transition`;
    const position = "beforebegin";
    const formSelector = `#mktoForm_1018`;
    const heroContent = {
        siteLogo: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/sailpoint/1001/logo__colored.svg",
        siteLogoAlt: "SailPoint",
        contentSuperHeading: "Unified identity security",
        contentHeading: "Discover, manage, and secure all identities",
        features: [
            {
                checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/sailpoint/1001/check.svg",
                featureItemContent: "<b>Access management.</b> Monitor user access. Auto-implement roles. Streamline access approval or removal.",
            },
            {
                checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/sailpoint/1001/check.svg",
                featureItemContent: "<b>Complete coverage.</b> Manage non-employee or privileged access, machine identities, entitlements across clouds, passwords, risk, etc. Detect threats.",
            },
            {
                checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/sailpoint/1001/check.svg",
                featureItemContent: "<b>Compliance.</b> Demonstrate compliance with audit trails. GDPR, HIPAA, PCI, CCPA, FISMA, PCPD, PDPA, and more.",
            },
        ],
        formArrow: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/sailpoint/1001/arrow.svg",
        formHeading: "",
    };
    const additionalSection = {
        socialProofLogos: {
            socialProofHeading: "Trusted by 51% of the Fortune 500 and 26% of the Forbes Global 2000",
            socialProofImages: [
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/1004/logo_01_webp_1.webp",
                    imgAlt: "aes",
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1742239930/sailpoint/1004/logo_3.svg",
                    imgAlt: "gm",
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1742239929/sailpoint/1004/logo_4.svg",
                    imgAlt: "Hershey's",
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1742239929/sailpoint/1004/logo_5.svg",
                    imgAlt: "Paccar",
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1742239929/sailpoint/1004/logo_6.svg",
                    imgAlt: "The Home Depot",
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1742239929/sailpoint/1004/logo_7.svg",
                    imgAlt: "The Legal & General",
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1742239929/sailpoint/1004/logo_8.svg",
                    imgAlt: "The Salvation Army",
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1742239929/sailpoint/1004/logo_9.svg",
                    imgAlt: "Vodafone",
                },
            ]
        },
    }

    function preloadImage() {
        document.querySelector('head').insertAdjacentHTML("afterbegin", `
            <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/sailpoint/1004/checkboxes_checked.svg" as="image">
            <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/sailpoint/1004/radio_checked.svg" as="image">
        `);
    }

    preloadImage();

    function createTest() {
        let bodyLoaded = setInterval(function () {
            const body = document.querySelector('body');
            if (body) {
                clearInterval(bodyLoaded);
                if (!body.classList.contains('spz-1004-v1')) {
                    body.classList.add('spz-1004-v1');

                    function addBaseline(formData, whereToPut, formSelector, heroSelector, additionalSection) {
                        const formTemplate = `<section class="spz-hero">
                            <div class="spz-wrapper">
                                <div class="spz-form-wrap">
                                <div class="content-section">
                                    ${formData.siteLogo.length !== 0
                                ? `<a class="site-logo" data-sentry-element="NextLink" data-sentry-source-file="MainLargeNavigation.tsx" href="/">
                                        <img src="${formData.siteLogo}" alt="${formData.siteLogoAlt}" />
                                    </a>`
                                : ""
                            }
                                    ${formData.contentSuperHeading.replace(/\s/g, "").length !== 0
                                ? `<div class="content-superheading">${formData.contentSuperHeading}</div>`
                                : ""
                            }
                                    ${formData.contentHeading.replace(/\s/g, "").length !== 0
                                ? `<div class="content-heading">${formData.contentHeading}</div>`
                                : ""
                            }
                                    <div class="spz-features-wrap">
                                    ${formData.features.length > 0 ? formData.features.map((item) => {
                                return `<div class="feature-item">
                                        <img src="${item.checkmarkImage}" alt="checkmark" />
                                        <span>${item.featureItemContent}</span>
                                        </div>`;
                            }).join("")
                                : ""
                            }
                                    </div>
                                    ${formData.formArrow.length !== 0
                                ? `<img src="${formData.formArrow}" class="form-arrow" alt="Arrow" />`
                                : ""
                            }
                                </div>
                                <div class="spz-form-section">
                                    <div class="the-form mkto-wrap">
                                        <div class="contact_us_submit_spz">
                                            <h3 class="text-center">Thank you!</h3>
                                            <h4 class="text-center">A representative will reach out to you shortly.</h4>
                                        </div>
                        
                                        ${formData.formHeading.replace(/\s/g, "").length !== 0 ? `<div class="form-heading">${formData.formHeading}</div>` : ""}
                                    </div>
                                </div>
                                </div>
                            </div>
                            ${typeof additionalSection.socialProofLogos !== 'undefined' ? `<div class="social-proof-logos">
                                <div class="social-proof-heading">${additionalSection.socialProofLogos.socialProofHeading}</div>
                                <div class="social-proof-images">
                                ${additionalSection.socialProofLogos.socialProofImages.length > 0 ? additionalSection.socialProofLogos.socialProofImages.map((item, index) => {
                                return `<img src="${item.url}" alt="${item.imgAlt}">`;
                            })
                                    .join("") + additionalSection.socialProofLogos.socialProofImages.map((item, index) => {
                                        return `<img src="${item.url}" class="repeat-img" alt="${item.imgAlt}">`;
                                    })
                                        .join("")
                                    : ""}
                                </div>
                            </div>`
                                : ``}
                            </section>`;
                        waitForElm(heroSelector).then(() => {
                            document.querySelector(heroSelector).insertAdjacentHTML(whereToPut, formTemplate);
                        });
                        let formLoaded = setInterval(() => {
                            if (document.querySelector(".spz-form-wrap .the-form") && document.querySelector(formSelector) && document.querySelectorAll(`${formSelector} input`).length > 0) {
                                clearInterval(formLoaded)
                                document.querySelector(".spz-form-wrap .the-form").appendChild(document.querySelector(formSelector));
                                // document.querySelector(".spz-form-wrap .the-form")?.appendChild(document.querySelector('.disclaimer')?.cloneNode(true));
                                // document.querySelector(".spz-form-wrap .the-form").insertAdjacentElement('afterend', document.querySelector('.disclaimer'));
                                formModify();
                                addTriage(template_triageData, template_formUniqueSelector);
                                document.querySelector(".spz-form-wrap .the-form").insertAdjacentElement('afterbegin', document.querySelector('.spz-form-wrap .form-heading'));

                                MktoForms2.whenReady(function (form) {
                                    form.onSuccess(function (values, followUpUrl) {
                                        document.body.classList.add('form-submit');
                                    });
                                });

                                waitForElm('.mkto-wrap.w-full #confirm #contact_us_submit').then(() => {
                                    document.body.classList.add('form-submit');
                                });
                            }
                        });
                    }

                    //the .spz-hero gets added to the page and removed after some time, so keep checking for it to add the form
                    let spzHeroInterval = setInterval(() => {
                        if (document.querySelectorAll('.spz-hero').length == 0 && window.location.pathname === '/demo') {
                            addBaseline(heroContent, position, formSelector, heroSelector, additionalSection);
                            hiddenValue('SPZ_1004', 'SPZ_1004_variant_1');
                            setHiddenFieldValue();
                        }
                        else {
                            if (window.location.pathname.indexOf("/demo") == -1 && document.querySelectorAll('.spz-hero').length > 0) {
                                document.querySelectorAll('.spz-hero').forEach(item => {
                                    item.remove();
                                });
                            }
                        }
                    }, 1000);
                    setTimeout(function () {
                        clearInterval(spzHeroInterval);
                    }, 15000);


                    function formModify() {
                        // Add class in mktoFormRow using count
                        var form_fields = document.querySelectorAll('.spz-1004-v1 .spz-form-section form.mktoForm .mktoFormRow');
                        for (var i = 0; i < form_fields.length; i++) {
                            var dynamicClass = 'field-' + (i + 1);
                            form_fields[i].classList.add(dynamicClass);
                        }

                        // Change Label Text
                        ['#LblCountry:Country', '#LblState:State', '#LblNumber_of_Employees__c:Number of employees'].forEach(item => {
                            const [id, text] = item.split(':');
                            waitForElm(`.spz-1004-v1 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel${id}`).then(label => {
                                label.innerHTML = (label.querySelector('.mktoAsterix')?.outerHTML || '') + text;
                            });
                        });


                        document.querySelector('.spz-1004-v1 form.mktoForm #contactFormComments.mktoField').value = 'Get a demo';

                        waitForElm(`.spz-1004-v1 .spz-form-section form.mktoForm .mktoFieldWrap select#Country`).then((elm) => {
                            setTimeout(() => {
                                document.querySelectorAll(`.spz-1004-v1 form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
                                    if (el && el.value && (el.value != '')) {
                                        el.closest('.mktoFieldWrap').classList.add('filled');
                                    }
                                });
                            }, 1000);
                        });

                        // On input focus add class on closest parent field class
                        function focusFields() {
                            // Attach events using event delegation
                            const form = document.querySelector('.spz-1004-v1 form.mktoForm');

                            form.addEventListener('focus', function (event) {
                                const el = event.target;
                                if (el.classList.contains('mktoField')) {
                                    el.closest('.mktoFieldWrap').classList.add('active', 'typing');
                                    checkAllFields();
                                }
                            }, true);

                            form.addEventListener('blur', function (event) {
                                const el = event.target;
                                if (el.classList.contains('mktoField')) {
                                    el.closest('.mktoFieldWrap').classList.remove('active', 'typing');
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
                                const stateField = document.querySelector('.spz-1004-v1 form.mktoForm .mktoFieldWrap .mktoField#State');
                                if (stateField) {
                                    stateField.addEventListener('focus', function () {
                                        stateField.closest('.mktoFieldWrap').classList.add('active', 'typing');
                                        checkAllFields();
                                    });
                                    stateField.addEventListener('blur', function () {
                                        stateField.closest('.mktoFieldWrap').classList.remove('active', 'typing');
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

                            const container = document.querySelector('.spz-1004-v1 form.mktoForm');
                            if (container) {
                                observer.observe(container, { childList: true, subtree: true });
                            }
                        }

                        focusFields();

                        function checkAllFields() {
                            const fields = document.querySelectorAll('.spz-1004-v1 form.mktoForm .mktoField');
                            const timeBuffer = setInterval(() => {
                                fields.forEach(field => {
                                    const fieldWrap = field.closest('.mktoFieldWrap');
                                    if (fieldWrap) {
                                        // Check for error
                                        const errorElement = fieldWrap.querySelector('.mktoError');
                                        if (errorElement && errorElement.style.display !== 'none') {
                                            fieldWrap.classList.add('error');
                                        } else {
                                            fieldWrap.classList.remove('error');
                                        }

                                        // Check if the field is filled
                                        if (field.value && field.value.trim() !== '' && field.type !== 'checkbox') {
                                            fieldWrap.classList.add('filled');
                                        } else {
                                            fieldWrap.classList.remove('filled');
                                        }
                                    }
                                });
                            }, 200);


                            setTimeout(() => {
                                clearInterval(timeBuffer);
                            }, 1000);
                        }

                        document.querySelector('select#Country').addEventListener('change', () => {
                            const stateRow = document.querySelector('.spz-1004-v1 .spz-form-section form.mktoForm .mktoFormRow.field-10');
                            const countryRow = document.querySelector('.spz-1004-v1 .spz-form-section form.mktoForm .mktoFormRow.field-7');
                            const employeeNumberRow = document.querySelector('.spz-1004-v1 .spz-form-section form.mktoForm .mktoFormRow.field-8');

                            const stateExists = document.querySelector('select#State');
                            stateExists ? (document.querySelector('label#LblState').textContent = "State", stateRow.classList.remove('hidden'), countryRow.classList.remove('spz-full'))
                                : (stateRow.classList.add('hidden'), countryRow.classList.add('spz-full'));
                        });

                    }
                } else {
                    if (body.classList.contains('spz-1004-v1')) {
                        hiddenValue('SPZ_1004', 'SPZ_1004_variant_1');
                        let callMultipleTimes = setInterval(() => {
                            setHiddenFieldValue();
                        }, 500);

                        setTimeout(() => {
                            clearInterval(callMultipleTimes);
                        }, 10000);
                    }
                }
            }
        });
    }

    function removeTest() {
        setTimeout(() => {
            if (document.querySelector('.spz-1004-v1')) {
                document.body.classList.remove("spz-1004-v1");
            }
        }, 2000);
    }

    // Do not touch below hidden field code for any Experiment Start
    function hiddenValue(currentHiddenFieldName, currentHiddenFieldValue) {
        var ExistingHiddenFieldName = getCookie('HiddenFieldNameDemo');
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValueDemo');

        if (!ExistingHiddenFieldName) {
            setCookie('HiddenFieldNameDemo', currentHiddenFieldName, 1);
            setCookie('HiddenFieldValueDemo', currentHiddenFieldValue, 1);
        } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
            setCookie('HiddenFieldNameDemo', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
            setCookie('HiddenFieldValueDemo', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
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
                var ExistingHiddenFieldValue = getCookie('HiddenFieldValueDemo');
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

        setTimeout(function () {
            clearInterval(spz_cro_Interval);
        }, 15000);

        window.addEventListener('click', function (e) {
            if (e.target.closest('#mktoForm_1018 .mktoButton')) {
                const fields = document.querySelectorAll('.spz-1004-v1 form.mktoForm .mktoField');
                const timeBuffer = setInterval(() => {
                    fields.forEach(field => {
                        const fieldWrap = field.closest('.mktoFieldWrap');
                        if (fieldWrap) {
                            // Check for error
                            const errorElement = fieldWrap.querySelector('.mktoError');
                            if (errorElement && errorElement.style.display !== 'none') {
                                fieldWrap.classList.add('error');
                            } else {
                                fieldWrap.classList.remove('error');
                            }

                            // Check if the field is filled
                            if (field.value && field.value.trim() !== '' && field.type !== 'checkbox') {
                                fieldWrap.classList.add('filled');
                            } else {
                                fieldWrap.classList.remove('filled');
                            }
                        }
                    });
                }, 500);


                setTimeout(() => {
                    clearInterval(timeBuffer);
                }, 2000);


                //inject current time and date in EST timezone into .intellimize2 hidden field
                var d = new Date();
                var n = d.toLocaleString('en-US', { timeZone: 'America/New_York' });
                var int2 = e.target.closest('.mktoForm').querySelector('input[name="intellimize2"]');

                if (int2)
                    int2.value = n;
            }
        });
    }
    // Do not touch below hidden field code for any Experiment over

    function addTriage(template_triageData, formSelector) {
        const triageTemplate = `
              <div class="spz-triage-wrap">
                  <div class="questions-progress">
                      ${template_triageData.length !== 0 && template_triageData.map((item, index) => `<div class="progress-item ${index === 0 ? 'active' : ''}"></div>`).join('')}
                      <div class="progress-item"></div>
                  </div>
                  <div class="questions-wrap">
                      ${template_triageData.length !== 0 &&
            template_triageData.map((item, index) => {
                return `<div class="question-item question-${index + 1} ${index !== 0 ? 'spz-hidden' : ''} ${item.type == 'radio' ? 'type-radio' : 'type-checkbox'}">
                                    <div class="question-superheading">${item.questionSuperHeading}</div>
                                    <div class="question-heading">${item.questionHeading}</div>
                                    <div class="question-subheading">${item.questionSubHeading}</div>
                                    <div class="answers-wrap">
                                        ${item.answers.map((itemm, indexx) => {
                    return `
                                                    <div class="answer-item">
                                                        <div class="${item.type == 'radio' ? 'answer-radio' : 'answer-checkbox'}"></div>
                                                        ${itemm.answerImage.length !== 0 ? `<img src="${itemm.answerImage}" alt="${itemm.answerText}" class="answer-image"/>` : ``}
                                                        <div class="answer-text">${itemm.answerText}</div>
                                                    </div>
                                                    `}).join('')
                    }

                                    </div>
                                    
                                    ${item.answers.length > 9 ? `<div class="spz-load-more">Load more <svg xmlns="http://www.w3.org/2000/svg" width="88" height="2" viewBox="0 0 88 2" fill="none"><path d="M0.333374 1H87.3334" stroke="#0071CE"/></svg></div>` : ``}

                                    <div class="next-question">Next</div>
                                </div>`}).join('')
            }
                      <div class="question-form spz-hidden spz-form-wrap">
                          <div class="form-heading">Get a demo</div>
                      </div>
                  </div>                  
              </div>`;

        //Append triage section
        document.querySelector(template_sectionSelector).insertAdjacentHTML(
            template_position,
            triageTemplate,
        );
        // Checking answers listener: Checkboxes
        document.querySelectorAll('.type-checkbox .answer-item').forEach((item, index) => {
            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('answer-item')) {
                    e.target.classList.contains('checked') ? e.target.classList.remove('checked') : e.target.classList.add('checked')
                } else {
                    e.target.parentElement.classList.contains('checked') ? e.target.parentElement.classList.remove('checked') : e.target.parentElement.classList.add('checked')
                }
            })
        });

        // Checking answers listener: Radio
        document.querySelectorAll('.type-radio .answer-item').forEach((ritem, index) => {
            // Only one answer can be selected
            ritem.addEventListener('click', (e) => {
                document.querySelectorAll('.type-radio .answer-item').forEach((item, index) => {
                    item.classList.remove('checked')
                })
                e.target.classList.add('checked')
            });
        });

        //Next question click listener
        document.querySelectorAll('.next-question').forEach((item, index) => {
            item.addEventListener('click', (e) => {
                item.parentElement.classList.add('spz-hidden')
                item.parentElement.nextElementSibling.classList.remove('spz-hidden')
                document.querySelector('.progress-item.active').nextElementSibling.classList.add('active')
                document.querySelector('.progress-item.active').classList.add('completed')
                document.querySelector('.progress-item.active').classList.remove('active')

                storeTriageData();
            })
        })

        if (!document.querySelector(formSelector)) {
            document
                .querySelector(".spz-form-wrap")
                .insertAdjacentHTML(
                    "beforeend",
                    "<div style='color:red;'>Add proper form selector in code to load form</div>"
                );
        } else {
            const formLoaded = setInterval(() => {
                if (
                    document.querySelector(formSelector) &&
                    document.querySelectorAll(`${formSelector} input`).length > 0
                ) {
                    clearInterval(formLoaded);
                    document.querySelector('.question-form').appendChild(document.querySelector(template_formUniqueSelector))
                }
            });
        }

        // 'Load more' click listener
        document.querySelector('.spz-load-more').addEventListener('click', () => {
            document.querySelector('.question-2 .answers-wrap').classList.add('show-all');
        });

        function storeTriageData() {
            // Store selected answers in session storage. Store them seperately for each question
            const selectedAnswers = [];
            const question1 = [];
            const question2 = [];

            document.querySelectorAll('.type-checkbox .answer-item.checked').forEach(item => {
                question1.push(item.querySelector('.answer-text').textContent);
            });
            document.querySelectorAll('.type-radio .answer-item.checked').forEach(item => {
                question2.push(item.querySelector('.answer-text').textContent);
            });
            selectedAnswers.push(question1);
            selectedAnswers.push(question2);
            sessionStorage.setItem('selectedAnswers', JSON.stringify(selectedAnswers));

            // Format: Values to go through ; between questions and , if user selected multiple answers to multichoice question
            selectedAnswers.question1 = question1.join(',');
            selectedAnswers.question2 = question2.join(',');

            let int3Val = '';
            // Manage empty values cases
            if (selectedAnswers.question1 === '' || selectedAnswers.question1 === undefined) {
                int3Val = `;` + selectedAnswers.question2;
            } else if (selectedAnswers.question2 === '' || selectedAnswers.question2 === undefined) {
                int3Val = selectedAnswers.question1 + `;`;
            } else {
                int3Val = `${selectedAnswers.question1};${selectedAnswers.question2}`;
            }

            // Set the 'selectedAnswers' value in hidden field ''intellimize3' in the form
            document.querySelector('input[name="intellimize3"]').value = int3Val;
        }

        function loadTriageData() {
            // Load selected answers from session storage and mark them as checked
            const selectedAnswers = JSON.parse(sessionStorage.getItem('selectedAnswers'));
            if (selectedAnswers) {
                selectedAnswers.forEach((question, index) => {
                    question.forEach(answer => {
                        document.querySelectorAll('.answer-text').forEach(item => {
                            if (item.textContent === answer) {
                                item.parentElement.classList.add('checked');
                            }
                        });
                    });
                });
            }

            if (sessionStorage.getItem('formSubmitted') === 'true') {
                document.querySelector('.question-1').classList.add('spz-hidden');
                document.querySelector('.question-2').classList.add('spz-hidden');
                document.querySelector('.question-form').classList.remove('spz-hidden');
                document.querySelector('.progress-item.active').classList.remove('active');
                document.querySelector('.progress-item:last-child').classList.add('active');
            }
        }
        loadTriageData();

        // Check if form is submitted, if it is submitted then directly show the form for all future visits. After marketo form submitted it removes form tag from DOM'
        function checkFormSubmitted() {
            const formObserver = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.removedNodes) {
                        mutation.removedNodes.forEach((node) => {
                            if (node.nodeName === 'FORM') {
                                document.querySelector('.question-1').classList.add('spz-hidden');
                                document.querySelector('.question-2').classList.add('spz-hidden');
                                document.querySelector('.question-form').classList.remove('spz-hidden');
                                sessionStorage.setItem('formSubmitted', 'true');
                            }
                        });
                    }
                });
            });

            formObserver.observe(document.querySelector('.spz-form-wrap'), { childList: true, subtree: true });
        }

        checkFormSubmitted();

    }

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
    var url = location.href;
    urlCheck(url);
    window.addEventListener("locationchange", function () {
        url = location.href;
        urlCheck(url);
    });

    function urlCheck(url) {
        let testURL = "";
        if (window.location.pathname === '/demo' && window.location.pathname.indexOf("/interactive") == -1) {
            testURL = window.location.href;
        }
        if (isSameUrl(url, testURL, true)) {
            createTest();
        } else {
            removeTest();
        }
    }

    function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
        currentUrl = currentUrl.includes("#")
            ? currentUrl.slice(0, currentUrl.indexOf("#"))
            : currentUrl;
        specifiedUrl = specifiedUrl.includes("#")
            ? specifiedUrl.slice(0, specifiedUrl.indexOf("#"))
            : specifiedUrl;
        if (!includeQueryParams)
            currentUrl = currentUrl.includes("?")
                ? currentUrl.slice(0, currentUrl.indexOf("?"))
                : currentUrl;
        if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
            return true;
        return false;
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