(function () {
  if (!document.getElementById('spz-4004')) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.id = 'spz-4004';
    link.href = 'https://res.cloudinary.com/spiralyze/raw/upload/f_auto/sailpoint/4004/code/4004-Style.css';
    head.appendChild(link);
  }

  function createTest() {
    let bodyLoaded = setInterval(function () {
      const body = document.querySelector('body');
      if (body) {
        clearInterval(bodyLoaded);
        if (!document.body.classList.contains('SPZ_4004')) {
          removeSpecificCookieValue('SPZ_4004', 'SPZ_4004_truecontrol');
          document.body.classList.add('SPZ_4004');
          hiddenValue('SPZ_4004', 'SPZ_4004_variant');
          waitForElm('.SPZ_4004 #mktoForm_1016.mktoForm .mktoFormRow input').then(() => {
            const template_formElements = {
              SuperHeading: `Get the report`,
              Heading: `The Horizons of Identity Security 2024-2025`,
            };
            const template_formUniqueSelector = "form#mktoForm_1016";
            const formLoaded = setInterval(() => {
              if(document.querySelector(template_formUniqueSelector) && document.querySelectorAll(`${template_formUniqueSelector} input`).length > 0){
                clearInterval(formLoaded);
                addForm(template_formElements, template_formUniqueSelector);
              }
            });
            function addForm(formData, formSelector) {
              const formTemplate = `<div class="spz-form-wrap">
                <div class="form-section">
                  ${formData.SuperHeading.replace(/\s/g, "").length !== 0 ? `<div class="form-superheading">${formData.SuperHeading}</div>` : ""}
                  ${formData.Heading.replace(/\s/g, "").length !== 0 ? `<div class="form-heading">${formData.Heading}</div>` : ""}
                  <div class="the-form mkto-wrap"></div>
                  <div class="submit_spz">
                    <h3 class="text-center">Thank you!</h3>
                    <h4 class="text-center">Your download should start automatically, if it does not, click the button below.</h4>
                    <a id="resource-asset" class="mt-2 btn btn--blue" href="https://docs.sailpoint.com/wp-content/uploads/SailPoint-Horizons-of-Identity-Security-Report-2024-2025-SP2487.pdf" target="_blank" rel="noopener">Get my copy</a>
                  </div>
                </div>
              </div>`;
              document.querySelector('#__next footer').insertAdjacentHTML("beforebegin",formTemplate);
              const formLoaded = setInterval(() => {
                if (document.querySelector(formSelector) && document.querySelectorAll(`${formSelector} input`).length > 0) {
                  clearInterval(formLoaded);
                  document.querySelector(".spz-form-wrap .the-form").appendChild(document.querySelector(formSelector));
                  // document.querySelector('.spz-form-wrap form.mktoForm .mktoButtonRow').before(document.querySelector('.SPZ_4004 .spz-form-wrap .mktoCaptchaDisclaimer'));
                  formModify();
                }
              });
            }
            function formModify() {
              // Add class in mktoFormRow using count
              var form_fields = document.querySelectorAll('.SPZ_4004 .spz-form-wrap form.mktoForm .mktoFormRow');
              for (var i = 0; i < form_fields.length; i++) {
                var dynamicClass = 'field-' + (i + 1);
                form_fields[i].classList.add(dynamicClass);
              }

              // Change Label Text
              ['#LblCountry:Country', '#LblState:State', '#LblTitle:Job title'].forEach(item => {
                const [id, text] = item.split(':');
                waitForElm(`.SPZ_4004 .spz-form-wrap form.mktoForm .mktoFieldWrap label.mktoLabel${id}`).then(label => {
                  label.innerHTML = (label.querySelector('.mktoAsterix')?.outerHTML || '') + text;
                });
              });

              // var phone_field = document.querySelector('.SPZ_4004 form.mktoForm .field-9');
              // var email_field = document.querySelector('.SPZ_4004 form.mktoForm .field-4');
              // email_field.after(phone_field);

              // On input focus add class on closest parent field class
              function focusFields() {
                // Attach events using event delegation
                const form = document.querySelector('.SPZ_4004 form.mktoForm');
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
                  const stateField = document.querySelector('.SPZ_4004 form.mktoForm .mktoFieldWrap .mktoField#State');
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

                const container = document.querySelector('.SPZ_4004 form.mktoForm');
                if (container) {
                  observer.observe(container, { childList: true, subtree: true });
                }
              }
              focusFields();
              function checkAllFields() {
                const fields = document.querySelectorAll('.SPZ_4004 form.mktoForm .mktoField');
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
                }, 100);

                setTimeout(() => {
                  clearInterval(timeBuffer);
                }, 1000);
              }

              document.querySelector('select#Country').addEventListener('change', () => {
                const countryRow = document.querySelector('.SPZ_4004 .spz-form-wrap form.mktoForm .mktoFormRow.field-8');
                const stateRow = document.querySelector('.SPZ_4004 .spz-form-wrap form.mktoForm .mktoFormRow.field-9');
                const stateExists = document.querySelector('select#State');
                stateExists ? (document.querySelector('label#LblState').textContent = "State", stateRow.classList.remove('hidden'), countryRow.classList.remove('spz-full')) : (stateRow.classList.add('hidden'), countryRow.classList.add('spz-full'));
              });

              const form = document.querySelector('form#mktoForm_1016');
              const button = form.querySelector('button[type="submit"]');
              const changeButtonText = (text) => {
                if (button && button.textContent !== text) {
                  button.textContent = text;
                }
              };
              changeButtonText("Download now");
              form.addEventListener("submit", function () {
                changeButtonText("Please Wait");
              });
              const restoreTextOnInputChange = () => {
                changeButtonText("Download now");
              };
              form.addEventListener("input", restoreTextOnInputChange);
              form.addEventListener("change", restoreTextOnInputChange);
              const observer = new MutationObserver(() => {
                if (button && button.textContent === "Please Wait") {
                  const hasErrors = document.querySelector(".mktoError");
                  if (hasErrors) {
                    changeButtonText("Download now");
                  }
                }
              });
              if (button) {
                observer.observe(button, { childList: true, subtree: true });
              }
              MktoForms2.whenReady((formInstance) => {
                formInstance.onValidate((valid) => {
                  if (!valid) {
                    changeButtonText("Download now");
                    setTimeout(() => {
                      if (button.textContent === "Please Wait") {
                        changeButtonText("Download now");
                      }
                    }, 500);
                  }
                });

                formInstance.onSubmit(() => {
                  changeButtonText("Please Wait");
                  setTimeout(() => {
                    const hasErrors = document.querySelector(".mktoError");
                    if (hasErrors) {
                      changeButtonText("Download now");
                    }
                  }, 500);
                });
              });
              MktoForms2.whenReady(function (form) {
                form.onSuccess(function (values, followUpUrl) {
                  document.body.classList.add('form-submitted');

                  //if #mktoCheckbox_27268_0 this checkbox is there, keep it checked with setinterval
                  var checkboxInterval = setInterval(() => {
                    var checkbox = document.querySelector('.SPZ_4004 .spz-form-wrap form.mktoForm #mktoCheckbox_28560_0');
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
          if (document.body.classList.contains('SPZ_4004')) {
            removeSpecificCookieValue('SPZ_4004', 'SPZ_4004_truecontrol');
            hiddenValue('SPZ_4004', 'SPZ_4004_variant');
            setHiddenFieldValue();
          }
        }
      }
    });
  }

  function removeTest() {
    if (document.querySelector('.SPZ_4004')) {
      document.body.classList.remove("SPZ_4004");
    }
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

    setTimeout(function () {
      clearInterval(spz_cro_Interval);
    }, 15000);

    //click event listener
		document.addEventListener('click', function (e) {
			if (e.target.closest('.mktoForm .mktoButton')) {
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
  var url = location.href;
  urlCheck(url);
  window.addEventListener("locationchange", function () {
    url = location.href;
    urlCheck(url);
  });

  function urlCheck(url) {
    let testURL = "";
    if (window.location.pathname == '/identity-library/horizons-identity-security-3') {
      testURL = window.location.href;
    }
    if (isSameUrl(url, testURL, true)) {
      createTest();
    } else {
      removeTest();
    }
  }

  function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#")
      ? currentUrl.slice(0, currentUrl.indexOf("#"))
      : currentUrl;
    specifiedUrl = specifiedUrl.includes("#")
      ? specifiedUrl.slice(0, specifiedUrl.indexOf("#"))
      : specifiedUrl;
    if (!includeQueryParams)
      currentUrl = currentUrl.includes("?")
        ? currentUrl.slice(0, currentUrl.indexOf("?"))
        : currentUrl;
    if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
      return true;
    return false;
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