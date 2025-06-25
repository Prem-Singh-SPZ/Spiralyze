let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('SPZ-2011_V2')) {
            body.classList.add('SPZ-2011_V2');

            const template_sectionSelector = `#page`;
            const template_position = "beforebegin";
            const template_formUniqueSelector = "#mktoForm_1936";
            const template_formElements = {
                companyLogo: {
                    url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/expel/2011/logo_webp.webp",
                    alt: "expel_logo"
                },
                formHeading: `Watch Demo`,
                socialProofLogos: {
                    socialProofImages: [
                        { url: `//res.cloudinary.com/spiralyze/image/upload/v1744799209/expel/2011/logo-visa.svg`, alt: `VISA`, width: `67`, height: `24` },
                        { url: `//res.cloudinary.com/spiralyze/image/upload/v1744799209/expel/2011/logo-uber.svg`, alt: `Uber`, width: `67`, height: `24` },
                        { url: `//res.cloudinary.com/spiralyze/image/upload/v1744799209/expel/2011/logo-markel.svg`, alt: `MARKEL`, width: `112`, height: `24` },
                        { url: `//res.cloudinary.com/spiralyze/image/upload/v1744799209/expel/2011/logo-carters.svg`, alt: `carter's`, width: `100`, height: `24` },
                        { url: `//res.cloudinary.com/spiralyze/image/upload/v1750335240/expel/2011/doordash_logo.svg`, alt: `FiscalNote`, width: `116`, height: `24` },
                    ],
                },
            };
            const template_splitContent = {
                interfaceImage: { url: `//res.cloudinary.com/spiralyze/image/upload/f_auto/expel/2011/main-img.webp`, width: `720`, height: `320 ` },
                contentSubHeading: `Managed Detection and Response Services`,
                contentHeading: `90% improvement in security risk detection*`,
                features: [
                    { checkmarkImage: `//res.cloudinary.com/spiralyze/image/upload/v1745388247/expel/2011/CheckCircle.svg`, featureItemContent: `<b>24x7 SOC services</b> with threat detection, alert triage, remediation recommendations, automated responses & a 17-minute MTTR.` },
                    { checkmarkImage: `//res.cloudinary.com/spiralyze/image/upload/v1745388247/expel/2011/CheckCircle.svg`, featureItemContent: `<b>Extensive protection</b> across cloud workloads, control planes, identity management, SaaS, endpoints, and networks.` },
                    { checkmarkImage: `//res.cloudinary.com/spiralyze/image/upload/v1745388247/expel/2011/CheckCircle.svg`, featureItemContent: `<b>130+ integrations</b> including AWS, CrowdStrike, Google, Microsoft, Okta, Palo Alto, SentinelOne, Splunk, Salesforce, Wiz, and more.` },
                ],
                footerContent: {
                    footerNavigation: [
                        { linkText: `Privacy`, linkUrl: `/notices` },
                        { linkText: `Compliance`, linkUrl: `/security-compliance` },
                        { linkText: `Terms`, linkUrl: `/terms-of-use` },
                        { linkText: `EMEA Reseller Customer Terms`, linkUrl: `/terms-of-use/reseller-customers-emea` },
                        { linkText: `North America Reseller Customer Terms`, linkUrl: `/terms-of-use/reseller-customers-north-america` },
                    ],
                },
                copyrightText: `© 2025 Expel, Inc. All Rights Reserved.`,
                informationText: `*Expel customer surveys, Verified by UserEvidence June-December 2023`,
            };
            function addSplitScreen(formcontent, splitcontent, template_formSelector, whereToPut, template_sectionSelector) {
                const template_splitContent = `<div class="spz-split-screen">
          <div class="form-block">
            <div class="form-wrap">
              ${formcontent.companyLogo.url ? `<div class="site-header-logo">
                <a href="/" rel="home">
                  <img src="${formcontent.companyLogo.url}" alt="${formcontent.companyLogo.alt}" width="108px" height="36px">
                </a>
              </div>` : ""}
              <div class="the-form">
                <div class="edition-badge"><span>Updated for 2025</span></div>
                ${formcontent.formHeading ? `<h3 class="form-heading">${formcontent.formHeading}</h3>` : ""}
              </div>
              ${typeof formcontent.socialProofLogos.socialProofImages !== 'undefined' ? `<div class="social-proof-logos">
                <div class="logos-wrapper">
                  ${formcontent.socialProofLogos.socialProofImages.length > 0 ? formcontent.socialProofLogos.socialProofImages.map(item => `<img src="${item.url}" alt="${item.alt}" width="${item.width}px" height="${item.height}px" />`).join("") : ""}
                </div>
              </div>` : ``}
            </div>
          </div>
          <div class="content-block">
            <div class="content-wrap">
              <div class="baseline-content">
                ${typeof splitcontent.interfaceImage !== 'undefined' ? `<div class="interface-image-wrap">
                  <img src="${splitcontent.interfaceImage.url}" alt="${splitcontent.contentHeading?.trim() ? splitcontent.contentHeading : 'interface image'}" width="${splitcontent.interfaceImage.width}px" height="${splitcontent.interfaceImage.height}px" />
                </div>` : ``}
                ${splitcontent.contentSubHeading ? `<h3 class="content-superheading">${splitcontent.contentSubHeading}</h3>` : ""}
                ${splitcontent.contentHeading ? `<h2 class="content-heading">${splitcontent.contentHeading}</h2>` : ""}
                <div class="features-wrap">
                  ${splitcontent.features.map((item) => `<div class="feature-item">
                    <img src="${item.checkmarkImage}" alt="Checkmark" width="24px" height="28px" />
                    <span>${item.featureItemContent || ''}</span>
                  </div>`).join("")}
                </div>
              </div>
              <div class="split-footer">
                ${typeof splitcontent.footerContent.footerNavigation !== 'undefined' ? `<div class="split-footer-nav">
                  ${splitcontent.footerContent.footerNavigation.map((item) => `<a href="${item.linkUrl || ''}" target="_self">${item.linkText || ''}</a>`).join("")}
                </div>` : ``}
                <div class="split-copyright">
                  ${splitcontent.copyrightText ? `<p class="copyright">${splitcontent.copyrightText}</p>` : ""}
                  ${splitcontent.informationText ? `<p class="info-text">${splitcontent.informationText}</p>` : ""}
                </div>
              </div>
            </div>
          </div>
        </div>`;
                waitForElm(template_sectionSelector).then(function () {
                    document.querySelector(template_sectionSelector).insertAdjacentHTML(whereToPut, template_splitContent);
                });
                let formLoaded = setInterval(() => {
                    if (document.querySelector(template_formSelector) && document.querySelectorAll(`${template_formSelector} input`).length > 0) {
                        clearInterval(formLoaded)
                        document.querySelector(".spz-split-screen .the-form").appendChild(document.querySelector(template_formSelector));
                        formModify();
                    }
                });
            }
            addSplitScreen(template_formElements, template_splitContent, template_formUniqueSelector, template_position, template_sectionSelector);

            removeSpecificCookieValue('#2011 | Expel | Demo | Split Screen', ['truecontrol_#2011']);
            hiddenValue('#2011 | Expel | Demo | Split Screen', 'variant_#2011');
        }
    }
});

