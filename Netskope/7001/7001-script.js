let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
      clearInterval(bodyLoaded);
  
      var intr = setInterval(function () {
        if (document.querySelector('.landing-page-v3__container-inner') && !document.querySelector('body').classList.contains('spz-7001')) {
          clearInterval(intr);  
          document.body.classList.add('spz-7001');
          code_inject();
        }      
      }, 100);
  
      function code_inject() {      
  
        var is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        var is_Edge = navigator.userAgent.indexOf("Edge") > -1;
        var is_chrome = !!window.chrome && !is_opera && !is_Edge;
        var is_explorer = typeof document !== 'undefined' && !!document.documentMode && !is_Edge;
        var is_firefox = typeof window.InstallTrigger !== 'undefined';
        var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (is_chrome) {
          document.body.classList.add('chrome');
        } else if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
          document.body.classList.add('safari');
        } else if (is_firefox) {
          document.body.classList.add('firefox');
        }
        
          // document.querySelector('.landing-page-v3__content-container .plus-orange').before(document.querySelector('.landing-page-v3__form-image'))        
          
          document.querySelector('.landing-page-v3__content-container .plus-orange').insertAdjacentHTML('beforebegin', '<div class="spz-gartner-logo"><img src="//res.cloudinary.com/spiralyze/image/upload/v1702652529/netskope/7001/grtner_wrapper_1.svg" alt="Gartner Logo"></div>')
          document.querySelector('.landing-page-v3__form-container .landing-page-v3__form-content').insertAdjacentHTML('beforebegin', '<div class="spz-form-title"><h3>Get <span>Gartner</span> report</h3></div>')
  
          if(window.location.pathname.indexOf('/lp-gartner-market-guide-for-single-vendor-sase-sem') > -1){
            var allPara = document.querySelectorAll('.landing-page-v3__content p')
            allPara.forEach(function(para){
                if(para.textContent == 'Hereâ€™s a few of the key findings and recommendations youâ€™ll find within this report:'){
                    para.classList.add('maxwidth-para')
                }
            })
          }
        
          
          const formInt = setInterval(() => {
            if (document.querySelector('form.mktoForm #FirstName')) {
              
              clearInterval(formInt);
              
              document.querySelector('#FirstName').closest('.mktoFormRow').classList.add('spz-field', 'spz-field-fname');
              document.querySelector('#LastName').closest('.mktoFormRow').classList.add('spz-field', 'spz-field-lname');
              document.querySelector('#Email').closest('.mktoFormRow').classList.add('spz-field', 'spz-field-email');
              document.querySelector('#Company').closest('.mktoFormRow').classList.add('spz-field', 'spz-field-company');
              document.querySelector('#Title').closest('.mktoFormRow').classList.add('spz-field', 'spz-field-title');
              document.querySelector('#Phone').closest('.mktoFormRow').classList.add('spz-field', 'spz-field-phone');
              document.querySelector('#Country').closest('.mktoFormRow').classList.add('spz-field', 'spz-field-country');
              document.querySelector('form.mktoForm .form-heading').closest('.mktoFormRow').classList.add('spz-hide');
              document.querySelector('.mktoPlaceholderConsent_to_Processing__c')?.closest('.mktoFormRow').classList.add('spz-field-privacy');
              document.querySelector('.mktoPlaceholderHtmlText_2022-06-22T14')?.closest('.mktoFormRow').classList.add('spz-field-netinfo');
              document.querySelector('.spz-field-email').before(document.querySelector('.spz-field-fname'))
              document.querySelector('.spz-field-email').before(document.querySelector('.spz-field-lname'))
  
              document.querySelector('#LblFirstName').textContent = 'First Name';
              document.querySelector('#LblLastName').textContent = 'Last Name';
              document.querySelector('#LblEmail').textContent = 'Business Email';
              document.querySelector('#LblCompany').textContent = 'Company';
              document.querySelector('#LblTitle').textContent = 'Job Title';
              document.querySelector('#LblPhone').textContent = 'Phone';
              document.querySelector('#LblCountry').textContent = 'Country';
              
              
  
              let allInputs = document.querySelectorAll('.spz-field .mktoField')            
              var eventfocus = new Event('focus');
              var eventblur = new Event('blur');
              allInputs.forEach(function(inp){              
                // var inp = document.querySelector('#LastName')
                inp.addEventListener('blur', function () {
                  inp.dispatchEvent(eventfocus);                            
                  // inp.dispatchEvent(eventblur);
                });
                
              })
  
  
  
              document.addEventListener("visibilitychange", (event) => {
                if(document.activeElement.tagName == 'A'){
                  document.activeElement.blur()
                }
              });
  
              
              setHiddenFields();
              
  
            }
          }, 100);
          waitForElm('form.mktoForm .mktoButtonRow button.mktoButton').then(function(){
            document.querySelector('form.mktoForm .mktoButtonRow button.mktoButton').textContent = 'Instant access';          
            setTimeout(() => {
              document.querySelector('form.mktoForm .mktoButtonRow button.mktoButton').textContent = 'Instant access';
            }, 100)
          })
  
          setTimeout(() => {
            document.querySelector('body').classList.add('variant-loaded');
          }, 4000)
       
      }
  
    }
  
  
  });
  
  function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
  }
  
  function setHiddenFields() {
    waitForElm('.mktoFormRow [name="utm_location__c"]').then(function () {
        const field_int = setInterval(function () {
            if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
                if (document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute('value') == "#7001_spz_variant") {
                    clearInterval(field_int);
                }
                document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#7001_spz_variant');
            }
        }, 100);
    });
  }