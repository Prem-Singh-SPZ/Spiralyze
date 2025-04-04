(function () {

  window.addEventListener("pageshow", function (event) {
    waitForElm('form.mktoForm').then(function (elem) {
      let form = document.querySelector("form.mktoForm");
      let submitButton = form.querySelector('[type="submit"]');
      if (event.persisted) {
        submitButton.textContent = "Get Started";
        submitButton.disabled = false;
      }
    });
  });
  
  
  let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
      clearInterval(bodyLoaded);
      if (!body.classList.contains('SPZ-2001')) {
        body.classList.add('SPZ-2001');

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
          "/free-quote": "page-free-quote",
          "/landing/buy-now": "page-buy-now",
          "/get-started/special-deals-on-ezlynx-software": "page-special-deals"
        };
        if (pageClasses[currentPath]) {
          document.body.classList.add(pageClasses[currentPath]);
        }

        const template_heroSelector = `main#content`;
        const template_position = "beforebegin";
        const template_formSelector = `section.SingleColumnMarketoForm .row:nth-child(2) .offset-md-0`;
        const template_heroContent = {
          siteLogo:{
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/ezlynx/2001/ezlynx_logo.webp",
            alt: "EZLynx logo"
          },
          formHeadings: {
            "/free-quote": "Get a Free Trial",
            "/landing/buy-now": "Buy Now",
            "/get-started/special-deals-on-ezlynx-software": "Get Pricing & Current Promos"
          },
          formFooter: `No Credit Card Required`,
          contentSuperHeading: {
            "/free-quote": "Rating Engine",
            "/landing/buy-now": "Agency Management Software",
            "/get-started/special-deals-on-ezlynx-software": "Agency Management Software"
          },
          contentHeading: {
            "/free-quote": "Boost sales with instant rates & quotes",
            "/landing/buy-now": "Boost sales & efficiency by streamlining quoting & agency management",
            "/get-started/special-deals-on-ezlynx-software": "Boost sales & efficiency by streamlining quoting & agency management"
          },
          featureContent: {
            "/free-quote": [
              "<b>Instant rates.</b> Get rates from 330+ carriers. Compare multiple personal lines carriers at once. ",
              "<b>Instant quotes.</b> Generate quotes for auto, home, dwelling fire, and other policies. Identify cross-sell opportunities. ",
              "<b>Faster workflows.</b> Send quotes to customers online or via text. Automate renewals. Prefill driver and vehicle data."
            ],
            "/landing/buy-now": [
              "<b>Generate Quotes.</b> Get real-time personal and commercial rates. 330+ carriers. Quote online or via text. Bind and issue policies.",
              "<b>Agency Management.</b> Manage policies, accounting, reporting, and comms. Automate renewals. Let clients pay online.",
              "<b>Sales.</b> Manage leads. Auto-move leads through the sales pipeline. Close more deals. Identify cross-sell and upsell opps."
            ],
            "/get-started/special-deals-on-ezlynx-software": [
              "<b>Generate Quotes.</b> Get real-time personal and commercial rates. 330+ carriers. Quote online or via text. Bind and issue policies.",
              "<b>Agency Management.</b> Manage policies, accounting, reporting, and comms. Automate renewals. Let clients pay online.",
              "<b>Sales.</b> Manage leads. Auto-move leads through the sales pipeline. Close more deals. Identify cross-sell and upsell opps."
            ]
          },
          featureIcons: {
            "/free-quote": [
              {
                iconImage: "//res.cloudinary.com/spiralyze/image/upload/v1741503792/ezlynx/2001/auto-fix.svg",
                iconAlt: "Instant rates"
              },
              {
                iconImage: "//res.cloudinary.com/spiralyze/image/upload/v1741503793/ezlynx/2001/account-group.svg",
                iconAlt: "Instant quotes"
              },
              {
                iconImage: "//res.cloudinary.com/spiralyze/image/upload/v1741503793/ezlynx/2001/headset.svg",
                iconAlt: "Faster workflows"
              }
            ],
            "/landing/buy-now": [
              {
                iconImage: "//res.cloudinary.com/spiralyze/image/upload/v1741503792/ezlynx/2001/auto-fix.svg",
                iconAlt: "Generate Quotes"
              },
              {
                iconImage: "//res.cloudinary.com/spiralyze/image/upload/v1741503793/ezlynx/2001/account-group.svg",
                iconAlt: "Agency Management"
              },
              {
                iconImage: "//res.cloudinary.com/spiralyze/image/upload/v1741503793/ezlynx/2001/headset.svg",
                iconAlt: "Sales"
              }
            ],
            "/get-started/special-deals-on-ezlynx-software": [
              {
                iconImage: "//res.cloudinary.com/spiralyze/image/upload/v1741503792/ezlynx/2001/auto-fix.svg",
                iconAlt: "Generate Quotes"
              },
              {
                iconImage: "//res.cloudinary.com/spiralyze/image/upload/v1741503793/ezlynx/2001/account-group.svg",
                iconAlt: "Agency Management"
              },
              {
                iconImage: "//res.cloudinary.com/spiralyze/image/upload/v1741503793/ezlynx/2001/headset.svg",
                iconAlt: "Sales"
              }
            ],
          },
        };
        const template_socialProofSection = {
          socialProofHeading: "Thousands of Agency Owners Trust EZLynx to Help Run Their Business",
          socialProofImages:[
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
        const template_footer = {
          contentCopyright: "All rights reserved © EZLynx 2025.",
          policylinks: [
            {
              menuText: "Terms of Use",
              menuUrl: "https://www.ezlynx.com/globalassets/all-documents/ezlynx/legal/terms.pdf"
            },
            {
              menuText: "Privacy Policy",
              menuUrl: "/legal/privacy/"
            }
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
                    <img src="${formData.siteLogo.url}" alt="${formData.siteLogo.alt}" width="120px" height="74px">
                  </a>
                </div>` : ""}
                <div class="spz-form-wrap">
                  <div class="content-section">
                    ${superHeading ? `<h3 class="content-superheading">${superHeading}</h3>` : ""}
                    ${contentHeading ? `<h2 class="content-heading">${contentHeading}</h2>` : ""}
                    <div class="spz-features-wrap">
                      ${featureIcon.map((item, index) => `<div class="feature-item">
                        <img src="${item.iconImage}" alt="${item.iconAlt}" width="24px" height="24px" />
                        <span>${featureContent[index] || ''}</span>
                      </div>`).join("")}
                    </div>
                  </div>
                  <div class="spz-form-section">
                    ${formHeading ? `<h3 class="form-heading">${formHeading}</h3>` : ""}
                    <div class="the-form"></div>
                    ${formData.formFooter.replace(/\s/g, "").length !== 0 ? `<p class="form-footer">${formData.formFooter}</p>` : ""}
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
                  <img src="${item.url}" alt="${item.alt}" width="${item.width}px" height="${item.height}px" />
                </div>`).join("")}` : ""}
              </div>
            </section>` : ``}
            ${typeof footerdata.contentCopyright !== 'undefined' ? `<section class="spz-footer">
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
            </section>` : ""}
          </div>`;

          waitForElm(template_heroSelector).then(function (elem) {
            document.querySelector(template_heroSelector).insertAdjacentHTML(whereToPut, formTemplate);
          });
          let formLoaded = setInterval(()=>{
            if(document.querySelector(template_formSelector) && document.querySelectorAll(`${template_formSelector} input`).length > 0){
              clearInterval(formLoaded)
              document.querySelector(".spz-form-wrap .the-form").appendChild(document.querySelector(template_formSelector));
              formModify();
            }
          });
          waitForElm('.SPZ-2001 .social-proof-logos .logos-wrapper').then(function (elem) {
            slickScript.onload = function() {
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
        addBaseline(template_heroContent,template_position,template_formSelector,template_heroSelector,template_socialProofSection,template_footer);

      }
    }
  });

  function formModify() {
    // Add class in mktoFormRow using count
    var form_fields = document.querySelectorAll('.SPZ-2001 .spz-hero .the-form form.mktoForm .mktoFormRow');
    for (var i = 0; i < form_fields.length; i++) {
      var dynamicClass = 'field-' + (i + 1);
      form_fields[i].classList.add(dynamicClass);
    }
    // Change Label Text
    const labels = {
      "LblEmail": "Business Email",
      "LblCompany": "Company",
      "LblFirstName": "First Name",
      "LblLastName": "Last Name",
      "LblPhone": "Phone",
      "LblPostalCode": "ZIP Code",
      "LblNumberOfEmployees": "Number of Employees",
      "LblPrimary_Alliance_Partner__c": "Alliance/Network Member?",
      "LblTitle": "Job Title"
    };
    Object.entries(labels).forEach(([id, text]) => {
      const label = document.querySelector(`label#${id}`);
      if (label) {
        label.textContent = text;
      }
    });
    // Change Field Positions
    var normalizePath = (path) => path.replace(/\/$/, "");
    var currentPath = normalizePath(window.location.pathname);
    if (currentPath == '/get-started/special-deals-on-ezlynx-software') {
      var fname_field = document.querySelector('.SPZ-2001 .spz-hero .the-form form.mktoForm .mktoFormRow.field-1');
      var email_field = document.querySelector('.SPZ-2001 .spz-hero .the-form form.mktoForm .mktoFormRow.field-6');
      var company_field = document.querySelector('.SPZ-2001 .spz-hero .the-form form.mktoForm .mktoFormRow.field-3');
      fname_field.before(email_field);
      email_field.after(company_field);
    } else {
      var email_field = document.querySelector('.SPZ-2001 .spz-hero .the-form form.mktoForm .mktoFormRow.field-1');
      var company_field = document.querySelector('.SPZ-2001 .spz-hero .the-form form.mktoForm .mktoFormRow.field-4');
      email_field.after(company_field);
    }

    // On input focus add class on closest parent field class
    function focusFields() {
      document.querySelectorAll(`.SPZ-2001 .spz-hero .the-form form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
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

    document.querySelector('.SPZ-2001 .spz-hero .the-form form.mktoForm .mktoButtonRow button.mktoButton').addEventListener('click', function(event) {
      document.querySelectorAll(`.SPZ-2001 .spz-hero .the-form form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (elem) {
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

    const form = document.querySelector('.SPZ-2001 .spz-hero form.mktoForm');
    const button = form.querySelector('button[type="submit"]');

    const changeButtonText = (text) => {
      if (button && button.textContent !== text) {
        button.textContent = text;
      }
    };
    changeButtonText("Get Started");
    form.addEventListener("submit", function () {
      changeButtonText("Please Wait");
    });
    const restoreTextOnInputChange = () => {
      changeButtonText("Get Started");
    };
    form.addEventListener("input", restoreTextOnInputChange);
    form.addEventListener("change", restoreTextOnInputChange);
    const observer = new MutationObserver(() => {
      if (button && button.textContent === "Please Wait") {
        const hasErrors = document.querySelector(".mktoError");
        if (hasErrors) {
          changeButtonText("Get Started");
        }
      }
    });
    if (button) {
      observer.observe(button, { childList: true, subtree: true });
    }
    MktoForms2.whenReady((formInstance) => {
      formInstance.onValidate((valid) => {
        if (!valid) {
          changeButtonText("Get Started");
          setTimeout(() => {
            if (button.textContent === "Please Wait") {
              changeButtonText("Get Started");
            }
          }, 500);
        }
      });

      formInstance.onSubmit(() => {
        changeButtonText("Please Wait");
        setTimeout(() => {
          const hasErrors = document.querySelector(".mktoError");
          if (hasErrors) {
            changeButtonText("Get Started");
          }
        }, 500);
      });
    });
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
