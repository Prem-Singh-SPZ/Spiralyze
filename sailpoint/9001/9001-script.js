(function () {
  function createTest() {
    let bodyLoaded = setInterval(function () {
      const body = document.querySelector('body');
      if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz_9001')) {
          body.classList.add('spz_9001');

          // const heroSelector = `.page-transition`;
          // const position = "beforebegin";
          // const formSelector = `#mktoForm_1017`;
          // const heroContent = {
          //   siteLogo: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo__colored.svg",
          //   siteLogoAlt: "SailPoint",
          //   formHeading: "Get live demo",
          // };
          // const additionalSection = {
          //   socialProofLogos: {
          //     socialProofHeading: "Used by 48% of the Fortune 500",
          //     socialProofImages: [
          //       {
          //         url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_01.svg",
          //         imgAlt: "GM",
          //       },
          //       {
          //         url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_02.svg",
          //         imgAlt: "Hershey",
          //       },
          //       {
          //         url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_03.svg",
          //         imgAlt: "Paccar",
          //       },
          //       {
          //         url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_04.svg",
          //         imgAlt: "Philips",
          //       },
          //       {
          //         url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_05.svg",
          //         imgAlt: "RWE",
          //       },
          //       {
          //         url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_06.svg",
          //         imgAlt: "T Mobile",
          //       },
          //       {
          //         url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_07.svg",
          //         imgAlt: "The Home Depot",
          //       },
          //       {
          //         url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_08.svg",
          //         imgAlt: "Toyota",
          //       },
          //     ]
          //   },
          // }

          // function addBaseline(formData, whereToPut, formSelector, heroSelector, additionalSection) {
          //   const formTemplate = `<section class="spz-hero">
          //     <div class="spz-wrapper">
          //         <div class="content-section">
          //           ${formData.siteLogo.length !== 0
          //       ? `<a class="site-logo" data-sentry-element="NextLink" data-sentry-source-file="MainLargeNavigation.tsx" href="/">
          //               <img src="${formData.siteLogo}" alt="${formData.siteLogoAlt}" />
          //             </a>`
          //       : ""
          //     }
          //         </div>
          //       <div class="spz-form-wrap">
          //         <div class="spz-form-section">
          //           ${formData.formHeading.replace(/\s/g, "").length !== 0
          //       ? `<div class="form-heading">${formData.formHeading}</div>`
          //       : ""
          //     }
          //           <div class="the-form"></div>
          //         </div>
          //       </div>
          //     </div>
          //     ${typeof additionalSection.socialProofLogos !== 'undefined' ? `<div class="social-proof-logos">
          //       <div class="social-proof-heading">${additionalSection.socialProofLogos.socialProofHeading}</div>
          //       <div class="social-proof-images">
          //         ${additionalSection.socialProofLogos.socialProofImages.length > 0 ? additionalSection.socialProofLogos.socialProofImages.map((item, index) => {
          //       return `<img src="${item.url}" alt="${item.imgAlt}">`;
          //     })
          //         .join("") + additionalSection.socialProofLogos.socialProofImages.map((item, index) => {
          //           return `<img src="${item.url}" class="repeat-img" alt="${item.imgAlt}">`;
          //         })
          //           .join("")
          //         : ""}
          //       </div>
          //     </div>`
          //       : ``}
          //   </section>`;
          //   waitForElm(heroSelector).then(() => {
          //     document.querySelector(heroSelector).insertAdjacentHTML(whereToPut, formTemplate);
          //   });
          //   let formLoaded = setInterval(() => {
          //     if (document.querySelector(".spz-form-wrap .the-form") && document.querySelector(formSelector) && document.querySelectorAll(`${formSelector} input`).length > 0) {
          //       clearInterval(formLoaded)
          //       document.querySelector(".spz-form-wrap .the-form").appendChild(document.querySelector(formSelector));
          //       // document.querySelector(".spz-form-wrap .the-form")?.appendChild(document.querySelector('.mkto-wrap + .disclaimer')?.cloneNode(true));
          //       document.querySelector(".spz-form-wrap .the-form").insertAdjacentElement('afterend', document.querySelector('.mkto-wrap + .disclaimer'));
          //       formModify();
          //     }
          //   });
          // }

          waitForElm('.spz_9001 #page-container .page-transition .inner-row__inner #mktoForm_1017 input').then(() => {
            formModify();
          });

          //the .spz-hero gets added to the page and removed after some time, so keep checking for it to add the form
          let spzHeroInterval = setInterval(() => {
            hiddenValue('spz_9001', 'spz_9001_Variant');
            setHiddenFieldValue();
          }, 1000);
          setTimeout(function () {
            clearInterval(spzHeroInterval);
          }, 10000);



        } else {
          if (body.classList.contains('spz_9001')) {
            hiddenValue('spz_9001', 'spz_9001_Variant');
            let callMultipleTimes = setInterval(() => {
              setHiddenFieldValue();
            }, 500);

            setTimeout(() => {
              clearInterval(callMultipleTimes);
            }, 10000);
          }
        }
      }
    });
  }

  function formModify() {
    // Add class in mktoFormRow using count
    var form_fields = document.querySelectorAll('.spz_9001 .page-transition .inner-row__inner form.mktoForm .mktoFormRow');
    for (var i = 0; i < form_fields.length; i++) {
      var dynamicClass = 'field-' + (i + 1);
      form_fields[i].classList.add(dynamicClass);
    }

    // Change Label Text
    ['#LblCountry:Country', '#LblState:State', '#LblNumber_of_Employees__c:Number of employees'].forEach(item => {
      const [id, text] = item.split(':');
      waitForElm(`.spz_9001 .page-transition .inner-row__inner form.mktoForm .mktoFieldWrap label.mktoLabel${id}`).then(label => {
        label.innerHTML = (label.querySelector('.mktoAsterix')?.outerHTML || '') + text;
      });
    });

    // waitForElm('.spz_9001 .page-transition .inner-row__inner form.mktoForm .mktoFormRow.field-31 .mktoCheckboxList label').then(label => {
    //   label.textContent = "Uncheck to stop receiving SailPoint email communications.";
    // });

    // Change Field Position
    var employees_field = document.querySelector('.spz_9001 form.mktoForm .field-8');
    var state_field = document.querySelector('.spz_9001 form.mktoForm .field-10');
    state_field.after(employees_field);

    // var disclaimer_field = document.querySelector('.spz_9001 form.mktoForm .mktoCaptchaDisclaimer');
    // var button = document.querySelector('.spz_9001 form.mktoForm .mktoButtonRow');
    // button.after(disclaimer_field);

    document.querySelector('.spz_9001 form.mktoForm .field-11 .mktoField').value = 'Get live demo';

    waitForElm(`.spz_9001 .page-transition .inner-row__inner form.mktoForm .mktoFieldWrap select#Country`).then((elm) => {
      setTimeout(() => {
        document.querySelectorAll(`.spz_9001 form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
          if (el && el.value && (el.value != '')) {
            el.closest('.mktoFieldWrap').classList.add('filled');
          }
        });
      }, 1000);
    });

    // On input focus add class on closest parent field class
    function focusFields() {
      // Attach events using event delegation
      const form = document.querySelector('.spz_9001 form.mktoForm');

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
        const stateField = document.querySelector('.spz_9001 form.mktoForm .mktoFieldWrap .mktoField#State');
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

      const container = document.querySelector('.spz_9001 form.mktoForm');
      if (container) {
        observer.observe(container, { childList: true, subtree: true });
      }
    }

    focusFields();

    function checkAllFields() {
      const fields = document.querySelectorAll('.spz_9001 form.mktoForm .mktoField');
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
    }

    document.querySelector('select#Country').addEventListener('change', () => {
      const stateRow = document.querySelector('.spz_9001 .page-transition .inner-row__inner form.mktoForm .mktoFormRow.field-10');
      const optOutRow = document.querySelector('.spz_9001 .page-transition .inner-row__inner form.mktoForm .mktoFormRow.field-31');
      const employeeNumberRow = document.querySelector('.spz_9001 .page-transition .inner-row__inner form.mktoForm .mktoFormRow.field-8');

      const stateExists = document.querySelector('select#State');
      stateExists ? (document.querySelector('label#LblState').textContent = "State", stateRow.classList.remove('hidden'), employeeNumberRow.classList.remove('spz-half'))
        : (stateRow.classList.add('hidden'), employeeNumberRow.classList.add('spz-half'));

      // document.querySelector('label#LblGlobal_Opt_out__c')
      //   ? (optOutRow.querySelector('.mktoCheckboxList label').textContent = "Uncheck to stop receiving SailPoint email communications.", optOutRow.classList.remove('hidden'))
      //   : optOutRow.classList.add('hidden');
    });

    MktoForms2.whenReady(function (form) {
      form.onSuccess(function (values, followUpUrl) {
        document.body.classList.add('form-submit');

        //if #mktoCheckbox_27268_0 this checkbox is there, keep it checked with setinterval
        var checkboxInterval = setInterval(() => {
          var checkbox = document.querySelector('.spz_9001 form.mktoForm #mktoCheckbox_27268_0');
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

  function removeTest() {
    setTimeout(() => {
      if (document.querySelector('.spz_9001')) {
        document.body.classList.remove("spz_9001");
      }
    }, 2000);
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
      var intellimize1 = document.querySelector('form.mktoForm#mktoForm_1017 input[name="intellimize1"]');
      if (intellimize1) {
        clearInterval(spz_cro_Interval);
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValueDemo');
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

    setTimeout(function () {
      clearInterval(spz_cro_Interval);
    }, 15000);
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
    if (window.location.pathname === '/contact-us') {
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