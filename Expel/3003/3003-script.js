const checkBoxSVG = `<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0325 0.407487C10.9627 0.337191 10.8798 0.281395 10.7884 0.243318C10.697 0.205242 10.599 0.185638 10.5 0.185638C10.401 0.185638 10.3029 0.205242 10.2115 0.243318C10.1201 0.281395 10.0372 0.337191 9.96746 0.407487L4.37996 6.00249L2.03246 3.64749C1.96007 3.57756 1.87462 3.52257 1.78097 3.48567C1.68733 3.44877 1.58734 3.43067 1.4867 3.43241C1.38607 3.43415 1.28676 3.4557 1.19445 3.49582C1.10214 3.53594 1.01864 3.59385 0.948712 3.66624C0.878783 3.73863 0.823798 3.82408 0.786895 3.91773C0.749992 4.01137 0.731894 4.11136 0.733635 4.212C0.735376 4.31263 0.756922 4.41194 0.797042 4.50425C0.837162 4.59656 0.895071 4.68006 0.967462 4.74999L3.84746 7.62999C3.91718 7.70028 4.00014 7.75608 4.09153 7.79416C4.18292 7.83223 4.28095 7.85184 4.37996 7.85184C4.47897 7.85184 4.577 7.83223 4.6684 7.79416C4.75979 7.75608 4.84274 7.70028 4.91246 7.62999L11.0325 1.50999C11.1086 1.43976 11.1693 1.35452 11.2109 1.25964C11.2525 1.16477 11.2739 1.06231 11.2739 0.958737C11.2739 0.855161 11.2525 0.752707 11.2109 0.657832C11.1693 0.562958 11.1086 0.477719 11.0325 0.407487Z" fill="#031263"/>`;

