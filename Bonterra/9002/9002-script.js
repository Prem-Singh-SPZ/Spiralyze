let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz_9002')) {
            body.classList.add('spz_9002');

            const heroSelector = `section.form-content`;
            const position = "beforebegin";
            const formSelector = "#mktoForm_1053";
            const formHeading = "Request Pricing";
            const heroContent = {
                contentSuperHeading: "Maximize the impact of your programs",
                contentHeading: "Impact Management Pricing",
                contentSubHeading: "Purpose-built software to get more from your mission",
                heroCTA: "Get Pricing",
            };
            const additionalSection = {
                socialProofLogos: {
                    socialProofImages: [
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/bonterra/9002/logo-y.webp",
                            imgAlt: "yPsilanti Meals On Wheels",
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/bonterra/9002/logo-bcs.webp",
                            imgAlt: "BCS",
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/v1734423583/bonterra/9002/logo-usi.svg",
                            imgAlt: "USI",
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/bonterra/9002/logo-first-5.webp",
                            imgAlt: "First 5",
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/bonterra/9002/logo-oklahoma.webp",
                            imgAlt: "Oklahoma State Department of Health",
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/bonterra/9002/logo-gryd.webp",
                            imgAlt: "GRYD",
                        },
                        {
                            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/bonterra/9002/logo-seal-of-the-city.webp",
                            imgAlt: "Delaware - Seal of the city of wilmington",
                        },
                    ]
                },
                interfaceImage: [
                    {
                        breakPoint: 1024,
                        url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/bonterra/9002/ui_1442.webp",
                    },
                    {
                        breakPoint: 768,
                        url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/bonterra/9002/ui_771.webp",
                    },
                    {
                        breakPoint: 320,
                        url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/bonterra/9002/ui_363.webp",
                    },
                ],
            }

            function addHero(formData, whereToPut, heroSelector, additionalSection) {
                const formTemplate = `<section class="spz-hero">
					<div class="spz-wrapper">
						<div class="content-section">
							${formData.contentSuperHeading.replace(/\s/g, "").length !== 0
                        ? `<div class="content-superheading">${formData.contentSuperHeading}</div>`
                        : ""
                    }
							${formData.contentHeading.replace(/\s/g, "").length !== 0
                        ? `<h2 class="content-heading">${formData.contentHeading}</h2>`
                        : ""
                    }
							${formData.contentSubHeading.replace(/\s/g, "").length !== 0
                        ? `<div class="content-subheading">${formData.contentSubHeading}</div>`
                        : ""
                    }
							${typeof formData.heroCTA !== 'undefined'
                        ? `<div class="form-group-wrapper">
										<div class="form-group-spz">
												<input type="email" name="email" class="form-field-spz email-hero-spz" placeholder="">
												<label class="form-label-spz">Email Address</label>
										</div>
										<a href="javascript:;" class="hero-trigger-form hero-btn spz_tracking_9001">${formData.heroCTA}</a>
								</div>`
                        : ""
                    }
						</div>
						${typeof additionalSection.socialProofLogos !== 'undefined' ?
                        `<div class="social-proof-logos">
							${additionalSection.socialProofLogos.socialProofImages.length > 0 ? additionalSection.socialProofLogos.socialProofImages.map((item) => {
                            return `<img src="${item.url}" alt="${item.imgAlt}">`;
                        }).join("")
                            : ""
                        }
						</div>
						`: ``}
					</div>
					${typeof additionalSection.interfaceImage !== 'undefined' ?
                        `<div class="interface-image-wrap">
						<picture>
							${additionalSection.interfaceImage.map(item => `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`).join("")
                        }
							<img src="${additionalSection.interfaceImage[0].url}" alt="Impact Management Pricing" />
						</picture>
					</div>
					`: ``}
				</section>`;
                document.querySelector(heroSelector).insertAdjacentHTML(position, formTemplate);
                emailEvents();
            }
            addHero(heroContent, position, heroSelector, additionalSection);
            let formLoaded = setInterval(() => {
                if (document.querySelector(formSelector) && document.querySelectorAll(`${formSelector} input`).length > 0) {
                    clearInterval(formLoaded)
                    if (!document.querySelector('.spz-modal-form')) {
                        document.querySelector('.spz_9002 section.form-content').insertAdjacentHTML('afterend', `<div class="spz-modal-form">
							<div class="spz-modal-form-container">
								<div class="spz-modal-form-wrapper">
									<div class="spz-modal-content">
										${formHeading.replace(/\s/g, "").length !== 0
                                ? `<h2 class="form-heading">${formHeading}</h2>`
                                : ""
                            }
										<a href="javascript:;" class="hero-close-form close-btn"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1734685715/bonterra/9002/close.svg" alt="Close"></a>
										<div class="the-form"></div>
									</div>
								</div>
							</div>
						</div>`);
                        document.querySelector(".spz-modal-form .spz-modal-form-container .the-form").appendChild(document.querySelector(formSelector));
                    }
                    formModify();

                    if (document.querySelector('body.spz_9002 #site-footer .text-primary-light.fs-small p')) {
                        document.querySelector('body.spz_9002 #site-footer .text-primary-light.fs-small p').textContent = "Copyright © 2025 Bonterra. All rights reserved.";
                    }
                }
            });

            window.addEventListener('click', function (e) {
                if (e.target.classList.contains('hero-trigger-form')) {
                    const email = this.document.querySelector('.spz_9002 .spz-modal-form .the-form form.mktoForm .mktoFieldWrap #Email');
                    document.body.classList.add('spz-show-modal');
                    email.value = this.document.querySelector('.spz_9002 .spz-hero .form-group-wrapper .form-group-spz input.email-hero-spz').value;
                    if (email.value === '') {
                        email.closest('.mktoFieldWrap').classList.remove('filled');
                    } else {
                        email.closest('.mktoFieldWrap').classList.add('filled');
                    }
                }
                if (e.target.classList.contains('hero-close-form') || e.target.classList.contains('spz-modal-form-wrapper')) {
                    document.body.classList.remove('spz-show-modal');
                }

                if (e.target.getAttribute('href') == '#form') {
                    e.preventDefault();
                    document.querySelector('.spz_9002 .spz-hero').scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });

            function emailEvents() {
                const email = document.querySelector('.email-hero-spz');
                email.addEventListener('focus', function () {
                    email.closest('.form-group-wrapper').classList.add('focused');
                    email.closest('.form-group-wrapper').classList.remove('filled');
                });

                email.addEventListener('blur', function () {
                    email.closest('.form-group-wrapper').classList.remove('focused');

                    if (email.value === '') {
                        email.closest('.form-group-wrapper').classList.remove('filled');
                    } else {
                        email.closest('.form-group-wrapper').classList.add('filled');
                    }
                });

                email.addEventListener('keypress', function (e) {
                    if (e.key === 'Enter') {
                        document.querySelector('.hero-trigger-form').click();
                        email.blur();
                    }
                });
            }

            function formModify() {
                // Unwrap all child elemnts of mktoFormRow
                var mktoForm = document.querySelector('.spz_9002 .spz-modal-form form.mktoForm');
                var mktoFormRows = document.querySelectorAll('.spz_9002 .spz-modal-form form.mktoForm .mktoFormRow');
                mktoFormRows.forEach(function (row) {
                    while (row.firstChild) {
                        mktoForm.insertBefore(row.firstChild, row);
                    }
                    row.remove();
                });
                // Add class in mktoFormRow using count
                var form_fields = document.querySelectorAll('.spz_9002 .spz-modal-form form.mktoForm .mktoFormCol');
                for (var i = 0; i < form_fields.length; i++) {
                    var dynamicClass = 'field-' + (i + 1);
                    form_fields[i].classList.add(dynamicClass);
                }
                // Remove Placeholder
                var all_inputs = document.querySelectorAll('.spz_9002 .spz-modal-form form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz_9002 .spz-modal-form form.mktoForm .mktoFormCol .mktoFieldWrap select');
                all_inputs.forEach(function (element) {
                    element.removeAttribute('placeholder');
                });
                // Change Label Text
                document.querySelector('label#LblFirstName').textContent = "First Name";
                document.querySelector('label#LblLastName').textContent = "Last Name";
                document.querySelector('label#LblCompany').textContent = "Organization Name";
                document.querySelector('label#LblEmail').textContent = "Email Address";
                document.querySelector('label#LblPhone').textContent = "Phone Number";
                document.querySelector('label#LblNumber_of_Employees_Range__c').textContent = "Organization Size";
                document.querySelector('label#LblIndustry').textContent = "Organization Type";
                // Change Field Positions
                var email_field = document.querySelector('.spz_9002 .spz-modal-form form.mktoForm .mktoFormCol.field-3');
                var orgname_field = document.querySelector('.spz_9002 .spz-modal-form form.mktoForm .mktoFormCol.field-5');
                email_field.before(orgname_field);
                // On input focus add class on closest parent field class
                function focusFields() {
                    document.querySelectorAll(`.spz_9002 .spz-modal-form form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
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
                document.querySelector('.spz_9002 .spz-modal-form form.mktoForm .mktoButtonRow button.mktoButton').addEventListener('click', function (event) {
                    document.querySelectorAll(`.spz_9002 .spz-modal-form form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (elem) {
                        let Buffertime = setInterval(() => {
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
                            clearInterval(Buffertime);
                        }, 1000);
                    });
                });
                // Function to add .field-error class on closest parent .field class if .error is exist on input
                function checkError(elem) {
                    let timeBuffer = setInterval(() => {
                        if (elem.closest('.mktoFieldWrap').querySelector('.mktoError') && elem.closest('.mktoFieldWrap').querySelector('.mktoError').style.display != 'none' && elem.closest('.mktoFieldWrap').querySelector('.mktoInvalid')) {
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
                }

                document.querySelector('#mktoForm_1053 .mktoButton').addEventListener('click', function () {
                    setTimeout(() => {
                        if (document.querySelector('#mktoForm_1053 #Email').classList.contains('mktoInvalid') && document.querySelector('#mktoForm_1053 #Email').value != '') {
                            if (document.querySelector('#mktoForm_1053 #FirstName').value == '' || document.querySelector('#mktoForm_1053 #LastName').value == '' || document.querySelector('#mktoForm_1053 #Company').value == '') {
                                MktoForms2.getForm('1053').showErrorMessage('Must be valid email. <span class="mktoErrorDetail">example@yourdomain.com</span>', MktoForms2.getForm('1053').getFormElem().find("#Email"))
                            }
                        }
                    }, 100)
                })


            }
        }
    }
});