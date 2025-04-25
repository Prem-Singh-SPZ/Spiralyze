//check if current url has _vis_test_id query parameter in the url then get the value of the query parameter
var urlParams = new URLSearchParams(window.location.search);
var vis_test_id = urlParams.get('_vis_test_id');
if (vis_test_id) {
    var vis_opt_random = urlParams.get('_vis_opt_random');
    var vis_hash = urlParams.get('_vis_hash');
    var vis_opt_preview_combination = urlParams.get('_vis_opt_preview_combination');
    var urlQuery = `_vis_test_id=${vis_test_id}&_vis_opt_random=${vis_opt_random}&_vis_hash=${vis_hash}&_vis_opt_preview_combination=${vis_opt_preview_combination}` || '';
}

const template_heroSelector = `.hero-generic`;
const template_position = "afterend";
const template_heroContent = {
    contentSuperHeading: "Billing and Financial Reporting Software",
    contentHeading: "Grow Revenue<br /> 14% by Optimizing Subscription & Usage-Based Billing",
    contentSubHeading: "",
    tiles: {
        tilesHeading: `Which service(s) are you interested in?`,
        tilesItems: [
            {
                tileImageURL: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<g clip-path="url(#clip0_24421_4336)">
					<path d="M12.2263 16.9626C12.8768 16.9626 13.4607 16.8003 13.978 16.4757C14.4951 16.1513 14.7537 15.6309 14.7537 14.9143C14.7537 14.3179 14.5314 13.8429 14.0869 13.4891C13.6421 13.1352 12.8124 12.7355 11.5977 12.29C10.4227 11.8681 9.57505 11.3956 9.05486 10.8726C8.53467 10.3495 8.27457 9.65867 8.27457 8.8C8.27457 8.06305 8.54057 7.38829 9.07257 6.77572C9.60438 6.16333 10.3479 5.77286 11.3031 5.60429V5C11.3031 4.792 11.3812 4.61 11.5374 4.454C11.6934 4.29781 11.8754 4.21971 12.0834 4.21971C12.2914 4.21971 12.4734 4.29781 12.6294 4.454C12.7856 4.61 12.8637 4.792 12.8637 5V5.60429C13.4014 5.64238 13.9018 5.81714 14.3649 6.12857C14.8277 6.44 15.2057 6.82648 15.4989 7.288C15.6029 7.4461 15.6124 7.61495 15.5274 7.79457C15.4425 7.974 15.2996 8.10038 15.0989 8.17372C14.9099 8.24686 14.719 8.25638 14.5263 8.20229C14.3337 8.148 14.1758 8.0381 14.0526 7.87257C13.833 7.60724 13.5637 7.39219 13.2449 7.22743C12.9262 7.06267 12.5486 6.98029 12.112 6.98029C11.4013 6.98029 10.8442 7.14876 10.4406 7.48571C10.037 7.82267 9.83514 8.26076 9.83514 8.8C9.83514 9.33924 10.0322 9.75905 10.4263 10.0594C10.8204 10.3598 11.6182 10.7151 12.8197 11.1254C14.1911 11.6207 15.1128 12.1759 15.5846 12.7911C16.0564 13.4066 16.2923 14.1143 16.2923 14.9143C16.2923 15.4594 16.1915 15.9378 15.99 16.3494C15.7885 16.7612 15.5251 17.1074 15.2 17.388C14.8747 17.6686 14.5043 17.8902 14.0889 18.0529C13.6734 18.2153 13.246 18.3296 12.8066 18.3957V19C12.8066 19.208 12.7285 19.39 12.5723 19.546C12.4163 19.7022 12.2343 19.7803 12.0263 19.7803C11.8183 19.7803 11.6363 19.7022 11.4803 19.546C11.3241 19.39 11.246 19.208 11.246 19V18.3386C10.5443 18.1862 9.93629 17.9132 9.422 17.5197C8.90771 17.1264 8.49086 16.6132 8.17143 15.9803C8.07905 15.7795 8.07829 15.581 8.16914 15.3846C8.26 15.1882 8.40581 15.0534 8.60657 14.9803C8.79552 14.907 8.98819 14.908 9.18457 14.9834C9.38095 15.059 9.53114 15.1854 9.63514 15.3626C9.93114 15.8871 10.3022 16.285 10.7483 16.556C11.1944 16.827 11.687 16.9626 12.2263 16.9626ZM12.0549 24C9.82628 24 7.8039 23.4483 5.98771 22.3449C4.17171 21.2416 2.74724 19.7632 1.71429 17.9097V20.4614C1.71429 20.7047 1.63219 20.9084 1.468 21.0726C1.304 21.2366 1.10038 21.3186 0.857143 21.3186C0.613905 21.3186 0.41019 21.2366 0.246 21.0726C0.082 20.9084 0 20.7047 0 20.4614V16.066C0 15.7713 0.0984761 15.5255 0.295428 15.3286C0.492571 15.1314 0.738381 15.0329 1.03286 15.0329H5.42857C5.67181 15.0329 5.87543 15.115 6.03943 15.2791C6.20362 15.4431 6.28571 15.6468 6.28571 15.89C6.28571 16.1332 6.20362 16.337 6.03943 16.5011C5.87543 16.6651 5.67181 16.7471 5.42857 16.7471H3.03943C3.86571 18.4117 5.08695 19.751 6.70314 20.7649C8.31933 21.7788 10.1032 22.2857 12.0549 22.2857C14.7112 22.2857 17.0043 21.4088 18.934 19.6549C20.8637 17.9011 21.9766 15.7122 22.2726 13.088C22.3032 12.8491 22.4035 12.6557 22.5734 12.5077C22.7435 12.3597 22.9479 12.2857 23.1866 12.2857C23.4298 12.2857 23.6346 12.3674 23.8009 12.5309C23.9671 12.6941 24.035 12.8893 24.0043 13.1166C23.8635 14.6476 23.4554 16.0729 22.78 17.3923C22.1046 18.7117 21.2325 19.8611 20.1637 20.8406C19.0948 21.82 17.8684 22.5914 16.4846 23.1549C15.1006 23.7183 13.624 24 12.0549 24ZM12.0549 1.71429C9.44248 1.71429 7.16229 2.57838 5.21429 4.30657C3.26629 6.03476 2.14057 8.23295 1.83714 10.9011C1.80648 11.14 1.70619 11.3352 1.53629 11.4869C1.36619 11.6385 1.16181 11.7143 0.923143 11.7143C0.672476 11.7143 0.46581 11.6326 0.303143 11.4691C0.140667 11.3059 0.0747619 11.107 0.105429 10.8726C0.260667 9.31219 0.681524 7.87038 1.368 6.54714C2.05448 5.2241 2.93219 4.07838 4.00114 3.11C5.0699 2.14143 6.29257 1.38095 7.66914 0.828571C9.04571 0.27619 10.5076 0 12.0549 0C14.2615 0 16.2839 0.553524 18.122 1.66057C19.9601 2.76743 21.3846 4.25867 22.3954 6.13429V3.53857C22.3954 3.29533 22.4775 3.09162 22.6417 2.92743C22.8057 2.76343 23.0093 2.68143 23.2526 2.68143C23.4958 2.68143 23.6995 2.76343 23.8637 2.92743C24.0277 3.09162 24.1097 3.29533 24.1097 3.53857V7.934C24.1097 8.22867 24.0112 8.47448 23.8143 8.67143C23.6171 8.86857 23.3713 8.96714 23.0769 8.96714H18.6811C18.4379 8.96714 18.2343 8.88505 18.0703 8.72086C17.9061 8.55686 17.824 8.35324 17.824 8.11C17.824 7.86676 17.9061 7.66305 18.0703 7.49886C18.2343 7.33486 18.4379 7.25286 18.6811 7.25286H21.0703C20.2659 5.61762 19.0538 4.28571 17.434 3.25714C15.8142 2.22857 14.0211 1.71429 12.0549 1.71429Z" fill="#0042FF"></path>
				</g>
				<defs>
					<clipPath id="clip0_24421_4336">
						<rect width="24" height="24" fill="#0042FF"></rect>
					</clipPath>
				</defs>
			</svg>`,
                tileHeading: `Usage-based <br>billing`,
                tileValue: `billing`,
            },
            {
                tileImageURL: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<g>
					<path d="M8 2V6M16 2V6M3 10H21M9 16L11 18L15 14M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="#0042FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
				</g>
			</svg>`,
                tileHeading: `Subscription <br>management`,
                tileValue: `subscription`,
            },
            {
                tileImageURL: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<g>
					<path d="M4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V8M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20M3 15L5 17L9 13" stroke="#0042FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
				</g>
			</svg>`,
                imageAlt: `Financial reporting`,
                tileHeading: `Financial <br>reporting`,
                tileValue: `reporting`,
            },
            {
                tileImageURL: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
					<path d="M2.12676 20C1.53245 20 1.02941 19.7941 0.617647 19.3824C0.205882 18.9706 0 18.4676 0 17.8732V2.12676C0 1.53245 0.205882 1.02941 0.617647 0.617647C1.02941 0.205882 1.53245 0 2.12676 0H17.8732C18.4676 0 18.9706 0.205882 19.3824 0.617647C19.7941 1.02941 20 1.53245 20 2.12676V17.8732C20 18.4676 19.7941 18.9706 19.3824 19.3824C18.9706 19.7941 18.4676 20 17.8732 20H2.12676ZM9.11765 13.1788H1.76471V17.8732C1.76471 17.9789 1.79863 18.0657 1.86647 18.1335C1.93431 18.2014 2.02108 18.2353 2.12676 18.2353H9.11765V13.1788ZM10.8824 13.1788V18.2353H17.8732C17.9789 18.2353 18.0657 18.2014 18.1335 18.1335C18.2014 18.0657 18.2353 17.9789 18.2353 17.8732V13.1788H10.8824ZM9.11765 11.4141V6.33471H1.76471V11.4141H9.11765ZM10.8824 11.4141H18.2353V6.33471H10.8824V11.4141ZM1.76471 4.57029H18.2353V2.12676C18.2353 2.02108 18.2014 1.93431 18.1335 1.86647C18.0657 1.79863 17.9789 1.76471 17.8732 1.76471H2.12676C2.02108 1.76471 1.93431 1.79863 1.86647 1.86647C1.79863 1.93431 1.76471 2.02108 1.76471 2.12676V4.57029Z" fill="#0042FF"></path>
				</svg>`,
                tileHeading: `Revenue <br>recognition`,
                tileValue: `revrec`,
            },
            {
                tileImageURL: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<g>
						<path d="M9 12L11 14L15 10M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0203 11.67 21.94C7.5 20.5 4 18 4 13V6.00001C4 5.73479 4.10536 5.48044 4.29289 5.2929C4.48043 5.10536 4.73478 5.00001 5 5.00001C7 5.00001 9.5 3.80001 11.24 2.28001C11.4519 2.09901 11.7214 1.99956 12 1.99956C12.2786 1.99956 12.5481 2.09901 12.76 2.28001C14.51 3.81001 17 5.00001 19 5.00001C19.2652 5.00001 19.5196 5.10536 19.7071 5.2929C19.8946 5.48044 20 5.73479 20 6.00001V13Z" stroke="#0042FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
					</g>
				</svg>`,
                tileHeading: `Collections`,
                tileValue: `collections`,
            },
            {
                tileImageURL: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<g>
						<path d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21M7 16C7.5 14 8.5 9 11 9C13 9 13 12 15 12C17.5 12 19.5 7 20 5" stroke="#0042FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
					</g>
				</svg>`,
                tileHeading: `Pricing <br>strategy`,
                tileValue: `pricing`,
            },
        ],
    },
    heroCTA: {
        CTAText: "Get a Demo",
        CTAHref: "/demo",
    },
};
const template_additionalSection = {
    interfaceImage: [
        {
            breakPoint: 1024,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/image.webp",
        },
        {
            breakPoint: 768,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/image_tab_white.webp",
        },
        {
            breakPoint: 320,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/image_mob_white.webp",
        },
    ],
    socialProofImages: [
        {
            url: "//res.cloudinary.com/spiralyze/image/upload/v1739463138/maxio/1007/stackoverflow_2.svg",
            alt: "stack overflow",
        },
        {
            url: "//res.cloudinary.com/spiralyze/image/upload/v1739463138/maxio/1007/chili_piper_2.svg",
            alt: "CHILI PIPER",
        },
        {
            url: "//res.cloudinary.com/spiralyze/image/upload/v1739463140/maxio/1007/mailgun_2.svg",
            alt: "mailgun",
        },
        {
            url: "//res.cloudinary.com/spiralyze/image/upload/v1739463139/maxio/1007/blue_ridge_2.svg",
            alt: "BLUE RIDGE",
        },
    ],
};

