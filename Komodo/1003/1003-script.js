console.log("test running")
function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(function(){
  console.log("after dom load")
  if(!document.querySelector('.spz-1003')){
    document.querySelector('body').classList.add('spz-1003')
    const loadJS = (url, implementationCode, location)=>{
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
            ? new Event(eventType, {bubbles: true})
            : eventType;
        el.dispatchEvent(event);
      }
    }
    document.querySelector('.spz-1003 #popup_contact_us .wcs-pform').remove()
    document.querySelector('.spz-1003 #popup_connect .wcs-pform').remove()
    document.querySelector('.spz-1003 #popup_contact_us .wcs-col-12').innerHTML=`
    <div class="wcs-pform">
      <div class="wcs-popup-heading">
        <h2>Contact Us</h2>
      </div>
    </div>
    `
    document.querySelector('.spz-1003 #popup_contact_us .wcs-popup-heading').insertAdjacentHTML("afterend","<div id='new-form-wrapper'><div class='lds-dual-ring'></div></div>")
    /*
    for (let i=0;i<document.querySelectorAll('a[href="#popup_contact_us"]').length;i++){
      document.querySelectorAll('a[href="#popup_contact_us"]')[i].addEventListener("click",function(){
        document.querySelector('.spz-1003 #popup_contact_us .wcs-popup-heading h2').innerHTML="Contact Us";
        if(document.querySelector('.spz-1003 #new-form-wrapper .submitted-message')){
          document.querySelector('.spz-1003 #new-form-wrapper').innerHTML="<div class='lds-dual-ring'></div>"
          loadForm()
          if(document.querySelector('.spz-1003.step2')){
            document.querySelector('.spz-1003.step2').classList.remove("step2")
          }
        }
        let i=0;
        const CROInterval = setInterval(() => {
          if(document.querySelector('.spz-1003 #new-form-wrapper input[name="cro1"]')){
            clearInterval (CROInterval)
            //document.querySelector('.spz-1003 #new-form-wrapper input[name="cro1"]').value="CRO 1"
          }
          i++;
          if(i>6){
            clearInterval (CROInterval)
          }
        }, 500);
      })
    }
    */
    let buttonConnect =[];
    for (let i=0;i<document.querySelectorAll('a[href="#popup_connect"]').length;i++){
      buttonConnect[i]=document.querySelectorAll('a[href="#popup_connect"]')[i];
      /*
      document.querySelectorAll('a[href="#popup_connect"]')[i].addEventListener("click",function(){
        document.querySelector('.spz-1003 #popup_contact_us .wcs-popup-heading  h2').innerHTML="Connect With Us";
        if(document.querySelector('.spz-1003 #new-form-wrapper .submitted-message')){
          document.querySelector('.spz-1003 #new-form-wrapper').innerHTML="<div class='lds-dual-ring'></div>"
          loadForm()
          if(document.querySelector('.spz-1003.step2')){
            document.querySelector('.spz-1003.step2').classList.remove("step2")
          }
        }
        let i=0;
        const CROInterval = setInterval(() => {
          if(document.querySelector('.spz-1003 #new-form-wrapper input[name="cro1"]')){
            clearInterval (CROInterval)
            document.querySelector('.spz-1003 #new-form-wrapper input[name="cro1"]').value=""
          }
          i++;
          if(i>6){
            clearInterval (CROInterval)
          }
        }, 500);
      })
      */
    }
  
    for (let i=0;i<buttonConnect.length;i++){
      buttonConnect[i].setAttribute("href","#popup_contact_us")
      buttonConnect[i].classList.add("btn-connect");
    }
    document.addEventListener('click', function(e) {
        if(e.target.closest("a") && e.target.closest("a").getAttribute('href') === '#popup_contact_us'){
          document.querySelector('.spz-1003 #popup_contact_us .wcs-popup-heading h2').innerHTML="Contact Us";
          if(document.querySelector('.spz-1003 #new-form-wrapper .submitted-message')){
            document.querySelector('.spz-1003 #new-form-wrapper').innerHTML="<div class='lds-dual-ring'></div>"
            loadForm()
            if(document.querySelector('.spz-1003.step2')){
              document.querySelector('.spz-1003.step2').classList.remove("step2")
            }
          }
          let i=0;
          const CROInterval = setInterval(() => {
            if(document.querySelector('.spz-1003 #new-form-wrapper input[name="cro1"]')){
              clearInterval (CROInterval)
              document.querySelector('.spz-1003 #new-form-wrapper input[name="cro1"]').value="1003_variant"
            }
            i++;
            if(i>6){
              clearInterval (CROInterval)
            }
          }, 500);
        }
        if(e.target.closest("a") && e.target.closest("a").classList.contains('btn-connect')){
          document.querySelector('.spz-1003 #popup_contact_us .wcs-popup-heading  h2').innerHTML="Connect With Us";
          if(document.querySelector('.spz-1003 #new-form-wrapper .submitted-message')){
            document.querySelector('.spz-1003 #new-form-wrapper').innerHTML="<div class='lds-dual-ring'></div>"
            loadForm()
            if(document.querySelector('.spz-1003.step2')){
              document.querySelector('.spz-1003.step2').classList.remove("step2")
            }
          }
          let i=0;
          const CROInterval = setInterval(() => {
            if(document.querySelector('.spz-1003 #new-form-wrapper input[name="cro1"]')){
              clearInterval (CROInterval)
              document.querySelector('.spz-1003 #new-form-wrapper input[name="cro1"]').value=""
            }
            i++;
            if(i>6){
              clearInterval (CROInterval)
            }
          }, 500);
        }
    });
    function loadForm(){
      loadJS('//js.hsforms.net/forms/embed/v2.js', function(){
        try{
          hbspt.forms.create({
            region: "na1",
            portalId: "6374024",
            formId: "89116499-15d1-4cd0-b724-7a46e68cf8f0",
            target: '.spz-1003 #new-form-wrapper',
            isInsideFrame: true,
            inlineMessage: "Thanks for submitting the form.",
              onFormSubmitted: function($form) {
                console.log('Report conversion...');
                gtag_report_conversion();
              },
            onFormReady: function($form){
              if(document.querySelector('.spz-1003 #new-form-wrapper .hs_firstname')){
                document.querySelector('.spz-1003 #new-form-wrapper .hs_firstname').classList.add("width50","clear");
                document.querySelector('.spz-1003 #new-form-wrapper .hs_lastname').classList.add("width50","with-margin");
                document.querySelector('.spz-1003 #new-form-wrapper .hs_company').classList.add("width50","with-margin");
                document.querySelector('.spz-1003 #new-form-wrapper .hs_jobtitle').classList.add("width50","clear");
                document.querySelector('.spz-1003 #new-form-wrapper .hs_email').classList.add("width50","clear");
                document.querySelector('.spz-1003 #new-form-wrapper .hs_phone').classList.add("width50","with-margin");
                document.querySelector('.spz-1003 #new-form-wrapper .hs_how_did_you_hear_about_us_').classList.add("clear");
                document.querySelector('.spz-1003 #new-form-wrapper .hs_message').classList.add("clear");
                document.querySelector('.spz-1003 #new-form-wrapper .hs_consent_countries').classList.add("clear");
                document.querySelector('.spz-1003 #new-form-wrapper .hs-richtext').classList.add("clear","pp-parent");
                document.querySelector('.spz-1003 #new-form-wrapper .hs_submit').classList.add("clear","submit-parent");
                insertAfter(document.querySelector('.spz-1003 #new-form-wrapper .hs_email'),document.querySelector('.spz-1003 #new-form-wrapper .hs_lastname'));
                document.querySelector('.spz-1003 #new-form-wrapper .hs_email label span').innerHTML='Email';
                document.querySelector('.spz-1003 #new-form-wrapper .hs_company label span').innerHTML='Company';
                document.querySelector('.spz-1003 #new-form-wrapper .hs_phone label span').innerHTML='Phone (Optional)';
                document.querySelector('.spz-1003 #new-form-wrapper .hs_consent_countries label span').innerHTML='Country';
                document.querySelector('.spz-1003 #new-form-wrapper .hs_consent_countries select').value='United States'
                trigger(document.querySelector('.spz-1003 #new-form-wrapper .hs_consent_countries select'), 'change');
                trigger(document.querySelector('.spz-1003 #new-form-wrapper .hs_consent_countries select'), 'blur');
                document.querySelector('.spz-1003 #new-form-wrapper .hs_consent_countries select option:first-child').remove();                           
                document.querySelector('.spz-1003 #new-form-wrapper .hs_consent_countries').classList.add("hasValue");
                document.querySelector('.spz-1003 #new-form-wrapper .hs_submit input').value="SUBMIT";
                document.querySelector('.spz-1003 #new-form-wrapper .hs_consent_countries select').insertAdjacentHTML("afterend","<div class='arrow-select'></div>")
                insertAfter(document.querySelector('.spz-1003 #new-form-wrapper .hs_how_did_you_hear_about_us_'),document.querySelector('.spz-1003 #new-form-wrapper .hs_consent_countries'))
                insertAfter(document.querySelector('.spz-1003 #new-form-wrapper .hs_message'),document.querySelector('.spz-1003 #new-form-wrapper .hs_how_did_you_hear_about_us_'))
                document.querySelector('.spz-1003 #new-form-wrapper .hs_consent_countries').insertAdjacentHTML("afterend",`
                  <div class="new-option-wrapper desktop">
                    <div class="how-did">
                      <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 4.1665V15.8332" stroke="#68CCE8" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path>
                        <path d="M4.16602 10H15.8327" stroke="#68CCE8" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path>
                      </svg>
                      <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4.16602 10H15.8327" stroke="#68CCE8" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path>
                      </svg>
                      <span class="text">How did you hear about us? </span>
                    </div>
                    <div class="how-can">
                      <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 4.1665V15.8332" stroke="#68CCE8" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path>
                        <path d="M4.16602 10H15.8327" stroke="#68CCE8" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path>
                      </svg>
                      <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4.16602 10H15.8327" stroke="#68CCE8" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path>
                      </svg>
                      <span class="text">How can we help you? </span>
                    </div>
                  </div>
                `)
                document.querySelector('.spz-1003 #new-form-wrapper .hs_consent_countries').insertAdjacentHTML("afterend",`
                  <div class="how-did-wrapper mobile">
                    <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 4.1665V15.8332" stroke="#68CCE8" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path>
                      <path d="M4.16602 10H15.8327" stroke="#68CCE8" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path>
                    </svg>
                    <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4.16602 10H15.8327" stroke="#68CCE8" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path>
                    </svg>
                    <span class="text">How did you hear about us? </span>
                  </div>
                `)
                document.querySelector('.spz-1003 #new-form-wrapper .hs_how_did_you_hear_about_us_').insertAdjacentHTML("afterend",`
                  <div class="how-can-wrapper mobile">
                    <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 4.1665V15.8332" stroke="#68CCE8" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path>
                      <path d="M4.16602 10H15.8327" stroke="#68CCE8" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path>
                    </svg>
                    <svg class="minus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4.16602 10H15.8327" stroke="#68CCE8" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path>
                    </svg>
                    <span class="text">How can we help you? </span>
                  </div>
                `)
                function howDidClick(){
                  document.querySelector('.spz-1003 #new-form-wrapper .new-option-wrapper .how-did').classList.toggle("active")
                  document.querySelector('.spz-1003 #new-form-wrapper .how-did-wrapper').classList.toggle("active")
                  if(document.querySelector('.spz-1003 #new-form-wrapper .new-option-wrapper .how-can.active')){
                    document.querySelector('.spz-1003 #new-form-wrapper .new-option-wrapper .how-can').classList.toggle("active")
                    document.querySelector('.spz-1003 #new-form-wrapper .how-can-wrapper').classList.toggle("active")
                  }
                  if(document.querySelector('.spz-1003 #new-form-wrapper .new-option-wrapper .how-did.active')){
                    document.querySelector('.spz-1003 #new-form-wrapper').classList.add("how-did")
                    document.querySelector('.spz-1003 #new-form-wrapper').classList.remove("how-can")
                  } else {
                    document.querySelector('.spz-1003 #new-form-wrapper').classList.remove("how-did")
                  }
                }
                function howCanClick(){
                  document.querySelector('.spz-1003 #new-form-wrapper .new-option-wrapper .how-can').classList.toggle("active")
                  document.querySelector('.spz-1003 #new-form-wrapper .how-can-wrapper').classList.toggle("active")
                  if(document.querySelector('.spz-1003 #new-form-wrapper .new-option-wrapper .how-did.active')){
                    document.querySelector('.spz-1003 #new-form-wrapper .new-option-wrapper .how-did').classList.toggle("active")
                    document.querySelector('.spz-1003 #new-form-wrapper .how-did-wrapper').classList.toggle("active")
                  }
                  if(document.querySelector('.spz-1003 #new-form-wrapper .new-option-wrapper .how-can.active')){
                    document.querySelector('.spz-1003 #new-form-wrapper').classList.add("how-can")
                    document.querySelector('.spz-1003 #new-form-wrapper').classList.remove("how-did")
                  } else {
                    document.querySelector('.spz-1003 #new-form-wrapper').classList.remove("how-can")
                  }
                }
                document.querySelector('.spz-1003 #new-form-wrapper .new-option-wrapper').addEventListener("click",function(event){
                  if(event.target.closest('.spz-1003 #new-form-wrapper .new-option-wrapper .how-can')){
                    howCanClick()
                  }
                  if(event.target.closest('.spz-1003 #new-form-wrapper .new-option-wrapper .how-did')){
                    howDidClick()
                  }
                })
                
                document.querySelector('.spz-1003 #new-form-wrapper .how-can-wrapper').addEventListener("click",function(){
                  howCanClick()
                })
                document.querySelector('.spz-1003 #new-form-wrapper .how-did-wrapper').addEventListener("click",function(){
                  howDidClick()
                })
                const step1Checking = setInterval(function(){
                  if(document.querySelector('.spz-1003 #new-form-wrapper .hs_firstname input').value!="" &&
                  document.querySelector('.spz-1003 #new-form-wrapper .hs_lastname input').value!="" &&
                  document.querySelector('.spz-1003 #new-form-wrapper .hs_company input').value!="" &&
                  document.querySelector('.spz-1003 #new-form-wrapper .hs_email input').value!="") {
                    clearInterval(step1Checking);
                    document.querySelector('.spz-1003').classList.add("step2")
                  }
                },200)
              }
              else {
                if(document.querySelector('.spz-1003 #new-form-wrapper .hs_email')){ 
                  document.querySelector('.spz-1003 #new-form-wrapper .hs_email label span').innerHTML='Email';
                  document.querySelector('.spz-1003 #new-form-wrapper .hs_email').classList.add("clear");
                }
                if(document.querySelector('.spz-1003 #new-form-wrapper .hs_message')){
                  document.querySelector('.spz-1003 #new-form-wrapper .hs_message').classList.add("clear");
                }
                if(document.querySelector('.spz-1003 #new-form-wrapper .hs_phone')){
                  document.querySelector('.spz-1003 #new-form-wrapper .hs_phone label span').innerHTML='Phone (Optional)';
                }
                document.querySelector('.spz-1003 #new-form-wrapper .hs_submit input').value="SUBMIT";
              }
              var allInput = document.querySelectorAll('.spz-1003 #new-form-wrapper .hs-input');
              function errorState(item) {
                var i = 0;
                var errorInterval = setInterval(() => {
                    if(item.parentElement.parentElement.querySelector('.hs-error-msgs')) {
                        item.parentElement.parentElement.classList.add('hasError');
                    }
                    else {
                        item.parentElement.parentElement.classList.remove('hasError');
                    }
                    if(i == 100) {
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
              document.querySelector('.spz-1003 #new-form-wrapper .hs_submit input').addEventListener("click",function(){
                allInput.forEach(function (e) {          
                  errorState(e);          
                })
                if(document.querySelector('.spz-1003 #new-form-wrapper .hs_consent_countries select')){
                  trigger(document.querySelector('.spz-1003 #new-form-wrapper .hs_consent_countries select'), 'change');
                }
                let i=0;
                const submitInterval =setInterval(() => {
                  if(document.querySelector('.spz-1003 #new-form-wrapper .hs_submit input').value!="SUBMIT"){
                    clearInterval(submitInterval)
                    document.querySelector('.spz-1003 #new-form-wrapper .hs_submit input').value="SUBMIT";
                  }
                  i++;
                  if(i>80){
                    clearInterval(submitInterval)
                  }
                }, 5);
              })
              document.querySelector('.spz-1003 #new-form-wrapper .hs_message textarea').addEventListener("keypress",function (e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    document.querySelector('.spz-1003 #new-form-wrapper .hs_submit input').click()
                }
              });
              
            }
          })
        }
        catch (error) {
          console.error('Error creating HubSpot form:', error);
        }
      }, document.body);
    }
    loadForm()
  }
});