let bodyLoaded = setInterval(function () {
  const body = document.querySelector('body');
  if (body) {
    clearInterval(bodyLoaded);
    if (!body.classList.contains('spz-3003')) {
      body.classList.add('spz-3003');
      waitForElm('#hero-section').then(function () {
        document.querySelector('#hero-section .row.hero .col.content').insertAdjacentHTML('afterend', `
                    <div class="col spz-content">
                        <a href="https://expel.com/" class="site-logo-link" rel="home">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/expel_logosvg.svg" class="site-logo-img" alt="Expel">
                        </a>
                        <p class="eye-brow-text">Our Pricing</p>
                        <h1 class="section-heading">Expel pricing: flexibility, transparency, & ROI</h1>
                        <p class="s-copy">Expel offers flexible packaging options that meet you where you are with your security program. Whether you need us to augment your team, level-up your existing program, or unlock the ROI of your tech stack, we provide 24x7 MDR that works the way you need it to.</p>
                        <p class="s-copy">Either way, we integrate with your existing tech, apply our world-class detections and remediation actions, and provide 100% transparency into how our people and tech are building your cyber resilience.</p>
                    </div>`);

        // Form Reviews and Gartner
        document.querySelector('#hero-section .hero .spz-content + .col').insertAdjacentHTML('afterend', `
                    <div class="spz-form-baseline current_step_1">
                      <div class="form-block">
                        <span class="progress-bar"></span>
                        <div class="Questions-block">
                          <div class="form-step step_1">
                            <div class="step-header">
                              <h5 class="step-number">Step 1</h5>
                              <h2 class="step-heading">Get pricing</h2>
                              <p class="step-question">Which solutions are you interested in?</p>
                            </div>
                            <div class="step-content">
                              <div class="option-box">
                                <div class="option-item">
                                  <input type="checkbox" name="Cloud security" value="Cloud security">
                                  <div class="option-content">
                                    <div class="checkbox">
                                      ${checkBoxSVG}
                                    </div>
                                    <div class="option-icon">
                                      <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/layer_5.svg" class="default" alt="Cloud security">
                                      <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/layer_6.svg" class="hovered" alt="Cloud security">
                                    </div>
                                    <h4 class="Option-text">Cloud <br>security</h4>
                                  </div>
                                </div>
                                <div class="option-item">
                                  <input type="checkbox" name="SIEM detections optimization" value="SIEM detections optimization">
                                  <div class="option-content">
                                    <div class="checkbox">
                                     ${checkBoxSVG}
                                    </div>
                                    <div class="option-icon">
                                      <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/icon_custom_scripts.svg" class="default" alt="SIEM detections optimization">
                                      <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/icon_custom_scripts_4.svg" class="hovered" alt="SIEM detections optimization">
                                    </div>
                                    <h4 class="Option-text">SIEM detections <br>optimization</h4>
                                  </div>
                                </div>
                                <div class="option-item">
                                  <input type="checkbox" name="SecOps metrics improvement" value="SecOps metrics improvement">
                                  <div class="option-content">
                                    <div class="checkbox">
                                     ${checkBoxSVG}
                                    </div>
                                    <div class="option-icon">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/icon_custom_scripts_1.svg" class="default" alt="SecOps metrics improvement">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/icon_custom_scripts_7.svg" class="hovered" alt="SecOps metrics improvement">
                                    </div>
                                    <h4 class="Option-text">SecOps metrics <br>improvement</h4>
                                  </div>
                                </div>
                                <div class="option-item">
                                  <input type="checkbox" name="MITRE coverage uplevel" value="MITRE coverage uplevel">
                                  <div class="option-content">
                                    <div class="checkbox">
                                      ${checkBoxSVG}
                                    </div>
                                    <div class="option-icon">
                                      <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/icon_custom_scripts_3.svg" class="default" alt="MITRE coverage uplevel">
                                      <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/icon_custom_scripts_6.svg" class="hovered" alt="MITRE coverage uplevel">
                                    </div>
                                    <h4 class="Option-text">MITRE <br>coverage uplevel</h4>
                                  </div>
                                </div>
                              </div>
                              <div class="step-error"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/frame_6.svg" alt="Error Icon">Please select at least one option.</div>
                            </div>
                            <button class="step-button">Next<img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/4002/Icon-Right.svg" alt="Right Arrow"></button>
                          </div>
                          <div class="form-step step_2">
                            <div class="step-header">
                              <h5 class="step-number">Step 2</h5>
                              <h2 class="step-heading">Get pricing</h2>
                              <p class="step-question">How many employees do you have?</p>
                            </div>
                            <div class="step-content">
                              <div class="option-box">
                                <div class="radio-option-item">
                                  <input type="radio" name="employees" value="Less than 100">
                                  <div class="option-content">
                                    <div class="radio">
                                      <span class="radio-dot"></span>
                                    </div>
                                    <h4 class="Option-text"><100</h4>
                                  </div>
                                </div>
                                <div class="radio-option-item">
                                  <input type="radio" name="employees" value="100-999">
                                  <div class="option-content">
                                    <div class="radio">
                                      <span class="radio-dot"></span>
                                    </div>
                                    <h4 class="Option-text">100-999</h4>
                                  </div>
                                </div>
                                <div class="radio-option-item">
                                  <input type="radio" name="employees" value="1000-2999">
                                  <div class="option-content">
                                    <div class="radio">
                                      <span class="radio-dot"></span>
                                    </div>
                                    <h4 class="Option-text">1,000-2,999</h4>
                                  </div>
                                </div>
                                <div class="radio-option-item">
                                  <input type="radio" name="employees" value="3000-4999">
                                  <div class="option-content">
                                    <div class="radio">
                                      <span class="radio-dot"></span>
                                    </div>
                                    <h4 class="Option-text">3,000-4,999</h4>
                                  </div>
                                </div>
                                <div class="radio-option-item">
                                  <input type="radio" name="employees" value="5000-9999">
                                  <div class="option-content">
                                    <div class="radio">
                                      <span class="radio-dot"></span>
                                    </div>
                                    <h4 class="Option-text">5,000-9,999</h4>
                                  </div>
                                </div>
                                <div class="radio-option-item">
                                  <input type="radio" name="employees" value="More than 10000">
                                  <div class="option-content">
                                    <div class="radio">
                                      <span class="radio-dot"></span>
                                    </div>
                                    <h4 class="Option-text">10,000+</h4>
                                  </div>
                                </div>
                              </div>
                              <div class="step-error"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/frame_6.svg" alt="Error Icon">Please select an option.</div>
                            </div>
                            <button class="step-button">Next<img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/4002/Icon-Right.svg" alt="Right Arrow"></button>
                          </div>
                          <div class="form-step step_3">
                            <div class="step-header">
                              <h5 class="step-number">Step 3</h5>
                              <h2 class="step-heading">Get pricing</h2>
                            </div>
                            <div class="step-content"></div>
                          </div>
                        </div>
                        <p class="form-footer">This site is protected by reCAPTCHA  and the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.</p>
                      </div>
                    </div>`);

        document.querySelector('#hero-section .row.hero').insertAdjacentHTML('afterend', `
                    <div class="hero-client-logos">
                        <div class="container">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275521.svg" alt="Visa" class="client-logo" />
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275522.svg" alt="Uber" class="client-logo" />
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275523.svg" alt="Markel" class="client-logo" />
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275524.svg" alt="Carter's" class="client-logo" />
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275525.svg" alt="Doordash" class="client-logo" />
                        </div>  
                    </div>`);

        //Form internal code
        waitForElm('.spz-3003  form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
          document.querySelector('.spz-3003 .spz-form-baseline .Questions-block .form-step.step_3 .step-content').appendChild(document.querySelector('.spz-3003 #hero-section  form.mktoForm'));
          formModify();
        });

        const checkboxes = document.querySelectorAll('.spz-3003 .spz-form-baseline .Questions-block .step-content input');
        checkboxes.forEach(function (checkbox) {
          checkbox.addEventListener('click', function () {
            const stepContent = checkbox.closest('.step-content');
            if (stepContent && stepContent.classList.contains('error')) {
              stepContent.classList.remove('error', 'show-error');
            }

            if (checkbox.type === 'radio') {
              if (checkbox.value === 'Less than 100' || checkbox.value === '100-999' || checkbox.value === '1000-2999') {
                document.querySelector('.spz-3003 .spz-form-baseline #Company_Size__c').value = 'less than 3001 employees';
              } else {
                document.querySelector('.spz-3003 .spz-form-baseline #Company_Size__c').value = '3001+ employees';
              }
            }
          });
        });

        document.querySelectorAll('.spz-3003 .spz-form-baseline .Questions-block .step-button').forEach(button => {
          button.addEventListener('click', function () {
            const formBaseline = document.querySelector('.spz-3003 .spz-form-baseline');
            const logoSection = document.querySelector('.spz-3003 .hero-client-logos');
            const currentStep = this.closest('.form-step');
            const stepContent = this.closest('.form-step').querySelector('.step-content');
            const checkboxes = stepContent.querySelectorAll('input');
            const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

            if (isChecked) {
              var step = false;
              if (document.querySelector('.step_1 input[type="checkbox"]:checked') !== null) {
                step = true;
              } else if (document.querySelector('.step_1 input[name="Cloud security"]:checked') !== null) {
                step = true;
              }
              if (step) {
                const nextStep = currentStep.nextElementSibling;
                if (nextStep && nextStep.classList.contains('form-step')) {
                  currentStep.style.display = 'none';
                  nextStep.style.display = 'block';

                  // Update the class of the current step number on spz-form-baseline
                  const currentStepNumber = nextStep.className.match(/step_(\d+)/)[1];
                  formBaseline.className = formBaseline.className.replace(/current_step_\d+/, '');
                  logoSection.className = logoSection.className.replace(/current_step_\d+/, '');
                  formBaseline.classList.add(`current_step_${currentStepNumber}`);
                  logoSection.classList.add(`current_step_${currentStepNumber}`);
                }

              }
            } else {
              stepContent.classList.add('error', 'show-error');
              // setTimeout(() => {
              //     stepContent.classList.remove('show-error');
              // }, 3000);
            }
          });
        });

        // Initial step visibility and setting initial class
        document.querySelectorAll('.spz-3003 .spz-form-baseline .Questions-block .form-step').forEach((step, index) => {
          const formBaseline = document.querySelector('.spz-3003 .spz-form-baseline');
          if (index === 0) {
            step.style.display = 'block';
          } else {
            step.style.display = 'none';
          }
        });

        //second section updates
        document.querySelectorAll('#stats-2-col .col.stats .single-stat')[0].innerHTML = `<div class="gartner-wrapper ss-card"><div class="logo-img"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/g2_crowd_7.svg" alt="Gartner Insights"></div><div class="google-rating"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/stars_2.svg" alt="Rating"></div>`;

        document.querySelectorAll('#stats-2-col .col.stats .single-stat')[1].innerHTML = `<div class="g2-wrapper ss-card"><div class="logo-img"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/g2_crowd_4.svg" alt="G2 Reviews"></div><div class="google-rating"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/stars_2.svg" alt="Rating"></div>
                <picture>`;
        document.querySelectorAll('#stats-2-col .col.stats .single-stat')[2].innerHTML = `<picture>
                    <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/nps_75.svg">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/nps-mobile.svg" alt="Customer NPS 75">
                    </picture>`;
      });
    }
  }
});

