function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(function () {

  const heroImages = {
    page1: {
      four_k: '//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/2002/background_3842.webp',
      two_k: '//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/2002/background_1922.webp',
      desk: '//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/2002/background_1442.webp',
      tab: '//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/2002/background_771.webp',
    },
  };

  // Keep images in cache to avoid loading delay (according to the device resolution)
  for (const key in heroImages) {
    const img = new Image();
    img.src = window.innerWidth > 3500 ? heroImages[key].four_k : window.innerWidth > 1600 ? heroImages[key].two_k : window.innerWidth > 1024 ? heroImages[key].desk : heroImages[key].tab;
  }

  if (!document.querySelector('.spz-2002')) {
    document.querySelector('body').classList.add('spz-2002')
    const loadJS = (url, implementationCode, location) => {
      var scriptTag = document.createElement('script');
      scriptTag.src = url;

      scriptTag.onload = implementationCode;
      scriptTag.onreadystatechange = implementationCode;

      location.appendChild(scriptTag);
    };
    function insertAfter(newNode, referenceNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    function trigger(el, eventType) {
      if (typeof eventType === 'string' && typeof el[eventType] === 'function') {
        el[eventType]();
      } else {
        const event =
          typeof eventType === 'string'
            ? new Event(eventType, { bubbles: true })
            : eventType;
        el.dispatchEvent(event);
      }
    }
    document.querySelector('.spz-2002 #popup_request_a_demo .wcs-pform').remove()
    document.querySelector('.spz-2002 #popup_request_a_demo .wcs-col-12').innerHTML = `
  <div class="wcs-pform">
    <div class="wcs-popup-heading">
      <h2>Get a Demo</h2>
    </div>
  </div>
  `
    if (document.querySelector('#tmpwidget_1665168603900')) {
      document.querySelector('a[href="#tmpwidget_1665168603900"]').setAttribute("href", "#popup_request_a_demo")
    }
    if (document.querySelector('a#request-demo')) {
      for (let i = 0; i < document.querySelectorAll('a#request-demo').length; i++) {
        if (document.querySelectorAll('a#request-demo')[i].getAttribute("href") == "#popup_contact_us" && document.querySelectorAll('a#request-demo')[i].innerHTML.trim() == 'Request Demo') {
          document.querySelectorAll('a#request-demo')[i].setAttribute("href", "#popup_request_a_demo")
        }
      }
    }
    document.addEventListener('click', function (e) {
      if (e.target.closest("a") && e.target.closest("a").getAttribute('href') === '#popup_request_a_demo') {

        //THank you message
        if (document.querySelector('.spz-2002 #new-formDemo-wrapper .submitted-message')) {
          document.querySelector('.spz-2002 #new-formDemo-wrapper').innerHTML = "<div class='lds-dual-ring'></div>"
          loadDemoForm();
        }

        if (document.querySelector('.spz-2002 .overlay-spz')) {
          document.querySelector('.spz-2002 .overlay-spz').remove();
        }
        document.querySelector('.spz-2002 #popup_request_a_demo').parentElement.classList.add("demo-active-spz");
        document.querySelector('.spz-2002 #popup_request_a_demo').parentElement.insertAdjacentHTML("afterbegin", "<div class='overlay-spz'></div>");
        document.querySelector('html').classList.add("spz-modal-open");

        let i = 0;
        const CROInterval = setInterval(() => {
          if (document.querySelector('.spz-2002 #new-formDemo-wrapper input[name="cro1"]')) {
            clearInterval(CROInterval)
            document.querySelector('.spz-2002 #new-formDemo-wrapper input[name="cro1"]').value = "2002_variant"
          }
          i++;
          if (i > 6) {
            clearInterval(CROInterval)
          }
        }, 500);
      }

      //close popup
      if (e.target.classList.contains('close-modal')) {
        document.querySelector('.spz-2002 .overlay-spz').remove();
        document.querySelector('html').classList.remove("spz-modal-open");
      }
    });

    //for form
    document.querySelector('.spz-2002 #popup_request_a_demo .wcs-popup-heading').insertAdjacentHTML("afterend", "<div id='new-formDemo-wrapper'><div class='lds-dual-ring'></div></div>")
    document.querySelector('.spz-2002 #popup_request_a_demo .wcs-popup-heading h2').innerHTML = "Get a Demo";
    //check if submitted
    if (sessionStorage.getItem("spz-2002")) {
      document.querySelector('.spz-2002 #new-formDemo-wrapper').classList.add("show")
    }
    function loadDemoForm() {
      loadJS('//js.hsforms.net/forms/embed/v2.js', function () {
        hbspt.forms.create({
          region: "na1",
          portalId: "6374024",
          formId: "bd5fd709-5849-4d8c-95a3-b52f5a1453c0",
          target: '.spz-2002 #new-formDemo-wrapper',
          onFormSubmitted: function ($form) {
            sessionStorage.setItem("spz-2002", "submitted");
            gtag_report_conversion();
          },
          isInsideFrame: true,
          inlineMessage: "Thanks for submitting the form.",
          onFormReady: function ($form) {
            const allFieldset = document.querySelectorAll('.spz-2002 #new-formDemo-wrapper .form-columns-2,.spz-2002 #new-formDemo-wrapper .form-columns-1,.spz-2002 #new-formDemo-wrapper .form-columns-0')
            for (let i = 0; i < allFieldset.length; i++) {
              allFieldset[i].replaceWith(...allFieldset[i].childNodes)
            }
            //long form
            if (document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_firstname')) {
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_firstname').classList.add("width50", "clear");
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_lastname').classList.add("width50", "with-margin");
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_company').classList.add("width50", "with-margin");
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_jobtitle').classList.add("width50", "clear");
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_email').classList.add("width50", "clear");
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs-dependent-field').classList.add("clear");
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_phone').classList.add("width50", "with-margin");
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_consent_countries').classList.add("clear");
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs-richtext').classList.add("clear", "pp-parent");
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_submit').classList.add("clear", "submit-parent");
              insertAfter(document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_email'), document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_lastname'));
              insertAfter(document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_company'), document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_email'));
              insertAfter(document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_jobtitle'), document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_company'));
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_firstname label span').innerHTML = 'First Name';
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_lastname label span').innerHTML = 'Last Name';
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_email label span').innerHTML = 'Email';
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_company label span').innerHTML = 'Company';
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_phone label span').innerHTML = 'Phone';
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_jobtitle label span').innerHTML = 'Job Title (Optional)';
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_consent_countries label span').innerHTML = 'Country';
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_consent_countries select').value = 'United States'
              trigger(document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_consent_countries select'), 'change');
              trigger(document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_consent_countries select'), 'blur');
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_consent_countries select option:first-child').remove();
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_consent_countries').classList.add("hasValue");
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_submit input').value = "SUBMIT";
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_buying_timeline select').value = "Immediately";
              trigger(document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_buying_timeline select'), 'change');
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_consent_countries select').insertAdjacentHTML("afterend", "<div class='arrow-select'></div>")
              // const step1Checking = setInterval(function () {
              //   if (document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_firstname input').value != "" &&
              //     document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_lastname input').value != "" &&
              //     document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_company input').value != "" &&
              //     document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_email input').value != "") {
              //     clearInterval(step1Checking);
              //     document.querySelector('.spz-2002 #new-formDemo-wrapper').classList.add("step2")
              //   }
              // }, 200)
            }
            //short form
            else {
              if (document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_email')) {
                document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_email label span').innerHTML = 'Email';
                document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_email').classList.add("clear");
              }
              if (document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_buying_timeline select')) {
                document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_buying_timeline select').value = "Immediately";
                trigger(document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_buying_timeline select'), 'change');
              }
              document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_submit input').value = "SUBMIT";
            }
            var allInput = document.querySelectorAll('.spz-2002 #new-formDemo-wrapper .hs-input');
            function errorState(item) {
              var i = 0;
              var errorInterval = setInterval(() => {
                if (item.parentElement.parentElement.querySelector('.hs-error-msgs')) {
                  item.parentElement.parentElement.classList.add('hasError');
                }
                else {
                  item.parentElement.parentElement.classList.remove('hasError');
                }
                if (i == 100) {
                  clearInterval(errorInterval);
                }
                i++
              }, 10);
            }
            function labelChange(e) {
              if (e.value == '' || e.value == null) {
                e.parentElement.parentElement.classList.remove("hasValue");
              } else if (e.value != '' || e.value != null) {
                e.parentElement.parentElement.classList.add("hasValue");
              }
            }
            allInput.forEach(function (e) {
              e.addEventListener('focus', () => {
                e.parentElement.parentElement.classList.add("focus");
                errorState(e);
              }, true);
              e.addEventListener('blur', () => {
                labelChange(e);
                e.parentElement.parentElement.classList.remove("focus");
                errorState(e);
              }, true);
              e.addEventListener('change', () => {
                labelChange(e);
                errorState(e);
              }, true);
              e.addEventListener('keyup', () => {
                errorState(e);
              }, true);
              labelChange(e);
              errorState(e);
            })
            document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_submit input').addEventListener("click", function () {
              allInput.forEach(function (e) {
                errorState(e);
              })
              if (document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_consent_countries select')) {
                trigger(document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_consent_countries select'), 'change');
              }
              let i = 0;
              const submitInterval = setInterval(() => {
                if (document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_submit input').value != "SUBMIT") {
                  clearInterval(submitInterval)
                  document.querySelector('.spz-2002 #new-formDemo-wrapper .hs_submit input').value = "SUBMIT";
                }
                i++;
                if (i > 80) {
                  clearInterval(submitInterval)
                }
              }, 5);
            })
          }
        })
      }, document.body);
    }
    loadDemoForm()
  }
})
