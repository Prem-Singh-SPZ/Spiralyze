let bodyLoaded = setInterval(function () {
  const body = document.querySelector('body');
  if (body) {
    clearInterval(bodyLoaded);

    var intr = setInterval(function () {
      if (document.querySelector('.landing-page-v3__container-inner') && !document.querySelector('body').classList.contains('spz-7006')) {
        clearInterval(intr);
        document.body.classList.add('spz-7006');
        code_inject();
      }
    }, 100);

    function code_inject() {

      var is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
      var is_Edge = navigator.userAgent.indexOf("Edge") > -1;
      var is_chrome = !!window.chrome && !is_opera && !is_Edge;
      var is_explorer = typeof document !== 'undefined' && !!document.documentMode && !is_Edge;
      var is_firefox = typeof window.InstallTrigger !== 'undefined';
      var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      if (is_chrome) {
        document.body.classList.add('chrome');
      } else if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        document.body.classList.add('safari');
      } else if (is_firefox) {
        document.body.classList.add('firefox');
      }

      var BodyClasses = {
        "lp-gartner-market-guide-for-zero-trust-network-access-sem": "zero_trust",
        "lp-gartner-market-guide-for-single-vendor-sase-sem": "single_vendor",
      };
      var currentUrl = window.location.href;
      for (var key in BodyClasses) {
        if (currentUrl.includes(key)) {
          body.classList.add(BodyClasses[key]);
        }
      }
      waitForElm(".kerrytown .landing-page-v3__form-content .form-heading").then(function () {
        let formTitle = document.querySelector(".kerrytown .landing-page-v3__form-content .form-heading").innerHTML;

        document.querySelector('.landing-page-v3__content-container .plus-orange').insertAdjacentHTML('beforebegin', '<div class="spz-gartner-logo"><img src="//res.cloudinary.com/spiralyze/image/upload/v1702652529/netskope/7001/grtner_wrapper_1.svg" alt="Gartner Logo"></div>')
        if (document.querySelector('html[lang="en-US"]')) {
          formTitle = 'Get <span>Gartner</span> report'
        }
        document.querySelector('.landing-page-v3__form-container .landing-page-v3__form-content').insertAdjacentHTML('beforebegin', `<div class="spz-formlogo"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1711024659/netskope/7006/logo.svg" alt="Netskope Logo"></div><div class="spz-form-title"><h3>` + formTitle + `</h3></div>`)
      });

      let privacyHtml = `
          <div class="spz-form-privacy">
            <p>© 2024, All rights reserved.</p>
            <a href="https://www.netskope.com/privacy-policy">Privacy Policy</a>
          </div>`;

      document.querySelector('.landing-page-v3__content-container .landing-page-v3__content').insertAdjacentHTML('afterend', privacyHtml)

      document.querySelectorAll('.landing-page-v3__content-container .landing-page-v3__content p').forEach(function (para) {
        if (para.innerHTML == '&nbsp;' || para.innerHTML == '&nbsp; ') {
          para.classList.add('empty-para')
        }
        if (window.location.pathname.indexOf('/lp-gartner-market-guide-for-zero-trust-network-access-sem') > -1) {
          if (para.textContent.indexOf('The 2023 Gartner® Market Guide for ZTNA provides fresh insights into') > -1) {
            para.innerHTML = `The 2023 Gartner® Market Guide for ZTNA provides fresh insights into market trends, core ZTNA capabilities, and how ZTNA fits into a Security Service Edge (SSE) strategy and Secure Access Service Edge (SASE) architecture. <br class="br-mobile">The report includes:`
            para.classList.add('para-insight')
          }
        }
      })



      if (window.location.pathname.indexOf('/lp-gartner-market-guide-for-single-vendor-sase-sem') > -1) {
        var allPara = document.querySelectorAll('.landing-page-v3__content p')
        allPara.forEach(function (para) {
          if (para.textContent == 'Here’s a few of the key findings and recommendations you’ll find within this report:') {
            para.classList.add('maxwidth-para')
          }
        })
      }


      const formInt = setInterval(() => {
        if (document.querySelector('form.mktoForm #FirstName')) {

          clearInterval(formInt);

          document.querySelector('#FirstName').closest('.mktoFormRow').classList.add('spz-field', 'spz-field-fname');
          document.querySelector('#LastName').closest('.mktoFormRow').classList.add('spz-field', 'spz-field-lname');
          document.querySelector('#Email').closest('.mktoFormRow').classList.add('spz-field', 'spz-field-email');
          document.querySelector('#Company').closest('.mktoFormRow').classList.add('spz-field', 'spz-field-company');
          document.querySelector('#Title').closest('.mktoFormRow').classList.add('spz-field', 'spz-field-title');
          document.querySelector('#Phone').closest('.mktoFormRow').classList.add('spz-field', 'spz-field-phone');
          document.querySelector('#Country').closest('.mktoFormRow').classList.add('spz-field', 'spz-field-country');
          document.querySelector('form.mktoForm .form-heading').closest('.mktoFormRow').classList.add('spz-hide');
          document.querySelector('.mktoPlaceholderConsent_to_Processing__c')?.closest('.mktoFormRow').classList.add('spz-field-privacy');
          document.querySelector('.mktoPlaceholderHtmlText_2022-06-22T14')?.closest('.mktoFormRow').classList.add('spz-field-netinfo');
          document.querySelector('.spz-field-email').before(document.querySelector('.spz-field-fname'))
          document.querySelector('.spz-field-email').before(document.querySelector('.spz-field-lname'))

          if (document.querySelector("html").getAttribute("lang") == "en-US") {
            document.querySelector("#LblFirstName").textContent = "First Name";
            document.querySelector("#LblLastName").textContent = "Last Name";
            document.querySelector("#LblEmail").textContent = "Business Email";
            document.querySelector("#LblCompany").textContent = "Company";
            document.querySelector("#LblTitle").textContent = "Job Title";
            document.querySelector("#LblPhone").textContent = "Phone";
            document.querySelector("#LblCountry").textContent = "Country";
          } else {
            // Other languages
            // Get the text from '#Country option' and set it to '#LblCountry'
            let countryLbl = document.querySelector("#Country option:first-child").textContent;
            document.querySelector("#LblCountry").textContent = countryLbl;
          }

          // Disable option in 'Country' field where value is null
          let countryOpt = document.querySelector("#Country option:first-child");
          if (countryOpt.value == "" || countryOpt.value == null) {
            countryOpt.setAttribute('disabled', 'disabled');
            countryOpt.setAttribute('style', 'color: #ccc');
          }

          let allInputs = document.querySelectorAll('.spz-field .mktoField')
          var eventfocus = new Event('focus');
          var eventblur = new Event('blur');
          allInputs.forEach(function (inp) {
            inp.addEventListener('blur', function () {
              inp.dispatchEvent(eventfocus);
            });
          })

          document.addEventListener("visibilitychange", (event) => {
            if (document.activeElement.tagName == 'A') {
              document.activeElement.blur()
            }
          });

          setHiddenFields();
        }
      }, 100);

      waitForElm("html[lang='en-US'] form .mktoButtonRow button.mktoButton").then(function () {
        document.querySelector("form .mktoButtonRow button.mktoButton").textContent = "Instant access";
        setTimeout(() => {
          document.querySelector("form .mktoButtonRow button.mktoButton").textContent = "Instant access";
        }, 100);
      });

      setTimeout(() => {
        document.querySelector('body').classList.add('variant-loaded');

        // Remove p tags which are empty or contains only '&nbsp;'
        document.querySelectorAll(".landing-page-v3__content p:last-child").forEach((p) => {
          if (p.textContent.trim() == "" || p.textContent.trim() == "&nbsp;") {
            p.remove();
          }
        });
      }, 4000)

    }
  }
});

function waitForElm(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

function setHiddenFields() {
  waitForElm('.mktoFormRow [name="utm_location__c"]').then(function () {
    const field_int = setInterval(function () {
      if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
        if (document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute('value') == "#7006_spz_variant") {
          clearInterval(field_int);
        }
        document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#7006_spz_variant');
      }
    }, 100);
  });
}
