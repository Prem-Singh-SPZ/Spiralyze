let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz_1004')) {
            body.classList.add('spz_1004');

            let counter = 0;
            const heroSelector = `.spz_1004 .main-content .layout .layout__region`;
            const footerSelector = `.spz_1004 footer.site-footer`;
            const position = "beforebegin";
            const formSelector = `#mktoForm_1024`;
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
            function addBaseline(formData, whereToPut, formSelector, heroSelector, leadinglogoSection, footerSelector, footer) {
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
                          <div class="spz-form-section">
                  ${formData.customHTMLBefore.replace(/\s/g, "").length !== 0
                        ? formData.customHTMLBefore
                        : ""
                    }
                  <div class="the-form"></div>
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
                document.querySelector(heroSelector).insertAdjacentHTML(whereToPut, formTemplate);
                document.querySelector('.spz_1004 #header .site-branding__logo img').src = "//res.cloudinary.com/spiralyze/image/upload/v1725601232/bonterra/1001/bonterra-logo_1.svg";
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
                document.querySelector(footerSelector).insertAdjacentHTML(whereToPut, footerTemplate);
                let formLoaded = setInterval(() => {
                    if (document.querySelector(formSelector) && document.querySelectorAll(`${formSelector} input`).length > 0) {
                        clearInterval(formLoaded)
                        document.querySelector(".spz-form-wrap .the-form").appendChild(document.querySelector(formSelector));
                        formModify();
                    }
                })
            }
            addBaseline(heroContent, position, formSelector, heroSelector, LeadingLogoData, footerSelector, FooterData);
            function formModify() {
                // Unwrap all child elemnts of mktoFormRow
                var mktoForm = document.querySelector('.spz_1004 .main-content .spz-shortform-baseline form.mktoForm');
                var mktoFormRows = document.querySelectorAll('.spz_1004 .main-content .spz-shortform-baseline form.mktoForm .mktoFormRow');
                mktoFormRows.forEach(function (row) {
                    while (row.firstChild) {
                        mktoForm.insertBefore(row.firstChild, row);
                    }
                    row.remove();
                });
                // Add class in mktoFormRow using count
                var form_fields = document.querySelectorAll('.spz_1004 .main-content .spz-shortform-baseline form.mktoForm .mktoFormCol');
                for (var i = 0; i < form_fields.length; i++) {
                    var dynamicClass = 'field-' + (i + 1);
                    form_fields[i].classList.add(dynamicClass);
                }
                // Remove Placeholder
                var all_inputs = document.querySelectorAll('.spz_1004 .main-content .spz-shortform-baseline form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz_1004 .main-content .spz-shortform-baseline form.mktoForm .mktoFormCol .mktoFieldWrap select');
                all_inputs.forEach(function (element) {
                    element.removeAttribute('placeholder');
                });
                // Change Label Text
                document.querySelector('label#LblFirstName').textContent = "First Name";
                document.querySelector('label#LblLastName').textContent = "Last Name";
                document.querySelector('label#LblCompany').textContent = "Organization Name";
                document.querySelector('label#LblEmail').textContent = "Email Address";
                document.querySelector('label#LblPhone').textContent = "Phone Number";
                document.querySelector('label#LblIndustry').textContent = "Organization Type";
                document.querySelector('label#LblNumber_of_Employees_Range__c').textContent = "Organization Size";
                document.querySelector('label#Lblcapability').textContent = "What are you looking for?";
                // Change Field Positions
                var email_field = document.querySelector('.spz_1004 .main-content .spz-shortform-baseline form.mktoForm .mktoFormCol.field-3');
                var orgname_field = document.querySelector('.spz_1004 .main-content .spz-shortform-baseline form.mktoForm .mktoFormCol.field-6');
                email_field.before(orgname_field);

                //insert the new field after button
                var mktoFormButton = document.querySelector('.spz_1004 .main-content .spz-shortform-baseline form.mktoForm .mktoButtonRow');

                //null check for mktoFormButton and field should not be already exist
                if (mktoFormButton && !document.querySelector('.spz_1004 .main-content .spz-shortform-baseline form.mktoForm .mktoFormCol.field-did-you-hear-about-us')) {
                    mktoFormButton.insertAdjacentHTML('beforebegin', `<div class="mktoFormCol field-did-you-hear-about-us" style="margin-bottom: 10px;"><div class="mktoFieldWrap"><label id="Lblhear-about-us" for="hear-about-us" class="mktoLabel">How did you hear about us?</label><input id="hear-about-us" name="hear-about-us" type="text" class="mktoField mktoTextField"><div class="spzError"><div id="" role="alert" class="mktoErrorMsg">This field is required.</div></div>`);
                }

                // On input focus add class on closest parent field class
                function focusFields() {
                    document.querySelectorAll(`.spz_1004 .main-content .spz-shortform-baseline form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
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

                document.querySelector('.spz_1004 .main-content .spz-shortform-baseline form.mktoForm .mktoButtonRow button.mktoButton').addEventListener('click', function (event) {
                    let newField = document.querySelector('.spz_1004 .main-content .spz-shortform-baseline form.mktoForm .mktoFormCol.field-did-you-hear-about-us .mktoField');

                    document.querySelectorAll(`.spz_1004 .main-content .spz-shortform-baseline form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (elem) {
                        if (elem == newField && counter > 0) {
                            //add validation for new field
                            if (newField.value == '') {
                                //don't submit the form if any field has error
                                if (document.querySelectorAll('.spz_1004 .main-content .spz-shortform-baseline form.mktoForm .mktoValid:not(#Email)').length >= 7) {
                                    newField.closest('.mktoFieldWrap').classList.add('error');
                                    if (document.querySelector('.spz_1004 .main-content .spz-shortform-baseline form.mktoForm .field-did-you-hear-about-us .error')) {
                                        event.preventDefault();
                                    }
                                }
                            } else {
                                newField.closest('.mktoFieldWrap').classList.remove('error');
                            }
                        }
                        else {
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
                        }
                    });

                    counter++;
                });

                // Function to add .field-error class on closest parent .field class if .error is exist on input
                function checkError(elem) {
                    let newField = document.querySelector('.spz_1004 .main-content .spz-shortform-baseline form.mktoForm .mktoFormCol.field-did-you-hear-about-us .mktoField');

                    if (elem == newField && counter > 0) {
                        if (newField.value == '') {
                            newField.closest('.mktoFieldWrap').classList.add('error');
                        } else {
                            newField.closest('.mktoFieldWrap').classList.remove('error');
                        }
                    }

                    else {
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

                    counter++;
                }
            }
        }
    }
});