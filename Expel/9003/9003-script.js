const form_position = "afterend"

const template_sectionSelector = "body.SPZ-9003 #page .site-main #hero-section"

const template_formSelector = "body.SPZ-9003 #page .site-main #form-section"

const template_sectionContent =
    `<div class="spz-form-section">
        <div class="spz-form-overlay"></div>
        <div class="spz-form-wrapper">
        <button id="form-close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M14.0909 12L18.5441 7.54687C18.7554 7.3359 18.8743 7.04962 18.8746 6.75099C18.8748 6.45237 18.7564 6.16587 18.5455 5.95453C18.3345 5.74319 18.0482 5.62431 17.7496 5.62404C17.451 5.62378 17.1645 5.74215 16.9531 5.95312L12.5 10.4062L8.04687 5.95312C7.83553 5.74178 7.54888 5.62305 7.25 5.62305C6.95111 5.62305 6.66447 5.74178 6.45312 5.95312C6.24178 6.16447 6.12305 6.45111 6.12305 6.75C6.12305 7.04888 6.24178 7.33553 6.45312 7.54687L10.9062 12L6.45312 16.4531C6.24178 16.6645 6.12305 16.9511 6.12305 17.25C6.12305 17.5489 6.24178 17.8355 6.45312 18.0469C6.66447 18.2582 6.95111 18.377 7.25 18.377C7.54888 18.377 7.83553 18.2582 8.04687 18.0469L12.5 13.5938L16.9531 18.0469C17.1645 18.2582 17.4511 18.377 17.75 18.377C18.0489 18.377 18.3355 18.2582 18.5469 18.0469C18.7582 17.8355 18.877 17.5489 18.877 17.25C18.877 16.9511 18.7582 16.6645 18.5469 16.4531L14.0909 12Z" fill="#CCCCCC"></path>
            </svg>
        </button>
        <p>Watch Expel MDR demo</p>
        <div class="ratings-wrapper">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1743084626/expel/9002/gartner-logo.svg" alt="Gartner Logo" />
            <div class="stars-rating">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1745257364/expel/9002/stars.svg" alt="Star" />
            <span>4.7</span>
            </div>
        </div>
        <div class="the-form"></div>
        </div>
    </div>`;
let modalOpen = false;


