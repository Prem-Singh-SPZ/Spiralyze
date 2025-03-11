// var css = ``;
// head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
// head.appendChild(style);
// style.type = 'text/css';
// style.appendChild(document.createTextNode(css));

let bodyLoaded = setInterval(function () {
	const body = document.querySelector('body');
	if (body) {
		clearInterval(bodyLoaded);
		if (!body.classList.contains('spz-v-2009')) {
			body.classList.add('spz-v-2009');
			waitForElm('.spz-v-2009 #hero-section').then(function () {

				document.querySelector('.spz-v-2009 #hero-section .row.hero').insertAdjacentHTML('afterbegin', `<a href="https://expel.com/" class="site-logo-link" rel="home">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/expel_logosvg.svg" class="site-logo-img" alt="Expel">
                </a>`);

				document.querySelector('.spz-v-2009 #hero-section .row.hero .col.form').insertAdjacentHTML('afterend', `<div class="col spz-content">
                    <a href="https://expel.com/" class="site-logo-link" rel="home">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/expel_logosvg.svg" class="site-logo-img" alt="Expel">
                    </a>
                    <h6 class="section-label">Managed Detection and Response Services</h6>
                    <h2 class="section-heading">90% improvement in security risk detection*</h2>
                    <p class="info-text"><strong>With Expel you get:</strong></p>
                    <ul class="section-highlight-point">
                        <li class="list-item"><span class="highlight-text">24x7 SOC services</span> with threat detection, alert triage, remediation recommendations, automated responses & a 20-minute MTTR.</li>
                        <li class="list-item"><span class="highlight-text">Extensive protection</span> across cloud workloads, control planes, identity management, SaaS, endpoints, and networks.</li>
                        <li class="list-item"><span class="highlight-text">125+ integrations</span> including AWS, CrowdStrike, Google, Microsoft, Okta, Palo Alto, SentinelOne, Splunk, Salesforce, Wiz, and more.</li>
                    </ul>
                    <p class="info-text">See Expel in action!</p>
                </div>`);

				document.querySelector('.spz-v-2009 #hero-section .row.hero').insertAdjacentHTML('afterend', `<div class="hero-client-logos">
                    <div class="container">
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275521.svg" alt="Visa" class="client-logo" />
                        </div>
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275522.svg" alt="Uber" class="client-logo" />
                        </div>
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275523.svg" alt="Markel" class="client-logo" />
                        </div>
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2006/frame_1171275524.svg" alt="Carter's" class="client-logo" />
                        </div>
                        <div class="img-wrapper">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275525.svg" alt="Doordash" class="client-logo" />
                        </div>
                    </div>  
                </div>`);

				document.querySelector('.spz-v-2009 #hero-section .hero .ex-form .form-title').textContent = "Watch Demo";

				//Form internal code
				waitForElm('.spz-v-2009 #hero-section .ex-form form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
					formModify();
				});
				// footer text addition
				waitForElm('.spz-v-2009 #expel-footer').then(function () {
					document.querySelector('.spz-v-2009 #expel-footer .row.links-container').insertAdjacentHTML('beforebegin', `<div class="row links-container links-container--spz-v-2009">
                <div class="col links"></div>
                <div class="col rights">
                  <p class="links-container__text--spz-v-2009">*Expel customer surveys, Verified by UserEvidence June-December 2023</p>
                </div>
              </div>`);
				});
			});
		}
	}

	// Do not touch below hidden field code for any Experiment (Set Hidden Filed Value)
	function hiddenValue(currentExperimentName, currentExperimentValue) {
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
	// Do not touch below hidden field code for any Experiment over (Set Hidden Filed Value)

	// Use this and change value according to the experiment
	hiddenValue('#2009 | Expel | Demo | UI Behind the Form', 'variant_#2009');
});

