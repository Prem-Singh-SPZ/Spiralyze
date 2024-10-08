// Form Container (Parent Element)
const formCon = document.querySelector('#zy-demo-form-section .zy-marketo-form-container');
const imgUrl = '//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/1010/';
const cont = [
  {
    title: 'Agency',
    icon: imgUrl + 'property_1agency.svg',
    subStep: [
      {
        title: 'Marketing & Prospecting',
        icon: imgUrl + 'property_1sales_and_marketing.svg',
      },
      {
        title: 'Quoting, Rating & Proposals',
        icon: imgUrl + 'property_1plan_management.svg',
      },
      {
        title: 'Client Service & Management',
        icon: imgUrl + 'property_1client__portals.svg',
      },
      {
        title: 'Client Digital Experience',
        icon: imgUrl + 'property_1client_digital_experience.svg',
      },
      {
        title: 'Other / I’m Not Sure',
        icon: imgUrl + 'property_1other.svg',
      }
    ]
  },
  {
    title: 'Insurer',
    icon: imgUrl + 'property_1insurer.svg',
    subStep: [
      {
        title: 'Product Creation',
        icon: imgUrl + 'property_1post-bind_management.svg',
      },
      {
        title: 'Product Distribution',
        icon: imgUrl + 'property_1variant16.svg',
      },
      {
        title: 'RQBI',
        icon: imgUrl + 'property_1plan_management.svg',
      },
      {
        title: 'Loss and Data Analytics',
        icon: imgUrl + 'property_1loss_and_mod_analytics.svg',
      },
      {
        title: 'Policyholder / Client Engagement',
        icon: imgUrl + 'property_1client_engagement.svg',
      },
      {
        title: 'Other / I’m Not Sure',
        icon: imgUrl + 'property_1other.svg',
      }
    ]
  },
  {
    title: 'Service Provider',
    icon: imgUrl + 'property_1service_provider.svg',
    subStep: [
      {
        title: 'Healthcare',
        icon: imgUrl + 'property_1healthcare.svg',
      },
      {
        title: 'Payroll',
        icon: imgUrl + 'property_1payroll.svg',
      },
      {
        title: 'PEO',
        icon: imgUrl + 'property_1peo.svg',
      }
    ]
  },
];

let bodyLoaded = setInterval(function () {
  const body = document.querySelector('body');
  if (body) {
    clearInterval(bodyLoaded);

    preloadImages();

    if (!body.classList.contains('spz-1010-v1')) {
      body.classList.add('spz-1010-v1');
      createTest();
    }
  }
});

function createTest() {
  waitForElm('#zy-demo-form-section').then(function () {
    document.querySelector('#zy-demo-form-section .zy-col-text h3').textContent = "Increase revenue 15% by streamlining insurance sales and management";
    document.querySelector('#zy-demo-form-section .zy-col-text .zy-content').textContent = "Find qualified prospects. Send instant quotes. Let clients manage plans through an online portal. Generate benefit and plan resources.";
    //Form internal code
    waitForElm('#zy-demo-form-section .zy-col-form form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
      formModify();
    });
  });

  waitForElm('#zy-demo-form-section .zy-col-form form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
    formModify();

    // Create step 3 (Form element)
    var step3 = document.querySelector('#zy-demo-form-section form.mktoForm');
    // Wrap form in a new div and add class .step3-content to parent div
    step3.insertAdjacentHTML('afterend', `<div class="step3-content"></div>`);
    document.querySelector('#zy-demo-form-section .step3-content').append(step3);

    createStep1();

    //Add Hidden field value
    waitForElm('.zy-marketo-form-container .mktoForm input[name="cR01"]').then(function () {
      document.querySelector(`.zy-marketo-form-container .mktoForm input[name="cR01"]`).setAttribute("value", "1010_variant_v1");
    });
  });
}

