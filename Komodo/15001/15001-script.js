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
    if (window.location.href.indexOf('https://www.komodohealth.com/get-a-demo') > -1) {
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
      function outerHeight(el) {
        const style = getComputedStyle(el);

        return (
          el.getBoundingClientRect().height +
          parseFloat(style.marginTop) +
          parseFloat(style.marginBottom)
        );
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
   
      document.querySelector('body .demos-hero-content').insertAdjacentHTML('afterend', `<div id="new-formDemo-wrapper"><div class='lds-dual-ring'></div></div>`);



      let i = 0;
      const CROInterval = setInterval(() => {
        if (document.querySelector('.spz-15001 #new-formDemo-wrapper input[name="cro1"]')) {
          clearInterval(CROInterval)
          document.querySelector('.spz-15001 #new-formDemo-wrapper input[name="cro1"]').value = "#2001_variant"
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
            target: '.spz-15001 #new-formDemo-wrapper',
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
              const allFieldset = document.querySelectorAll('.spz-15001 #new-formDemo-wrapper .form-columns-2,.spz-15001 #new-formDemo-wrapper .form-columns-1,.spz-15001 #new-formDemo-wrapper .form-columns-0')
              for (let i = 0; i < allFieldset.length; i++) {
                allFieldset[i].replaceWith(...allFieldset[i].childNodes)
              }
              //long form
              if (document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_firstname')) {
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_firstname').classList.add("width50", "clear");
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_lastname').classList.add("width50", "with-margin");
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_company').classList.add("width50", "with-margin");
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_jobtitle').classList.add("width50", "clear");
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_email').classList.add("width50", "clear");
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs-dependent-field').classList.add("clear");
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_phone').classList.add("width50", "with-margin");
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_consent_countries').classList.add("clear");
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs-richtext').classList.add("clear", "pp-parent");
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_submit').classList.add("clear", "submit-parent");
                insertAfter(document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_email'), document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_lastname'));
                insertAfter(document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_company'), document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_email'));
                insertAfter(document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_jobtitle'), document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_company'));
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_firstname label span').innerHTML = 'First Name';
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_lastname label span').innerHTML = 'Last Name';
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_email label span').innerHTML = 'Email';
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_company label span').innerHTML = 'Company';
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_phone label span').innerHTML = 'Phone';
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_jobtitle label span').innerHTML = 'Job Title (Optional)';
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_consent_countries label span').innerHTML = 'Country';
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_consent_countries select').value = 'United States'
                trigger(document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_consent_countries select'), 'change');
                trigger(document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_consent_countries select'), 'blur');
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_consent_countries select option:first-child').remove();
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_consent_countries').classList.add("hasValue");
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_submit input').value = "SUBMIT";
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_buying_timeline select').value = "Immediately";
                trigger(document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_buying_timeline select'), 'change');
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_consent_countries select').insertAdjacentHTML("afterend", "<div class='arrow-select'></div>")
                const step1Checking = setInterval(function () {
                  if (document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_firstname input').value != "" &&
                    document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_lastname input').value != "" &&
                    document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_company input').value != "" &&
                    document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_email input').value != "") {
                    clearInterval(step1Checking);
                    document.querySelector('.spz-15001 #new-formDemo-wrapper').classList.add("step2")
                  }
                }, 200)
              }
              //short form
              else {
                if (document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_email')) {
                  document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_email label span').innerHTML = 'Email';
                  document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_email').classList.add("clear");
                }
                if (document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_buying_timeline select')) {
                  document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_buying_timeline select').value = "Immediately";
                  trigger(document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_buying_timeline select'), 'change');
                }
                document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_submit input').value = "SUBMIT";
              }
              var allInput = document.querySelectorAll('.spz-15001 #new-formDemo-wrapper .hs-input');
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
              document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_submit input').addEventListener("click", function () {
                allInput.forEach(function (e) {
                  errorState(e);
                })
                if (document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_consent_countries select')) {
                  trigger(document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_consent_countries select'), 'change');
                }
                let i = 0;
                const submitInterval = setInterval(() => {
                  if (document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_submit input').value != "SUBMIT") {
                    clearInterval(submitInterval)
                    document.querySelector('.spz-15001 #new-formDemo-wrapper .hs_submit input').value = "SUBMIT";
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
    //non targeted page
    else {
      // let elementArray = [];
      // for (let i = 0; i < document.querySelectorAll('a[href="#popup_request_a_demo"]').length; i++) {
      //   elementArray[i] = document.querySelectorAll('a[href="#popup_request_a_demo"]')[i];
      // }
      // for (let i = 0; i < elementArray.length; i++) {
      //   elementArray[i].setAttribute("href", "https://www.komodohealth.com/get-a-demo");
      //   elementArray[i].removeAttribute("rel");
      // }

      let rfst = setInterval(() => {
        document.querySelectorAll('a[href="#popup_request_a_demo"]').forEach(function (el) {
          el.setAttribute("href", "https://www.komodohealth.com/get-a-demo");
          el.removeAttribute("rel");
        })
      }, 100);

      setTimeout(() => {
        clearInterval(rfst);
      }, 2000);
    }
  }
})