let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('SPZ-9003')) {
            body.classList.add('SPZ-9003');

            const template_heroSelector = `#hero-section`;
            const template_position = "beforebegin";
            const template_heroContent = {
                static: {
                    featureCheckmarkImage: `//res.cloudinary.com/spiralyze/image/upload/v1746523576/expel/9003/checkcircle.svg`,
                    heroCTAs: [
                        {
                            ctaText: `Watch a demo`,
                            ctaHref: `/on-demand-mdr-demo/`,
                            ctaClass: `btn-blue`,
                        },
                        {
                            ctaText: `View MDR packages`,
                            ctaHref: `/mdr-packages/`,
                            ctaClass: `btn-blue-outline`,
                        },
                    ],
                    socialProofImages: [
                        { url: `//res.cloudinary.com/spiralyze/image/upload/v1746523576/expel/9003/visa_logo.svg`, alt: `VISA`, width: `98`, height: `35` },
                        { url: `//res.cloudinary.com/spiralyze/image/upload/v1746523576/expel/9003/uber_logo.svg`, alt: `Uber`, width: `98`, height: `35` },
                        { url: `//res.cloudinary.com/spiralyze/image/upload/v1746523576/expel/9003/markel_logo.svg`, alt: `MARKEL`, width: `164`, height: `35` },
                        { url: `//res.cloudinary.com/spiralyze/image/upload/v1746523576/expel/9003/carters_logo.svg`, alt: `carter's`, width: `164`, height: `35` },
                        { url: `//res.cloudinary.com/spiralyze/image/upload/v1750335057/expel/9003/doordash_logo_1.svg`, alt: `FiscalNote`, width: `147`, height: `35` },
                    ],
                },

                dynamic: {
                    "/services/managed-detection-response": {
                        className: "spz-managed-detection-response",
                        contentSuperHeading: "Managed detection and response services",
                        contentHeading: "Industry-leading MDR services that safeguard your entire tech environment",
                        features: [
                            { featureItemContent: "<b>24×7 SOC monitoring.</b> Real-time alert investigation and triage across cloud, Kubernetes, endpoints, and SaaS. Direct SOC-to-customer incident communications." },
                            { featureItemContent: "<b>AI-powered human expertise.</b> Expert analysts use automation for detection, context, and correlation. Get verified threats with critical remediation actions and resilience recommendations." },
                            { featureItemContent: "<b>Complete visibility & reporting.</b> Detailed status on every alert with real-time incident reports. Track how your security posture improves over time with metrics and threat research." },
                        ],
                        heroImage: [
                            {
                                url: `//res.cloudinary.com/spiralyze/image/upload/f_auto/expel/9003/managed_detection__response_services_3.webp`,
                                alt: `Managed detection & response services`,
                                width: `837`,
                                height: `542`,
                            }
                        ],
                    },
                    "/services/phishing": {
                        className: "spz-phishing-investigation",
                        contentSuperHeading: "Managed phishing services",
                        contentHeading: "Expert-led phishing detection and prevention that frees up your security team",
                        features: [
                            { featureItemContent: "<b>1-click flagging.</b> Forward suspicious emails to our SOC with integrated button support for Google Workspace and Microsoft 365 environments." },
                            { featureItemContent: "<b>Expert phishing investigation.</b> Our analysts analyze sender details, attachments, and URLs to confirm threats and automatically notify affected users." },
                            { featureItemContent: "<b>Managed phishing service reporting.</b> Detailed reports on frequent senders, malicious attachment types, and trends plus remediation guidance to improve prevention." },
                        ],
                        heroImage: [
                            {
                                url: `//res.cloudinary.com/spiralyze/image/upload/f_auto/expel/9003/phishing_investigation_2.webp`,
                                alt: `Phishing investigation`,
                                width: 837,
                                height: 542,
                            }
                        ]
                    },
                    "/services/threat-hunting": {
                        className: "spz-threat-hunting",
                        contentSuperHeading: "Managed threat hunting services",
                        contentHeading: "Expert-led managed threat hunting with integrated MDR across cloud, on-prem, and SaaS",
                        features: [
                            { featureItemContent: "<b>Threat hunting as a service.</b> Human threat hunters with AI automation identify silent attacks and advanced threats that bypass automated tools." },
                            { featureItemContent: "<b>Threat hunting MDR integration.</b> MITRE ATT&CK aligned hunts for IOCs, unusual logins, and user behaviors tailored to your risk profile." },
                            { featureItemContent: "<b>Managed threat hunting response.</b> Clear recommendations on problem areas with instant remediation from our integrated threat hunting MDR team." },
                        ],
                        heroImage: [
                            {
                                url: `//res.cloudinary.com/spiralyze/image/upload/f_auto/expel/9003/threat_hunting_service_1.webp`,
                                alt: `Threat hunting service`,
                                width: 837,
                                height: 542,
                            }
                        ]
                    },
                    "/services/vulnerability-prioritization": {
                        className: "spz-vulnerability-prioritization",
                        contentSuperHeading: "Vulnerability prioritization",
                        contentHeading: "Identify vulnerabilities that pose the greatest risk, so you can fix them faster",
                        features: [
                            { featureItemContent: "<b>Risk prioritization.</b> Get vulnerabilities ranked by potential impact to your unique environment. Integrates with Rapid7, Qualys, and Tenable scanners." },
                            { featureItemContent: "<b>Expert-led alerts.</b> Dedicated vulnerability team identifies urgent threats and provides immediate notifications with step-by-step remediation guidance." },
                            { featureItemContent: "<b>Continuous visibility.</b> Align vulnerability risk with your MDR environment using external threat intel and real-world exploit data for clear next steps." },
                        ],
                        heroImage: [
                            {
                                url: `//res.cloudinary.com/spiralyze/image/upload/f_auto/expel/9003/vulnerability_prioritization_1.webp`,
                                alt: `Vulnerability prioritization`,
                                width: 837,
                                height: 542,
                            }
                        ]
                    }
                }
            };

            function getHeroData() {
                var path = window.location.pathname.replace(/\/$/, "");
                return template_heroContent.dynamic[path] || {};
            }
            const heroStatic = template_heroContent.static;

            var path = window.location.pathname.replace(/\/$/, "");
            const heroData = template_heroContent.dynamic[path];
            if (heroData?.className && !document.body.classList.contains(heroData.className)) {
                document.body.classList.add(heroData.className);
            }

            function addBaseline(heroData, whereToPut, template_heroSelector) {
                const template_heroContent = `<section class="spz-hero-section">
          <div class="spz-wrapper">
            <div class="content-block">
              ${heroData.contentSuperHeading?.replace(/\s/g, "").length ? `<div class="content-superheading">${heroData.contentSuperHeading}</div>` : ""}
              ${heroData.contentHeading?.replace(/\s/g, "").length ? `<div class="content-heading">${heroData.contentHeading}</div>` : ""}
              <div class="features-list">
                ${heroData.features?.length ? heroData.features.map((item) => {
                    return `<div class="feature-item">
                    <img src="${heroStatic.featureCheckmarkImage}" alt="checkmark" width="24" height="28" />
                    <span>${item.featureItemContent}</span>
                  </div>`;
                }).join("") : ""}
              </div>
              ${heroStatic.heroCTAs.length ? `<div class="hero-cta-wrap">
                ${heroStatic.heroCTAs.map((cta) => `<a href="${cta.ctaHref}" class="hero-cta ${cta.ctaClass}">
                  ${cta.ctaText}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M0 10H18.4615" stroke="white" stroke-width="1.3"></path>
                    <path d="M12.3086 3.84619L18.4624 10L12.3086 16.1539" stroke="white" stroke-width="1.3" style="&#10;"></path>
                  </svg>
                </a>`).join("")}
              </div>` : ""}
            </div>
            <div class="image-block">
              ${heroData.heroImage?.[0]?.url ? `<img src="${heroData.heroImage[0].url}" alt="${heroData.heroImage[0].alt}" title="${heroData.heroImage[0].alt}" width="${heroData.heroImage[0].width}" height="${heroData.heroImage[0].height}" />` : ""}
            </div>
          </div>
        </section>
        ${heroStatic.socialProofImages?.length ? `<section class="social-proof-logos">
          <div class="social-proof-images">
            ${heroStatic.socialProofImages.map(item => `<img src="${item.url}" alt="${item.alt}" width="${item.width}" height="${item.height}" />`).join("")}
          </div>
        </section>` : ""}
        `;

                function adjustContentMargin() {
                    const header = document.querySelector('header.site-header');
                    const main = document.querySelector('.SPZ-9003 .site-main');
                    if (header && main) {
                        const headerHeight = header ? header.getBoundingClientRect().height : 0;
                        main.style.marginTop = `${Math.ceil(headerHeight)}px`;
                    }
                }

                waitForElm(template_heroSelector).then(function () {
                    document.querySelector(template_heroSelector).insertAdjacentHTML(whereToPut, template_heroContent);
                    adjustContentMargin();
                    window.addEventListener('resize', adjustContentMargin);
                });

                document.querySelector('header .close-banner')?.addEventListener('click', () => {
                    adjustContentMargin();
                });
            }
            const currentHeroData = getHeroData();
            addBaseline(currentHeroData, template_position, template_heroSelector);

            waitForElm(template_sectionSelector).then(function () {

                document.querySelector(template_sectionSelector).insertAdjacentHTML(form_position, template_sectionContent);

                let formLoaded = setInterval(() => {
                    if (document.querySelector(template_formSelector) && document.querySelectorAll(`${template_formSelector} input`).length > 0) {
                        clearInterval(formLoaded)

                        const form = document.querySelector(template_formSelector);
                        if (form) {
                            document.querySelector('body.SPZ-9003 #page .site-main .spz-form-section .spz-form-wrapper .the-form').appendChild(form);
                            formModify();
                        }
                    }
                });

                function formModify() {
                    // Add class in mktoFormRow using count
                    var form_fields = document.querySelectorAll('body.SPZ-9003 .spz-form-section .mktoFormRow');
                    for (var i = 0; i < form_fields.length; i++) {
                        var dynamicClass = 'field-' + (i + 1);
                        form_fields[i].classList.add(dynamicClass);
                    }

                    // // Change Button Text
                    // var submitBtn = document.querySelector("button.mktoButton")
                    // submitBtn.textContent = "Instant access"

                    const btnTextUpdate = setInterval(() => {
                        const submitBtn = document.querySelector('.mktoButton');
                        if (submitBtn) {
                            submitBtn.textContent = "Instant access";

                            // Confirm change worked
                            if (submitBtn.textContent === "Instant access") {
                                clearInterval(btnTextUpdate);
                            }
                        }
                    }, 100);

                    // Change Label Text
                    const labels = {
                        "LblEmail": "Business Email",
                        "LblFirstName": "First Name",
                        "LblLastName": "Last Name",
                        "LblPerson_Country__c": "Country",
                        "LblCompany_Size__c": "Company Size",
                        "LblCompany": "Company",
                    };
                    Object.entries(labels).forEach(([id, text]) => {
                        const label = document.querySelector(`label#${id}`);
                        if (label) {
                            label.innerHTML = text;
                        }
                    });

                    // Change Field Positions
                    const disclaimerRow = document.querySelector('body.SPZ-9003 .mktoCaptchaDisclaimer');
                    const btnRow = document.querySelector('body.SPZ-9003 .mktoButtonRow');
                    btnRow.after(disclaimerRow);

                    // Change Disclaimer Text
                    const infoHtmlText = document.querySelector('body.SPZ-9003 .spz-form-section .mktoFormRow.field-8 .mktoHtmlText');
                    waitForElm('body.SPZ-9003 .spz-form-section .mktoFormRow.field-8 .mktoHtmlText').then(function () {
                        infoHtmlText.innerHTML = `Information submitted on this form may be associated with other information we have collected and used pursuant to the <a href="https://expel.com/notices/" target="_blank">Expel Online Privacy Policy</a>.`
                    });

                    // On input focus add class on closest parent field class
                    function focusFields() {
                        document.querySelectorAll(`body.SPZ-9003 .spz-form-section .the-form form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
                            el.addEventListener('focus', function () {
                                el.closest('.mktoFieldWrap').classList.add('active', 'typing');
                                checkError(el);
                            });
                            el.addEventListener('blur', function () {
                                el.closest('.mktoFieldWrap').classList.remove('active', 'typing');
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
                    focusFields();


                    document.querySelector('body.SPZ-9003 .spz-form-section .the-form form.mktoForm .mktoButtonRow button.mktoButton').addEventListener('click', function (event) {
                        document.querySelectorAll(`body.SPZ-9003 .spz-form-section .the-form form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (elem) {
                            let Buffertime = setInterval(() => {
                                if (elem.closest('.mktoFieldWrap').querySelector('.mktoError') && elem.closest('.mktoFieldWrap').querySelector('.mktoError').style.display != 'none') {
                                    elem.closest('.mktoFieldWrap').classList.add('error');
                                } else {
                                    elem.closest('.mktoFieldWrap').classList.remove('error');
                                }
                                if (elem && elem.value && (elem.value != '')) {
                                    elem.closest('.mktoFieldWrap').classList.add('filled');
                                } else {
                                    elem.closest('.mktoFieldWrap').classList.remove('filled');
                                }
                            }, 100);

                            setTimeout(() => {
                                clearInterval(Buffertime);
                            }, 1000);
                        });
                    });

                    // Function to add .field-error class on closest parent .field class if .error is exist on input
                    function checkError(elem) {
                        let timeBuffer = setInterval(() => {
                            if (elem.closest('.mktoFieldWrap').querySelector('.mktoError') && elem.closest('.mktoFieldWrap').querySelector('.mktoError').style.display != 'none' && elem.closest('.mktoFieldWrap').querySelector('.mktoInvalid')) {
                                elem.closest('.mktoFieldWrap').classList.add('error');
                            } else {
                                elem.closest('.mktoFieldWrap').classList.remove('error');
                            }
                            if (elem && elem.value && (elem.value != '')) {
                                elem.closest('.mktoFieldWrap').classList.add('filled');
                            } else {
                                elem.closest('.mktoFieldWrap').classList.remove('filled');
                            }
                        }, 100);

                        setTimeout(() => {
                            clearInterval(timeBuffer);
                        }, 1000);
                    }
                }

                let scrollTop;

                function disableScroll() {
                    scrollTop = window.scrollY;
                    document.body.style.top = `-${scrollTop}px`;
                }

                function enableScroll() {
                    window.scrollTo(0, scrollTop);
                }

                const toggleModal = function () {
                    modalOpen = !modalOpen;

                    document.querySelector('body.SPZ-9003 #page .site-main .spz-form-section').classList.toggle('open');
                    document.querySelector('body.SPZ-9003').classList.toggle('modal-open');
                }

                document.querySelectorAll('body.SPZ-9003 #page .site-main .spz-hero-section .btn-blue, body.SPZ-9003 #page .site-main #cta-banner .blue-button-dark-bg').forEach(function (el) {
                    el.addEventListener("click", function (e) {
                        e.preventDefault();
                        el.blur();
                        // disableScroll();
                        toggleModal();
                    });
                });

                document.querySelector('body.SPZ-9003 #page .site-main .spz-form-section #form-close-btn').addEventListener("click", function (e) {
                    e.preventDefault();
                    toggleModal();
                    // enableScroll();
                });

                MktoForms2.whenReady(function (form) {

                    // form.getFormElem().find('button.mktoButton').html('Instant access');
                    form.onSuccess(function (values, followUpUrl) {
                        toggleModal();
                    });
                });
            });
        }
    }
});

