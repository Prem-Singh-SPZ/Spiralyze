//check if current url has _vis_test_id query parameter in the url then get the value of the query parameter
var urlParams = new URLSearchParams(window.location.search);
var vis_test_id = urlParams.get('_vis_test_id');
if (vis_test_id) {
  var vis_opt_random = urlParams.get('_vis_opt_random');
  var vis_hash = urlParams.get('_vis_hash');
  var vis_opt_preview_combination = urlParams.get('_vis_opt_preview_combination');
  var urlQuery = `_vis_test_id=${vis_test_id}&_vis_opt_random=${vis_opt_random}&_vis_hash=${vis_hash}&_vis_opt_preview_combination=${vis_opt_preview_combination}`;
}

// iFrame Code
function formPage() {
  var iframebodyInterval = setInterval(function () {
    var iframebodyEle = document.querySelector('body');
    if (iframebodyEle) {
      if (!iframebodyEle.classList.contains('spz-2006-v2-iframe')) {
        clearInterval(iframebodyInterval);
        iframebodyEle.classList.add('spz-2006-v2-iframe');
        function check_spzdevicewidth_fun() {
          var check_spzdevicewidth = setInterval(() => {
            const storedData = getCookie('spzdevicewidth');
            if (storedData != '' || storedData != null) {
              clearInterval(check_spzdevicewidth);
              iframebodyEle.classList.remove('device-mobile');
              iframebodyEle.classList.remove('device-desktop');
              iframebodyEle.classList.add(storedData);
            }
          }, 100);
        }
        check_spzdevicewidth_fun();
        window.addEventListener('resize', () => {
          check_spzdevicewidth_fun();
        });
        checkFormSubmit();

        waitForElm('body #pardot-form').then(function () {
          var formAction = document.querySelector('body #pardot-form').action;
          //check if url has query params
          if (formAction.includes('?')) {
            document.querySelector('body #pardot-form').action = formAction + '&spz=2006' + '&' + urlQuery;
          } else {
            document.querySelector('body #pardot-form').action = formAction + '?spz=2006' + '&' + urlQuery;
          }
        });

        waitForElm('.spz-2006-v2-iframe form#pardot-form .submit input').then(function () {
          document.querySelector(".spz-2006-v2-iframe form#pardot-form").insertAdjacentHTML("beforebegin", `<div class="form-heading" style="display: none;">Get a Demo</div>`);
          hiddenValue();

          document.querySelector('.spz-2006-v2-iframe form#pardot-form .country').classList.add('spz-hidden');
          document.querySelector('.spz-2006-v2-iframe form#pardot-form .Employee_Count').classList.add('spz-hidden');
          document.querySelector('.spz-2006-v2-iframe form#pardot-form .pd-checkbox').classList.add('spz-hidden');

          var all_inputs = document.querySelectorAll('.spz-2006-v2-iframe form#pardot-form input, .spz-2006-v2-iframe form#pardot-form select');
          all_inputs.forEach(function (element) {
            element.removeAttribute('placeholder');
            if (element.tagName == 'SELECT' && element.selectedIndex !== 0 && element.closest('.form-field') !== null) {
              element.closest('.spz-2006-v2-iframe form#pardot-form .form-field').classList.add('filled');
            }
            if (element.tagName !== 'SELECT' && element.value != '' && element.closest('.form-field') !== null) {
              element.closest('.spz-2006-v2-iframe form#pardot-form .form-field').classList.add('filled');
            }
          });
          var selector = '.spz-2006-v2-iframe form#pardot-form .form-field input, .spz-2006-v2-iframe form#pardot-form .form-field select';
          document.addEventListener('focus', function (event) {
            if (event.target.matches && event.target.matches(selector)) {
              event.target.closest('.spz-2006-v2-iframe form#pardot-form .form-field').classList.add('active', 'typing');
            }
          }, true);
          checkFilledVisibility();

          var eventList = ["focusin", "blur", "focusout", "keyup", "change"];
          for (let s_event of eventList) {
            document.addEventListener(s_event, function (event) {
              checkFilledVisibility();
              if (event.target.matches && event.target.matches(selector)) {
                if (event.target.value == null || event.target.value == '') {
                  event.target.closest('.spz-2006-v2-iframe form#pardot-form .form-field').classList.remove('filled');
                } else {
                  if (event.target.tagName == 'SELECT' && event.target.selectedIndex !== 0) {
                    event.target.closest('.spz-2006-v2-iframe form#pardot-form .form-field').classList.add('filled');
                  }
                  if (event.target.tagName !== 'SELECT') {
                    event.target.closest('.spz-2006-v2-iframe form#pardot-form .form-field').classList.add('filled');
                  }
                }
              }
            });
          }
          document.addEventListener('focusout', function (event) {
            document.querySelectorAll('.spz-2006-v2-iframe form#pardot-form .form-field.typing').forEach(function (elem) {
              elem.classList.remove('active', 'typing');
              checkFilledVisibility();
            })
          }, true);

          var formID = "#pardot-form";
          var retryFormSearch = true;
          var form = document.querySelector(formID);
          addFormListener();
          var count = 1;
          function addFormListener() {
            count++;
            if (form) {
              form.addEventListener("submit", submitHandler);
              return;
            } else if ((typeof retryFormSearch !== "undefined" ? retryFormSearch : true) && count < 10) {
              setTimeout(() => {
                form = document.querySelector(formID);
                addFormListener();
              }, 1000);
            }
          }
          function submitHandler(event) {
            checkFormSubmit();
          }

        });
        function checkFormSubmit() {
          var countNew = 1;
          var chekFormSubmit = setInterval(function () {
            if (document.querySelector('.spz-2006-v2-iframe form#pardot-form .submit input') == null) {
              clearInterval(chekFormSubmit);
              document.querySelectorAll('.spz-2006-v2-iframe form#pardot-form > p').forEach((PEle) => {
                if (PEle.textContent == 'We look forward to speaking with you soon!') {
                  if (document.querySelector('.spz-2006-v2-iframe .form-heading')) {
                    document.querySelector('.spz-2006-v2-iframe .form-heading').style.display = "none";
                  }
                }
              });
            }
            if (countNew < 10) {
              clearInterval(chekFormSubmit);
            }
            countNew++;
          }, 100);
        }

        function checkFilledVisibility() {
          if (document.querySelector('.spz-2006-v2-iframe form#pardot-form .form-field.first_name').classList.contains('filled') && document.querySelector('.spz-2006-v2-iframe form#pardot-form .form-field.last_name').classList.contains('filled') && document.querySelector('.spz-2006-v2-iframe form#pardot-form .form-field.email').classList.contains('filled') && document.querySelector('.spz-2006-v2-iframe form#pardot-form .form-field.company').classList.contains('filled')) {

            document.querySelectorAll('.form-field.spz-hidden').forEach(function (elem) {
              elem.classList.remove('spz-hidden');
            })

            document.querySelector('.spz-2006-v2-iframe form#pardot-form ').classList.add('spz-full-form');
          }
        }
      }
    }
  });
}

