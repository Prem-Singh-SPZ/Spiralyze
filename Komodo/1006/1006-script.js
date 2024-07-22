function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(function () {
  if (!document.querySelector('.spz-1006')) {
    document.querySelector('body').classList.add('spz-1006')
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

    document.querySelector('.spz-1006 #popup_contact_us .wcs-pform').remove();
    document.querySelector('.spz-1006  #popup_connect.wcs.wcs-modal').remove();
    document.querySelector('.spz-1006 #popup_contact_us .wcs-col-12').innerHTML = `
        <div class="home-logo"><a href="https://www.komodohealth.com/"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1707409447/komodohealth/1006/logo.webp" alt="Komodo Logo"></a></div>
        <div class="wcs-pform">
          <div class="wcs-popup-heading">
            <h2>Contact Us</h2>
          </div>
          <div id='contact-us-form-wrapper'><div class='lds-dual-ring'></div></div>
          <div class="spz-back"><a href="#close-modal" rel="modal:close" class="close-modal">< Back</a></div>
          </div>
        </div>
        <div class="social-proof"><picture>
          <source media="(min-width:1025px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/v1721285891/KomodoHealth/1006/Social_proof.png">
          <source media="(min-width:768px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/v1721285891/KomodoHealth/1006/Social_proof_tab.png">
          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1721285891/KomodoHealth/1006/Social_proof_mob.png" alt="Social Proof">
        </picture></div>
        `

    document.querySelector('.spz-1006 #popup_contact_us .wcs-col-12').insertAdjacentHTML("afterend", `<div class="wcs-bg-img"></div>`);

    // if (document.querySelector('#tmpwidget_1665168603900')) {
    //     document.querySelector('a[href="#tmpwidget_1665168603900"]').setAttribute("href", "#popup_contact_us")
    // }
    // if (document.querySelector('a[href="#popup_contact_us"]')) {
    //   for (let i = 0; i < document.querySelectorAll('a[href="#popup_contact_us"]').length; i++) {
    //     if (document.querySelectorAll('a[href="#popup_contact_us"]')[i].getAttribute("href") == "#popup_contact_us" && document.querySelectorAll('a[href="#popup_contact_us"]')[i].innerHTML.trim() == 'Request Demo') {
    //       document.querySelectorAll('a[href="#popup_contact_us"]')[i].setAttribute("href", "#popup_contact_us")
    //     }
    //   }
    // }
    document.addEventListener('click', function (e) {
      if (e.target.closest("a") && e.target.closest("a").getAttribute('href') === '#popup_contact_us') {
        document.body.classList.add('contact-modal-open');
        document.querySelector('html').classList.add('contact-modal-open');
        whichForm();
        window.dispatchEvent(new Event('resize'));
        if (document.querySelector('.spz-1006 #contact-us-form-wrapper .submitted-message')) {
          document.querySelector('.spz-1006 #contact-us-form-wrapper').innerHTML = "<div class='lds-dual-ring'></div>"
          loadDemoForm()
        }
        let i = 0;
        const CROInterval = setInterval(() => {
          if (document.querySelector('.spz-1006 #contact-us-form-wrapper input[name="cro1"]')) {
            clearInterval(CROInterval)
            document.querySelector('.spz-1006 #contact-us-form-wrapper input[name="cro1"]').value = "#1006_variant"
          }
          i++;
          if (i > 6) {
            clearInterval(CROInterval)
          }
        }, 500);
      }

      if (e.target.classList.contains("wcs-bg-img")) {
        document.querySelector('.spz-1006 #popup_contact_us .close-modal').click();
      }
    });

    function whichForm() {
      let checkForm = setInterval(function () {
        if (!document.querySelector('.spz-1006 .jquery-modal.blocker.current #contact-us-form-wrapper')) {
          clearInterval(checkForm);
          document.body.classList.remove('contact-modal-open');
          document.querySelector('html').classList.remove('contact-modal-open');
        }
      }, 100);
    }

    //for form
    function loadDemoForm() {
      loadJS('//js.hsforms.net/forms/embed/v2.js', function () {
        hbspt.forms.create({
          region: "na1",
          portalId: "6374024",
          formId: "89116499-15d1-4cd0-b724-7a46e68cf8f0",
          target: '.spz-1006 #contact-us-form-wrapper',
          inlineMessage: "Thanks for submitting the form.",
          submitText: "SUBMIT",
          onFormSubmitted: function ($form) {
            console.log('Report conversion...');
            sessionStorage.setItem("spz-1006", "submitted");
            gtag_report_conversion();
          },
          isInsideFrame: true,
          onFormReady: function ($form) {
            const allFieldset = document.querySelectorAll('.spz-1006 #contact-us-form-wrapper .form-columns-2,.spz-1006 #contact-us-form-wrapper .form-columns-1,.spz-1006 #contact-us-form-wrapper .form-columns-0')
            for (let i = 0; i < allFieldset.length; i++) {
              allFieldset[i].replaceWith(...allFieldset[i].childNodes)
            }
            //long form
            if (document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_firstname')) {
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_firstname').classList.add("width50", "clear");
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_lastname').classList.add("width50", "with-margin");
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_company').classList.add("width50", "clear");
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_jobtitle').classList.add("width50", "with-margin");
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_email').classList.add("width50", "clear");
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs-dependent-field').classList.add("clear");
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_message').classList.add("clear");
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_phone').classList.add("width50", "with-margin");
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_consent_countries').classList.add("clear");
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs-richtext').classList.add("clear", "pp-parent");
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_submit').classList.add("clear", "submit-parent");
              // insertAfter(document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_email'), document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_lastname'));
              // insertAfter(document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_company'), document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_email'));
              // insertAfter(document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_jobtitle'), document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_company'));
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_firstname label span').innerHTML = 'First Name';
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_lastname label span').innerHTML = 'Last Name';
              // document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_email label span').innerHTML = 'Email';
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_company label span').innerHTML = 'Company';
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_phone label span').innerHTML = 'Phone';
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_jobtitle label span').innerHTML = 'Job Title';
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_consent_countries label span').innerHTML = 'Country';
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_consent_countries select').value = 'United States'
              trigger(document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_consent_countries select'), 'change');
              trigger(document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_consent_countries select'), 'blur');
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_consent_countries select option:first-child').remove();
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_consent_countries').classList.add("hasValue");
              // document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_submit input').value = "SUBMIT";
              if (document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_buying_timeline select')) {
                document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_buying_timeline select').value = "Immediately";
                trigger(document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_buying_timeline select'), 'change');
              }
              document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_consent_countries select').insertAdjacentHTML("afterend", "<div class='arrow-select'></div>")
              // const step1Checking = setInterval(function () {
              //     if (document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_firstname input').value != "" &&
              //         document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_lastname input').value != "" &&
              //         document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_company input').value != "" &&
              //         document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_email input').value != "") {
              //         clearInterval(step1Checking);
              //         document.querySelector('.spz-1006 #contact-us-form-wrapper').classList.add("step2")
              //     }
              // }, 200)
            }
            //short form
            else {
              if (document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_email')) {
                document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_email label span').innerHTML = 'Email';
                document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_email').classList.add("clear");
              }
              if (document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_buying_timeline select')) {
                document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_buying_timeline select').value = "Immediately";
                trigger(document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_buying_timeline select'), 'change');
              }
              // document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_submit input').value = "SUBMIT";
            }
            var allInput = document.querySelectorAll('.spz-1006 #contact-us-form-wrapper .hs-input');
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
            document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_submit input').addEventListener("click", function () {
              allInput.forEach(function (e) {
                errorState(e);
              })
              if (document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_consent_countries select')) {
                trigger(document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_consent_countries select'), 'change');
              }
              // let i = 0;
              // const submitInterval = setInterval(() => {
              //   if (document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_submit input').value != "SUBMIT") {
              //     clearInterval(submitInterval)
              //     document.querySelector('.spz-1006 #contact-us-form-wrapper .hs_submit input').value = "SUBMIT";
              //   }
              //   i++;
              //   if (i > 80) {
              //     clearInterval(submitInterval)
              //   }
              // }, 5);
              let y = 0;
              const sliderInterval = setInterval(() => {
                window.dispatchEvent(new Event('resize'));
                y++;
                if (y > 7) {
                  clearInterval(sliderInterval)
                }
              }, 500)
            })
          }
        })
      }, document.body);
    }
    loadDemoForm()
  }
})
