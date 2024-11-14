const currentURL = window.location.href.split('?')[0]; // Get the base URL without parameters

// iFrame Code
if (currentURL === "https://www2.maxio.com/l/699023/2022-08-16/nh4lk") {
    var iframebodyInterval = setInterval(function () {
        var iframebodyEle = document.querySelector('body');
        if (!iframebodyEle.classList.contains('SPZ-2001-iframe')) {
            clearInterval(iframebodyInterval);
            iframebodyEle.classList.add('SPZ-2001-iframe');
            waitForElm('.SPZ-2001-iframe form#pardot-form .submit input').then(function () {
                hiddenValue();
                var all_inputs = document.querySelectorAll('.SPZ-2001-iframe form#pardot-form input, .SPZ-2001-iframe form#pardot-form select');
                all_inputs.forEach(function (element) {
                    element.removeAttribute('placeholder');
                });
                var selector = '.SPZ-2001-iframe form#pardot-form .form-field input, .SPZ-2001-iframe form#pardot-form .form-field select';
                document.addEventListener('focus', function (event) {
                    if (event.target.matches && event.target.matches(selector)) {
                        event.target.closest('.SPZ-2001-iframe form#pardot-form .form-field').classList.add('active', 'typing');
                    }
                }, true);
                var eventList = ["focusin", "blur", "focusout", "keyup", "change"];
                for (let s_event of eventList) {
                    document.addEventListener(s_event, function (event) {
                        if (event.target.matches && event.target.matches(selector)) {
                            if (event.target.value == null || event.target.value == '') {
                                event.target.closest('.SPZ-2001-iframe form#pardot-form .form-field').classList.remove('filled');
                            } else {
                                event.target.closest('.SPZ-2001-iframe form#pardot-form .form-field').classList.add('filled');
                            }
                        }
                    });
                }
                document.addEventListener('focusout', function (event) {
                    document.querySelectorAll('.SPZ-2001-iframe form#pardot-form .form-field.typing').forEach(function (elem) {
                        elem.classList.remove('active', 'typing');
                    })
                }, true);
            });
        }
    });
}

// Main Page Code
if (currentURL !== "https://www2.maxio.com/l/699023/2022-08-16/nh4lk") {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('SPZ-2001')) {
            clearInterval(bodyInterval);
            bodyEle.classList.add('SPZ-2001');
            cookieValue('#2001', '#2001_variant1');
            const template_heroSelector = `.hero-form`;
            const template_position = "beforebegin";
            const template_formSelector = `.hero-form iframe[id*="form"]`;
            const template_heroContent = {
                heroHeading: `Get a Demo`,
                trustBadge: [
                    {
                        trustBadgeLogo: `//res.cloudinary.com/spiralyze/image/upload/v1731506534/maxio/2001/capterra_logo.svg`,
                        trustBadgeLogoAlt: `Capterra`,
                        trustBadgeReview: `//res.cloudinary.com/spiralyze/image/upload/v1731506534/maxio/2001/frame_1171275610.svg`,
                        trustBadgeReviewAlt: `Rating Stars`,
                        trustBadgeReviewRating: `<span>4.4</span> (248 reviews)`,
                    },
                ],
                contentHeading: "Boost revenue 14% by automating subscription management",
                middleArrowImage: `//res.cloudinary.com/spiralyze/image/upload/v1731506534/maxio/2001/arrow.svg`,
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
                integratesLogos: {
                    integratesHeading: "Integrates  with:",
                    integratesImages: [
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/v1731506725/maxio/2001/salesforce.svg",
                            alt: "salesforce"
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/v1731506725/maxio/2001/vector.svg",
                            alt: "hubspot"
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/v1731506725/maxio/2001/64__integration__quickbooks.svg",
                            alt: "quickbooks"
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/v1731506725/maxio/2001/xero.svg",
                            alt: "xero"
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/v1731506725/maxio/2001/netsuite_logo.svg",
                            alt: "netsuite"
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/v1731506725/maxio/2001/frame_1171275789.svg",
                            alt: "avalara"
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/v1731506725/maxio/2001/googlesheets.svg",
                            alt: "sheets"
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/v1731506725/maxio/2001/64__integration__google.svg",
                            alt: "stripe"
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/v1731506725/maxio/2001/paypal.svg",
                            alt: "paypal"
                        },
                    ]
                },
            };
            const template_additionalSection = {
                socialProofLogos: {
                    socialProofImages: [
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/v1731578879/maxio/2001/chili_piper-logo.svg",
                            alt: "Chili Piper",
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/v1731578880/maxio/2001/mailgun-logo.svg",
                            alt: "Mailgun",
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/v1731578880/maxio/2001/stackoverflow-logo.svg",
                            alt: "Stack Overflow",
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/v1731578881/maxio/2001/jasper-logo.svg",
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
									${['trustBadgeLogo', 'trustBadgeReview'].map((key, index) =>
                    formData.trustBadge[0][key].trim() ? `<img src="${formData.trustBadge[0][key]}" alt="${formData.trustBadge[0][`${key}Alt`]}" class="${index === 0 ? 'badge-logo' : 'star-rating'}" />` : ""
                ).join('')}
									${formData.trustBadge[0].trustBadgeReviewRating.trim() ? `<span class="trust-badge-rating">${formData.trustBadge[0].trustBadgeReviewRating}</span>` : ""}
								</div>`
                        : ""}
								${formData.contentHeading.replace(/\s/g, "").length !== 0 ? `<div class="content-heading">${formData.contentHeading}</div>` : ""}
								<div class="spz-features-wrap">
									${formData.features.length > 0 ? formData.features.map((item) => {
                            return `<div class="feature-item">
											<img src="${item.checkmarkImage}" alt="checkmark" />
											<span>${item.featureItemContent}</span>
										</div>`;
                        }).join("") : ""}
								</div>
								${typeof formData.integratesLogos !== 'undefined' ? `<div class="integrates-logos">
									<div class="integrates-heading">${formData.integratesLogos.integratesHeading}</div>
										<div class="integrates-images">
											${formData.integratesLogos.integratesImages.map(item => item.url ? `<div class="image-item"><img src="${item.url}" alt="${item.alt || 'Integration logo'}" /></div>` : "").join("")}
										</div>
								</div>` : ""}
							</div>
							<div class="spz-form-section">
								${formData.heroHeading.replace(/\s/g, "").length !== 0 ? `<div class="form-heading">${formData.heroHeading}</div>` : ""}
								<div class="the-form"></div>
								${formData.middleArrowImage ? `<img src="${formData.middleArrowImage}" alt="${formData.middleArrowAlt || 'Arrow'}" class="middle-arrow-image" />` : ""}
							</div>
						</div>
						${template_additionalSection.socialProofLogos ? `<div class="social-proof-logos">
							${template_additionalSection.socialProofLogos.socialProofImages.map(item =>
                            `<img src="${item.url}" alt="${item.alt || 'Social Proof Logo'}" class="social-proof-logo" />`
                        ).join("")}
						</div>` : ""}
					</div>
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
        }
    });
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