function formModify() {
  // Unwrap all child elemnts of mktoFormRow
  var mktoForm = document.querySelector('.mktoForm');
  var mktoFormRows = document.querySelectorAll('.mktoFormRow');
  mktoFormRows.forEach(function (row) {
    while (row.firstChild) {
      mktoForm.insertBefore(row.firstChild, row);
    }
    row.remove();
  });

  // Add Unique class to each field in form as per the label name
  var form_fields = document.querySelectorAll('#hero-section .hero  form.mktoForm .mktoFormCol');
  form_fields.forEach(function (el) {
    if (el.querySelector('.mktoField:not([type="hidden"])')) {
      var label = el.querySelector('.mktoField:not([type="hidden"])').getAttribute('name').toLowerCase();
      el.classList.add(label);
    } else {
      el.classList.add('no-label');

      // Add class to privacy policy disclaimer
      if (el.querySelector('.mktoHtmlText') && el.querySelector('.mktoHtmlText').textContent.includes('Expel Online Privacy Policy')) {
        el.classList.add('spz-privacy-policy');
      }
    }
  });

  // Updating Form Labels
  document.querySelector('#LblEmail').textContent = "Business Email";
  document.querySelector('#LblCompany_Size__c').textContent = "Company Size";
  document.querySelector('#Company_Size__c').options[0].textContent = 'Select';
  document.querySelector('#LblPerson_Country__c').textContent = "Country";
  document.querySelector('#LblpersonNotestoAppend').textContent = "What would you like to see?";


  // Change Field Position
  var phone_field = document.querySelector('.mktoForm .phone');
  var lname_field = document.querySelector('.mktoForm .lastname');
  lname_field.after(phone_field);

  var disclaimer_field = document.querySelector('.mktoForm .mktoCaptchaDisclaimer');
  var form_button = document.querySelector('.mktoForm .mktoButtonRow');
  form_button.after(disclaimer_field);

  var isPartner_field = document.querySelector('.mktoForm .ispartner');
  var privacy_button = document.querySelector('.mktoForm .spz-privacy-policy');
  privacy_button.after(isPartner_field);

  // waitForElm('#hero-section form.mktoForm .mktoFormCol.ispartner').then(function (elm) {
  //     document.querySelector('#hero-section form.mktoForm .mktoFormCol.spz-privacy-policy').after(elm);
  // });

  // + Additional comments
  document.querySelector('.mktoForm .personnotestoappend .mktoFieldWrap').insertAdjacentHTML('beforebegin', `<a href="javascript:void(0);" class="comment-toggler">+ Additional comments</a>`);
  var comment_toggler = document.querySelector(".mktoForm .personnotestoappend .comment-toggler");
  comment_toggler.addEventListener("click", (event) => {
    comment_toggler.classList.add("show-field");
    document.querySelector('.mktoForm .personnotestoappend .mktoField').focus();
  });


  focusFields();

  // Disable auto-fill for all input, select and textarea
  var inputFields = document.querySelectorAll('input, select, textarea');
  inputFields.forEach(function (field) {
    field.setAttribute('autocomplete', 'nofill');
  });


  document.querySelector('.spz-3003 #hero-section form.mktoForm .mktoButtonRow .mktoButton').addEventListener('click', function () {
    waitForElm('.spz-3003 #hero-section .hero  form.mktoForm .mktoError').then(function (elm) {
      if (elm.parentNode.querySelector('#ValidMsgEmail')) {
        const targetNode = elm.parentNode;
        const config = { attributes: true, childList: true, subtree: true };
        const callback = (mutationList, observer) => {
          for (const mutation of mutationList) {
            if (mutation.type === "childList") {
              if (elm.parentNode === null && elm.style.display != 'none') {
                targetNode.classList.add('error');
              } else {
                elm.parentNode.classList.add('error');
              }
              observer.disconnect();
            } else if (mutation.type === "attributes") {
              if (elm.parentNode === null) {
                targetNode.classList.add('error');
              } else {
                elm.parentNode.classList.add('error');
              }
              observer.disconnect();
            }
          }
        };
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
      } else {
        let counterA = 0;
        const intervalIdA = setInterval(() => {
          if (document.querySelector('.spz-3003 #hero-section .hero  form.mktoForm .mktoError #ValidMsgEmail') !== null) {
            document.querySelector('.spz-3003 #hero-section .hero  form.mktoForm .mktoError #ValidMsgEmail').parentNode.parentNode.classList.add('error');
          }
          counterA++;
          if (counterA >= 10) {
            clearInterval(intervalIdA);
          }
        }, 500);
      }
    });
  });
}

