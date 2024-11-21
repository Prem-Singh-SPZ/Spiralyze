// iFrame Code
function formPage() {
    var iframebodyInterval = setInterval(function () {
        var iframebodyEle = document.querySelector('body');
        if (iframebodyEle) {
            if (!iframebodyEle.classList.contains('SPZ-2001-iframe-qa')) {
                clearInterval(iframebodyInterval);

                iframebodyEle.classList.add('SPZ-2001-iframe-qa');


                function check_spzdevicewidth_fun() {
                    var check_spzdevicewidth = setInterval(() => {
                        const storedData = getCookie('spzdevicewidth');
                        if (storedData != '' || storedData != null) {
                            clearInterval(check_spzdevicewidth);
                            iframebodyEle.classList.remove('device-mobile');
                            iframebodyEle.classList.remove('device-desktop');
                            iframebodyEle.classList.add(storedData);
                        }
                    }, 100);
                }
                check_spzdevicewidth_fun();
                window.addEventListener('resize', () => {
                    check_spzdevicewidth_fun();
                });
                checkFormSubmit();

                waitForElm('body #pardot-form').then(function () {
                    var formAction = document.querySelector('body #pardot-form').action;
                    //check if url has query params
                    if (formAction.includes('?')) {
                        document.querySelector('body #pardot-form').action = formAction + '&spz=2001';
                    } else {
                        document.querySelector('body #pardot-form').action = formAction + '?spz=2001';
                    }
                });

                waitForElm('.SPZ-2001-iframe-qa form#pardot-form .submit input').then(function () {
                    document.querySelector(".SPZ-2001-iframe-qa form#pardot-form").insertAdjacentHTML("beforebegin", `<div class="form-heading" style="display: none;">Get a Demo</div>`);
                    hiddenValue();
                    var all_inputs = document.querySelectorAll('.SPZ-2001-iframe-qa form#pardot-form input, .SPZ-2001-iframe-qa form#pardot-form select');
                    all_inputs.forEach(function (element) {
                        element.removeAttribute('placeholder');
                        if (element.tagName == 'SELECT' && element.selectedIndex !== 0 && element.closest('.form-field') !== null) {
                            element.closest('.SPZ-2001-iframe-qa form#pardot-form .form-field').classList.add('filled');
                        }
                        if (element.tagName !== 'SELECT' && element.value != '' && element.closest('.form-field') !== null) {
                            element.closest('.SPZ-2001-iframe-qa form#pardot-form .form-field').classList.add('filled');
                        }
                    });
                    var selector = '.SPZ-2001-iframe-qa form#pardot-form .form-field input, .SPZ-2001-iframe-qa form#pardot-form .form-field select';
                    document.addEventListener('focus', function (event) {
                        if (event.target.matches && event.target.matches(selector)) {
                            event.target.closest('.SPZ-2001-iframe-qa form#pardot-form .form-field').classList.add('active', 'typing');
                        }
                    }, true);
                    var eventList = ["focusin", "blur", "focusout", "keyup", "change"];
                    for (let s_event of eventList) {
                        document.addEventListener(s_event, function (event) {
                            if (event.target.matches && event.target.matches(selector)) {
                                if (event.target.value == null || event.target.value == '') {
                                    event.target.closest('.SPZ-2001-iframe-qa form#pardot-form .form-field').classList.remove('filled');
                                } else {
                                    if (event.target.tagName == 'SELECT' && event.target.selectedIndex !== 0) {
                                        event.target.closest('.SPZ-2001-iframe-qa form#pardot-form .form-field').classList.add('filled');
                                    }
                                    if (event.target.tagName !== 'SELECT') {
                                        event.target.closest('.SPZ-2001-iframe-qa form#pardot-form .form-field').classList.add('filled');
                                    }
                                }
                            }
                        });
                    }
                    document.addEventListener('focusout', function (event) {
                        document.querySelectorAll('.SPZ-2001-iframe-qa form#pardot-form .form-field.typing').forEach(function (elem) {
                            elem.classList.remove('active', 'typing');
                        })
                    }, true);

                    var formID = "#pardot-form";
                    var retryFormSearch = true;
                    var form = document.querySelector(formID);
                    addFormListener();
                    var count = 1;
                    function addFormListener() {
                        count++;
                        if (form) {
                            form.addEventListener("submit", submitHandler);
                            return;
                        } else if ((typeof retryFormSearch !== "undefined" ? retryFormSearch : true) && count < 10) {
                            setTimeout(() => {
                                form = document.querySelector(formID);
                                addFormListener();
                            }, 1000);
                        }
                    }
                    function submitHandler(event) {
                        checkFormSubmit();
                    }

                });
                function checkFormSubmit() {
                    var countNew = 1;
                    var chekFormSubmit = setInterval(function () {
                        if (document.querySelector('.SPZ-2001-iframe-qa form#pardot-form .submit input') == null) {
                            clearInterval(chekFormSubmit);
                            document.querySelectorAll('.SPZ-2001-iframe-qa form#pardot-form > p').forEach((PEle) => {
                                if (PEle.textContent == 'We look forward to speaking with you soon!') {
                                    if (document.querySelector('.SPZ-2001-iframe-qa .form-heading')) {
                                        document.querySelector('.SPZ-2001-iframe-qa .form-heading').style.display = "none";
                                    }
                                }
                            });
                        }
                        if (countNew < 10) {
                            clearInterval(chekFormSubmit);
                        }
                        countNew++;
                    }, 100);
                }
            }
        }
    });
}

