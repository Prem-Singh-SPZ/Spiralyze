//DEV 1/5. Put your asana task URL here
const asana_URL = `https://app.asana.com/0/1202434538289854/1208671949967394/f`

//DEV 2/5. Find the class or ID of the control hero section and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
const template_sectionSelector = `#testimonials`;

//DEV 3/5. Choose where you redesigned hero section should appear
const template_position = "afterend" //"beforebegin", "beforeend", "afterend"

//DEV 4/5. Headline & accordion section
const template_sectionContent = {
    sectionHeading: "All-In-One SaaS Subscription Management",
    sectionSubHeading: "Streamline subscription and contract billing. Automate invoicing. Stay GAAP & IFRS compliant.",
    accordionItems: [
        {
            title: 'Usage-based billing',
            content: `<p>Sync product usage with billing for accurate invoicing. No more spreadsheets and manual reconciliation.</p>
                        <p>Charge based on license quantity, usage beyond prepaid capacity, or run a meter. Supports per unit, volume-based, tiered, and stairstep pricing schemes. No code.</p>`,
            image: [
                {
                    breakPoint: 1024,
                    url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1005/img_usage-based_billing_5.webp",
                },
                {
                    breakPoint: 768,
                    url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1005/img_tab_usage-based_billing_3.webp",
                },
                {
                    breakPoint: 320,
                    url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1005/mob_img_automate_usage-based_billing_4.webp",
                },
            ],
        },
        {
            title: 'Subscription management',
            content: `<p>Create subscription plans and individual contracts in minutes. Set prices. Enable setup fees, coupons, add-ons, and upsells.</p> 
                        <p>Let users get custom pricing by filling out a PCI-compliant form. Auto-generate invoices for self-service billing. Sync customer data with Salesforce, HubSpot, and other CRMs.</p>`,
            image: [
                {
                    breakPoint: 1024,
                    url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1005/img_automate_usage-based_billing_16.webp",
                },
                {
                    breakPoint: 768,
                    url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1005/img_tab_automate_usage-based_billing_4.webp",
                },
                {
                    breakPoint: 320,
                    url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1005/mob_img_full_subscription_management_4.webp",
                },
            ],
        },
        {
            title: 'Revenue recognition & reporting',
            content: `<p>Create revenue recognition rules based on your ASC 606/IFTS 15 policies. Or use premade recognition methods for fast results.</p>
                        <p>Automate schedules, run calculations, and identify deviations. Visualize data with unlimited custom dashboards. Drill down. Generate 1-click reports. ARR summary, DSO, and 30+ others.</p>`,
            image: [
                {
                    breakPoint: 1024,
                    url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1005/img_automate_usage-based_billing_17.webp",
                },
                {
                    breakPoint: 768,
                    url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1005/img_tab_automate_usage-based_billing_5.webp",
                },
                {
                    breakPoint: 320,
                    url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1005/mob_img_revenue_recognition__reporting_4.webp",
                },
            ],
        },
        {
            title: 'Integrations',
            content: `<p>Integrate with dozens of payment providers, including Stripe, Braintree, and Authorize.net. Or use our in-house payment solution.</p>`,
            image: [
                {
                    breakPoint: 1024,
                    url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1005/img_automate_usage-based_billing_18.webp",
                },
                {
                    breakPoint: 768,
                    url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1005/img_automate_usage-based_billing_19.webp",
                },
                {
                    breakPoint: 320,
                    url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1005/mob_img_dozens_of_payment_providers_5.webp",
                },
            ],
        },
    ],

    CTABlock: [
        {
            CTAText: "Get a demo",
            CTAHref: "https://www.maxio.com/demo/",
            className: "spz-primary"
        },
        {
            CTAText: "Take a tour",
            CTAHref: "https://www.maxio.com/tour-center/",
            className: "spz-secondary"
        }
    ]
};

