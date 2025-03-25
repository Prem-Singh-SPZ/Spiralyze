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
            CTAText: `Take a tour <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7046 4L20 11.2933L20 12.707L12.7049 20L11.2907 18.5862L15.8787 13.9995L14.8787 12.9998L4 12.9998L4 11.0004L14.8787 11.0004L15.8787 10.0007L11.2904 5.41379L12.7046 4Z" fill="#0042FF"/>
                    </svg>`,
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
				    	${content.accordionItems.map((item, index) => {
        return `
				    		<div class="content ac_card_${index}">
						        <div class="spz-features-accordion__item">
						          <span>${item.title}</span>
						          <div class="progress_bar"></div>
						        </div>
						        <div class="solution__image">
                                    <picture>
                                        ${item.image.map(image => `<source media="(min-width:${image.breakPoint}px)" srcset="${image.url}" />`).join("")}
                                        <img src="${item.image[0].url}" alt="${item.title}" title="${item.title}" />
                                    </picture>
						        </div>
						        <div class="solution__content">
						        	${item.content}
						        </div>
						      </div>
				    		`
    }).join("")
        }
				    </div>
				  </div>
				</div>
                ${content.CTABlock.length !== 0
            ? `<div class="spz-ctas-wrap separate-block">
                         ${content.CTABlock.map(item => `<a href=${item.CTAHref} class="${item.className} spz_tracking_1005">${item.CTAText}</a>`).join('')}
                        </div>`
            : ""
        }
			</div>
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
    let accordionPaused = false; // New flag to track pause state

    // Initialize Accordion active item 
    accordionContents.children[currenctActive].classList.add('active');
    //check if .spz-features-accordion is in view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!accordionPaused) {
                    autoSlide = true;
                }
            }
            else {
                autoSlide = false;
            }
        });
    }
        , { rootMargin: "0px 0px -50% 0px" });
    observer.observe(document.querySelector('.spz-features-accordion'));


    // Add event listeners to accordion navigation items for hover functionality
    Array.from(accordionContents.children).forEach((item, index) => {
        item.querySelector('.spz-features-accordion__item').addEventListener('click', (e) => {
            e.preventDefault();
            accordionPaused = true; // Pause the accordion
            autoSlide = false;
            if (currenctActive !== index) {
                changeAccordionActiveItem(index);
            }
        });
        item.addEventListener('mouseenter', (e) => {
            e.preventDefault();
            // if (currenctActive === index) {
            autoSlide = false;
            // }
        });
        item.addEventListener('mouseleave', (e) => {
            e.preventDefault();
            // if (currenctActive === index) {
            if (!accordionPaused) {
                autoSlide = true;
            }
            // }
        });
    });


    // Running Interval
    const autoSlideInterval = setInterval(function () {
        if (!autoSlide || accordionPaused) return;
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


/**
 * Code of Maxio 1002 Starts from Here
 */
//DEV 2/5. Find the class or ID of the control hero section and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
const template_heroSelector1 = `.hero-generic`;
//DEV 3/5. Choose where you redesigned hero section should appear accroding to control hero section row #4
const template_position1 = "afterend"; //"beforebegin", "beforeend", "afterend"
//DEV 4/5. Fill hero content object values. See comments inside for details
const template_heroContent1 = {
    //[1] Hero eyebrow https://share.cleanshot.com/F7hVvW3B
    contentSuperHeading: "Billing and Financial Reporting Software",
    //[2] TrustBadge https://share.cleanshot.com/z57hpqZD
    trustBadge: [],
    //[3] Hero heading https://share.cleanshot.com/phmyLc70
    contentHeading: "Grow Revenue 14% by Optimizing <br>Subscription Management",
    //[4] Hero subheading https://share.cleanshot.com/QcDrCXGs
    contentSubHeading: "",
    //[5] Tiles section
    tiles: {
        // Tiles section heading
        tilesHeading: `Which solution(s) are you interested in?`,
        tilesItems: [
            {
                tileImageURL: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<g opacity="0.7" clip-path="url(#clip0_24421_4336)">
						<path d="M12.2263 16.9626C12.8768 16.9626 13.4607 16.8003 13.978 16.4757C14.4951 16.1513 14.7537 15.6309 14.7537 14.9143C14.7537 14.3179 14.5314 13.8429 14.0869 13.4891C13.6421 13.1352 12.8124 12.7355 11.5977 12.29C10.4227 11.8681 9.57505 11.3956 9.05486 10.8726C8.53467 10.3495 8.27457 9.65867 8.27457 8.8C8.27457 8.06305 8.54057 7.38829 9.07257 6.77572C9.60438 6.16333 10.3479 5.77286 11.3031 5.60429V5C11.3031 4.792 11.3812 4.61 11.5374 4.454C11.6934 4.29781 11.8754 4.21971 12.0834 4.21971C12.2914 4.21971 12.4734 4.29781 12.6294 4.454C12.7856 4.61 12.8637 4.792 12.8637 5V5.60429C13.4014 5.64238 13.9018 5.81714 14.3649 6.12857C14.8277 6.44 15.2057 6.82648 15.4989 7.288C15.6029 7.4461 15.6124 7.61495 15.5274 7.79457C15.4425 7.974 15.2996 8.10038 15.0989 8.17372C14.9099 8.24686 14.719 8.25638 14.5263 8.20229C14.3337 8.148 14.1758 8.0381 14.0526 7.87257C13.833 7.60724 13.5637 7.39219 13.2449 7.22743C12.9262 7.06267 12.5486 6.98029 12.112 6.98029C11.4013 6.98029 10.8442 7.14876 10.4406 7.48571C10.037 7.82267 9.83514 8.26076 9.83514 8.8C9.83514 9.33924 10.0322 9.75905 10.4263 10.0594C10.8204 10.3598 11.6182 10.7151 12.8197 11.1254C14.1911 11.6207 15.1128 12.1759 15.5846 12.7911C16.0564 13.4066 16.2923 14.1143 16.2923 14.9143C16.2923 15.4594 16.1915 15.9378 15.99 16.3494C15.7885 16.7612 15.5251 17.1074 15.2 17.388C14.8747 17.6686 14.5043 17.8902 14.0889 18.0529C13.6734 18.2153 13.246 18.3296 12.8066 18.3957V19C12.8066 19.208 12.7285 19.39 12.5723 19.546C12.4163 19.7022 12.2343 19.7803 12.0263 19.7803C11.8183 19.7803 11.6363 19.7022 11.4803 19.546C11.3241 19.39 11.246 19.208 11.246 19V18.3386C10.5443 18.1862 9.93629 17.9132 9.422 17.5197C8.90771 17.1264 8.49086 16.6132 8.17143 15.9803C8.07905 15.7795 8.07829 15.581 8.16914 15.3846C8.26 15.1882 8.40581 15.0534 8.60657 14.9803C8.79552 14.907 8.98819 14.908 9.18457 14.9834C9.38095 15.059 9.53114 15.1854 9.63514 15.3626C9.93114 15.8871 10.3022 16.285 10.7483 16.556C11.1944 16.827 11.687 16.9626 12.2263 16.9626ZM12.0549 24C9.82628 24 7.8039 23.4483 5.98771 22.3449C4.17171 21.2416 2.74724 19.7632 1.71429 17.9097V20.4614C1.71429 20.7047 1.63219 20.9084 1.468 21.0726C1.304 21.2366 1.10038 21.3186 0.857143 21.3186C0.613905 21.3186 0.41019 21.2366 0.246 21.0726C0.082 20.9084 0 20.7047 0 20.4614V16.066C0 15.7713 0.0984761 15.5255 0.295428 15.3286C0.492571 15.1314 0.738381 15.0329 1.03286 15.0329H5.42857C5.67181 15.0329 5.87543 15.115 6.03943 15.2791C6.20362 15.4431 6.28571 15.6468 6.28571 15.89C6.28571 16.1332 6.20362 16.337 6.03943 16.5011C5.87543 16.6651 5.67181 16.7471 5.42857 16.7471H3.03943C3.86571 18.4117 5.08695 19.751 6.70314 20.7649C8.31933 21.7788 10.1032 22.2857 12.0549 22.2857C14.7112 22.2857 17.0043 21.4088 18.934 19.6549C20.8637 17.9011 21.9766 15.7122 22.2726 13.088C22.3032 12.8491 22.4035 12.6557 22.5734 12.5077C22.7435 12.3597 22.9479 12.2857 23.1866 12.2857C23.4298 12.2857 23.6346 12.3674 23.8009 12.5309C23.9671 12.6941 24.035 12.8893 24.0043 13.1166C23.8635 14.6476 23.4554 16.0729 22.78 17.3923C22.1046 18.7117 21.2325 19.8611 20.1637 20.8406C19.0948 21.82 17.8684 22.5914 16.4846 23.1549C15.1006 23.7183 13.624 24 12.0549 24ZM12.0549 1.71429C9.44248 1.71429 7.16229 2.57838 5.21429 4.30657C3.26629 6.03476 2.14057 8.23295 1.83714 10.9011C1.80648 11.14 1.70619 11.3352 1.53629 11.4869C1.36619 11.6385 1.16181 11.7143 0.923143 11.7143C0.672476 11.7143 0.46581 11.6326 0.303143 11.4691C0.140667 11.3059 0.0747619 11.107 0.105429 10.8726C0.260667 9.31219 0.681524 7.87038 1.368 6.54714C2.05448 5.2241 2.93219 4.07838 4.00114 3.11C5.0699 2.14143 6.29257 1.38095 7.66914 0.828571C9.04571 0.27619 10.5076 0 12.0549 0C14.2615 0 16.2839 0.553524 18.122 1.66057C19.9601 2.76743 21.3846 4.25867 22.3954 6.13429V3.53857C22.3954 3.29533 22.4775 3.09162 22.6417 2.92743C22.8057 2.76343 23.0093 2.68143 23.2526 2.68143C23.4958 2.68143 23.6995 2.76343 23.8637 2.92743C24.0277 3.09162 24.1097 3.29533 24.1097 3.53857V7.934C24.1097 8.22867 24.0112 8.47448 23.8143 8.67143C23.6171 8.86857 23.3713 8.96714 23.0769 8.96714H18.6811C18.4379 8.96714 18.2343 8.88505 18.0703 8.72086C17.9061 8.55686 17.824 8.35324 17.824 8.11C17.824 7.86676 17.9061 7.66305 18.0703 7.49886C18.2343 7.33486 18.4379 7.25286 18.6811 7.25286H21.0703C20.2659 5.61762 19.0538 4.28571 17.434 3.25714C15.8142 2.22857 14.0211 1.71429 12.0549 1.71429Z" fill="white"></path>
					</g>
					<defs>
						<clipPath id="clip0_24421_4336">
							<rect width="24" height="24" fill="white"></rect>
						</clipPath>
					</defs>
				</svg>`,
                tileHeading: `Usage-based <br>billing`,
                tileValue: `billing`,
                tileDescription: ``,
            },
            {
                tileImageURL: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<g opacity="0.7">
						<path d="M8 2V6M16 2V6M3 10H21M9 16L11 18L15 14M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
					</g>
				</svg>`,
                tileHeading: `Subscription <br>management`,
                tileValue: `subscription`,
                tileDescription: ``,
            },
            {
                tileImageURL: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<g opacity="0.7">
						<path d="M4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V8M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20M3 15L5 17L9 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
					</g>
				</svg>`,
                imageAlt: `Metrics reporting`,
                tileHeading: `Metrics <br>reporting`,
                tileValue: `reporting`,
                tileDescription: ``,
            },
            {
                tileImageURL: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
					<path opacity="0.7" d="M2.12676 20C1.53245 20 1.02941 19.7941 0.617647 19.3824C0.205882 18.9706 0 18.4676 0 17.8732V2.12676C0 1.53245 0.205882 1.02941 0.617647 0.617647C1.02941 0.205882 1.53245 0 2.12676 0H17.8732C18.4676 0 18.9706 0.205882 19.3824 0.617647C19.7941 1.02941 20 1.53245 20 2.12676V17.8732C20 18.4676 19.7941 18.9706 19.3824 19.3824C18.9706 19.7941 18.4676 20 17.8732 20H2.12676ZM9.11765 13.1788H1.76471V17.8732C1.76471 17.9789 1.79863 18.0657 1.86647 18.1335C1.93431 18.2014 2.02108 18.2353 2.12676 18.2353H9.11765V13.1788ZM10.8824 13.1788V18.2353H17.8732C17.9789 18.2353 18.0657 18.2014 18.1335 18.1335C18.2014 18.0657 18.2353 17.9789 18.2353 17.8732V13.1788H10.8824ZM9.11765 11.4141V6.33471H1.76471V11.4141H9.11765ZM10.8824 11.4141H18.2353V6.33471H10.8824V11.4141ZM1.76471 4.57029H18.2353V2.12676C18.2353 2.02108 18.2014 1.93431 18.1335 1.86647C18.0657 1.79863 17.9789 1.76471 17.8732 1.76471H2.12676C2.02108 1.76471 1.93431 1.79863 1.86647 1.86647C1.79863 1.93431 1.76471 2.02108 1.76471 2.12676V4.57029Z" fill="white"></path>
				</svg>`,
                tileHeading: `Revenue <br>recognition`,
                tileValue: `revrec`,
                tileDescription: ``,
            },
            {
                tileImageURL: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<g opacity="0.7">
						<path d="M9 12L11 14L15 10M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0203 11.67 21.94C7.5 20.5 4 18 4 13V6.00001C4 5.73479 4.10536 5.48044 4.29289 5.2929C4.48043 5.10536 4.73478 5.00001 5 5.00001C7 5.00001 9.5 3.80001 11.24 2.28001C11.4519 2.09901 11.7214 1.99956 12 1.99956C12.2786 1.99956 12.5481 2.09901 12.76 2.28001C14.51 3.81001 17 5.00001 19 5.00001C19.2652 5.00001 19.5196 5.10536 19.7071 5.2929C19.8946 5.48044 20 5.73479 20 6.00001V13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
					</g>
				</svg>`,
                tileHeading: `Collections`,
                tileValue: `collections`,
                tileDescription: ``,
            },
            {
                tileImageURL: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<g opacity="0.7">
						<path d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21M7 16C7.5 14 8.5 9 11 9C13 9 13 12 15 12C17.5 12 19.5 7 20 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
					</g>
				</svg>`,
                tileHeading: `Pricing <br>strategy`,
                tileValue: `pricing`,
                tileDescription: ``,
            },
        ],
    },
    //[6] Hero CTA
    heroCTA: {
        CTAText: "Get a Demo",
        CTAHref: "/demo",
    },
};
const template_additionalSection1 = {
    //[7] Interface image after the hero section https://share.cleanshot.com/SR5ZgNQ1
    interfaceImage: [
        {
            breakPoint: 1024,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1002/image_ui.png",
        },
        {
            breakPoint: 768,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1002/frame_1171275873.webp",
        },
        {
            breakPoint: 320,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1002/frame_1171275874.webp",
        },
    ],
    //[8] Social proof logos with heading after interface image https://share.cleanshot.com/7VMjQr0J
    socialProofLogos: {
        socialProofHeading: "",
        socialProofImages: [
            {
                breakPoint: 1024,
                url: "//res.cloudinary.com/spiralyze/image/upload/v1733329565/maxio/1002/logotypesvector.svg",
            },
            {
                breakPoint: 768,
                url: "//res.cloudinary.com/spiralyze/image/upload/v1733329580/maxio/1002/logotypesvector_1.svg",
            },
            {
                breakPoint: 320,
                url: "//res.cloudinary.com/spiralyze/image/upload/v1733336804/maxio/1002/logosvector.svg",
            },
        ],
    },
};

/***********************************
************************************
DO NOT TOUCH
BEYOND THIS LINE
******************************
************************/
function addHero(formData, whereToPut, template_heroSelector1, template_additionalSection1) {
    const formTemplate = `
		<div class="spz-hero-wrap">
			  <div class="content-section">
	            ${formData.contentSuperHeading.replace(/\s/g, "").length !== 0
            ? `<div class="content-superheading"><p>${formData.contentSuperHeading}</p></div>`
            : ""
        }
	            ${formData.trustBadge.length !== 0
            ? `<div class="trust-badge">
	            	<picture>
		              ${formData.trustBadge
                .map(
                    (item) =>
                        `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`
                )
                .join("")}
		              <img src="${formData.trustBadge[0].url}" alt="trust badge" />
		            </picture>
	            </div>`
            : ""
        }
	            ${formData.contentHeading.replace(/\s/g, "").length !== 0
            ? `<h1 class="content-heading">${formData.contentHeading}</h1>`
            : ""
        }
	            ${formData.contentSubHeading.replace(/\s/g, "").length !== 0
            ? `<div class="content-subheading">${formData.contentSubHeading}</div>`
            : ""
        }
	          </div>
	          ${formData.tiles.length !== 0
            ? `<div class="tiles-wrap">
	            			<div class="tiles-heading">${formData.tiles.tilesHeading}</div>
	            			<div class="tiles-items">
	            				${formData.tiles.tilesItems
                .map((item) => {
                    return `<div class="tile-item">
										<div class="tile-image">
										${item.tileImageURL}
										</div>
	            						<div class="wrap-tile-info">
		            						<div class="tile-heading" value="${item.tileValue}">${item.tileHeading}</div>
		            						<div class="tile-description">${item.tileDescription}</div>
		            					</div>
	            					</div>`;
                })
                .join("")}
	            			</div>
	            		</div>`
            : ``
        }
	            ${typeof formData.heroCTA !== "undefined"
            ? `
			<div class="spz-email">
						 <div class="form-group-wrapper">
                                <div class="form-group-spz">
                                    <input type="email" name="email" class="form-field-spz email-hero-spz" placeholder=" " />
                                    <label class="form-label-spz">Business Email</label>
                                </div>
                                <a href="${formData.heroCTA.CTAHref}" id="hero-copy-url" class="hero-btn redirect-to-demo spz_tracking_1005">
                                    <span>${formData.heroCTA.CTAText}</span> 
                                </a>
                        </div>
					</div>`
            : ""
        }
	        ${typeof template_additionalSection1.interfaceImage !== "undefined"
            ? `<div class="interface-image-wrap">
	        	<picture>
	        		${template_additionalSection1.interfaceImage
                .map(
                    (item) =>
                        `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`
                )
                .join("")}
	        		<img src="${template_additionalSection1.interfaceImage[0].url
            }" alt="UI Image" title="UI Image" />
	        	</picture>
	        </div>
	        `
            : ``
        }</div>
	        ${typeof template_additionalSection1.socialProofLogos !== "undefined"
            ? `<div class="social-proof-logos"><div class="sp-container">
	        	<div class="social-proof-heading">${template_additionalSection1.socialProofLogos.socialProofHeading
            }</div>
	        	<picture>
	        		${template_additionalSection1.socialProofLogos.socialProofImages
                .map(
                    (item) =>
                        `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`
                )
                .join("")}
	        		<img src="${template_additionalSection1.socialProofLogos.socialProofImages[0].url
            }" alt="Social Proof" />
	        	</picture>
	        </div>
	        </div>
	        `
            : ``
        }
	  `;
    document
        .querySelector(template_heroSelector1)
        .insertAdjacentHTML(whereToPut, formTemplate);
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

                addHero(
                    template_heroContent1, //object with the data
                    template_position1, //any value you pass using insertAdjacentHTML
                    template_heroSelector1,
                    template_additionalSection1
                );

                //if user is focused on .form-field-spz and press enter, then click on .redirect-to-demo
                document.querySelector('.form-field-spz').addEventListener('keypress', function (e) {
                    if (e.key === 'Enter') {
                        document.querySelector('.redirect-to-demo').click();
                    }
                });

                //on click of .redirect-to-demo store whatever value is in the input field in cookie 
                document.querySelector('.redirect-to-demo').addEventListener('click', function () {
                    var emailValue = document.querySelector('.email-hero-spz').value;
                    // store this value in session storage
                    // sessionStorage.setItem('emailValue', emailValue);
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

    // added this code from Maxio 1002
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

function delete_cookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=maxio.com;';
}

/*------Maxio 1003 template start--------*/

var url_1003 = location.href;
urlCheck_1003(url_1003);

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
    url_1003 = location.href;
    urlCheck_1003(url_1003);
});