// Main Page Code
function demoPage() {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-2001-qa')) {
            clearInterval(bodyInterval);
            document.cookie = "spzdevicewidth=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.maxio.com";
            bodyEle.classList.add('spz-2001-qa');

            let mainPageBodyWidth = document.body.clientWidth;
            setIframeBodyClass(mainPageBodyWidth);

            window.addEventListener('resize', () => {
                mainPageBodyWidth = document.body.clientWidth;
                setIframeBodyClass(mainPageBodyWidth);
            });

            cookieValue('#2001_qa', '#2001_qa_variant');
            const template_heroSelector = `.hero-form`;
            const template_position = "beforebegin";
            const template_formSelector = `.hero-form iframe[id*="form"]`;
            const template_heroContent = {
                heroHeading: `Get a Demo`,
                trustBadge: [
                    {
                        trustBadgeLogoBreakpoints: [
                            {
                                breakPoint: 768,
                                url: "//res.cloudinary.com/spiralyze/image/upload/v1731506534/maxio/2001/capterra_logo.svg",
                            },
                            {
                                breakPoint: 320,
                                url: "//res.cloudinary.com/spiralyze/image/upload/v1731653645/maxio/2001/Capterra-icon.svg",
                            },
                        ],
                        trustBadgeLogoAlt: "Capterra",
                        trustBadgeReview: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/2001/review-stars.png",
                        trustBadgeReviewAlt: "Rating Stars",
                        trustBadgeReviewRating: `<span>4.4</span> (248 reviews)`,
                    },
                ],
                contentHeading: "Boost revenue 14% by automating subscription management",
                middleArrowImage: `//res.cloudinary.com/spiralyze/image/upload/v1731506534/maxio/2001/arrow.svg`,
                middleArrowImageTablet: `//res.cloudinary.com/spiralyze/image/upload/v1731647134/maxio/2001/Arrow-Tablet.svg`,
                middleArrowAlt: "arrow",
                features: [
                    {
                        checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1731506534/maxio/2001/interface__2_-_interface_checkbox_checkmark_edit_icon.svg",
                        featureItemContent: "<b>Billing.</b> Manage term, evergreen, and usage subscriptions. Automate invoicing. Handle payments, trials, sign-ups, add-ons, and upsells.",
                    },
                    {
                        checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1731506534/maxio/2001/interface__2_-_interface_checkbox_checkmark_edit_icon.svg",
                        featureItemContent: "<b>Reporting.</b> Track ARR, MRR, renewals, and churn. Generate drill-down reports and revenue snowballs. Handle GAAP & IFRS.",
                    },
                    {
                        checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1731506534/maxio/2001/interface__2_-_interface_checkbox_checkmark_edit_icon.svg",
                        featureItemContent: "<b>Cash Collection.</b> Automated reminder and dunning cadences. Track past due, expected collections, and DSO.",
                    },
                ],
                awardLogos: {
                    awardImages: [
                        {
                            url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/2001/leader.webp",
                            alt: "Leader Fall 2024"
                        },
                        {
                            url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/2001/momentum_leader.webp",
                            alt: "Momentum Leader Fall 2024"
                        },
                        {
                            url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/2001/best_relationship.webp",
                            alt: "Best Relationship Mid-Market Fall 2024"
                        },
                        {
                            url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/2001/best_results.webp",
                            alt: "best Result Mid-Market Fall 2024"
                        },
                        {
                            url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/2001/best_usability.webp",
                            alt: "Best Usability Mid-Market Fall 2024"
                        },
                    ]
                },
            };
            const template_additionalSection = {
                socialProofLogos: {
                    socialProofImages: [
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/v1731670295/maxio/2001/frame_1171275881.svg",
                            alt: "Chili Piper",
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/v1731670296/maxio/2001/frame_1171275882.svg",
                            alt: "Mailgun",
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/v1731670296/maxio/2001/frame_1171275883.svg",
                            alt: "Stack Overflow",
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/v1731670296/maxio/2001/frame_1171275884.svg",
                            alt: "Jasper",
                        },
                    ]
                }
            }

            function addBaseline(formData, whereToPut, template_formSelector, template_heroSelector, template_additionalSection) {
                const formTemplate = `<section class="spz-hero">
                        <div class="spz-bg-wrap">
                            <div class="spz-form-wrap">
                                <div class="content-section">
                                    ${formData.trustBadge.length ? `<div class="trust-badge">
                                        <picture>
                                            ${formData.trustBadge[0].trustBadgeLogoBreakpoints.map(
                    (item) =>
                        `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`
                ).join("")}
                                            <img src="${formData.trustBadge[0].trustBadgeLogoBreakpoints[0].url}" alt="${formData.trustBadge[0].trustBadgeLogoAlt}" class="badge-logo" />
                                        </picture>
                                        ${formData.trustBadge[0].trustBadgeReview.trim() ? `
                                            <img src="${formData.trustBadge[0].trustBadgeReview}" alt="${formData.trustBadge[0].trustBadgeReviewAlt}" class="star-rating" />` : ""}
                                        ${formData.trustBadge[0].trustBadgeReviewRating.trim() ? `
                                            <span class="trust-badge-rating">${formData.trustBadge[0].trustBadgeReviewRating}</span>` : ""}
                                    </div>` : ""}
                                    ${formData.contentHeading.replace(/\s/g, "").length !== 0 ? `<div class="content-heading">${formData.contentHeading}</div>` : ""}
                                    <div class="spz-features-wrap">
                                        ${formData.features.length > 0 ? formData.features.map((item) => {
                    return `<div class="feature-item">
                                                <img src="${item.checkmarkImage}" alt="checkmark" />
                                                <span>${item.featureItemContent}</span>
                                            </div>`;
                }).join("") : ""}
                                    </div>
                                    ${typeof formData.awardLogos !== 'undefined' ? `<div class="award-logos">
                                        ${formData.awardLogos.awardImages.map(item => item.url ? `<div class="award-image"><img src="${item.url}" alt="${item.alt}" title="${item.alt}" /></div>` : "").join("")}
                                    </div>` : ""}
                                </div>
                                <div class="spz-form-section">
                                    ${formData.heroHeading.replace(/\s/g, "").length !== 0 ? `<div class="form-heading">${formData.heroHeading}</div>` : ""}
                                    <div class="the-form"></div>
                                    ${formData.middleArrowImageTablet ? `<img src="${formData.middleArrowImageTablet}" alt="${formData.middleArrowAlt || 'Arrow'}" class="middle-arrow-image-tab" />` : ""}
                                </div>
                                <div class="hero-heading">
                                    ${formData.trustBadge.length ? `<div class="trust-badge">
                                        <picture>
                                            ${formData.trustBadge[0].trustBadgeLogoBreakpoints.map(
                    (item) =>
                        `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`
                ).join("")}
                                            <img src="${formData.trustBadge[0].trustBadgeLogoBreakpoints[0].url}" alt="${formData.trustBadge[0].trustBadgeLogoAlt}" class="badge-logo" />
                                        </picture>
                                        ${formData.trustBadge[0].trustBadgeReview.trim() ? `
                                            <img src="${formData.trustBadge[0].trustBadgeReview}" alt="${formData.trustBadge[0].trustBadgeReviewAlt}" class="star-rating" />` : ""}
                                        ${formData.trustBadge[0].trustBadgeReviewRating.trim() ? `
                                            <span class="trust-badge-rating">${formData.trustBadge[0].trustBadgeReviewRating}</span>` : ""}
                                    </div>` : ""}
                                    ${formData.contentHeading.replace(/\s/g, "").length !== 0 ? `<div class="content-heading">${formData.contentHeading}</div>` : ""}
                                </div>
                                <div class="middle-arrow-image-desk">
                                    ${formData.middleArrowImage ? `<img src="${formData.middleArrowImage}" alt="${formData.middleArrowAlt || 'Arrow'}" class="middle-arrow-image" />` : ""}
                                </div>
                            </div>
                        </div>
                        ${template_additionalSection.socialProofLogos ? `<div class="social-proof-logos">
                            ${template_additionalSection.socialProofLogos.socialProofImages.concat(
                    template_additionalSection.socialProofLogos.socialProofImages,
                    template_additionalSection.socialProofLogos.socialProofImages
                ).map((item, index) => {
                    const className = index >= template_additionalSection.socialProofLogos.socialProofImages.length ? 'social-proof-logo repeat-image' : 'social-proof-logo';
                    return `<img src="${item.url}" alt="${item.alt || 'Social Proof Logo'}" title="${item.alt || 'Social Proof Logo'}" class="${className}" />`;
                }).join("")}
                        </div>` : ""}
                    </section>`;
                document.querySelector(template_heroSelector).insertAdjacentHTML(whereToPut, formTemplate);

                let formLoaded = setInterval(() => {
                    if (document.querySelector(template_formSelector)) {
                        clearInterval(formLoaded);
                        document.querySelector(".spz-form-wrap .the-form").appendChild(document.querySelector(template_formSelector));
                    }
                })
            }
            addBaseline(template_heroContent, template_position, template_formSelector, template_heroSelector, template_additionalSection);

            //check if form is submitted using iframe height and setinterval
            var spz_2001_Interval = setInterval(function () {
                var spz_2001_iframe = document.querySelector('.spz-form-wrap iframe');
                if (spz_2001_iframe) {
                    let formHeight = spz_2001_iframe.getAttribute('style');
                    //check once the formHeight is less than 100px
                    //add null check for formHeight
                    if (formHeight) {
                        if (formHeight.includes('height: 40.3958px') || formHeight.includes('height: 62.7917px') || formHeight.includes('height: 22.3958px') || formHeight.includes('height: 44.7917px')) {
                            clearInterval(spz_2001_Interval);
                            document.querySelector('.spz-2001-qa .spz-form-wrap .form-heading').style.display = "none";
                        }
                    }
                }
            }, 200);

            waitForElm('.spz-form-wrap iframe').then(function () {
                var iframeSrc = document.querySelector('.spz-form-wrap iframe').src;
                //check if url has query params
                if (iframeSrc.includes('?')) {
                    document.querySelector('.spz-form-wrap iframe').src = iframeSrc + '&spz=2001';
                } else {
                    document.querySelector('.spz-form-wrap iframe').src = iframeSrc + '?spz=2001';
                }
            });
        }
    });
}