// Main Page Code
function demoPage() {
  var bodyInterval = setInterval(function () {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('spz-2006-v2')) {
      clearInterval(bodyInterval);
      document.cookie = "spzdevicewidth=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.maxio.com";
      bodyEle.classList.add('spz-2006-v2');

      let mainPageBodyWidth = document.body.clientWidth;
      setIframeBodyClass(mainPageBodyWidth);

      window.addEventListener('resize', () => {
        mainPageBodyWidth = document.body.clientWidth;
        setIframeBodyClass(mainPageBodyWidth);
      });

      cookieValue('#2006', '#2006_variant2');
      const template_heroSelector = `.hero-form`;
      const template_position = "beforebegin";
      const template_formSelector = `.hero-form iframe[id*="form"]`;
      const template_heroContent = {
        heroHeading: `Get a Demo`,
        trustBadge: [
          {
            trustBadgeLogoBreakpoints: [
              {
                breakPoint: 768,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/2006/Frame_1171275610.png",
              },
              {
                breakPoint: 320,
                url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/2006/bi_star-fill.png",
              },
            ],
            trustBadgeLogoAlt: "Rating Stars",
            trustBadgeReview: "//res.cloudinary.com/spiralyze/image/upload/v1733717430/maxio/2006/capterra_logo.svg",
            trustBadgeReviewAlt: "Capterra",
            trustBadgeReviewRating: `<span>4.4</span> (248 reviews)`,
          },
        ],
        contentHeading: "Boost revenue 14% by automating subscription management",
        middleArrowImage: `//res.cloudinary.com/spiralyze/image/upload/v1733278207/maxio/2006/vector_633.svg`,
        middleArrowImageTablet: `//res.cloudinary.com/spiralyze/image/upload/v1731647134/maxio/2001/Arrow-Tablet.svg`,
        middleArrowAlt: "arrow",
        features: [
          {
            checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1731506534/maxio/2001/interface__2_-_interface_checkbox_checkmark_edit_icon.svg",
            featureItemContent: "<b>Billing.</b> Manage term, evergreen, and usage subscriptions. Automate invoicing. Handle payments, trials, sign-ups, add-ons, and upsells.",
          },
          {
            checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1731506534/maxio/2001/interface__2_-_interface_checkbox_checkmark_edit_icon.svg",
            featureItemContent: "<b>Reporting.</b> Track ARR, MRR, renewals, and churn. Generate drill-down reports and revenue snowballs. Handle GAAP & IFRS.",
          },
          {
            checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1731506534/maxio/2001/interface__2_-_interface_checkbox_checkmark_edit_icon.svg",
            featureItemContent: "<b>Cash Collection.</b> Automated reminder and dunning cadences. Track past due, expected collections, and DSO.",
          },
        ],
        awardLogos: {
          awardImages: [
            {
              url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/2001/leader.webp",
              alt: "Leader Fall 2024"
            },
            {
              url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/2001/momentum_leader.webp",
              alt: "Momentum Leader Fall 2024"
            },
            {
              url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/2001/best_relationship.webp",
              alt: "Best Relationship Mid-Market Fall 2024"
            },
            {
              url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/2001/best_results.webp",
              alt: "best Result Mid-Market Fall 2024"
            },
            {
              url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/2001/best_usability.webp",
              alt: "Best Usability Mid-Market Fall 2024"
            },
          ]
        },
      };
      const template_additionalSection = {
        socialProofLogos: {
          socialProofImages: [
            {
              url: "//res.cloudinary.com/spiralyze/image/upload/v1733278796/maxio/2006/chili_piper_1.svg",
              alt: "Chili Piper",
            },
            {
              url: "//res.cloudinary.com/spiralyze/image/upload/v1733278796/maxio/2006/mailgun_1.svg",
              alt: "Mailgun",
            },
            {
              url: "//res.cloudinary.com/spiralyze/image/upload/v1733278796/maxio/2006/jasper_logo_1.svg",
              alt: "Jasper",
            },
            {
              url: "//res.cloudinary.com/spiralyze/image/upload/v1733278796/maxio/2006/stackoverflow_1.svg",
              alt: "Stack Overflow",
            },
          ]
        }
      }

      function addBaseline(formData, whereToPut, template_formSelector, template_heroSelector, template_additionalSection) {
        const formTemplate = `<section class="spz-hero">
                  <div class="spz-bg-wrap">
                      <div class="spz-form-wrap">
                          <div class="content-section">
                             
                              ${formData.contentHeading.replace(/\s/g, "").length !== 0 ? `<div class="content-heading">${formData.contentHeading}</div>` : ""}
                              <div class="spz-features-wrap">
                                  ${formData.features.length > 0 ? formData.features.map((item) => {
          return `<div class="feature-item">
                                          <img src="${item.checkmarkImage}" alt="checkmark" />
                                          <span>${item.featureItemContent}</span>
                                      </div>`;
        }).join("") : ""}
                              </div>
                              ${typeof formData.awardLogos !== 'undefined' ? `<div class="award-logos">
                                        ${formData.awardLogos.awardImages.map(item => item.url ? `<div class="award-image"><img src="${item.url}" alt="${item.alt}" title="${item.alt}" /></div>` : "").join("")}
                                          </div>` : ""}
                          </div>
                          <div class="spz-form-section">
                              ${formData.heroHeading.replace(/\s/g, "").length !== 0 ? `<div class="form-heading">${formData.heroHeading}</div>` : ""}
                               ${formData.trustBadge.length ? `<div class="trust-badge">
                                ${formData.trustBadge[0].trustBadgeReview.trim() ? `
                                      <img src="${formData.trustBadge[0].trustBadgeReview}" alt="${formData.trustBadge[0].trustBadgeReviewAlt}" class="badge-logo" />` : ""}
                                  <picture>
                                      ${formData.trustBadge[0].trustBadgeLogoBreakpoints.map(
          (item) =>
            `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`
        ).join("")}
                                      <img src="${formData.trustBadge[0].trustBadgeLogoBreakpoints[0].url}" alt="${formData.trustBadge[0].trustBadgeLogoAlt}" class="star-rating" />
                                  </picture>
                                 
                                  ${formData.trustBadge[0].trustBadgeReviewRating.trim() ? `
                                      <span class="trust-badge-rating">${formData.trustBadge[0].trustBadgeReviewRating}</span>` : ""}
                              </div>` : ""}
                              <div class="the-form"></div>
                           <div class="middle-arrow-image-desk">
                              ${formData.middleArrowImage ? `<img src="${formData.middleArrowImage}" alt="${formData.middleArrowAlt || 'Arrow'}" class="middle-arrow-image" />` : ""}
                          </div>
                          </div>
                          <div class="hero-heading">
                              ${formData.contentHeading.replace(/\s/g, "").length !== 0 ? `<div class="content-heading">${formData.contentHeading}</div>` : ""}
                          </div>
                      </div>
                  </div>
                  ${template_additionalSection.socialProofLogos ? `<div class="social-proof-logos">
                      ${template_additionalSection.socialProofLogos.socialProofImages.map((item, index) => {
          const className = index >= template_additionalSection.socialProofLogos.socialProofImages.length ? 'social-proof-logo repeat-image' : 'social-proof-logo';
          return `<img src="${item.url}" alt="${item.alt || 'Social Proof Logo'}" title="${item.alt || 'Social Proof Logo'}" class="${className}" />`;
        }).join("")}
                  </div>` : ""}
              </section>`;
        waitForElm(template_heroSelector).then(function () {
          document.querySelector(template_heroSelector).insertAdjacentHTML(whereToPut, formTemplate);
        });

        let formLoaded = setInterval(() => {
          if (document.querySelector(template_formSelector)) {
            clearInterval(formLoaded);
            document.querySelector(".spz-form-wrap .the-form").appendChild(document.querySelector(template_formSelector));
          }
        })
      }
      addBaseline(template_heroContent, template_position, template_formSelector, template_heroSelector, template_additionalSection);

      //check if form is submitted using iframe height and setinterval
      var spz_2001_Interval = setInterval(() => {
        var iframe = document.querySelector('.spz-form-wrap iframe');
        if (iframe) {
          let height = iframe.style.height?.match(/([\d.]+)px/);
          if (height && parseFloat(height[1]) < 100) {
            clearInterval(spz_2001_Interval);
            document.querySelector('.spz-2006-v2 .spz-form-wrap .form-heading').style.display = "none";
            document.querySelector('.spz-2006-v2 .spz-form-wrap .trust-badge').style.display = "none";
            document.querySelector('.spz-2006-v2 .spz-form-wrap .middle-arrow-image-desk').style.display = "none";
          }
        }
      }, 200);

      waitForElm('.spz-form-wrap iframe[src]').then(function () {
        setTimeout(() => {
          const iframeSrc = document.querySelector('.spz-form-wrap iframe').src;
          //check if url has query params
          if (iframeSrc.includes('?')) {
            //replace question mark string with "?spz=2006&" in the url
            document.querySelector('.spz-form-wrap iframe').src = iframeSrc.replace('?', '?spz=2006&' + urlQuery);
          } else {
            document.querySelector('.spz-form-wrap iframe').src = iframeSrc + '?spz=2006' + '&' + urlQuery;
          }

          if (document.querySelector('.spz-form-wrap iframe[data-lazy-src]')) {
            const iframeLazrSrc = document.querySelector('.spz-form-wrap iframe').getAttribute('data-lazy-src');
            //check if url has query params
            if (iframeLazrSrc.includes('?')) {
              document.querySelector('.spz-form-wrap iframe').setAttribute('data-lazy-src', iframeLazrSrc.replace('?', '?spz=2006&'));
            } else {
              document.querySelector('.spz-form-wrap iframe').setAttribute('data-lazy-src', iframeLazrSrc + '?spz=2006');
            }
          }
        }, 500);
      });

      waitForElm('.theme-white style').then(function () {
        document.querySelector('.theme-white style').remove();
      });
    }
  });
}

function setIframeBodyClass(screenwidth) {
  let iframeLoaded = setInterval(() => {
    if (document.querySelector('.spz-form-wrap iframe')) {
      clearInterval(iframeLoaded);
      if (screenwidth > 767) {
        setCookie('spzdevicewidth', 'device-desktop', 7);
      } else {
        setCookie('spzdevicewidth', 'device-mobile', 7);
      }
    }
  })
}

if (location.href.indexOf('/demo') > -1) {
  demoPage();
}
if (location.href.indexOf('spz=2006') > -1) {
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

// Delete cookie
function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=maxio.com;';
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
