(function () {

  const additionalSection = {
    socialProofLogos: {
      socialProofHeading: "50% of the Fortune 500 and 25% of the Forbes Global 2000",
      socialProofImages: [
        {
          url: "//res.cloudinary.com/spiralyze/image/upload/v1737104228/sailpoint/9001/logo_01.svg",
          imgAlt: "GM",
        },
        {
          url: "//res.cloudinary.com/spiralyze/image/upload/v1737104228/sailpoint/9001/logo_02.svg",
          imgAlt: "Hershey",
        },
        {
          url: "//res.cloudinary.com/spiralyze/image/upload/v1737104228/sailpoint/9001/logo_03.svg",
          imgAlt: "Paccar",
        },
        {
          url: "//res.cloudinary.com/spiralyze/image/upload/v1737104228/sailpoint/9001/logo_04.svg",
          imgAlt: "Philips",
        },
        {
          url: "//res.cloudinary.com/spiralyze/image/upload/v1737104228/sailpoint/9001/logo_05.svg",
          imgAlt: "RWE",
        },
        {
          url: "//res.cloudinary.com/spiralyze/image/upload/v1737104229/sailpoint/9001/logo_06.svg",
          imgAlt: "T Mobile",
        },
        {
          url: "//res.cloudinary.com/spiralyze/image/upload/v1737104228/sailpoint/9001/logo_07.svg",
          imgAlt: "The Home Depot",
        },
        {
          url: "//res.cloudinary.com/spiralyze/image/upload/v1737360173/sailpoint/9001/logo_9.svg",
          imgAlt: "The Salvation Army",
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
            hiddenValue('spz_9001', 'SPZ_9001_variant');
            setHiddenFieldValue();
          }, 1000);
          setTimeout(function () {
            clearInterval(spzHeroInterval);
          }, 10000);
        } else {
          if (body.classList.contains('spz_9001')) {
            hiddenValue('spz_9001', 'SPZ_9001_variant');
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
    if (document.querySelectorAll('.spz-logo').length == 0) {
      document.querySelector('.spz_9001 .hero + .row > .row__inner').insertAdjacentHTML('afterbegin', `<div class="spz-logo"><a class="logo-anchor" href="javascript:;"><img src="//res.cloudinary.com/spiralyze/image/upload/v1737104112/sailpoint/9001/logo__colored.svg" alt="SailPoint" class=""></a>`);
    }

    if (document.querySelectorAll('.spz-form-title').length == 0)
      document.querySelector('.spz_9001 .hero + .row > .row__inner .bg-gradient .mkto-wrap.w-full').insertAdjacentHTML('afterbegin', `<div class="spz-form-title">Contact us</div>`);

    if (document.querySelectorAll('.social-proof-logos').length == 0)
      document.querySelector('.spz_9001 .hero + .row').insertAdjacentHTML('afterend', `${typeof additionalSection.socialProofLogos !== 'undefined' ? `<div class="social-proof-logos">
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
        : ``} 
      <div class="sp-container">
        <div class="sp-contact-info">
            <div class="sp-support">
                <h2 class="box-title">Request support</h2>
                <p>For customer support, please visit the <a href="https://community.sailpoint.com/t5/Contact-Support/ct-p/Contact-Support" target="_blank" class="link">Contact Support</a> page.</p>
                <p>For sales or any other questions, please call us or send an email.</p>
                <h3 class="box-title sp-mt-32">Phone</h3>
                <p class="sp-mb-0">1-888-472-4578 (U.S. Toll-free)</p>
            </div>
            <div class="sp-email">
                <h2 class="box-title">Email us</h2>
                  <div class="sp-email-list">
                  <div class="sp-email-container-1">
                      <div class="sp-email-tupple">
                        <p class="list-title">Sales</p>
                        <p class="list-value link"><a href="mailto:sales@sailpoint.com">sales@sailpoint.com</a></p>
                      </div>
                      <div class="sp-email-tupple">
                        <p class="list-title">Federal Government Sales</p>
                        <p class="list-value link"><a href="mailto:federal@sailpoint.com">federal@sailpoint.com</a></p>
                      </div>
                       <div class="sp-email-tupple">
                        <p class="list-title">General Information</p>
                        <p class="list-value link"><a href="mailto:info@sailpoint.com">info@sailpoint.com</a></p>
                      </div>
                  </div>
                  <div class="sp-email-container-2">
                     <div class="sp-email-tupple">
                      <p class="list-title">Careers</p>
                      <p class="list-value link"><a href="mailto:jobs@sailpoint.com">jobs@sailpoint.com</a></p>
                    </div>
                    <div class="sp-email-tupple">
                      <p class="list-title">Media Requests</p>
                      <p class="list-value link"><a href="mailto:pr@sailpoint.com">pr@sailpoint.com</a></p>
                    </div>
                  </div>
                  </div>
            </div>
        </div>

        <div class="sp-hq-info">
            <div class="sp-hq-details">
                <h2 class="box-headline">Corporate headquarters</h2>
                <h3 class="box-title">United States</h3>
                <div class="sp-address">
                  <p>11120 Four Points Drive, Suite 100 <br class="desk-only">Austin, TX 78726</p>
                </div>
                <p class="phone-num"><a href="tel:15123462000" class="link">1-512-346-2000</a> Phone</p>
                <p>1-512-346-2033 Fax</p>
                <div class="modal-cta-container"><a href="javascript:;" class="spz-trigger-modal">See international locations <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                  <path d="M15.7586 5.62571L11.4908 1.1517C11.4171 1.07228 11.3278 1.00892 11.2285 0.965593C11.1291 0.922266 11.0219 0.899902 10.9136 0.899902C10.8052 0.899902 10.698 0.922266 10.5987 0.965593C10.4994 1.00892 10.4101 1.07228 10.3364 1.1517C10.1827 1.31691 10.0973 1.53415 10.0973 1.75976C10.0973 1.98536 10.1827 2.20261 10.3364 2.36781L13.2011 5.37076H0.809587C0.590443 5.38413 0.384657 5.48059 0.234212 5.64047C0.0837674 5.80034 0 6.01159 0 6.2311C0 6.45062 0.0837674 6.66186 0.234212 6.82174C0.384657 6.98161 0.590443 7.07808 0.809587 7.09145H13.2032L10.3428 10.0987C10.1891 10.2639 10.1037 10.4811 10.1037 10.7067C10.1037 10.9323 10.1891 11.1496 10.3428 11.3148C10.4165 11.3942 10.5058 11.4576 10.6051 11.5009C10.7044 11.5442 10.8116 11.5666 10.92 11.5666C11.0283 11.5666 11.1355 11.5442 11.2349 11.5009C11.3342 11.4576 11.4235 11.3942 11.4972 11.3148L15.765 6.84076C15.9172 6.67469 16.0012 6.45726 16 6.23198C15.9988 6.0067 15.9126 5.79017 15.7586 5.62571Z" fill="#0071CE"/>
                </svg></a></div>
            </div>
            <div class="sp-map">
                <picture>
                    <source media="(min-width: 1200px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/9001/image_5.webp">
                    <source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/9001/image_4.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/9001/image_3.webp" alt="SailPoint location map">
                </picture>
            </div>
        </div>
    </div>`);

    if (document.querySelectorAll('.spz-modal').length == 0)
      document.body.insertAdjacentHTML('beforeend', `<div class="spz-modal"><div class="spz-modal-content"><span class="spz-close-modal"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M24 8L8 24M24 24L8 8" stroke="#415364" stroke-width="2.66667" stroke-linecap="round"/>
      </svg></span><div class="spz-modal-body"><div class="int-locations"></div><div class="int-sales-locations"></div></div></div></div>`);

    waitForElm('.spz-modal-content .int-locations').then((elm) => {
      moveElement('.page-transition #corporate-location + .row', '.spz-modal-content .int-locations');
      moveElement('.page-transition #corporate-location + .row', '.spz-modal-content .int-sales-locations');

      if (document.querySelector('.spz-modal .spz-modal-content .spz-modal-body .int-locations .row .row__inner p.text-h2')) {
        document.querySelector('.spz-modal .spz-modal-content .spz-modal-body .int-locations .row .row__inner p.text-h2').textContent = 'International locations';
      }
    });
  }

  function formModify() {
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

    // waitForElm('.spz_9001 .page-transition .inner-row__inner form.mktoForm .mktoFormRow .mktoCheckboxList.mktoLogicalField input[name="Global_Opt_out__c"] ~ label').then(label => {
    //   label.textContent = "Uncheck to stop receiving SailPoint email communications.";
    // });

    waitForElm('.spz_9001 #mktoForm_1017.mktoForm .disclaimer').then(label => {
      // Change Field Position
      const email_field = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .row_Email');
      const last_name_field = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .row_LastName');
      const company_field = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .row_Company');
      const title_field = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .row_Title');

      if (company_field && title_field) {
        last_name_field.insertAdjacentElement('afterend', email_field);
        company_field.after(title_field);
      }

      swapPrivacyCopies();
    });

    function swapPrivacyCopies() {
      const disclaimer_field = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .mktoCaptchaDisclaimer');
      const disclaimer = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .disclaimer');
      const button = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .mktoButtonRow');

      let fieldChanged = setInterval(() => {
        if (disclaimer_field && disclaimer && button) {
          if (!document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .mktoButtonRow + .disclaimer')) {
            clearInterval(fieldChanged);
            // disclaimer.after(button);
            button.insertAdjacentElement('afterend', disclaimer);
            button.insertAdjacentElement('beforebegin', disclaimer_field);
            // button.after(disclaimer_field);
          }
        }
      }, 100);
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
        const reasonForInq = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .mktoFormRow.row_reasonforInquiry');
        const countryRow = document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .mktoFormRow.row_Country');

        // waitForElm('.spz_9001 #mktoForm_1017.mktoForm .mktoFormRow .mktoCheckboxList.mktoLogicalField input[name="Global_Opt_out__c"] ~ label').then(label => {
        //   label.textContent = "Uncheck to stop receiving SailPoint email communications.";
        // });

        document.querySelector('select#State') ? (document.querySelector('label#LblState').textContent = "State", reasonForInq.classList.remove('spz-full-width')) : (reasonForInq.classList.add('spz-full-width'));

        swapPrivacyCopies();
      });
    }

    //check if the MktoForms2 is loaded
    if (typeof MktoForms2 !== 'undefined') {
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
  }

  window.addEventListener('click', function (e) {
    if (e.target.classList.contains('logo-anchor')) {
      this.document.querySelector('a[href="/"]').click();
    }

    if (e.target.closest('.spz-trigger-modal')) {
      document.body.classList.add('spz-show-modal');
      document.querySelector('html').classList.add('spz-no-scroll');
    }
    if (e.target.closest('.spz-close-modal')) {
      document.body.classList.remove('spz-show-modal');
      document.querySelector('html').classList.remove('spz-no-scroll');
    }
  });

  function removeTest() {
    if (document.querySelector('.spz-modal')) {
      document.querySelector('.spz-modal').remove();
    }
    setTimeout(() => {
      if (document.querySelector('.spz_9001')) {
        document.body.classList.remove("spz_9001");
      }
      if (document.querySelector('.spz-show-modal')) {
        document.body.classList.remove('spz-show-modal');
        document.querySelector('html').classList.remove('spz-no-scroll');
      }
    }, 2000);
  }

  // Do not touch below hidden field code for any Experiment Start
  function hiddenValue(currentHiddenFieldName, currentHiddenFieldValue) {
    var ExistingHiddenFieldName = getCookie('HiddenFieldNameContactUs');
    var ExistingHiddenFieldValue = getCookie('HiddenFieldValueContactUs');

    if (!ExistingHiddenFieldName) {
      setCookie('HiddenFieldNameContactUs', currentHiddenFieldName, 1);
      setCookie('HiddenFieldValueContactUs', currentHiddenFieldValue, 1);
    } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
      setCookie('HiddenFieldNameContactUs', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
      setCookie('HiddenFieldValueContactUs', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
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
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValueContactUs');
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

  }
  // Do not touch below hidden field code for any Experiment over

  //click event listener
  document.addEventListener('click', function (e) {
    if (e.target.closest('#mktoForm_1017 .mktoButton')) {
      waitForElm('.spz_9001 #mktoForm_1017.mktoForm .mktoError').then(function (elm) {
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
            if (document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .mktoError #ValidMsgEmail') !== null) {
              document.querySelector('.spz_9001 #mktoForm_1017.mktoForm .mktoError #ValidMsgEmail').parentNode.parentNode.classList.add('error');
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
    if (document.querySelector('.spz_9001')) {
      document.body.classList.remove("spz_9001");
    }
    if (document.querySelector('.form-submit')) {
      document.body.classList.remove("form-submit");
    }
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

  function moveElement(source, target) {
    const f = document.createDocumentFragment();
    if (document.querySelector(source) != null) {
      f.appendChild(document.querySelector(source));
      document.querySelector(target).appendChild(f);
    }
  }
})();