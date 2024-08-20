let bodyLoaded = setInterval(function () {
	const body = document.querySelector('body');
	if (body) {
		clearInterval(bodyLoaded);

		//add swiper js and css in head
		const swiperStyle = document.createElement('link');
		swiperStyle.rel = 'stylesheet';
		swiperStyle.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
		document.head.appendChild(swiperStyle);

		const swiperScript = document.createElement('script');
		swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
		swiperScript.async = false;
		document.head.appendChild(swiperScript);

		if (!body.classList.contains('spz-1005')) {
			body.classList.add('spz-1005');

			if (document.querySelectorAll('.spz-1005 .body-container-wrapper .row-number-1 .spz-testimonial').length == 0)
				document.querySelector('.spz-1005 .body-container-wrapper .row-number-1 > .row-fluid').insertAdjacentHTML('beforeend', `<div class="spz-testimonial"><div class="swiper spz-slider">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="tm-card">
								<div class="tm-quote">
									<picture>
										<source media="(min-width: 1025px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/quotemark_1441.webp" type="image/webp">
										<source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/quotemark_768_webp.webp" type="image/webp">
										<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/quotemark_768_webp_2.webp" alt="Quote">
									</picture>
								</div>
								<div class="tm-body">
									<p>Varicent Incentives is the best in the market. We can quickly build accurate reports. Dramatically reduces our work.</p>
								</div>
								<div class="tm-footer">
									<div class="tm-logo">
										<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/manpower_logo_1441.webp" alt="Manpower">
									</div>
									<div class="tm-write">
										<p class="name">Craig Dimbat</p>
										<p class="designation">Varicent Administrator</p>
									</div>
								</div>
							</div>
						</div>
						<div class="swiper-slide">
							<div class="tm-card">
								<div class="tm-quote">
									<picture>
										<source media="(min-width: 1025px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/quotemark_1441.webp" type="image/webp">
										<source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/quotemark_768_webp.webp" type="image/webp">
										<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/quotemark_768_webp_2.webp" alt="Quote">
									</picture>
								</div>
								<div class="tm-body">
									<p>We can make a better, more accurate business plan. It engages our sales associates. And we&#8217;ve reduced costs.
</p>
								</div>
								<div class="tm-footer">
									<div class="tm-logo">
										<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/shaw_logo_1440.webp" alt="Shaw">
									</div>
									<div class="tm-write">
										<p class="name">Melissa Crawley</p>
										<p class="designation">Director Sales Compensation</p>
									</div>
								</div>
							</div>
						</div>
						<div class="swiper-slide">
							<div class="tm-card">
								<div class="tm-quote">
									<picture>
										<source media="(min-width: 1025px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/quotemark_1441.webp" type="image/webp">
										<source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/quotemark_768_webp.webp" type="image/webp">
										<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/quotemark_768_webp_2.webp" alt="Quote">
									</picture>
								</div>
								<div class="tm-body">
									<p>Sellers can see the expected payment on a daily level. It&#8217;s a great way to help motivate them to do more and more.
</p>
								</div>
								<div class="tm-footer">
									<div class="tm-logo">
										<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/magyar_telekom_logo_1440.webp" alt="Magyar Telekom">
									</div>
									<div class="tm-write">
										<p class="name">Sebestyén Melega</p>
										<p class="designation">Incentive Development and Operations CoE Lead</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					</div><div class="swiper-pagination"></div>
				</div>`);

			//check if swiper is loaded and then call initSlider
			var swiperLoaded = setInterval(function () {
				if (typeof Swiper !== 'undefined'  && document.querySelector('.spz-1005 .spz-slider')) {
					clearInterval(swiperLoaded);
					initSlider();
				}
			}, 100);

			waitForElm('.spz-1005 .widget-type-form form.hs-form.hs-custom-form .hs-form-field input').then(function () {

				if (document.querySelectorAll('.spz-1005 .body-container-wrapper .form-title').length == 0)
					document.querySelector('.spz-1005 .body-container-wrapper .widget-type-form').insertAdjacentHTML('beforebegin', `<h2 class="form-title">Get a Demo</h2>`);

				// Add class in each elements of type hidden
				waitForElm('.spz-1005 .body-container-wrapper form.hs-form.hs-custom-form input[type="hidden"]').then(function () {
					var hiddenFields = document.querySelectorAll('.spz-1005 .body-container-wrapper form.hs-form.hs-custom-form input[type="hidden"].hs-input');
					hiddenFields.forEach(function (hiddenField) {
						var parentDiv = hiddenField.closest('.hs-form-field');
						if (parentDiv) {
							parentDiv.classList.add('hidden-field');
						}
					});

					let textUpdated = setInterval(() => {
						if (document.querySelector('form.hs-form.hs-custom-form select[name="employee_size"] option[value=""]').innerText !== '') {
							clearInterval(textUpdated);
							document.querySelector('form.hs-form.hs-custom-form select[name="employee_size"] option[value=""]').innerText = '';
							document.querySelector('form.hs-form.hs-custom-form select[name="country"] option[value=""]').innerText = '';
							document.querySelector('form.hs-form.hs-custom-form .hs-form-field .hs-form-booleancheckbox span > p').innerHTML = 'By clicking “Submit” below, you consent to allow Varicent to store and process the personal information submitted above per Varicent&#8217;s Privacy Policy to provide you a product demo.';
							document.querySelector('form.hs-form.hs-custom-form .hs-submit .hs-button').classList.add('spz-1005-cta');
							document.querySelector('form.hs-form.hs-custom-form .hs_how_did_you_hear_about_varicent_ > label > span:first-child').textContent = `How did you hear about us?`;
						}
					}, 100);
				});

				setTimeout(() => {
					if (document.querySelector('.spz-1005 form.hs-form.hs-custom-form .hs-form-field.hs-company').style.display != 'none') {
						document.querySelector('.spz-1005 form.hs-form.hs-custom-form .hs-form-field.hs-country').classList.remove('full-width');
					} else {
						document.querySelector('.spz-1005 form.hs-form.hs-custom-form .hs-form-field.hs-country').classList.add('full-width');
					}
				}, 1000);

				var typingTimer;
				var doneTypingInterval = 1000;
				var selector = '.spz-1005 .body-container-wrapper form.hs-form.hs-custom-form .hs-form-field .hs-input';


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
								var compant_smart_field = document.querySelector('.spz-1005 .body-container-wrapper form.hs-form.hs-custom-form .hs-form-field.hs-company .hs-input');
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

								if (document.querySelector('.spz-1005 form.hs-form.hs-custom-form .hs-form-field.hs-company').style.display != 'none') {
									document.querySelector('.spz-1005 form.hs-form.hs-custom-form .hs-form-field.hs-country').classList.remove('full-width');
								} else {
									document.querySelector('.spz-1005 form.hs-form.hs-custom-form .hs-form-field.hs-country').classList.add('full-width');
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

function initSlider() {
	// Initialize Swiper
	var swiper = new Swiper('.spz-1005 .spz-slider', {
		slidesPerView: 1,
		// spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 9999999999999,
			disableOnInteraction: true,
			pauseOnMouseEnter: false,
		},
		pagination: {
			el: '.spz-1005 .spz-testimonial .swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				},
			}
		},
	});
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
