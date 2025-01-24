(function () {

  const additionalSection = {
    socialProofLogos: {
      socialProofHeading: "Used by 48% of the Fortune 500",
      socialProofImages: [
        {
          url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_01.svg",
          imgAlt: "GM",
        },
        {
          url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_02.svg",
          imgAlt: "Hershey",
        },
        {
          url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_03.svg",
          imgAlt: "Paccar",
        },
        {
          url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_04.svg",
          imgAlt: "Philips",
        },
        {
          url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_05.svg",
          imgAlt: "RWE",
        },
        {
          url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_06.svg",
          imgAlt: "T Mobile",
        },
        {
          url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_07.svg",
          imgAlt: "The Home Depot",
        },
        {
          url: "//res.cloudinary.com/spiralyze/image/upload/v1730174324/sailpoint/1001/logo_08.svg",
          imgAlt: "Toyota",
        },
      ]
    },
  }

  function createTest() {
    let bodyLoaded = setInterval(function () {
      const body = document.querySelector('body');
      if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz_9001')) {
          body.classList.add('spz_9001');

          waitForElm('.spz_9001 .hero + .row > .row__inner .bg-gradient p.text-h3').then(() => {
            pageModify();
          });

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

  function pageModify() {
    document.querySelector('.spz_9001 .hero + .row > .row__inner').insertAdjacentHTML('afterbegin', `<div class="spz-logo"><a class="logo-anchor" href="javascript:;"><img src="//res.cloudinary.com/spiralyze/image/upload/v1737104112/sailpoint/9001/logo__colored.svg" alt="SailPoint" class=""></a>`);

    let checkTitle = setInterval(() => {
      if (document.querySelector('.spz_9001 .hero + .row > .row__inner .bg-gradient p.text-h3').textContent !== "Contact us") {
        document.querySelector('.spz_9001 .hero + .row > .row__inner .bg-gradient p.text-h3').textContent = "Contact us";
      }
    }, 100);

    setTimeout(() => {
      clearInterval(checkTitle);
    }, 5000);

    document.querySelector('.spz_9001 .hero + .row').insertAdjacentHTML('afterend', `     ${typeof additionalSection.socialProofLogos !== 'undefined' ? `<div class="social-proof-logos">
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
      : ``}`);

  }

  function formModify() {
    // Add class in mktoFormRow using count
    // var form_fields = document.querySelectorAll('.spz_9001 .page-transition .inner-row__inner form.mktoForm .mktoFormRow');
    // for (var i = 0; i < form_fields.length; i++) {
    //   var dynamicClass = 'field-' + (i + 1);
    //   form_fields[i].classList.add(dynamicClass);
    // }

    // Add class in mktoField using the name attribute
    var form_fields = document.querySelectorAll('.spz_9001 #mktoForm_1017.mktoForm .mktoFormRow');
    for (var i = 0; i < form_fields.length; i++) {
      if (form_fields[i].querySelector('.mktoField[name]:not([type="hidden"])')) {
        var dynamicClass = form_fields[i].querySelector('.mktoField[name]:not([type="hidden"])').getAttribute('name');
        form_fields[i].classList.add('row_' + dynamicClass);
      }
      else {
        if (!form_fields[i].querySelector('.mktoPlaceholderGlobal_Opt_in__c')) {
          if (i >= 12) {
            // form_fields[i].classList.add('hidden');
          }
        }
        else {
          form_fields[i].classList.add('row_Global_Opt_in__c');
        }
      }
    }

    // Change Label Text
    ['#LblCountry:Country', '#LblState:State', '#LblNumber_of_Employees__c:Number of employees', '#LblreasonforInquiry:Reason for inquiry'].forEach(item => {
      const [id, text] = item.split(':');
      waitForElm(`.spz_9001 .page-transition .inner-row__inner form.mktoForm .mktoFieldWrap label.mktoLabel${id}`).then(label => {
        label.innerHTML = (label.querySelector('.mktoAsterix')?.outerHTML || '') + text;
      });
    });

    // waitForElm('.spz_9001 .page-transition .inner-row__inner form.mktoForm .mktoFormRow.field-31 .mktoCheckboxList label').then(label => {
    //   label.textContent = "Uncheck to stop receiving SailPoint email communications.";
    // });

    // Change Field Position
    const email_field = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .row_Email');
    const last_name_field = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .row_LastName');
    const inquiry_field = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .row_reasonforInquiry');
    const country_field = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .row_Country');
    const company_field = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .row_Company');
    const title_field = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .row_Title');
    const disclaimer_field = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .mktoCaptchaDisclaimer');
    const button = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .mktoButtonRow');

    if (company_field && title_field && disclaimer_field && button) {
      last_name_field.insertAdjacentElement('afterend', email_field);
      country_field.insertAdjacentElement('beforebegin', inquiry_field);
      company_field.after(title_field);
      // button.after(disclaimer_field);
    }

    // document.querySelector('.spz_9001 form.mktoForm .field-11 .mktoField').value = 'Get live demo';

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

    if (document.querySelector('.spz_9001 #mktoForm_1017.mktoForm select#Country')) {
      document.querySelector('select#Country').addEventListener('change', () => {
        const stateRow = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .mktoFormRow.row_State');
        const optOutRow = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .mktoFormRow.row_Global_Opt_out__c');
        const countryRow = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .mktoFormRow.row_Country');

        // waitForElm('.spz_9001 #mktoForm_1017.mktoForm .mktoFormRow.row_Global_Opt_out__c .mktoCheckboxList label').then(label => {
        //     label.textContent = "Uncheck to stop receiving SailPoint email communications.";
        // });

        document.querySelector('select#State') ? (document.querySelector('label#LblState').textContent = "State", countryRow.classList.remove('spz-full-width')) : (countryRow.classList.add('spz-full-width'));
      });
    }

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

  window.addEventListener('click', function (e) {
    if (e.target.classList.contains('logo-anchor')) {
      this.document.querySelector('a[href="/"]').click();
    }
  });

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