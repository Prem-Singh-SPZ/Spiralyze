// iFrame Code
function formPage() {
    var iframebodyInterval = setInterval(function () {
      var iframebodyEle = document.querySelector('body');
      var iframeformEle = document.querySelector('body #pardot-form');
      if (iframebodyEle) {
        if (!iframebodyEle.classList.contains('SPZ-7001-iframe')) {
          clearInterval(iframebodyInterval);
          iframebodyEle.classList.add('SPZ-7001-iframe');
          waitForElm('body #pardot-form').then(function () {
            var formAction = document.querySelector('body #pardot-form').action;
            //check if url has query params
            if (formAction.includes('?')) {
              document.querySelector('body #pardot-form').action = formAction + '&spz=7001';
            } else {
              document.querySelector('body #pardot-form').action = formAction + '?spz=7001';
            }
          });
          waitForElm('.SPZ-7001-iframe form#pardot-form .submit input').then(function () {
            hiddenValue();
          });
        }
      }
    });
  }
  
  // Demo Page Code
  function demoPage() {
    var bodyInterval = setInterval(function () {
      var bodyEle = document.querySelector('body');
      if (!bodyEle.classList.contains('SPZ-7001-demo')) {
        clearInterval(bodyInterval);
        bodyEle.classList.add('SPZ-7001-demo');
        waitForElm('.blocks-page iframe').then(function () {
          setTimeout(() => {
            // var iframeLazrSrc = document.querySelector('.hero-form iframe').getAttribute('data-lazy-src');
            // if (iframeLazrSrc.includes('?')) {
            //   document.querySelector('.hero-form iframe').setAttribute('data-lazy-src', iframeLazrSrc.replace('?', '?spz=7001&'));
            // } else {
            //   document.querySelector('.hero-form iframe').setAttribute('data-lazy-src', iframeLazrSrc + '?spz=7001');
            // }
  
            var iframeSrc = document.querySelector('.blocks-page iframe').src;
            if (iframeSrc.includes('?')) {
              document.querySelector('.blocks-page iframe').src = iframeSrc + '&spz=7001';
            } else {
              document.querySelector('.blocks-page iframe').src = iframeSrc + '?spz=7001';
            }
          }, 500);
              });
      }
    });
  }
  
  // Main Page Code
  function mainPage() {
    var mainbodyInterval = setInterval(function () {
      var mainbodyEle = document.querySelector('body');
      if (!mainbodyEle.classList.contains('SPZ-7001')) {
        clearInterval(mainbodyInterval);
        removeSpecificCookieValue('#7001', '#7001_true_control');
        mainbodyEle.classList.add('SPZ-7001');
        cookieValue('#7001', '#7001_variant1');
              const template_heroSelector = `.site-content .blocks-page`;
              const template_position = "afterbegin"
              const template_heroContent = {
                  contentHeading: "Automate SaaS billing and grow revenue 14%",
                  features: [
                      {
                          checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1732801209/maxio/7001/interface__2_-_interface_checkbox_checkmark_edit_icon.svg",
                          featureItemContent: "<b>Billing.</b> Collect payments. Manage subscriptions. Handle signups, trials, and upgrades. Automate collections and dunning.",
                      },
                      {
                          checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1732801209/maxio/7001/interface__2_-_interface_checkbox_checkmark_edit_icon.svg",
                          featureItemContent: "<b>Usage and Metering.</b> Connect product usage to billing and support any pricing model. Sync usage periodically or stream raw data in real-time.",
                      },
                      {
                          checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1732801209/maxio/7001/interface__2_-_interface_checkbox_checkmark_edit_icon.svg",
                          featureItemContent: "<b>Reporting.</b> One-click reports for ARR, MRR, churn, renewals, and more. Advanced cohort, revenue waterfalls, and drill-down reports.",
                      },
                  ],
                  template_heroContentButton:{
                      buttonText: `Get a Demo`,
                      buttonURL: 'https://www.maxio.com/demo'
                  },
          integratesLogos: {
            integratesHeading: "Integrates  with:",
            integratesImages: [
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1731506725/maxio/2001/salesforce.svg",
                    alt: "salesforce"
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1731506725/maxio/2001/vector.svg",
                    alt: "hubspot"
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1731506725/maxio/2001/64__integration__quickbooks.svg",
                    alt: "quickbooks"
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1731506725/maxio/2001/xero.svg",
                    alt: "xero"
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1731506725/maxio/2001/netsuite_logo.svg",
                    alt: "netsuite"
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1731506725/maxio/2001/frame_1171275789.svg",
                    alt: "avalara"
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1731506725/maxio/2001/googlesheets.svg",
                    alt: "sheets"
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1731506725/maxio/2001/64__integration__google.svg",
                    alt: "stripe"
                },
                {
                    url: "//res.cloudinary.com/spiralyze/image/upload/v1731506725/maxio/2001/paypal.svg",
                    alt: "paypal"
                },
            ]
          },
              };
              const template_additionalSection = {
                  socialProofLogos:{
                      socialProofImages:[
                          {
                              url: "//res.cloudinary.com/spiralyze/image/upload/v1732801134/maxio/7001/stackoverflow.svg",
                              alt: "stackoverflow",
                          },
                          {
                              url: "//res.cloudinary.com/spiralyze/image/upload/v1732801134/maxio/7001/chili_piperv.svg",
                              alt: "Chili Piper",
                          },
                          {
                              url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/7001/mailgun_webp.webp",
                              alt: "mailgun",
                          },
                          {
                              url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/7001/metadata_webp.webp",
                              alt: "metadata",
                          },
                      ]
                  },
              }
              function addBaseline(formData, whereToPut, template_heroSelector, template_additionalSection) {
                  const formTemplate = `<section class="spz-section">
                      <div class="spz-wrapper">
                          <div class="content-section">
                              ${formData.contentHeading.replace(/\s/g, "").length !== 0 ? `<div class="content-heading">${formData.contentHeading}</div>` : ""}
                              <div class="spz-features-wrap">
                    ${formData.features.length > 0 ? formData.features.map((item) => {
                                      return `<div class="feature-item">
                                          <img src="${item.checkmarkImage}" alt="Arrow" />
                                          <span>${item.featureItemContent}</span>
                                      </div>`;
                                  }).join("") : "" }
                  </div>
                              ${formData.template_heroContentButton ? `<div class="email-cta-wrap">
                                  <input type="email" id="spz-email" placeholder="Business Email" />
                                  <span class="email-cta">${formData.template_heroContentButton.buttonText}</span>
                              </div>` : ``}
                ${typeof formData.integratesLogos !== 'undefined' ? `<div class="integrates-logos">
                                  <div class="integrates-heading">${formData.integratesLogos.integratesHeading}</div>
                                      <div class="integrates-images">
                                          ${formData.integratesLogos.integratesImages.map(item => item.url ? `<div class="image-item"><img src="${item.url}" alt="${item.alt || 'Integration logo'}" title="${item.alt || 'Integration logo'}" /></div>` : "").join("")}
                                      </div>
                              </div>` : ""}
                          </div>
                      </div>
                  </section>
                  ${typeof template_additionalSection.socialProofLogos !== 'undefined' ? `<section class="social-proof-logos">
            <div class="spz-wrapper">
                        ${template_additionalSection.socialProofLogos.socialProofImages.map(item=>`<img src="${item.url}" alt="${item.alt}" />`).join("")}
            </div>
                  </section>` : ``}
                  `;
                  document.querySelector(template_heroSelector).insertAdjacentHTML(whereToPut, formTemplate);
  
          const email = document.querySelector('.SPZ-7001 .spz-section .email-cta-wrap input');
          email.addEventListener('focus', function () {
            email.closest('.email-cta-wrap').classList.add('focused');
            email.closest('.email-cta-wrap').classList.remove('filled');
          });
  
          email.addEventListener('blur', function () {
            email.closest('.email-cta-wrap').classList.remove('focused');
            if (email.value === '') {
              email.closest('.email-cta-wrap').classList.remove('filled');
            } else {
              email.closest('.email-cta-wrap').classList.add('filled');
            }
          });
  
          email.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
              document.querySelector('.SPZ-7001 .spz-section .email-cta-wrap .email-cta').click();
              email.blur();
            }
          });
  
          document.querySelector('.SPZ-7001 .spz-section .email-cta-wrap .email-cta').addEventListener('click',function(){
            setCookie('SPZ_Carry_Email',email.value,1);
            window.location.href = 'https://www.maxio.com/demo';
          });
              }
              addBaseline(template_heroContent,template_position,template_heroSelector,template_additionalSection);
      }
    });
  }
  
  if (location.href.indexOf('/billing') > -1) {
      mainPage();
  }
  if (location.href.indexOf('/demo') > -1) {
      demoPage();
  }
  if (location.href.indexOf('spz=7001') > -1) {
      formPage();
  }
  
  function hiddenValue() {
    var spz_cro_Interval = setInterval(function () {
      var cro_primary = document.querySelector('form#pardot-form .form-field.cro_primary input');
      if (cro_primary) {
        clearInterval(spz_cro_Interval);
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');
        cro_primary.value = ExistingHiddenFieldValue;
      }
    });
    var spz_email_Interval = setInterval(function () {
      var emailfiled = document.querySelector('form#pardot-form .form-field.CP_Email input');
          if(emailfiled){
        clearInterval(spz_email_Interval);
        var SPZEmailValue = getCookie('SPZ_Carry_Email');
        var emailField = document.querySelector('form#pardot-form .form-field.CP_Email input');
        if (SPZEmailValue) {
          emailField.value = SPZEmailValue;
          emailField.focus();
        }
      }
    });
  }
  
  function cookieValue(currentHiddenFieldName, currentHiddenFieldValue) {
    var ExistingHiddenFieldName = getCookie('HiddenFieldName');
    var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');
  
    if (!ExistingHiddenFieldName) {
      setCookie('HiddenFieldName', currentHiddenFieldName, 1);
      setCookie('HiddenFieldValue', currentHiddenFieldValue, 1);
    } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
      setCookie('HiddenFieldName', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
      setCookie('HiddenFieldValue', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
    }
  }
  
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=maxio.com;";
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
  
  function removeSpecificCookieValue(targetName, targetValue) {
    ['HiddenFieldName', 'HiddenFieldValue'].forEach((key, i) => {
      var values = getCookie(key)?.split(',').filter(v => v !== (i ? targetValue : targetName)).join(',');
      setCookie(key, values || '', 1);
    });
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
  