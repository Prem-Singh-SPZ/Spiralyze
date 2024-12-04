//DEV 1/5. Put your asana task URL here
const asana_URL = `https://app.asana.com/0/1202434538289854/1208642778589288/f`;
//DEV 2/5. Find the class or ID of the control hero section and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
const template_heroSelector = `.hero-generic`;
//DEV 3/5. Choose where you redesigned hero section should appear accroding to control hero section row #4
const template_position = "afterbegin"; //"beforebegin", "beforeend", "afterend"
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
				tileImageURL: `//res.cloudinary.com/spiralyze/image/upload/v1731431132/maxio/1002/lucidecalendar-check_3.svg`,
				imageAlt: `Billing`,
				tileHeading: `Billing`,
				tileDescription: ``,
			},
			{
				tileImageURL: `https://res.cloudinary.com/spiralyze/image/upload/v1727717212/Code_Templates_assets/Hero_Tiles/iconoir_network.svg`,
				imageAlt: `some alt`,
				tileHeading: `Headline`,
				tileDescription: `Duis aute irure dolor in reprehenderit`,
			},
			{
				tileImageURL: `https://res.cloudinary.com/spiralyze/image/upload/v1727717211/Code_Templates_assets/Hero_Tiles/hugeicons_security-lock.svg`,
				imageAlt: `some alt`,
				tileHeading: `Headline`,
				tileDescription: `Duis aute irure dolor in reprehenderit`,
			},
			{
				tileImageURL: `https://res.cloudinary.com/spiralyze/image/upload/v1727717212/Code_Templates_assets/Hero_Tiles/iconamoon_profile-light.svg`,
				imageAlt: `some alt`,
				tileHeading: `Headline`,
				tileDescription: `Duis aute irure dolor in reprehenderit`,
			},
			{
				tileImageURL: `https://res.cloudinary.com/spiralyze/image/upload/v1727717213/Code_Templates_assets/Hero_Tiles/solar_key-linear.svg`,
				imageAlt: `some alt`,
				tileHeading: `Headline`,
				tileDescription: `Duis aute irure dolor in reprehenderit`,
			},
			{
				tileImageURL: `https://res.cloudinary.com/spiralyze/image/upload/v1727717212/Code_Templates_assets/Hero_Tiles/iconamoon_cloud.svg`,
				imageAlt: `some alt`,
				tileHeading: `Headline`,
				tileDescription: `Duis aute irure dolor in reprehenderit`,
			},
		],
	},
	//[6] Hero CTA
	heroCTA: {
		CTAText: "Primary CTA",
		CTAHref: "spiralyze.com",
	},
};
const template_additionalSection = {
	//[7] Interface image after the hero section https://share.cleanshot.com/SR5ZgNQ1
	interfaceImage: [
		{
			breakPoint: 992,
			url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1002/image_ui.webp",
		},
		{
			breakPoint: 768,
			url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/baseline_ui-tablet.png",
		},
		{
			breakPoint: 320,
			url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/baseline_ui-mobile.png",
		},
	],
	//[8] Social proof logos with heading after interface image https://share.cleanshot.com/7VMjQr0J
	socialProofLogos: {
		socialProofHeading:
			"Over 400,000 Customers from Small Business to Enterprise",
		socialProofImages: [
			{
				breakPoint: 992,
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
			? `<div class="content-superheading">${formData.contentSuperHeading}</div>`
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
	            						<img src="${item.tileImageURL}" class="tile-image" alt="${item.imageAlt}"/>
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
			? `<div class="hero-cta-wrap">
	                	<input type="email" id="spz-email" placeholder="Email"/>
	                	<a href=${formData.heroCTA.CTAHref} class="hero-cta">${formData.heroCTA.CTAText}</a>
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
			}" alt="Interface Image" />
	        	</picture>
	        </div>
	        `
			: ``
		}
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
	  </div>`;
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
addHero(
	template_heroContent, //object with the data
	template_position, //any value you pass using insertAdjacentHTML
	template_heroSelector,
	template_additionalSection
);


//demo page
const currentURL = window.location.href.split('?')[0]; // Get the base URL without parameters
if (currentURL === "https://www2.maxio.com/l/699023/2022-08-16/nh4lk") {
	var iframebodyEle = document.querySelector('body');
	iframebodyEle.classList.add('spz-1001-iframe');
	waitForElm('.spz-1001-iframe form#pardot-form .submit input').then(function () {
		hiddenValue();
	});
}

let checkBody = setInterval(function () {
	if (document.querySelectorAll('body').length > 0) {
		clearInterval(checkBody);
		load_1001();
	}
});
function load_1001() {
	var bodyEle = document.querySelector('body');
	if (!bodyEle.classList.contains('spz-1001')) {
		bodyEle.classList.add('spz-1001');

		//home page
		if (window.location.pathname === "/") {
			bodyEle.classList.add('spz-home');
			//hidden value
			cookieValue('#1001', '#1001_variant1');

			waitForElm('#content #blocks-page .hero-generic .container > div > div:first-child .my-6 a').then(function () {
				document.querySelector('#content #blocks-page .hero-generic .container > div > div:first-child').insertAdjacentHTML('beforeend', `<div class="spz-hero">
					<h1 class="spz-headline">Grow Recurring Revenue</h1>
					<p class="sub-headline">by optimizing subscription & contract billing</p>
					<ul class="hero-list">
						<li><span>Billing.</span> Manage term, evergreen, and usage subscriptions. Automate invoicing. Handle payments, trials, sign-ups, add-ons, and upsells.</li>
						<li><span>Revenue Recognition.</span> Handle GAAP & IFRS. Build, compare, and customize multiple schedules. Get drill-down reports and detailed audit trails.</li>
						<li><span>Reporting.</span> One-click reports for ARR, MRR, churn, renewals, and more. Advanced cohort, revenue waterfalls, and drill-down reports.</li>
					</ul>
					<div class="spz-email">
						 <div class="form-group-wrapper">
                                <div class="form-group-spz">
                                    <input type="email" name="email" class="form-field-spz email-hero-spz" placeholder=" " />
                                    <label class="form-label-spz">Email</label>
                                </div>
                                <a href="/demo" id="hero-copy-url" class="hero-btn redirect-to-demo spz_tracking_1001">
                                    <span>Get a Demo</span> 
                                </a>
                        </div>
					</div>
				</div>
				`);

				//insert a banner section with 4 logos 
				document.querySelector('#content #blocks-page .hero-generic .container').insertAdjacentHTML('afterend', `<div class="spz-banner"><div class="spz-banner-wrapper"><div class="b-logo"><img src="//res.cloudinary.com/spiralyze/image/upload/v1731513060/maxio/1001/chily_piper_logo.svg" alt="Chili Piper"></div><div class="b-logo"><img src="//res.cloudinary.com/spiralyze/image/upload/v1731513060/maxio/1001/mailgun_logo.svg" alt="Mailgun"></div><div class="b-logo"><img src="//res.cloudinary.com/spiralyze/image/upload/v1731513060/maxio/1001/stack_overflow_logo.svg" alt="Stack overflow"></div><div class="b-logo"><img src="//res.cloudinary.com/spiralyze/image/upload/v1731513060/maxio/1001/jasper_logo.svg" alt="Jasper"></div></div></div>`);

				//on click of .redirect-to-demo store whatever value is in the input field in cookie 
				document.querySelector('.redirect-to-demo').addEventListener('click', function () {
					var emailValue = document.querySelector('.email-hero-spz').value;
					// store this value in session storage
					sessionStorage.setItem('emailValue', emailValue);
				});
			});
		}

		//demo page
		if (window.location.pathname === "/demo") {
			bodyEle.classList.add('spz-1001-demo');

			waitForElm('.spz-1001-demo iframe[src="https://www2.maxio.com/l/699023/2022-08-16/nh4lk"]').then(function () {
				//set the value of email input field from session storage as the query param value for src of iframe
				var emailValue = sessionStorage.getItem('emailValue');
				//check if email value is not null
				if (emailValue) {
					var iframeSrc = document.querySelector('.spz-1001-demo iframe[src="https://www2.maxio.com/l/699023/2022-08-16/nh4lk"]').src;
					document.querySelector('.spz-1001-demo iframe[src="https://www2.maxio.com/l/699023/2022-08-16/nh4lk"]').src = iframeSrc + '?email=' + emailValue;
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