/***********************************
************************************
DO NOT TOUCH
BEYOND THIS LINE
******************************
************************/
//Helper function to add input listeners like focus, blur and add class to parent div
function addHorizontalAccordion(content, whereToPut, template_sectionSelector) {
    const formTemplate = `
		<div class="spz-bg-wrap">
			<div class="features-heading">${content.sectionHeading}</div>
			<div class="features-subheading">${content.sectionSubHeading}</div>
			<div class="spz-features-accordion__wrapper">
				<div class="spz-features-accordion__row">
				  <div class="spz-features-accordion">
				    <div class="spz-features-accordion__contents">
				    	${content.accordionItems.map(item => {
        return `
				    		<div class="content">
						        <div class="spz-features-accordion__item">
						          <span>${item.title}</span>
						          <div class="progress_bar"></div>
						        </div>
						        <div class="solution__content">
						        	<p>${item.content}</p>
						        </div>
						        <div class="solution__image">
						          <picture>
						        	${item.image.map(image => `<source media="(min-width:${image.breakPoint}px)" srcset="${image.url}" />`).join("")}
						            <img src="${item.image[0].url}" alt="accordion image" />
						          </picture>
						        </div>
						      </div>
				    		`
    }).join("")
        }
				    </div>
				  </div>
				</div>
			</div>
			${content.CTABlock.length !== 0
            ? `<div class="spz-ctas-wrap separate-block">
	         		${content.CTABlock.map(item => `<a href=${item.CTAHref} class=${item.className} spz_tracking_1005>${item.CTAText}</a>`).join('')}
	         	   </div>`
            : ""
        }
		</div>`;
    document
        .querySelector(template_sectionSelector)
        .insertAdjacentHTML(whereToPut, formTemplate);
    // Start of Accordion Logic
    const DURATION = 8000; // 7 seconds
    const accordionContents = document.querySelector('.spz-features-accordion__contents');
    const NoOfAccordion = content.accordionItems.length;
    let currenctActive = 0;
    let currentSlideProgress = 0;
    let autoSlide = true;

    // Initialize Accordion active item 
    accordionContents.children[currenctActive].classList.add('active');

    // Add event listeners to accordion navigation items for hover functionality
    Array.from(accordionContents.children).forEach((item, index) => {
        item.querySelector('.spz-features-accordion__item').addEventListener('click', (e) => {
            e.preventDefault();
            if (currenctActive !== index) {
                changeAccordionActiveItem(index);
            }
        });
        item.addEventListener('mouseenter', (e) => {
            e.preventDefault();
            if (currenctActive === index) {
                autoSlide = false;
            }
        });
        item.addEventListener('mouseleave', (e) => {
            e.preventDefault();
            if (currenctActive === index) {
                autoSlide = true;
            }
        });
    });


    // Running Interval
    const autoSlideInterval = setInterval(function () {
        if (!autoSlide) return;
        if (currentSlideProgress >= 100) {
            currenctActive = (currenctActive + 1 >= NoOfAccordion) ? 0 : (currenctActive + 1);
            changeAccordionActiveItem(currenctActive);
        } else {
            currentSlideProgress = currentSlideProgress + (100 * 200 / DURATION);
            progressBarWidthAnimation(currenctActive, currentSlideProgress);
        }
    }, 200);

    // Methods
    function progressBarWidthAnimation(active, width) {
        Array.from(accordionContents.children)[active].querySelector('.spz-features-accordion__item .progress_bar').style.width = `${width}%`;
    }
    function changeAccordionActiveItem(current) {
        currentSlideProgress = 0;
        currenctActive = current;

        // Remove all active classes
        for (let i = 0; i < NoOfAccordion; i++) {
            Array.from(accordionContents.children)[i].classList.remove("active");
            progressBarWidthAnimation(i, currentSlideProgress);
        }
        // Add active class to current item
        Array.from(accordionContents.children)[current].classList.add("active");

    }
    // End of Accordion Logic
}


// iFrame Code
function formPage() {
    var iframebodyInterval = setInterval(function () {
        var iframebodyEle = document.querySelector('body');
        if (iframebodyEle) {
            if (!iframebodyEle.classList.contains('spz-1005-iframe')) {
                clearInterval(iframebodyInterval);
                iframebodyEle.classList.add('spz-1005-iframe');
                waitForElm('body #pardot-form').then(function () {
                    var formAction = document.querySelector('body #pardot-form').action;
                    //check if url has query params
                    if (formAction.includes('?')) {
                        document.querySelector('body #pardot-form').action = formAction + '&spz=1005';
                    } else {
                        document.querySelector('body #pardot-form').action = formAction + '?spz=1005';
                    }
                });
                waitForElm('.spz-1005-iframe form#pardot-form .submit input').then(function () {
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
        if (!bodyEle.classList.contains('spz-1005-demo')) {
            clearInterval(bodyInterval);
            bodyEle.classList.add('spz-1005-demo');
            waitForElm('.blocks-page iframe').then(function () {
                setTimeout(() => {
                    var iframeSrc = document.querySelector('.blocks-page iframe').src;
                    if (iframeSrc.includes('?')) {
                        document.querySelector('.blocks-page iframe').src = iframeSrc + '&spz=1005';
                    } else {
                        document.querySelector('.blocks-page iframe').src = iframeSrc + '?spz=1005';
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
if (location.href.indexOf('spz=1005') > -1) {
    formPage();
}

function mainPage() {
    var bodyEle = document.querySelector('body');
    if (bodyEle) {
        //home page
        if (window.location.pathname === "/") {
            bodyEle.classList.add('spz-1005');
            bodyEle.classList.add('spz-home');
            //hidden value
            cookieValue('#1005', '#1005_variant1');

            waitForElm('#content #blocks-page .hero-generic .container > div > div:first-child .my-6 a').then(function () {
                addHorizontalAccordion(
                    template_sectionContent, //object with the data
                    template_position, //any value you pass using insertAdjacentHTML
                    template_sectionSelector
                );
            });
        }
    }
}

// function to wait and find elements
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) { return resolve(document.querySelector(selector)); }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector)); observer.disconnect();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
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

function delete_cookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=maxio.com;';
}