function formModify() {
	// Unwrap all child elemnts of mktoFormRow
	var mktoForm = document.querySelector('.mktoForm');
	var mktoFormRows = document.querySelectorAll('.mktoFormRow');
	mktoFormRows.forEach(function (row) {
		while (row.firstChild) {
			mktoForm.insertBefore(row.firstChild, row);
		}
		row.remove();
	});
	// Add class in mktoFormRow using count
	var form_fields = document.querySelectorAll('.spz-v-2009 #hero-section .hero .ex-form form.mktoForm .mktoFormCol');
	for (var i = 0; i < form_fields.length; i++) {
		var dynamicClass = 'field-' + (i + 1);
		form_fields[i].classList.add(dynamicClass);
		form_fields[i].getAttribute('data-wrapper-for') ? (form_fields[i].getAttribute('data-wrapper-for') == "Email" ? '' : form_fields[i].style.display = 'none') : '';
	}
	// Updating Form Labels
	document.querySelector('#LblCompany_Size__c').textContent = "Company Size";
	document.querySelector('#Company_Size__c').options[0].textContent = 'Select';
	document.querySelector('#LblPerson_Country__c').textContent = "Country";
	document.querySelector('.spz-v-2009 .mktoForm .field-7 .mktoHtmlText').innerHTML = `Information submitted on this form may be associated with other information we have collected and used pursuant to the <a href="https://expel.com/notices/" target="_blank">Expel Online Privacy Policy</a>.`;
	// form CTA Update
	let form_CTA = setInterval(() => {
		let textChng = document.querySelector('.spz-v-2009 #hero-section .hero .ex-form form.mktoForm .mktoButtonRow');
		if (textChng && !textChng.classList.contains('text-updated')) {
			textChng.insertAdjacentHTML('afterbegin', `<span class="button-text"><svg width="19" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.745 8.188L4.958 2.362a.738.738 0 00-.383-.112.701.701 0 00-.696.703h-.004v12.094h.004c0 .387.312.703.696.703.144 0 .263-.05.393-.12l9.777-5.818a1.06 1.06 0 000-1.624z" fill="#fff"/></svg> Instant access</span>`);
			textChng.classList.add('text-updated');
			clearInterval(form_CTA);
		}
	}, 100);
	// Change Field Position
	var phone_field = document.querySelector('.spz-v-2009 .mktoForm .field-2');
	var lname_field = document.querySelector('.spz-v-2009 .mktoForm .field-4');
	lname_field.after(phone_field);

	var disclaimer_field = document.querySelector('.spz-v-2009 .mktoForm .mktoCaptchaDisclaimer');
	var form_button = document.querySelector('.spz-v-2009 .mktoForm .mktoButtonRow');
	form_button.after(disclaimer_field);

	// On input focus add class on closest parent field class
	function focusFields() {
		document.querySelectorAll(`.spz-v-2009 #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
			el.addEventListener('focus', function () {
				el.closest('.mktoFieldWrap').classList.add('active', 'typing');
				checkError(el);
			});
			el.addEventListener('blur', function () {
				el.closest('.mktoFieldWrap').classList.remove('active', 'typing');
				checkError(el);
			});

			// add event listeners to the input element
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

	// Function to add .field-error class on closest parent .field class if .error is exist on input
	function checkError(elem) {
		let timeBuffer = setInterval(() => {
			if (elem.closest('.mktoFieldWrap').querySelector('.mktoError') && elem.closest('.mktoFieldWrap').querySelector('.mktoError').style.display != 'none') {
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


		if (elem.name == 'Email') {
			let counterA = 0;
			const intervalIdA = setInterval(() => {
				if (document.querySelector('.spz-v-2009 #hero-section form.mktoForm .mktoFormCol.field-3').style.display !== "none") {
					document.body.classList.add('form-expand');
				}
				counterA++;
				if (counterA >= 20) {
					clearInterval(intervalIdA);
				}
			}, 500);
		}
		if (elem.name == 'Person_Country__c') {
			waitForElm('form.mktoForm .mktoFormCol.spz-privacy-policy').then(function (elm) {
				document.querySelector('[data-wrapper-for="Person_Country__c"]').after(elm);
			});
		}
	}

	document.querySelector('.spz-v-2009 #hero-section form.mktoForm .mktoButtonRow .mktoButton').addEventListener('click', function () {
		waitForElm('.spz-v-2009 #hero-section .hero .ex-form form.mktoForm .mktoError').then(function (elm) {
			if (elm.parentNode.querySelector('#ValidMsgEmail')) {
				const targetNode = elm.parentNode;
				const config = {
					attributes: true,
					childList: true,
					subtree: true
				};
				const callback = (mutationList, observer) => {
					for (const mutation of mutationList) {
						if (mutation.type === "childList") {
							if (elm.parentNode === null && elm.style.display != 'none') {
								targetNode.classList.add('error');
							} else {
								elm.parentNode.classList.add('error');
							}
							observer.disconnect();
						} else if (mutation.type === "attributes") {
							if (elm.parentNode === null) {
								targetNode.classList.add('error');
							} else {
								elm.parentNode.classList.add('error');
							}
							observer.disconnect();
						}
					}
				};
				const observer = new MutationObserver(callback);
				observer.observe(targetNode, config);
			} else {
				let counterA = 0;
				const intervalIdA = setInterval(() => {
					if (document.querySelector('.spz-v-2009 #hero-section .hero .ex-form form.mktoForm .mktoError #ValidMsgEmail') !== null) {
						document.querySelector('.spz-v-2009 #hero-section .hero .ex-form form.mktoForm .mktoError #ValidMsgEmail').parentNode.parentNode.classList.add('error');
					}
					counterA++;
					if (counterA >= 10) {
						clearInterval(intervalIdA);
					}
				}, 500);
			}
		});
	})

	function isVisible(element) {
		if (!element) {
			return false;
		}
		const style = window.getComputedStyle(element);
		if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
			return false;
		}
		return element.offsetParent !== null;
	}
	const textInputs = document.querySelectorAll('.spz-v-2009 form.mktoForm .mktoField:not([type="checkbox"]):not([type="hidden"])');
	const visibleFields = Array.from(textInputs).filter(isVisible);
	const blockFieldNames = visibleFields.filter(field => {
		const closestMktoFormCol = field.closest('.spz-v-2009 form.mktoForm .mktoFormCol');
		return closestMktoFormCol && closestMktoFormCol.style.display !== 'none';
	}).map(field => field.name);
	var last_field_name = blockFieldNames[blockFieldNames.length - 1];
	if (blockFieldNames.length % 2 === 0) {
		document.querySelector('.spz-v-2009 form.mktoForm .mktoFormCol .mktoField[name="' + last_field_name + '"]').closest('.spz-v-2009 form.mktoForm .mktoFormCol').classList.add('width_full');
	} else {
		document.querySelector('.spz-v-2009 form.mktoForm .mktoFormCol .mktoField[name="' + last_field_name + '"]').closest('.spz-v-2009 form.mktoForm .mktoFormCol').classList.remove('width_full');
	}

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
		observer.observe(document, {
			attributes: true,
			childList: true,
			subtree: true,
			characterData: true
		});
	});
}