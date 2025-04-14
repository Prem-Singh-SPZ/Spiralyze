(function () {

  window.addEventListener("pageshow", function (event) {
    waitForElm('form.mktoForm').then(function (elem) {
      let form = document.querySelector("form.mktoForm");
      let submitButton = form.querySelector('[type="submit"]');
      if (event.persisted) {
        submitButton.textContent = "Submit";
        submitButton.disabled = false;
      }
    });
  });


  let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
      clearInterval(bodyLoaded);
      if (!body.classList.contains('spz-3002')) {
        body.classList.add('spz-3002');

        const slickScript = document.createElement('script');
        slickScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js';
        const slickStyle = document.createElement('link');
        slickStyle.rel = 'stylesheet';
        slickStyle.type = 'text/css';
        slickStyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css';
        document.body.appendChild(slickScript);
        document.body.appendChild(slickStyle);

        const normalizePath = (path) => path.replace(/\/$/, "");
        const currentPath = normalizePath(window.location.pathname);
        const pageClasses = {
          "/lp/ams-agency-management-system": "page-free-quote",
          "/landing/comparative-rater/": "page-buy-now",
          "/landing/insurance-quoting/": "page-special-deals"
        };
        if (pageClasses[currentPath]) {
          document.body.classList.add(pageClasses[currentPath]);
        }

        const template_heroSelector = `main#content`;
        const template_position = "beforebegin";
        let template_formSelector;
        window.location.pathname == '/lp/ams-agency-management-system' ? template_formSelector = `section.TwoColumnMarketoForm .row:nth-child(2) .offset-md-0` : template_formSelector = `section.SingleColumnMarketoForm .row:nth-child(2) .offset-md-0`;
        const template_heroContent = {
          siteLogo: {
            url: "//res.cloudinary.com/spiralyze/image/upload/v1743759802/ezlynx/3002/ezlogo-redblack.svg",
            alt: "EZLynx logo"
          },
          formHeadings: {
            "/lp/ams-agency-management-system": "Get Started",
            "/landing/comparative-rater": "Get Started",
            "/landing/insurance-quoting": "Get Started"
          },
          contentSuperHeading: {
            "/lp/ams-agency-management-system": "Agency Management Software",
            "/landing/comparative-rater": "Rates & Quoting Solution",
            "/landing/insurance-quoting": "Insurance Quoting solution"
          },
          contentHeading: {
            "/lp/ams-agency-management-system": "Get the #1 agency management solution.",
            "/landing/comparative-rater": "Win deals faster with the #1 comparative rater.",
            "/landing/insurance-quoting": "Win more deals with the #1 insurance quoting tool."
          },
          featureContent: {
            "/lp/ams-agency-management-system": [
              "<b>Sales & Payments.</b> Manage leads. Auto-move leads through the pipeline. Find cross-sell opps. Close deals. Let clients pay online.",
              "<b>Policy Management.</b> Manage policies, reporting, documents, and client communications. Automate renewals. Increase retention.",
              "<b>Generate Quotes.</b> Compare and get rates from 330+ carriers in one platform. Send quotes online or via text. Bind and issue policies.",
            ],
            "/landing/comparative-rater": [
              "<b>Carriers.</b> Compare and get rates from 330+ carriers in one platform. Personal auto, home, and dwelling fire policies.",
              "<b>Quotes.</b> Generate quotes in a few clicks. Provide to customers online or via text. Bind and issue policies.",
              "<b>Renewals.</b> Quickly update client info. Automate re-quoting for renewals. Compare current and renewal coverage."
            ],
            "/landing/insurance-quoting": [
              "<b>Quoting.</b> Spend less time quoting. Compare 330+ carriers in one platform. Auto, home, dwelling fire.",
              "<b>Sales.</b> Capture leads on your agency website. Automate follow-ups and email marketing campaigns.",
              "<b>Servicing.</b> Automate remarketing for premiums. Compare current and renewal coverage."
            ]
          },
          featureIcons: {
            "/lp/ams-agency-management-system": [
              {
                iconImage: "//res.cloudinary.com/spiralyze/image/upload/v1742802034/ezlynx/3002/tablercheck.svg",
                iconAlt: "Checkmark"
              },
              {
                iconImage: "//res.cloudinary.com/spiralyze/image/upload/v1742802034/ezlynx/3002/tablercheck.svg",
                iconAlt: "Checkmark"
              },
              {
                iconImage: "//res.cloudinary.com/spiralyze/image/upload/v1742802034/ezlynx/3002/tablercheck.svg",
                iconAlt: "Checkmark"
              }
            ],
            "/landing/comparative-rater": [
              {
                iconImage: "//res.cloudinary.com/spiralyze/image/upload/v1742802034/ezlynx/3002/tablercheck.svg",
                iconAlt: "Checkmark"
              },
              {
                iconImage: "//res.cloudinary.com/spiralyze/image/upload/v1742802034/ezlynx/3002/tablercheck.svg",
                iconAlt: "Checkmark"
              },
              {
                iconImage: "//res.cloudinary.com/spiralyze/image/upload/v1742802034/ezlynx/3002/tablercheck.svg",
                iconAlt: "Checkmark"
              }
            ],
            "/landing/insurance-quoting": [
              {
                iconImage: "//res.cloudinary.com/spiralyze/image/upload/v1742802034/ezlynx/3002/tablercheck.svg",
                iconAlt: "Checkmark"
              },
              {
                iconImage: "//res.cloudinary.com/spiralyze/image/upload/v1742802034/ezlynx/3002/tablercheck.svg",
                iconAlt: "Checkmark"
              },
              {
                iconImage: "//res.cloudinary.com/spiralyze/image/upload/v1742802034/ezlynx/3002/tablercheck.svg",
                iconAlt: "Checkmark"
              }
            ],
          },
        };
        const template_socialProofSection = {
          socialProofHeading: "Thousands of Agency Owners Trust EZLynx to Help Run Their Business",
          socialProofImages: [
            { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/1001/logo_26.webp", alt: "StreetSmart", width: "208", height: "72" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/2001/logo_17.webp", alt: "REED INSURANCE", width: "166", height: "72" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/1001/logo_25.webp", alt: "SIAA", width: "86", height: "72" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/1001/logo_27.webp", alt: "Smart Choice", width: "142", height: "72" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/1001/logo_28.webp", alt: "PGI", width: "146", height: "72" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/1001/logo_32.webp", alt: "PIA", width: "97", height: "72" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/1001/logo_29.webp", alt: "Affordable American Insurance", width: "214", height: "72" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/1001/logo_30.webp", alt: "ROCKY MOUNTAIN INSURANCE", width: "190", height: "72" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/1001/logo_33.webp", alt: "COMPASS insurance", width: "139", height: "72" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/1001/logo_31.webp", alt: "INTEGRA insurance services", width: "137", height: "72" },
          ]
        }

        function addBaseline(formData, whereToPut, template_formSelector, template_heroSelector, socialProofdata, footerdata) {
          const formHeading = template_heroContent.formHeadings[currentPath] || "";
          const superHeading = template_heroContent.contentSuperHeading[currentPath] || "";
          const contentHeading = template_heroContent.contentHeading[currentPath] || "";
          const featureContent = template_heroContent.featureContent[currentPath] || [];
          const featureIcon = template_heroContent.featureIcons[currentPath] || [];

          const formTemplate = `<div class="spz-body-wrapper">
            <section class="spz-hero">
              <div class="spz-wrapper">
                ${formData.siteLogo.url ? `<div class="site-header-logo">
                  <a href="/" title="Home">
                    <img src="${formData.siteLogo.url}" alt="${formData.siteLogo.alt}" width="120" height="74">
                  </a>
                </div>` : ""}
                <div class="spz-form-wrap">
                  <div class="content-section">
                    ${superHeading ? `<h3 class="content-superheading">${superHeading}</h3>` : ""}
                    ${contentHeading ? `<h2 class="content-heading">${contentHeading}</h2>` : ""}
                    <div class="spz-features-wrap">
                      ${featureIcon.map((item, index) => `<div class="feature-item">
                        <img src="${item.iconImage}" alt="${item.iconAlt}" width="24" height="24" />
                        <span>${featureContent[index] || ''}</span>
                      </div>`).join("")}
                    </div>
                  </div>
                  <div class="spz-form-section">
                    ${formHeading ? `<h3 class="form-heading">${formHeading}</h3>` : ""}
                    <div class="the-form"></div>
                  </div>
                  <div class="heading-block">
                    ${superHeading ? `<h3 class="content-superheading">${superHeading}</h3>` : ""}
                    ${contentHeading ? `<h2 class="content-heading">${contentHeading}</h2>` : ""}
                  </div>
                </div>
              </div>
            </section>
            ${typeof socialProofdata.socialProofImages !== 'undefined' ? `<section class="social-proof-logos">
              <div class="social-proof-heading">${socialProofdata.socialProofHeading}</div>
              <div class="logos-wrapper">
                ${socialProofdata.socialProofImages.length > 0 ? `${[...socialProofdata.socialProofImages, ...socialProofdata.socialProofImages].map((item) => `<div class="logo-item">
                  <img src="${item.url}" alt="${item.alt}" width="${item.width}" height="${item.height}" />
                </div>`).join("")}` : ""}
              </div>
            </section>` : ``}
          </div>`;

          waitForElm(template_heroSelector).then(function (elem) {
            document.querySelector(template_heroSelector).insertAdjacentHTML(whereToPut, formTemplate);
          });
          let formLoaded = setInterval(() => {
            if (document.querySelector(template_formSelector) && document.querySelectorAll(`${template_formSelector} input`).length > 0) {
              clearInterval(formLoaded)
              document.querySelector(".spz-form-wrap .the-form").appendChild(document.querySelector(template_formSelector));
              formModify();
            }
          });
          waitForElm('.spz-3002 .social-proof-logos .logos-wrapper').then(function (elem) {
            slickScript.onload = function () {
              $(elem).slick({
                autoplay: true,
                autoplaySpeed: 0,
                speed: 5000,
                arrows: false,
                swipe: false,
                slidesToShow: 4,
                variableWidth: true,
                cssEase: 'linear',
                pauseOnFocus: false,
                pauseOnHover: false,
              });
            };
          });
        }
        addBaseline(template_heroContent, template_position, template_formSelector, template_heroSelector, template_socialProofSection);

        if (document.querySelectorAll('.spz-3002 #content .spz-footer').length === 0) {
          document.querySelector('.spz-3002 #content').insertAdjacentHTML('afterend', `<section class="spz-footer">
              <div class="spz-wrapper">
                <div class="copyright">
                 <p>All rights reserved © EZLynx 2025.</p>
                </div>
                <ul class="footer-menu">
                    <li><a href="https://www.ezlynx.com/globalassets/all-documents/ezlynx/legal/terms.pdf" target="_blank">Terms of Use</a></li>
                    <li><a href="/legal/privacy/" target="_blank">Privacy Policy</a></li>
                </ul>
              </div>
            </section>`);
        }
      }
    }
  });

  function formModify() {
    // Add class in mktoFormRow using count
    var form_fields = document.querySelectorAll('.spz-3002 .spz-hero .the-form form.mktoForm .mktoFormRow');
    for (var i = 0; i < form_fields.length; i++) {
      var dynamicClass = 'field-' + (i + 1);
      form_fields[i].classList.add(dynamicClass);
    }
    // Change Label Text
    const labels = {
      "LblEmail": `Email<div class="mktoAsterix">*</div>`,
      "LblCompany": `Company<div class="mktoAsterix">*</div>`,
      "LblFirstName": `First Name<div class="mktoAsterix">*</div>`,
      "LblLastName": `Last Name<div class="mktoAsterix">*</div>`,
      "LblPhone": `Phone<div class="mktoAsterix">*</div>`,
      "LblPostalCode": `Zip Code<div class="mktoAsterix">*</div>`,
      "LblStateCode": `State<div class="mktoAsterix">*</div>`,
      "LblNumberOfEmployees": `Number of Employees<div class="mktoAsterix">*</div>`,
      "LblPrimary_Alliance_Partner__c": `Alliance Partner<div class="mktoAsterix">*</div>`,
      "LblTitle": `Title<div class="mktoAsterix">*</div>`
    };
    Object.entries(labels).forEach(([id, text]) => {
      const label = document.querySelector(`label#${id}`);
      if (label) {
        label.innerHTML = text;
      }
    });
    // Change Field Positions
    var normalizePath = (path) => path.replace(/\/$/, "");
    var currentPath = normalizePath(window.location.pathname);
    // if (currentPath == '/landing/insurance-quoting/') {
    //   var fname_field = document.querySelector('.spz-3002 .spz-hero .the-form form.mktoForm .mktoFormRow.field-1');
    //   var email_field = document.querySelector('.spz-3002 .spz-hero .the-form form.mktoForm .mktoFormRow.field-6');
    //   var company_field = document.querySelector('.spz-3002 .spz-hero .the-form form.mktoForm .mktoFormRow.field-3');
    //   fname_field.before(email_field);
    //   email_field.after(company_field);
    // } else {
    var email_field = document.querySelector('.spz-3002 .spz-hero .the-form form.mktoForm .mktoFormRow.field-1');
    var company_field = document.querySelector('.spz-3002 .spz-hero .the-form form.mktoForm .mktoFormRow.field-4');
    company_field.after(email_field);

    const captchaField = document.querySelector('.spz-3002 .spz-hero .the-form form.mktoForm .mktoCaptchaDisclaimer');
    const submitButton = document.querySelector('.spz-3002 .spz-hero .the-form form.mktoForm .mktoButtonRow');
    const privacyPolicy = document.querySelector('.spz-3002 .spz-hero .the-form form.mktoForm .mktoFormRow.field-7');
    if (captchaField && submitButton && privacyPolicy) {
      submitButton.after(captchaField);
      submitButton.after(privacyPolicy);
    }
    // }
    hiddenValue('SPZ_3002', 'SPZ_3002_v1');
    waitForElm('.spz-3002 .btn.amber').then(function (elem) {
      elem.setAttribute('href', 'javascript:void(0);');
    });


    // On input focus add class on closest parent field class
    function focusFields() {
      document.querySelectorAll(`.spz-3002 .spz-hero .the-form form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
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

    document.querySelector('.spz-3002 .spz-hero .the-form form.mktoForm .mktoButtonRow button.mktoButton').addEventListener('click', function (event) {
      document.querySelectorAll(`.spz-3002 .spz-hero .the-form form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (elem) {
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

        if (elem.type === 'number') {
          if (elem.value.trim() !== '' || elem.validity.badInput) {
            elem.closest('.mktoFieldWrap').classList.add('filled');
          } else {
            elem.closest('.mktoFieldWrap').classList.remove('filled');
          }
        } else {
          if (elem.value.trim() !== '') {
            elem.closest('.mktoFieldWrap').classList.add('filled');
          } else {
            elem.closest('.mktoFieldWrap').classList.remove('filled');
          }
        }
      }, 100);

      setTimeout(() => {
        clearInterval(timeBuffer);
      }, 1000);
    }
  }

  //check click event on window
  window.addEventListener('click', function (event) {
    if (event.target.closest('.btn.amber')) {
      //scroll page to .spz-form-section slowly
      const target = document.querySelector('.spz-3002 .spz-hero .spz-form-section');
      if (target) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  });

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
    let callHF = setInterval(() => {
      setHiddenFieldValue();
    }, 100);

    setTimeout(() => {
      clearInterval(callHF);
    }, 10000);
  }

  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=ezlynx.com;";
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
    waitForElm(`form.mktoForm input[name="CRO1__c"]`).then((elm) => {
      var intellimize1 = document.querySelector(`form.mktoForm input[name="CRO1__c"]`);
      var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');
      if (intellimize1.value == '') {
        intellimize1.value = ExistingHiddenFieldValue;
      } else {
        if (!intellimize1.value.includes(ExistingHiddenFieldValue)) {
          intellimize1.value = intellimize1.value + ',' + ExistingHiddenFieldValue;
        }
      }
    });
  }
  // Do not touch below hidden field code for any Experiment over

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
