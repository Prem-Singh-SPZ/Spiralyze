function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(function(){
  if(!document.querySelector('.spz-1012')){
    document.querySelector('body').classList.add('spz-1012')
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
    document.querySelector('.spz-1012 #popup_contact_us .wcs-pform').remove()
    document.querySelector('.spz-1012 #popup_connect .wcs-pform').remove()
    document.querySelector('.spz-1012 #popup_contact_us .wcs-col-12').innerHTML=`
    <div class="wcs-pform">
      <div class="wcs-popup-heading">
        <h2>Contact Us</h2>
      </div>
    </div>
     <div class="spz-social-proof">
      <div class="sp-logo"><img src="//res.cloudinary.com/spiralyze/image/upload/v1722503581/komodohealth/1012/karyopharm_svg.svg" alt="Karyopharm"></div>
      <div class="sp-logo"><img src="//res.cloudinary.com/spiralyze/image/upload/v1722503581/komodohealth/1012/pfizer_svg.svg" alt="Pfizer"></div>
      <div class="sp-logo"><img src="//res.cloudinary.com/spiralyze/image/upload/v1722503581/komodohealth/1012/novartis_svg.svg" alt="Novartis"></div>
      <div class="sp-logo"><img src="//res.cloudinary.com/spiralyze/image/upload/v1722503581/komodohealth/1012/kantar_svg.svg" alt="Kantar"></div>
      <div class="sp-logo"><img src="//res.cloudinary.com/spiralyze/image/upload/v1722503581/komodohealth/1012/medtech.svg" alt="Medtech"></div>
    </div>
    `

    document.querySelector('.spz-1012 #popup_contact_us .wcs-popup-heading').insertAdjacentHTML("afterend","<div id='contact-form-1012'><div class='lds-dual-ring'></div></div>")

    let buttonConnect =[];
    for (let i=0;i<document.querySelectorAll('a[href="#popup_connect"]').length;i++){
      buttonConnect[i]=document.querySelectorAll('a[href="#popup_connect"]')[i];
    }
  
    for (let i=0;i<buttonConnect.length;i++){
      buttonConnect[i].setAttribute("href","#popup_contact_us")
      buttonConnect[i].classList.add("btn-connect");
    }
    document.addEventListener('click', function(e) {
        if(e.target.closest("a") && e.target.closest("a").getAttribute('href') === '#popup_contact_us'){
          if(document.querySelector('.spz-1012 #contact-form-1012 .submitted-message')){
            document.querySelector('.spz-1012 #contact-form-1012').innerHTML="<div class='lds-dual-ring'></div>"
            loadForm()
            if(document.querySelector('.spz-1012.step2')){
              document.querySelector('.spz-1012.step2').classList.remove("step2")
            }
          }
          let i=0;
          const CROInterval = setInterval(() => {
            if(document.querySelector('.spz-1012 #contact-form-1012 input[name="cro1"]')){
              clearInterval (CROInterval)
              document.querySelector('.spz-1012 #contact-form-1012 input[name="cro1"]').value="1012_variant"
            }
            i++;
            if(i>6){
              clearInterval (CROInterval)
            }
          }, 500);
        }
        if(e.target.closest("a") && e.target.closest("a").classList.contains('btn-connect')){
          document.querySelector('.spz-1012 #popup_contact_us .wcs-popup-heading  h2').innerHTML="Connect With Us";
          if(document.querySelector('.spz-1012 #contact-form-1012 .submitted-message')){
            document.querySelector('.spz-1012 #contact-form-1012').innerHTML="<div class='lds-dual-ring'></div>"
            loadForm()
            if(document.querySelector('.spz-1012.step2')){
              document.querySelector('.spz-1012.step2').classList.remove("step2")
            }
          }
          let i=0;
          const CROInterval = setInterval(() => {
            if(document.querySelector('.spz-1012 #contact-form-1012 input[name="cro1"]')){
              clearInterval (CROInterval)
              document.querySelector('.spz-1012 #contact-form-1012 input[name="cro1"]').value=""
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
            target: '.spz-1012 #contact-form-1012',
            isInsideFrame: true,
            submitText: "SUBMIT",
            inlineMessage: "Thanks for submitting the form.",
              onFormSubmitted: function($form) {
                console.log('Report conversion...');
                gtag_report_conversion();
              },
            onFormReady: function($form){
              if(document.querySelector('.spz-1012 #contact-form-1012 .hs_firstname')){
                document.querySelector('.spz-1012 #contact-form-1012 .hs_firstname').classList.add("width50","clear");
                document.querySelector('.spz-1012 #contact-form-1012 .hs_lastname').classList.add("width50","with-margin");
                document.querySelector('.spz-1012 #contact-form-1012 .hs_company').closest('fieldset').classList.add("width-50","with-margin");
                document.querySelector('.spz-1012 #contact-form-1012 .hs_jobtitle').closest('fieldset').classList.add("width-50", "clear");
                document.querySelector('.spz-1012 #contact-form-1012 .hs_email').closest('fieldset').classList.add("width-50","clear");
                document.querySelector('.spz-1012 #contact-form-1012 .hs_phone').closest('fieldset').classList.add("width-50", "with-margin");
                document.querySelector('.spz-1012 #contact-form-1012 .hs_message').closest('fieldset').classList.add("width-100");
                // document.querySelector('.spz-1012 #contact-form-1012 .hs_how_did_you_hear_about_us_').classList.add("clear");
                document.querySelector('.spz-1012 #contact-form-1012 .hs_message').classList.add("clear");
                document.querySelector('.spz-1012 #contact-form-1012 .hs_consent_countries').classList.add("clear");
                document.querySelector('.spz-1012 #contact-form-1012 .hs-richtext').classList.add("clear","pp-parent");
                document.querySelector('.spz-1012 #contact-form-1012 .hs_submit').classList.add("clear","submit-parent");
                insertAfter(document.querySelector('.spz-1012 #contact-form-1012 .hs_email').closest('fieldset'),document.querySelector('.spz-1012 #contact-form-1012 .hs_lastname').closest('fieldset'));
                document.querySelector('.spz-1012 #contact-form-1012 .hs_email label span').innerHTML='Email';
                document.querySelector('.spz-1012 #contact-form-1012 .hs_company label span').innerHTML='Company';
                document.querySelector('.spz-1012 #contact-form-1012 .hs_phone label span').innerHTML='Phone';
                document.querySelector('.spz-1012 #contact-form-1012 .hs_consent_countries label span').innerHTML='Country';
                document.querySelector('.spz-1012 #contact-form-1012 .hs_consent_countries select').value='United States'
                trigger(document.querySelector('.spz-1012 #contact-form-1012 .hs_consent_countries select'), 'change');
                trigger(document.querySelector('.spz-1012 #contact-form-1012 .hs_consent_countries select'), 'blur');
                document.querySelector('.spz-1012 #contact-form-1012 .hs_consent_countries select option:first-child').remove();                           
                document.querySelector('.spz-1012 #contact-form-1012 .hs_consent_countries').classList.add("hasValue");
                document.querySelector('.spz-1012 #contact-form-1012 .hs_submit input').value="SUBMIT";
                document.querySelector('.spz-1012 #contact-form-1012 .hs_consent_countries select').insertAdjacentHTML("afterend","<div class='arrow-select'></div>")
                // insertAfter(document.querySelector('.spz-1012 #contact-form-1012 .hs_how_did_you_hear_about_us_'),document.querySelector('.spz-1012 #contact-form-1012 .hs_consent_countries'))
                // insertAfter(document.querySelector('.spz-1012 #contact-form-1012 .hs_message'),document.querySelector('.spz-1012 #contact-form-1012 .hs_how_did_you_hear_about_us_'))
              
 
                const step1Checking = setInterval(function(){
                  if(document.querySelector('.spz-1012 #contact-form-1012 .hs_firstname input').value!="" &&
                  document.querySelector('.spz-1012 #contact-form-1012 .hs_lastname input').value!="" &&
                  document.querySelector('.spz-1012 #contact-form-1012 .hs_company input').value!="" &&
                  document.querySelector('.spz-1012 #contact-form-1012 .hs_email input').value!="") {
                    clearInterval(step1Checking);
                    document.querySelector('.spz-1012').classList.add("step2")
                  }
                },200)
              }
              else {
                if(document.querySelector('.spz-1012 #contact-form-1012 .hs_email')){ 
                  document.querySelector('.spz-1012 #contact-form-1012 .hs_email label span').innerHTML='Email';
                  document.querySelector('.spz-1012 #contact-form-1012 .hs_email').classList.add("clear");
                }
                if(document.querySelector('.spz-1012 #contact-form-1012 .hs_message')){
                  document.querySelector('.spz-1012 #contact-form-1012 .hs_message').classList.add("clear");
                }
                if(document.querySelector('.spz-1012 #contact-form-1012 .hs_phone')){
                  document.querySelector('.spz-1012 #contact-form-1012 .hs_phone label span').innerHTML='Phone (Optional)';
                }
                document.querySelector('.spz-1012 #contact-form-1012 .hs_submit input').value="SUBMIT";
              }
              var allInput = document.querySelectorAll('.spz-1012 #contact-form-1012 .hs-input');
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
              document.querySelector('.spz-1012 #contact-form-1012 .hs_submit input').addEventListener("click",function(){
                allInput.forEach(function (e) {          
                  errorState(e);          
                })
                if(document.querySelector('.spz-1012 #contact-form-1012 .hs_consent_countries select')){
                  trigger(document.querySelector('.spz-1012 #contact-form-1012 .hs_consent_countries select'), 'change');
                }
                let i=0;
                const submitInterval =setInterval(() => {
                  if(document.querySelector('.spz-1012 #contact-form-1012 .hs_submit input').value!="SUBMIT"){
                    clearInterval(submitInterval)
                    document.querySelector('.spz-1012 #contact-form-1012 .hs_submit input').value="SUBMIT";
                  }
                  i++;
                  if(i>80){
                    clearInterval(submitInterval)
                  }
                }, 5);
              })
              document.querySelector('.spz-1012 #contact-form-1012 .hs_message textarea').addEventListener("keypress",function (e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    document.querySelector('.spz-1012 #contact-form-1012 .hs_submit input').click()
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