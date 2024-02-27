function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(function () {
  if (!document.querySelector('.spz-1002')) {
    document.querySelector('body').classList.add('spz-1002')
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
    function setBG() {
      if (document.querySelector('.spz-1002 .jquery-modal')) {
        const popupHeight = document.querySelector('.spz-1002 .jquery-modal').offsetHeight;
        const formHeight = document.querySelector('.spz-1002 #popup_contact_us').offsetHeight;
        const padding = parseInt(window.getComputedStyle(document.querySelector('.spz-1002 .jquery-modal')).paddingTop, 10) + parseInt(window.getComputedStyle(document.querySelector('.spz-1002 .jquery-modal')).paddingBottom, 10);
        if (formHeight + padding > popupHeight) {
          document.querySelector('.spz-1002 .new-background').style.height = "calc(100% + " + (formHeight + padding - popupHeight) + "px)";
        }
        else {
          document.querySelector('.spz-1002 .new-background').removeAttribute("style")
        }
      }
    }
    loadJS('https://res.cloudinary.com/spiralyze/raw/upload/v1699271975/KomodoHealth/1002/bodyScrollLock.js', function () { }, document.body);
    document.querySelector('.spz-1002 #popup_contact_us .wcs-pform').remove()
    document.querySelector('.spz-1002 #popup_connect .wcs-pform').remove()
    document.querySelector('.spz-1002 #popup_contact_us .wcs-col-12').innerHTML = `
    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/1002/background_1.webp" width="0" height="0" style="display:none" alt="Background Desktop"/>
    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/1002/background.webp" width="0" height="0" style="display:none" alt="Background Tablet"/>
    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/1002/background_2.webp" width="0" height="0" style="display:none" alt="Background 1920"/>
    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/1002/background_3.webp" width="0" height="0" style="display:none" alt="Background 3840"/>
    <div class="wcs-pform">
      <div class="wcs-popup-heading">
        <h2>Contact Us</h2>
        <div class="review-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1702395225/komodohealth/2004/frame_5597.svg" alt="Star Review" width="116" height="20"/>
          <div class="text"><span class="black">4.8</span> (678 reviews)</div>
        </div>
      </div>
    </div>
    `
    document.querySelector('.spz-1002 #popup_contact_us .wcs-popup-heading').insertAdjacentHTML("afterend", "<div id='new-form-wrapper'><div class='lds-dual-ring'></div></div>")

    let buttonConnect = [];
    for (let i = 0; i < document.querySelectorAll('a[href="#popup_connect"]').length; i++) {
      buttonConnect[i] = document.querySelectorAll('a[href="#popup_connect"]')[i];
    }
    for (let i = 0; i < buttonConnect.length; i++) {
      buttonConnect[i].setAttribute("href", "#popup_contact_us")
      buttonConnect[i].classList.add("btn-connect");
    }
    document.addEventListener('click', function (e) {
      if (e.target.closest("a") && e.target.closest("a").getAttribute('href') === '#popup_contact_us') {
        document.querySelector('.spz-1002 #popup_contact_us .wcs-popup-heading h2').innerHTML = "Contact Us";
        bodyScrollLock.disableBodyScroll(document.querySelector('.spz-1002 .blocker'));
        document.querySelector('.spz-1002 #popup_contact_us').insertAdjacentHTML("beforebegin", "<div class='new-background'></div>")
        document.querySelector('.spz-1002 #popup_contact_us .close-modal ').insertAdjacentHTML("afterend", "<div class='close-modal-fake'></div>")
        setBG()
        if (document.querySelector('.spz-1002 #new-form-wrapper .submitted-message')) {
          document.querySelector('.spz-1002 #new-form-wrapper').innerHTML = "<div class='lds-dual-ring'></div>"
          loadForm()
          if (document.querySelector('.spz-1002 #new-form-wrapper.step2')) {
            document.querySelector('.spz-1002 #new-form-wrapper.step2').classList.remove("step2")
          }
        }
      }
      if (e.target.closest("a") && e.target.closest("a").classList.contains('btn-connect')) {
        document.querySelector('.spz-1002 #popup_contact_us .wcs-popup-heading  h2').innerHTML = "Connect With Us";
        bodyScrollLock.disableBodyScroll(document.querySelector('.spz-1002 .blocker'));
        if (document.querySelector('.spz-1002 #new-form-wrapper .submitted-message')) {
          document.querySelector('.spz-1002 #new-form-wrapper').innerHTML = "<div class='lds-dual-ring'></div>"
          loadForm()
          if (document.querySelector('.spz-1002 #new-form-wrapper.step2')) {
            document.querySelector('.spz-1002 #new-form-wrapper.step2').classList.remove("step2")
          }
        }
        let i = 0;
        const CROInterval = setInterval(() => {
          if (document.querySelector('.spz-1002 #new-form-wrapper input[name="cro1"]')) {
            clearInterval(CROInterval)
            document.querySelector('.spz-1002 #new-form-wrapper input[name="cro1"]').value = ""
          }
          i++;
          if (i > 6) {
            clearInterval(CROInterval)
          }
        }, 500);
      }
      if (e.target.closest("div") && e.target.closest("div").classList.contains('close-modal-fake')) {
        setTimeout(function () {
          for (let i = 0; i < document.querySelectorAll('.spz-1002 .new-background').length; i++) {
            document.querySelector('.spz-1002 .new-background').remove()
            document.querySelector('.spz-1002 .close-modal-fake').remove()
          }
        }, 100)
        bodyScrollLock.enableBodyScroll(document.querySelector('.spz-1002 .blocker'));
        document.querySelector('.spz-1002 #popup_contact_us .close-modal ').click();
      }
      document.onkeydown = function (e) {
        if (e.key === "Escape") {
          setTimeout(function () {
            for (let i = 0; i < document.querySelectorAll('.spz-1002 .new-background').length; i++) {
              document.querySelector('.spz-1002 .new-background').remove()
              document.querySelector('.spz-1002 .close-modal-fake').remove()
            }
          }, 100)
          bodyScrollLock.enableBodyScroll(document.querySelector('.spz-1002 .blocker'));
          document.querySelector('.spz-1002 #popup_contact_us .close-modal ').click();
        }
      }
    });
    $.modal.defaults.escapeClose = false;
    $.modal.defaults.clickClose = false;
    document.body.onresize = function () {
      setBG()
    }
    function loadForm() {
      loadJS('//js.hsforms.net/forms/embed/v2.js', function () {
        hbspt.forms.create({
          region: "na1",
          portalId: "6374024",
          formId: "89116499-15d1-4cd0-b724-7a46e68cf8f0",
          target: '.spz-1002 #new-form-wrapper',
          isInsideFrame: true,
          inlineMessage: "Thanks for submitting the form.",
          onFormSubmitted: function ($form) {
            gtag_report_conversion();
          },
          onFormReady: function ($form) {
            if (document.querySelector('.spz-1002 #new-form-wrapper .hs_firstname')) {
              document.querySelector('.spz-1002 #new-form-wrapper .hs_firstname').classList.add("width50", "clear");
              document.querySelector('.spz-1002 #new-form-wrapper .hs_lastname').classList.add("width50", "with-margin");
              document.querySelector('.spz-1002 #new-form-wrapper .hs_company').classList.add("width50", "with-margin");
              document.querySelector('.spz-1002 #new-form-wrapper .hs_jobtitle').classList.add("width50", "clear");
              document.querySelector('.spz-1002 #new-form-wrapper .hs_email').classList.add("width50", "clear");
              document.querySelector('.spz-1002 #new-form-wrapper .hs_phone').classList.add("width50", "with-margin");
              document.querySelector('.spz-1002 #new-form-wrapper .hs_message').classList.add("clear");
              document.querySelector('.spz-1002 #new-form-wrapper .hs_consent_countries').classList.add("clear");
              document.querySelector('.spz-1002 #new-form-wrapper .hs-richtext').classList.add("clear", "pp-parent");
              document.querySelector('.spz-1002 #new-form-wrapper .hs_submit').classList.add("clear", "submit-parent");
              insertAfter(document.querySelector('.spz-1002 #new-form-wrapper .hs_email'), document.querySelector('.spz-1002 #new-form-wrapper .hs_lastname'));
              document.querySelector('.spz-1002 #new-form-wrapper .hs_email label span').innerHTML = 'Work Email';
              document.querySelector('.spz-1002 #new-form-wrapper .hs_company label span').innerHTML = 'Company';
              document.querySelector('.spz-1002 #new-form-wrapper .hs_phone label span').innerHTML = 'Phone (Optional)';
              document.querySelector('.spz-1002 #new-form-wrapper .hs_consent_countries label span').innerHTML = 'Country';
              document.querySelector('.spz-1002 #new-form-wrapper .hs_consent_countries select').value = 'United States'
              trigger(document.querySelector('.spz-1002 #new-form-wrapper .hs_consent_countries select'), 'change');
              trigger(document.querySelector('.spz-1002 #new-form-wrapper .hs_consent_countries select'), 'blur');
              document.querySelector('.spz-1002 #new-form-wrapper .hs_consent_countries select option:first-child').remove();
              document.querySelector('.spz-1002 #new-form-wrapper .hs_consent_countries').classList.add("hasValue");
              document.querySelector('.spz-1002 #new-form-wrapper .hs_submit input').value = "SUBMIT";
              document.querySelector('.spz-1002 #new-form-wrapper .hs_consent_countries select').insertAdjacentHTML("afterend", "<div class='arrow-select'></div>")
              insertAfter(document.querySelector('.spz-1002 #new-form-wrapper .hs_message'), document.querySelector('.spz-1002 #new-form-wrapper .hs_consent_countries'))

              const step1Checking = setInterval(function () {
                if (document.querySelector('.spz-1002 #new-form-wrapper .hs_firstname input').value != "" &&
                  document.querySelector('.spz-1002 #new-form-wrapper .hs_lastname input').value != "" &&
                  document.querySelector('.spz-1002 #new-form-wrapper .hs_company input').value != "" &&
                  document.querySelector('.spz-1002 #new-form-wrapper .hs_email input').value != "") {
                  clearInterval(step1Checking);
                  document.querySelector('.spz-1002 #new-form-wrapper').classList.add("step2")
                  setBG()
                }
              }, 200)
            }
            else {
              if (document.querySelector('.spz-1002 #new-form-wrapper .hs_email')) {
                document.querySelector('.spz-1002 #new-form-wrapper .hs_email label span').innerHTML = 'Email';
                document.querySelector('.spz-1002 #new-form-wrapper .hs_email').classList.add("clear");
              }
              if (document.querySelector('.spz-1002 #new-form-wrapper .hs_message')) {
                document.querySelector('.spz-1002 #new-form-wrapper .hs_message').classList.add("clear");
              }
              if (document.querySelector('.spz-1002 #new-form-wrapper .hs_phone')) {
                document.querySelector('.spz-1002 #new-form-wrapper .hs_phone label span').innerHTML = 'Phone (Optional)';
              }
              document.querySelector('.spz-1002 #new-form-wrapper .hs_submit input').value = "SUBMIT";
            }
            var allInput = document.querySelectorAll('.spz-1002 #new-form-wrapper .hs-input');
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
            document.querySelector('.spz-1002 #new-form-wrapper .hs_submit input').addEventListener("click", function () {
              allInput.forEach(function (e) {
                errorState(e);
              })
              if (document.querySelector('.spz-1002 #new-form-wrapper .hs_consent_countries select')) {
                trigger(document.querySelector('.spz-1002 #new-form-wrapper .hs_consent_countries select'), 'change');
              }
              let i = 0;
              const submitInterval = setInterval(() => {
                if (document.querySelector('.spz-1002 #new-form-wrapper .hs_submit input').value != "SUBMIT") {
                  clearInterval(submitInterval)
                  document.querySelector('.spz-1002 #new-form-wrapper .hs_submit input').value = "SUBMIT";
                }
                i++;
                if (i > 80) {
                  clearInterval(submitInterval)
                }
              }, 5);
            })
            document.querySelector('.spz-1002 #new-form-wrapper .hs_message textarea').addEventListener("keypress", function (e) {
              if (e.key === 'Enter') {
                e.preventDefault();
                document.querySelector('.spz-1002 #new-form-wrapper .hs_submit input').click()
              }
            });
            let i = 0;
            const CROInterval = setInterval(() => {
              if (document.querySelector('.spz-1002 #new-form-wrapper input[name="cro1"]')) {
                clearInterval(CROInterval)
                document.querySelector('.spz-1002 #new-form-wrapper input[name="cro1"]').value = "1002_variant"
              }
              i++;

              if (i > 6) {
                clearInterval(CROInterval)
              }
            }, 500);

          }
        })
      }, document.body);
    }
    loadForm()
    document.querySelector('.header__mobile-menu-open-icon').addEventListener('click', function () {
      window.scrollTo(0, 0)
    })
  }
});
