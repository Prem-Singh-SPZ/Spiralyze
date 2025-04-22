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
        if (!body.classList.contains('spz_9002')) {
          body.classList.add('spz_9002');

          waitForElm('.spz_9002 .hero + .row > .row__inner .bg-gradient p.text-h3').then(() => {
            pageModify();
          });

          waitForElm('.spz_9002 #page-container .page-transition .inner-row__inner #mktoForm_1017 input').then(() => {
            formModify();
          });

          //the .spz-hero gets added to the page and removed after some time, so keep checking for it to add the form
          let spzHeroInterval = setInterval(() => {
            hiddenValue('spz_9002', 'spz_9002_variant');
            setHiddenFieldValue();
          }, 1000);
          setTimeout(function () {
            clearInterval(spzHeroInterval);
          }, 10000);
        } else {
          if (body.classList.contains('spz_9002')) {
            hiddenValue('spz_9002', 'spz_9002_variant');
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
    document.querySelector('.spz_9002 .hero + .row').classList.add('spz-hero');
    if (document.querySelectorAll('.spz-logo').length == 0) {
      document.querySelector('.spz_9002 .hero + .row > .row__inner').insertAdjacentHTML('afterbegin', `<div class="spz-logo"><a class="logo-anchor" href="javascript:;"><img src="//res.cloudinary.com/spiralyze/image/upload/v1737104112/sailpoint/9001/logo__colored.svg" alt="SailPoint" class=""></a>`);
    }

    if (document.querySelectorAll('.spz-form-title').length == 0)
      document.querySelector('.spz_9002 .hero + .row > .row__inner .bg-gradient .mkto-wrap.w-full').insertAdjacentHTML('afterbegin', `<div class="spz-form-title">Contact us</div>`);

    if (document.querySelector('.spz_9002 .hero + .row > .row__inner .bg-gradient .mkto-wrap.w-full.iron-theme'))
      document.querySelector('.spz_9002 .hero + .row > .row__inner .bg-gradient .mkto-wrap.w-full.iron-theme').classList.remove('iron-theme');

    if (document.querySelectorAll('.social-proof-logos').length == 0)
      document.querySelector('.spz_9002 .hero + .row').insertAdjacentHTML('afterend', `${typeof additionalSection.socialProofLogos !== 'undefined' ? `<div class="social-proof-logos">
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

    if (document.querySelectorAll('.spz-tab-section').length == 0) {
      // add three tab buttons and their respective content
      document.querySelector('.spz_9002 .hero + .row > .row__inner .bg-gradient').insertAdjacentHTML('afterbegin', `<div class="spz-tab-section">
        <div class="spz-tab-buttons">
            <button class="spz-tab-button active" data-tab="sales">Sales</button>
            <button class="spz-tab-button" data-tab="support">Support</button>
            <button class="spz-tab-button" data-tab="locations">Locations</button>
        </div>
      </div>
        `);

      document.querySelector('.spz_9002 .hero + .row > .row__inner .bg-gradient > .inner-row__inner').setAttribute('data-content', 'sales');
      document.querySelector('.spz_9002 .hero + .row > .row__inner .bg-gradient > .inner-row__inner').classList.add('spz-tab-content', 'active');

      document.querySelector('.spz_9002 .hero + .row > .row__inner .bg-gradient > .inner-row__inner').insertAdjacentHTML('afterend', `<div class="spz-tab-content" data-content="support"><div class="sp-container">
        <div class="sp-contact-info">
            <div class="sp-support">
                <h2 class="box-title">Request support</h2>
                <p class="mob-14">For customer support, please visit the <a href="https://community.sailpoint.com/t5/Contact-Support/ct-p/Contact-Support" target="_blank" class="link">Contact Support</a> page.</p>
                <p class="mob-14">For sales or any other questions, please call us or send an email.</p>
                <h3 class="box-title sp-mt-24">Phone</h3>
                <p class="sp-mb-0">1-888-472-4578 (U.S. Toll-free)</p>
            </div>
            <div class="sp-email">
                <h2 class="box-title">Email us</h2>
                  <div class="sp-email-list">
                  <div class="sp-email-container">
                      <div class="sp-email-tupple">
                        <p class="list-title">Sales</p>
                        <p class="list-value"><a class="link" href="mailto:sales@sailpoint.com">sales@sailpoint.com</a></p>
                      </div>
                      <div class="sp-email-tupple">
                        <p class="list-title">Careers</p>
                        <p class="list-value"><a class="link" href="mailto:jobs@sailpoint.com">jobs@sailpoint.com</a></p>
                      </div>
                      <div class="sp-email-tupple">
                        <p class="list-title">Federal Government Sales</p>
                        <p class="list-value"><a class="link" href="mailto:federal@sailpoint.com">federal@sailpoint.com</a></p>
                      </div>
                      <div class="sp-email-tupple">
                        <p class="list-title">Media Requests</p>
                        <p class="list-value"><a class="link" href="mailto:pr@sailpoint.com">pr@sailpoint.com</a></p>
                      </div>
                       <div class="sp-email-tupple">
                        <p class="list-title">General Information</p>
                        <p class="list-value"><a class="link" href="mailto:info@sailpoint.com">info@sailpoint.com</a></p>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
    </div></div>
    <div class="spz-tab-content" data-content="locations"><div class="sp-container">
        <div class="sp-hq-info">
            <div class="sp-hq-details">
                <h2 class="box-headline">Corporate headquarters</h2>
                <div class="sp-address-container">
                  <div class="sp-address">
                    <h3 class="box-title">United States</h3>
                    <p>11120 Four Points Drive, Suite 100 <br>Austin, TX 78726</p>
                  </div>
                  <div class="sp-contact">
                    <p class="phone-num">Phone</p>
                    <a href="tel:15123462000" class="link">1-512-346-2000</a>
                  </div>
                  <div class="sp-contact">
                    <p class="phone-num">Fax</p>
                    <a href="tel:15123462033" class="link">1-512-346-2033</a>
                  </div>
              </div>
            </div>
        </div>
        <div class="int-locations">
        </div>
        <div class="int-sales-locations">
        </div>
    </div></div>`);
    }


    waitForElm('.bg-gradient .spz-tab-content[data-content="locations"]').then((elm) => {
      moveElement('.page-transition #corporate-location + .row', '.spz-tab-content[data-content="locations"] .int-locations');
      moveElement('.page-transition #corporate-location + .row', '.spz-tab-content[data-content="locations"] .int-sales-locations');

      if (document.querySelector('.spz_9002 .hero + .row > .row__inner .bg-gradient .int-locations .row .row__inner p.text-h2')) {
        document.querySelector('.spz_9002 .hero + .row > .row__inner .bg-gradient .int-locations .row .row__inner p.text-h2').textContent = 'International locations';
      }
    });
  }

  function formModify() {
    // Add class in mktoField using the name attribute
    var form_fields = document.querySelectorAll('.spz_9002 #mktoForm_1017.mktoForm .mktoFormRow');
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
      waitForElm(`.spz_9002 .page-transition .inner-row__inner form.mktoForm .mktoFieldWrap label.mktoLabel${id}`).then(label => {
        label.innerHTML = (label.querySelector('.mktoAsterix')?.outerHTML || '') + text;
      });
    });

    waitForElm(`.spz_9002 .page-transition .inner-row__inner form.mktoForm .mktoFieldWrap select#Country`).then((elm) => {
      setTimeout(() => {
        document.querySelectorAll(`.spz_9002 form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
          if (el && el.value && (el.value != '')) {
            el.closest('.mktoFieldWrap').classList.add('filled');
          }
        });
      }, 1000);
    });

    // On input focus add class on closest parent field class
    function focusFields() {
      // Attach events using event delegation
      const form = document.querySelector('.spz_9002 form.mktoForm');
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
        const stateField = document.querySelector('.spz_9002 form.mktoForm .mktoFieldWrap .mktoField#State');
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

      const container = document.querySelector('.spz_9002 form.mktoForm');
      if (container) {
        observer.observe(container, { childList: true, subtree: true });
      }
    }

    focusFields();

    function checkAllFields() {
      const fields = document.querySelectorAll('.spz_9002 form.mktoForm .mktoField');
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
      }, 500);


      setTimeout(() => {
        clearInterval(timeBuffer);
      }, 1000);
    }

    if (document.querySelector('.spz_9002 #mktoForm_1017.mktoForm select#Country')) {
      document.querySelector('select#Country').addEventListener('change', () => {
        const stateRow = document.querySelector('.spz_9002 #mktoForm_1017.mktoForm .mktoFormRow.row_State');
        const reasonForInq = document.querySelector('.spz_9002 #mktoForm_1017.mktoForm .mktoFormRow.row_reasonforInquiry');
        const countryRow = document.querySelector('.spz_9002 #mktoForm_1017.mktoForm .mktoFormRow.row_Country');

        // waitForElm('.spz_9002 #mktoForm_1017.mktoForm .mktoFormRow .mktoCheckboxList.mktoLogicalField input[name="Global_Opt_out__c"] ~ label').then(label => {
        //   label.textContent = "Uncheck to stop receiving SailPoint email communications.";
        // });

        document.querySelector('select#State') ? (document.querySelector('label#LblState').textContent = "State", countryRow.classList.remove('spz-full-width')) : (countryRow.classList.add('spz-full-width'));
      });
    }

    //check if the MktoForms2 is loaded
    if (typeof MktoForms2 !== 'undefined') {
      MktoForms2.whenReady(function (form) {
        form.onSuccess(function (values, followUpUrl) {
          document.body.classList.add('form-submit');
        });
      });
    }
  }

  window.addEventListener('click', function (e) {
    if (e.target.classList.contains('logo-anchor')) {
      this.document.querySelector('a[href="/"]').click();
    }

    //create tabbing functionality for the tab buttons
    if (e.target.classList.contains('spz-tab-button')) {
      const tabButtons = document.querySelectorAll('.spz-tab-button');
      const tabContents = document.querySelectorAll('.spz-tab-content');
      tabButtons.forEach(button => {
        button.classList.remove('active');
      });
      tabContents.forEach(content => {
        content.classList.remove('active');
      });
      e.target.classList.add('active');
      const content = document.querySelector(`.spz-tab-content[data-content="${e.target.getAttribute('data-tab')}"]`);
      content.classList.add('active');
    }
  });

  function removeTest() {
    setTimeout(() => {
      if (document.querySelector('.spz_9002')) {
        document.body.classList.remove("spz_9002");
      }
      if (document.querySelector('.spz-show-modal')) {
        document.body.classList.remove('spz-show-modal');
        document.querySelector('html').classList.remove('spz-no-scroll');
      }
      if (document.querySelector('.spz-modal')) {
        document.querySelector('.spz-modal').remove();
      }
    }, 1000);
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

    //click event listener
    document.addEventListener('click', function (e) {
      if (e.target.closest('#mktoForm_1017 .mktoButton')) {
        waitForElm('.spz_9002 #mktoForm_1017.mktoForm .mktoError').then(function (elm) {
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
              if (document.querySelector('.spz_9002 #mktoForm_1017.mktoForm .mktoError #ValidMsgEmail') !== null) {
                document.querySelector('.spz_9002 #mktoForm_1017.mktoForm .mktoError #ValidMsgEmail').parentNode.parentNode.classList.add('error');
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
    if (document.querySelector('.spz_9002')) {
      document.body.classList.remove("spz_9002");
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