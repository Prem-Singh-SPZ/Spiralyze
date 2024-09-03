let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
      clearInterval(bodyLoaded);
      if (!body.classList.contains('spz-9001')) {
        body.classList.add('spz-9001');
        waitForElm('.spz-9001 .zy-squiggle-hero-container').then(function () {
          // Add logo
          document.querySelector('.spz-9001 .zy-squiggle-hero-container .zy-container').insertAdjacentHTML('beforebegin', `
              <div class="zy-container logo-spz">
                <a href="/">
                  <img class="zy-logo" src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/9001/zywave__inc_logo_1.svg" alt="Zywave">
                </a>
              </div>`);
          document.querySelector('.spz-9001 .zy-squiggle-hero-container .zy-hero-text-container h1').innerHTML = "<span>Streamline</span> product creation, distribution and servicing.";
          document.querySelector('.spz-9001 .zy-squiggle-hero-container .zy-hero-text-container h1').insertAdjacentHTML('beforebegin', '<div class="sub-title">Insurer Solutions</div>');
          document.querySelector('.spz-9001 .zy-squiggle-hero-container .zy-hero-text-container h1').insertAdjacentHTML('afterend', `<div class="zy-tags">
                <div class="zy-tag">Employee Benefits</div>
                <div class="zy-tag">Property & Casualty</div>
              </div>`);
          document.querySelector('.spz-9001 .zy-squiggle-hero-container .zy-hero-content-container').innerHTML = '';
          document.querySelector('.spz-9001 .zy-squiggle-hero-container .zy-hero-content-container').insertAdjacentHTML('beforeend', `
              <ul class="spz-hero-list">
                  <li><strong>Creation.</strong> API and data-driven solutions deliver impactful market insights to inform resilient pricing models and optimal coverages.</li>
                  <li><strong>Distribution.</strong> Efficiently capture new market opportunities with a complete distribution solution backed by a powerful product engine.</li>
                  <li><strong>Servicing.</strong> Reduce your risk exposure and avoidable claims through proactive education, automated engagement, and personalized outreach.</li>
              </ul>`);
          // Move form from '.spz-9001 #zy-demo-form-section .zy-col-form .zy-marketo-form-container' to '.spz-9001 .zy-squiggle-hero-container .zy-hero-image-container .zy-hero-image-container-inner'
          document.querySelector('.spz-9001 .zy-squiggle-hero-container .zy-hero-image-container .zy-hero-image-container-inner').insertAdjacentElement('beforeend', document.querySelector('.spz-9001 #zy-demo-form-section .zy-col-form'));
          
          socialProofLogo();
          //Form internal code
          waitForElm('.spz-9001 .zy-squiggle-hero-container .mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
            formModify();
          });
          //Add Hidden field value
          waitForElm('.spz-9001 .zy-squiggle-hero-container .zy-hero-image-container .mktoForm input[name="cR02"]').then(function () {
            document.querySelector(`.spz-9001 .zy-squiggle-hero-container .zy-hero-image-container .mktoForm input[name="cR02"]`).setAttribute("value", "9001_variant");
          });
        })
      }
    }
  });
  function formModify() {
    var formDiv = document.querySelector('.spz-9001 .zy-squiggle-hero-container form.mktoForm');
    // Form Extra Titles
    if (formDiv && document.querySelectorAll('.form_title').length == 0) {
      formDiv.insertAdjacentHTML('beforebegin', `<h3 class="form_title">Get a demo</h3>`);
    }
    // form CTA Update
    var form_button = setInterval(() => {
      var textChng = document.querySelector('.spz-9001 .zy-squiggle-hero-container form.mktoForm .mktoButtonRow .mktoButton');
      if (textChng) {
        textChng.innerText = 'Submit';
        clearInterval(form_button);
      }
    }, 100);
    // Updating Form Labels
    document.querySelector('#LblFirstName').textContent = "First name";
    document.querySelector('#LblLastName').textContent = "Last name";
    document.querySelector('#LblEmail').textContent = "Business email";
    document.querySelector('#LblCompany').textContent = "Company";
    document.querySelector('#LblwebsiteFormJobDescription').textContent = "Job category";
    document.querySelector('select#websiteFormJobDescription').options[0].textContent = 'Job category';
    document.querySelector('#LblPhone').textContent = "Phone";
    document.querySelector('#Lblringdna100__ProductInterest__c').textContent = "I want to discuss";
    document.querySelector('select#ringdna100__ProductInterest__c').options[0].textContent = 'I want to discuss';
    // Add Unique class to each field in form as per the label name
    var form_fields = document.querySelectorAll('.spz-9001 .zy-squiggle-hero-container form.mktoForm .mktoFormRow fieldset.mktoFormCol .mktoFormRow');
    form_fields.forEach(function (element) {
      if (element.querySelector('.mktoField:not([type="hidden"])')) {
        var label = element.querySelector('.mktoField:not([type="hidden"])').getAttribute('name').toLowerCase();
        element.classList.add(label);
      } else {
        element.classList.add('no-label');
      }
    });
    // Change Field Position
    var phone_field = document.querySelector('.spz-9001 .mktoForm .mktoFormRow.phone');
    var email_field = document.querySelector('.spz-9001 .mktoFormRow.email');
    email_field.after(phone_field);
    var all_inputs = document.querySelectorAll('.spz-9001 .zy-squiggle-hero-container form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz-9001 .zy-squiggle-hero-container form.mktoForm .mktoFormCol .mktoFieldWrap select');
    all_inputs.forEach(function (element) {
      element.removeAttribute('placeholder');
    });
    // form state
    var selector = '.spz-9001 .zy-squiggle-hero-container form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz-9001 .zy-squiggle-hero-container form.mktoForm .mktoFormCol .mktoFieldWrap select';
    document.addEventListener('focus', function (event) {
      if (event.target.matches(selector)) {
        event.target.closest('form .mktoFormCol .mktoFieldWrap').classList.add('active', 'typing');
      }
    }, true);
    var eventList = ["focusin", "blur", "focusout", "keyup", "change"];
    for (s_event of eventList) {
      document.addEventListener(s_event, function (event) {
        if (event.target.matches(selector)) {
          if (event.target.value == null || event.target.value == '') {
            event.target.closest('form .mktoFormCol .mktoFieldWrap').classList.remove('filled');
          } else {
            event.target.closest('form .mktoFormCol .mktoFieldWrap').classList.add('filled');
          }
          if (event.type == "change" && event.target.tagName == 'SELECT') {
            if (event.target.value == "") {
              event.target.closest('form .mktoFormCol .mktoFieldWrap').classList.add('error');
            } else {
              event.target.closest('form .mktoFormCol .mktoFieldWrap').classList.remove('error');
              if (event.target.parentNode.querySelector('.mktoError').length > 0) {
                event.target.parentNode.querySelector('.mktoError').style.display = 'none';
              }
            }
          } else {
            if (event.target.classList.contains('mktoInvalid')) {
              var closestError = event.target.parentNode.querySelector('.mktoError');
              if (closestError && closestError.style.display == '') {
                event.target.closest('form .mktoFormCol .mktoFieldWrap').classList.add('error');
              } else {
                event.target.closest('form .mktoFormCol .mktoFieldWrap').classList.remove('error');
              }
            } else {
              event.target.closest('form .mktoFormCol .mktoFieldWrap').classList.remove('error');
            }
          }
        }
      });
    }
    document.addEventListener('focusout', function (event) {
      document.querySelectorAll('form .mktoFormCol .mktoFieldWrap.typing').forEach(function (elem) {
        elem.classList.remove('active', 'typing');
      })
    }, true);
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
  function socialProofLogo() {
    document.querySelector('.zy-squiggle-hero-container-inner.zy-container').insertAdjacentHTML('afterend', `<div class="social-logo-container">
        <div class="social-proof">
            <picture>
                <source srcset="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/9001/social-proof.svg" media="(min-width: 1250px)">
                <source srcset="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/9001/social-proof-tab.svg" media="(min-width: 768px)">
                <img class="tl-logo" src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/9001/social-proof-mob.svg" alt="Social Proof">
            </picture>
    </div>`);
  }