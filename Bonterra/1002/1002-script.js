let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz_1002')) {
            body.classList.add('spz_1002');

            const triageData = [
                //Question 1 start
                {
                    questionHeading: "Which best describes you?",
                    answers: [
                        {
                            answerFormValue: 'Nonprofit',
                            answerText: 'Nonprofit',
                            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1724679709/bonterra/1002/icon-leaf.svg'
                        },
                        {
                            answerFormValue: 'Corporation',
                            answerText: 'Corporation',
                            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1724679709/bonterra/1002/icon-briefcase.svg'
                        },
                        {
                            answerFormValue: 'Foundations',
                            answerText: 'Foundation/Grant maker',
                            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1724679709/bonterra/1002/icon-grant.svg'
                        },
                        {
                            answerFormValue: 'Government',
                            answerText: 'Public Agency',
                            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1724679709/bonterra/1002/icon-buildings.svg'
                        }
                    ]
                },
                //Question 1 end
                //Question 2 start
                {
                    questionHeading: "How we can help?",
                    answers: [
                        {
                            answerFormValue: 'Fundraising and Engagement',
                            answerText: 'Fundraising and Engagement',
                            answerDesc: 'Automate donor and supporter outreach',
                            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1724679709/bonterra/1002/icon-hand.svg'
                        },
                        {
                            answerFormValue: 'Impact Management',
                            answerText: 'Case Management',
                            answerDesc: 'Optimize case management & demonstrate impact',
                            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1724679709/bonterra/1002/icon-people.svg'
                        },
                        {
                            answerFormValue: 'Strategic Philanthropy',
                            answerText: 'Corporate Philanthropy',
                            answerDesc: 'Manage grants, budgets, and employee giving',
                            answerImage: '//res.cloudinary.com/spiralyze/image/upload/v1724679709/bonterra/1002/icon-money.svg'
                        }
                    ]
                },
                //Question 2 end
            ]

            const heroSelector = `.spz_1002 .main-content .layout .layout__region`;
            const footerSelector = `.spz_1002 footer.site-footer`;
            const position = "beforebegin";
            const formUniqueSelector = `#mktoForm_1024`;
            const heroContent = {
                customHTMLBefore: `<div class="form-heading">Get a Demo</div>`,
                contentSuperHeading: "Nonprofit & strategic philanthropy management",
                contentHeading: "Boost donations, engagement, and impact",
                ArrowImage: [
                    {
                        breakPoint: 1024,
                        url: "//res.cloudinary.com/spiralyze/image/upload/v1724752326/bonterra/1001/arrow.svg",
                    },
                ],
                ArrowAlt: "arrow",
                features: [
                    {
                        checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1725355228/bonterra/1001/feature-checkmark.svg",
                        featureItemContent: "<b>Fundraising.</b> Send email to donors with one-click donations. Website donation forms. Manage Giving Days & volunteers. ",
                    },
                    {
                        checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1725355228/bonterra/1001/feature-checkmark.svg",
                        featureItemContent: "<b>Impact Management.</b> Manage cases, records, enrollments, exits, caseloads, and more. Create program performance reports.",
                    },
                    {
                        checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1725355228/bonterra/1001/feature-checkmark.svg",
                        featureItemContent: "<b>Strategic Philanthropy.</b> Award and report on grants. Track budgets. Let employees find and donate to vetted nonprofits.",
                    },
                ],
            };
            const LeadingLogoData = [
                {
                    leadinglogosheading: "Trusted by Leading Organizations",
                    leadinglogos: [
                        {
                            logo: '//res.cloudinary.com/spiralyze/image/upload/v1724679722/bonterra/1002/audubon_logo.svg',
                            logoalt: 'Audubon'
                        },
                        {
                            logo: '//res.cloudinary.com/spiralyze/image/upload/v1724679722/bonterra/1002/special_olympics.svg',
                            logoalt: 'Special Olympics'
                        },
                        {
                            logo: '//res.cloudinary.com/spiralyze/image/upload/f_auto/bonterra/1002/naacp_1.webp',
                            logoalt: 'NAACP'
                        },
                        {
                            logo: '//res.cloudinary.com/spiralyze/image/upload/v1724679723/bonterra/1002/feeding_america.svg',
                            logoalt: 'Feeding America'
                        },
                        {
                            logo: '//res.cloudinary.com/spiralyze/image/upload/v1724679723/bonterra/1002/toys_for_tots.svg',
                            logoalt: 'Toys For Tots'
                        },
                        {
                            logo: '//res.cloudinary.com/spiralyze/image/upload/v1724679723/bonterra/1002/covenant_house.svg',
                            logoalt: 'Covenant House'
                        }
                    ]
                }
            ]
            const FooterData = [
                {
                    copyrightcontent: "©Bonterra 2024",
                    footerlinks: [
                        {
                            url: '/legal/privacy-policy',
                            text: 'Privacy policy'
                        },
                        {
                            url: '/legal/bonterra-website-terms-and-conditions',
                            text: 'Terms of Use'
                        }
                    ]
                }
            ]
            function addBaseline(formData, whereToPut, triageData, formUniqueSelector, heroSelector, leadinglogoSection, footerSelector, footer) {
                const formTemplate = `<div class="spz-shortform-baseline">
					<div class="spz-form-wrap">
						<div class="content-section">
							${formData.contentSuperHeading.replace(/\s/g, "").length !== 0
                        ? `<div class="content-superheading">${formData.contentSuperHeading}</div>`
                        : ""
                    }
							${formData.contentHeading.replace(/\s/g, "").length !== 0
                        ? `<h1 class="content-heading">${formData.contentHeading}</h1>`
                        : ""
                    }
							<div class="spz-features-wrap">
	              ${formData.features.length > 0
                        ? formData.features
                            .map((item) => {
                                return `<div class="feature-item">
												<img src="${item.checkmarkImage}" alt="checkmark" />
												<span>${item.featureItemContent}</span>
											</div>`;
                            }).join("")
                        : ""
                    }
	            </div>
							<div class="middle-arrow-image">
								${formData.ArrowImage.length !== 0
                        ? `<img src="${formData.ArrowImage[0].url}" alt="${formData.ArrowAlt}" />`
                        : ""
                    }
							</div>
						</div>
						<div class="spz-triage-wrap">
							<div class="questions-progress">
								${triageData.length !== 0 && triageData.map((item, index) => `<div class="progress-item ${index === 0 ? 'active' : ''}"></div>`).join('')}
								<div class="progress-item"></div>
							</div>
							<h2 class="form-heading">Get a Demo</h2>
							<div class="questions-wrap">
								${triageData.length !== 0 && triageData.map((item, index) => {
                        return `<div class="question-item question-${index + 1} ${index !== 0 ? 'spz-hidden' : ''}">
											<div class="question-heading">${item.questionHeading}</div>
											<div class="answers-wrap">
													${item.answers && item.answers.map((itemm, indexx) => {
                            const sanitizedQuestionHeading = item.questionHeading.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-');
                            return `<div class="answer-item">
																	<input type="radio" name="${sanitizedQuestionHeading}" value="${itemm.answerFormValue}">
																	<div class="answer-content">
																			<div class="answer-checkbox"><span></span></div>
																			${itemm.answerImage && itemm.answerImage.length !== 0 ? `<img src="${itemm.answerImage}" class="answer-image" alt="${itemm.answerText}"/>` : ``}
																			<div class="answer-text">${itemm.answerText}</div>
																			${itemm.answerDesc && itemm.answerDesc.length !== 0 ? `<div class="answer-desc">${itemm.answerDesc}</div>` : ``}
																	</div>
															</div>`;
                        }).join('')}
													<div class="step-error"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1724831150/bonterra/1002/Helper_container.svg" alt="Error Icon">Please select an option.</div>
											</div>
											<div class="next-question">Next</div>
									</div>`;
                    }).join('')}
								<div class="question-form spz-hidden spz-form-wrap"></div>
							</div>
						</div>
				</div>
				${typeof leadinglogoSection !== 'undefined' ?
                        `<div class="spz-Leading-Logos">
						<div class="spz-Leading-Logos-wrapper">
							${LeadingLogoData.map(item => `
								${item.leadinglogosheading ? `<h5 class="spz-heading">${item.leadinglogosheading}</h5>` : ''}
								<div class="spz-logos">
									${item.leadinglogos.map(logo => logo.logo ? `<img src="${logo.logo}" class="answer-image" alt="${logo.logoalt}"/>` : '').join('')}
								</div>
							`).join('')}
						</div>
					</div>`
                        : ``}
				</div>`;
                if (document.querySelectorAll('.spz-shortform-baseline').length == 0) {
                    document.querySelector(heroSelector).insertAdjacentHTML(whereToPut, formTemplate);
                }
                document.querySelector('.spz_1002 #header .site-branding__logo img').src = "//res.cloudinary.com/spiralyze/image/upload/v1725601232/bonterra/1001/bonterra-logo_1.svg";

                const footerTemplate = `${typeof footer !== 'undefined' ?
                    `<div class="spz-footer">
						<div class="spz-footer-wrapper">
							${FooterData.map(item => `
								${item.copyrightcontent ? `<h6 class="spz-copyright">${item.copyrightcontent}</h6>` : ''}
								<div class="footer-menu">
									${item.footerlinks.map(link => `<div class="menu-item"><a href="${link.url}">${link.text}</a></div>`).join('')}
								</div>
							`).join('')}
						</div>
					</div>`
                    : ``}
				`;

                var check_footer = setInterval(function () {
                    if (document.querySelector(footerSelector) !== null) {
                        clearInterval(check_footer);
                        document.querySelector(footerSelector).insertAdjacentHTML(whereToPut, footerTemplate);
                    }
                }, 100);

                // Check if the user has already submitted the form in this session
                if (localStorage.getItem('formSubmitted')) {
                    document.body.classList.add('repeat-user');
                    const items = document.querySelectorAll('.progress-item');
                    items.forEach((item, i) => {
                        item.classList.remove('active'); // Remove default active class
                        item.classList.add(i < items.length - 1 ? 'completed' : 'active');
                    });
                }

                // Pre-check options for step 1 and step 2
                ['Which-best-describes-you', 'How-we-can-help'].forEach(name => {
                    const savedValue = localStorage.getItem(name);
                    if (savedValue) {
                        const inputToCheck = document.querySelector(`.answer-item input[name="${name}"][value="${savedValue}"]`);
                        if (inputToCheck) inputToCheck.checked = true;
                    }
                });
                // Store selected values in local storage and handle error state removal
                ['Which-best-describes-you', 'How-we-can-help'].forEach(name => {
                    document.querySelectorAll(`.answer-item input[name="${name}"]`).forEach(item => {
                        item.addEventListener('change', e => {
                            localStorage.setItem(name, e.target.value);
                            const stepContent = e.target.closest('.answers-wrap');
                            if (stepContent?.classList.contains('error')) stepContent.classList.remove('error');
                        });
                    });
                });
                // Function to pre-fill form select fields based on stored values
                const prefillSelectFields = () => {
                    ['Industry', 'capability'].forEach(field => {
                        const value = localStorage.getItem(field === 'Industry' ? 'Which-best-describes-you' : 'How-we-can-help');
                        if (value) {
                            const select = document.querySelector(`select[name="${field}"]`);
                            if (select) select.value = value;
                        }
                    });
                };

                //Handle next question navigation and validation
                document.querySelectorAll('.next-question').forEach((item, index) => {
                    item.addEventListener('click', (e) => {
                        const stepContent = e.target.closest('.question-item').querySelector('.answers-wrap');
                        if (Array.from(stepContent.querySelectorAll('input')).some(checkbox => checkbox.checked)) {
                            item.parentElement.classList.add('spz-hidden');
                            item.parentElement.nextElementSibling.classList.remove('spz-hidden');
                            const active = document.querySelector('.progress-item.active');
                            active.classList.replace('active', 'completed');
                            active.nextElementSibling.classList.add('active');
                            // Call prefill function to ensure form fields are filled when step is visible
                            prefillSelectFields();
                        } else {
                            stepContent.classList.add('error');
                        }
                    })
                })

                // if (document.querySelector(formUniqueSelector)) {
                const formLoaded = setInterval(() => {
                    if (document.querySelector(formUniqueSelector) && document.querySelectorAll(`${formUniqueSelector} input`).length > 0) {
                        clearInterval(formLoaded);
                        document.querySelector('.question-form').appendChild(document.querySelector(formUniqueSelector));
                        console.log('form loaded');
                        formModify();
                        prefillSelectFields(); // Call prefill function initially in case fields are visible on load
                    }
                });
                // }
            }

            addBaseline(heroContent, position, triageData, formUniqueSelector, heroSelector, LeadingLogoData, footerSelector, FooterData);

            function formModify() {
                // Unwrap all child elemnts of mktoFormRow
                var mktoForm = document.querySelector('.spz_1002 .spz-triage-wrap form.mktoForm');
                var mktoFormRows = document.querySelectorAll('.spz_1002 .spz-triage-wrap form.mktoForm .mktoFormRow');
                mktoFormRows.forEach(function (row) {
                    while (row.firstChild) {
                        mktoForm.insertBefore(row.firstChild, row);
                    }
                    row.remove();
                });
                // Add class in mktoFormRow using count
                var form_fields = document.querySelectorAll('.spz_1002 .spz-triage-wrap form.mktoForm .mktoFormCol');
                for (var i = 0; i < form_fields.length; i++) {
                    var dynamicClass = 'field-' + (i + 1);
                    form_fields[i].classList.add(dynamicClass);
                }
                // Remove Placeholder
                var all_inputs = document.querySelectorAll('.spz_1002 .spz-triage-wrap form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz_1002 .spz-triage-wrap form.mktoForm .mktoFormCol .mktoFieldWrap select');
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
                // Change Field Positions
                var email_field = document.querySelector('.spz_1002 .spz-triage-wrap form.mktoForm .mktoFormCol.field-3');
                var orgname_field = document.querySelector('.spz_1002 .spz-triage-wrap form.mktoForm .mktoFormCol.field-6');
                email_field.before(orgname_field);
                // On input focus add class on closest parent field class
                function focusFields() {
                    document.querySelectorAll(`.spz_1002 .spz-triage-wrap form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
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

                document.querySelector('.spz_1002 .spz-triage-wrap form.mktoForm .mktoButtonRow button.mktoButton').addEventListener('click', function (event) {
                    document.querySelectorAll(`.spz_1002 .spz-triage-wrap form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (elem) {
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

                MktoForms2.whenReady(function (form) {
                    form.onSuccess(function (values, followUpUrl) {
                        // This code runs after a successful form submission
                        localStorage.setItem('formSubmitted', 'true');
                    });
                });

            }
        }
    }
});