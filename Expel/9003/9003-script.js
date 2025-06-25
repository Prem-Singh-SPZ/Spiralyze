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
        }
    }
});

// Do not touch below hidden field code for any Experiment (Set Hidden Filed Value)
function hiddenValue(currentExperimentName, currentExperimentValue) {
    currentExperimentName = currentExperimentName.trim();

    var ExistingExperimentName = getCookie('ExperimentName');
    var ExistingExperimentValue = getCookie('ExperimentValue');

    if (!ExistingExperimentName) {
        setCookie('ExperimentName', currentExperimentName, 1);
        setCookie('ExperimentValue', currentExperimentValue, 1);
    } else if (ExistingExperimentName && !ExistingExperimentName.includes(currentExperimentName)) {
        setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
        setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);
    } else if (ExistingExperimentName && ExistingExperimentName.includes(currentExperimentName)) {
        var existingNames = ExistingExperimentName.split(',').map(name => name.trim());
        var existingValues = ExistingExperimentValue.split(',');

        var index = existingNames.indexOf(currentExperimentName);

        if (index !== -1) {
            existingValues[index] = currentExperimentValue;
        } else {
            console.warn(`Experiment name "${currentExperimentName}" was included as a substring but not found as an exact item. Appending.`);
            existingNames.push(currentExperimentName);
            existingValues.push(currentExperimentValue);
        }

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

removeSpecificCookieValue('#9003 | Expel | Solutions | SPZ Baseline Hero', ['truecontrol_#9003']);
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