function addHero(formData, template_position, template_heroSelector, template_additionalSection) {
    const formTemplate = `<div class="spz-hero">
		<div class="hero-wrapper">
			<div class="content-section">
				${formData.contentSuperHeading.replace(/\s/g, "").length !== 0 ? `<div class="content-superheading">${formData.contentSuperHeading}</div>` : ""}
				${formData.contentHeading.replace(/\s/g, "").length !== 0 ? `<h2 class="content-heading">${formData.contentHeading}</h2>` : ""}
			</div>
			${formData.tiles.length !== 0 ? `<div class="tiles-wrap">
				<div class="tiles-heading">${formData.tiles.tilesHeading}</div>
				<div class="tiles-items">${formData.tiles.tilesItems.map((item) => {
        return `<div class="tile-item">
						<div class="tile-image">${item.tileImageURL}</div>
						<div class="tile-heading" value="${item.tileValue}">${item.tileHeading}</div>
					</div>`;
    }).join("")}
				</div>
			</div>`: ``}
			${typeof formData.heroCTA !== "undefined" ? `<div class="spz-email">
				<div class="form-group-wrapper">
					<div class="form-group-spz">
						<input type="email" name="email" class="form-field-spz email-hero-spz" placeholder=" " />
						<label class="form-label-spz">Business Email</label>
					</div>
					<a href="${formData.heroCTA.CTAHref}" id="hero-copy-url" class="hero-btn redirect-to-demo spz_tracking_1007">
						<span>${formData.heroCTA.CTAText}</span> 
					</a>
				</div>
			</div>`: ""}
			</div>
			${typeof template_additionalSection.interfaceImage !== "undefined" ? `<div class="interface-image-wrap">
				<picture>${template_additionalSection.interfaceImage.map((item) => `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`).join("")}
					<img src="${template_additionalSection.interfaceImage[0].url}" alt="Hero dashboard" />
				</picture>
			</div>` : ``}
		</div>
		${template_additionalSection?.socialProofImages ? `<div class="social-proof-logos">
			<div class="logos-wrap">
				${template_additionalSection.socialProofImages.map(item => `<img src="${item.url}" alt="${item.alt || 'Social Proof Logo'}" class="social-proof-logo" />`).join("")}
			</div>
		</div>` : ""}
  `;
    document.querySelector(template_heroSelector).insertAdjacentHTML(template_position, formTemplate);
    document.querySelectorAll(".tiles-items .tile-item").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.stopPropagation();
            if (e.target.classList.contains("tile-item")) {
                e.target.classList.toggle("active");
            } else {
                if (e.target.parentElement.classList.contains("tile-item")) {
                    e.target.parentElement.classList.toggle("active");
                } else {
                    e.target.parentElement.parentElement.classList.toggle("active");
                }
            }
        });
    });
}

