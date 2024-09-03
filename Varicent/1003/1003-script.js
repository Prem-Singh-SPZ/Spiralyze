
let bodyLoaded = setInterval(function () {
	const body = document.querySelector('body');
	if (body) {
		clearInterval(bodyLoaded);
		if (!body.classList.contains('spz-1003')) {
			body.classList.add('spz-1003');
			if (document.querySelectorAll('.spz-1003 .spz-video-bg').length == 0) {
				document.querySelector('.spz-1003').insertAdjacentHTML('afterbegin', `<div class="spz-video-bg"><video autoplay muted playsinline>
					<source src="//res.cloudinary.com/spiralyze/video/upload/f_auto/varicent/1003/Vector_Dashboard.mp4" type="video/mp4">
				  </video></div>`);
			}

			waitForElm('.spz-1003 .widget-type-form form.hs-form.hs-custom-form .hs-form-field input').then(function () {
				if (document.querySelectorAll('.spz-1003 .body-container-wrapper .form-title').length == 0) {
					document.querySelector('.spz-1003 .body-container-wrapper .widget-type-form').insertAdjacentHTML('beforebegin', `<h2 class="form-title">Get a Demo</h2>`);
				}

				// Add class in each elements of type hidden
				waitForElm('.spz-1003 .body-container-wrapper form.hs-form.hs-custom-form input[type="hidden"]').then(function () {
					var hiddenFields = document.querySelectorAll('.spz-1003 .body-container-wrapper form.hs-form.hs-custom-form input[type="hidden"].hs-input');
					hiddenFields.forEach(function (hiddenField) {
						var parentDiv = hiddenField.closest('.hs-form-field');
						if (parentDiv) {
							parentDiv.classList.add('hidden-field');
						}
					});
				});

				setTimeout(() => {
					if (document.querySelector('.spz-1003 form.hs-form.hs-custom-form .hs-form-field.hs-company').style.display != 'none') {
						document.querySelector('.spz-1003 form.hs-form.hs-custom-form .hs-form-field.hs-country').classList.remove('full-width');
					} else {
						document.querySelector('.spz-1003 form.hs-form.hs-custom-form .hs-form-field.hs-country').classList.add('full-width');
					}
				}, 1000);

				var typingTimer;
				var doneTypingInterval = 1000;
				var selector = '.spz-1003 .body-container-wrapper form.hs-form.hs-custom-form .hs-form-field .hs-input';

				// document.querySelector('.spz-1003 form.hs-form.hs-custom-form .hs-form-field.hs-country').classList.add('full-width');

				// Function to handle custom error class
				function handleCustomErrorClass(target) {
					var closestError = target.parentNode.parentNode.querySelector('.hs-error-msgs');
					if (closestError) {
						target.closest('body form.hs-form.hs-custom-form .hs-form-field').classList.add('error');
					} else {
						target.closest('body form.hs-form.hs-custom-form .hs-form-field').classList.remove('error');
					}
				}

				// Set up MutationObserver
				var observer_field_class = new MutationObserver(function (mutationsList) {
					for (let mutation of mutationsList) {
						if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
							let target = mutation.target;
							if (target.matches(selector)) {
								handleCustomErrorClass(target);
							}
						}
					}
				});

				// Observer configuration
				var config = { attributes: true, attributeFilter: ['class'] };

				document.addEventListener('focus', function (event) {
					if (event.target.matches && event.target.matches(selector)) {
						event.target.closest('body form.hs-form.hs-custom-form .hs-form-field').classList.add('active', 'typing');
					}
				}, true);

				var eventList = ["focusin", "blur", "focusout", "keyup", "change"];
				for (let s_event of eventList) {
					document.addEventListener(s_event, function (event) {
						if (event.target.matches && event.target.matches(selector)) {
							if (event.target.value == null || event.target.value == '') {
								event.target.closest('body form.hs-form.hs-custom-form .hs-form-field').classList.remove('filled');
							} else {
								event.target.closest('body form.hs-form.hs-custom-form .hs-form-field').classList.add('filled');
							}
							if (event.type == "change") {
								if (event.target.value == "") {
									event.target.closest('body form.hs-form.hs-custom-form .hs-form-field').classList.add('error');
								} else {
									event.target.closest('body form.hs-form.hs-custom-form .hs-form-field').classList.remove('error');
								}
							} else {
								handleCustomErrorClass(event.target);
							}

							if (event.target.type == 'email') {
								var compant_smart_field = document.querySelector('.spz-1003 .body-container-wrapper form.hs-form.hs-custom-form .hs-form-field.hs-company .hs-input');
								if (compant_smart_field.value == null || compant_smart_field.value == '') {
									compant_smart_field.closest('body form.hs-form.hs-custom-form .hs-form-field').classList.remove('filled');
								} else {
									compant_smart_field.closest('body form.hs-form.hs-custom-form .hs-form-field').classList.add('filled');
								}
								handleCustomErrorClass(compant_smart_field);
							}

							if (event.type == "keyup") {
								clearTimeout(typingTimer); // Clear the previous timer
								typingTimer = setTimeout(doneTyping, doneTypingInterval); // Start a new timer
							}
							if (event.type == "keydown") {
								clearTimeout(typingTimer); // Clear the previous timer
							}

							function doneTyping() {
								setTimeout(() => {
									var fname = document.querySelector("form.hs-form.hs-custom-form .hs-form-field.hs-firstname .hs-input");
									var lname = document.querySelector("form.hs-form.hs-custom-form .hs-form-field.hs-lastname .hs-input");
									var email = document.querySelector("form.hs-form.hs-custom-form .hs-form-field.hs-email .hs-input");
									var companyname = document.querySelector("form.hs-form.hs-custom-form .hs-form-field.hs-company .hs-input");
									if (fname.value != '' && lname.value != '' && email.value != '' && !email.classList.contains('error') && !email.parentNode.parentNode.classList.contains('error') && companyname.value != '' && !companyname.classList.contains('error') && !companyname.parentNode.parentNode.classList.contains('error')) {
										document.body.classList.add('form-expand');
									}
								}, 250);

								if (document.querySelector('.spz-1003 form.hs-form.hs-custom-form .hs-form-field.hs-company').style.display != 'none') {
									document.querySelector('.spz-1003 form.hs-form.hs-custom-form .hs-form-field.hs-country').classList.remove('full-width');
								} else {
									document.querySelector('.spz-1003 form.hs-form.hs-custom-form .hs-form-field.hs-country').classList.add('full-width');
								}
							}
						}
					});
				}

				document.addEventListener('focusout', function (event) {
					document.querySelectorAll('body form.hs-form.hs-custom-form .hs-form-field.typing').forEach(function (elem) {
						elem.classList.remove('active', 'typing');
					})
				}, true);

				// Observe all input elements initially
				document.querySelectorAll(selector).forEach((elem) => {
					observer_field_class.observe(elem, config);
				});


				document.querySelector('.hs-button').addEventListener('click', function () {
					const err = setInterval(() => {
						document.querySelectorAll(".hs-input").forEach((function (e) {
							null != e.closest(".field").querySelector(".error") ? e.closest(".field").classList.add("error") : e.closest(".field").classList.remove("error")
						}))
						clearInterval(err);
					}, 100);
				});

			});
		}
	}
});


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