// On input focus add class on closest parent field class
function focusFields() {
  document.querySelectorAll(`#hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
    el.addEventListener('focus', function () {
      el.closest('.mktoFieldWrap').classList.add('active', 'typing');
      checkError(el);
    });
    el.addEventListener('blur', function () {
      el.closest('.mktoFieldWrap').classList.remove('active', 'typing');
      checkError(el);
    });

    // add event listeners to the input element
    el.addEventListener('keypress', () => {
      checkError(el);
    });

    el.addEventListener('change', () => {
      checkError(el);
    });

    el.addEventListener('keydown', () => {
      checkError(el);
    });

    el.addEventListener('keyup', () => {
      checkError(el);
    });
  });
}

// Function to add .field-error class on closest parent .field class if .error is exist on input
function checkError(elem) {
  let timeBuffer = setInterval(() => {
    if (elem.closest('.mktoFieldWrap').querySelector('.mktoError') && elem.closest('.mktoFieldWrap').querySelector('.mktoError').style.display != 'none' && elem.closest('.mktoFieldWrap').querySelector('.mktoInvalid')) {
      elem.closest('.mktoFieldWrap').classList.add('error');
    } else {
      elem.closest('.mktoFieldWrap').classList.remove('error');
    }
    if (elem && elem.value && (elem.value != '')) {
      elem.closest('.mktoFieldWrap').classList.add('filled');
    } else {
      elem.closest('.mktoFieldWrap').classList.remove('filled');
    }

    if (document.querySelectorAll('.mktoFormCol[data-zi-field-enriched="false"] .mktoField:not([type="hidden"])').length % 2 != 0) {
      let lastField = document.querySelectorAll('.mktoFormCol[data-zi-field-enriched="false"] .mktoField:not([type="hidden"]').length - 1;
      document.querySelectorAll('.mktoFormCol[data-zi-field-enriched="false"]')[lastField].closest('.mktoFormCol').classList.add('full-width');
    }
    else {
      document.querySelectorAll('.mktoFormCol.mktoFormCol.full-width').forEach(function (el) {
        el.classList.remove('full-width');
      });
    }
  }, 100);

  setTimeout(() => {
    clearInterval(timeBuffer);
  }, 1000);

  waitForElm('#hero-section form.mktoForm .mktoFormCol .mktoField[data-zi-input-enriched="false"]').then(function (elm) {
    document.body.classList.add('form-expand');
  });

  if (elem.name == 'Person_Country__c') {
    waitForElm('#hero-section form.mktoForm .mktoFormCol[data-wrapper-for="mktoCheckbox_27626_0 Privacy_Compliance_Explicit_Opt_In__c"]').then(function (elm) {
      document.querySelector('#hero-section form.mktoForm .mktoFormCol.spz-privacy-policy').after(elm);
    });
  }
}

// Do not touch below hidden field code for any Experiment (Set Hidden Filed Value)
function hiddenValue(currentExperimentName, currentExperimentValue) {
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  var ExistingExperimentName = getCookie('ExperimentName');
  var ExistingExperimentValue = getCookie('ExperimentValue');

  if (!ExistingExperimentName) {

    setCookie('ExperimentName', currentExperimentName, 1);
    setCookie('ExperimentValue', currentExperimentValue, 1);

  } else if (ExistingExperimentName && !ExistingExperimentName.includes(currentExperimentName)) {

    setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
    setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

  } else if (ExistingExperimentName && ExistingExperimentName.includes(currentExperimentName)) {

    var existingNames = ExistingExperimentName.split(',');
    var existingValues = ExistingExperimentValue.split(',');

    var index = existingNames.indexOf(currentExperimentName);
    existingValues[index] = currentExperimentValue;

    setCookie('ExperimentName', existingNames.join(','), 1);
    setCookie('ExperimentValue', existingValues.join(','), 1);
  }
}
// Do not touch below hidden field code for any Experiment over (Set Hidden Filed Value)
// Use this and change value according to the experiment
hiddenValue('#3003 | Expel | Pricing | Qualifying Questions', 'variant_#3003');

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