// iFrame Code
function formPage() {
    var iframebodyInterval = setInterval(function () {
        var iframebodyEle = document.querySelector('body');
        if (iframebodyEle) {
            if (!iframebodyEle.classList.contains('SPZ-1007-iframe-V1')) {
                clearInterval(iframebodyInterval);
                iframebodyEle.classList.add('SPZ-1007-iframe-V1');
                waitForElm('body #pardot-form').then(function () {
                    var formAction = document.querySelector('body #pardot-form').action;
                    //check if url has query params
                    if (formAction.includes('?')) {
                        document.querySelector('body #pardot-form').action = formAction + '&spz=1007' + urlQuery;
                    } else {
                        document.querySelector('body #pardot-form').action = formAction + '?spz=1007' + '&' + urlQuery;
                    }
                });
                waitForElm('.SPZ-1007-iframe-V1 form#pardot-form .submit input').then(function () {
                    hiddenValue();
                });
            }
        }
    });
}

// Demo Page Code
function demoPage() {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('SPZ-1007-demo-V1')) {
            clearInterval(bodyInterval);
            bodyEle.classList.add('SPZ-1007-demo-V1');
            waitForElm('.blocks-page iframe').then(function () {
                setTimeout(() => {
                    var iframeSrc = document.querySelector('.blocks-page iframe').src;
                    if (iframeSrc.includes('?')) {
                        document.querySelector('.blocks-page iframe').src = iframeSrc + '&spz=1007' + urlQuery;
                    } else {
                        document.querySelector('.blocks-page iframe').src = iframeSrc + '?spz=1007' + '&' + urlQuery;
                    }
                }, 500);
            });
        }
    });
}

