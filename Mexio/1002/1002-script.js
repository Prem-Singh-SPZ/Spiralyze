//DEV 1/5. Put your asana task URL here
const asana_URL = `https://app.asana.com/0/1202434538289854/1208642778589288/f`;
//DEV 2/5. Find the class or ID of the control hero section and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
const template_heroSelector = `.hero-generic`;
//DEV 3/5. Choose where you redesigned hero section should appear accroding to control hero section row #4
const template_position = "afterend"; //"beforebegin", "beforeend", "afterend"
//DEV 4/5. Fill hero content object values. See comments inside for details
const template_heroContent = {
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
		tilesHeading: `How can we help?`,
		tilesItems: [
			{
				tileImageURL: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g opacity="0.7" clip-path="url(#clip0_24192_2701)">
    <path d="M11.6716 16.9626C12.3221 16.9626 12.906 16.8003 13.4233 16.4757C13.9405 16.1513 14.199 15.6309 14.199 14.9143C14.199 14.3179 13.9767 13.8429 13.5322 13.4891C13.0874 13.1352 12.2577 12.7355 11.043 12.29C9.86798 11.8681 9.02036 11.3956 8.50017 10.8726C7.97998 10.3495 7.71988 9.65867 7.71988 8.8C7.71988 8.06305 7.98588 7.38829 8.51788 6.77572C9.04969 6.16333 9.79322 5.77286 10.7485 5.60429V5C10.7485 4.792 10.8266 4.61 10.9827 4.454C11.1387 4.29781 11.3207 4.21971 11.5287 4.21971C11.7367 4.21971 11.9187 4.29781 12.0747 4.454C12.2309 4.61 12.309 4.792 12.309 5V5.60429C12.8467 5.64238 13.3471 5.81714 13.8102 6.12857C14.273 6.44 14.651 6.82648 14.9442 7.288C15.0482 7.4461 15.0577 7.61495 14.9727 7.79457C14.8878 7.974 14.7449 8.10038 14.5442 8.17372C14.3552 8.24686 14.1644 8.25638 13.9716 8.20229C13.779 8.148 13.6211 8.0381 13.4979 7.87257C13.2783 7.60724 13.009 7.39219 12.6902 7.22743C12.3715 7.06267 11.9939 6.98029 11.5573 6.98029C10.8466 6.98029 10.2895 7.14876 9.88588 7.48571C9.48226 7.82267 9.28045 8.26076 9.28045 8.8C9.28045 9.33924 9.4775 9.75905 9.8716 10.0594C10.2657 10.3598 11.0635 10.7151 12.265 11.1254C13.6365 11.6207 14.5581 12.1759 15.0299 12.7911C15.5017 13.4066 15.7376 14.1143 15.7376 14.9143C15.7376 15.4594 15.6368 15.9378 15.4353 16.3494C15.2338 16.7612 14.9705 17.1074 14.6453 17.388C14.32 17.6686 13.9496 17.8902 13.5342 18.0529C13.1187 18.2153 12.6913 18.3296 12.2519 18.3957V19C12.2519 19.208 12.1738 19.39 12.0176 19.546C11.8616 19.7022 11.6796 19.7803 11.4716 19.7803C11.2636 19.7803 11.0816 19.7022 10.9256 19.546C10.7694 19.39 10.6913 19.208 10.6913 19V18.3386C9.9896 18.1862 9.3816 17.9132 8.86731 17.5197C8.35303 17.1264 7.93617 16.6132 7.61674 15.9803C7.52436 15.7795 7.5236 15.581 7.61445 15.3846C7.70531 15.1882 7.85112 15.0534 8.05188 14.9803C8.24084 14.907 8.4335 14.908 8.62988 14.9834C8.82627 15.059 8.97645 15.1854 9.08045 15.3626C9.37645 15.8871 9.7475 16.285 10.1936 16.556C10.6397 16.827 11.1324 16.9626 11.6716 16.9626ZM11.5002 24C9.2716 24 7.24922 23.4483 5.43303 22.3449C3.61703 21.2416 2.19255 19.7632 1.1596 17.9097V20.4614C1.1596 20.7047 1.0775 20.9084 0.913312 21.0726C0.749312 21.2366 0.545693 21.3186 0.302455 21.3186C0.0592172 21.3186 -0.144497 21.2366 -0.308687 21.0726C-0.472687 20.9084 -0.554688 20.7047 -0.554688 20.4614V16.066C-0.554688 15.7713 -0.456211 15.5255 -0.259259 15.3286C-0.0621162 15.1314 0.183693 15.0329 0.47817 15.0329H4.87388C5.11712 15.0329 5.32074 15.115 5.48474 15.2791C5.64893 15.4431 5.73103 15.6468 5.73103 15.89C5.73103 16.1332 5.64893 16.337 5.48474 16.5011C5.32074 16.6651 5.11712 16.7471 4.87388 16.7471H2.48474C3.31103 18.4117 4.53226 19.751 6.14846 20.7649C7.76465 21.7788 9.54855 22.2857 11.5002 22.2857C14.1565 22.2857 16.4496 21.4088 18.3793 19.6549C20.309 17.9011 21.4219 15.7122 21.7179 13.088C21.7486 12.8491 21.8488 12.6557 22.0187 12.5077C22.1888 12.3597 22.3932 12.2857 22.6319 12.2857C22.8751 12.2857 23.0799 12.3674 23.2462 12.5309C23.4125 12.6941 23.4803 12.8893 23.4496 13.1166C23.3088 14.6476 22.9007 16.0729 22.2253 17.3923C21.5499 18.7117 20.6778 19.8611 19.609 20.8406C18.5401 21.82 17.3137 22.5914 15.9299 23.1549C14.5459 23.7183 13.0693 24 11.5002 24ZM11.5002 1.71429C8.88779 1.71429 6.6076 2.57838 4.6596 4.30657C2.7116 6.03476 1.58588 8.23295 1.28246 10.9011C1.25179 11.14 1.1515 11.3352 0.981598 11.4869C0.811503 11.6385 0.607122 11.7143 0.368455 11.7143C0.117789 11.7143 -0.088878 11.6326 -0.251545 11.4691C-0.414021 11.3059 -0.479926 11.107 -0.449259 10.8726C-0.294021 9.31219 0.126836 7.87038 0.813312 6.54714C1.49979 5.2241 2.3775 4.07838 3.44646 3.11C4.51522 2.14143 5.73788 1.38095 7.11445 0.828571C8.49103 0.27619 9.95293 0 11.5002 0C13.7068 0 15.7292 0.553524 17.5673 1.66057C19.4054 2.76743 20.8299 4.25867 21.8407 6.13429V3.53857C21.8407 3.29533 21.9228 3.09162 22.087 2.92743C22.251 2.76343 22.4546 2.68143 22.6979 2.68143C22.9411 2.68143 23.1448 2.76343 23.309 2.92743C23.473 3.09162 23.555 3.29533 23.555 3.53857V7.934C23.555 8.22867 23.4565 8.47448 23.2596 8.67143C23.0625 8.86857 22.8166 8.96714 22.5222 8.96714H18.1265C17.8832 8.96714 17.6796 8.88505 17.5156 8.72086C17.3514 8.55686 17.2693 8.35324 17.2693 8.11C17.2693 7.86676 17.3514 7.66305 17.5156 7.49886C17.6796 7.33486 17.8832 7.25286 18.1265 7.25286H20.5156C19.7112 5.61762 18.4991 4.28571 16.8793 3.25714C15.2595 2.22857 13.4665 1.71429 11.5002 1.71429Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_24192_2701">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>`,
				tileHeading: `Billing`,
				tileDescription: ``,
			},
			{
				tileImageURL: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g opacity="0.7">
    <path d="M8 2V6M16 2V6M3 10H21M9 16L11 18L15 14M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>`,
				tileHeading: `Subscription <br>management`,
				tileDescription: ``,
			},
			{
				tileImageURL: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g opacity="0.7">
    <path d="M4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V8M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20M3 15L5 17L9 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>`,
				imageAlt: `Financial reporting`,
				tileHeading: `Financial <br>reporting`,
				tileDescription: ``,
			},
			{
				tileImageURL: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path opacity="0.7" d="M2.12676 20C1.53245 20 1.02941 19.7941 0.617647 19.3824C0.205882 18.9706 0 18.4676 0 17.8732V2.12676C0 1.53245 0.205882 1.02941 0.617647 0.617647C1.02941 0.205882 1.53245 0 2.12676 0H17.8732C18.4676 0 18.9706 0.205882 19.3824 0.617647C19.7941 1.02941 20 1.53245 20 2.12676V17.8732C20 18.4676 19.7941 18.9706 19.3824 19.3824C18.9706 19.7941 18.4676 20 17.8732 20H2.12676ZM9.11765 13.1788H1.76471V17.8732C1.76471 17.9789 1.79863 18.0657 1.86647 18.1335C1.93431 18.2014 2.02108 18.2353 2.12676 18.2353H9.11765V13.1788ZM10.8824 13.1788V18.2353H17.8732C17.9789 18.2353 18.0657 18.2014 18.1335 18.1335C18.2014 18.0657 18.2353 17.9789 18.2353 17.8732V13.1788H10.8824ZM9.11765 11.4141V6.33471H1.76471V11.4141H9.11765ZM10.8824 11.4141H18.2353V6.33471H10.8824V11.4141ZM1.76471 4.57029H18.2353V2.12676C18.2353 2.02108 18.2014 1.93431 18.1335 1.86647C18.0657 1.79863 17.9789 1.76471 17.8732 1.76471H2.12676C2.02108 1.76471 1.93431 1.79863 1.86647 1.86647C1.79863 1.93431 1.76471 2.02108 1.76471 2.12676V4.57029Z" fill="white"/>
</svg>`,
				tileHeading: `Revenue <br>recognition`,
				tileDescription: ``,
			},
			{
				tileImageURL: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g opacity="0.7">
    <path d="M9 12L11 14L15 10M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0203 11.67 21.94C7.5 20.5 4 18 4 13V6.00001C4 5.73479 4.10536 5.48044 4.29289 5.2929C4.48043 5.10536 4.73478 5.00001 5 5.00001C7 5.00001 9.5 3.80001 11.24 2.28001C11.4519 2.09901 11.7214 1.99956 12 1.99956C12.2786 1.99956 12.5481 2.09901 12.76 2.28001C14.51 3.81001 17 5.00001 19 5.00001C19.2652 5.00001 19.5196 5.10536 19.7071 5.2929C19.8946 5.48044 20 5.73479 20 6.00001V13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>`,
				tileHeading: `Collections`,
				tileDescription: ``,
			},
			{
				tileImageURL: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g opacity="0.7">
    <path d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21M7 16C7.5 14 8.5 9 11 9C13 9 13 12 15 12C17.5 12 19.5 7 20 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>`,
				tileHeading: `Pricing <br>strategy`,
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
const template_additionalSection = {
	//[7] Interface image after the hero section https://share.cleanshot.com/SR5ZgNQ1
	interfaceImage: [
		{
			breakPoint: 1024,
			url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1002/image_ui.webp",
		},
		{
			breakPoint: 768,
			url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1002/image_ui.webp",
		},
		{
			breakPoint: 320,
			url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1002/image_ui.webp",
		},
	],
	//[8] Social proof logos with heading after interface image https://share.cleanshot.com/7VMjQr0J
	socialProofLogos: {
		socialProofHeading: "",
		socialProofImages: [
			{
				breakPoint: 1024,
				url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/baseline_socialproof-desktop.png",
			},
			{
				breakPoint: 768,
				url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/baseline_socialproof-tablet.png",
			},
			{
				breakPoint: 320,
				url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/baseline_socialproof-mobile.png",
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
function addHero(formData, whereToPut, template_heroSelector, template_additionalSection) {
	const formTemplate = `
		<div class="spz-bg-wrap">
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
		            						<div class="tile-heading">${item.tileHeading}</div>
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
                                    <label class="form-label-spz">Email</label>
                                </div>
                                <a href="${formData.heroCTA.CTAHref}" id="hero-copy-url" class="hero-btn redirect-to-demo spz_tracking_1002">
                                    <span>${formData.heroCTA.CTAText}</span> 
                                </a>
                        </div>
					</div>`
			: ""
		}
	        ${typeof template_additionalSection.interfaceImage !== "undefined"
			? `<div class="interface-image-wrap">
	        	<picture>
	        		${template_additionalSection.interfaceImage
				.map(
					(item) =>
						`<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`
				)
				.join("")}
	        		<img src="${template_additionalSection.interfaceImage[0].url
			}" alt="UI Image" title="UI Image" />
	        	</picture>
	        </div>
	        `
			: ``
		}</div>
	        ${typeof template_additionalSection.socialProofLogos !== "undefined"
			? `<div class="social-proof-logos">
	        	<div class="social-proof-heading">${template_additionalSection.socialProofLogos.socialProofHeading
			}</div>
	        	<picture>
	        		${template_additionalSection.socialProofLogos.socialProofImages
				.map(
					(item) =>
						`<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`
				)
				.join("")}
	        		<img src="${template_additionalSection.socialProofLogos.socialProofImages[0].url
			}" alt="Interface Image" />
	        	</picture>
	        </div>
	        `
			: ``
		}
	  `;
	document
		.querySelector(template_heroSelector)
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



//demo page
const currentURL = window.location.href.split('?')[0]; // Get the base URL without parameters
if (currentURL === "https://www2.maxio.com/l/699023/2022-08-16/nh4lk?spz=1002") {
	var iframebodyEle = document.querySelector('body');
	iframebodyEle.classList.add('spz-1002-iframe');
	waitForElm('.spz-1002-iframe form#pardot-form .submit input').then(function () {
		hiddenValue();
	});
}

let checkBody = setInterval(function () {
	if (document.querySelectorAll('body').length > 0) {
		clearInterval(checkBody);
		load_1002();
	}
});
function load_1002() {
	var bodyEle = document.querySelector('body');
	if (bodyEle) {
		//home page
		if (window.location.pathname === "/") {
			bodyEle.classList.add('spz-1002-home');
			bodyEle.classList.add('spz-home');
			//hidden value
			cookieValue('#1002', '#1002_variant1');

			waitForElm('#content #blocks-page .hero-generic .container > div > div:first-child .my-6 a').then(function () {
				addHero(
					template_heroContent, //object with the data
					template_position, //any value you pass using insertAdjacentHTML
					template_heroSelector,
					template_additionalSection
				);

				//on click of .redirect-to-demo store whatever value is in the input field in cookie 
				document.querySelector('.redirect-to-demo').addEventListener('click', function () {
					var emailValue = document.querySelector('.email-hero-spz').value;
					// store this value in session storage
					sessionStorage.setItem('emailValue', emailValue);

					//check all the.tile-item with .active class and store the value in cookie comma separated
					var activeTiles = document.querySelectorAll('.tiles-items .tile-item.active .tile-heading');
					var activeTilesValue = [];
					activeTiles.forEach(function (item) {
						activeTilesValue.push(item.textContent);
					});
					setCookie('activeTilesValue', activeTilesValue.join(','), 1);
				});
			});
		}

		//demo page
		if (window.location.pathname === "/demo") {
			bodyEle.classList.add('spz-1002-demo');

			waitForElm('.spz-1002-demo iframe[src="https://www2.maxio.com/l/699023/2022-08-16/nh4lk"]').then(function () {
				//set the value of email input field from session storage as the query param value for src of iframe
				var emailValue = sessionStorage.getItem('emailValue');
				//check if email value is not null
				if (emailValue) {
					var iframeSrc = document.querySelector('.spz-1002-demo iframe[src="https://www2.maxio.com/l/699023/2022-08-16/nh4lk"]').src;
					document.querySelector('.spz-1002-demo iframe[src="https://www2.maxio.com/l/699023/2022-08-16/nh4lk"]').src = iframeSrc + '?email=' + emailValue;
				}
			});
		}
	}
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
	var spz_cro_Interval = setInterval(function () {
		var cro_primary = document.querySelector('form#pardot-form .form-field.cro_primary input');
		if (cro_primary) {
			clearInterval(spz_cro_Interval);
			var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');
			cro_primary.value = ExistingHiddenFieldValue;

			//check if activeTilesValue cookie is present and set the value in the hidden field
			var activeTilesValue = getCookie('activeTilesValue');
			if (activeTilesValue) {
				var cro_secondary = document.querySelector('form#pardot-form .form-field.cro_secondary input');
				cro_secondary.value = activeTilesValue;
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