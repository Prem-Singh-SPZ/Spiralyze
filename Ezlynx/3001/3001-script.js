(function () {

  const expName = 'SPZ_3001';
  const variantName = expName + `_V1`;
  const hiddenInputSelector = '.SPZ-3001-V1 .spz-form-wrap form.mktoForm input[name="CRO1__c"]';
  const currentPath = window.location.pathname;
  const pageClasses = {
    "/landing/find-winning-quotes-faster": "page-winning-quotes",
    "/lp/ams-agency-management-system": "page-ams-agency-management-system",
    "/landing/comparative-rater": "page-comparative-rater",
    "/landing/insurance-quoting": "page-insurance-quoting",
  };

  let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
      clearInterval(bodyLoaded);
      if (!body.classList.contains('SPZ-3001-V1')) {
        body.classList.add('SPZ-3001-V1');

        if (pageClasses[currentPath]) {
          document.body.classList.add(pageClasses[currentPath]);
        }

        const template_heroSelector = `main#content`;
        const template_position = "beforebegin";
        const template_footer_position = "afterend";
        const template_formSelector = pageClasses[currentPath] === "page-ams-agency-management-system" ? `section.TwoColumnMarketoForm .row:nth-child(2) .offset-md-0` : `section.SingleColumnMarketoForm .row:nth-child(2) .offset-md-0`;
        const template_heroContent = {
          siteLogo: {
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/2001/ezlynx_logo.webp",
            alt: "EZLynx logo"
          },
          formHeading: "Get Started",
          formFooter: ``,
          contentSuperHeading: {
            "/lp/ams-agency-management-system": "Agency Management Software",
            "/landing/comparative-rater": "Rates & Quoting solution",
            "/landing/insurance-quoting": "Insurance Quoting solution"
          },
          contentHeading: {
            "/lp/ams-agency-management-system": "Get the #1 agency solution. Boost sales.",
            "/landing/comparative-rater": "Win deals faster with #1 comparative rater.",
            "/landing/insurance-quoting": "Win deals with the #1 instant quoting tool."
          },
          featureContent: {
            "/lp/ams-agency-management-system": [
              "<b>Generate Quotes.</b> Instant personal and commercial rates. 330+ carriers. Send quotes online or via text. Bind and issue policies.",
              "<b>Policy Management.</b> Manage policies, reporting, documents, and client communications. Automate renewals. Increase retention.",
              "<b>Sales & Payments.</b> Manage leads. Auto-move leads through the pipeline. Find cross-sell opps. Close deals. Let clients pay online."
            ],
            "/landing/comparative-rater": [
              "<b>Carriers.</b> Get instant rates from 330+ carriers. Compare multiple carriers at once. Personal auto, home, and dwelling fire policies. ",
              "<b>Quotes.</b> Generate quotes in a few clicks. Send to customers online or via text. Bind and issue policies.",
              "<b>Renewals.</b> Instantly update client info. Automate re-quoting for renewals. Compare current and renewal coverage."
            ],
            "/landing/insurance-quoting": [
              "<b>Quoting.</b> Let clients get instant quotes directly from your website. Compare 330+ carriers. Auto, home, dwelling fire, and more. ",
              "<b>Sales.</b> Capture leads on your agency website and re-quote. Automate follow-ups and email marketing campaigns.",
              "<b>Servicing.</b> Track quote status. Automate re-quoting for renewals. Compare current and renewal coverage."
            ]
          },
        };
        const template_socialProofSection = {
          socialProofHeading: "Thousands of Agency Owners Trust EZLynx to Help Run Their Business",
          socialProofLogos: [
            { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/3001/logo_16.webp", alt: "StreetSmart", width: "208", height: "35" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/3001/logo_17.webp", alt: "Reed Insurance", width: "166", height: "51" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/3001/logo_7.webp", alt: "SIAA", width: "86", height: "34" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/3001/logo_18.webp", alt: "Smart Choice", width: "142", height: "48" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/3001/logo_10.webp", alt: "Premier Group Insurance", width: "146", height: "39" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/3001/logo_12.webp", alt: "PIA", width: "97", height: "38" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/3001/logo_11.webp", alt: "Affordable American Insurance", width: "214", height: "42" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/3001/logo_14.webp", alt: "Rocky Mountain West Insurance", width: "190", height: "62" },
            { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/3001/logo_15.webp", alt: "Compass Insurance", width: "139", height: "46" },
            { url: "///res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/3001/logo_13.webp", alt: "Integra Insurance", width: "137", height: "36" }
          ]
        }
        const template_footer = {
          contentCopyright: "All rights reserved © EZLynx 2025.",
          policylinks: [
            {
              menuText: "Terms of Use",
              menuUrl: "https://www.ezlynx.com/globalassets/all-documents/ezlynx/legal/terms.pdf"
            },
            {
              menuText: "Privacy Policy",
              menuUrl: "https://www.ezlynx.com/legal/privacy/"
            }
          ]
        }

        function addBaseline(formData, whereToPut, template_formSelector, template_heroSelector, socialProofdata, footerdata, whereToPutFooter) {
          const formHeading = template_heroContent.formHeading || "";
          const superHeading = template_heroContent.contentSuperHeading[currentPath] || "";
          const contentHeading = template_heroContent.contentHeading[currentPath] || "";
          const featureContent = template_heroContent.featureContent[currentPath] || [];


          const formTemplate = `<div class="spz-body-wrapper">
            <section class="spz-hero">
              <div class="spz-wrapper">
                ${formData.siteLogo.url ? `<div class="site-header-logo">
                  <a href="/" title="Home">
                    <img src="${formData.siteLogo.url}" alt="${formData.siteLogo.alt}" width="120px" height="74px">
                  </a>
                </div>` : ""}
                <div class="spz-hero-content">
                  <div class="content-section">
                    ${superHeading ? `<h3 class="content-superheading">${superHeading}</h3>` : ""}
                    ${contentHeading ? `<h2 class="content-heading">${contentHeading}</h2>` : ""}
                    <div class="spz-features-wrap">
                      ${featureContent.map((item, index) => `<div class="feature-item">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1742802034/ezlynx/3002/tablercheck.svg" alt="Checkmark" width="24px" height="24px">
                        <span>${item || ''}</span>
                      </div>`).join("")}
                    </div>
                    <div class="spz-hero-btn">
                      <button id="get-started-btn" class="spz_3001_modal_click">Get Started</button>
                    </div>
                  </div>
                  <div class="hero-image-section">
                    <picture>
                    <source srcSet="//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/3001/mobile.webp" media="(max-width: 767.98px)" ></source>
                    <source srcSet="//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/3001/tablet.webp" media="(max-width: 1023.98px)" ></source>
                    <source srcSet="//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/3001/v3_destkop_3.webp" media="(max-width: 1440px)" ></source>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/3001/4k.webp" alt="EZLynx Dashboard" />
                    </picture>
                  </div>
                </div>
              </div>
            </section>
            ${socialProofdata.socialProofLogos && socialProofdata.socialProofLogos.length > 0 ? `<section class="social-proof-logos">
              ${socialProofdata.socialProofHeading.replace(/\s/g, "").length !== 0 ? `<h6 class="social-proof-heading">${socialProofdata.socialProofHeading}</h6>` : ""}
              <div class="logos-wrapper splide">
                <div class="splide__track">
                  <div class="splide__list logos-list">
                    ${[...socialProofdata.socialProofLogos, ...socialProofdata.socialProofLogos].map((item) => `
                      <div class="splide__slide logo-item">
                        <img src="${item.url}" alt="${item.alt}" width="${item.width}px" height="${item.height}px" />
                    </div>`).join("")}
                  </div>
                </div>
              </div>
            </section>` : ""}
            <section class="spz-form-wrap">
              <div class="spz-form-overlay"></div>
              <div class="spz-form-section">
                <div id="form-close-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M15.8334 4.16651L4.16675 15.8332M15.8334 15.8332L4.16675 4.1665" stroke="#BBC1C6" stroke-width="2" stroke-linecap="round"></path>
                  </svg>
                </div>
                ${formHeading ? `<h3 class="form-heading">${formHeading}</h3>` : ""}
                <div class="the-form"></div>
                ${formData.formFooter.replace(/\s/g, "").length !== 0 ? `<p class="form-footer">${formData.formFooter}</p>` : ""}
              </div>
            </section>
          </div>`;

          const footerTemplate = `${typeof footerdata.contentCopyright !== 'undefined' ? `<section class="spz-footer">
            <div class="spz-wrapper">
              <div class="copyright">
                ${footerdata.contentCopyright.replace(/\s/g, "").length !== 0 ? `<p>${footerdata.contentCopyright}</p>` : ""}
              </div>
              ${footerdata.policylinks && footerdata.policylinks.length > 0 ? `<ul class="footer-menu">
                ${footerdata.policylinks.map((item) => `
                  <li><a href="${item.menuUrl}" target="_blank">${item.menuText}</a></li>
                `).join("")}
              </ul>` : ""}
            </div>
          </section>` : ""}`;

          if (typeof socialProofdata.socialProofLogos !== 'undefined') {
            var splideScript = document.createElement('script');
            splideScript.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
            var splideScript_AutoScroll = document.createElement('script');
            splideScript_AutoScroll.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.5.3/dist/js/splide-extension-auto-scroll.min.js';
            var splideStyle = document.createElement('link');
            splideStyle.rel = 'stylesheet';
            splideStyle.type = 'text/css';
            splideStyle.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
            document.body.appendChild(splideScript);
            document.body.appendChild(splideStyle);
            splideScript.onload = function () {
              document.body.appendChild(splideScript_AutoScroll);
            };
          }
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
          let splideLoaded = setInterval(() => {
            if (typeof Splide !== 'undefined' && socialProofdata.socialProofLogos !== 'undefined') {
              waitForElm('.SPZ-3001-V1 .social-proof-logos .logos-wrapper').then(function (elem) {
                splideScript_AutoScroll.onload = function () {
                  var splide = new Splide(".SPZ-3001-V1 .social-proof-logos .logos-wrapper", {
                    type: 'loop',
                    drag: false,
                    arrows: false,
                    pagination: false,
                    gap: 80,
                    autoWidth: true,
                    perPage: 3,
                    autoScroll: {
                      speed: 0.4,
                      pauseOnHover: false,
                      pauseOnFocus: false,
                    },
                  });
                  splide.mount(window.splide.Extensions);
                };
              });
              clearInterval(splideLoaded)
            }
          })
          waitForElm(template_heroSelector).then(function (elem) {
            document.querySelector(template_heroSelector).insertAdjacentHTML(whereToPutFooter, footerTemplate);
          });
        }
        addBaseline(template_heroContent, template_position, template_formSelector, template_heroSelector, template_socialProofSection, template_footer, template_footer_position);

        // Toggle Modal
        function toggleModal() {
          const modalWrapper = document.querySelector('.spz-form-wrap');
          modalWrapper.classList.toggle('active');
          if (modalWrapper.classList.contains('active')) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }

        waitForElm('.spz-form-wrap').then(function (elem) {
          document.querySelector('#get-started-btn').addEventListener('click', function () {
            toggleModal();
          });

          if (document.querySelector('.TwoColumnText .btn.amber')) {
            document.querySelector('.TwoColumnText .btn.amber').href = "javascript:void(0)";
            document.querySelector('.TwoColumnText .btn.amber').addEventListener('click', function () {
              toggleModal();
            });
          }
          document.querySelector('#form-close-btn').addEventListener('click', function () {
            toggleModal();
          });
        });
      }
    }
  });

  function formModify() {
    // Add class in mktoFormRow using count
    var form_fields = document.querySelectorAll('.SPZ-3001-V1 .spz-form-wrap .the-form form.mktoForm .mktoFormRow');
    for (var i = 0; i < form_fields.length; i++) {
      var dynamicClass = 'field-' + (i + 1);
      form_fields[i].classList.add(dynamicClass);
    }
    // Change Label Text
    const labels = {
      "LblEmail": `<div class="mktoAsterix">*</div>Email`,
      "LblCompany": `<div class="mktoAsterix">*</div>Company`,
      "LblFirstName": `<div class="mktoAsterix">*</div>First Name`,
      "LblLastName": `<div class="mktoAsterix">*</div>Last Name`,
      "LblPhone": `<div class="mktoAsterix">*</div>Phone`,
      "LblStateCode": `<div class="mktoAsterix">*</div>State`
    };
    Object.entries(labels).forEach(([id, text]) => {
      const label = document.querySelector(`label#${id}`);
      if (label) {
        label.innerHTML = text;
      }
    });
    // Change Field Positions
    if (pageClasses[window.location.pathname]) {
      var email_field = document.querySelector('.SPZ-3001-V1 .spz-form-wrap .the-form form.mktoForm .mktoFormRow.field-1');
      var company_field = document.querySelector('.SPZ-3001-V1 .spz-form-wrap .the-form form.mktoForm .mktoFormRow.field-4');
      var state_field = document.querySelector('.SPZ-3001-V1 .spz-form-wrap .the-form form.mktoForm .mktoFormRow.field-6');
      var submit_btn = document.querySelector('.SPZ-3001-V1 .spz-form-wrap .the-form form.mktoForm .mktoButtonRow');
      email_field.after(company_field);
      state_field.after(submit_btn)
    }

    // On input focus add class on closest parent field class
    function focusFields() {
      document.querySelectorAll(`.SPZ-3001-V1 .spz-form-wrap .the-form form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
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

    document.querySelector('.SPZ-3001-V1 .spz-form-wrap .the-form form.mktoForm .mktoButtonRow button.mktoButton').addEventListener('click', function (event) {
      document.querySelectorAll(`.SPZ-3001-V1 .spz-form-wrap .the-form form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (elem) {
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

    const form = document.querySelector('.SPZ-3001-V1 .spz-form-wrap form.mktoForm');
    const button = form.querySelector('button[type="submit"]');

    const changeButtonText = (text) => {
      if (button && button.textContent !== text) {
        button.textContent = text;
      }
    };
    changeButtonText("Submit");
    form.addEventListener("submit", function () {
      changeButtonText("Please Wait");
    });
    const restoreTextOnInputChange = () => {
      changeButtonText("Submit");
    };
    form.addEventListener("input", restoreTextOnInputChange);
    form.addEventListener("change", restoreTextOnInputChange);
    const observer = new MutationObserver(() => {
      if (button && button.textContent === "Please Wait") {
        const hasErrors = document.querySelector(".mktoError");
        if (hasErrors) {
          changeButtonText("Submit");
        }
      }
    });
    if (button) {
      observer.observe(button, { childList: true, subtree: true });
    }
    MktoForms2.whenReady((formInstance) => {
      formInstance.onValidate((valid) => {
        if (!valid) {
          changeButtonText("Submit");
          setTimeout(() => {
            if (button.textContent === "Please Wait") {
              changeButtonText("Submit");
            }
          }, 500);
        }
      });

      formInstance.onSubmit(() => {
        changeButtonText("Please Wait");
        setTimeout(() => {
          const hasErrors = document.querySelector(".mktoError");
          if (hasErrors) {
            changeButtonText("Submit");
          }
        }, 500);
      });
    });

    function hiddenValue(currentExperimentName, currentExperimentValue) {
      function setCookie(name, value, days) {
        var expires = "";
        if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
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

      var ExistingExperimentName = getCookie('ExperimentName');
      var ExistingExperimentValue = getCookie('ExperimentValue');

      if (!ExistingExperimentName) {

        setCookie('ExperimentName', currentExperimentName, 1);
        setCookie('ExperimentValue', currentExperimentValue, 1);

      } else if (ExistingExperimentName && !ExistingExperimentName.includes(currentExperimentName)) {

        setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
        setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

      } else if (ExistingExperimentName && ExistingExperimentName.includes(currentExperimentName)) {

        var existingNames = ExistingExperimentName.split(',');
        var existingValues = ExistingExperimentValue.split(',');

        var index = existingNames.indexOf(currentExperimentName);
        existingValues[index] = currentExperimentValue;

        setCookie('ExperimentName', existingNames.join(','), 1);
        setCookie('ExperimentValue', existingValues.join(','), 1);
      }
    }

    hiddenValue('#3001 | EZLynx | LPs | SPZ Baseline + Popup Form', variantName)

    function getCookieForHiddenValue(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
    var spzHiddenFieldName = setInterval(() => {
      if (document.querySelectorAll(hiddenInputSelector).length > 0) {
        clearInterval(spzHiddenFieldName);
        setTimeout(() => {
          document.querySelectorAll(hiddenInputSelector)[0].value = getCookieForHiddenValue('ExperimentValue');
        }, 1000);
      }
    }, 100);
  }

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