function formModify() {
    var form_fields = document.querySelectorAll('.SPZ-2011_V2 .spz-split-screen form.mktoForm .mktoFormRow');
    for (var i = 0; i < form_fields.length; i++) {
        var dynamicClass = 'field-' + (i + 1);
        form_fields[i].classList.add(dynamicClass);
    }

    document.querySelector('.SPZ-2011_V2 .spz-split-screen form.mktoForm .field-7 .mktoHtmlText').innerHTML = `Information submitted on this form may be associated with other information we have collected and used pursuant to the <a href="https://expel.com/notices/" target="_blank">Expel Online Privacy Policy</a>.`;

    // form CTA Update
    let form_CTA = setInterval(() => {
        let textChng = document.querySelector('.SPZ-2011_V2 .spz-split-screen form.mktoForm .mktoButtonRow');
        if (textChng && !textChng.classList.contains('text-updated')) {
            textChng.insertAdjacentHTML('afterbegin', `<span class="button-text"><svg width="19" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.745 8.188L4.958 2.362a.738.738 0 00-.383-.112.701.701 0 00-.696.703h-.004v12.094h.004c0 .387.312.703.696.703.144 0 .263-.05.393-.12l9.777-5.818a1.06 1.06 0 000-1.624z" fill="#fff"></path></svg> Instant access</span>`);
            textChng.classList.add('text-updated');
            clearInterval(form_CTA);
        }
    }, 100);

    var disclaimer_field = document.querySelector('.SPZ-2011_V2 .spz-split-screen form.mktoForm .mktoCaptchaDisclaimer');
    var form_button = document.querySelector('.SPZ-2011_V2 .spz-split-screen form.mktoForm .mktoButtonRow');
    form_button.after(disclaimer_field);

    function focusFields() {
        document.querySelectorAll(`.SPZ-2011_V2 .spz-split-screen form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
            el.addEventListener('focus', function () {
                el.closest('.mktoFieldWrap').classList.add('active', 'typing');
                checkError(el);
            });
            el.addEventListener('blur', function () {
                el.closest('.mktoFieldWrap').classList.remove('active', 'typing');
                checkError(el);
            });
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

// Do not touch below hidden field code for any Experiment (Set Hidden Filed Value)
function hiddenValue(currentExperimentName, currentExperimentValue) {
    var ExistingExperimentName = getCookie('ExperimentName');
    var ExistingExperimentValue = getCookie('ExperimentValue');

    if (!ExistingExperimentName) {

        setCookie('ExperimentName', currentExperimentName, 1);
        setCookie('ExperimentValue', currentExperimentValue, 1);

    } else if (ExistingExperimentName && !ExistingExperimentName.includes(currentExperimentName)) {

        setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
        setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

    } else if (ExistingExperimentName && ExistingExperimentName.includes(currentExperimentName)) {

        var existingNames = ExistingExperimentName.split(',');
        var existingValues = ExistingExperimentValue.split(',');

        var index = existingNames.indexOf(currentExperimentName);
        existingValues[index] = currentExperimentValue;

        setCookie('ExperimentName', existingNames.join(','), 1);
        setCookie('ExperimentValue', existingValues.join(','), 1);
    }
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
function removeSpecificCookieValue(name, values) {
    ['ExperimentName', 'ExperimentValue'].forEach((key, i) => {
        const updatedValues = getCookie(key)?.split(',').filter(v => !((i ? values : [name]).includes(v))).join(',');
        setCookie(key, updatedValues || '', 1);
    });
}
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