function urlCheck_1003(url_1003) {
    var allblogsurlstring = "https://www.maxio.com";
    if (window.location.host === 'www.maxio.com' && window.location.pathname === '/') { // Add " / " to run on all urls
        allblogsurlstring = window.location.href;
    }
    if (isSameUrl(url_1003, allblogsurlstring, true)) {
        //console.log('target page found');

        var findBody = setInterval(function () {
            const body = document.querySelector("body");
            if (body) {
                clearInterval(findBody);

                // start test
                load_variant_1003();
                //load_iframe();
            }
        });
    } else {
        //console.log('target page not found');
        /*------remove test ---------*/
        if (document.body.classList.contains('spz-1005')) {
            document.querySelector("body").classList.remove("spz-1005");
            document.body.classList.add('spz-1005-other');
        }
    }
}

function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#") ?
        currentUrl.slice(0, currentUrl.indexOf("#")) :
        currentUrl;
    specifiedUrl = specifiedUrl.includes("#") ?
        specifiedUrl.slice(0, specifiedUrl.indexOf("#")) :
        specifiedUrl;
    if (!includeQueryParams)
        currentUrl = currentUrl.includes("?") ?
            currentUrl.slice(0, currentUrl.indexOf("?")) :
            currentUrl;
    if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
        return true;
    return false;
}