if (window.location.pathname === "/") {
    mainPage();
}
if (location.href.indexOf('/demo') > -1) {
    demoPage();
}
if (location.href.indexOf('spz=1007') > -1) {
    formPage();
}

function mainPage() {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-1007-v1')) {
            clearInterval(bodyInterval);
            document.cookie = "spzdevicewidth=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.maxio.com";
            removeSpecificCookieValue('#1005', ['#1005_variant1', '#1005_variant2']);
            bodyEle.classList.add('spz-1007-v1');
            cookieValue('#1005', '#1005_true_control');

            waitForElm('#content #blocks-page .hero-generic .container > div > div:first-child .my-6 a').then(function () {
                addHero(template_heroContent, template_position, template_heroSelector, template_additionalSection);
                document.querySelector('.form-field-spz').addEventListener('keypress', function (e) {
                    if (e.key === 'Enter') {
                        document.querySelector('.redirect-to-demo').click();
                    }
                });

                document.querySelector('.redirect-to-demo').addEventListener('click', function () {
                    var emailValue = document.querySelector('.email-hero-spz').value;
                    setCookie('SPZ_Carry_Email', emailValue, 1);
                    window.location.href = 'https://www.maxio.com/demo';

                    //check all the.tile-item with .active class and store the value in cookie comma separated
                    var activeTiles = document.querySelectorAll('.tiles-items .tile-item.active .tile-heading');
                    var activeTilesValue = [];
                    activeTiles.forEach(function (item) {
                        activeTilesValue.push(item.getAttribute('value'));
                    });
                    setCookie('activeTilesValue', activeTilesValue.join(','), 1);
                });

                // Remaining page
                // document.querySelector('.social-proof-logos').insertAdjacentHTML('afterend', subscriptionCont());
                // document.querySelector('.subscription-billing').insertAdjacentHTML('afterend', customerStories());
                // document.querySelector('.customer-stories').insertAdjacentHTML('afterend', featureSection());
                // document.querySelector('.features-sec').insertAdjacentHTML('afterend', integratedSection());

                [integratedSection(), featureSection(), customerStories(), subscriptionCont()].forEach(template => {
                    document.querySelector('.social-proof-logos').insertAdjacentHTML('afterend', template);
                });
            });

            waitForElm('.theme-white style').then(function () {
                document.querySelector('.theme-white style').remove();
            });
        }
    });
}

