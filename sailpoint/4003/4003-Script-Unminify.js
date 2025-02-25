(function () {

  function createTest() {
    let bodyLoaded = setInterval(function () {
      const body = document.querySelector('body');
      if (body) {
        clearInterval(bodyLoaded);
        if (!document.body.classList.contains('SPZ_4003_V1')) {
          removeSpecificCookieValue('SPZ_4003', 'SPZ_4003_truecontrol');
          document.body.classList.add('SPZ_4003_V1');
          hiddenValue('SPZ_4003', 'SPZ_4003_variant');
          waitForElm('.SPZ_4003_V1 .hero').then(() => {
            const template_heroSelector = `.hero`;
            const template_position = "beforebegin"
            const template_formSelector = `form#mktoForm_1016`;
            let eyeBrowTxt = document.querySelector('.hero.hero--gated .hero__eyebrow.eyebrow');
            const contentSuperHeading = eyeBrowTxt && eyeBrowTxt.textContent ? eyeBrowTxt.textContent : `Analyst Report`;
            var contentHeading = ``;
            var contentInnerHTML = ``;
            if (location.href.indexOf('/identity-library/identity-governance-administration') > -1) {
              contentHeading = `2024 Gartner® Market Guide for Identity Governance and Administration`;
              contentInnerHTML = `<p>As digital transformation shifts and erodes the value of legacy perimeter-based security strategies, Gartner®️ notes the increasing need for an identity-first security strategy.</p>
              <p>Access the guide and discover how to:</p>
              <ul>
                <li>Use centralized policies to control access across decentralized, distributed digital assets in a consistent manner.</li><li>Apply adaptive controls throughout the session, not just at login.</li><li>Use contextual data associated with identities and assets to drive dynamic decisions.</li>
              </ul>`;
            } else if (location.href.indexOf('/identity-library/dora-compliance') > -1) {
              contentHeading = `Building Digital Operational Resilience: DORA Compliance Through Enhanced Identity Security`;
              contentInnerHTML = `<p>Legacy identity management systems are not equipped to meet the stringent demands of DORA. A robust identity security solution and strategy is essential for demonstrating DORA compliance.</p>
              <p>Download the IDC report and learn to:</p>
              <ul>
                <li>Strengthen your ICT risk management</li>
                <li>Detect and prevent anomalous activities</li>
                <li>Manage third-party access risks</li>
                <li>Improve resilience in the cloud</li>
              </ul>`;
            } else if (location.href.indexOf('/identity-library/identity-first-security') > -1) {
              contentHeading = `Gartner Identity-First Security Maximizes Cybersecurity Effectiveness`;
              contentInnerHTML = `<p>As digital transformation shifts and erodes the value of legacy perimeter-based securitystrategies, Gartner® notes the increasing need for an identity-first security strategy.</p>
              <p>Access the guide and discover how to:</p>
              <ul>
                <li>Use centralized policies to control access across decentralized, distributed digital assets in a consistent manner.</li>
                <li>Apply adaptive controls throughout the session, not just at login.</li>
                <li>Use contextual data associated with identities and assets to drive dynamic decisions.</li>
              </ul>
              <span class="text-sm">Gartner, Identity-First Security Maximizes Cybersecurity Effectiveness, 7 December 2022, Rebecca Archambault Et Al.<br>GARTNER is a registered trademark and service mark of Gartner, Inc. and/or its affiliates in the U.S. and internationally and is used herein with permission. All rights reserved.</span>`;
            }
            const template_formContent = {
              customHTMLBefore: `Get the report`,
              customHTMLAfter: `This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.`,
            };
            const template_additionalSection = {
              socialProofLogos: {
                socialProofHeading: "Trusted by leading companies",
                socialProofImages: [
                  {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1739783003/sailpoint/4003/logo01.svg",
                    imgAlt: "gm",
                  },
                  {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1734511105/sailpoint/4003/container_4.svg",
                    imgAlt: "HERSHEY",
                  },
                  {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1734511103/sailpoint/4003/container_3.svg",
                    imgAlt: "PACCAR",
                  },
                  {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1734511102/sailpoint/4003/container_2.svg",
                    imgAlt: "PHILIPS",
                  },
                  {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1734511111/sailpoint/4003/container_7.svg",
                    imgAlt: "RWE",
                  },
                  {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1739783003/sailpoint/4003/logo06.svg",
                    imgAlt: "THE HOME DEPOT",
                  },
                  {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1734511109/sailpoint/4003/container_6.svg",
                    imgAlt: "T Mobile",
                  },
                  {
                    url: "https://www.sailpoint.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F5a362452e95485ae6cc63c5ca6ef34f1eccdd24d-71x83.svg%3Fq%3D100%26fit%3Dmax%26auto%3Dformat&w=1920&q=75",
                    imgAlt: "THE SALVATION ARMY",
                  },
                ]
              },
            }
            const template_businessValueSection = {
              businessSuperHeading: `Why SailPoint?`,
              businessHeading: `The core of enterprise security is identity`,
              businessContent: `SailPoint is the leading provider of identity security for the modern enterprise. Through AI-driven identity security, we enable our customers to streamline processes at scale to drive efficiencies and add value.`
            }

            function addBaseline(formData, whereToPut, template_formSelector, template_heroSelector, additionalSection, businessValueSection) {
              const formTemplate = `<section class="spz-hero">
                <div class="spz-form-wrap">
                  <div class="content-section">
                    ${contentSuperHeading ? `<div class="content-superheading">${contentSuperHeading}</div>` : ""}
                    ${contentHeading ? `<div class="content-heading">${contentHeading}</div>` : ""}
                    ${contentInnerHTML ? `<div class="content-text">${contentInnerHTML}</div>` : ""}
                  </div>
                  <div class="spz-form-section">
                    <div class="form-heading">${formData.customHTMLBefore.replace(/\s/g, "").length !== 0 ? formData.customHTMLBefore : ""}</div>
                    <div class="the-form"></div>
                  </div>
                </div>
              </section>
              ${typeof additionalSection.socialProofLogos !== 'undefined' ? `<div class="social-proof-logos">
                <div class="social-proof-heading">${additionalSection.socialProofLogos.socialProofHeading}</div>
                <div class="social-proof-images">
                  ${additionalSection.socialProofLogos.socialProofImages.length > 0 ? additionalSection.socialProofLogos.socialProofImages.map((item, index) => {
                return `<img src="${item.url}" alt="${item.imgAlt}" width="84" height="60">`;
              }).join("") : ""}
                </div>
              </div>` : ``}
              <section class="business-value">
                <div class="business-value-wrap">
                  <div class="content-section">
                    ${businessValueSection.businessSuperHeading ? `<div class="content-superheading">${businessValueSection.businessSuperHeading}</div>` : ""}
                    ${businessValueSection.businessHeading ? `<div class="content-heading">${businessValueSection.businessHeading}</div>` : ""}
                    ${businessValueSection.businessContent ? `<div class="content-text">${businessValueSection.businessContent}</div>` : ""}
                  </div>
                  <div class="vidyard-section"></div>
                </div>
              </section>`;

              let checkVariantHero = setInterval(() => {
                if (document.querySelectorAll('.spz-hero').length == 0) {
                  document.querySelector(template_heroSelector).insertAdjacentHTML(whereToPut, formTemplate);
                }

                setTimeout(() => {
                  clearInterval(checkVariantHero);
                }, 2000);
              });

              let formLoaded = setInterval(() => {
                if (document.querySelector('.SPZ_4003_V1 #mktoForm_1016.mktoForm .mktoFormRow input') && document.querySelector(".spz-form-wrap .the-form")) {
                  clearInterval(formLoaded)
                  document.querySelector(".spz-form-wrap .the-form").appendChild(document.querySelector(template_formSelector));

                  waitForElm('.SPZ_4003_V1 .mkto-wrap + .disclaimer').then(form => {
                    if (document.querySelector(".SPZ_4003_V1 .mktoForm .mktoButtonRow")) {

                      document.querySelector(".SPZ_4003_V1 .mktoForm .mktoButtonRow").insertAdjacentElement('afterend', document.querySelector('.SPZ_4003_V1 .mkto-wrap +  .disclaimer'));
                    }
                  });

                  waitForElm('.SPZ_4003_V1 .mktoForm .disclaimer').then(form => {
                    if (document.querySelector(".SPZ_4003_V1 .mktoForm .mktoButtonRow")) {

                      document.querySelector(".SPZ_4003_V1 .mktoForm .mktoButtonRow").insertAdjacentElement('afterend', document.querySelector('.SPZ_4003_V1 .mktoForm .disclaimer'));
                    }
                    // document.querySelector(".spz-form-wrap .the-form")?.appendChild(document.querySelector('.mkto-wrap + .disclaimer')?.cloneNode(true));
                  });
                  // document.querySelector('.SPZ_4003_V1 .spz-form-section form.mktoForm .mktoButtonRow').insertAdjacentHTML('beforebegin', `<div class="form-footer">${formData.customHTMLAfter.replace(/\s/g, "").length !== 0 ? formData.customHTMLAfter : ""}</div>`);
                  formModify();
                }
              });

              function loadVidyardScript(callback) {
                if (window.VidyardV4 && window.VidyardV4.api) { callback(); return; }
                const script = document.createElement("script");
                script.src = "https://play.vidyard.com/embed/v4.js";
                script.async = true;
                script.onload = () => { waitForVidyardAPI(callback); };
                document.head.appendChild(script);
              }
              function waitForVidyardAPI(callback, attempts = 10) {
                if (window.VidyardV4 && window.VidyardV4.api) {
                  callback();
                } else if (attempts > 0) {
                  setTimeout(() => waitForVidyardAPI(callback, attempts - 1), 500);
                }
              }
              function initializeVidyardPlayer() {
                if (!window.VidyardV4 || !window.VidyardV4.api) {
                  return;
                }
                const container = document.querySelector(".business-value .vidyard-section");
                if (!container) {
                  return;
                }
                window.VidyardV4.api.renderPlayer({ uuid: "C6CvYyMyXN8GUs6tiKa2th", container: document.querySelector(".business-value .vidyard-section"), type: "lightbox", v: 4, autoplay: 1 });
              }
              loadVidyardScript(initializeVidyardPlayer);

            }

            waitForElm('.SPZ_4003_V1 .hero').then(() => {
              addBaseline(template_formContent, template_position, template_formSelector, template_heroSelector, template_additionalSection, template_businessValueSection);
            });

            function formModify() {
              // Add class in mktoFormRow using count
              var form_fields = document.querySelectorAll('.SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow');
              for (var i = 0; i < form_fields.length; i++) {
                var dynamicClass = 'field-' + (i + 1);
                form_fields[i].classList.add(dynamicClass);
              }

              // Change Label Text
              ['#LblCountry:Country', '#LblState:State', '#LblTitle:Job title', '#LblPhone:Phone number'].forEach(item => {
                const [id, text] = item.split(':');
                waitForElm(`.SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel${id}`).then(label => {
                  label.innerHTML = (label.querySelector('.mktoAsterix')?.outerHTML || '') + text;
                });
              });

              waitForElm('.SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow label#LblGlobal_Opt_out__c ~ .mktoCheckboxList label').then(label => {
                label.textContent = "Uncheck to stop receiving SailPoint email communications.";
              });


              // On input focus add class on closest parent field class
              function focusFields() {
                // Attach events using event delegation
                const form = document.querySelector('.SPZ_4003_V1 form.mktoForm');
                let emailFocusCount = 0;
                form.addEventListener('focus', function (event) {
                  const el = event.target;
                  if (el.classList.contains('mktoField')) {
                    el.closest('.mktoFieldWrap').classList.add('active', 'typing');
                    checkAllFields();
                  }
                  var email_field = document.querySelector('.SPZ_4003_V1 form.mktoForm input[name="Email"]');
                  if (email_field.value.trim() === '') {
                    email_field.closest('.mktoFieldWrap').classList.remove('emailerror');
                  }
                  if (el.getAttribute('name') === 'Email' && !document.body.classList.contains('form-expand')) {
                    var checkerrorcnt = 0;
                    var checkerrror = setInterval(function () {
                      if (el.closest('.mktoFieldWrap') !== null) {
                        clearInterval(checkerrror);
                        if (el.closest('.mktoFieldWrap').querySelector('.mktoError:not(.customError)') !== null && el.closest('.mktoFieldWrap').querySelector('.mktoError:not(.customError)').style.display != 'none') {
                          el.closest('.mktoFieldWrap').classList.add('emailerror');
                          checkEmail();
                        }
                      }
                      checkerrorcnt++;
                    });
                    // emailFocusCount++;
                    // if(emailFocusCount > 2){
                    //   emailFocusCount = 2;
                    // }
                    // if(emailFocusCount === 2){
                    //   el.closest('.mktoFieldWrap').classList.add('emailerror');
                    //   checkEmail();
                    // }
                  }
                }, true);
                form.addEventListener('keyup', function (event) {
                  if (!document.body.classList.contains('form-expand')) {
                    const el = event.target;
                    const fieldName = el.getAttribute('name');
                    if (document.querySelector('input[name="Email"]').value.trim() !== '') {
                      var newEmailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
                      if (newEmailRegex.test(document.querySelector('input[name="Email"]').value.trim())) {
                        el.closest('.mktoFieldWrap').classList.remove('emailerror');
                      } else {
                        el.closest('.mktoFieldWrap').classList.add('emailerror');
                      }
                    }

                    const firstName = document.querySelector('input[name="FirstName"]').value.trim();
                    const lastName = document.querySelector('input[name="LastName"]').value.trim();
                    const emailValue = document.querySelector('input[name="Email"]').value.trim();
                    const emailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
                    if (['FirstName', 'LastName', 'Email', 'Company'].includes(fieldName)) {
                      if (firstName && lastName && emailRegex.test(emailValue)) {
                        document.body.classList.add('form-expand');
                      }
                    }
                  }
                }, true);

                form.addEventListener('blur', function (event) {
                  const el = event.target;
                  if (el.classList.contains('mktoField')) {
                    el.closest('.mktoFieldWrap').classList.remove('active', 'typing');
                    checkAllFields();
                  }

                  if (!document.body.classList.contains('form-expand')) {
                    const el = event.target;
                    const fieldName = el.getAttribute('name');
                    if (document.querySelector('input[name="Email"]').value.trim() !== '') {
                      var newEmailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
                      if (newEmailRegex.test(document.querySelector('input[name="Email"]').value.trim())) {
                        el.closest('.mktoFieldWrap').classList.remove('emailerror');
                      } else {
                        el.closest('.mktoFieldWrap').classList.add('emailerror');
                      }
                    }

                    const firstName = document.querySelector('input[name="FirstName"]').value.trim();
                    const lastName = document.querySelector('input[name="LastName"]').value.trim();
                    const emailValue = document.querySelector('input[name="Email"]').value.trim();
                    const emailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
                    if (['FirstName', 'LastName', 'Email', 'Company'].includes(fieldName)) {
                      if (firstName && lastName && emailRegex.test(emailValue)) {
                        document.body.classList.add('form-expand');
                      }
                    }
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
                  const stateField = document.querySelector('.SPZ_4003_V1 form.mktoForm .mktoFieldWrap .mktoField#State');
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

                const container = document.querySelector('.SPZ_4003_V1 form.mktoForm');
                if (container) {
                  observer.observe(container, { childList: true, subtree: true });
                }
              }
              focusFields();
              function checkAllFields() {
                const fields = document.querySelectorAll('.SPZ_4003_V1 form.mktoForm .mktoField');
                const timeBuffer = setInterval(() => {
                  fields.forEach(field => {
                    const fieldWrap = field.closest('.mktoFieldWrap');
                    if (fieldWrap) {
                      // Check for error
                      const errorElement = fieldWrap.querySelector('.mktoError:not(.customError)');
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
                }, 100);

                setTimeout(() => {
                  clearInterval(timeBuffer);
                }, 1000);
              }

              document.querySelector('select#Country').addEventListener('change', () => {
                const countryRow = document.querySelector('.SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow.field-7');
                const stateRow = document.querySelector('.SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow.field-8');
                const stateExists = document.querySelector('select#State');
                stateExists ? (document.querySelector('label#LblState').textContent = "State", stateRow.classList.remove('hidden')) : (stateRow.classList.add('hidden'));

                const optOutRow = document.querySelector('.SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow.field-28');
                document.querySelector('label#LblGlobal_Opt_out__c') ? (optOutRow.querySelector('.mktoCheckboxList label').textContent = "Uncheck to stop receiving SailPoint email communications.") : '';
              });

              const form = document.querySelector('form#mktoForm_1016');
              const button = form.querySelector('button[type="submit"]');
              const changeButtonText = (text) => {
                if (button && button.textContent !== text) {
                  button.textContent = text;
                }
              };
              changeButtonText("Download");
              form.addEventListener("submit", function () {
                changeButtonText("Please Wait");
              });
              const restoreTextOnInputChange = () => {
                changeButtonText("Download");
              };
              form.addEventListener("input", restoreTextOnInputChange);
              form.addEventListener("change", restoreTextOnInputChange);
              const observer = new MutationObserver(() => {
                if (button && button.textContent === "Please Wait") {
                  const hasErrors = document.querySelector(".mktoError");
                  if (hasErrors) {
                    changeButtonText("Download");
                  }
                }
              });
              if (button) {
                observer.observe(button, { childList: true, subtree: true });
              }
              MktoForms2.whenReady((formInstance) => {
                formInstance.onValidate((valid) => {
                  if (!valid) {
                    changeButtonText("Download");
                    setTimeout(() => {
                      if (button.textContent === "Please Wait") {
                        changeButtonText("Download");
                      }
                    }, 500);
                  }
                });

                formInstance.onSubmit(() => {
                  changeButtonText("Please Wait");
                  setTimeout(() => {
                    const hasErrors = document.querySelector(".mktoError");
                    if (hasErrors) {
                      changeButtonText("Download");
                    }
                  }, 500);
                });
              });

              MktoForms2.whenReady(function (form) {
                form.onSuccess(function (values, followUpUrl) {
                  document.body.classList.add('form-submit');
                  var checkboxInterval = setInterval(() => {
                    var checkbox = document.querySelector('.SPZ_3993_V1 form.mktoForm #mktoCheckbox_27627_0');
                    if (checkbox) {
                      checkbox.checked = true;
                    }
                  }, 100);

                  setTimeout(() => {
                    clearInterval(checkboxInterval);
                  }, 5000);
                });
              });

            }
          });
        } else {
          if (document.body.classList.contains('SPZ_4003_V1')) {
            removeSpecificCookieValue('SPZ_4003', 'SPZ_4003_truecontrol');
            hiddenValue('SPZ_4003', 'SPZ_4003_variant');
            setHiddenFieldValue();
          }
        }
      }
    });
  }

  function checkEmail() {
    const emailField = document.querySelector('.SPZ_4003_V1 .spz-form-section form.mktoForm input[name="Email"]');
    const emailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
    if (emailField) {
      if (emailField.value.trim() === '' || !emailRegex.test(emailField.value.trim())) {
        if (!emailField.parentElement.querySelector('.customError')) {
          emailField.insertAdjacentHTML('afterend', '<div class="mktoError_1 customError"><div class="mktoErrorMsg">Valid email required.</div></div>');
        }
      }
    }
  }

  function removeTest() {
    setTimeout(() => {
      if (document.querySelector('.SPZ_4003_V1')) {
        document.body.classList.remove("SPZ_4003_V1");
      }
    }, 2000);
  }

  function removeSpecificCookieValue(targetName, targetValue) {
    ['HiddenFieldName', 'HiddenFieldValue'].forEach((key, i) => {
      var values = getCookie(key)?.split(',').filter(v => v !== (i ? targetValue : targetName)).join(',');
      setCookie(key, values || '', 1);
    });
  }

  // Do not touch below hidden field code for any Experiment Start
  function hiddenValue(currentHiddenFieldName, currentHiddenFieldValue) {
    var ExistingHiddenFieldName = getCookie('HiddenFieldName');
    var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');

    if (!ExistingHiddenFieldName) {
      setCookie('HiddenFieldName', currentHiddenFieldName, 1);
      setCookie('HiddenFieldValue', currentHiddenFieldValue, 1);
    } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
      setCookie('HiddenFieldName', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
      setCookie('HiddenFieldValue', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
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
      var intellimize1 = document.querySelector('form.mktoForm#mktoForm_1016 input[name="intellimize1"]');
      if (intellimize1) {
        clearInterval(spz_cro_Interval);
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');
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

    document.addEventListener('click', function (e) {
      if (e.target.closest('#mktoForm_1016 .mktoButton')) {

        if (!document.body.classList.contains('form-expand')) {
          const el = document.querySelector('input[name="Email"]');
          const fieldName = el.getAttribute('name');
          if (fieldName === 'Email') {
            const newemailValue = el.value.trim();
            const newemailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
            if (newemailValue == '' || !newemailRegex.test(newemailValue)) {
              el.closest('.mktoFieldWrap').classList.add('emailerror');
              checkEmail();
            } else {
              el.closest('.mktoFieldWrap').classList.remove('emailerror');
            }
          }

          const firstName = document.querySelector('input[name="FirstName"]').value.trim();
          const lastName = document.querySelector('input[name="LastName"]').value.trim();
          const emailValue = document.querySelector('input[name="Email"]').value.trim();
          const companyValue = document.querySelector('input[name="Company"]').value.trim();
          const emailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
          if (['FirstName', 'LastName', 'Email', 'Company'].includes(fieldName)) {
            if (firstName && lastName && companyValue && emailRegex.test(emailValue)) {
              document.body.classList.add('form-expand');
            }
          }
        }

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


  // List of URLs
  const urls = [
    "https://www.sailpoint.com/identity-library/identity-governance-administration",
    "https://www.sailpoint.com/identity-library/dora-compliance",
    "https://www.sailpoint.com/identity-library/iga-gartner",
    "https://www.sailpoint.com/identity-library/identity-first-security"
  ];

  window.addEventListener("locationchange", function () {
    url = getBaseUrl(location.href);
    urlCheck(url);
    if (document.querySelector('.SPZ_7001')) {
      document.body.classList.remove("SPZ_7001");
    }
  });
  var url = getBaseUrl(location.href);
  urlCheck(url);

  function urlCheck(url) {
    if (urls.includes(url)) {
      createTest();
    } else {
      removeTest();
    }
  }

  function getBaseUrl(url) {
    return url.split('?')[0];
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