// init variant function
function load_variant_1003() {
    const config = {
        default_class: 'spz-1005',
    };

    const bodyEle = document.querySelector('body');
    if (bodyEle) {
        //home page
        if (window.location.pathname === "/") {
            if (!bodyEle.classList.contains(config.default_class)) {
                bodyEle.classList.add(config.default_class);
            }

            // look for '.entry-content' div (updated selector from .spz-1003 main#blocks-page > section:nth-child(2) because of Maxio 1002 code conflict)
            waitForElm('.spz-1005 main#blocks-page > section:nth-of-type(2)').then((elm) => {
                addReviewRibbon(sliderSettings, socialProof, slides, placement, sectionSelector);
            });
        }
    }
}

//DEV 1/7. Put your asana task URL here (Changed variable name because of Maxio 1002 code conflict)
const asana_URL_1003 = `https://app.asana.com/0/1208736341602818/1208672029652654/f`
//DEV 2/7. Set splide slider settings.
const sliderSettings = {
    type: 'loop',
    fixedWidth: '694px',
    start: 0,
    perPage: 2,
    perMove: 1,
    flickMaxPages: 1,
    flickPower: 30,
    rewindByDrag: false,
    rewind: false,
    speed: 2000,
    autoplay: true,
    interval: 5000,
    arrows: false,
    pagination: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    breakpoints: {
        1535: {
            fixedWidth: '606px',
        },
        1279: {
            fixedWidth: '478px',
        },
        1023: {
            fixedWidth: '350px',
        },
        767: {
            fixedWidth: '312px',
            perPage: 1,
        },
    },
};
//DEV STEP 3/7. Left part of the slider (logo, stars, & rating) -> https://share.cleanshot.com/JGjTBv1D
const socialProof = [];
//DEV STEP 4/7. Right part of slider (reviews star rating & text) -> https://share.cleanshot.com/xpv7B36J
const slides = [
    {
        growthStatValue: '250%',
        growthStatText: 'Growth in ARR',
        growthStatValue_2: '5',
        growthStatText_2: 'Days to close',
        reviewCopy: 'We’ve been able to automate billings and subscription renewals. We close revenue in 5 days. And it provides us with SaaS-based metrics at a push of a button.',
        authorPic: '<img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1003/avatar_8.webp" alt="Antonietta Ciccone" class="spz-testimonial__author__photo">',
        authorName: 'Antonietta Ciccone',
        authorDesignation: 'Dir. Corp. Revenue Accounting',
        companyLogo: '<img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1003/extensiv_logo_1.webp" alt="Extensiv Logo" class="spz-testimonial__company__logo" />',
    },
    {
        growthStatValue: '50%',
        growthStatText: 'Invoicing processes automated',
        reviewCopy: 'Maxio is basically a Senior Accountant running our complex billing. If you want to continue to grow, there’s no better software.',
        authorPic: '<img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1003/avatar_10.webp" alt="Trevor Swim" class="spz-testimonial__author__photo">',
        authorName: 'Trevor Swim',
        authorDesignation: 'Director of Finance',
        companyLogo: '<img src="https://res.cloudinary.com/spiralyze/image/upload/v1734507107/maxio/1003/ninjacat_logo_1.svg" alt="Ninjacat Logo" class="spz-testimonial__company__logo" />',
    },
    {
        growthStatValue: '3+',
        growthStatText: 'hours saved per closed deal',
        reviewCopy: 'Instantly helpful. Incredible ease of access. Everything’s there and you’re confident in the numbers. Turns anything you’re doing in Excel into one simple application.',
        authorPic: '<img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1003/avatar_7.webp" alt="Taylor McPherson" class="spz-testimonial__author__photo">',
        authorName: 'Taylor McPherson',
        authorDesignation: 'Former Business Operations Specialist',
        companyLogo: '<img src="https://res.cloudinary.com/spiralyze/image/upload/v1734507107/maxio/1003/adeptia_logo.svg" alt="Adeptia Logo" class="spz-testimonial__company__logo" />',
    },
    {
        growthStatValue: '90%',
        growthStatText: 'less time spent on AR reporting',
        reviewCopy: 'It’s become the single source of truth for all of our AR reporting. AR used to be complex for us in the past. Maxio has made it very, very easy. ',
        authorPic: '<img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1003/avatar_9.webp" alt="Jean-Thomas Cock" class="spz-testimonial__author__photo">',
        authorName: 'Jean-Thomas Cock',
        authorDesignation: 'Head of Finance',
        companyLogo: '<img src="https://res.cloudinary.com/spiralyze/image/upload/v1734507108/maxio/1003/parcellab_logo_1.svg" alt="ParcelLab Logo" class="spz-testimonial__company__logo" />',
    },
];
//DEV 5/7. Set unique selector of target setion where you want review ribbon to appear (updated selector from .spz-1005 main#blocks-page > section:nth-child(2) because of Maxio 1002 code conflict)
const sectionSelector = `.spz-1005 main#blocks-page > section:nth-of-type(2)`

