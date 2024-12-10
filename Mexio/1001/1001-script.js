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

				//if there is + sign in the email value, replace it all with %2B
				emailValue = emailValue.replace(/\+/g, '%2B');

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