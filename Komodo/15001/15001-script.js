console.log("Test Running...")
function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(function () {
  console.log("DOM ready")
  if (!document.querySelector('.spz-15001')) {
    document.querySelector('body').classList.add('spz-15001')
    //targeted page
    if (window.location.href.indexOf('/demos') > -1) {
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
   
      document.querySelector('body #main-content .demos-listing-hero').insertAdjacentHTML('afterend', `<div class="spz-hero-section"><div class="hero-section-container"><div class="hero-left-copy"><p class="eyebrow-title">MapView Market Landscape</p><h6 class="hero-headline">Get actionable insights in minutes</h6><p class="hero-desc">With an AI assistant and pre-built template dashboards, MapView empowers everyone to generate data analytics — even those with no technical or analytics expertise.</p><p class="hero-desc">Submit the form on the right for a custom demo.</p></div><div class="hero-form-wrapper"><div class="hero-form"><div class="spz-form-title">Get a Demo</div><div id="demo_Form_15001_wrapper"><div class='lds-dual-ring'></div></div></div></div></div></div><div class="spz-interactive-section"><div class="interactive-container"><h6 class="ia-title">Interactive Demo Videos</h6><p class="ia-desc">Take a self-guided tour below to see how easy it is to compare cohorts, uncover HCP opportunities, gain deeper patient insights, and more!</p></div></div>`);



      let i = 0;
      const CROInterval = setInterval(() => {
        if (document.querySelector('.spz-15001 #demo_Form_15001_wrapper input[name="cro1"]')) {
          clearInterval(CROInterval)
          document.querySelector('.spz-15001 #demo_Form_15001_wrapper input[name="cro1"]').value = "#2001_variant"
        }
        i++;
        if (i > 6) {
          clearInterval(CROInterval)
        }
      }, 500);

      function loadDemoForm() {
        loadJS('//js.hsforms.net/forms/embed/v2.js', function () {
          hbspt.forms.create({
            region: "na1",
            portalId: "6374024",
            formId: "bd5fd709-5849-4d8c-95a3-b52f5a1453c0",
            target: '.spz-15001 #demo_Form_15001_wrapper',
            inlineMessage: "Thanks for submitting the form.",
            onFormSubmitted: function ($form) {
              console.log('Report conversion...');
              sessionStorage.setItem("spz-15001", "submitted");
              gtag_report_conversion();
            },
            isInsideFrame: true,
            onFormReady: function ($form) {
              if (document.querySelector('#popup_request_a_demo')) {
                document.querySelector('#popup_request_a_demo').remove();
              }
              const allFieldset = document.querySelectorAll('.spz-15001 #demo_Form_15001_wrapper .form-columns-2,.spz-15001 #demo_Form_15001_wrapper .form-columns-1,.spz-15001 #demo_Form_15001_wrapper .form-columns-0')
              for (let i = 0; i < allFieldset.length; i++) {
                allFieldset[i].replaceWith(...allFieldset[i].childNodes)
              }
              //long form
              if (document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_firstname')) {
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_firstname').classList.add("width50", "clear");
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_lastname').classList.add("width50", "with-margin");
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_company').classList.add("width50", "with-margin");
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_jobtitle').classList.add("width50", "clear");
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_email').classList.add("width50", "clear");
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs-dependent-field').classList.add("clear");
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_phone').classList.add("width50", "with-margin");
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_consent_countries').classList.add("clear");
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs-richtext').classList.add("clear", "pp-parent");
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_submit').classList.add("clear", "submit-parent");
                insertAfter(document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_email'), document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_lastname'));
                insertAfter(document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_company'), document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_email'));
                insertAfter(document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_jobtitle'), document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_company'));
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_firstname label span').innerHTML = 'First Name';
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_lastname label span').innerHTML = 'Last Name';
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_email label span').innerHTML = 'Email';
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_company label span').innerHTML = 'Company';
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_phone label span').innerHTML = 'Phone';
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_jobtitle label span').innerHTML = 'Job Title (Optional)';
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_consent_countries label span').innerHTML = 'Country';
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_consent_countries select').value = 'United States'
                trigger(document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_consent_countries select'), 'change');
                trigger(document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_consent_countries select'), 'blur');
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_consent_countries select option:first-child').remove();
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_consent_countries').classList.add("hasValue");
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_submit input').value = "SUBMIT";
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_buying_timeline select').value = "Immediately";
                trigger(document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_buying_timeline select'), 'change');
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_consent_countries select').insertAdjacentHTML("afterend", "<div class='arrow-select'></div>")
                // const step1Checking = setInterval(function () {
                //   if (document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_firstname input').value != "" &&
                //     document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_lastname input').value != "" &&
                //     document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_company input').value != "" &&
                //     document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_email input').value != "") {
                //     clearInterval(step1Checking);
                //     document.querySelector('.spz-15001 #demo_Form_15001_wrapper').classList.add("step2")
                //   }
                // }, 200)
              }
              //short form
              else {
                if (document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_email')) {
                  document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_email label span').innerHTML = 'Email';
                  document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_email').classList.add("clear");
                }
                if (document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_buying_timeline select')) {
                  document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_buying_timeline select').value = "Immediately";
                  trigger(document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_buying_timeline select'), 'change');
                }
                document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_submit input').value = "SUBMIT";
              }
              var allInput = document.querySelectorAll('.spz-15001 #demo_Form_15001_wrapper .hs-input');
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
              document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_submit input').addEventListener("click", function () {
                allInput.forEach(function (e) {
                  errorState(e);
                })
                if (document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_consent_countries select')) {
                  trigger(document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_consent_countries select'), 'change');
                }
                let i = 0;
                const submitInterval = setInterval(() => {
                  if (document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_submit input').value != "SUBMIT") {
                    clearInterval(submitInterval)
                    document.querySelector('.spz-15001 #demo_Form_15001_wrapper .hs_submit input').value = "SUBMIT";
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
  }
})
