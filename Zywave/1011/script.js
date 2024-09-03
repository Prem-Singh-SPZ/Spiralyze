let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
      clearInterval(bodyLoaded);
      if (!body.classList.contains('spz_1011')) {
          body.classList.add('spz_1011');
        waitForElm('.spz_1011 #zy-demo-form-section').then(function () {
          document.querySelector('.spz_1011 #zy-demo-form-section .zy-col-text').innerHTML = `<h4 class="testi-content">We doubled our sales the year after implementing Zywave, and our sales have only continued to grow.</h4>
          <div class="testi-author">
            <div class="author-info">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/1011/avatar.webp" class="author-img" alt="Roland Barrera">
              <div class="author-name">
                <h5 class="name">Roland Barrera</h5>
                <span class="designation">Owner</span>
              </div>
            </div>
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/1011/frame_1171275511.webp" class="author-company-logo" alt="Roland Barrera">
          </div>`;
          //Form internal code
          waitForElm('.spz_1011 #zy-demo-form-section .zy-col-form form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
            formModify();
          });
          //Add Hidden field value
          waitForElm('.spz_1011 .zy-marketo-form-container .mktoForm input[name="cR02"]').then(function () {
            document.querySelector(`.spz_1011 .zy-marketo-form-container .mktoForm input[name="cR01"]`).setAttribute("value", "#1011_variant");
          });
        });
      }
    }
  });
  function formModify() {
      
    // Add class in mktoFormRow using count
    var form_fields = document.querySelectorAll('.spz_1011 #zy-demo-form-section .zy-col-form form.mktoForm .mktoFormRow fieldset.mktoFormCol .mktoFormRow');
      for (var i = 0; i < form_fields.length; i++) {
      var dynamicClass = 'field-' + (i + 1);
      form_fields[i].classList.add(dynamicClass);
    }
    var formDiv = document.querySelector('.spz_1011 #zy-demo-form-section form.mktoForm');
    // Form Extra Titles
    if (formDiv && document.querySelectorAll('.form_title').length == 0) {
      formDiv.insertAdjacentHTML('beforebegin', `<h3 class="form_title">Get a demo</h3>`);
    }
    // form CTA Update
    var form_button = setInterval(() => {
      var textChng = document.querySelector('.spz_1011 #zy-demo-form-section form.mktoForm .mktoButtonRow .mktoButton');
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
    // Change Field Position
    var email_field = document.querySelector('.spz_1011 .mktoForm .mktoFormRow.field-7');
    var lname_field = document.querySelector('.spz_1011 .mktoFormRow.field-2');
    lname_field.after(email_field);
    var all_inputs = document.querySelectorAll('.spz_1011 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz_1011 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap select');
    all_inputs.forEach(function(element) {
      element.removeAttribute('placeholder');
    });
    // form state
    var selector = '.spz_1011 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz_1011 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap select';
    document.addEventListener('focus', function (event) {
      if (event.target.matches(selector)) {
        event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('active', 'typing');
      }
    }, true);
    var eventList = ["focusin", "blur", "focusout", "keyup", "change"];
    for (s_event of eventList) {
      document.addEventListener(s_event, function (event) {
        if (event.target.matches(selector)) {
          if (event.target.value == null || event.target.value == '') {
            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('filled');
          } else {
            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('filled');
          }
          if (event.type == "change" && event.target.tagName == 'SELECT') {
            if (event.target.value == "") {
              event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('error');
            } else {
              event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
              if (event.target.parentNode.querySelector('.mktoError').length > 0) {
                event.target.parentNode.querySelector('.mktoError').style.display = 'none';
              }
            }
          } else {
            if (event.target.classList.contains('mktoInvalid')) {
              var closestError = event.target.parentNode.querySelector('.mktoError');
              if (closestError && closestError.style.display == '') {
                event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('error');
              } else {
                event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
              }
            } else {
              event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
            }
          }
        }
      });
    }
      
    document.addEventListener('focusout', function (event) {
      document.querySelectorAll('body form .mktoFormCol .mktoFieldWrap.typing').forEach(function (elem) {
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
  