function setIframeBodyClass(screenwidth) {
    let iframeLoaded = setInterval(() => {
        if (document.querySelector('.spz-form-wrap iframe')) {
            clearInterval(iframeLoaded);
            if (screenwidth > 767) {
                setCookie('spzdevicewidth', 'device-desktop', 7);
            } else {
                setCookie('spzdevicewidth', 'device-mobile', 7);
            }
        }
    })
}

if (location.href.indexOf('/demo') > -1) {
    demoPage();
}
if (location.href.indexOf('spz=2001') > -1) {
    formPage();
}

function hiddenValue() {
    var spz_cro_Interval = setInterval(function () {
        var cro_primary = document.querySelector('form#pardot-form .form-field.cro_primary input');
        if (cro_primary) {
            clearInterval(spz_cro_Interval);
            var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');
            cro_primary.value = ExistingHiddenFieldValue;
        }
    });
}

function cookieValue(currentHiddenFieldName, currentHiddenFieldValue) {
    var ExistingHiddenFieldName = getCookie('HiddenFieldName');
    var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');

    if (!ExistingHiddenFieldName) {
        setCookie('HiddenFieldName', currentHiddenFieldName, 1);
        setCookie('HiddenFieldValue', currentHiddenFieldValue, 1);
    } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
        setCookie('HiddenFieldName', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
        setCookie('HiddenFieldValue', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
    }
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=maxio.com;";
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

// Delete cookie
function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=maxio.com;';
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