//DEV 6/7. Choose where reviews ribbon should appear.  Set "before" or "after".
const placement = 'before'

//DEV 7/7. Delete before pushing code to A/B testing platform. It's only needed for internal purposes. 
// removed code template tracking code


/***********************************
************************************
DO NOT TOUCH
BEYOND THIS LINE
******************************
************************/
var splideScript = document.createElement('script');
splideScript.src =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
var splideStyle = document.createElement('link');
splideStyle.rel = 'stylesheet';
splideStyle.type = 'text/css';
splideStyle.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
function insertBefore(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode);
}
function addReviewRibbon(
    sliderSettings,
    socialProof,
    slides,
    whereToAdd,
    selector
) {
    var reviewRibbon = document.createElement('section');
    reviewRibbon.classList.add('section', 'theme-black', 'overflow-hidden', 'bg-cover', 'bg-bottom', 'spz-review-ribbon');
    reviewRibbon.innerHTML = `
        <div class="spz-testimonials">
            <div class="container spz-review-container">
                <div class="spz-testimonials__wrapper">
                    <div class="splide" role="group">
                        <div class="splide__track">
                            <div class="splide__list">
                                ${slides.map((slide) => {
        return `
                                        <div class="splide__slide">
                                            <div class="spz-testimonial">
                                                <div class="spz-testimonial__results">
                                                    <p class="spz-testimonial__result">
                                                        ${slide.growthStatValue.replace(/\s/g, '').length !== 0 ? `<strong class="spz-testimonial__result__value">${slide.growthStatValue}</strong>` : ``}
                                                        ${slide.growthStatText.replace(/\s/g, '').length !== 0 ? `<span class="spz-testimonial__result__text">${slide.growthStatText}</span>` : ``}
                                                    </p>
                                                    ${slide.growthStatValue_2 ? `
                                                        <p class="spz-testimonial__result">
                                                            ${slide.growthStatValue_2.replace(/\s/g, '').length !== 0 ? `<strong class="spz-testimonial__result__value">${slide.growthStatValue_2}</strong>` : ``}
                                                            ${slide.growthStatText_2.replace(/\s/g, '').length !== 0 ? `<span class="spz-testimonial__result__text">${slide.growthStatText_2}</span>` : ``}
                                                        </p>
                                                    ` : ''}
                                                </div>
                                                <p class="spz-testimonial__text">
                                                    ${slide.reviewCopy.replace(/\s/g, '').length !== 0 ? `${slide.reviewCopy}` : ``}
                                                </p>
                                                <div class="spz-testimonial__footer">
                                                    <div class="spz-testimonial__author">
                                                        ${slide.authorPic.replace(/\s/g, '').length !== 0 ? `${slide.authorPic}` : ``}
                                                        <div class="spz-testimonial__author__details">
                                                            <p class="spz-testimonial__author__name">
                                                                ${slide.authorName.replace(/\s/g, '').length !== 0 ? `${slide.authorName}` : ``}
                                                            </p>
                                                            <p class="spz-testimonial__author__designation">
                                                                ${slide.authorDesignation.replace(/\s/g, '').length !== 0 ? `${slide.authorDesignation}` : ``}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="spz-testimonial__company">
                                                        ${slide.companyLogo.replace(/\s/g, '').length !== 0 ? `${slide.companyLogo}` : ``}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    `;
    }).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	`;
    if (whereToAdd === 'after') insertAfter(reviewRibbon, document.querySelector(selector));
    if (whereToAdd === 'before') insertBefore(reviewRibbon, document.querySelector(selector));

    document.body.appendChild(splideScript);
    document.body.appendChild(splideStyle);
    splideScript.onload = function () {
        waitForElm('.spz-testimonials .splide').then(function () {
            var observer2 = new IntersectionObserver(onIntersection, {
                root: null,   // default is the viewport
                threshold: .5 // percentage of target's visible area. Triggers "onIntersection"
            })
            // Intersection Observer to detect when the slider section comes into view
            observer2.observe(document.querySelector('.spz-review-ribbon .splide'))
        }, 50);
    };
}

function stopSlider() {
    var splide = new Splide('.splide', sliderSettings); splide.mount();
    splide.Components.Autoplay.pause(99)
}
// Function to resume the slider
function resumeSlider() {
    var splide = new Splide('.splide', sliderSettings); splide.mount();
    splide.Components.Autoplay.play();
}
// Add event listeners to navigation arrows
document.querySelectorAll('.spz-review-ribbon .splide__pagination__page').forEach(arrow => {
    arrow.addEventListener('click', stopSlider);
});
// Add event listeners to testimonial cards
document.querySelectorAll('.spz-review-ribbon .splide__slide').forEach(slide => {
    slide.addEventListener('click', stopSlider);
});

// callback is called on intersection change
function onIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let eplideEle = document.querySelector(".splide");
            let isSplideInitialized = eplideEle.classList.contains("is-initialized");
            if (!isSplideInitialized) {
                var splide = new Splide('.splide', sliderSettings);
                splide.mount();
                splide.Components.Autoplay.play(99)
            }
        } else { }
    })
}
/*------Maxio 1003 template end----------*/

