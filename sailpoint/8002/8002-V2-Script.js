(function () {
  function createTest() {
    let bodyLoaded = setInterval(function () {
      const body = document.querySelector('body');
      if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz_8002_v2')) {
          body.classList.add('spz_8002_v2');

          const template_formElements = {
            companyLogo: "//res.cloudinary.com/spiralyze/image/upload/v1744364287/sailpoint/8002/logo.svg",
            companyLogoAlt: "SailPoint",
            sectionHeading: "Take a product tour",
            backgroundVideo: "//res.cloudinary.com/spiralyze/video/upload/v1746699439/sailpoint/8002/8002_Sailpoint_BG-Video-New.mp4",
            backgroundPoster: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/8002/dashboard.webp",
          };
          const templateSelector = `#__next`;
          const position = "beforebegin";
          const template_formUniqueSelector = "#mktoForm_1016";
          function addForm(formData, formSelector, whereToPut, templateSelector) {
            const formTemplate = `<div class="spz-form-over-ui">
              <div class="form-section">
                <div class="spz-form-wrapper">
                  ${formData.companyLogo?.replace(/\s/g, "").length ? `<a class="logo__wrapper" href="/"><img src="${formData.companyLogo}" alt="${formData.companyLogoAlt || 'SailPoint'}" class="company-logo" width="150px" height="33px" /></a>` : ""}
                  ${formData.sectionHeading.replace(/\s/g, "").length !== 0 ? `<h2 class="content-heading">${formData.sectionHeading}</h2>` : ""}
                  <div class="the-form"></div>
                </div>
              </div>
              ${formData.backgroundVideo?.replace(/\s/g, "").length && formData.backgroundPoster?.replace(/\s/g, "").length ? `<div class="spz-video-wrapper">
                <video autoplay muted loop playsinline poster="${formData.backgroundPoster}">
                  <source src="${formData.backgroundVideo}" type="video/mp4">
                </video>
              </div>`: ""}
            </div>`;
            waitForElm(templateSelector).then(() => {
              document.querySelector(templateSelector).insertAdjacentHTML(whereToPut, formTemplate);
            });
            let formLoaded = setInterval(() => {
              if (document.querySelector(".spz_8002_v2 .spz-form-over-ui .the-form") && document.querySelector(formSelector) && document.querySelectorAll(`${formSelector} input`).length > 0) {
                clearInterval(formLoaded)
                document.querySelector(".spz_8002_v2 .spz-form-over-ui .the-form").appendChild(document.querySelector(formSelector));
                formModify();
              }
            });
          }

          let spzHeroInterval = setInterval(() => {
            if (document.querySelectorAll('.spz-form-over-ui').length == 0 && window.location.pathname === '/demo/interactive' && document.querySelector('.modal-form-block')) {
              clearInterval(spzHeroInterval);
              document.body.classList.add('form_show');
              addForm(template_formElements, template_formUniqueSelector, position, templateSelector);
              removeSpecificCookieValue('SPZ_8002', ['SPZ_8002_truecontrol', 'SPZ_8002_variant1']);
              hiddenValue('SPZ_8002', 'SPZ_8002_variant2');
              setHiddenFieldValue();
            }
            else {
              if (window.location.pathname.indexOf("/demo/interactive") == -1 && document.querySelectorAll('.spz-form-over-ui').length > 0) {
                clearInterval(spzHeroInterval);
                document.querySelectorAll('.spz-form-over-ui').forEach(item => {
                  item.remove();
                });
              }
            }
          }, 1000);
          setTimeout(function () {
            clearInterval(spzHeroInterval);
          }, 10000);

          function formModify() {
            var form_fields = document.querySelectorAll('.spz_8002_v2 .spz-form-over-ui form.mktoForm .mktoFormRow');
            for (var i = 0; i < form_fields.length; i++) {
              var dynamicClass = 'field-' + (i + 1);
              form_fields[i].classList.add(dynamicClass);
            }
            // var phone_field = document.querySelector('.spz_8002_v2 form.mktoForm .field-4');
            // var job_field = document.querySelector('.spz_8002_v2 form.mktoForm .field-6');
            // job_field.after(phone_field);

            waitForElm('.spz_8002_v2 form.mktoForm .disclaimer').then((elm) => {
              changePos();
            });
            waitForElm(`.spz_8002_v2 .spz-form-over-ui form.mktoForm .mktoFieldWrap select#Country`).then((elm) => {
              setTimeout(() => {
                document.querySelectorAll(`.spz_8002_v2 form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
                  if (el && el.value && (el.value != '')) {
                    el.closest('.mktoFieldWrap').classList.add('filled');
                  }
                });
              }, 1000);
            });

            function focusFields() {
              const form = document.querySelector('.spz_8002_v2 form.mktoForm');
              let emailFocusCount = 0;
              form.addEventListener('focus', function (event) {
                const el = event.target;
                if (el.classList.contains('mktoField')) {
                  el.closest('.mktoFieldWrap').classList.add('active', 'typing');
                  checkAllFields();
                }
                var email_field = document.querySelector('.spz_8002_v2 .spz-form-over-ui form.mktoForm input[name="Email"]');
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
                }
              }, true);

              form.addEventListener('keyup', function (event) {
                if (!document.body.classList.contains('form-expand')) {
                  const el = event.target;
                  const fieldName = el.getAttribute('name');

                  if (fieldName === 'Email') {
                    const newemailValue = el.value.trim();
                    const newemailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
                    if (newemailValue == '' || !newemailRegex.test(newemailValue)) {
                      el.closest('.mktoFieldWrap').classList.add('emailerror');
                    } else {
                      el.closest('.mktoFieldWrap').classList.remove('emailerror');
                    }
                  }

                  const firstName = document.querySelector('input[name="FirstName"]').value.trim();
                  const lastName = document.querySelector('input[name="LastName"]').value.trim();
                  const emailValue = document.querySelector('input[name="Email"]').value.trim();
                  const phoneValue = document.querySelector('input[name="Phone"]').value.trim();
                  const emailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
                  if (['FirstName', 'LastName', 'Email', 'Phone'].includes(fieldName)) {
                    if (firstName && lastName && phoneValue && emailRegex.test(emailValue)) {
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
                  const phoneValue = document.querySelector('input[name="Phone"]').value.trim();
                  const emailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
                  if (['FirstName', 'LastName', 'Email', 'Phone'].includes(fieldName)) {
                    if (firstName && lastName && phoneValue && emailRegex.test(emailValue)) {
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

              function reapplyStateFieldListeners() {
                const stateField = document.querySelector('.spz_8002_v2 form.mktoForm .mktoFieldWrap .mktoField#State');
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
              const observer = new MutationObserver(() => {
                reapplyStateFieldListeners();
              });
              const container = document.querySelector('.spz_1008 form.mktoForm');
              if (container) {
                observer.observe(container, { childList: true, subtree: true });
              }
            }
            focusFields();
            function checkAllFields() {
              const fields = document.querySelectorAll('.spz_8002_v2 form.mktoForm .mktoField');
              const timeBuffer = setInterval(() => {
                fields.forEach(field => {
                  const fieldWrap = field.closest('.mktoFieldWrap');
                  if (fieldWrap) {
                    const errorElement = fieldWrap.querySelector('.mktoError:not(.customError)');
                    if (errorElement && errorElement.style.display !== 'none') {
                      fieldWrap.classList.add('error');
                    } else {
                      fieldWrap.classList.remove('error');
                    }

                    if (field.value && field.value.trim() !== '') {
                      fieldWrap.classList.add('filled');
                    } else {
                      fieldWrap.classList.remove('filled');
                    }
                  }
                });
              }, 300);

              setTimeout(() => {
                clearInterval(timeBuffer);
              }, 1000);
            }
            document.querySelector('select#Country').addEventListener('change', () => {
              const stateRow = document.querySelector('.spz_8002_v2 .spz-form-over-ui form.mktoForm .mktoFormRow.field-8');
              const countryRow = document.querySelector('.spz_8002_v2 .spz-form-over-ui form.mktoForm .mktoFormRow.field-7');

              changePos();

              const stateExists = document.querySelector('select#State');
              stateExists ? (document.querySelector('label#LblState').textContent = "State", stateRow.classList.remove('hidden'), countryRow.classList.remove('spz-full')) : (stateRow.classList.add('hidden'), countryRow.classList.add('spz-full'));

              if (stateExists) {
                document.querySelector('select#State').addEventListener('change', () => {
                  changePos();
                });
              }
            });
            if (document.querySelector('select#State')) {
              document.querySelector('select#State').addEventListener('change', () => {
                changePos();
              });
            }

            MktoForms2.whenReady(function (form) {
              form.onSuccess(function (values, followUpUrl) {
                document.body.classList.add('form-submit');
              });
            });

            const form = document.querySelector('form#mktoForm_1016');
            const button = form.querySelector('button[type="submit"]');
            const changeButtonText = (text) => {
              if (button && button.textContent !== text) {
                button.textContent = text;
              }
            };
            changeButtonText("Get instant access");
            form.addEventListener("submit", function () {
              changeButtonText("Please wait...");
            });
            const restoreTextOnInputChange = () => {
              changeButtonText("Get instant access");
            };
            form.addEventListener("input", restoreTextOnInputChange);
            form.addEventListener("change", restoreTextOnInputChange);
            const observer = new MutationObserver(() => {
              if (button && button.textContent === "Please wait...") {
                const hasErrors = document.querySelector(".mktoError");
                if (hasErrors) {
                  changeButtonText("Get instant access");
                }
              }
            });
            if (button) {
              observer.observe(button, { childList: true, subtree: true });
            }

            MktoForms2.whenReady((formInstance) => {
              formInstance.onValidate((valid) => {
                if (!valid) {
                  changeButtonText("Get instant access");
                  setTimeout(() => {
                    if (button.textContent === "Please wait...") {
                      changeButtonText("Get instant access");
                    }
                  }, 500);
                }
              });

              formInstance.onSubmit(() => {
                changeButtonText("Please wait...");
                setTimeout(() => {
                  const hasErrors = document.querySelector(".mktoError");
                  if (hasErrors) {
                    changeButtonText("Get instant access");
                  }
                }, 500);
              });
            });
          }
        } else {
          if (body.classList.contains('spz_8002_v2')) {
            removeSpecificCookieValue('SPZ_8002', ['SPZ_8002_truecontrol', 'SPZ_8002_variant1']);
            hiddenValue('SPZ_8002', 'SPZ_8002_variant2');
            let callMultipleTimes = setInterval(() => {
              setHiddenFieldValue();
              clearInterval(callMultipleTimes);
            }, 500);

            setTimeout(() => {
              clearInterval(callMultipleTimes);
            }, 10000);
          }
        }
      }
    });
  }

  function changePos() {
    const disclaimer_field = document.querySelector('.spz_8002_v2 form.mktoForm .mktoCaptchaDisclaimer');
    const button = document.querySelector('.spz_8002_v2 form.mktoForm .mktoButtonRow');

    let checkPos = setInterval(() => {
      if (disclaimer_field && button) {
        button.after(disclaimer_field);
      }
    }, 50);

    setTimeout(() => {
      clearInterval(checkPos);
    }, 500);
  }

  function removeTest() {
    setTimeout(() => {
      if (document.querySelector('.spz_8002_v2')) {
        document.body.classList.remove("spz_8002_v2");
      }
      if (document.querySelector('.form-submit')) {
        document.body.classList.remove("form-submit");
      }
    }, 1000);
  }

  function removeSpecificCookieValue(targetName, targetValue) {
    ['HiddenFieldNameDemo', 'HiddenFieldValueDemo'].forEach((key, i) => {
      const updatedValues = getCookie(key)?.split(',').filter(v => !((i ? targetValue : [targetName]).includes(v))).join(',');
      setCookie(key, updatedValues || '', 1);
    });
  }

  // Do not touch below hidden field code for any Experiment Start
  function hiddenValue(currentHiddenFieldName, currentHiddenFieldValue) {
    var ExistingHiddenFieldName = getCookie('HiddenFieldNameDemo');
    var ExistingHiddenFieldValue = getCookie('HiddenFieldValueDemo');

    if (!ExistingHiddenFieldName) {
      setCookie('HiddenFieldNameDemo', currentHiddenFieldName, 1);
      setCookie('HiddenFieldValueDemo', currentHiddenFieldValue, 1);
    } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
      setCookie('HiddenFieldNameDemo', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
      setCookie('HiddenFieldValueDemo', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
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
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValueDemo');
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

  document.addEventListener('click', function (e) {
    if (e.target.closest('.mktoForm .mktoButton')) {
      const fields = document.querySelectorAll('.spz_8002_v2 form.mktoForm .mktoField');
      const timeBuffer = setInterval(() => {
        fields.forEach(field => {
          const fieldWrap = field.closest('.mktoFieldWrap');
          if (fieldWrap) {
            const errorElement = fieldWrap.querySelector('.mktoError:not(.customError)');
            if (errorElement && errorElement.style.display !== 'none') {
              fieldWrap.classList.add('error');
            } else {
              fieldWrap.classList.remove('error');
            }

            if (field.value && field.value.trim() !== '' && field.type !== 'checkbox') {
              fieldWrap.classList.add('filled');
            } else {
              fieldWrap.classList.remove('filled');
            }
          }
        });
      }, 300);


      setTimeout(() => {
        clearInterval(timeBuffer);
      }, 1000);

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
        const phoneValue = document.querySelector('input[name="Phone"]').value.trim();
        const emailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
        if (['FirstName', 'LastName', 'Email', 'Phone'].includes(fieldName)) {
          if (firstName && lastName && phoneValue && emailRegex.test(emailValue)) {
            document.body.classList.add('form-expand');
          }
        }
      }

      waitForElm('.spz_8002_v2 .mktoForm .mktoError').then(function (elm) {
        if (elm.parentNode.querySelector('#ValidMsgEmail')) {
          const targetNode = elm.parentNode;
          const config = { attributes: true, childList: true, subtree: true };
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
            if (document.querySelector('.spz_8002_v2 .mktoForm .mktoError #ValidMsgEmail') !== null) {
              document.querySelector('.spz_8002_v2 .mktoForm .mktoError #ValidMsgEmail').parentNode.parentNode.classList.add('error');
            }
            counterA++;
            if (counterA >= 10) {
              clearInterval(intervalIdA);
            }
          }, 500);
        }
      });

      //inject current time and date in EST timezone into .intellimize2 hidden field
      var d = new Date();
      var n = d.toLocaleString('en-US', { timeZone: 'America/New_York' });
      var int2 = e.target.closest('.mktoForm').querySelector('input[name="intellimize2"]');
      if (int2)
        int2.value = n;
    }
  });

  function checkEmail() {
    const emailField = document.querySelector('.spz_8002_v2 .spz-form-over-ui form.mktoForm input[name="Email"]');
    const emailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
    if (emailField) {
      if (emailField.value.trim() === '' || !emailRegex.test(emailField.value.trim())) {
        if (!emailField.parentElement.querySelector('.customError')) {
          if (emailField.closest('.mktoFieldWrap').querySelectorAll('.customError').length == 0) {
            emailField.insertAdjacentHTML('afterend', '<div class="mktoError_1 customError"><div class="mktoErrorMsg">Valid email required.</div></div>');
          }
        }
      }
    }
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

  window.addEventListener('resize', function () {
    urlCheck(url);
  });

  function urlCheck(url) {
    if (window.innerWidth >= 992) {
      let testURL = "";
      if (window.location.pathname === '/demo/interactive') {
        testURL = window.location.href;
      }
      if (isSameUrl(url, testURL, true)) {
        createTest();
      } else {
        removeTest();
      }
    } else {
      let bodyLoaded = setInterval(function () {
        const body = document.querySelector('body');
        if (body) {
          clearInterval(bodyLoaded);
          if (!body.classList.contains('spz_8002_v2_mobile')) {
            body.classList.add('spz_8002_v2_mobile');
            removeTest();
          }
        }
      });
    }
  }

  function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#") ? currentUrl.slice(0, currentUrl.indexOf("#")) : currentUrl;
    specifiedUrl = specifiedUrl.includes("#") ? specifiedUrl.slice(0, specifiedUrl.indexOf("#")) : specifiedUrl;
    if (!includeQueryParams)
      currentUrl = currentUrl.includes("?") ? currentUrl.slice(0, currentUrl.indexOf("?")) : currentUrl;
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