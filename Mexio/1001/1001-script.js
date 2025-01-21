// iFrame Code
function formPage() {
	var iframebodyInterval = setInterval(function () {
		var iframebodyEle = document.querySelector('body');
		if (iframebodyEle) {
			if (!iframebodyEle.classList.contains('spz-1001-iframe')) {
				clearInterval(iframebodyInterval);
				iframebodyEle.classList.add('spz-1001-iframe');
				waitForElm('body #pardot-form').then(function () {
					var formAction = document.querySelector('body #pardot-form').action;
					//check if url has query params
					if (formAction.includes('?')) {
						document.querySelector('body #pardot-form').action = formAction + '&spz=1001';
					} else {
						document.querySelector('body #pardot-form').action = formAction + '?spz=1001';
					}
				});
				waitForElm('.spz-1001-iframe form#pardot-form .submit input').then(function () {
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
		if (!bodyEle.classList.contains('spz-1001-demo')) {
			clearInterval(bodyInterval);
			bodyEle.classList.add('spz-1001-demo');
			waitForElm('.blocks-page iframe').then(function () {
				setTimeout(() => {
					var iframeSrc = document.querySelector('.blocks-page iframe').src;
					if (iframeSrc.includes('?')) {
						document.querySelector('.blocks-page iframe').src = iframeSrc + '&spz=1001';
					} else {
						document.querySelector('.blocks-page iframe').src = iframeSrc + '?spz=1001';
					}
				}, 500);
			});
		}
	});
}

// Main Page Code
function mainPage() {
	var mainbodyInterval = setInterval(function () {
		var mainbodyEle = document.querySelector('body');
		if (!mainbodyEle.classList.contains('spz-1001')) {
			clearInterval(mainbodyInterval);
			mainbodyEle.classList.add('spz-1001');
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
					emailValue = emailValue.replace(/\+/g, '%2B');
					setCookie('SPZ_Carry_Email',emailValue,1);
				});
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
if (location.href.indexOf('spz=1001') > -1) {
	formPage();
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

	var spz_email_Interval = setInterval(function () {
		var emailfiled = document.querySelector('form#pardot-form .form-field.CP_Email input');
			if(emailfiled){
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