function formModify() {
  var formDiv = document.querySelector('#zy-demo-form-section form.mktoForm');
  // Form Extra Titles
  if (formDiv && document.querySelectorAll('.form_title').length == 0) {
    formDiv.insertAdjacentHTML('beforebegin', `
      <div class="form_steps">
        <div class="fs-step step1 active"></div>
        <div class="fs-step step2"></div>
        <div class="fs-step step3"></div>
      </div>
      <h3 class="form_title">Get a Demo</h3>
    `);
  }

  // form CTA Update
  var form_button = setInterval(() => {
    var textChng = document.querySelector('#zy-demo-form-section form.mktoForm .mktoButtonRow .mktoButton');
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
  var form_fields = document.querySelectorAll('#zy-demo-form-section .zy-col-form form.mktoForm .mktoFormRow fieldset.mktoFormCol .mktoFormRow');
  form_fields.forEach(function (element) {
    if (element.querySelector('.mktoField:not([type="hidden"])')) {
      var label = element.querySelector('.mktoField:not([type="hidden"])').getAttribute('name').toLowerCase();
      element.classList.add(label);
    } else {
      element.classList.add('no-label');
    }
  });

  // Change Field Position
  var email_field = document.querySelector('.mktoForm .mktoFormRow.email');
  var lname_field = document.querySelector('.mktoFormRow.lastname');
  lname_field.after(email_field);

  var all_inputs = document.querySelectorAll('#zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap input, #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap select');
  all_inputs.forEach(function (element) {
    element.removeAttribute('placeholder');

    if (element.tagName == 'SELECT') {
      element.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('select-field');
    }
  });

  // form state
  var selector = '#zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap input, #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap select';
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
        if (event.type == "change") {
          if (event.target.value == "") {
            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('error');
          } else {
            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
            event.target.parentNode.querySelector('.mktoError').style.display = 'none';
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

  // Form Progressive Code Here...
  document.addEventListener('focusin', function (event) {
    if (event.target.matches(selector)) {
      var fname = document.querySelector('input#FirstName').value;
      var lname = document.querySelector('input#LastName').value;
      var email = document.querySelector('input#Email').value;
      var jobcategory = document.querySelector('select#websiteFormJobDescription').value;
      var i = 0;
      if (fname != '') {
        i = i + 1;
      }
      if (lname != '') {
        i = i + 1;
      }
      if (email != '') {
        i = i + 1;
      }
      if (jobcategory != '') {
        i = i + 1;
      }
      if (i >= 3 && (event.target.value == '' || event.target.value == null || event.target.value == 'undefined')) {
        document.body.classList.add('form-expand');
      }
    }
  });
}

// Create first step
function createStep1() {

  // Remove step1 if already exists
  if (formCon.querySelector('.step1-content')) {
    formCon.querySelector('.step1-content').remove();
  }

  // Open Step1
  formCon.classList.remove('step2-active', 'step3-active');

  // Remove step2 and step3 active class
  formCon.querySelector('.form_steps .step2').classList.remove('active');
  formCon.querySelector('.form_steps .step3').classList.remove('active');

  formCon.classList.add('step1-active');
  formCon.querySelector('.step3-content').insertAdjacentHTML(`beforebegin`, `
    <div class="step1-content">
      <h5 class="step-que">Which of the following best describes your Organization?</h5>
      <div class="step-list step-radio">
        ${cont.map((item, index) => {
    return `<div class="step1-item sl-item" data-index="${index}">
                  <img src="${item.icon}" alt="${item.title}">
                  <div class="sl-title">${item.title}</div>
                </div>`
  }).join('')}
      </div>
      <div class="step1-cta">
        <a href="javascript:void(0)" class="step1-next next-cta">Next</a>
      </div>
    </div>
  </div>`);

  // Check/uncheck items
  document.querySelectorAll('.step1-item').forEach((item) => {
    item.addEventListener('click', function () {
      // Uncheck all items
      document.querySelectorAll('.step1-item').forEach((item) => {
        item.classList.remove('checked');
      });

      // Check clicked item
      item.classList.add('checked');

      if (formCon.querySelector('.step1-content .sl-error-msg')) {
        formCon.querySelector('.step1-content .sl-error-msg').remove();
      }
    });
  });

  // Step1 next button click
  document.querySelector('.step1-next').addEventListener('click', function () {
    // Show error if no item selected
    if (formCon.querySelector('.step1-content .sl-item.checked')) {
      if (formCon.querySelector('.step1-content .sl-error-msg')) {
        formCon.querySelector('.step1-content .sl-error-msg').remove();
      }

      formCon.classList.remove('step1-active')
      formCon.querySelector('.form_steps .step2').classList.add('active');

      // Get checked item index
      const index = formCon.querySelector('.step1-item.checked').getAttribute('data-index');
      // Open step2
      createStep2(index);

    } else if (!formCon.querySelector('.step1-content .sl-error-msg')) {
      formCon.querySelector('.step1-cta').insertAdjacentHTML(`beforebegin`, `<div class="sl-error-msg">Please select an option.</div>`);
    }
  });
}

// Create second step
function createStep2(index) {
  // Remove step2 if already exists
  if (formCon.querySelector('.step2-content')) {
    formCon.querySelector('.step2-content').remove();
  }

  formCon.classList.add('step2-active');
  formCon.querySelector('.form_steps .step2').classList.add('active');

  formCon.querySelector('.step1-content').insertAdjacentHTML(`afterend`, `
    <div class="step2-content">
      <h5 class="step-que">What solution(s) are you interested in?</h5>
      <div class="step-list step-checkbox">
        ${cont[index].subStep.map((item, index) => {
    return `<div class="step2-item sl-item" data-index="${index}">
                      <img src="${item.icon}" alt="${item.title}">
                      <div class="sl-title">${item.title}</div>
                    </div>`
  }).join('')}
      </div>
      <div class="step2-cta">
        <a href="javascript:void(0)" class="step2-back back-cta">Back</a>
        <a href="javascript:void(0)" class="step2-next next-cta">Next</a>
      </div>
    </div>`);

  // Step2 back button click
  document.querySelector('.step2-back').addEventListener('click', function () {
    formCon.classList.remove('step2-active')
    formCon.querySelector('.form_steps .step2').classList.remove('active');

    // Open step1
    formCon.classList.add('step1-active');

    if (formCon.querySelector('.step2-content .sl-error-msg')) {
      formCon.querySelector('.step2-content .sl-error-msg').remove();
    }
  });

  // Check/uncheck items
  document.querySelectorAll('.step2-item').forEach((item) => {
    item.addEventListener('click', function () {
      // Check clicked item
      if (item.classList.contains('checked')) {
        item.classList.remove('checked');
      } else {

        item.classList.add('checked');

        // Remove error message if any
        if (formCon.querySelector('.step2-content .sl-error-msg')) {
          formCon.querySelector('.step2-content .sl-error-msg').remove();
        }
      }
    });
  });

  // Step2 next button click
  document.querySelector('.step2-next').addEventListener('click', function () {

    // Show error if no item selected
    if (formCon.querySelector('.step2-content .sl-item.checked')) {
      if (formCon.querySelector('.step2-content .sl-error-msg')) {
        formCon.querySelector('.step2-content .sl-error-msg').remove();
      }

      formCon.classList.remove('step2-active');

      // Open step3
      formCon.classList.add('step3-active');
      formCon.querySelector('.form_steps .step3').classList.add('active');

    } else if (!formCon.querySelector('.step2-content .sl-error-msg')) {
      formCon.querySelector('.step2-cta').insertAdjacentHTML(`beforebegin`, `<div class="sl-error-msg">Please select an option.</div>`);
    }
  });
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

function preloadImages() {
  document.querySelector('head').insertAdjacentHTML("afterbegin", `
      <link rel="preload" href="${imgUrl}radio-check.svg" as="image">
      <link rel="preload" href="${imgUrl}checkbox-un.svg" as="image">
      <link rel="preload" href="${imgUrl}checkbox-check.svg" as="image">
      <link rel="preload" href="${imgUrl}radio-hover.svg" as="image">
      <link rel="preload" href="${imgUrl}checkbox-hover.svg" as="image">
      `
  );
}