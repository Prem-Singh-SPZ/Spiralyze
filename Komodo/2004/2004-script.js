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
if(!document.querySelector('.spz-2004')){
  document.querySelector('body').classList.add('spz-2004')
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
  document.querySelector('.spz-2004 #popup_request_a_demo .wcs-pform').remove()
  document.querySelector('.spz-2004 #popup_request_a_demo .wcs-col-12').innerHTML=`
  <div class="wcs-pform">
    <div class="wcs-popup-heading">
      <h2>Get a demo</h2>
      <div class="review-wrapper">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1702395225/komodohealth/2004/frame_5597.svg" alt="Star Review" width="116" height="20"/>
        <div class="text"><span class="black">4.8</span> (678 reviews)</div>
      </div>
    </div>
  </div>
  `
  if(document.querySelector('#tmpwidget_1665168603900')){
    document.querySelector('a[href="#tmpwidget_1665168603900"]').setAttribute("href","#popup_request_a_demo")
  }
  if(document.querySelector('a#request-demo')){
    for(let i=0;i<document.querySelectorAll('a#request-demo').length;i++){
      if(document.querySelectorAll('a#request-demo')[i].getAttribute("href")=="#popup_contact_us" && document.querySelectorAll('a#request-demo')[i].innerHTML.trim()=='Request Demo'){
        document.querySelectorAll('a#request-demo')[i].setAttribute("href","#popup_request_a_demo")
      }
    }
  }
  document.addEventListener('click', function(e) {
      if(e.target.closest("a") && e.target.closest("a").getAttribute('href') === '#popup_request_a_demo'){
        if(document.querySelector('.spz-2004 #new-formDemo-wrapper .submitted-message')){
          document.querySelector('.spz-2004 #new-formDemo-wrapper').innerHTML="<div class='lds-dual-ring'></div>"
          /*
          if(document.querySelector('.spz-2004 #popup_request_a_demo .step1-wrapper .error-message.show')){
            document.querySelector('.spz-2004 #popup_request_a_demo .step1-wrapper .error-message.show').classList.remove("show")  
          }
          if(document.querySelector('.spz-2004 #popup_request_a_demo .step2-wrapper .error-message.show')){
            document.querySelector('.spz-2004 #popup_request_a_demo .step2-wrapper .error-message.show').classList.remove("show")  
          }
          if(document.querySelector('.spz-2004 #popup_request_a_demo .step1-wrapper .selected')){
            document.querySelector('.spz-2004 #popup_request_a_demo .step1-wrapper .selected').classList.remove('selected')
          }
          if(document.querySelector('.spz-2004 #popup_request_a_demo .step2-wrapper .selected')){
            document.querySelector('.spz-2004 #popup_request_a_demo .step2-wrapper .selected').classList.remove('selected')
          }
          document.querySelector('.spz-2004 #popup_request_a_demo .step1-wrapper').classList.remove("hide");
          document.querySelector('.spz-2004 #new-formDemo-wrapper').classList.remove("show")
          */
          loadDemoForm();
          if(document.querySelector('.spz-2004 #new-formDemo-wrapper.step2')){
            document.querySelector('.spz-2004 #new-formDemo-wrapper.step2').classList.remove("step2")
          }
        }
        let i=0;
        const CROInterval = setInterval(() => {
          if(document.querySelector('.spz-2004 #new-formDemo-wrapper input[name="cro1"]')){
            clearInterval (CROInterval)
            document.querySelector('.spz-2004 #new-formDemo-wrapper input[name="cro1"]').value="2004_variant"
          }
          i++;
          if(i>6){
            clearInterval (CROInterval)
          }
        }, 500);
      }
  });
  // for step
  document.querySelector('.spz-2004 #popup_request_a_demo .wcs-popup-heading').insertAdjacentHTML("afterend",`
  <div class="step1-wrapper step-wrapper">
    <div class="sub">What best describes you? </div>
    <div class="option-wrapper column3">
      <div class="option continue">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735375/KomodoHealth/2004/icon1-1.svg" class="default" width="32" height="32" alt="Life Sciences"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735375/KomodoHealth/2004/icon1-1-h.svg" class="hover" width="32" height="32" alt="Life Sciences hover"/>
        </div>
        <div class="text">Life Sciences </div>
      </div>
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735376/KomodoHealth/2004/icon1-2.svg" class="default" width="32" height="32" alt="Consultancies"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735375/KomodoHealth/2004/icon1-2-h.svg" class="hover" width="32" height="32" alt="Consultancies hover"/>
        </div>
        <div class="text">Consultancies</div>
      </div>
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735376/KomodoHealth/2004/icon1-3.svg" class="default" width="32" height="32" alt="Partnerships"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735376/KomodoHealth/2004/icon1-3-h.svg" class="hover" width="32" height="32" alt="Partnerships hover"/>
        </div>
        <div class="text">Partnerships</div>
      </div>
    </div>
    <div class="option-wrapper column2 no-margin-bottom">
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735377/KomodoHealth/2004/icon1-4.svg" class="default" width="32" height="32" alt="Payers"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735377/KomodoHealth/2004/icon1-4-h.svg" class="hover" width="32" height="32" alt="Payers hover"/>
        </div>
        <div class="text">Payers</div>
      </div>
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735375/KomodoHealth/2004/icon1-5.svg" class="default" width="32" height="32" alt="Other"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735378/KomodoHealth/2004/icon1-5-h.svg" class="hover" width="32" height="32" alt="Other hover"/>
        </div>
        <div class="text">Other</div>
      </div>
    </div>
    <div class="error-message">Please choose one answer</div>
    <div class="next next-1">NEXT</div>
  </div>
  <div class="step2-wrapper step-wrapper hide">
    <div class="sub">What best describes you? </div>
    <div class="option-wrapper column3">
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735375/KomodoHealth/2004/icon2-1.svg" class="default" width="32" height="32" alt="Clinical Development"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735375/KomodoHealth/2004/icon2-1-h.svg" class="hover" width="32" height="32" alt="Clinical Development hover"/>
        </div>
        <div class="text">Clinical Development </div>
      </div>
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735378/KomodoHealth/2004/icon2-2.svg" class="default" width="32" height="32" alt="Commercial"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735376/KomodoHealth/2004/icon2-2-h.svg" class="hover" width="32" height="32" alt="Commercial hover"/>
        </div>
        <div class="text">Commercial</div>
      </div>
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735378/KomodoHealth/2004/icon2-3.svg" class="default" width="32" height="32" alt="HEOR"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735379/KomodoHealth/2004/icon2-3-h.svg" class="hover" width="32" height="32" alt="HEOR hover"/>
        </div>
        <div class="text">HEOR</div>
      </div>
    </div>
    <div class="option-wrapper column3 no-margin-bottom">
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735378/KomodoHealth/2004/icon2-4.svg" class="default" width="32" height="32" alt="Market Access"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735378/KomodoHealth/2004/icon2-4-h.svg" class="hover" width="32" height="32" alt="Market Access hover"/>
        </div>
        <div class="text">Market Access </div>
      </div>
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735380/KomodoHealth/2004/icon2-5.svg" class="default" width="32" height="32" alt="Medical Affairs"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735380/KomodoHealth/2004/icon2-5-h.svg" class="hover" width="32" height="32" alt="Medical Affairs hover"/>
        </div>
        <div class="text">Medical Affairs</div>
      </div>
      <div class="option">
        <div class="image-wrapper">
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735380/KomodoHealth/2004/icon2-6.svg" class="default" width="32" height="32" alt="Other"/>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1698735380/KomodoHealth/2004/icon2-6-h.svg" class="hover" width="32" height="32" alt="Other hover"/>
        </div>
        <div class="text">Other</div>
      </div>
    </div>
    <div class="error-message">Please choose one answer</div>
    <div class="next next-2">NEXT</div>
  </div>
  `)
  document.querySelector('.spz-2004 #popup_request_a_demo .step-wrapper .next-1').addEventListener("click",function(){
    if(!(document.querySelector('.spz-2004 #popup_request_a_demo .step1-wrapper .selected'))){
      document.querySelector('.spz-2004 #popup_request_a_demo .step1-wrapper .error-message').classList.add('show');
    } else{
      if(document.querySelector('.spz-2004 #popup_request_a_demo .step1-wrapper .selected').classList.contains('continue')){
        document.querySelector('.spz-2004 #popup_request_a_demo .step1-wrapper').classList.add("hide");
        document.querySelector('.spz-2004 #popup_request_a_demo .step2-wrapper').classList.remove("hide")
      } else{
        document.querySelector('.spz-2004 #popup_request_a_demo .step1-wrapper').classList.add("hide");
        document.querySelector('.spz-2004 #new-formDemo-wrapper').classList.add("show")
      }
    }
  })
  document.querySelector('.spz-2004 #popup_request_a_demo .step-wrapper .next-2').addEventListener("click",function(){
    if(!(document.querySelector('.spz-2004 #popup_request_a_demo .step2-wrapper .selected'))){
      document.querySelector('.spz-2004 #popup_request_a_demo .step2-wrapper .error-message').classList.add('show');
    } else{
      document.querySelector('.spz-2004 #popup_request_a_demo .step2-wrapper').classList.add("hide");
      document.querySelector('.spz-2004 #new-formDemo-wrapper').classList.add("show")
    }
  })
  document.querySelector('.spz-2004 #popup_request_a_demo .step1-wrapper').addEventListener("click",function(e){
    if(e.target.closest('.option') && !e.target.closest('.option').classList.contains('selected')){
      if(document.querySelector('.spz-2004 #popup_request_a_demo .step1-wrapper .selected')){
        document.querySelector('.spz-2004 #popup_request_a_demo .step1-wrapper .selected').classList.remove('selected')
      }
      if(document.querySelector('.spz-2004 #popup_request_a_demo .step1-wrapper .error-message.show')){
        document.querySelector('.spz-2004 #popup_request_a_demo .step1-wrapper .error-message.show').classList.remove("show")  
      }
      e.target.closest('.option').classList.add("selected")
    }
  })
  document.querySelector('.spz-2004 #popup_request_a_demo .step2-wrapper').addEventListener("click",function(e){
    if(e.target.closest('.option') && !e.target.closest('.option').classList.contains('selected')){
      if(document.querySelector('.spz-2004 #popup_request_a_demo .step2-wrapper .selected')){
        document.querySelector('.spz-2004 #popup_request_a_demo .step2-wrapper .selected').classList.remove('selected')
      }
      if(document.querySelector('.spz-2004 #popup_request_a_demo .step2-wrapper .error-message.show')){
        document.querySelector('.spz-2004 #popup_request_a_demo .step2-wrapper .error-message.show').classList.remove("show")  
      }
      e.target.closest('.option').classList.add("selected")
    }
  })
 
  //for form
  document.querySelector('.spz-2004 #popup_request_a_demo .wcs-popup-heading').insertAdjacentHTML("afterend","<div id='new-formDemo-wrapper'><div class='lds-dual-ring'></div></div>")
  document.querySelector('.spz-2004 #popup_request_a_demo .wcs-popup-heading h2').innerHTML="Get a demo";
   //check if submitted
  if(sessionStorage.getItem("spz-2004")){
    document.querySelector('.spz-2004 #popup_request_a_demo .step1-wrapper').classList.add("hide");
    document.querySelector('.spz-2004 #new-formDemo-wrapper').classList.add("show")
  }
  function loadDemoForm(){
    loadJS('//js.hsforms.net/forms/embed/v2.js', function(){
      hbspt.forms.create({
        region: "na1",
        portalId: "6374024",
        formId: "bd5fd709-5849-4d8c-95a3-b52f5a1453c0",
        target: '.spz-2004 #new-formDemo-wrapper',
        onFormSubmitted: function($form) {
          console.log('Report conversion...');
          sessionStorage.setItem("spz-2004", "submitted");
          gtag_report_conversion();
        },
        isInsideFrame: true,
        inlineMessage: "Thanks for submitting the form.",
        onFormReady: function($form){
          const allFieldset = document.querySelectorAll('.spz-2004 #new-formDemo-wrapper .form-columns-2,.spz-2004 #new-formDemo-wrapper .form-columns-1,.spz-2004 #new-formDemo-wrapper .form-columns-0')
          for(let i=0;i<allFieldset.length;i++){
            allFieldset[i].replaceWith(...allFieldset[i].childNodes)
          }
          //long form
          if(document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_firstname')){
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_firstname').classList.add("width50","clear");
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_lastname').classList.add("width50","with-margin");
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_company').classList.add("width50","with-margin");
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_jobtitle').classList.add("width50","clear");
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_email').classList.add("width50","clear");
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs-dependent-field').classList.add("clear");
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_phone').classList.add("width50","with-margin");
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_consent_countries').classList.add("clear");
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs-richtext').classList.add("clear","pp-parent");
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_submit').classList.add("clear","submit-parent");
            insertAfter(document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_email'),document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_lastname'));
            insertAfter(document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_company'),document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_email'));
            insertAfter(document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_jobtitle'),document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_company'));
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_firstname label span').innerHTML='First Name';
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_lastname label span').innerHTML='Last Name';
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_email label span').innerHTML='Email';
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_company label span').innerHTML='Company';
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_phone label span').innerHTML='Phone';
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_jobtitle label span').innerHTML='Job Title (Optional)';
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_consent_countries label span').innerHTML='Country';
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_consent_countries select').value='United States'
            trigger(document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_consent_countries select'), 'change');
            trigger(document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_consent_countries select'), 'blur');
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_consent_countries select option:first-child').remove();                           
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_consent_countries').classList.add("hasValue");
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_submit input').value="SUBMIT";
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_buying_timeline select').value="Immediately";
            trigger(document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_buying_timeline select'), 'change');
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_consent_countries select').insertAdjacentHTML("afterend","<div class='arrow-select'></div>")
            const step1Checking = setInterval(function(){
              if(document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_firstname input').value!="" &&
              document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_lastname input').value!="" &&
              document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_company input').value!="" &&
              document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_email input').value!="") {
                clearInterval(step1Checking);
                document.querySelector('.spz-2004 #new-formDemo-wrapper').classList.add("step2")
              }
            },200)
          }
          //short form
          else {
            if(document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_email')){ 
              document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_email label span').innerHTML='Email';
              document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_email').classList.add("clear");
            }
            if(document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_buying_timeline select')){
              document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_buying_timeline select').value="Immediately";
              trigger(document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_buying_timeline select'), 'change');
            }
            document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_submit input').value="SUBMIT";
          }
          var allInput = document.querySelectorAll('.spz-2004 #new-formDemo-wrapper .hs-input');
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
          document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_submit input').addEventListener("click",function(){
            allInput.forEach(function (e) {          
              errorState(e);          
            })
            if(document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_consent_countries select')){
              trigger(document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_consent_countries select'), 'change');
            }
            let i=0;
            const submitInterval =setInterval(() => {
              if(document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_submit input').value!="SUBMIT"){
                clearInterval(submitInterval)
                document.querySelector('.spz-2004 #new-formDemo-wrapper .hs_submit input').value="SUBMIT";
              }
              i++;
              if(i>80){
                clearInterval(submitInterval)
              }
            }, 5);
          })
        }
      })
    }, document.body);
  }
  loadDemoForm()
}
})