// Do not touch below hidden field code for any Experiment (Set Hidden Filed Value)
function hiddenValue(currentExperimentName, currentExperimentValue) {
    // Sanitize inputs by trimming whitespace
    const sanitizedExperimentName = currentExperimentName.trim();
    const sanitizedExperimentValue = currentExperimentValue.trim();

    var ExistingExperimentName = getCookie('ExperimentName');
    var ExistingExperimentValue = getCookie('ExperimentValue');

    let existingNamesArray = [];
    let existingValuesArray = [];

    // Parse existing cookies, trimming each item
    if (ExistingExperimentName) {
        existingNamesArray = ExistingExperimentName.split(',').map(item => item.trim());
    }
    if (ExistingExperimentValue) {
        existingValuesArray = ExistingExperimentValue.split(',').map(item => item.trim());
    }

    // Check if the experiment already exists and get its index
    const existingIndex = existingNamesArray.indexOf(sanitizedExperimentName);

    if (existingIndex === -1) { // Experiment does NOT exist, add it
        existingNamesArray.push(sanitizedExperimentName);
        existingValuesArray.push(sanitizedExperimentValue);

    } else { // Experiment DOES exist, update its value
        existingValuesArray[existingIndex] = sanitizedExperimentValue;
    }

    // Update cookies with the new, cleaned arrays
    setCookie('ExperimentName', existingNamesArray.join(','), 1);
    setCookie('ExperimentValue', existingValuesArray.join(','), 1);
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
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

hiddenValue('#9003 | Expel | Solutions | SPZ Baseline Hero', 'variant_#9003');
// Do not touch below hidden field code for any Experiment over (Set Hidden Filed Value)

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