//wait for element
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

function hiddenValue() {
    const spz_cro_Interval = setInterval(function () {
        const cro_primary = document.querySelector('form#pardot-form .form-field.cro_primary input');
        if (cro_primary) {
            clearInterval(spz_cro_Interval);
            var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');
            cro_primary.value = ExistingHiddenFieldValue;
        }
    });
    const cro_sec = setInterval(function () {
        const cro_secondary = document.querySelector('form#pardot-form .form-field.cro_secondary input');
        if (cro_secondary) {
            clearInterval(cro_sec);
            var activeTilesValue = getCookie('activeTilesValue');
            if (activeTilesValue) {
                cro_secondary.value = activeTilesValue;
            }
        }
    });
    var spz_email_Interval = setInterval(function () {
        var emailfiled = document.querySelector('form#pardot-form .form-field.CP_Email input');
        if (emailfiled) {
            clearInterval(spz_email_Interval);
            var SPZEmailValue = getCookie('SPZ_Carry_Email');
            var emailField = document.querySelector('form#pardot-form .form-field.CP_Email input');
            if (SPZEmailValue) {
                emailField.value = SPZEmailValue;
                emailField.focus();
            }
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

function removeSpecificCookieValue(name, values) {
    ['HiddenFieldName', 'HiddenFieldValue'].forEach((key, i) => {
        const updatedValues = getCookie(key)?.split(',').filter(v => !((i ? values : [name]).includes(v))).join(',');
        setCookie(key, updatedValues || '', 1);
    });
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=maxio.com;';
}

// Subscription Section
function subscriptionCont() {
    const subscriptionCont = {
        section: "subscription-billing",
        container: {
            title: "End-to-end subscription <br/> & usage-based billing",
            features: [
                {
                    alignment: "right-img green-bg",
                    featureItem: {
                        leftContent: {
                            fIcon: {
                                imageURL: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/maxio/1007/billing_bg.svg",
                                alt: "Automate Usage-Based Billing Icon",
                            },
                            fiCont: {
                                fiTitle: "Automate usage-based billing",
                                fiDesc: "Create usage-based products, set prices, and configure catalogs in a few clicks. Collect usage data and automatically calculate line items for invoices.",
                                readMore: {
                                    link: "https://www.maxio.com/billing/usage-based-billing-software",
                                    text: "Read more",
                                },
                            },
                        },
                        rightContent: {
                            imageURL: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/img_automate_usage-based_billing_3.webp",
                            imageURLTab: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/tab_img_automate_usage-based_billing_2.webp",
                            imageURLMob: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/mob_img_automate_usage-based_billing_2.webp",
                            alt: "Automate usage-based billing",
                        },
                    },
                },
                {
                    alignment: "left-img purple-bg",
                    featureItem: {
                        leftContent: {
                            fIcon: {
                                imageURL: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/maxio/1007/subscription.svg",
                                alt: "Full subscription management Icon",
                            },
                            fiCont: {
                                fiTitle: "Full subscription management",
                                fiDesc: "Collect recurring payments. Manage subscriptions. Handle signups, trials, and upgrades. Automate collections.",
                                readMore: {
                                    link: "https://www.maxio.com/subscription-management",
                                    text: "Read more",
                                },
                            },
                        },
                        rightContent: {
                            imageURL: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/img_full_subscription_management_3.webp",
                            imageURLTab: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/tab_img_full_subscription_management_2.webp",
                            imageURLMob: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/mob_img_full_subscription_management_2.webp",
                            alt: "Full subscription management",
                        },
                    },
                },
                {
                    alignment: "right-img orange-bg",
                    featureItem: {
                        leftContent: {
                            fIcon: {
                                imageURL: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/maxio/1007/revenue.svg",
                                alt: "Revenue recognition & reporting Icon",
                            },
                            fiCont: {
                                fiTitle: "Revenue recognition & reporting",
                                fiDesc: "Automate GAAP & IFRS compliance. Generate reports on ARR, MRR, churn, renewals, etc. Get revenue waterfall & drill-down reports.",
                                readMore: {
                                    link: "https://www.maxio.com/revenue-recognition",
                                    text: "Read more",
                                },
                            },
                        },
                        rightContent: {
                            imageURL: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/img_revenue_recognition__reporting_3.webp",
                            imageURLTab: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/tab_img_revenue_recognition__reporting_2.webp",
                            imageURLMob: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/mob_img_revenue_recognition__reporting_2.webp",
                            alt: "Revenue recognition & reporting",
                        },
                    },
                },
                {
                    alignment: "left-img blue-bg",
                    featureItem: {
                        leftContent: {
                            fIcon: {
                                imageURL: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/maxio/1007/payments.svg",
                                alt: "Dozens of payment providers Icon",
                            },
                            fiCont: {
                                fiTitle: "Dozens of payment providers",
                                fiDesc: "Integrate with dozens of payment providers, including Stripe, Braintree, and Authorize.net. Or use our in-house payment solution.",
                                readMore: {
                                    link: "https://www.maxio.com/payment-gateways",
                                    text: "See all payment gateways",
                                },
                            },
                        },
                        rightContent: {
                            imageURL: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/img_dozens_of_payment_providers_3.webp",
                            imageURLTab: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/tab_img_dozens_of_payment_providers_2.webp",
                            imageURLMob: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/mob_img_dozens_of_payment_providers_2.webp",
                            alt: "Dozens of payment providers",
                        },
                    },
                },
            ],
        },
    };

    // Convert to HTML
    const subscriptionContHTML = `<section class="${subscriptionCont.section}">
		<div class="container">
			<div class="sb-title">${subscriptionCont.container.title}</div>
			${subscriptionCont.container.features.map((feature) => {
        return `<div class="sb-features ${feature.alignment}">
							<div class="feature-item">
								<div class="left-content">
									<div class="f-icon">
										<img src="${feature.featureItem.leftContent.fIcon.imageURL}" alt="${feature.featureItem.leftContent.fIcon.alt}"> 
									</div>
									<div class="fi-cont">
										<div class="fi-title">${feature.featureItem.leftContent.fiCont.fiTitle}</div>
										<div class="fi-desc">${feature.featureItem.leftContent.fiCont.fiDesc}</div>
										<a href="${feature.featureItem.leftContent.fiCont.readMore.link}" class="fi-link group">${feature.featureItem.leftContent.fiCont.readMore.text}
											<svg xmlns="http://www.w3.org/2000/svg" class="group-hover:translate-x-1 transform transition" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M12.7046 4L20 11.2933L20 12.707L12.7049 20L11.2907 18.5862L15.8787 13.9995L14.8787 12.9998L4 12.9998L4 11.0004L14.8787 11.0004L15.8787 10.0007L11.2904 5.41379L12.7046 4Z" fill="#0042FF"></path>
											</svg>
										</a>
									</div>
								</div>
								<div class="right-content">
									<picture>
										<source media="(min-width: 1024px)" srcset="${feature.featureItem.rightContent.imageURL}">
										<source media="(min-width: 768px)" srcset="${feature.featureItem.rightContent.imageURLTab}">
										<source media="(min-width: 300px)" srcset="${feature.featureItem.rightContent.imageURLMob}">
										<img src="${feature.featureItem.rightContent.imageURL}" alt="${feature.featureItem.rightContent.alt}">
									</picture>
								</div>
								<a href="${feature.featureItem.leftContent.fiCont.readMore.link}" class="fi-link group mobile-only">${feature.featureItem.leftContent.fiCont.readMore.text}
									<svg xmlns="http://www.w3.org/2000/svg" class="group-hover:translate-x-1 transform transition" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M12.7046 4L20 11.2933L20 12.707L12.7049 20L11.2907 18.5862L15.8787 13.9995L14.8787 12.9998L4 12.9998L4 11.0004L14.8787 11.0004L15.8787 10.0007L11.2904 5.41379L12.7046 4Z" fill="#0042FF"></path>
									</svg>
								</a>
							</div>
						</div>`;
    }).join("")}
		</div>
	</section>`;
    return subscriptionContHTML;
}

// Customer Stories Section
function customerStories() {
    const customerStories = {
        section: "customer-stories",
        subtitle: "CUSTOMER STORIES",
        title: "See why customers love Maxio",
        stories: [
            {
                stat: "90%",
                statDesc: "faster<br /> reporting",
                quote: "Maxio is a great tool to give you the data that you need to really ensure you're making the right decisions for a business.",
                personName: "Ron Jacobson",
                personTitle: "CEO at Rockerbox",
                personImage: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/ron_jacobson.webp",
            },
            {
                stat: "50%",
                statDesc: "of invoicing processes<br /> automated",
                quote: "Maxio is basically a Senior Accountant running our complex billing. If you want to continue to grow, there's no better software.",
                personName: "Trevor Swim",
                personTitle: "Director of Finance, NinjaCat",
                personImage: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/trevor_swim.webp",
            },
            {
                stat: "90%",
                statDesc: "less time spent<br /> on AR reporting",
                quote: "It's become the single source of truth for all of our AR reporting. AR used to be complex for us in the past. Maxio has made it very, very easy.",
                personName: "Jean-Thomas Cook",
                personTitle: "Head of Finance, parcelLab",
                personImage: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/jean-thomas_cock.webp"
            },
            {
                stat: "3+",
                statDesc: "hours saved per<br /> closed deal",
                quote: "Instantly helpful. Incredible ease of access. Everything's there and you're confident in the numbers. Turns anything you're doing in Excel into one simple application.",
                personName: "Taylor McPherson",
                personTitle: "Fmr. Business Operations Specialist, Adeptia",
                personImage: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/taylor_mcpherson.webp",
            },
            {
                stat: "250%",
                statDesc: "growth<br /> in ARR",
                quote: "We've been able to automate billings and subscription renewals. We close revenue in 5 days. And it provides us with SaaS-based metrics at the push of a button.",
                personName: "Antonietta Ciccone",
                personTitle: "Dir. Corporate Revenue Accounting, Extensiv",
                personImage: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/antonietta_ciccone.webp",
            },
            {
                stat: "58%",
                statDesc: "faster<br /> close",
                quote: "Maxio’s reporting allows us to better manage our goals. We gain a lot of time and efficiency. Now we can leverage our finance team in different areas to help achieve the overall company targets.",
                personName: "Charles Dye",
                personTitle: "Financial Controller, Blue Ridge Solutions",
                personImage: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1007/charles_dye.webp",
            },
        ]
    };

    // Convert to HTML
    const customerStoriesHTML = `<section class="${customerStories.section}">
			<div class="container">
				<div class="customer-stories__header">
					<div class="customer-stories__subtitle">${customerStories.subtitle}</div>
					<div class="customer-stories__title">${customerStories.title}</div>
				</div>
				<div class="customer-stories__grid">
				${customerStories.stories.map((story) => {
        return `<div class="customer-stories__item">
					<div class="customer-stories__item-content">
						<div class="customer-stories__stat"><span>${story.stat}</span> ${story.statDesc}</div>
						<div class="customer-stories__quote">${story.quote}</div>
						<div class="customer-stories__author">
							<img src="${story.personImage}" alt="${story.personName}" class="customer-stories__avatar">
							<div class="customer-stories__author-info">
								<div class="customer-stories__author-name">${story.personName}</div>
								<div class="customer-stories__author-title">${story.personTitle}</div>
							</div>
						</div>
					</div>
				</div>`;
    }).join("")}
				</div>
			</div>
		</section>`;
    return customerStoriesHTML;
}

// Features Section
function featureSection() {
    const features = [
        {
            icon: "//res.cloudinary.com/spiralyze/image/upload/v1739462232/maxio/1007/offers.svg",
            title: "Offers",
            description: "Build personalized offers in minutes. Easily include add-ons, upsells, bundle offers, and usage-based pricing options.",
        },
        {
            icon: "//res.cloudinary.com/spiralyze/image/upload/v1739462233/maxio/1007/billing.svg",
            title: "Billing",
            description: "Automate recurring, usage-based, and event-based invoicing. Set renewal timing. Charge the full amount, prorate, or delay the transaction.",
        },
        {
            icon: "//res.cloudinary.com/spiralyze/image/upload/v1739462233/maxio/1007/cash_collection.svg",
            title: "Cash collection",
            description: "Automate payment reminders & dunning cadences. Track past-due, expected collections, and DSO. Reduce delinquent payments & increase cash flow.",
        },
        {
            icon: "//res.cloudinary.com/spiralyze/image/upload/v1739462233/maxio/1007/multi-entity_support.svg",
            title: "Multi-entity support",
            description: "Allow users to create multiple sites for each company entity. Includes unique product catalogs, settings, payment gateways, etc.",
        },
        {
            icon: "//res.cloudinary.com/spiralyze/image/upload/v1739462233/maxio/1007/self_service.svg",
            title: "Self service",
            description: "Accept signups and trials. Offer self-service portals. Let users manage subscriptions, pay invoices, update billing info, and upgrade plans.",
        },
        {
            icon: "//res.cloudinary.com/spiralyze/image/upload/v1739462233/maxio/1007/plg__slg_support.svg",
            title: "PLG & SLG support",
            description: "Simplify hybrid growth strategies. Manage enterprise deals and self-serve subscriptions in one seamless system.",
        },
    ];

    // Convert to HTML
    const featuresHTML = `<section class="features-sec">
		<div class="container">
			<div class="features-sec__title">Features</div>
				<div class="features-sec__grid">
				${features.map((feature) => {
        return `<div class="features-sec__item">
								<div class="features-sec__icon">
									<img src="${feature.icon}" alt="${feature.title}">
								</div>
								<div class="features-sec__item-title">${feature.title}</div>
								<div class="features-sec__item-description">${feature.description}</div>
							</div>`;
    }).join("")}
				</div>
			</div>
		</section>`;
    return featuresHTML;
}

// Integrated Section
function integratedSection() {
    const integrateData = {
        title: "Integrate all your critical systems",
        desc: "85+ integrations including Hubspot, Salesforce, NetSuite, Quickbooks, Xero, Stripe, etc. Get 6,000+ additional integrations through Zapier like Excel and Calendly.",
        CTAText: "Integrations",
        CTAHref: "//www.maxio.com/integrations",
        integrateLogos: [
            { url: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/maxio/1007/oracle.svg", alt: "ORACLE NETSUITE" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/maxio/1007/db.svg", alt: "qb" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/maxio/1007/avalara.svg", alt: "Avalara" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/maxio/1007/salesforce.svg", alt: "Salesforce" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/maxio/1007/xero.svg", alt: "Xero" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/maxio/1007/sage.svg", alt: "Sage" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/maxio/1007/hubspot.svg", alt: "HubSpot" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/maxio/1007/stripe.svg", alt: "Stripe" },
        ]
    };

    const integrateTemplate = `${integrateData?.integrateLogos ? `<section class="integrate-section">
		<div class="integrate-wrapper">
				<div class="content-wrap">
					${integrateData.title.replace(/\s/g, "").length !== 0 ? `<h3 class="content-heading">${integrateData.title}</h3>` : ""}
					${integrateData.desc.replace(/\s/g, "").length !== 0 ? `<div class="content">${integrateData.desc}</div>` : ""}
					${integrateData.CTAHref.length !== 0 ? `<a href=${integrateData.CTAHref} class="integrate-cta group">
						<span>${integrateData.CTAText}</span>
						<svg xmlns="http://www.w3.org/2000/svg" class="group-hover:translate-x-1 transform transition" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M12.7046 4L20 11.2933L20 12.707L12.7049 20L11.2907 18.5862L15.8787 13.9995L14.8787 12.9998L4 12.9998L4 11.0004L14.8787 11.0004L15.8787 10.0007L11.2904 5.41379L12.7046 4Z" fill="#FFFFFF"></path>
						</svg>
					</a>` : ""}
				</div>
				<div class="logos-wrap">
					${integrateData.integrateLogos.map(item => `<div class="logos-item"><img src="${item.url}" alt="${item.alt || 'integrate Logo'}" class="integrate-logo" /></div>`).join("")}
				</div>
				${integrateData.CTAHref.length !== 0 ? `<a href=${integrateData.CTAHref} class="integrate-cta group">
						<span>${integrateData.CTAText}</span>
						<svg xmlns="http://www.w3.org/2000/svg" class="group-hover:translate-x-1 transform transition" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M12.7046 4L20 11.2933L20 12.707L12.7049 20L11.2907 18.5862L15.8787 13.9995L14.8787 12.9998L4 12.9998L4 11.0004L14.8787 11.0004L15.8787 10.0007L11.2904 5.41379L12.7046 4Z" fill="#FFFFFF"></path>
						</svg>
					</a>` : ""}
			</div>
		</section>` : ""}`;

    return integrateTemplate;
}
