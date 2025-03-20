(function () {
    const additionalSection = {
        socialProofLogos: {
            socialProofHeading: "Trusted by 50% of the Fortune 500",
            socialProofImages: [
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1742240097/sailpoint/3002/logo_01.svg",
                    imgAlt: "AES",
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1742240096/sailpoint/3002/logo_02.svg",
                    imgAlt: "GM",
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1742240096/sailpoint/3002/logo_03.svg",
                    imgAlt: "Hershey",
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1742240097/sailpoint/3002/logo_04.svg",
                    imgAlt: "Paccar",
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1742240097/sailpoint/3002/logo_05.svg",
                    imgAlt: "The Home Depot",
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1742240097/sailpoint/3002/logo_06.svg",
                    imgAlt: "Legal & General",
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1742240097/sailpoint/3002/logo_07.svg",
                    imgAlt: "The Salvation Army",
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1742240097/sailpoint/3002/logo_08.svg",
                    imgAlt: "Vodafone",
                },

            ]
        },
    }

    function createTest() {
        let bodyLoaded = setInterval(function () {
            const body = document.querySelector('body');
            if (body) {
                clearInterval(bodyLoaded);
                if (!document.body.classList.contains('spz_3002')) {
                    removeSpecificCookieValue('SPZ_3002', 'SPZ_3002_truecontrol');
                    document.body.classList.add('spz_3002');
                    waitForElm('.spz_3002 #mktoForm_1017.mktoForm .disclaimer').then(() => {
                        let spzFormInterval = setInterval(() => {
                            if (document.querySelector('.spz_3002 .hero .hero__container .hero__content') && document.querySelectorAll('.spz-form-container').length == 0 && document.querySelector('.spz_3002 #page-container .flex.min-h-screen')) {
                                document.querySelector('.spz_3002 #page-container .flex.min-h-screen').insertAdjacentHTML('beforeend', `<div class="spz-form-container"><div class="spz-form-inner"><div class="spz-form-content"><div class="spz-form-title">Get live demo</div><div id="demo_submit" style="display: none;"><h3 style="text-align: center;">Thank you!</h3><h4 style="text-align: center;">A representative will reach out to you shortly.</h4></div><a href="javascript:;" class="spz-close-modal"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M18 18L6 6" stroke="#415364" stroke-width="2" stroke-linecap="round"/>
                                </svg></a><form id="mktoForm_1018" class="w-full mktoForm"></form></div></div></div>`);

                                loadForm('626-LTO-177', 'validFormName', 'https://www.sailpoint.com/products/identity-security-cloud', 'jQuery37109196959211333955_1741019594770', '1741019594772');
                            }

                            heroUpdate();

                            if (document.querySelectorAll('#mktoForm_1018.mktoForm .mktoFormRow.row_Email').length == 0) {
                                formModify();
                                hiddenValue('SPZ_3002', 'SPZ_3002_variant');
                            }
                        }, 500);
                        setTimeout(function () {
                            clearInterval(spzFormInterval);
                        }, 5000);
                    });

                } else {
                    if (document.body.classList.contains('spz_3002')) {
                        removeSpecificCookieValue('SPZ_3002', 'SPZ_3002_truecontrol');
                        hiddenValue('SPZ_3002', 'SPZ_3002_variant');
                    }
                }
            }
        });
    }

    function heroUpdate() {
        if (document.querySelectorAll('.spz_3002 #page-container  a.redirect-to-demo').length == 0 && document.querySelector('.spz_3002 .hero .hero__container .hero__content-wrap') && document.querySelector('.spz_3002 #page-container .flex.min-h-screen')) {
            document.querySelector('.spz_3002 .hero .hero__container .hero__content-wrap').insertAdjacentHTML('beforeend', `<div class="hero__short-desc">Book your live demo of SailPoint&#8217;s identity security software to see how organizations like yours have:</div><ul class="hero__list"><li>Reduced staff onboarding from 10 days to 4 hours</li><li>Cut manually provisioned support tickets by 40%</li><li>Slashed time to provision new hires from 14 hours to 2.5 minutes</li></ul><div class="spz-email">
					 <div class="form-group-wrapper">
							<div class="form-group-spz">
								<input type="email" name="email" class="form-field-spz email-hero-spz" placeholder=" " />
								<label class="form-label-spz">Email</label>
							</div>
							<a href="javascript:;" id="hero-copy-url" class="hero-btn btn btn--hotpink redirect-to-demo spz_tracking_3002">
								<span>Get a demo</span> 
							</a>
					</div>
				</div>`);

            //wait for .email-hero-spz to load and then add event listener 
            waitForElm('.spz_3002 .email-hero-spz').then(() => {
                //check all the evenet listener on the email field
                document.querySelector('.spz_3002 .email-hero-spz').addEventListener('input', function () {
                    if (this.value) {
                        this.closest('.form-group-wrapper').classList.add('spz-input-filled');
                    } else {
                        this.closest('.form-group-wrapper').classList.remove('spz-input-filled');
                    }
                });
            });

            if (document.querySelectorAll('.social-proof-logos').length == 0)
                document.querySelector('.spz_3002 .hero').insertAdjacentHTML('beforeend', `${typeof additionalSection.socialProofLogos !== 'undefined' ? `<div class="social-proof-logos">
                              <div class="social-proof-heading">${additionalSection.socialProofLogos.socialProofHeading}</div>
                              <div class="social-proof-images">
                                ${additionalSection.socialProofLogos.socialProofImages.length > 0 ? additionalSection.socialProofLogos.socialProofImages.map((item, index) => {
                    return `<img src="${item.url}" alt="${item.imgAlt}">`;
                })
                        .join("") + additionalSection.socialProofLogos.socialProofImages.map((item, index) => {
                            return `<img src="${item.url}" class="repeat-img" alt="${item.imgAlt}">`;
                        })
                            .join("")
                        : ""}
                              </div>
                            </div>`
                    : ``} `);

            document.querySelector('.spz_3002 .hero .hero__container .hero__image-wrapper').innerHTML = `<picture><source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3002/image_mobile.webp"> <img alt="Identity Security Cloud Hero"  class="hero__image h-auto object-cover w-full" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3002/image_desktop.webp"></picture>`;

            waitForElm('.spz_3002 .social-proof-logos img').then(() => {
                const marqueeContainer = document.querySelector('.social-proof-images');

                // Check if marqueeContainer exists (only below 1200px)
                if (marqueeContainer) {

                    const scrollSpeed = 2; // Adjust scrolling speed (pixels per interval)
                    const scrollInterval = 30; // Adjust scrolling interval (milliseconds)

                    let currentPosition = 0;
                    let autoScrollEnabled = true; // Flag for auto-scrolling

                    setInterval(() => {
                        if (autoScrollEnabled) { // Only scroll automatically if enabled
                            currentPosition += scrollSpeed;
                            marqueeContainer.scrollLeft = currentPosition;

                            // Reset scroll position when it reaches the end
                            if (currentPosition >= marqueeContainer.scrollWidth - marqueeContainer.offsetWidth) {
                                currentPosition = 0;
                            }
                        }
                    }, scrollInterval);

                    let startX;
                    let scrollLeft;
                    let isDragging = false; // Flag for dragging state

                    marqueeContainer.addEventListener('mousedown', (e) => {
                        startX = e.clientX;
                        scrollLeft = marqueeContainer.scrollLeft;
                        isDragging = true;
                        autoScrollEnabled = false; // Disable auto-scroll while dragging
                        marqueeContainer.style.cursor = 'grabbing'; // Visual feedback
                    });

                    marqueeContainer.addEventListener('mousemove', (e) => {
                        if (isDragging) {
                            const currentX = e.clientX;
                            const deltaX = currentX - startX;
                            marqueeContainer.scrollLeft = scrollLeft - deltaX;
                            currentPosition = marqueeContainer.scrollLeft; // Keep sync with auto scroll
                        }
                    });

                    marqueeContainer.addEventListener('mouseup', () => {
                        isDragging = false;
                        autoScrollEnabled = true; // Re-enable auto-scroll after dragging
                        marqueeContainer.style.cursor = 'grab'; // Reset cursor
                    });

                    marqueeContainer.addEventListener('mouseleave', () => {
                        isDragging = false;
                        autoScrollEnabled = true; // Re-enable auto-scroll if mouse leaves
                        marqueeContainer.style.cursor = 'grab'; // Reset cursor
                    });

                    // Touch Events (similar logic as mouse events)
                    marqueeContainer.addEventListener('touchstart', (e) => {
                        startX = e.touches[0].clientX;
                        scrollLeft = marqueeContainer.scrollLeft;
                        isDragging = true;
                        autoScrollEnabled = false;
                    });

                    marqueeContainer.addEventListener('touchmove', (e) => {
                        if (isDragging) {
                            const currentX = e.touches[0].clientX;
                            const deltaX = currentX - startX;
                            marqueeContainer.scrollLeft = scrollLeft - deltaX;
                            currentPosition = marqueeContainer.scrollLeft;
                            e.preventDefault(); // Prevent default touch behavior
                        }
                    });

                    marqueeContainer.addEventListener('touchend', () => {
                        isDragging = false;
                        autoScrollEnabled = true;
                    });

                }
            });
        }
    }

    function formModify() {
        if (document.querySelector('.spz_3002 #mktoForm_1018.mktoForm input[name="Salutation"]')) {
            document.querySelector('.spz_3002 #mktoForm_1018.mktoForm input[name="Salutation"]').closest(".mktoFormRow").classList.add("hidden")
        }

        if (document.querySelector('.spz_3002 #mktoForm_1018.mktoForm #Country')) {
            // select united states as default country
            document.querySelector('.spz_3002 #mktoForm_1018.mktoForm #Country').value = "United States";
            document.querySelector('.spz_3002 #mktoForm_1018.mktoForm #Country option[value="United States"]').setAttribute('selected', 'selected');

            setTimeout(() => {
                document.querySelector('.spz_3002 #mktoForm_1018.mktoForm #Country').dispatchEvent(new Event('change'));
            }, 500);
        }

        // Add class in mktoField using the name attribute
        var form_fields = document.querySelectorAll('.spz_3002 #mktoForm_1018.mktoForm .mktoFormRow');
        for (var i = 0; i < form_fields.length; i++) {
            if (form_fields[i].querySelector('.mktoField[name]:not([type="hidden"])')) {
                var dynamicClass = form_fields[i].querySelector('.mktoField[name]:not([type="hidden"])').getAttribute('name');
                form_fields[i].classList.add('row_' + dynamicClass);
            }
            else {
                if (!form_fields[i].querySelector('.mktoPlaceholderGlobal_Opt_in__c')) {
                    if (i <= 12) {
                        form_fields[i].classList.add('hidden');
                    }
                }
                else {
                    form_fields[i].classList.add('row_Global_Opt_in__c');
                }
            }
        }

        // Change Label Text
        ['#LblCountry:Country', '#LblState:State', '#LblreasonforInquiry:Reason for inquiry'].forEach(item => {
            const [id, text] = item.split(':');
            waitForElm(`.spz_3002 #mktoForm_1018.mktoForm .mktoFieldWrap label.mktoLabel${id}`).then(label => {
                label.innerHTML = (label.querySelector('.mktoAsterix')?.outerHTML || '') + text;
            });
        });

        // Change Field Position
        const email_field = document.querySelector('.spz_3002 #mktoForm_1018.mktoForm .row_Email');
        const last_name_field = document.querySelector('.spz_3002 #mktoForm_1018.mktoForm .row_LastName');
        const inquiry_field = document.querySelector('.spz_3002 #mktoForm_1018.mktoForm .row_reasonforInquiry');
        const comment_field = document.querySelector('.spz_3002 #mktoForm_1018.mktoForm .row_contactFormComments');
        const disclaimer = document.querySelector('.spz_3002 #mktoForm_1018.mktoForm .disclaimer');
        const num_of_emp_field = document.querySelector('.spz_3002 #mktoForm_1018.mktoForm .row_Number_of_Employees__c');
        const disclaimer_field = document.querySelector('.spz_3002 #mktoForm_1018.mktoForm .mktoCaptchaDisclaimer');
        const button = document.querySelector('.spz_3002 #mktoForm_1018.mktoForm .mktoButtonRow');

        if (button && disclaimer_field) {
            num_of_emp_field.classList.add('spz-full-width');
            comment_field.insertAdjacentElement('beforebegin', num_of_emp_field);


        }

        let checkDisclaimer = setInterval(() => {
            if (document.querySelector('.spz_3002 #mktoForm_1017.mktoForm .mktoButtonRow') && document.querySelectorAll('.spz_3002 #mktoForm_1017.mktoForm .disclaimer').length == 0) {
                document.querySelector('.spz_3002 #mktoForm_1017.mktoForm .mktoButtonRow').insertAdjacentHTML('afterend', `<p class="disclaimer mt-8 text-sm">By submitting this form, you understand and agree that use of SailPoint&#8217;s website is subject to <a href="/privacy" class="underline underline-offset-[3px] hover:no-underline">SailPoint Technologies&#8217; Privacy Statement</a>.</p>`);
            }

            if (document.querySelector('.spz_3002 #mktoForm_1018.mktoForm .disclaimer') && document.querySelectorAll('.spz_3002 #mktoForm_1018.mktoForm .disclaimer').length == 2) {
                document.querySelector('.spz_3002 #mktoForm_1018.mktoForm .disclaimer').remove();
            }
        }, 200);

        setTimeout(() => {
            clearInterval(checkDisclaimer);
        }, 5000);


        if (document.querySelector('.spz_3002 #mktoForm_1018.mktoForm #contactFormComments')) {
            document.querySelector('.spz_3002 #mktoForm_1018.mktoForm #contactFormComments').value = 'Get live demo';
        }


        waitForElm(`.spz_3002 #mktoForm_1018.mktoForm .mktoFieldWrap select#Country`).then((elm) => {
            setTimeout(() => {
                document.querySelectorAll(`.spz_3002 #mktoForm_1018.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
                    if (el && el.value && (el.value != '')) {
                        el.closest('.mktoFieldWrap').classList.add('filled');
                    }
                });
            }, 1000);
        });

        // waitForElm('.spz_3002 #mktoForm_1018.mktoForm .mktoFormRow.row_Global_Opt_out__c .mktoCheckboxList label').then(label => {
        //     label.textContent = "Uncheck the box to discontinue receiving email communications from SailPoint.";
        // });

        // On input focus add class on closest parent field class
        function focusFields() {
            // Attach events using event delegation
            const form = document.querySelector('.spz_3002 #mktoForm_1018.mktoForm');
            if (!form) return;

            form.addEventListener('focus', function (event) {
                const el = event.target;
                if (el.classList.contains('mktoField')) {
                    el.closest('.mktoFieldWrap').classList.add('active', 'typing');
                    checkAllFields();
                }
            }, true);

            form.addEventListener('blur', function (event) {
                const el = event.target;
                if (el.classList.contains('mktoField')) {
                    el.closest('.mktoFieldWrap').classList.remove('active', 'typing');
                    checkAllFields();
                }
            }, true);

            form.addEventListener('input', function (event) {
                const el = event.target;
                if (el.classList.contains('mktoField')) {
                    checkAllFields();
                }
            });

            form.addEventListener('change', function (event) {
                const el = event.target;
                if (el.classList.contains('mktoField')) {
                    checkAllFields();
                }
            });

            // Function to reapply functionality for dynamic fields
            function reapplyStateFieldListeners() {
                const stateField = document.querySelector('.spz_3002 #mktoForm_1018.mktoForm .mktoFieldWrap .mktoField#State');
                if (stateField) {
                    stateField.addEventListener('focus', function () {
                        stateField.closest('.mktoFieldWrap').classList.add('active', 'typing');
                        checkAllFields();
                    });
                    stateField.addEventListener('blur', function () {
                        stateField.closest('.mktoFieldWrap').classList.remove('active', 'typing');
                        checkAllFields();
                    });
                    stateField.addEventListener('input', function () {
                        checkAllFields();
                    });
                    stateField.addEventListener('change', function () {
                        checkAllFields();
                    });
                }
            }

            // Reapply listeners whenever the state field is dynamically updated
            const observer = new MutationObserver(() => {
                reapplyStateFieldListeners();
            });

            const container = document.querySelector('.spz_3002 #mktoForm_1018.mktoForm');
            if (container) {
                observer.observe(container, { childList: true, subtree: true });
            }
        }
        focusFields();
        function checkAllFields() {
            const fields = document.querySelectorAll('.spz_3002 #mktoForm_1018.mktoForm .mktoField');
            const timeBuffer = setInterval(() => {
                fields.forEach(field => {
                    const fieldWrap = field.closest('.mktoFieldWrap');
                    if (fieldWrap) {
                        // Check for error
                        const errorElement = fieldWrap.querySelector('.mktoError');
                        if (errorElement && errorElement.style.display !== 'none') {
                            fieldWrap.classList.add('error');
                        } else {
                            fieldWrap.classList.remove('error');
                        }

                        // Check if the field is filled
                        if (field.value && field.value.trim() !== '') {
                            fieldWrap.classList.add('filled');
                        } else {
                            fieldWrap.classList.remove('filled');
                        }
                    }
                });

                if (document.querySelectorAll('.spz_3002 #mktoForm_1017.mktoForm .disclaimer').length == 0) {
                    document.querySelector('.spz_3002 #mktoForm_1017.mktoForm .mktoButtonRow').insertAdjacentHTML('afterend', `<p class="disclaimer mt-8 text-sm">By submitting this form, you understand and agree that use of SailPoint&#8217;s website is subject to <a href="/privacy" class="underline underline-offset-[3px] hover:no-underline">SailPoint Technologies&#8217; Privacy Statement</a>.</p>`);
                }

                if (document.querySelectorAll('.spz_3002 #mktoForm_1018.mktoForm .disclaimer').length == 2) {
                    document.querySelector('.spz_3002 #mktoForm_1018.mktoForm .disclaimer').remove();
                }
            }, 100);

            setTimeout(() => {
                clearInterval(timeBuffer);
            }, 1000);
        }

        if (document.querySelector('.spz_3002 #mktoForm_1018.mktoForm select#Country')) {
            document.querySelector('.spz_3002 #mktoForm_1018.mktoForm select#Country').addEventListener('change', () => {
                const stateRow = document.querySelector('.spz_3002 #mktoForm_1018.mktoForm .mktoFormRow.row_Country + .mktoFormRow');
                const optOutRow = document.querySelector('.spz_3002 #mktoForm_1018.mktoForm .mktoFormRow.row_reasonforInquiry');
                const countryRow = document.querySelector('.spz_3002 #mktoForm_1018.mktoForm .mktoFormRow.row_Country');

                // waitForElm('.spz_3002 #mktoForm_1018.mktoForm .mktoFormRow.row_Global_Opt_out__c .mktoCheckboxList label').then(label => {
                //     label.textContent = "Uncheck the box to discontinue receiving email communications from SailPoint.";
                // });

                document.querySelector('.spz_3002 #mktoForm_1018.mktoForm select#State') ? (document.querySelector('.spz_3002 #mktoForm_1018.mktoForm label#LblState').textContent = "State", stateRow.classList.remove('hidden'), countryRow.classList.remove('spz-full-width')) : (stateRow.classList.add('hidden'), countryRow.classList.add('spz-full-width'));
            });
        }
    }

    function loadForm() {
        //setintervel to check the form is loaded or not
        var formInterval = setInterval(function () {
            if (document.querySelector('script[src*="/forms2/js/forms2.min.js"]') && window.MktoForms2) {
                clearInterval(formInterval);
                window.MktoForms2.loadForm("//go.sailpoint.com", "626-LTO-177", "".concat(1018));

                //check mktoforms2 library is loaded or not
                if (typeof MktoForms2 !== 'undefined') {
                    MktoForms2.whenReady(function (form) {
                        form.onSuccess(function (values, followUpUrl) {
                            document.body.classList.add('form-submit');
                            form.getFormElem().hide();
                            document.querySelector('.spz-form-container .spz-form-content .spz-form-title').style.display = 'none';
                            document.getElementById('demo_submit').style.display = 'block';

                            //return false to prevent the submission handler from taking the lead to the follow up url.

                            return false;
                        });

                        if (document.body.classList.contains('spz-form-loaded')) {
                            document.body.classList.remove('spz-form-loaded');
                        }
                    });
                }
            }
        }, 100);
    }

    //click event listener
    document.body.addEventListener('click', function (e) {
        if (e.target.closest('.redirect-to-demo')) {
            document.body.classList.add('spz-show-modal');
            document.querySelector('html').classList.add('spz-no-scroll');
            //take the value of .email-hero-spz and set it to the email field in the form
            var email = document.querySelector('.email-hero-spz');
            var emailField = document.querySelector('.spz_3002 #mktoForm_1018.mktoForm .row_Email input');
            if (email && email.value && emailField) {
                emailField.value = email.value;
                emailField.closest('.mktoFieldWrap').classList.add('filled');
            }
        }
        if (e.target.closest('.spz-close-modal')) {
            e.stopPropagation();
            document.body.classList.remove('spz-show-modal');
            document.querySelector('html').classList.remove('spz-no-scroll');
        }

        if (e.target.closest('#mktoForm_1018 .mktoButton')) {
            const fields = document.querySelectorAll('.spz_3002 form.mktoForm .mktoField');
            const timeBuffer = setInterval(() => {
                fields.forEach(field => {
                    const fieldWrap = field.closest('.mktoFieldWrap');
                    if (fieldWrap) {
                        // Check for error
                        const errorElement = fieldWrap.querySelector('.mktoError');
                        if (errorElement && errorElement.style.display !== 'none') {
                            fieldWrap.classList.add('error');
                        } else {
                            fieldWrap.classList.remove('error');
                        }

                        // Check if the field is filled
                        if (field.value && field.value.trim() !== '' && field.type !== 'checkbox') {
                            fieldWrap.classList.add('filled');
                        } else {
                            fieldWrap.classList.remove('filled');
                        }
                    }
                });
            }, 200);


            setTimeout(() => {
                clearInterval(timeBuffer);
            }, 5000);
        }
    });

    function removeTest() {
        if (document.querySelector('.spz_3002 .spz-form-container')) {
            document.querySelector('.spz_3002 .spz-form-container').remove();
        }
        if (document.querySelector('.spz_3002 .social-proof-logos')) {
            document.querySelector('.spz_3002 .social-proof-logos').remove();
        }
        if (document.querySelector('.spz_3002 .spz-email')) {
            document.querySelector('.spz_3002 .spz-email').remove();
            document.querySelector('.spz_3002 .hero__short-desc').remove();
            document.querySelector('.spz_3002 .hero__list').remove();
        }
        if (document.querySelector('.spz_3002 .redirect-to-demo')) {
            document.querySelectorAll('.spz_3002 .redirect-to-demo').forEach(function (el) {
                el.remove();
            });
        }
        setTimeout(() => {
            if (document.querySelector('.spz_3002')) {
                document.body.classList.remove("spz_3002");
            }
        }, 200);
    }

    function removeSpecificCookieValue(targetName, targetValue) {
        ['HiddenFieldName3002', 'HiddenFieldValue3002'].forEach((key, i) => {
            var values = getCookie(key)?.split(',').filter(v => v !== (i ? targetValue : targetName)).join(',');
            setCookie(key, values || '', 1);
        });
    }

    // Do not touch below hidden field code for any Experiment Start
    function hiddenValue(currentHiddenFieldName, currentHiddenFieldValue) {
        var ExistingHiddenFieldName = getCookie('HiddenFieldName3002');
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValue3002');

        if (!ExistingHiddenFieldName) {
            setCookie('HiddenFieldName3002', currentHiddenFieldName, 1);
            setCookie('HiddenFieldValue3002', currentHiddenFieldValue, 1);
        } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
            setCookie('HiddenFieldName3002', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
            setCookie('HiddenFieldValue3002', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
        }

        setHiddenFieldValue();
    }

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=sailpoint.com;";
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

    function setHiddenFieldValue() {
        var spz_cro_Interval = setInterval(function () {
            var intellimizeValue = document.querySelectorAll('form.mktoForm input[name="intellimize1"]');
            intellimizeValue.forEach(function (intellimize1) {
                if (intellimize1) {
                    clearInterval(spz_cro_Interval);
                    var ExistingHiddenFieldValue = getCookie('HiddenFieldValue3002');
                    //check if hidden field value is empty then only set the value else set the value with , seperated
                    if (intellimize1.value == '') {
                        intellimize1.value = ExistingHiddenFieldValue;
                    }
                    else {
                        if (!intellimize1.value.includes(ExistingHiddenFieldValue)) {
                            intellimize1.value = intellimize1.value + ',' + ExistingHiddenFieldValue;
                        }
                    }
                }
            });
        });

        //click event listener
        document.addEventListener('click', function (e) {
            if (e.target.closest('form.mktoForm .mktoButton')) {
                //inject current time and date in EST timezone into .intellimize2 hidden field
                var d = new Date();
                var n = d.toLocaleString('en-US', { timeZone: 'America/New_York' });
                var int2 = e.target.closest('.mktoForm').querySelector('input[name="intellimize2"]');
                if (int2)
                    int2.value = n;
            }
        });
    }
    // Do not touch below hidden field code for any Experiment over

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
        url = location.href;
        urlCheck(url);
        if (document.querySelector('.spz_3002')) {
            document.body.classList.remove("spz_3002");
        }
    });
    var url = location.href;
    urlCheck(url);

    function urlCheck(url) {
        if (location.pathname === "/products/identity-security-cloud") {
            createTest();
        } else {
            removeTest();
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
            observer.observe(document, { attributes: true, childList: true, subtree: true, characterData: true });
        });
    }
})();