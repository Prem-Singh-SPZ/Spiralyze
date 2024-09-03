/* CUSTOM CODE */
let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
      clearInterval(bodyLoaded);
      if (!body.classList.contains('spz-6002')) {
        document.body.classList.add('spz-6002');
        var OStype = detectOS();
        if(OStype == 'MacOS' || OStype == 'iOS'){
            if (!document.body.classList.contains('spz-apple-os'))
            {
                document.body.classList.add('spz-apple-os');
            }
        }
        detect_browser();
        document.head.insertAdjacentHTML('beforeend', `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/2002/Triangle_SVG.svg" as="image">`);
        setTimeout(() => {
            if (!body.classList.contains('spz_1004')) {
                body.classList.add('spz_1004');
                waitForElm('.spz_1004 #zy-demo-form-section .zy-col-form form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
                    formModify();
                });
            }
        }, 500);
      }
    }
  })
  
  //Test code
  waitForElm('body .zy-squiggle-hero-container .zy-hero-line').then(function () {
    pageModify();
  });
  function pageModify() {
    if (document.querySelectorAll('.zy-squiggle-hero-container .zy-squiggle-hero-container-inner .spz-hero-section').length == 0) {
        document.querySelector('.zy-squiggle-hero-container .zy-squiggle-hero-container-inner').insertAdjacentHTML('beforeend', `<div class="spz-hero-section">
        <div class="spz-hero-row">
            <div class="spz-hero-content">
                <div class="hero-title-wrapper">
                <h6>Sales Cloud for Personal Lines</h6>
                <h1 class="h-title"><span>Streamline sales</span> from prospecting to renewals.</h1>
                <ul>
                    <li><img src="//res.cloudinary.com/spiralyze/image/upload/v1719923852/zywave/6002/frame_1171275207.svg" alt="Lead generation."><p><strong>Lead generation.</strong> Access our database of millions of insured and uninsured households. Get in-depth property details. Contact ideal clients. </p> </li>
                    <li><img src="//res.cloudinary.com/spiralyze/image/upload/v1719923855/zywave/6002/frame_1171275209.svg" alt="Quoting and proposals."><p><strong>Quoting and proposals.</strong> Automatically generate quotes across multiple carriers at once. Instantly compare. 200+ carriers for auto, home, renters, and more.</p></li>
                    <li><img src="//res.cloudinary.com/spiralyze/image/upload/v1720155335/zywave/6002/Frame_1171275207_png.png" alt="Management."><p><strong>Management.</strong> Centralize contact info. Automate new client account creation, reminders, email campaigns, and reporting. All from one platform.</p></li>
                </ul>
                </div>
                <div class="hero-email-cta">
                    <form class="form-spz" id="">
                        <div class="hero-get-demo">
                            <div class="spz-6002-email">
                                <input class="spz-email" name="email" type="email" placeholder="Email address">
                                <div class="mktoError">
                                <div class="mktoErrorMsg">Must be a valid email. <span class="mktoErrorDetail">example@yourdomain.com</span>
                                </div>
                                </div>
                            </div>
                        <button type="submit" class="get-demo-cta btn">Get a demo</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="hero-banner-img">
            <picture>
            <source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/6002/interface_desktop_2.webp">
            <source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/6002/interface_tablet_2.webp">
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/6002/interface_tablet_2.webp" alt="Streamline sales from prospecting to renewals." class="hb-img">
            </picture>
            </div>
        </div>
    </div>`);
  
      if(document.querySelector('.zy-header-bottom-demo a')){  
        document.querySelector('.zy-header-bottom-demo a').addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector('body').classList.add('modal-open');
        })
      }
  
      if(document.querySelector('.zy-mobile-nav-footer a.zy-button-green')){
        document.querySelector('.zy-mobile-nav-footer a.zy-button-green').addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector('body').classList.add('modal-open');
        })
      }
  
      if(document.querySelector('.zy-top-demo-container a')){
        document.querySelector('.zy-top-demo-container a').addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector('body').classList.add('modal-open');
        })
      }
  
      
  
      
  
    }
  
    waitForElm('#zy-demo-form-section .zy-marketo-form-container').then(function () {
      let closeHtml = `<button type="button" class="close-modal-cta">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <g opacity="0.5">
            <path d="M18 6.5L6 18.5" stroke="#0F2D52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M6 6.5L18 18.5" stroke="#0F2D52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
      </svg>
      </button>`;
  
      document.querySelector('.zy-demo-form-section-container .zy-marketo-form-container').insertAdjacentHTML('afterbegin', closeHtml);
      document.querySelector('.close-modal-cta').addEventListener('click', function () {
        document.querySelector('body').classList.remove('modal-open');
      });
  
    });
  
  }
  //on focus of .spz-email addClass to .hero-get-demo
  waitForElm('.spz-email').then(function (elm) {
    document.querySelectorAll('.spz-email').forEach(element => {
        element.addEventListener('focus', function (event) {
            element.closest('.hero-get-demo').classList.add('i-focused');
        });
  
        element.addEventListener('blur', function (event) {
            element.closest('.hero-get-demo').classList.remove('i-focused');
        });
  
        hover(element, "i-hover");
  
        // On enter key pressed in 'spz-email' field click on 'hero-get-demo-button'
        element.addEventListener('keyup', function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.querySelector('.get-demo-cta').click();
            }
  
            validateEmailField();
        });
    });
  
  
    // Validate email input present in '.hero-section-CTA' on '.get-demo-cta' click
    document.querySelector('.get-demo-cta').addEventListener('click', function (e) {
        e.preventDefault();        
    });
  });
  function hover(element, className) {
    element.addEventListener('mouseenter', e => element.closest('.hero-get-demo').classList.add(className))
    element.addEventListener('mouseleave', e => element.closest('.hero-get-demo').classList.remove(className))
  }
  // Validate email field
  function validateEmailField() {
    // Get email value
    const email = document.querySelector('.spz-hero-section .form-spz .spz-email');
    // Check if email is valid
    if (!validateEmail(email.value)) {
        // Add class 'input-error' to '.hero-get-demo' on error
        if(email.value != ''){
          email.closest('.hero-get-demo').classList.add('input-error');
        } else {
          email.closest('.hero-get-demo').classList.remove('input-error');  
        }
        return false;
    } else {
        email.closest('.hero-get-demo').classList.remove('input-error');
        return true;
    }
  }
  // Email validation to block email domains like gmail, yahoo, etc.\
  function validateEmail(email) {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (emailRegex.test(email)) {
        return true;
    }
    return false;
  }
  //All click events
  window.addEventListener("click", function (e) {
    if (e.target.classList.contains('get-demo-cta')) {
        let emailValue = document.querySelector('.spz-email').value;
               
        // document.querySelector('.zy-header-bottom-inner .zy-header-bottom-demo>a').click();       
        if(emailValue != ''){
           var emailInput = document.querySelector('.zy-demo-form-section-container .zy-marketo-form-container input[type=email]');
            emailInput.value = emailValue;
            emailInput.closest('.mktoFieldWrap').classList.add('filled');
            emailInput.focus();    
            var eventclick = new Event('blur');
            emailInput.dispatchEvent(eventclick);      
          console.log(emailInput.classList.contains('mktoInvalid'))
            if (emailInput.classList.contains('mktoInvalid')) {
              var closestError = emailInput.parentNode.querySelector('.mktoError');
              if (closestError && closestError.style.display == '') {
                emailInput.closest('.mktoFieldWrap').classList.add('error');
              } else {
                emailInput.closest('.mktoFieldWrap').classList.remove('error');
              }
            } else {
              emailInput.closest('.mktoFieldWrap').classList.remove('error');
            }
  
        }
  
        document.querySelector('body').classList.add('modal-open');
        
  
  
    }
  });
  //Add hidden fields
  function setHiddenFields() {
    if (document.querySelector('.mktoFormRow [name="cR02"]')) {
        document.querySelector('.mktoFormRow [name="cR02"]').setAttribute('value', '#6002_variant');
    }
  }
  waitForElm('.zy-demo-form-section-container .zy-marketo-form-container .mktoForm input[name="cR02"]').then(function (elm) {
    setHiddenFields();
  });
  
  function formModify() {
      
    // Add class in mktoFormRow using count
    var form_fields = document.querySelectorAll('.spz_1004 #zy-demo-form-section .zy-col-form form.mktoForm .mktoFormRow fieldset.mktoFormCol .mktoFormRow');
      for (var i = 0; i < form_fields.length; i++) {
      var dynamicClass = 'field-' + (i + 1);
      form_fields[i].classList.add(dynamicClass);
    }
    var formDiv = document.querySelector('.spz_1004 #zy-demo-form-section form.mktoForm');
    // Form Extra Titles
    if (formDiv && document.querySelectorAll('.form_title').length == 0) {
      formDiv.insertAdjacentHTML('beforebegin', `<h3 class="form_title">Get a demo</h3>`);
    }
    // form CTA Update
    var form_button = setInterval(() => {
      var textChng = document.querySelector('.spz_1004 #zy-demo-form-section form.mktoForm .mktoButtonRow .mktoButton');
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
    var email_field = document.querySelector('.spz_1004 .mktoForm .mktoFormRow.field-7');
    var job_field = document.querySelector('.spz_1004 .mktoForm .mktoFormRow.field-3');
    // var fname_field = document.querySelector('.spz_1004 .mktoFormRow.field-1');
    // var company_field = document.querySelector('.spz_1004 .mktoFormRow.field-4');
    job_field.before(email_field);
    // fname_field.before(company_field);
  
  
    var all_inputs = document.querySelectorAll('.spz_1004 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz_1004 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap select');
    all_inputs.forEach(function(element) {
      element.removeAttribute('placeholder');
    });
    // form state
    var selector = '.spz_1004 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz_1004 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap select';
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
  
    MktoForms2.getForm('1031').onSuccess(function(){
      document.querySelector('body').classList.remove('modal-open')
      // MktoForms2.getForm('1031').getFormElem()[0].reset();
    })
  
  
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
  function detectOS() {
  var userAgent = window.navigator.userAgent,
  platform = window.navigator.platform,
  macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
  windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
  iosPlatforms = ['iPhone', 'iPad', 'iPod'],
  os = null;
  if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'MacOS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
  } else if (/Android/.test(userAgent)) {
      os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
  }
  return os;
  }
  function detect_browser() {
  let browser_class = '';
  if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
      browser_class = 'spz-opera';
  } else if (navigator.userAgent.indexOf("Edg") != -1) {
      browser_class = 'spz-edge';
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
      browser_class = 'spz-chrome';
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
      browser_class = 'spz-safari';
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
      browser_class = 'spz-firefox';
  } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
  {
      browser_class = 'spz-ie';
  } else {
      browser_class = '';
  }
  document.querySelector('body').classList.add(browser_class);
  }
  