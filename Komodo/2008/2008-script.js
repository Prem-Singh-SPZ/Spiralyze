function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  ready(function () {
  
    if (!document.querySelector('.spz-2008')) {
      document.querySelector('body').classList.add('spz-2008')
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
      document.querySelector('#popup_request_a_demo .wcs-pform').remove()
      document.querySelector('#popup_request_a_demo .wcs-col-12').innerHTML = `
        <div class="wcs-pform">
          <div class="wcs-popup-heading">
            <h2>Get a demo</h2>
          </div>
        </div>`;
      if (document.querySelector('#tmpwidget_1665168603900')) {
        document.querySelector('a[href="#tmpwidget_1665168603900"]').setAttribute("href", "#popup_request_a_demo")
      }
      // if (document.querySelector('a#request-demo')) {
      //   for (let i = 0; i < document.querySelectorAll('a#request-demo').length; i++) {
      //     if (document.querySelectorAll('a#request-demo')[i].getAttribute("href") == "#popup_contact_us" && document.querySelectorAll('a#request-demo')[i].innerHTML.trim() == 'Request Demo') {
      //       document.querySelectorAll('a#request-demo')[i].setAttribute("href", "#popup_request_a_demo")
      //     }
      //   }
      // }
      
      document.querySelectorAll('a[href="https://www.komodohealth.com/get-demo"]').forEach(function (e) {
        e.setAttribute("href", "#popup_request_a_demo");
        e.setAttribute("rel", "modal:open");
      })
  
      document.addEventListener('click', function (e) {
        if (e.target.closest("a") && e.target.closest("a").getAttribute('href') === '#popup_request_a_demo') {
  
          //THank you message
          if (document.querySelector('#new-formDemo-wrapper .submitted-message')) {
            document.querySelector('#new-formDemo-wrapper').innerHTML = "<div class='lds-dual-ring'></div>"
            loadDemoForm();
          }
  
          if (document.querySelector('.overlay-spz')) {
            document.querySelector('.overlay-spz').remove();
          }
          document.querySelector('#popup_request_a_demo').parentElement.classList.add("demo-active-spz");
          document.querySelector('#popup_request_a_demo').parentElement.insertAdjacentHTML("afterbegin", "<div class='overlay-spz'></div>");
          document.querySelector('html').classList.add("spz-modal-open");
  
          let i = 0;
          const CROInterval = setInterval(() => {
            if (document.querySelector('#new-formDemo-wrapper input[name="cro1"]')) {
              clearInterval(CROInterval)
              document.querySelector('#new-formDemo-wrapper input[name="cro1"]').value = "#2008_variant"
            }
            i++;
            if (i > 6) {
              clearInterval(CROInterval)
            }
          }, 500);
        }
  
        //close popup
        if (e.target.classList.contains('close-modal')) {
          document.querySelector('.overlay-spz').remove();
          document.querySelector('html').classList.remove("spz-modal-open");
        }
      });
  
      // On click of escape key, close the modal
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          document.querySelector('.overlay-spz').remove();
          document.querySelector('html').classList.remove("spz-modal-open");
        }
      });
  
      //for form
      document.querySelector('#popup_request_a_demo .wcs-popup-heading').insertAdjacentHTML("afterend", "<div id='new-formDemo-wrapper'><div class='lds-dual-ring'></div></div>")
      document.querySelector('#popup_request_a_demo .wcs-popup-heading h2').innerHTML = "Get a demo";
      //check if submitted
      if (sessionStorage.getItem("spz-2008")) {
        document.querySelector('#new-formDemo-wrapper').classList.add("show")
      }
      function loadDemoForm() {
        loadJS('//js.hsforms.net/forms/embed/v2.js', function () {
          hbspt.forms.create({
            region: "na1",
            portalId: "6374024",
            formId: "bd5fd709-5849-4d8c-95a3-b52f5a1453c0",
            target: '#new-formDemo-wrapper',
            onFormSubmitted: function ($form) {
              sessionStorage.setItem("spz-2008", "submitted");
              gtag_report_conversion();
            },
            isInsideFrame: true,
            inlineMessage: "Thanks for submitting the form.",
            onFormReady: function ($form) {
              const allFieldset = document.querySelectorAll('#new-formDemo-wrapper .form-columns-2,#new-formDemo-wrapper .form-columns-1,#new-formDemo-wrapper .form-columns-0')
              for (let i = 0; i < allFieldset.length; i++) {
                allFieldset[i].replaceWith(...allFieldset[i].childNodes)
              }
              //long form
              if (document.querySelector('#new-formDemo-wrapper .hs_firstname')) {
                document.querySelector('#new-formDemo-wrapper .hs_firstname').classList.add("width50", "clear");
                document.querySelector('#new-formDemo-wrapper .hs_lastname').classList.add("width50", "with-margin");
                document.querySelector('#new-formDemo-wrapper .hs_company').classList.add("width50", "with-margin");
                document.querySelector('#new-formDemo-wrapper .hs_jobtitle').classList.add("width50", "clear");
                document.querySelector('#new-formDemo-wrapper .hs_email').classList.add("width50", "clear");
                document.querySelector('#new-formDemo-wrapper .hs-dependent-field').classList.add("clear");
                document.querySelector('#new-formDemo-wrapper .hs_phone').classList.add("width50", "with-margin");
                document.querySelector('#new-formDemo-wrapper .hs_consent_countries').classList.add("clear");
                document.querySelector('#new-formDemo-wrapper .hs-richtext').classList.add("clear", "pp-parent");
                document.querySelector('#new-formDemo-wrapper .hs_submit').classList.add("clear", "submit-parent");
                insertAfter(document.querySelector('#new-formDemo-wrapper .hs_email'), document.querySelector('#new-formDemo-wrapper .hs_lastname'));
                insertAfter(document.querySelector('#new-formDemo-wrapper .hs_company'), document.querySelector('#new-formDemo-wrapper .hs_email'));
                insertAfter(document.querySelector('#new-formDemo-wrapper .hs_jobtitle'), document.querySelector('#new-formDemo-wrapper .hs_company'));
                // insertAfter(document.querySelector('#new-formDemo-wrapper .pp-parent'), document.querySelector('#new-formDemo-wrapper .submit-parent'));
                document.querySelector('#new-formDemo-wrapper .hs_firstname label span').innerHTML = 'First Name';
                document.querySelector('#new-formDemo-wrapper .hs_lastname label span').innerHTML = 'Last Name';
                document.querySelector('#new-formDemo-wrapper .hs_email label span').innerHTML = 'Email';
                document.querySelector('#new-formDemo-wrapper .hs_company label span').innerHTML = 'Company';
                document.querySelector('#new-formDemo-wrapper .hs_phone label span').innerHTML = 'Phone';
                document.querySelector('#new-formDemo-wrapper .hs_jobtitle label span').innerHTML = 'Job Title (Optional)';
                document.querySelector('#new-formDemo-wrapper .hs_consent_countries label span').innerHTML = 'Country';
                document.querySelector('#new-formDemo-wrapper .hs_consent_countries select').value = 'United States'
                trigger(document.querySelector('#new-formDemo-wrapper .hs_consent_countries select'), 'change');
                trigger(document.querySelector('#new-formDemo-wrapper .hs_consent_countries select'), 'blur');
                document.querySelector('#new-formDemo-wrapper .hs_consent_countries select option:first-child').remove();
                document.querySelector('#new-formDemo-wrapper .hs_consent_countries').classList.add("hasValue");
                document.querySelector('#new-formDemo-wrapper .hs_submit input').value = "SUBMIT";
                document.querySelector('#new-formDemo-wrapper .hs_buying_timeline select').value = "Immediately";
                trigger(document.querySelector('#new-formDemo-wrapper .hs_buying_timeline select'), 'change');
                document.querySelector('#new-formDemo-wrapper .hs_consent_countries select').insertAdjacentHTML("afterend", "<div class='arrow-select'></div>")
                // const step1Checking = setInterval(function () {
                //   if (document.querySelector('#new-formDemo-wrapper .hs_firstname input').value != "" &&
                //     document.querySelector('#new-formDemo-wrapper .hs_lastname input').value != "" &&
                //     document.querySelector('#new-formDemo-wrapper .hs_company input').value != "" &&
                //     document.querySelector('#new-formDemo-wrapper .hs_email input').value != "") {
                //     clearInterval(step1Checking);
                //     document.querySelector('#new-formDemo-wrapper').classList.add("step2")
                //   }
                // }, 200)
  
                //social proof
                document.querySelector('#popup_request_a_demo .hs_submit.hs-submit').insertAdjacentHTML("afterend", socialProof());
              }
              //short form
              else {
                if (document.querySelector('#new-formDemo-wrapper .hs_email')) {
                  document.querySelector('#new-formDemo-wrapper .hs_email label span').innerHTML = 'Email';
                  document.querySelector('#new-formDemo-wrapper .hs_email').classList.add("clear");
                }
                if (document.querySelector('#new-formDemo-wrapper .hs_buying_timeline select')) {
                  document.querySelector('#new-formDemo-wrapper .hs_buying_timeline select').value = "Immediately";
                  trigger(document.querySelector('#new-formDemo-wrapper .hs_buying_timeline select'), 'change');
                }
                document.querySelector('#new-formDemo-wrapper .hs_submit input').value = "SUBMIT";
              }
              var allInput = document.querySelectorAll('#new-formDemo-wrapper .hs-input');
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
              document.querySelector('#new-formDemo-wrapper .hs_submit input').addEventListener("click", function () {
                allInput.forEach(function (e) {
                  errorState(e);
                })
                if (document.querySelector('#new-formDemo-wrapper .hs_consent_countries select')) {
                  trigger(document.querySelector('#new-formDemo-wrapper .hs_consent_countries select'), 'change');
                }
                let i = 0;
                const submitInterval = setInterval(() => {
                  if (document.querySelector('#new-formDemo-wrapper .hs_submit input').value != "SUBMIT") {
                    clearInterval(submitInterval)
                    document.querySelector('#new-formDemo-wrapper .hs_submit input').value = "SUBMIT";
                  }
                  i++;
                  if (i > 80) {
                    clearInterval(submitInterval)
                  }
                }, 5);
              });
            }
          })
        }, document.body);
      }
      loadDemoForm()
  
  
      function socialProof() {
        return `<div class="spz-social-proof">
                  <div class="spz-social-proof__content">
                    <div class="spz-social">
                      <div class="spz-social__icon">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/komodohealth/2008/pfizer_svg_4k_1.svg" alt="Pfizer">
                      </div>
                      <div class="spz-social__icon">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/komodohealth/2008/novartis_svg_4k_1.svg" alt="Novartis">
                      </div>
                      <div class="spz-social__icon">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/komodohealth/2008/syneos_health_svg_4k_1.svg" alt="Syneos Health">
                      </div>
                      <div class="spz-social__icon">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/komodohealth/2008/kantar_svg_4k_1.svg" alt="Kantar">
                      </div>
                      <div class="spz-social__icon">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/komodohealth/2008/karyopharm_svg_4k_1.svg" alt="Karyopharm Therapeutics">
                      </div>
                    </div>
                  </div>
                </div>`;
      }
    }
  })
  